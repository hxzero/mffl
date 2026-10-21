/* MFFL public tracker — single-file app logic. Reads rosters, standings and
   scores from the Firebase data API. Scores are computed centrally by a
   single ESPN poller and stored in Firebase; this page never calls ESPN. */
(function () {
'use strict';

var TEAMS = ['emorgrid', 'hxzero', 'mickandcheese', 'preparetobecrusheddoodles', 'silveroregano'];
var TEAM_LABEL = {
  emorgrid: 'EMORGRID', hxzero: 'HXZERO', mickandcheese: 'MICKANDCHEESE',
  preparetobecrusheddoodles: 'PREPARETOBECRUSHEDDOODLES', silveroregano: 'SILVEROREGANO'
};
/* per-team namewall registry, sampled from each league icon (tracker
   TEAM_NAMEWALL_THEMES): [accent, fill]; bg3d derives the full theme */
var THEMES = {
  emorgrid: ['#FF0137', '#372C93'], hxzero: ['#0DC35F', '#075635'],
  mickandcheese: ['#191718', '#191718'],
  preparetobecrusheddoodles: ['#E3CC80', '#B12128'], silveroregano: ['#B050E0', '#721C95']
};

/* WEEK is only a fallback: at boot the page detects the current week from
   Firebase (the newest week that has rosters), so week rollovers need no
   redeploy. SEASON likewise comes from the standings/rosters docs. */
var WEEK = 6, SEASON = 2026;
var POLL_MS = 120000;
/* Per-player game state comes from kickoff math only (no extra polling):
   a player is live from kickoff until GAME_WINDOW_MS after it, then final. */
var GAME_WINDOW_MS = 3.5 * 60 * 60 * 1000;
function gameState(pl, now) {
  var ko = new Date(pl.kickoff).getTime();
  if (now < ko) return 'pre';
  if (state.scoresFinal || now >= ko + GAME_WINDOW_MS) return 'final';
  return 'live';
}

var state = {
  weekDocs: {},         /* week number -> canonical /weeks/<n> document */
  rosters: null,        /* roster state for the SELECTED week (see applyWeek) */
  scores: {},           /* teamId -> total for the SELECTED week */
  playerScores: {},     /* teamId -> { name -> pts } for the selected week */
  playerStats: {},      /* teamId -> { name -> stat line } for the selected week */
  gamesLive: false,
  leader: null,
  view: 'scores',
  scoresWeek: 6,        /* the week the Scores page is showing */
  rosterTeam: null,
  pollTimer: null,
  waveFinal: false
};

function $(id) { return document.getElementById(id); }
function fmt(n) { return (Math.round(n * 100) / 100).toFixed(2); }

/* ---------------- boot ----------------
   Canonical store (2026-10-19 migration): one document per week at
   /mffl/weeks/<n> carrying roster + scores together:
   { season, slate, week, final, live, updatedAt, teams: { tid:
   { status, total, players: [ { slot, name, team, kickoff, matchup,
   salary, pts, stats } ] } } }. The poller is the only writer; this
   page derives its rosters / scores / standings state from those docs. */
var API_BASE = 'https://mffl-79e7b-default-rtdb.firebaseio.com/mffl';
/* Point the Scores page's working state (rosters, totals, per-player
   points) at week W's canonical document. The header theme, helmet and
   league icon follow from state.scores via currentLeader(), so the page
   themes itself to whichever team leads — or won — the selected week. */
function applyWeek(W) {
  var doc = state.weekDocs[String(W)];
  state.scoresWeek = W;
  if (!doc || !doc.teams) { state.rosters = { teams: {} }; return; }
  var rTeams = {};
  TEAMS.forEach(function (tid) {
    var e = doc.teams[tid];
    if (!e) return;
    state.scores[tid] = e.total || 0;
    var ps = {}, st = {};
    (e.players || []).forEach(function (p) { ps[p.name] = p.pts || 0; st[p.name] = p.stats || null; });
    state.playerScores[tid] = ps;
    state.playerStats[tid] = st;
    var t = { status: e.status, players: (e.players || []).map(function (p) {
      return { kickoff: p.kickoff, matchup: p.matchup, name: p.name, salary: p.salary, slot: p.slot, team: p.team };
    }) };
    if (e.salary !== undefined) { t.salary = e.salary; t.salaryCap = e.salaryCap; }
    rTeams[tid] = t;
  });
  state.rosters = { season: doc.season, slate: doc.slate, week: W, teams: rTeams };
  state.scoresFinal = !!doc.final;
  state.gamesLive = W === WEEK ? !!doc.live : false;
}

/* A team's season series for the standings/drop computation: every final
   week's total, plus the current week once it is final or the team has
   actually scored (a pre-kickoff 0.00 is not data). */
function weekSeries(tid) {
  var out = [];
  for (var w = 1; w <= WEEK; w++) {
    var doc = state.weekDocs[String(w)];
    var t = doc && doc.teams && doc.teams[tid] ? (doc.teams[tid].total || 0) : 0;
    if (w < WEEK) out.push({ week: w, total: t });
    else if (doc && doc.final) out.push({ week: w, total: t });
    else if (t > 0) out.push({ week: w, total: t });
  }
  return out;
}
/* The single week dropped from a team's season total (earliest week wins
   ties), or null when fewer than two weeks count. */
function droppedWeekFor(tid) {
  var s = weekSeries(tid);
  if (s.length < 2) return null;
  var drop = s[0];
  s.forEach(function (e) { if (e.total < drop.total) drop = e; });
  return drop.week;
}

async function boot() {
  /* Auto-detect the current week: the newest week document in Firebase
     (same discovery the central poller uses). Falls back to WEEK above if
     the lookup fails, so the page still renders. */
  try {
    var shRes = await fetch(API_BASE + '/weeks.json?shallow=true', { cache: 'no-store' });
    if (shRes.ok) {
      var sh = await shRes.json();
      var wks = Object.keys(sh || {}).map(Number).filter(function (n) { return !isNaN(n) && n > 0; });
      if (wks.length) {
        WEEK = Math.max.apply(null, wks);
        state.scoresWeek = WEEK;
      }
    }
  } catch (e) { /* keep fallback WEEK */ }
  try {
    var allRes = await fetch(API_BASE + '/weeks.json', { cache: 'no-store' });
    var all = await allRes.json();
    Object.keys(all || {}).forEach(function (k) {
      if (all[k] && all[k].teams) state.weekDocs[String(k)] = all[k];
    });
    if (!state.weekDocs[String(WEEK)]) throw new Error('no current week doc');
    applyWeek(WEEK);
  } catch (e) {
    var wn = $('week-name');
    if (wn) wn.textContent = 'OFFLINE';
    return;
  }
  TEAMS.forEach(function (t) { state.scores[t] = 0; state.playerScores[t] = {}; });

  /* preload helmets + badges */
  TEAMS.forEach(function (t) {
    ['assets/img/helmet-' + t + '.png', 'assets/img/league-' + t + '.png', 'assets/img/team-' + t + '.png'].forEach(function (u) {
      var im = new Image(); im.src = u;
    });
  });

  renderAll();
  startCountdown();
  wireNav();
  $('week-name').textContent = 'WEEK ' + WEEK;
  $('week-picker').hidden = false; /* the picker lives on the Scores view */
  updatePickerButtons();

  scoresUpdate().then(schedulePolling);
}

function schedulePolling() {
  if (state.waveFinal || state.pollTimer) return;
  state.pollTimer = setInterval(function () {
    if (state.waveFinal) { clearInterval(state.pollTimer); state.pollTimer = null; return; }
    scoresUpdate();
  }, POLL_MS);
}

/* ---------------- countdown ---------------- */
function firstKickoff() {
  var t = Infinity;
  Object.keys(state.rosters.teams).forEach(function (tid) {
    (state.rosters.teams[tid].players || []).forEach(function (p) {
      var k = new Date(p.kickoff).getTime();
      if (k < t) t = k;
    });
  });
  return t;
}
function startCountdown() {
  var el = $('countdown');
  function tick() {
    var diff = firstKickoff() - Date.now();
    if (diff <= 0) { el.classList.add('hidden'); return; }
    el.classList.remove('hidden');
    var d = Math.floor(diff / 86400000),
        h = Math.floor(diff % 86400000 / 3600000),
        m = Math.floor(diff % 3600000 / 60000);
    el.textContent = 'Kickoff in ' + d + 'd ' + String(h).padStart(2, '0') + 'h ' + String(m).padStart(2, '0') + 'm';
  }
  tick();
  setInterval(tick, 30000);
}

/* ---------------- rendering ---------------- */
function currentLeader() {
  var best = TEAMS[0], bestScore = -Infinity;
  TEAMS.forEach(function (t) {
    var s = state.scores[t] || 0;
    if (s > bestScore) { bestScore = s; best = t; }
  });
  return best;
}
function sortedTeams() {
  return TEAMS.slice().sort(function (a, b) { return (state.scores[b] || 0) - (state.scores[a] || 0); });
}
/* The Standings leader: the team ranked #1 by the standings model the
   Standings view renders (standingsRows — season totals with each
   team's single worst week dropped, derived from all week docs). */
function standingsLeader() {
  var rows = standingsRows();
  return rows.length ? rows[0].team : currentLeader();
}
/* ---- view-scoped theming (decoupled) ----
   The 3D background text wall (#bg3d) and its theme-driven backdrop
   tint (#bg-tint / #bg-fallback — both set inside bg3d.js from the same
   setLeader call) belong to the Scores page ONLY. They are driven
   exclusively by applyScoresTheme(), from the viewed week's leader,
   and only while the Scores view is active: navigating to Standings
   never rebuilds, re-names, re-colors or animates the wall and never
   retints the backdrop. The Standings page themes itself separately
   through applyStandingsTheme(), which touches standings-scoped
   elements only and never calls window.mfflBg, so no standings-leader
   state can leak into the background; returning to Scores re-applies
   the Scores leader's theme as usual. */
function applyScoresTheme() {
  if (state.view !== 'scores') return;
  var tid = currentLeader();
  if (window.mfflBg && tid && THEMES[tid]) {
    window.mfflBg.setLeader(TEAM_LABEL[tid], THEMES[tid][0], THEMES[tid][1]);
  }
}
/* Standings-scoped theming: the standings leader's theme applies to the
   Standings view's own elements — its header logo (#standings-logo) and
   the scoped theme channel on #standings-view — decoupled from the
   Scores background machinery. */
function applyStandingsTheme() {
  var tid = standingsLeader();
  if (!tid) return;
  var sLogo = $('standings-logo');
  if (sLogo && sLogo.getAttribute('src') !== 'assets/img/league-' + tid + '.png') {
    sLogo.src = 'assets/img/league-' + tid + '.png';
  }
  var view = $('standings-view');
  if (view && THEMES[tid]) {
    view.dataset.leader = tid;
    view.style.setProperty('--standings-accent', THEMES[tid][0]);
    view.style.setProperty('--standings-fill', THEMES[tid][1]);
  }
}

function renderAll() {
  renderHeader();
  renderLeaderboard();
  if (state.rosterTeam) renderRoster(state.rosterTeam);
  renderStandings();
}

function renderHeader() {
  var leader = currentLeader();
  var prev = state.leader;
  state.leader = leader;
  var helmet = $('leader-helmet');
  /* Keep the Standings view's own theming fresh (its header logo follows
     the STANDINGS leader) without touching the background: that path is
     applyStandingsTheme(), which never drives the wall or the tint. */
  applyStandingsTheme();

  if (prev !== leader) {
    /* lead change: helmet exits downward, staggered fade-in */
    var wrap = $('helmet-wrap');
    wrap.classList.add('swap-out');
    setTimeout(function () {
      helmet.src = 'assets/img/helmet-' + leader + '.png';
      wrap.classList.remove('swap-out');
      wrap.classList.add('swap-in');
      setTimeout(function () { wrap.classList.remove('swap-in'); }, 600);
    }, 460);
    applyScoresTheme();
  } else {
    if (helmet.getAttribute('src') !== 'assets/img/helmet-' + leader + '.png') helmet.src = 'assets/img/helmet-' + leader + '.png';
    applyScoresTheme();
  }
}

function renderLeaderboard() {
  var board = $('leaderboard');
  var order = sortedTeams();
  /* FLIP: record positions before reorder */
  var prevTops = {};
  Array.prototype.forEach.call(board.children, function (row) {
    prevTops[row.dataset.team] = row.getBoundingClientRect().top;
  });

  order.forEach(function (tid) {
    var row = board.querySelector('[data-team="' + tid + '"]');
    if (!row) {
      row = document.createElement('button');
      row.className = 'team-row';
      row.dataset.team = tid;
      row.innerHTML =
        '<img class="badge" alt=""><span class="team-main"><span class="team-name display"></span><span class="dots" aria-hidden="true"></span></span><span class="team-score display"></span>' +
        '<span class="row-arrow"><svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="#9d9ea6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
      row.querySelector('.badge').src = 'assets/img/team-' + tid + '.png';
      row.querySelector('.team-name').textContent = TEAM_LABEL[tid];
      row.addEventListener('click', function () { openRoster(tid); });
      board.appendChild(row);
    }
    var scoreEl = row.querySelector('.team-score');
    scoreEl.innerHTML = fmtScoreHTML(state.scores[tid] || 0);
    /* dropped-week indicator, merged from the old standings week views:
       strike the score when the viewed week is the one this team drops
       from its season total */
    scoreEl.classList.toggle('dropped', droppedWeekFor(tid) === state.scoresWeek);
    /* per-player state dots under the team name: one per rostered player,
       in slot order — upcoming (dim) / live (red, pulsing) / final (gold) */
    var dotsEl = row.querySelector('.dots');
    if (dotsEl) {
      var entry = state.rosters && state.rosters.teams ? state.rosters.teams[tid] : null;
      var players = entry && entry.players ? entry.players : [];
      if (players.length) {
        var nowD = Date.now();
        var states = players.map(function (pl) { return gameState(pl, nowD); });
        /* all players final -> the dots carry no information; hide them */
        if (states.every(function (s) { return s === 'final'; })) {
          dotsEl.innerHTML = '';
          dotsEl.style.display = 'none';
        } else {
          dotsEl.innerHTML = states.map(function (s) {
            return '<i class="dot dot-' + s + '"></i>';
          }).join('');
          dotsEl.style.display = '';
        }
      } else {
        dotsEl.innerHTML = '';
        dotsEl.style.display = 'none';
      }
    }
    board.appendChild(row); /* re-append in sorted order */
  });

  /* ladder animation */
  Array.prototype.forEach.call(board.children, function (row) {
    var oldTop = prevTops[row.dataset.team];
    if (oldTop === undefined) return;
    var dy = oldTop - row.getBoundingClientRect().top;
    if (dy) {
      row.style.transition = 'none';
      row.style.transform = 'translateY(' + dy + 'px)';
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          row.style.transition = '';
          row.style.transform = '';
        });
      });
    }
  });
}

/* ---------------- roster view ----------------
   Bottom-sheet pattern on mobile: the panel slides up from the bottom
   on open and slides back down on close (the hidden attribute lands
   only after the slide finishes). Desktop keeps the instant swap. */
var sheetHideTimer = null;
function openRoster(tid) {
  state.rosterTeam = tid;
  $('scores-wrap').classList.add('roster-open');
  document.body.classList.add('roster-open');
  var rv = $('roster-view');
  if (sheetHideTimer) { clearTimeout(sheetHideTimer); sheetHideTimer = null; }
  rv.hidden = false;
  $('roster-scroll').scrollTop = 0;
  renderRoster(tid);
  window.scrollTo(0, 0);
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { rv.classList.add('sheet-open'); });
  });
}
function closeRoster() {
  state.rosterTeam = null;
  var rv = $('roster-view');
  rv.classList.remove('sheet-open');
  if (window.matchMedia('(min-width: 1024px)').matches) {
    rv.hidden = true;
    $('scores-wrap').classList.remove('roster-open');
    document.body.classList.remove('roster-open');
    return;
  }
  /* keep the roster-mode classes (and the X) until the sheet is gone,
     so the paging pill doesn't pop in over the departing sheet */
  if (sheetHideTimer) clearTimeout(sheetHideTimer);
  sheetHideTimer = setTimeout(function () {
    sheetHideTimer = null;
    rv.hidden = true;
    $('scores-wrap').classList.remove('roster-open');
    document.body.classList.remove('roster-open');
  }, 400);
}

function fmtScoreHTML(v) {
  var s = fmt(v), dot = s.indexOf('.');
  if (dot < 0) return s;
  return s.slice(0, dot) + '<span class="frac">' + s.slice(dot) + '</span>';
}
function matchupHTML(pl) {
  if (!pl.matchup) return '';
  var parts = pl.matchup.split(' @ ');
  if (parts.length !== 2) return '<span class="matchup">' + escapeHtml(pl.matchup) + '</span>';
  var a = parts[0] === pl.team ? '<span class="own">' + escapeHtml(parts[0]) + '</span>' : escapeHtml(parts[0]);
  var b = parts[1] === pl.team ? '<span class="own">' + escapeHtml(parts[1]) + '</span>' : escapeHtml(parts[1]);
  return '<span class="matchup">' + a + ' @ ' + b + '</span>';
}
function statLine(pl, st) {
  if (!st) return 'No stats yet';
  if (pl.slot === 'DEF') {
    var d = (st.offPtsAllowed || 0) + ' PA · ' + (st.sacks || 0) + ' SACK · ' + (st.ints || 0) + ' INT';
    if (st.fr) d += ' · ' + st.fr + ' FR';
    if (st.defTD) d += ' · ' + st.defTD + ' DEF TD';
    if (st.retTD) d += ' · ' + st.retTD + ' RET TD';
    if (st.safeties) d += ' · ' + st.safeties + ' SAF';
    if (st.blocked) d += ' · ' + st.blocked + ' BLK';
    return d;
  }
  var parts = [];
  if (st.passYds || st.passTD || st.passINT) {
    var p = (st.passYds || 0) + ' PY';
    if (st.passTD) p += ' · ' + st.passTD + ' PTD';
    if (st.passINT) p += ' · ' + st.passINT + ' INT';
    parts.push(p);
  }
  if (st.rushYds || st.rushTD) {
    var r = (st.rushYds || 0) + ' RUSH YDS';
    if (st.rushTD) r += ' · ' + st.rushTD + ' RUSH TD';
    parts.push(r);
  }
  if (st.rec || st.recYds || st.recTD) {
    var c = (st.rec || 0) + ' REC · ' + (st.recYds || 0) + ' REC YDS';
    if (st.recTD) c += ' · ' + st.recTD + ' REC TD';
    parts.push(c);
  }
  if (st.fumLost) parts.push(st.fumLost + ' FL');
  if (!parts.length) return pl.slot === 'QB' ? '0 PY' : 'No stats yet';
  return parts.join(' · ');
}

function renderRoster(tid) {
  $('roster-team-name').textContent = TEAM_LABEL[tid];
  $('roster-badge').src = 'assets/img/team-' + tid + '.png';
  $('roster-state').textContent = 'WEEK ' + state.scoresWeek;
  $('roster-total').innerHTML = fmtScoreHTML(state.scores[tid] || 0);
  var list = $('roster-list');
  list.innerHTML = '';
  var entry = state.rosters.teams[tid];
  if (!entry || entry.status !== 'entered' || !entry.players.length) {
    $('lineup-meta').textContent = '';
    var p = document.createElement('div');
    p.className = 'player-row';
    p.innerHTML = '<span class="player-name" style="grid-column:1 / -1;font-family:inherit;font-size:15px;color:#9d9ea6">Lineup pending — not entered yet.</span>';
    list.appendChild(p);
    return;
  }
  var cap = (typeof entry.salary === 'number') ? entry.salary
    : entry.players.reduce(function (a, pl) { return a + (pl.salary || 0); }, 0);
  $('lineup-meta').textContent = entry.players.length + ' roster spots' +
    (cap > 0 ? ' · $' + cap.toLocaleString('en-US') + ' cap used' : '');
  var statsMap = (state.playerStats || {})[tid] || {};
  var now = Date.now();
  entry.players.forEach(function (pl) {
    var row = document.createElement('div');
    var concealed = now < new Date(pl.kickoff).getTime();
    if (concealed) {
      row.className = 'player-row concealed';
      row.innerHTML =
        '<span class="slot">' + pl.slot + '</span>' +
        '<div class="player-main">' +
          '<div class="name-line"><span class="player-name">Revealed at kickoff.</span><span class="salary">—</span></div>' +
          '<div class="meta-line"><span class="meta-hidden">Player info hidden until the game starts</span></div>' +
        '</div>' +
        '<span class="roster-score display">—</span>';
    } else {
      var gs = gameState(pl, now);
      var live = gs === 'live';
      var fin = gs === 'final';
      row.className = 'player-row' + (live ? ' live' : '');
      var pts = (state.playerScores[tid] || {})[pl.name];
      var sal = pl.salary ? '<span class="salary">$' + pl.salary.toLocaleString('en-US') + '</span>' : '';
      row.innerHTML =
        '<span class="slot">' + pl.slot + '</span>' +
        '<div class="player-main">' +
          '<div class="name-line"><span class="player-name">' + escapeHtml(pl.name) + '</span>' + sal + '</div>' +
          '<div class="meta-line">' + matchupHTML(pl) +
            (live ? '<span class="pill live"><i></i>Live</span>' : (fin ? '<span class="pill final">FINAL</span>' : '')) +
          '</div>' +
          '<p class="stat-line">' + escapeHtml(statLine(pl, statsMap[pl.name])) + '</p>' +
        '</div>' +
        '<span class="roster-score display">' + (pts == null ? '—' : fmtScoreHTML(pts)) + '</span>';
    }
    list.appendChild(row);
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

/* ---------------- nav ---------------- */
function wireNav() {
  $('nav-scores').addEventListener('click', function () { setView('scores'); });
  $('nav-standings').addEventListener('click', function () { setView('standings'); });
  $('picker-close').addEventListener('click', closeRoster);
  $('sheet-close').addEventListener('click', closeRoster);
  $('week-prev').addEventListener('click', function () { setScoresWeek(state.scoresWeek - 1); });
  $('week-next').addEventListener('click', function () { setScoresWeek(state.scoresWeek + 1); });
}
function setView(v) {
  state.view = v;
  /* Full-bleed system bars: tint the Android status/gesture bars to the
     active view's own background — dark on Scores, light on Standings —
     instead of one static near-black strip on both. */
  var tc = document.querySelector('meta[name="theme-color"]');
  if (tc) tc.setAttribute('content', v === 'standings' ? '#f3f2ee' : '#101014');
  /* and the root canvas itself follows the view, so the page background
     extends behind the system bars edge to edge */
  document.documentElement.classList.toggle('light', v === 'standings');
  $('nav-scores').classList.toggle('active', v === 'scores');
  $('nav-standings').classList.toggle('active', v === 'standings');
  $('bottomnav').classList.toggle('light', v === 'standings');
  if (v === 'scores') { $('nav-scores').setAttribute('aria-current', 'page'); $('nav-standings').removeAttribute('aria-current'); }
  else { $('nav-standings').setAttribute('aria-current', 'page'); $('nav-scores').removeAttribute('aria-current'); }
  $('scores-wrap').hidden = v !== 'scores';
  $('standings-view').hidden = v !== 'standings';
  $('week-picker').hidden = v !== 'scores';
  if (v === 'scores') { if (state.rosterTeam) closeRoster(); renderHeader(); renderLeaderboard(); }
  else renderStandings();
  window.scrollTo(0, 0);
}

/* ---------------- scores week paging ----------------
   The week picker sits on the Scores view (fixed above the bottom nav).
   Paging re-points the whole Scores page — leaderboard, header theme,
   helmet, icon, and any lineup — at the selected week's document. Live
   updates keep refreshing the current week underneath without moving
   the user off the week they are viewing. */
/* The arrows disable at the ends of the week range: no paging past
   Week 1 or past the current week. */
function updatePickerButtons() {
  $('week-prev').disabled = state.scoresWeek <= 1;
  $('week-next').disabled = state.scoresWeek >= WEEK;
}

function setScoresWeek(w) {
  w = Math.max(1, Math.min(WEEK, w));
  $('week-name').textContent = 'WEEK ' + w;
  if (w === state.scoresWeek) { updatePickerButtons(); return; }
  if (state.rosterTeam) closeRoster();
  state.scoresWeek = w;
  updatePickerButtons();
  applyWeek(w);
  renderHeader();
  renderLeaderboard();
}

/* ---------------- standings ----------------
   The Standings page is the season leaderboard only: each team's totals
   across all weeks with data, with their single worst week dropped. */
function standingsRows() {
  return TEAMS.map(function (tid) {
    var s = weekSeries(tid);
    var total = 0;
    s.forEach(function (e) { total += e.total; });
    var dw = droppedWeekFor(tid);
    if (dw !== null) {
      for (var i = 0; i < s.length; i++) {
        if (s[i].week === dw) { total -= s[i].total; break; }
      }
    }
    return { team: tid, total: total };
  }).sort(function (a, b) { return b.total - a.total; });
}

function renderStandings() {
  var list = $('standings-list');
  list.innerHTML = '';
  /* Standings theming: this view's own elements (header logo and the
     scoped theme channel on #standings-view) follow the team at the top
     of THESE standings (season totals, worst week dropped) — not the
     Scores view's viewed-week leader. This path is deliberately
     decoupled from the background: rendering Standings never calls the
     Scores-only applyScoresTheme(), so the text wall and its tint are
     left exactly as the Scores view set them. */
  applyStandingsTheme();
  standingsRows().forEach(function (r, i) {
    var row = document.createElement('div');
    row.className = 'standing-row';
    row.innerHTML =
      '<span class="standings-rank">' + (i + 1) + '</span>' +
      '<img class="badge" src="assets/img/team-' + r.team + '.png" alt="">' +
      '<span class="standings-name">' + TEAM_LABEL[r.team] + '</span>' +
      '<span class="standings-num">' + fmt(r.total) + '</span>';
    list.appendChild(row);
  });
}

/* ---------------- scores (from Firebase) ----------------
   Reads the current week's canonical document at /mffl/weeks/<week>
   (see boot). This page only reads. */
async function scoresUpdate() {
  var data;
  try {
    var res = await fetch(API_BASE + '/weeks/' + WEEK + '.json', { cache: 'no-store' });
    if (!res.ok) return;
    data = await res.json();
  } catch (e) { return; }
  if (!data || !data.teams) return;
  state.weekDocs[String(WEEK)] = data;
  if (data.final) state.waveFinal = true;
  /* refresh the displayed state only when the user is viewing the
     current week — a past week stays put (their choice) */
  if (state.scoresWeek === WEEK) applyWeek(WEEK);
  renderAll();
}

/* PWA: register the app-shell service worker (installability + fast
   loads). Failures are non-fatal — the page works identically without it. */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  });
}

document.addEventListener('DOMContentLoaded', boot);
})();
