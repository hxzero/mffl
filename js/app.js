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

/* WEEK is the newest week document in Firebase (the newest week that
   has rosters): the Standings derivation and the live poll key off it.
   It is detected at boot, so standings rollovers need no redeploy. The
   Scores DISPLAY week is a separate, calendar-driven value — CAL_WEEK
   below. SEASON likewise comes from the standings/rosters docs. */
var WEEK = 6, SEASON = 2026;

/* ---------------- calendar display week ----------------
   The Scores tab's week is a pure function of the date: Week 1's
   Tuesday is 2026-09-08 (America/Los_Angeles) and each week rolls over
   Tuesday 00:00 PT, clamped to the 18-week season. A calendar week
   whose document has no rosters yet renders in the pending state (see
   selectWeek). Standings never consult this — they derive solely from
   week documents, so a roster-less calendar week cannot leak into
   their weeks, totals, or defaults. */
var CAL_WEEK = 6;
function ptDateMs(now) {
  var parts = {};
  new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles',
    year: 'numeric', month: '2-digit', day: '2-digit' })
    .formatToParts(now).forEach(function (p) { parts[p.type] = p.value; });
  return Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day));
}
function calendarWeek(now) {
  var anchor = Date.UTC(2026, 8, 8); /* Tue 2026-09-08: Week 1's Tuesday */
  var w = Math.floor((ptDateMs(now) - anchor) / 604800000) + 1;
  return Math.max(1, Math.min(18, w));
}
/* The UTC instant of a wall-clock time in America/Los_Angeles. */
function ptInstant(y, mo, d, h, mi) {
  var target = Date.UTC(y, mo - 1, d, h, mi);
  var dtf = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles',
    hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit' });
  function offsetAt(t) {
    var parts = {};
    dtf.formatToParts(new Date(t)).forEach(function (p) { parts[p.type] = p.value; });
    return Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day),
      Number(parts.hour), Number(parts.minute), Number(parts.second)) - t;
  }
  var t = target;
  for (var i = 0; i < 3; i++) t = target - offsetAt(t);
  return t;
}
/* A pending week's countdown target: that week's Sunday 10:00 AM PT
   (main-slate kickoff). Week W's Tuesday is the anchor plus (W-1)
   weeks; its Sunday is five days after that Tuesday. */
function pendingKickoff(W) {
  var sun = new Date(Date.UTC(2026, 8, 8) + ((W - 1) * 7 + 5) * 86400000);
  return ptInstant(sun.getUTCFullYear(), sun.getUTCMonth() + 1, sun.getUTCDate(), 10, 0);
}
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
  pending: false,       /* the SELECTED week has no rostered document */
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
  state.pending = false;
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

/* A week "has rosters" when its document exists and at least one team
   entry carries players. A missing document — or one written before
   lineups were entered — has none. */
function weekHasRosters(W) {
  var doc = state.weekDocs[String(W)];
  if (!doc || !doc.teams) return false;
  return TEAMS.some(function (tid) {
    var e = doc.teams[tid];
    return !!(e && e.players && e.players.length);
  });
}
/* Point the Scores page at week W: its document when it has rosters
   (rendering exactly as a document week always has), otherwise the
   pending state — the five teams with no scores and no fabricated
   numbers, and the countdown aimed at that week's Sunday 10:00 AM PT
   main-slate kickoff (see startCountdown). */
function selectWeek(W) {
  state.scoresWeek = W;
  TEAMS.forEach(function (t) {
    state.scores[t] = 0; state.playerScores[t] = {}; state.playerStats[t] = {};
  });
  if (weekHasRosters(W)) { applyWeek(W); return; }
  state.pending = true;
  state.rosters = { teams: {} };
  state.scoresFinal = false;
  state.gamesLive = false;
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
  /* The Scores display week is the calendar week; the header week label
     is set from it below. Standings and the live poll keep keying off
     the newest week document, detected here as before (same discovery
     the central poller uses). Falls back to WEEK above if the lookup
     fails, so the page still renders. */
  CAL_WEEK = calendarWeek(new Date());
  /* Wire the bottom nav, reveal the week picker and start the countdown
     FIRST — before any network await. The nav and the picker are the
     page's primary controls: they must work even while Firebase is
     slow or unreachable, and no later failure (data, countdown, render)
     may leave them dead or hidden. Until the documents arrive the
     calendar week reads as pending, which is exactly the state
     selectWeek() reproduces if the fetch fails. */
  state.scoresWeek = CAL_WEEK;
  state.pending = true;
  state.rosters = { teams: {} };
  wireNav();
  $('week-name').textContent = 'WEEK ' + CAL_WEEK;
  $('week-picker').hidden = false; /* the picker lives on the Scores view */
  updatePickerButtons();
  startCountdown();
  try {
    var shRes = await fetch(API_BASE + '/weeks.json?shallow=true', { cache: 'no-store' });
    if (shRes.ok) {
      var sh = await shRes.json();
      var wks = Object.keys(sh || {}).map(Number).filter(function (n) { return !isNaN(n) && n > 0; });
      if (wks.length) WEEK = Math.max.apply(null, wks);
    }
  } catch (e) { /* keep fallback WEEK */ }
  try {
    var allRes = await fetch(API_BASE + '/weeks.json', { cache: 'no-store' });
    var all = await allRes.json();
    Object.keys(all || {}).forEach(function (k) {
      if (all[k] && all[k].teams) state.weekDocs[String(k)] = all[k];
    });
  } catch (e) { /* Firebase unreachable: the calendar week renders pending */ }
  selectWeek(CAL_WEEK);

  /* preload helmets + badges */
  TEAMS.forEach(function (t) {
    ['assets/img/helmet-' + t + '.png', 'assets/img/team-' + t + '.png'].forEach(function (u) {
      var im = new Image(); im.src = u;
    });
  });

  renderAll();
  $('week-name').textContent = 'WEEK ' + state.scoresWeek;
  $('week-picker').hidden = state.view !== 'scores';
  updatePickerButtons();
  updateCountdown();

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
  if (!state.rosters || !state.rosters.teams) return t;
  Object.keys(state.rosters.teams).forEach(function (tid) {
    (state.rosters.teams[tid].players || []).forEach(function (p) {
      var k = new Date(p.kickoff).getTime();
      if (k < t) t = k;
    });
  });
  return t;
}
var countdownTimer = null;
/* The countdown element is STATIC markup in the Scores bottom stack
   (directly above the week picker): the script only toggles its
   hidden flag and its text. It is never created or removed at
   runtime, so a missing-element failure cannot abort boot — the bug
   that left the bottom nav unwired and the week picker hidden when
   an older cached script met the newer page. ensureCountdown() only
   rebuilds it as a defensive fallback. */
function ensureCountdown() {
  var el = $('countdown');
  if (el) return el;
  var stack = $('scores-bottom-stack');
  if (!stack) return null;
  el = document.createElement('div');
  el.id = 'countdown';
  el.className = 'countdown display';
  el.hidden = true;
  var picker = $('week-picker');
  if (picker && picker.parentNode === stack) stack.insertBefore(el, picker);
  else stack.appendChild(el);
  return el;
}
function hideCountdown() {
  var el = $('countdown');
  if (el) el.hidden = true;
}
function updateCountdown() {
  /* The countdown lives in the Scores bottom stack, directly above
     the week picker — never in the header, so the header lays out
     identically whether it is shown or not. It is shown ONLY when
     the selected week is the current (calendar) week and kickoff has
     not yet begun; in every other case it stays hidden, so the
     picker sits alone with no reserved space above it. The whole
     update is guarded: the countdown is decoration and must never
     throw into boot, rendering, or view switching. */
  try {
    if (state.view !== 'scores' || state.scoresWeek !== CAL_WEEK) { hideCountdown(); return; }
    /* A pending week has no roster kickoffs to read: its countdown
       targets that week's Sunday 10:00 AM PT main-slate kickoff. */
    var target = state.pending ? pendingKickoff(state.scoresWeek) : firstKickoff();
    if (!isFinite(target)) { hideCountdown(); return; }
    var diff = target - Date.now();
    if (diff <= 0) { hideCountdown(); return; }
    var el = ensureCountdown();
    if (!el) return;
    var d = Math.floor(diff / 86400000),
        h = Math.floor(diff % 86400000 / 3600000),
        m = Math.floor(diff % 3600000 / 60000);
    el.textContent = 'Kickoff in ' + d + 'd ' + String(h).padStart(2, '0') + 'h ' + String(m).padStart(2, '0') + 'm';
    el.hidden = false;
  } catch (e) { /* never let the countdown break the page */ }
}
function startCountdown() {
  updateCountdown();
  if (countdownTimer) clearInterval(countdownTimer);
  countdownTimer = setInterval(updateCountdown, 30000);
}

/* ---------------- rendering ---------------- */
function currentLeader() {
  /* The leader is the top team of the week being viewed — the first
     row of the leaderboard, exactly as sortedTeams() orders it. For a
     week with points that is the highest score (canonical order
     breaks ties, as the raw max scan did). For a scoreless week —
     pending, or rostered but not yet kicked off — every total is 0,
     and sortedTeams() seeds the order from the previous week's
     finishing order, so the header theme, helmet and namewall follow
     that week's top team from the first render instead of falling
     back to the first canonical team on an all-zero tie. */
  var order = sortedTeams();
  return order && order.length ? order[0] : TEAMS[0];
}
/* Whether the selected week has any points at all. A week is
   scoreless when it is pending (no rostered document) or when its
   rostered document still shows 0 for every team total and every
   player. Used only to decide the Scores row order. */
function weekHasAnyPoints() {
  if (state.pending) return false;
  for (var i = 0; i < TEAMS.length; i++) {
    if ((state.scores[TEAMS[i]] || 0) !== 0) return true;
  }
  for (var j = 0; j < TEAMS.length; j++) {
    var ps = state.playerScores[TEAMS[j]];
    if (!ps) continue;
    var names = Object.keys(ps);
    for (var k = 0; k < names.length; k++) {
      if ((ps[names[k]] || 0) !== 0) return true;
    }
  }
  return false;
}
/* The finishing order of week W's predecessor: teams ranked by that
   week's final totals from its document, descending. Ties resolve by
   canonical order. No predecessor document (Week 1, or a data gap)
   falls back to canonical order. Reads only already-loaded weekDocs —
   no fetches, no writers. */
function previousWeekOrder(W) {
  if (!W || W <= 1) return TEAMS.slice();
  var doc = state.weekDocs[String(W - 1)];
  if (!doc || !doc.teams) return TEAMS.slice();
  var idx = {};
  TEAMS.forEach(function (t, i) { idx[t] = i; });
  return TEAMS.slice().sort(function (a, b) {
    var ta = doc.teams[a] ? (doc.teams[a].total || 0) : 0;
    var tb = doc.teams[b] ? (doc.teams[b].total || 0) : 0;
    if (tb !== ta) return tb - ta;
    return idx[a] - idx[b];
  });
}
function sortedTeams() {
  if (!weekHasAnyPoints()) return previousWeekOrder(state.scoresWeek);
  return TEAMS.slice().sort(function (a, b) { return (state.scores[b] || 0) - (state.scores[a] || 0); });
}
/* ---- view-scoped theming (decoupled) ----
   The 3D background text wall (#bg3d) and its theme-driven backdrop
   tint (#bg-tint / #bg-fallback — both set inside bg3d.js from the same
   setLeader call) belong to the Scores page ONLY. They are driven
   exclusively by applyScoresTheme(), from the viewed week's leader,
   and only while the Scores view is active: navigating to Standings
   never rebuilds, re-names, re-colors or animates the wall and never
   retints the backdrop. The Standings page carries no leader theming
   at all: it renders in the roster view's fixed dark color system and
   its header shows the unthemed app icon, regardless of who leads. */
function applyScoresTheme() {
  if (state.view !== 'scores') return;
  var tid = currentLeader();
  if (window.mfflBg && tid && THEMES[tid]) {
    window.mfflBg.setLeader(TEAM_LABEL[tid], THEMES[tid][0], THEMES[tid][1]);
  }
}

function renderAll() {
  renderHeader();
  renderLeaderboard();
  if (state.rosterTeam) renderRoster(state.rosterTeam);
  renderStandings();
  if (typeof updateCountdown === 'function') updateCountdown();
}

function renderHeader() {
  var leader = currentLeader();
  var prev = state.leader;
  state.leader = leader;
  var helmet = $('leader-helmet');

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
  var note = $('pending-note');
  if (note) note.hidden = !state.pending;
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
    row.classList.toggle('pending', state.pending);
    var scoreEl = row.querySelector('.team-score');
    if (state.pending) {
      /* pending week: the score area stays quiet — no fabricated 0.00 */
      scoreEl.innerHTML = '';
      scoreEl.classList.remove('dropped');
    } else {
      scoreEl.innerHTML = fmtScoreHTML(state.scores[tid] || 0);
      /* dropped-week indicator, merged from the old standings week views:
         strike the score when the viewed week is the one this team drops
         from its season total */
      scoreEl.classList.toggle('dropped', droppedWeekFor(tid) === state.scoresWeek);
    }
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
  $('roster-total').innerHTML = state.pending ? '' : fmtScoreHTML(state.scores[tid] || 0);
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
var navWired = false;
function wireNav() {
  if (navWired) return;
  navWired = true;
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
     active view's own background — #101014 on Scores, the roster
     system's #1d1d23 on Standings — instead of one static strip. Both
     views are dark now; neither enters a light mode and the bottom nav
     keeps its normal dark form on both. */
  var tc = document.querySelector('meta[name="theme-color"]');
  if (tc) tc.setAttribute('content', v === 'standings' ? '#1d1d23' : '#101014');
  $('nav-scores').classList.toggle('active', v === 'scores');
  $('nav-standings').classList.toggle('active', v === 'standings');
  if (v === 'scores') { $('nav-scores').setAttribute('aria-current', 'page'); $('nav-standings').removeAttribute('aria-current'); }
  else { $('nav-standings').setAttribute('aria-current', 'page'); $('nav-scores').removeAttribute('aria-current'); }
  $('scores-wrap').hidden = v !== 'scores';
  $('standings-view').hidden = v !== 'standings';
  $('week-picker').hidden = v !== 'scores';
  if (v === 'scores') { if (state.rosterTeam) closeRoster(); renderHeader(); renderLeaderboard(); }
  else renderStandings();
  updateCountdown();
  window.scrollTo(0, 0);
}

/* ---------------- scores week paging ----------------
   The week picker sits on the Scores view (fixed above the bottom nav).
   Paging re-points the whole Scores page — leaderboard, header theme,
   helmet, icon, and any lineup — at the selected week's document. Live
   updates keep refreshing the current week underneath without moving
   the user off the week they are viewing. */
/* The arrows disable at the ends of the week range: no paging past
   Week 1 or past the calendar week. A paged-to week renders its
   document, or the pending state when it has no rostered document. */
function updatePickerButtons() {
  $('week-prev').disabled = state.scoresWeek <= 1;
  $('week-next').disabled = state.scoresWeek >= CAL_WEEK;
}

function setScoresWeek(w) {
  w = Math.max(1, Math.min(CAL_WEEK, w));
  $('week-name').textContent = 'WEEK ' + w;
  if (w === state.scoresWeek) { updatePickerButtons(); updateCountdown(); return; }
  if (state.rosterTeam) closeRoster();
  selectWeek(w);
  updatePickerButtons();
  renderHeader();
  renderLeaderboard();
  updateCountdown();
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
  /* No leader theming on this view: the header icon is the fixed
     unthemed app icon and the colors are the roster system's fixed dark
     palette. Rendering Standings never calls the Scores-only
     applyScoresTheme(), so the text wall and its tint are left exactly
     as the Scores view set them. */
  standingsRows().forEach(function (r) {
    var row = document.createElement('div');
    row.className = 'standing-row';
    row.innerHTML =
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
  /* The live document is the newest week document's — or the calendar
     week's, once its document lands: rosters arriving mid-week promote
     it to the newest document week and fill the pending view in. */
  var W = Math.max(WEEK, CAL_WEEK);
  var data;
  try {
    var res = await fetch(API_BASE + '/weeks/' + W + '.json', { cache: 'no-store' });
    if (!res.ok) return;
    data = await res.json();
  } catch (e) { return; }
  if (!data || !data.teams) return;
  state.weekDocs[String(W)] = data;
  if (W > WEEK) WEEK = W;
  if (data.final) state.waveFinal = true;
  /* refresh the displayed state only when the user is viewing this
     week — a past week stays put (their choice). selectWeek keeps a
     rostered week rendering as itself and a roster-less one pending. */
  if (state.scoresWeek === W) selectWeek(W);
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
