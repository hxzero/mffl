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
/* Countdown-mode wall entry, registered alongside the team themes:
   while a viewed week is in countdown mode the 3D text wall reads
   COUNTDOWN_WALL_TEXT and the whole Scores theme (wall colors + the
   tint block behind it, both derived inside bg3d from this same
   [accent, fill] pair) goes NEUTRAL CHARCOAL, DARKENED AGAIN per
   the user's second follow-up (still charcoal — gray, no team hue,
   not pure black): accent deepened from #7e8087 to #66686f and fill
   darkened from #28282f to #1f1f27 (just above the app's #1d1d23
   view background). Accent and fill drop by roughly the same
   proportion as the previous darkening, so bg3d's derivations keep
   roughly the previous face-to-block contrast relationship: face =
   accent + 8% white (#72747b, darkened from #888a91), the tint
   block = face mixed 50% toward black (#393a3e, darkened from
   #444549), and the backdrop surface = fill x 0.65 (#141419,
   darkened from #1a1a1f) — no team hue anywhere. It is applied
   through the same setLeader machinery as any leader change, so
   entering and leaving countdown mode run the usual 1200ms wall
   transition. */
var COUNTDOWN_WALL_TEXT = 'MFFL';
var COUNTDOWN_THEME = ['#66686f', '#1f1f27'];

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
  lineupStatus: {},     /* week number -> { tid: {entered, submitted, updatedAt} } | null (public /lineupStatus/<n>; null = fetched, no data / fetch failed) */
  rosters: null,        /* roster state for the SELECTED week (see applyWeek) */
  scores: {},           /* teamId -> total for the SELECTED week */
  prevTotals: {},       /* week -> { teamId -> total }: the last totals a doc snapshot rendered, per week (score-delta baseline) */
  scoreDeltas: {},      /* week -> { teamId -> { amount, startedAt } }: live score-change chips (see noteScoreChanges) */
  playerScores: {},     /* teamId -> { name -> pts } for the selected week */
  playerStats: {},      /* teamId -> { name -> stat line } for the selected week */
  gamesLive: false,
  pending: false,       /* the SELECTED week has no rostered document */
  leader: null,
  view: 'scores',
  scoresWeek: 6,        /* the week the Scores page is showing */
  rosterTeam: null,
  pollTimer: null,
  waveFinal: false,
  team: { cap: 60000, picks: {}, submittedKey: null }  /* Team view lineup: slot key -> pool player id; submittedKey is the lineup fingerprint marked submitted this session (null = not submitted) */
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
/* ---------------- public lineup status ----------------
   The per-team lineup ENTRY status lives in its own public node,
   /lineupStatus/<week>/<team> -> { entered, submitted, updatedAt }
   (updatedAt is ms epoch). It exists because the real lineups at
   /lineups/<week>/<team> are private to each team's owner — the
   public roster view can never read them — while whether a team
   has entered is public information the roster sheet must state
   truthfully per team. The status node carries NO picks, counts or
   salary: entry state and a timestamp only. Reads at the week level
   are public (no auth); writes are owner-only (see the Team tab's
   mirror in the persistence block below). */
var STATUS_BASE = 'https://mffl-79e7b-default-rtdb.firebaseio.com/lineupStatus';
var lineupStatusInflight = {}; /* week string -> Promise (dedupe) */
/* Defensive parse of one week's status document: only known teams,
   only a boolean `entered` is honored; anything malformed degrades
   to "no status for that team" rather than breaking the sheet. */
function parseLineupStatus(raw) {
  if (!raw || typeof raw !== 'object') return null;
  var out = {};
  TEAMS.forEach(function (tid) {
    var rec = raw[tid];
    if (!rec || typeof rec !== 'object') return;
    if (typeof rec.entered !== 'boolean') return;
    out[tid] = {
      entered: rec.entered,
      submitted: rec.submitted === true,
      updatedAt: typeof rec.updatedAt === 'number' ? rec.updatedAt : null
    };
  });
  return Object.keys(out).length ? out : null;
}
/* Fetch (once per week, cached in state.lineupStatus alongside the
   week-doc handling) the public status map for week W. A failed or
   denied fetch resolves to null — "no status data" — never an
   error state. force=true refetches (the scores poll uses it for
   the live week, so a teammate's fresh submission lands without a
   reload). When the fetch lands and that week's roster sheet is
   open, the sheet re-renders with the real per-team status. */
function fetchLineupStatus(W, force) {
  var key = String(W);
  if (!force && Object.prototype.hasOwnProperty.call(state.lineupStatus, key)) {
    return Promise.resolve(state.lineupStatus[key]);
  }
  if (!force && lineupStatusInflight[key]) return lineupStatusInflight[key];
  var p = fetch(STATUS_BASE + '/' + key + '.json', { cache: 'no-store' })
    .then(function (res) { return res && res.ok ? res.json() : null; })
    .then(function (raw) {
      state.lineupStatus[key] = parseLineupStatus(raw);
      return state.lineupStatus[key];
    })
    .catch(function () {
      /* keep any previously loaded map; otherwise record "no data" */
      if (!Object.prototype.hasOwnProperty.call(state.lineupStatus, key)) {
        state.lineupStatus[key] = null;
      }
      return state.lineupStatus[key];
    })
    .then(function (map) {
      delete lineupStatusInflight[key];
      if (state.rosterTeam && state.scoresWeek === W) renderRoster(state.rosterTeam);
      return map;
    });
  lineupStatusInflight[key] = p;
  return p;
}
function ensureLineupStatus(W) { return fetchLineupStatus(W, false); }
/* One team's status record for week W, or null when unknown. */
function lineupStatusFor(W, tid) {
  var map = state.lineupStatus[String(W)];
  return map && map[tid] ? map[tid] : null;
}
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
  noteScoreChanges(W, doc);
}

/* ---------------- score-change delta chips ----------------
   When a new week-doc snapshot moves a team's total, the signed
   change is shown as a small chip beside that team's score — in
   the leaderboard row and in the roster sheet header — for 15s,
   then faded out over 1s by the .score-delta CSS animation (16s
   total life; see styles.css). Detection compares each applied
   snapshot's totals against the last totals rendered for the SAME
   week: prevTotals[week][tid] is the baseline and
   scoreDeltas[week][tid] the active chip { amount, startedAt }.
   A week's first sight only seeds the baseline — initial load, a
   week switch and the pending -> rostered transition never chip.
   A fresh change while a chip is live replaces the amount and
   restarts the clock. Team totals only: no player-row chips, and
   the Standings tab never reads this state. */
var SCORE_DELTA_LIFE_MS = 16000; /* 15s hold + 1s fade (styles.css) */
function noteScoreChanges(W, doc) {
  var key = String(W);
  var prev = state.prevTotals[key];
  var firstSight = !prev;
  if (firstSight) { prev = {}; state.prevTotals[key] = prev; }
  var now = Date.now();
  TEAMS.forEach(function (tid) {
    var e = doc.teams[tid];
    if (!e) return;
    var total = e.total || 0;
    if (!firstSight && prev[tid] !== undefined) {
      var d = Math.round((total - prev[tid]) * 100) / 100;
      if (d !== 0) {
        if (!state.scoreDeltas[key]) state.scoreDeltas[key] = {};
        state.scoreDeltas[key][tid] = { amount: d, startedAt: now };
      }
    }
    prev[tid] = total;
  });
}
/* The chip markup for one team in the viewed week, or '' when the
   team has no live chip. A chip whose 16s life has run out is
   dropped here and never emitted again. Rows are rebuilt on every
   render, which would restart the CSS animation from zero; the
   negative animation-delay resumes the recreated element at the
   phase the original had reached. */
function scoreDeltaChipHTML(tid) {
  var map = state.scoreDeltas[String(state.scoresWeek)];
  var d = map && map[tid];
  if (!d) return '';
  var elapsed = Date.now() - d.startedAt;
  if (elapsed >= SCORE_DELTA_LIFE_MS) { delete map[tid]; return ''; }
  var text = (d.amount < 0 ? '-' : '+') + fmt(Math.abs(d.amount));
  var delay = elapsed > 0 ? ' style="animation-delay:-' + (elapsed / 1000).toFixed(3) + 's"' : '';
  return '<span class="score-delta' + (d.amount < 0 ? ' is-neg' : '') + '"' + delay + '>' + text + '</span>';
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
   actually scored (a pre-kickoff 0.00 is not data). Entries carry a
   `final` flag: past weeks are final, and so is the current week once
   its document is final; the current week while its document is still
   live is not — it counts toward the displayed total at face value but
   can never be the dropped week (see droppedWeekFor). */
function weekSeries(tid) {
  var out = [];
  for (var w = 1; w <= WEEK; w++) {
    var doc = state.weekDocs[String(w)];
    var t = doc && doc.teams && doc.teams[tid] ? (doc.teams[tid].total || 0) : 0;
    if (w < WEEK) out.push({ week: w, total: t, final: true });
    else if (doc && doc.final) out.push({ week: w, total: t, final: true });
    else if (t > 0) out.push({ week: w, total: t, final: false });
  }
  return out;
}
/* The single week dropped from a team's season total (earliest week wins
   ties), chosen over FINAL weeks only, or null when fewer than two weeks
   count or no final week exists yet. While the current week is live its
   partial score is never dropped and never carries the dropped styling;
   once its document turns final it joins the candidates and the plain
   worst-week rule resumes exactly as before. */
function droppedWeekFor(tid) {
  var s = weekSeries(tid);
  if (s.length < 2) return null;
  var finals = s.filter(function (e) { return e.final; });
  if (!finals.length) return null;
  var drop = finals[0];
  finals.forEach(function (e) { if (e.total < drop.total) drop = e; });
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
  /* Silently restore any stored sign-in session (refresh-token
     exchange + team resolution) in parallel with the data load, so
     the Team tab's gate settles without waiting on the scores docs.
     The gate starts gated in markup, so nothing flashes either way. */
  restoreAuth();
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
/* Tick cadence for the countdown: 30s normally, 1s inside the final
   30 minutes so the seconds segment (shown only in that window —
   see formatCountdownDuration) counts down live. syncCountdownTick
   owns the single interval: a cadence change clears and re-arms it,
   so timers never stack. updateCountdown() drives it on every pass;
   startCountdown() only guarantees an armed timer at boot. */
var countdownTickMs = 0;
function syncCountdownTick(fast) {
  var ms = fast ? 1000 : 30000;
  if (countdownTimer && countdownTickMs === ms) return;
  if (countdownTimer) clearInterval(countdownTimer);
  countdownTickMs = ms;
  countdownTimer = setInterval(updateCountdown, ms);
}
/* The Scores countdown's duration format: unit letters, space
   separated, with ZERO LEADING UNITS OMITTED — the day segment
   drops at 0 days, the hours segment at 0 hours, and the minutes
   segment in the final minute. The leading shown unit is unpadded,
   except the hours, which keep their established zero-padding when
   they lead ("04h 12m"); units after the leading one are
   zero-padded to 2 ("1d 04h 12m"). Seconds appear ONLY inside the
   final 30 minutes — the 2026-10-22 Team-timer rule, applied to
   Scores — ticking on the 1s cadence syncCountdownTick arms for
   that window: "29m 41s", and "41s" alone in the final minute. */
function formatCountdownDuration(diff) {
  var totalSec = Math.floor(diff / 1000);
  var d = Math.floor(totalSec / 86400),
      h = Math.floor(totalSec % 86400 / 3600),
      m = Math.floor(totalSec % 3600 / 60),
      s = totalSec % 60;
  var parts = [];
  if (d > 0) parts.push(d + 'd');
  if (d > 0 || h > 0) parts.push(String(h).padStart(2, '0') + 'h');
  if (d > 0 || h > 0) parts.push(String(m).padStart(2, '0') + 'm');
  else if (m > 0) parts.push(m + 'm');
  if (diff < 30 * 60000) {
    /* Inside 30 minutes d and h are necessarily 0, so the seconds
       follow the (unpadded, leading) minutes, zero-padded — or
       lead alone, unpadded, in the final minute. */
    parts.push(m > 0 ? String(s).padStart(2, '0') + 's' : s + 's');
  }
  return parts.join(' ');
}
/* ---------------- countdown mode ----------------
   Countdown mode is a per-viewed-week Scores state: it applies
   exactly while updateCountdown() would display the countdown for
   the viewed week — the viewed week is the current (calendar) week
   and its kickoff is still ahead (a pending week counts down to its
   Sunday 10:00 AM PT main-slate kickoff; a rostered current week to
   its first roster kickoff). A completed past week is never in the
   mode. While the mode is active: the leader helmet is suppressed
   in #helmet-wrap, the countdown occupies the helmet space with the
   gate-title treatment as TWO lines ("Week <n> Kickoff:" over the
   timer duration — see ensureCountdownLines), sized to the helmet's
   own box height so the wrap does not change height, and the text
   wall reads MFFL in the neutral charcoal theme (COUNTDOWN_THEME
   above). Enter/exit is driven
   from the existing render flow — renderHeader() and
   updateCountdown() below; the only timer is the countdown's own
   (30s, tightening to 1s inside the final 30 minutes — see
   syncCountdownTick above). */
var countdownMode = false;
function computeCountdownActive() {
  if (state.scoresWeek !== CAL_WEEK) return false;
  var target = state.pending ? pendingKickoff(state.scoresWeek) : firstKickoff();
  if (!isFinite(target)) return false;
  return (target - Date.now()) > 0;
}
/* ---------------- zeros reveal (countdown-end flip) ----------------
   One-shot companion to the helmet swap-in at the countdown-end
   flip. While the user is VIEWING the calendar week on Scores in
   countdown mode, the leaderboard rows render with EMPTY score
   areas (the pending state fabricates no numbers). When the
   countdown reaches zero and the mode exits — the same flip that
   runs renderHeader's presented-leader swap-in — the rows' real
   totals (0.00 for every team at kickoff) whisper in through the
   #leaderboard.zeros-reveal CSS animation (see styles.css).
   noteCountdownState() is the single choke point: renderHeader()
   and updateCountdown() both recompute countdownMode and either
   may observe the exit first (a data render can flip the mode
   before the tick does, and the tick's own exit path calls
   renderHeader), so the arm/consume logic lives here and fires at
   most once per mode entry. It can only fire when the exit is the
   countdown reaching zero on the viewed calendar week: a week
   switch (the viewed week changes, or its target is not yet
   reached), a switch away from Scores, and boot straight into a
   live week (the mode was never active, so nothing was armed) all
   disarm silently. zerosReveal is then consumed by the first
   renderLeaderboard that actually paints totals for the calendar
   week — if the week document has not landed yet at the flip, one
   scoresUpdate() is kicked so the totals arrive in the same beat
   as the helmet; whenever they land, that render animates the
   ACTUAL totals, never forced zeros. */
var zerosArmed = false;
var zerosReveal = false;
var zerosCleanupTimer = null;
function noteCountdownState() {
  if (countdownMode) {
    if (state.view === 'scores' && state.scoresWeek === CAL_WEEK) zerosArmed = true;
    return;
  }
  if (!zerosArmed) return;
  zerosArmed = false;
  if (state.view !== 'scores' || state.scoresWeek !== CAL_WEEK) return;
  var target = state.pending ? pendingKickoff(state.scoresWeek) : firstKickoff();
  if (!isFinite(target) || target - Date.now() > 0) return;
  zerosReveal = true;
  /* The week document lands right at kickoff (the poller publishes
     it as its Sunday window opens): pull it now instead of waiting
     for the next 120s poll tick, so the totals render — and
     animate — alongside the helmet swap-in. Best-effort: a failed
     or empty pull leaves zerosReveal set for the render that does
     land the document. */
  if (state.pending) {
    try {
      var p = scoresUpdate();
      if (p && p.catch) p.catch(function () {});
    } catch (e) { /* the poll lands it instead */ }
  }
}
/* The countdown element is STATIC markup in #helmet-wrap (the helmet
   space): the script only toggles its hidden flag and its text, and
   moves it there with appendChild should a stale cached page still
   carry it elsewhere. It is never created or removed at runtime in
   normal operation, so a missing-element failure cannot abort boot
   — the bug that left the bottom nav unwired and the week picker
   hidden when an older cached script met the newer page.
   ensureCountdown() only rebuilds it, in #helmet-wrap, as a
   defensive fallback. */
function moveCountdownIntoHelmet(el) {
  var wrap = $('helmet-wrap');
  if (el && wrap && el.parentNode !== wrap) wrap.appendChild(el);
  return el;
}
/* The countdown's two lines: a label span (.countdown-label, the
   top line) and a value span (.countdown-value, the bottom line),
   both children of #countdown. ensureCountdownLines() guarantees
   they exist — creating them on a legacy single-text element (and
   dropping its stray direct text nodes) or on the rebuilt fallback
   element — and returns them for updateCountdown() to fill. */
function ensureCountdownLines(el) {
  if (!el) return { label: null, value: null };
  var value = el.querySelector('.countdown-value');
  var label = el.querySelector('.countdown-label');
  if (!value) {
    value = document.createElement('span');
    value.className = 'countdown-value';
    value.id = 'countdown-value';
    el.appendChild(value);
  }
  if (!label) {
    label = document.createElement('span');
    label.className = 'countdown-label';
    label.id = 'countdown-label';
    el.insertBefore(label, value);
  }
  Array.prototype.slice.call(el.childNodes).forEach(function (n) {
    if (n.nodeType === 3) n.remove();
  });
  return { label: label, value: value };
}
function ensureCountdown() {
  var el = $('countdown');
  if (el) { ensureCountdownLines(el); return moveCountdownIntoHelmet(el); }
  var wrap = $('helmet-wrap');
  if (!wrap) return null;
  el = document.createElement('div');
  el.id = 'countdown';
  el.className = 'countdown display league-title gate-title';
  el.hidden = true;
  ensureCountdownLines(el);
  wrap.appendChild(el);
  return el;
}
function hideCountdown() {
  var el = $('countdown');
  if (el) {
    el.hidden = true;
    /* The final-minute gold on the clock value clears with the
       countdown itself, so it can never linger into the helmet
       state or a later week's countdown. */
    var value = el.querySelector('.countdown-value');
    if (value) value.classList.remove('is-final-minute');
  }
}
function updateCountdown() {
  /* The countdown is shown ONLY in countdown mode (see above): the
     viewed week is the current (calendar) week, kickoff has not yet
     begun, and the Scores view is active. In every other case it
     stays hidden. Until the first render dismisses the helmet
     slot's boot shimmer (helmetShimmerDismissed), the countdown
     stays hidden too — the shimmer owns the slot while a fetch is
     in flight, and the first render's renderHeader() resolves the
     mode and presents the countdown in its place. The whole update
     is guarded: the countdown is decoration and must never throw
     into boot, rendering, or view switching. */
  try {
    var wasMode = countdownMode;
    countdownMode = computeCountdownActive();
    noteCountdownState();
    var wrap = $('helmet-wrap');
    if (wrap) wrap.classList.toggle('countdown-mode', countdownMode);
    ensureCountdown();
    if (state.view !== 'scores' || !countdownMode) {
      hideCountdown();
      syncCountdownTick(false);
      /* Exit driven from here (the existing 30s countdown tick
         crossing kickoff with no data render in between): removing
         the mode is not enough — the helmet slot must present the
         leader's helmet and the leader's wall, which is
         renderHeader()'s job. Render paths that already ran
         renderHeader() for this flip find it mid-swap or settled
         for the same leader and return harmlessly. */
      if (wasMode && !countdownMode && helmetShimmerDismissed) renderHeader();
      return;
    }
    /* A pending week has no roster kickoffs to read: its countdown
       targets that week's Sunday 10:00 AM PT main-slate kickoff. */
    var target = state.pending ? pendingKickoff(state.scoresWeek) : firstKickoff();
    var diff = target - Date.now();
    if (!isFinite(target) || diff <= 0) { hideCountdown(); syncCountdownTick(false); return; }
    var el = ensureCountdown();
    if (!el) return;
    /* Inside the final 30 minutes the tick tightens to 1s so the
       seconds segment counts down live; outside that window the
       cadence stays 30s. */
    syncCountdownTick(diff < 30 * 60000);
    /* Two lines: the label names the viewed week that is counting
       down (refreshed here every tick, so it follows week changes),
       and the value is the timer duration in
       formatCountdownDuration's format WITHOUT the old "Kickoff in "
       prefix — the label line replaces it. Never set el.textContent:
       that would wipe the two line spans. In the final minute the
       VALUE alone takes the app gold (.is-final-minute); the label
       keeps the pure-white treatment, and hideCountdown() clears
       the class on exit. */
    var lines = ensureCountdownLines(el);
    if (lines.label) lines.label.textContent = 'Week ' + state.scoresWeek + ' Kickoff:';
    if (lines.value) {
      lines.value.textContent = formatCountdownDuration(diff);
      lines.value.classList.toggle('is-final-minute', diff < 60000);
    }
    el.hidden = !helmetShimmerDismissed;
  } catch (e) { /* never let the countdown break the page */ }
}
function startCountdown() {
  updateCountdown();
  /* updateCountdown() arms the cadence-appropriate tick through
     syncCountdownTick on every pass; arm the standard 30s tick here
     only if it somehow left no timer running. */
  if (!countdownTimer) syncCountdownTick(false);
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
var bgPrewarmed = false;
function applyScoresTheme() {
  if (state.view !== 'scores') return;
  var tid = currentLeader();
  if (window.mfflBg && tid && THEMES[tid]) {
    /* Wall-text mechanism: bg3d's setLeader takes the wall TEXT and
       the theme's [accent, fill] as independent arguments — the
       text is the wall-cache key, the colors alone derive the
       theme — so the two are decoupled here. In countdown mode the
       text is MFFL and the theme is the neutral charcoal entry;
       otherwise the text is the leader's name in the leader's own
       theme. Either way the call goes through the same machinery,
       so mode enter/exit transitions animate exactly like a lead
       change (the 1200ms out/in wall transition). */
    if (countdownMode) {
      window.mfflBg.setLeader(COUNTDOWN_WALL_TEXT, COUNTDOWN_THEME[0], COUNTDOWN_THEME[1]);
    } else {
      window.mfflBg.setLeader(TEAM_LABEL[tid], THEMES[tid][0], THEMES[tid][1]);
    }
    if (!bgPrewarmed && window.mfflBg && window.mfflBg.prewarm) {
      bgPrewarmed = true;
      window.mfflBg.prewarm([COUNTDOWN_WALL_TEXT].concat(Object.keys(TEAM_LABEL).map(function (t) { return TEAM_LABEL[t]; })));
    }
  }
}

function renderAll() {
  renderHeader();
  renderLeaderboard();
  if (state.rosterTeam) renderRoster(state.rosterTeam);
  renderStandings();
  if (typeof updateCountdown === 'function') updateCountdown();
}

var helmetSwap = null; /* { leader, outTimer, inTimer } while a lead-change swap runs */
/* The leader whose helmet is actually PRESENTED in the slot right
   now — decoded, ungated, and not suppressed — or null when no
   helmet is on display (boot, countdown mode, a load in flight, a
   failed load). This is deliberately separate from what the img
   happens to hold: entering countdown mode hides the helmet but
   leaves its src in place, so on exit the img can still hold a
   fully loaded STALE helmet that was never presented during the
   mode. Whether a swap-out may run keys off this flag (see
   helmetOutgoingPresentable), never off the img's load state
   alone — keying off the load state is what let the hidden helmet
   animate out on the first navigation away from the countdown
   whenever an earlier scored week had left a loaded src behind. */
var helmetPresentedLeader = null;
/* First-load helmet reveal: #helmet-wrap ships in the .helmet-loading
   state — the helmet img has no src and a helmet-sized shimmer block
   holds its slot — because the leader is unknown until the week
   documents arrive; no helmet may paint during the loading shimmer.
   The first renderHeader dismisses the shimmer when it presents the
   helmet slot's real content: the leader's helmet (the swap-in
   entrance below, or the steady-state src assignment) — or, when the
   week resolves into countdown mode, the countdown, in which case
   dismissing the shimmer must NOT reveal the helmet (the
   .countdown-mode CSS keeps it suppressed). Idempotent like
   dismissShimmer — later calls find nothing. */
var helmetShimmerDismissed = false;
function dismissHelmetShimmer(wrap) {
  if (helmetShimmerDismissed) return;
  helmetShimmerDismissed = true;
  wrap.classList.remove('helmet-loading');
  var shim = wrap.querySelector('.helmet-shimmer');
  if (shim) shim.remove();
}
/* Whether the helmet img currently holds a displayable image: a src
   that finished loading with real pixels. The img ships src-less and
   countdown mode never assigns one, so on the first exit from
   countdown mode it holds nothing at all — and a failed load leaves
   it broken (complete, naturalWidth 0). Painting it in either state
   shows the browser's broken-image placeholder (glyph + alt text)
   instead of a helmet, so renderHeader keeps #helmet-wrap in the
   .helmet-awaiting state (CSS: the img keeps its box but paints
   nothing) whenever this does not hold for the incoming helmet, and
   clears it only once that helmet has decoded. */
function helmetImageLoaded(helmet) {
  return !!(helmet.getAttribute('src') && helmet.complete && helmet.naturalWidth > 0);
}
/* Whether there is a helmet on display that a swap-out may exit:
   the img still holds the PRESENTED leader's image and that image
   is displayable. A loaded img is NOT enough — after countdown
   mode the img routinely holds a stale, fully decoded helmet that
   was suppressed for the whole mode, and exiting it would paint a
   helmet nobody ever saw presented. Only a helmet that actually
   reached the screen (helmetPresentedLeader, still the img's src,
   still loaded) has an out-phase. */
function helmetOutgoingPresentable(helmet) {
  return !!(helmetPresentedLeader &&
    helmet.getAttribute('src') === 'assets/img/helmet-' + helmetPresentedLeader + '.png' &&
    helmetImageLoaded(helmet));
}
function renderHeader() {
  var leader = currentLeader();
  var helmet = $('leader-helmet');
  var wrap = $('helmet-wrap');

  /* Countdown mode (see computeCountdownActive): the helmet is
     suppressed for as long as the mode lasts — no src assignment, no
     swap, and the boot shimmer is dismissed WITHOUT presenting the
     helmet (the countdown takes the slot; updateCountdown presents
     it). state.leader is reset to null so that when the mode ends,
     the next renderHeader takes the swap path and the leader's
     helmet enters with its usual swap-in, alongside the wall's
     transition from MFFL/charcoal to the leader's name and theme. */
  countdownMode = computeCountdownActive();
  noteCountdownState();
  if (countdownMode) {
    if (helmetSwap) {
      clearTimeout(helmetSwap.outTimer);
      clearTimeout(helmetSwap.inTimer);
      helmetSwap = null;
      wrap.classList.remove('swap-out');
      wrap.classList.remove('swap-in');
    }
    wrap.classList.add('countdown-mode');
    /* The mode never assigns a src, so entering it leaves the img
       src-less (or holding a stale helmet): the reveal gate goes on
       here and stays on until a later swap-in presents a decoded
       helmet — this is what keeps the first exit from painting the
       src-less img during its swap-out phase. Just as important,
       nothing is PRESENTED while the mode lasts, however loaded the
       img's stale src is: clearing helmetPresentedLeader here is
       what denies the exit path a swap-out for that stale helmet on
       every way out of the mode (week switch, tab switch and back,
       the countdown tick crossing kickoff). */
    wrap.classList.add('helmet-awaiting');
    helmetPresentedLeader = null;
    dismissHelmetShimmer(wrap);
    state.leader = null;
    applyScoresTheme();
    return;
  }
  wrap.classList.remove('countdown-mode');
  var prev = state.leader;
  state.leader = leader;

  if (helmetSwap) {
    if (helmetSwap.leader === leader) { applyScoresTheme(); return; }
    /* another lead change mid-swap: cancel the stale chain, restart fresh */
    clearTimeout(helmetSwap.outTimer);
    clearTimeout(helmetSwap.inTimer);
    helmetSwap = null;
    wrap.classList.remove('swap-out');
    wrap.classList.remove('swap-in');
    wrap.classList.remove('helmet-awaiting');
    prev = null; /* force the swap path for the newest leader */
  }

  if (prev !== leader) {
    /* Lead change. Two shapes, decided by whether a helmet is
       actually on display (helmetOutgoingPresentable):
       - A presented helmet exits downward over 600ms, then the new
         helmet fades in once decoded — the usual 1200ms out+in
         choreography for a genuine change between two presented
         helmets. The re-entry waits until the new helmet image is
         decoded, so the first painted frame of the fade-in is
         already the new helmet — never a frame of the old one.
         Until then swap-out's forwards fill holds the wrap at
         opacity 0.
       - Nothing presented to exit (boot, a failed load, and above
         all the exit from countdown mode — whose img may hold a
         stale LOADED helmet that was hidden for the whole mode):
         there is NO out-phase at all. The img stays behind the
         reveal gate while the incoming helmet loads, and the first
         presentation is that helmet's swap-in alone. Running the
         out-phase here is the phantom-helmet bug: the gate test
         used to key off the img merely holding a loaded image, so
         a stale helmet left over from an earlier scored week was
         ungated and slid out of a slot it was never shown in. */
    var swap = { leader: leader, outTimer: null, inTimer: null };
    helmetSwap = swap;
    wrap.classList.remove('swap-in');
    var beginIn = function () {
      if (helmetSwap !== swap) return;
      /* First reveal: the decoded leader helmet starts its entrance
         now, so the loading shimmer in the helmet slot clears in the
         same frame — never a frame of both, never a frame of none. */
      dismissHelmetShimmer(wrap);
      helmetPresentedLeader = leader;
      wrap.classList.remove('helmet-awaiting');
      wrap.classList.remove('swap-out');
      wrap.classList.add('swap-in');
      swap.inTimer = setTimeout(function () {
        wrap.classList.remove('swap-in');
        if (helmetSwap === swap) helmetSwap = null;
      }, 600);
    };
    var failIn = function () {
      if (helmetSwap !== swap) return;
      /* The incoming helmet genuinely failed to load: settle with
         the img kept behind the reveal gate — the placeholder
         treatment — instead of swapping in the browser's
         broken-image rendering. */
      dismissHelmetShimmer(wrap);
      wrap.classList.remove('swap-out');
      wrap.classList.add('helmet-awaiting');
      helmetPresentedLeader = null;
      helmetSwap = null;
    };
    var loadIn = function () {
      if (helmetSwap !== swap) return;
      helmet.src = 'assets/img/helmet-' + leader + '.png';
      if (helmet.decode) helmet.decode().then(beginIn, failIn);
      else if (helmet.complete) { if (helmet.naturalWidth > 0) beginIn(); else failIn(); }
      else { helmet.onload = beginIn; helmet.onerror = failIn; }
    };
    if (helmetOutgoingPresentable(helmet)) {
      wrap.classList.remove('helmet-awaiting');
      wrap.classList.add('swap-out');
      swap.outTimer = setTimeout(loadIn, 600);
    } else {
      wrap.classList.add('helmet-awaiting');
      wrap.classList.remove('swap-out');
      loadIn();
    }
    applyScoresTheme();
  } else {
    dismissHelmetShimmer(wrap);
    if (helmet.getAttribute('src') !== 'assets/img/helmet-' + leader + '.png') {
      /* Direct assignment (no choreography on this path) gets the
         same reveal gate: the img stays unpainted until the newly
         assigned helmet has decoded, and a failed load leaves it
         gated rather than painting the broken-image placeholder.
         Until it settles, nothing counts as presented. */
      wrap.classList.add('helmet-awaiting');
      helmetPresentedLeader = null;
      helmet.src = 'assets/img/helmet-' + leader + '.png';
      var settleHelmet = function () {
        if (helmet.getAttribute('src') !== 'assets/img/helmet-' + leader + '.png') return;
        if (helmetImageLoaded(helmet)) {
          wrap.classList.remove('helmet-awaiting');
          helmetPresentedLeader = leader;
        }
      };
      if (helmet.decode) helmet.decode().then(settleHelmet, settleHelmet);
      else if (helmet.complete) settleHelmet();
      else { helmet.onload = settleHelmet; helmet.onerror = settleHelmet; }
    } else if (helmetImageLoaded(helmet)) {
      wrap.classList.remove('helmet-awaiting');
      helmetPresentedLeader = leader;
    } else {
      /* The img names the leader but holds no displayable image
         (a failed load): it is gated and NOT presented, so a later
         lead change gets no swap-out for it either. */
      helmetPresentedLeader = null;
    }
    applyScoresTheme();
  }
}

/* Loading shimmer dismissal: the placeholder .shimmer-row nodes are
   static markup in #leaderboard, visible from first paint while the
   week documents load. The FIRST real render — data, pending-state,
   or the Firebase-unreachable fallback, all of which reach
   renderLeaderboard() from boot — removes them, which also stops
   their CSS animation (the nodes are gone, not just hidden). A
   hanging fetch never reaches a render, so the shimmer stays up
   over the already-wired nav / picker / countdown instead of a
   dead page. Idempotent: later renders find nothing to remove. */
var shimmerDismissed = false;
function dismissShimmer() {
  if (shimmerDismissed) return;
  shimmerDismissed = true;
  var board = $('leaderboard');
  if (!board) return;
  Array.prototype.forEach.call(board.querySelectorAll('.shimmer-row'), function (row) {
    row.remove();
  });
}

function renderLeaderboard() {
  var board = $('leaderboard');
  dismissShimmer();
  /* Zeros reveal (see noteCountdownState): the first render after
     the countdown-end flip that actually paints totals for the
     calendar week carries the one-shot slide/fade-in. Consumed
     exactly once, here — every refresh render after it finds the
     flag gone and paints totals plainly. The class removes itself
     shortly after the last row lands (0.4s stagger + 0.7s run), so
     the ladder reorder, later updates and week switches all see a
     clean board with the numbers in their normal final state. */
  if (zerosReveal && !state.pending && state.scoresWeek === CAL_WEEK) {
    zerosReveal = false;
    board.classList.add('zeros-reveal');
    if (zerosCleanupTimer) clearTimeout(zerosCleanupTimer);
    zerosCleanupTimer = setTimeout(function () {
      zerosCleanupTimer = null;
      board.classList.remove('zeros-reveal');
    }, 1400);
  }
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
    /* Selected-row marker for the two-column highlight (styled only
       inside the >=1024px roster-open media query in styles.css, so
       the single-column layout never shows it): the row whose roster
       is currently open carries .is-selected. Kept in sync here on
       every leaderboard render, and by syncSelectedRow() on
       open/close/switch, which happen without a leaderboard render. */
    row.classList.toggle('is-selected', state.rosterTeam === tid);
    var scoreEl = row.querySelector('.team-score');
    if (state.pending) {
      /* pending week: the score area stays quiet — no fabricated 0.00 */
      scoreEl.innerHTML = '';
      scoreEl.classList.remove('dropped');
    } else {
      scoreEl.innerHTML = scoreDeltaChipHTML(tid) + fmtScoreHTML(state.scores[tid] || 0);
      /* dropped-week indicator, merged from the old standings week views:
         strike the score when the viewed week is the one this team drops
         from its season total. droppedWeekFor only ever names a final
         week, so a week that is still live never shows the strike. */
      scoreEl.classList.toggle('dropped', droppedWeekFor(tid) === state.scoresWeek);
    }
    /* per-player state dots under the team name: one per rostered player,
       in slot order — upcoming (white at 40% opacity) / live (green) /
       final (faint white) */
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
/* Move / clear the .is-selected marker on the leaderboard rows to
   match state.rosterTeam: set on the open team's row, moved when
   openRoster is called for a different team, removed from every row
   when the roster closes (rosterTeam null). The visual treatment is
   scoped to the two-column media query in styles.css. */
function syncSelectedRow() {
  var board = $('leaderboard');
  if (!board) return;
  Array.prototype.forEach.call(board.querySelectorAll('.team-row'), function (row) {
    row.classList.toggle('is-selected', !!state.rosterTeam && row.dataset.team === state.rosterTeam);
  });
}
function openRoster(tid) {
  state.rosterTeam = tid;
  syncSelectedRow();
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
  syncSelectedRow();
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
/* Opponent-only matchup for a roster player: the stored matchup may
   carry both teams ("CIN @ BAL" / "CIN vs BAL") — the player's own
   team abbreviation is dropped and only the vs/@ marker plus the
   opponent remains ("@ BAL" when the player is the away team,
   "vs BAL" at home). A matchup that already shows only the opponent
   (or doesn't name the player's team at all) is returned as-is. */
function opponentOnlyMatchup(pl) {
  if (!pl.matchup) return '';
  var m = String(pl.matchup).trim();
  if (/^(vs\.?|@)\s/i.test(m)) return m;
  var atParts = m.split(/\s@\s/);
  if (atParts.length === 2) {
    if (atParts[0] === pl.team) return '@ ' + atParts[1];
    if (atParts[1] === pl.team) return 'vs ' + atParts[0];
    return m;
  }
  var vsParts = m.split(/\s+vs\.?\s+/i);
  if (vsParts.length === 2) {
    if (vsParts[0] === pl.team) return 'vs ' + vsParts[1];
    if (vsParts[1] === pl.team) return 'vs ' + vsParts[0];
    return m;
  }
  return m;
}
function matchupHTML(pl) {
  if (!pl.matchup) return '';
  return '<span class="matchup">' + escapeHtml(opponentOnlyMatchup(pl)) + '</span>';
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
  /* The sheet reads the week's PUBLIC lineup status (cached per
     week; the fetch re-renders this sheet when it lands). It never
     fetches /lineups — those records are private to their owners. */
  ensureLineupStatus(state.scoresWeek);
  $('roster-team-name').textContent = TEAM_LABEL[tid];
  $('roster-badge').src = 'assets/img/team-' + tid + '.png';
  $('roster-state').textContent = 'WEEK ' + state.scoresWeek;
  $('roster-total').innerHTML = state.pending ? '' : scoreDeltaChipHTML(tid) + fmtScoreHTML(state.scores[tid] || 0);
  var list = $('roster-list');
  list.innerHTML = '';
  var entry = state.rosters.teams[tid];
  if (!entry || entry.status !== 'entered' || !entry.players.length) {
    /* No roster for this team in the published week document — the
       bar's set/not-set wording then keys off the week's PUBLIC
       lineup status (/lineupStatus/<n>, state.lineupStatus), the
       per-team record this view CAN read; the actual lineups in
       private /lineups/<week>/<team> are never fetched here.
       Precedence (positive entry evidence always wins over
       absence-based inference):
         (1) a roster in the week doc — handled above this branch;
         (2) status entered=true  -> the team HAS entered (submitted
             or not — the string is the same), still concealed;
         (3) status entered=false -> not entered, per the team's own
             status record;
         (4) a week doc exists but the team is absent from it ->
             not entered, grounded in the published document;
         (5) no doc and no status -> concealment only, no claim. */
    var statusRec = lineupStatusFor(state.scoresWeek, tid);
    var weekDoc = state.weekDocs[String(state.scoresWeek)];
    var lineupMeta = $('lineup-meta');
    if (statusRec && statusRec.entered === true) {
      lineupMeta.classList.remove('is-not-entered');
      lineupMeta.textContent = 'Lineup entered · Hidden until kickoff';
    } else if (statusRec && statusRec.entered === false) {
      lineupMeta.classList.add('is-not-entered');
      lineupMeta.textContent = 'Lineup not entered';
    } else if (weekDoc && weekDoc.teams) {
      lineupMeta.classList.add('is-not-entered');
      lineupMeta.textContent = 'Lineup not entered';
    } else {
      lineupMeta.classList.remove('is-not-entered');
      lineupMeta.textContent = 'Lineup hidden until kickoff';
    }
    var slots = ['QB', 'RB', 'RB', 'WR', 'WR', 'WR', 'TE', 'FLEX', 'DEF'];
    slots.forEach(function (slot) {
      var row = document.createElement('div');
      row.className = 'player-row concealed';
      row.innerHTML =
        '<div class="player-main">' +
          '<div class="name-line"><span class="player-name">Revealed at kickoff</span><span class="player-pos">' + escapeHtml(displayPos(slot)) + '</span></div>' +
        '</div>' +
        '<span class="roster-score display">—</span>';
      list.appendChild(row);
    });
    return;
  }
  var cap = (typeof entry.salary === 'number') ? entry.salary
    : entry.players.reduce(function (a, pl) { return a + (pl.salary || 0); }, 0);
  $('lineup-meta').classList.remove('is-not-entered');
  $('lineup-meta').textContent = entry.players.length + ' roster spots' +
    (cap > 0 ? ' · $' + cap.toLocaleString('en-US') + ' cap used' : '');
  var statsMap = (state.playerStats || {})[tid] || {};
  var now = Date.now();
  /* One concealed row — the hidden-until-kickoff treatment a real
     player gets before their game starts. Shared by concealed
     players and by the missing-slot placeholders below, so the two
     can never drift apart. The name stays concealed; only the slot
     previews, as a .player-pos span inline after the name — the
     same position treatment revealed rows use (via displayPos, so
     defenses read "DEF"). The slot is the sheet's own fixed
     structure, never player-identifying information. */
  function concealedRow(slot) {
    var row = document.createElement('div');
    row.className = 'player-row concealed';
    row.innerHTML =
      '<div class="player-main">' +
        '<div class="name-line"><span class="player-name">Revealed at kickoff</span><span class="player-pos">' + escapeHtml(displayPos(slot)) + '</span></div>' +
        '<div class="meta-line"><span class="meta-hidden">Player info hidden until the game starts</span></div>' +
      '</div>' +
      '<span class="roster-score display">—</span>';
    return row;
  }
  function appendPlayerRow(pl) {
    var row = document.createElement('div');
    var concealed = now < new Date(pl.kickoff).getTime();
    if (concealed) {
      row = concealedRow(pl.slot);
    } else {
      var gs = gameState(pl, now);
      var live = gs === 'live';
      var fin = gs === 'final';
      row.className = 'player-row has-avatar' + (live ? ' live' : '');
      var pts = (state.playerScores[tid] || {})[pl.name];
      var sal = pl.salary ? '<span class="salary">$' + pl.salary.toLocaleString('en-US') + '</span>' : '';
      /* Roster rows lead with the circular team-icon avatar (same
         pattern as the picker) — no far-left slot element. The
         position rides inline after the name as a .player-pos span
         (the picker's treatment, via displayPos so defenses read
         "DEF"). The pool average (FPPG) is intentionally NOT shown
         on this view — it stays on the picker and Team rows only. */
      row.innerHTML =
        playerAvatarHTML(pl, false) +
        '<div class="player-main">' +
          '<div class="name-line"><span class="player-name">' + escapeHtml(pl.name) + '</span><span class="player-pos">' + escapeHtml(displayPos(pl.slot)) + '</span>' + sal + '</div>' +
          '<div class="meta-line">' + matchupHTML(pl) +
            (live ? '<span class="pill live"><i></i>Live</span>' : (fin ? '<span class="pill final">FINAL</span>' : '')) +
          '</div>' +
          '<p class="stat-line">' + escapeHtml(statLine(pl, statsMap[pl.name])) + '</p>' +
        '</div>' +
        '<span class="roster-score display">' + (pts == null ? '—' : fmtScoreHTML(pts)) + '</span>';
      wireAvatarFallback(row);
    }
    list.appendChild(row);
  }
  /* Missing slots: a partial roster in the week document (fewer
     than nine players — e.g. a FanDuel team whose late-wave players
     are not in the document yet) still renders the full nine-row
     sheet. The absent slots — the standard slot sequence minus the
     slots the document's players actually occupy, duplicate RB/WR
     slots counted individually — render as concealed rows identical
     to a hidden-until-kickoff player, in their sequence positions,
     with the known players interleaved in document order. The
     placeholders are pure presentation: the lineup bar above was
     already computed from the document's actual players only, so a
     placeholder adds no roster spot, salary, or points, and when a
     later document carries the real player for a slot the
     placeholder is simply gone. A player the sequence cannot place
     (an unrecognized slot, or more of a slot than the sequence
     holds) still renders, in document order, after the sequenced
     rows — no known player is ever dropped. */
  var SLOT_SEQUENCE = ['QB', 'RB', 'RB', 'WR', 'WR', 'WR', 'TE', 'FLEX', 'DEF'];
  var placed = entry.players.map(function () { return false; });
  function slotKey(slot) { return slot === 'D' ? 'DEF' : slot; }
  SLOT_SEQUENCE.forEach(function (slot) {
    var idx = -1;
    for (var i = 0; i < entry.players.length; i++) {
      if (!placed[i] && slotKey(entry.players[i].slot) === slot) { idx = i; break; }
    }
    if (idx < 0) { list.appendChild(concealedRow(slot)); return; }
    placed[idx] = true;
    appendPlayerRow(entry.players[idx]);
  });
  entry.players.forEach(function (pl, i) { if (!placed[i]) appendPlayerRow(pl); });
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
  wireAuth();
  $('nav-scores').addEventListener('click', function () { setView('scores'); });
  $('nav-standings').addEventListener('click', function () { setView('standings'); });
  $('nav-team').addEventListener('click', function () { setView('team'); });
  $('picker-close').addEventListener('click', closeRoster);
  $('sheet-close').addEventListener('click', closeRoster);
  $('week-prev').addEventListener('click', function () { setScoresWeek(state.scoresWeek - 1); });
  $('week-next').addEventListener('click', function () { setScoresWeek(state.scoresWeek + 1); });
  var pb = $('pool-back'); if (pb) pb.addEventListener('click', handlePoolBack);
  var pdb = $('pool-detail-back'); if (pdb) pdb.addEventListener('click', handleDetailBack);
  var pda = $('pool-detail-pill'); if (pda) pda.addEventListener('click', handleDetailAction);
  /* The header button is a three-state control (renderTeam owns the
     label + disabled state): Draft (ineligible, disabled), Submit
     (eligible, enabled) and Unlock (submitted, enabled). Submit and
     Unlock are the Team view's only writes to the saved lineup
     record: Submit validates the lineup against the official pool
     and persists it (submitted=true); Unlock persists the same
     picks as a draft (submitted=false) and unlocks. The state only
     flips once the save succeeds — a failed validation or save
     leaves the UI exactly as it was, never showing a submitted
     state that was not stored. */
  $('team-submit').addEventListener('click', function () {
    var btn = $('team-submit');
    if (!btn || btn.disabled || teamSaveInFlight) return;
    if (teamSubmitted()) {
      teamSaveInFlight = true;
      btn.disabled = true;
      persistTeamLineup(false).then(function (ok) {
        teamSaveInFlight = false;
        if (ok) state.team.submittedKey = null;
        renderTeam();
      });
    } else {
      if (!validateLineupForSubmit()) { renderTeam(); return; }
      teamSaveInFlight = true;
      btn.disabled = true;
      persistTeamLineup(true).then(function (ok) {
        teamSaveInFlight = false;
        if (ok) state.team.submittedKey = lineupKey();
        renderTeam();
      });
    }
  });
  $('pool-search').addEventListener('input', renderPoolList);
}
function setView(v) {
  /* the player browser belongs to the Team view: leaving that view
     dismisses it instantly (no slide-out over another view) */
  if (v !== 'team' && poolSheetSlot) forceClosePoolSheet();
  state.view = v;
  /* Full-bleed system bars: tint the Android status/gesture bars to the
     active view's own background — #101014 on Scores, the roster
     system's #1d1d23 on Standings — instead of one static strip. Both
     views are dark now; neither enters a light mode and the bottom nav
     keeps its normal dark form on both. */
  var tc = document.querySelector('meta[name="theme-color"]');
  if (tc) tc.setAttribute('content', (v === 'standings' || v === 'team') ? '#1d1d23' : '#101014');
  /* Team view only: moves the bottom nav clearance inside #team-view
     (html.team in styles.css) so its background paints the clearance
     strip at the bottom of the scroll; removed on any other view.
     Standings likewise: html.standings zeroes #app's bottom padding
     (its own internal padding already provides the clearance, painted
     #1d1d23) and, under ios-standalone, moves the top strip inside
     #standings-view / #team-view so it paints #1d1d23. */
  document.documentElement.classList.toggle('team', v === 'team');
  document.documentElement.classList.toggle('standings', v === 'standings');
  $('nav-scores').classList.toggle('active', v === 'scores');
  $('nav-standings').classList.toggle('active', v === 'standings');
  $('nav-team').classList.toggle('active', v === 'team');
  ['scores', 'standings', 'team'].forEach(function (name) {
    var btn = $('nav-' + name);
    if (name === v) btn.setAttribute('aria-current', 'page');
    else btn.removeAttribute('aria-current');
  });
  /* Leaving Scores abandons a pending zeros reveal (see
     noteCountdownState): it fires only while viewing the flip. */
  if (v !== 'scores') zerosReveal = false;
  $('scores-wrap').hidden = v !== 'scores';
  $('standings-view').hidden = v !== 'standings';
  $('team-view').hidden = v !== 'team';
  $('week-picker').hidden = v !== 'scores';
  if (v === 'scores') { if (state.rosterTeam) closeRoster(); renderHeader(); renderLeaderboard(); }
  else if (v === 'standings') renderStandings();
  else { loadTeamLineup(); renderTeam(); }
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
  /* Paging away abandons a pending zeros reveal: it belongs to the
     countdown flip on the calendar week, never to a week the user
     pages into afterwards. */
  zerosReveal = false;
  var zb = $('leaderboard');
  if (zb) zb.classList.remove('zeros-reveal');
  selectWeek(w);
  updatePickerButtons();
  renderHeader();
  renderLeaderboard();
  updateCountdown();
}

/* ---------------- team view ----------------
   The user's own weekly lineup, built under FanDuel's salary cap from
   the vendored player pool (js/pool.js -> window.MFFL_POOL: the Week 7
   FanDuel player-list export). Picks live in state.team.picks as
   slot key -> pool player id. The whole view is gated behind
   Firebase sign-in (see the auth block below): until a session
   resolves to a team, the Team tab shows only the sign-in page.
   Submit/Unlock persist the lineup to Firebase at
   /lineups/<week>/<team> under the signed-in user's token (see the
   persistence block below); picks restore from that record when
   the Team view first loads for that team.
   Theming follows the Standings
   pattern: a plain solid background and no contact with the
   Scores-only background machinery — nothing here calls window.mfflBg
   and nothing touches either view's theme. */
var TEAM_SLOTS = [
  { key: 'qb',   label: 'QB',   hint: 'QB' },
  { key: 'rb1',  label: 'RB',   hint: 'RB' },
  { key: 'rb2',  label: 'RB',   hint: 'RB' },
  { key: 'wr1',  label: 'WR',   hint: 'WR' },
  { key: 'wr2',  label: 'WR',   hint: 'WR' },
  { key: 'wr3',  label: 'WR',   hint: 'WR' },
  { key: 'te',   label: 'TE',   hint: 'TE' },
  { key: 'flex', label: 'FLEX', hint: 'RB · WR · TE' },
  { key: 'def',  label: 'DEF',  hint: 'DEF' }
];
/* pool positions each slot may draw from (pool defenses are pos "D") */
var SLOT_POS = {
  qb: ['QB'], rb1: ['RB'], rb2: ['RB'],
  wr1: ['WR'], wr2: ['WR'], wr3: ['WR'],
  te: ['TE'], flex: ['RB', 'WR', 'TE'], def: ['D']
};

function poolData() { return window.MFFL_POOL || null; }
/* Derived pool extension (js/pool-extended.js -> window.MFFL_POOL_EXTENDED):
   the producers-only, model-priced records for the 4 non-main-slate
   games, kept in their own file so they never mix with FanDuel's
   official data. They are VISIBLE everywhere official players are
   (picker lists, search, detail) but DISABLED from selection until
   verified against a future FanDuel CSV: no code path may put a
   derived player into state.team.picks. pool.js / history.js are
   untouched; the official pool object stays pristine (the lock
   countdown below reads its games map ONLY). */
function poolExtendedData() { return window.MFFL_POOL_EXTENDED || null; }
function isDerivedPlayer(p) { return !!(p && p.derived); }
/* The merged, displayable player universe: official players first,
   then the derived extension's players (absent file = official only,
   exactly the pre-extension behavior). */
function allPoolPlayers() {
  var out = [];
  var pool = poolData();
  if (pool && pool.players) out = out.concat(pool.players);
  var ext = poolExtendedData();
  if (ext && ext.players) out = out.concat(ext.players);
  return out;
}
/* Shared position label: pool defenses carry pos "D" but every
   surface displays "DEF". All position text goes through here so
   picker, pinned card, detail, Team and roster rows cannot drift. */
function displayPos(pos) {
  return pos === 'D' ? 'DEF' : (pos || '');
}
function poolPlayer(id) {
  if (!id) return null;
  var players = allPoolPlayers();
  for (var i = 0; i < players.length; i++) {
    if (players[i].id === id) return players[i];
  }
  return null;
}
/* The pool FPPG for a roster-view player, matched from the vendored
   pool by player (normalized name + team) — the same figure the
   picker rows show. Returns null when the player has no pool match,
   so the roster row omits the average rather than showing a wrong
   number. */
function poolAvgFor(name, team) {
  if (!name) return null;
  var players = allPoolPlayers();
  var nn = normalizePlayerName(name);
  for (var i = 0; i < players.length; i++) {
    var p = players[i];
    if (p.team === team && normalizePlayerName(p.name) === nn) {
      return (typeof p.fppg === 'number' && isFinite(p.fppg)) ? p.fppg : null;
    }
  }
  return null;
}
function slotDef(key) {
  for (var i = 0; i < TEAM_SLOTS.length; i++) {
    if (TEAM_SLOTS[i].key === key) return TEAM_SLOTS[i];
  }
  return null;
}
/* Matchup from the pool Game string ("AWAY@HOME"): the player's team
   at home reads "vs <AWAY>", away reads "@ <HOME>". */
function poolMatchup(p) {
  var parts = String(p.game || '').split('@');
  if (parts.length !== 2) return p.opp ? 'vs ' + p.opp : '';
  return p.team === parts[1] ? 'vs ' + parts[0] : '@ ' + parts[1];
}
/* ESPN team-logo slug: the pool abbreviation lowercased, except WAS,
   which ESPN serves as "wsh". */
function espnTeamSlug(team) {
  var t = String(team || '').toLowerCase();
  return t === 'was' ? 'wsh' : t;
}
function teamLogoUrl(team) {
  return 'https://a.espncdn.com/i/teamlogos/nfl/500/' + espnTeamSlug(team) + '.png';
}
/* Circular team-icon preview markup: a circle carrying the player's
   NFL team logo, with the team abbreviation as its fallback content.
   The fallback starts hidden behind the image; wireAvatarFallback()
   swaps it in if the image fails to load, so the circle never shows
   a broken-image glyph. */
function playerAvatarHTML(p, large) {
  var abbr = escapeHtml(String(p.team || ''));
  return '<span class="pool-avatar' + (large ? ' pool-avatar-lg' : '') + '" aria-hidden="true">' +
    '<span class="pool-avatar-fallback">' + abbr + '</span>' +
    '<img class="pool-avatar-img" src="' + teamLogoUrl(p.team) + '" alt="">' +
  '</span>';
}
/* Empty-slot avatar: the same circular .pool-avatar in its fallback
   (no-image) treatment, carrying the slot's position text inside it
   exactly the way the fallback carries a team abbreviation when no
   team image is available — same circle, same neutral background,
   same text treatment, and no <img> so no broken image can show. */
function emptySlotAvatarHTML(label) {
  return '<span class="pool-avatar is-fallback team-empty-avatar" aria-hidden="true">' +
    '<span class="pool-avatar-fallback">' + escapeHtml(String(label || '')) + '</span>' +
  '</span>';
}
function wireAvatarFallback(scope) {
  if (!scope || !scope.querySelectorAll) return;
  var imgs = scope.querySelectorAll('.pool-avatar-img');
  Array.prototype.forEach.call(imgs, function (img) {
    function showFallback() {
      var wrap = img.parentNode;
      if (wrap && wrap.classList) wrap.classList.add('is-fallback');
      img.style.display = 'none';
      var fb = wrap ? wrap.querySelector('.pool-avatar-fallback') : null;
      if (fb) fb.style.display = 'flex';
    }
    img.addEventListener('error', showFallback);
  });
}
/* Kickoff for a pool player's game, from the pool's games map
   (game string -> ISO instant, UTC), formatted in the viewer's
   local time as short weekday + time ("Sun 1:25 PM"). A game missing
   from the map yields '' — the kickoff is omitted rather than guessed. */
function poolKickoff(p) {
  if (!p || !p.game) return '';
  /* Kickoff lookup spans BOTH games maps: a derived player's game
     lives only in the extension's map, an official player's only in
     the official pool's. This is display-only — the lock countdown
     (poolLockTime) deliberately reads the official map alone. */
  var pool = poolData();
  var ext = poolExtendedData();
  var iso = (pool && pool.games && pool.games[p.game]) ||
            (ext && ext.games && ext.games[p.game]);
  if (!iso) return '';
  var d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  try {
    var parts = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      hour: 'numeric', minute: '2-digit', hour12: true
    }).formatToParts(d);
    var wd = '', hr = '', min = '', ap = '';
    parts.forEach(function (part) {
      if (part.type === 'weekday') wd = part.value;
      else if (part.type === 'hour') hr = part.value;
      else if (part.type === 'minute') min = part.value;
      else if (part.type === 'dayPeriod') ap = part.value;
    });
    if (!wd || !hr || !ap) return '';
    return wd + ' ' + hr + ':' + (min || '00') + ' ' + ap.toUpperCase();
  } catch (e) {
    return '';
  }
}
/* The kickoff INSTANT (epoch ms) of a pool player's game, from the
   same two games maps poolKickoff() reads (official pool first, then
   the derived extension). Null when the game is absent from both maps
   or its instant is unparseable — an unknown kickoff is never guessed. */
function poolKickoffTime(p) {
  if (!p || !p.game) return null;
  var pool = poolData();
  var ext = poolExtendedData();
  var iso = (pool && pool.games && pool.games[p.game]) ||
            (ext && ext.games && ext.games[p.game]);
  if (!iso) return null;
  var t = new Date(iso).getTime();
  return isNaN(t) ? null : t;
}
/* Whether a pool player's game has started: now at or past that game's
   own kickoff (exactly at kickoff counts as started). Per player —
   a player in a later game stays unlocked after earlier games start. */
function playerGameStarted(p) {
  var t = poolKickoffTime(p);
  return t !== null && Date.now() >= t;
}
function teamSpent() {
  var total = 0;
  Object.keys(state.team.picks).forEach(function (k) {
    var p = poolPlayer(state.team.picks[k]);
    if (p) total += p.salary;
  });
  return total;
}
function teamRemaining() { return state.team.cap - teamSpent(); }
/* What a slot may spend: everything left, plus its current occupant's
   salary — a swap frees that salary before the replacement is priced,
   so the affordability check never double-charges the slot. */
function slotBudget(slotKey) {
  var cur = poolPlayer(state.team.picks[slotKey]);
  return teamRemaining() + (cur ? cur.salary : 0);
}
/* Average remaining price per player for the slot being edited, using
   the same math as the Team budget bar (floor of remaining / open),
   adjusted for that slot: the player currently in it is excluded from
   both sides — their salary returns to the effective remaining pool
   (which is exactly slotBudget) and their slot counts as open. */
function slotAvgPerPlayer(slotKey) {
  var spentExcl = 0, filledExcl = 0;
  Object.keys(state.team.picks).forEach(function (k) {
    if (k === slotKey) return;
    var p = poolPlayer(state.team.picks[k]);
    if (p) { spentExcl += p.salary; filledExcl++; }
  });
  var effectiveRemaining = state.team.cap - spentExcl;
  var openSlots = TEAM_SLOTS.length - filledExcl;
  if (openSlots <= 0) return effectiveRemaining;
  return Math.floor(effectiveRemaining / openSlots);
}

/* Canonical fingerprint of the current lineup, in slot order. The
   session submitted state stores one of these: the lineup counts as
   submitted only while its fingerprint still matches, so ANY pick
   added, removed or swapped after submitting un-matches it and the
   submitted state clears with no bookkeeping at the mutation sites. */
function lineupKey() {
  return TEAM_SLOTS.map(function (s) {
    return s.key + '=' + (state.team.picks[s.key] || '');
  }).join('|');
}
function teamSubmitted() {
  return !!state.team.submittedKey && state.team.submittedKey === lineupKey();
}
/* ---------------- auth (Firebase Auth, bare REST) ----------------
   The Team tab is an authenticated section: until a user signs in
   and their account resolves to a league team, the tab shows only
   the sign-in page (the gate markup in index.html; #team-view starts
   with .auth-gated and app.js removes it only for a resolved
   session). Scores and Standings stay public and untouched. No
   Firebase SDK: sign-in, token refresh and password reset are bare
   Identity Toolkit / Secure Token REST calls in the app's existing
   fetch style.
   The public web config below carries only public identifiers
   (apiKey, authDomain, databaseURL, projectId, appId) — the same
   values Firebase hands to every web client; they are not secrets.
   The session persists in localStorage under 'mffl.auth' as
   { refreshToken, uid, email, team, idToken, idTokenExpiry }: the
   refresh token is the durable credential, exchanged silently on
   load for a fresh idToken; every private RTDB call goes through
   authedDbFetch(), which attaches ?auth=<idToken>, refreshes once
   on a 401 and retries once before dropping the session.
   Team resolution reads /userTeams/<uid> — a per-user node the
   database rules expose ONLY to that signed-in user — never
   /teamOwners (service-account-only; clients must not read it).
   A null team means the account exists but is not linked: the gate
   shows the unassigned state. There is deliberately NO fallback
   team: an unresolved account never sees or writes any lineup. */
var FB_CONFIG = {
  apiKey: 'AIzaSyBRsJuVP5GO5qTArTiPcdbQv_4TX9IN29s',
  authDomain: 'mffl-79e7b.firebaseapp.com',
  databaseURL: 'https://mffl-79e7b-default-rtdb.firebaseio.com',
  projectId: 'mffl-79e7b',
  appId: '1:503395239681:web:12184efa3fead36710fd00'
};
var AUTH_STORAGE_KEY = 'mffl.auth';
var auth = {
  status: 'signed-out', /* restoring | signed-out | signed-in | unassigned */
  uid: null, email: null, team: null,
  idToken: null, idTokenExpiry: 0, refreshToken: null
};
/* One-line note the gate surfaces on the sign-in form when it is
   (re)shown for a reason other than a form error — today only the
   session-expired drop. Consumed by applyAuthGate(). */
var authGateNote = '';
var authBusy = false;

function readStoredAuth() {
  try {
    var raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    var s = JSON.parse(raw);
    if (!s || typeof s.refreshToken !== 'string' || !s.refreshToken) return null;
    return s;
  } catch (e) { return null; }
}
function saveAuthSession() {
  try {
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({
      refreshToken: auth.refreshToken, uid: auth.uid, email: auth.email,
      team: auth.team, idToken: auth.idToken, idTokenExpiry: auth.idTokenExpiry
    }));
  } catch (e) { /* storage unavailable: session stays in memory only */ }
}
function clearAuthSession() {
  try { window.localStorage.removeItem(AUTH_STORAGE_KEY); } catch (e) {}
  auth.uid = null; auth.email = null; auth.team = null;
  auth.idToken = null; auth.idTokenExpiry = 0; auth.refreshToken = null;
}
/* Adopt a stored session synchronously at script load (before boot):
   with a refresh token present the status is 'restoring' and the
   gate shows its restoring state — never the builder, never a
   forced re-login — until restoreAuth() settles it. */
(function initAuthFromStorage() {
  var s = readStoredAuth();
  if (!s) return;
  auth.status = 'restoring';
  auth.refreshToken = s.refreshToken;
  auth.uid = typeof s.uid === 'string' ? s.uid : null;
  auth.email = typeof s.email === 'string' ? s.email : null;
  auth.team = typeof s.team === 'string' ? s.team : null;
  auth.idToken = typeof s.idToken === 'string' ? s.idToken : null;
  auth.idTokenExpiry = typeof s.idTokenExpiry === 'number' ? s.idTokenExpiry : 0;
})();

/* Exchange the refresh token for a fresh idToken (Secure Token
   endpoint). Resolves the new idToken, or null when the exchange
   fails for any reason (revoked token, network, malformed reply). */
function refreshIdToken() {
  if (!auth.refreshToken) return Promise.resolve(null);
  return fetch('https://securetoken.googleapis.com/v1/token?key=' + FB_CONFIG.apiKey, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ grant_type: 'refresh_token', refresh_token: auth.refreshToken })
  }).then(function (res) { return res.ok ? res.json() : null; })
    .then(function (data) {
      if (!data || !data.id_token) return null;
      auth.idToken = data.id_token;
      auth.idTokenExpiry = Date.now() + (parseInt(data.expires_in, 10) || 3600) * 1000;
      if (data.refresh_token) auth.refreshToken = data.refresh_token;
      if (data.user_id) auth.uid = data.user_id;
      saveAuthSession();
      return auth.idToken;
    })
    .catch(function () { return null; });
}
/* The idToken for an RTDB call: the cached one while it is safely
   unexpired, otherwise a silent refresh. force=true skips the cache
   (the 401 retry path). Resolves null when no session can produce
   a token. */
function getIdToken(force) {
  if (!force && auth.idToken && auth.idTokenExpiry - Date.now() > 60000) {
    return Promise.resolve(auth.idToken);
  }
  return refreshIdToken();
}
/* One authenticated RTDB request against the private tree (paths
   outside /mffl), with the idToken attached as ?auth=. On a 401 the
   token is force-refreshed ONCE and the request retried ONCE; a
   second 401 drops the session to the sign-in gate with the
   session-expired note and this resolves null. Network failures
   reject so callers can keep their previous state. */
function authedDbFetch(path, options) {
  function attempt(force) {
    return getIdToken(force).then(function (token) {
      if (!token) return null;
      var sep = path.indexOf('?') === -1 ? '?' : '&';
      return fetch(FB_CONFIG.databaseURL + path + sep + 'auth=' + encodeURIComponent(token), options);
    });
  }
  return attempt(false).then(function (res) {
    if (res && res.status === 401) {
      return attempt(true).then(function (res2) {
        if (res2 && res2.status === 401) { expireAuthSession(); return null; }
        return res2;
      });
    }
    return res;
  });
}
/* Resolve the signed-in user's team from /userTeams/<uid> (the
   string stored there by the commissioner-side enrollment). Sets
   auth.status to 'signed-in' (team found) or 'unassigned' (null) —
   or back to 'signed-out' with a gate note when the auth service
   itself is unreachable. Never rejects. */
function resolveAuthTeam() {
  if (!auth.uid) { auth.team = null; auth.status = 'unassigned'; return Promise.resolve(); }
  return authedDbFetch('/userTeams/' + auth.uid + '.json', { method: 'GET' })
    .then(function (res) {
      if (!res) return null; /* session expired mid-flight: gate already reset */
      if (!res.ok) throw new Error('userTeams read failed: ' + res.status);
      return res.json();
    })
    .then(function (team) {
      if (auth.status === 'signed-out') return; /* expired while resolving */
      auth.team = (typeof team === 'string' && team) ? team : null;
      auth.status = auth.team ? 'signed-in' : 'unassigned';
      saveAuthSession();
    })
    .catch(function () {
      if (auth.status === 'signed-out') return;
      clearAuthSession();
      auth.status = 'signed-out';
      authGateNote = "Couldn't reach the sign-in service. Check your connection and try again.";
    });
}
/* After a session resolves (sign-in or silent restore): settle the
   gate, and for a signed-in user start from a clean working state
   and load THEIR team's saved lineup when the Team view is up. */
function afterAuthResolved() {
  applyAuthGate();
  if (auth.status !== 'signed-in') return;
  state.team.picks = {};
  state.team.submittedKey = null;
  teamLineupLoadedKey = null;
  if (state.view === 'team') { loadTeamLineup(); renderTeam(); }
}
/* Boot-time silent restore: exchange the stored refresh token,
   then resolve the team. A dead refresh token simply lands on the
   sign-in gate — the stored session is cleared, nothing is kept. */
function restoreAuth() {
  if (auth.status !== 'restoring') { applyAuthGate(); return; }
  refreshIdToken().then(function (token) {
    if (!token) {
      clearAuthSession();
      auth.status = 'signed-out';
      applyAuthGate();
      return;
    }
    resolveAuthTeam().then(afterAuthResolved);
  });
}
/* A lineup read/write came back 401 even after a token refresh:
   the session is dead. Drop everything (stored session, working
   picks) and return the gate with the session-expired note. */
function expireAuthSession() {
  clearAuthSession();
  auth.status = 'signed-out';
  authGateNote = 'Your session expired — sign in again.';
  state.team.picks = {};
  state.team.submittedKey = null;
  teamLineupLoadedKey = null;
  if (poolSheetSlot) forceClosePoolSheet();
  applyAuthGate();
  if (state.view === 'team') renderTeam();
}
/* User-initiated sign out: clears the stored session completely,
   discards unsaved in-progress edits, and returns the Team tab to
   the sign-in page. */
function signOut() {
  clearAuthSession();
  auth.status = 'signed-out';
  authGateNote = '';
  showGateError('');
  showGateNote('');
  var pw = $('gate-password'); if (pw) pw.value = '';
  state.team.picks = {};
  state.team.submittedKey = null;
  teamLineupLoadedKey = null;
  if (poolSheetSlot) forceClosePoolSheet();
  applyAuthGate();
  if (state.view === 'team') renderTeam();
}
/* Render the gate from auth.status: the builder exists in the DOM
   only for a signed-in session — every other status keeps
   #team-view .auth-gated, whose CSS suppresses it — and exactly one
   gate panel (restoring / sign-in / unassigned) shows. When signed
   in, the header title carries the user's own team name (the
   resolved team key, the same display naming the app uses for that
   team everywhere else); no identity text is shown anywhere. */
function applyAuthGate() {
  var view = $('team-view');
  if (!view) return;
  var authed = auth.status === 'signed-in';
  view.classList.toggle('auth-gated', !authed);
  var restoring = $('gate-restoring');
  if (restoring) restoring.hidden = auth.status !== 'restoring';
  var signin = $('gate-signin');
  if (signin) signin.hidden = auth.status !== 'signed-out';
  var unassigned = $('gate-unassigned');
  if (unassigned) unassigned.hidden = auth.status !== 'unassigned';
  if (authed) {
    var title = $('team-title');
    if (title) title.textContent = auth.team || '';
  }
  if (authGateNote && auth.status === 'signed-out') {
    showGateError(authGateNote);
    authGateNote = '';
  }
}
function showGateError(msg) {
  var el = $('gate-error');
  if (!el) return;
  el.textContent = msg || '';
  el.hidden = !msg;
}
function showGateNote(msg) {
  var el = $('gate-note');
  if (!el) return;
  el.textContent = msg || '';
  el.hidden = !msg;
}
function setSignInBusy(busy) {
  authBusy = busy;
  var btn = $('gate-submit');
  if (btn) {
    btn.disabled = busy;
    btn.textContent = busy ? 'Signing in…' : 'Sign in';
  }
}
/* Map an Identity Toolkit error to the gate's inline copy: bad
   credentials (in any of their spellings) get the one generic line
   so the form never reveals which half was wrong; a disabled
   account gets its own line; everything else — network failures
   included — gets the unreachable-service line. */
function signInErrorMessage(data) {
  var code = data && data.error && data.error.message ? String(data.error.message) : '';
  if (code.indexOf('INVALID_LOGIN_CREDENTIALS') === 0 ||
      code.indexOf('EMAIL_NOT_FOUND') === 0 ||
      code.indexOf('INVALID_PASSWORD') === 0) {
    return "Email or password doesn't match an account.";
  }
  if (code.indexOf('USER_DISABLED') === 0) return 'This account is disabled.';
  return "Couldn't reach the sign-in service. Check your connection and try again.";
}
function handleSignInSubmit(e) {
  e.preventDefault();
  if (authBusy) return;
  var email = ($('gate-email').value || '').trim();
  var password = $('gate-password').value || '';
  showGateError('');
  showGateNote('');
  setSignInBusy(true);
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + FB_CONFIG.apiKey, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email: email, password: password, returnSecureToken: true })
  }).then(function (res) {
    return res.json().then(function (data) { return { ok: res.ok, data: data }; },
                          function () { return { ok: false, data: null }; });
  }).then(function (r) {
    if (!r.ok || !r.data || !r.data.idToken) {
      setSignInBusy(false);
      showGateError(signInErrorMessage(r.data));
      return;
    }
    auth.uid = r.data.localId || null;
    auth.email = r.data.email || email;
    auth.idToken = r.data.idToken;
    auth.refreshToken = r.data.refreshToken || null;
    auth.idTokenExpiry = Date.now() + (parseInt(r.data.expiresIn, 10) || 3600) * 1000;
    auth.team = null;
    auth.status = 'restoring';
    saveAuthSession();
    resolveAuthTeam().then(function () {
      setSignInBusy(false);
      var pw = $('gate-password'); if (pw) pw.value = '';
      afterAuthResolved();
    });
  }).catch(function () {
    setSignInBusy(false);
    showGateError("Couldn't reach the sign-in service. Check your connection and try again.");
  });
}
/* Forgot password — also the first-time set-password path for
   commissioner-created accounts (they were enrolled through this
   same PASSWORD_RESET email). Uses the email currently in the
   Email field; an empty field is called out inline instead of
   sending anything. */
function handleForgotPassword() {
  var email = ($('gate-email').value || '').trim();
  showGateError('');
  if (!email) { showGateNote('Enter your email above first.'); return; }
  showGateNote('');
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + FB_CONFIG.apiKey, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ requestType: 'PASSWORD_RESET', email: email, continueUrl: 'https://mffl.richzarick.com/' })
  }).then(function (res) {
    if (!res.ok) throw new Error('sendOobCode failed: ' + res.status);
    showGateNote('Password email sent — check your inbox.');
  }).catch(function () {
    showGateNote("Couldn't send the password email. Check the address and try again.");
  });
}
function wireAuth() {
  var form = $('gate-form');
  if (form) form.addEventListener('submit', handleSignInSubmit);
  var forgot = $('gate-forgot');
  if (forgot) forgot.addEventListener('click', handleForgotPassword);
  var toggle = $('gate-pass-toggle');
  if (toggle) toggle.addEventListener('click', function () {
    var input = $('gate-password');
    if (!input) return;
    var show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    toggle.textContent = show ? 'Hide' : 'Show';
    toggle.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
  });
  var so1 = $('team-signout');
  if (so1) so1.addEventListener('click', signOut);
  var so2 = $('gate-signout');
  if (so2) so2.addEventListener('click', signOut);
  applyAuthGate();
}

/* ---------------- team lineup persistence (Firebase) ----------------
   The saved lineup lives in Firebase at /lineups/<week>/<team>,
   read and written ONLY under the signed-in user's idToken — the
   RTDB rules admit exactly the account that owns that team. Week
   and team come from the pool and the resolved session, never a
   hardcoded team. The record shape is the one the Team tab has
   always saved: { week, team, picks: { slot: playerId }, submitted,
   updatedAt }. Only Submit and Unlock write: Submit persists the
   validated lineup with submitted=true, Unlock persists the same
   picks with submitted=false (the lineup stays as the working
   draft). In-progress unsubmitted edits are never written, and a
   failed save NEVER shows the submitted state. (The artifact's
   getTeamLineup / saveTeamLineup actions and their stored rows
   remain in place, unused by this view.)
   Every successful /lineups write is MIRRORED to the public status
   node /lineupStatus/<week>/<team> (see putLineupStatus below), so
   the public roster view can read this team's entry state without
   ever touching the private record. */
var teamLineupLoadedKey = null;
var teamSaveInFlight = false;
/* Lookup in the OFFICIAL pool alone (never the derived extension):
   the save re-validation and the restore both key off FanDuel's own
   player list. */
function officialPoolPlayer(id) {
  var pool = poolData();
  if (!pool || !pool.players || !id) return null;
  for (var i = 0; i < pool.players.length; i++) {
    if (pool.players[i].id === id) return pool.players[i];
  }
  return null;
}
/* Submit-time validation of the current picks against the official
   pool: every slot filled, every Id an official (non-derived) pool
   player, the player's position legal for the slot, no player picked
   twice, and the total salary within the cap. The picker already
   makes an illegal lineup unbuildable; this re-checks at the save so
   nothing unvalidated is ever persisted as submitted. */
function validateLineupForSubmit() {
  var pool = poolData();
  if (!pool) return false;
  var cap = typeof pool.cap === 'number' ? pool.cap : state.team.cap;
  var seen = {};
  var total = 0;
  for (var i = 0; i < TEAM_SLOTS.length; i++) {
    var slotKey = TEAM_SLOTS[i].key;
    var id = state.team.picks[slotKey];
    if (!id) return false;
    var p = officialPoolPlayer(id);
    if (!p || isDerivedPlayer(p)) return false;
    if ((SLOT_POS[slotKey] || []).indexOf(p.pos) === -1) return false;
    if (seen[id]) return false;
    seen[id] = true;
    total += p.salary;
  }
  return total <= cap;
}
/* The picks as saved: slot key -> pool player Id, filled slots only,
   in slot order. */
function currentPicksObject() {
  var out = {};
  TEAM_SLOTS.forEach(function (s) {
    var id = state.team.picks[s.key];
    if (id) out[s.key] = id;
  });
  return out;
}
/* Mirror one lineup record to the PUBLIC status node:
   PUT /lineupStatus/<week>/<team> = { entered, submitted, updatedAt }
   derived from the record just written — entered = it carries at
   least one pick, submitted = its submitted flag, updatedAt = its
   write instant as ms epoch. Status only: no picks, counts or
   salary ever leave the private record. (A null record means the
   lineup document was deleted, so the status node is DELETEd too;
   no current flow deletes, but the mirror honors the contract.)
   The /lineups write is authoritative: a failed status write is
   caught here and NEVER fails the lineup operation — the caller's
   submitted state, the saved picks, everything proceeds as if the
   mirror had landed; the load-time self-heal in loadTeamLineup
   re-derives the node on a later visit. On success the local
   per-week status cache is updated in place, so this session's
   roster view reflects the team's own new status immediately. */
function putLineupStatus(week, team, record) {
  if (!record) {
    return authedDbFetch('/lineupStatus/' + week + '/' + team + '.json', { method: 'DELETE' })
      .then(function () { return true; }, function () { return false; })
      .then(function (ok) {
        if (ok) {
          var map = state.lineupStatus[String(week)];
          if (map) delete map[team];
        }
        return ok;
      });
  }
  var ms = typeof record.updatedAt === 'number' ? record.updatedAt : Date.parse(record.updatedAt);
  if (!isFinite(ms)) ms = Date.now();
  var status = {
    entered: !!(record.picks && Object.keys(record.picks).length > 0),
    submitted: record.submitted === true,
    updatedAt: ms
  };
  return authedDbFetch('/lineupStatus/' + week + '/' + team + '.json', {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(status)
  }).then(function (res) { return !!(res && res.ok); }, function () { return false; })
    .then(function (ok) {
      if (ok) {
        var key = String(week);
        if (!state.lineupStatus[key]) state.lineupStatus[key] = {};
        state.lineupStatus[key][team] = status;
      }
      return ok;
    });
}
function persistTeamLineup(submitted) {
  var pool = poolData();
  if (!pool || typeof pool.week !== 'number') return Promise.resolve(false);
  if (auth.status !== 'signed-in' || !auth.team) return Promise.resolve(false);
  var record = {
    week: pool.week,
    team: auth.team,
    picks: currentPicksObject(),
    submitted: submitted,
    updatedAt: new Date().toISOString()
  };
  return authedDbFetch('/lineups/' + pool.week + '/' + auth.team + '.json', {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(record)
  }).then(function (res) {
    if (!res || !res.ok) return false;
    /* the lineup is saved — mirror its status (failure-tolerant:
       putLineupStatus never rejects and its result is ignored) */
    return putLineupStatus(pool.week, auth.team, record).then(function () { return true; });
  }, function () { return false; });
}
/* Restore the saved record for (pool week, signed-in team) the
   first time the Team view is shown for that team. Picks rehydrate
   from the pool by Id; a saved Id the official pool no longer
   carries degrades to an empty slot rather than breaking the
   restore. submitted=true starts locked (the fingerprint is taken
   from the restored picks); submitted=false starts editable with
   the state machine derived from the restored picks. No record —
   or an unreachable database — leaves the empty builder. Without a
   signed-in team there is nothing to load: the gate owns the view. */
function loadTeamLineup() {
  if (auth.status !== 'signed-in' || !auth.team) return;
  var pool = poolData();
  if (!pool || typeof pool.week !== 'number') return;
  var key = pool.week + ':' + auth.team;
  if (teamLineupLoadedKey === key) return;
  teamLineupLoadedKey = key;
  var keyAtStart = lineupKey();
  authedDbFetch('/lineups/' + pool.week + '/' + auth.team + '.json', { method: 'GET' })
    .then(function (res) {
      if (!res || !res.ok) return null;
      return res.json();
    })
    .then(function (rec) {
      if (!rec || !rec.picks) return;
      /* Self-heal the public status node from the record just
         loaded (idempotent): lineups submitted before the node
         existed — or whose mirror write once failed — get their
         /lineupStatus entry (re)derived here, once per load.
         Fire-and-forget: putLineupStatus never rejects and its
         outcome never affects the restore. */
      putLineupStatus(pool.week, auth.team, rec);
      /* the user started picking before the record arrived: their
         in-progress edits win, the stale restore is dropped */
      if (lineupKey() !== keyAtStart) return;
      TEAM_SLOTS.forEach(function (s) {
        var id = rec.picks[s.key];
        if (!id) return;
        var p = poolPlayer(id);
        if (p && !isDerivedPlayer(p) && officialPoolPlayer(id)) {
          state.team.picks[s.key] = id;
        }
      });
      if (rec.submitted) state.team.submittedKey = lineupKey();
      if (state.view === 'team') renderTeam();
    })
    .catch(function () { /* no saved record reachable: empty builder */ });
}
/* The lineup lock: the earliest kickoff in the pool's games map
   (game string -> ISO instant). Derived from the data every time —
   no separate hardcoded date. Null when the pool/games are absent.
   OFFICIAL POOL ONLY, by design: poolData() is js/pool.js alone, so
   the derived extension's earlier games (Thursday NE@CHI etc.) never
   move this lock — it stays the official Sunday slate's earliest
   kickoff. Do not "fix" this to the merged games maps. */
function poolLockTime() {
  var pool = poolData();
  if (!pool || !pool.games) return null;
  var min = Infinity;
  Object.keys(pool.games).forEach(function (g) {
    var t = new Date(pool.games[g]).getTime();
    if (!isNaN(t) && t < min) min = t;
  });
  return min === Infinity ? null : min;
}
/* The header secondary text (#team-week, in the sticky Team header
   under the team name) is the ONE place the lineup status shows —
   consolidated from the former standalone lock line: the week name
   always comes first, then the status. Three states, driven by the
   same submitted/lock logic as before:
     - submitted: "Week 7 lineup submitted" (no countdown)
     - locked (past the lock, not submitted): "Week 7 · Lineups locked"
     - otherwise: "Week 7 · Locks in 2d 12h 33m" — the countdown in
       its existing unit-letter style, space-separated, no colons,
       zero leading units omitted ("12h 33m" under a day, "33m"
       under an hour), no seconds; the week number is dynamic (the
       pool's current week, WEEK as fallback), never hardcoded.
   Urgency treatments (countdown state only): under a day remaining
   the text is gold (.is-soon); under 30 minutes the SECONDS COME
   BACK in the same unit format ("29m 41s") and the text turns the
   live red (.is-critical). At/above a day it keeps the header
   secondary text's default color; submitted is gold (.is-submitted).
   The render is cached: the timer below ticks every second (so the
   <30m seconds and both threshold crossings land within ~a second)
   but the DOM is only touched when the displayed string or treatment
   actually changes — at/above 30 minutes that is once a minute,
   exactly as before. */
function teamWeekLabel() {
  var pool = poolData();
  return 'Week ' + (pool && pool.week != null ? pool.week : WEEK);
}
var teamLockLastRender = null;
function renderTeamLockLine(text, cls) {
  var key = text + '|' + cls;
  if (key === teamLockLastRender) return;
  teamLockLastRender = key;
  var el = $('team-week');
  if (!el) return;
  el.textContent = text;
  el.classList.remove('is-submitted', 'is-soon', 'is-critical');
  if (cls) el.classList.add(cls);
}
function updateTeamLockLine() {
  var el = $('team-week');
  if (!el) return;
  /* the same 1s tick drives the per-player swap locks: a filled
     player's swap button flips to locked as their kickoff passes */
  refreshTeamSwapLocks();
  var weekLabel = teamWeekLabel();
  if (teamSubmitted()) {
    renderTeamLockLine(weekLabel + ' lineup submitted', 'is-submitted');
    return;
  }
  var lock = poolLockTime();
  if (lock === null) { renderTeamLockLine(weekLabel, ''); return; }
  var diff = lock - Date.now();
  if (diff <= 0) { renderTeamLockLine(weekLabel + ' · Lineups locked', ''); return; }
  if (diff < 30 * 60000) {
    /* critical: seconds shown, ticking per second */
    var totalSec = Math.floor(diff / 1000);
    var cm = Math.floor(totalSec / 60);
    var cs = totalSec % 60;
    renderTeamLockLine(weekLabel + ' · Locks in ' + (cm > 0 ? cm + 'm ' + cs + 's' : cs + 's'), 'is-critical');
    return;
  }
  var totalMin = Math.floor(diff / 60000);
  var d = Math.floor(totalMin / 1440);
  var h = Math.floor(totalMin % 1440 / 60);
  var m = totalMin % 60;
  var parts = [];
  if (d > 0) { parts.push(d + 'd'); parts.push(h + 'h'); parts.push(m + 'm'); }
  else if (h > 0) { parts.push(h + 'h'); parts.push(m + 'm'); }
  else { parts.push(m + 'm'); }
  renderTeamLockLine(weekLabel + ' · Locks in ' + parts.join(' '), diff < 24 * 3600000 ? 'is-soon' : '');
}
var teamLockTimer = null;
function startTeamLockTimer() {
  updateTeamLockLine();
  if (teamLockTimer) return;
  teamLockTimer = setInterval(updateTeamLockLine, 1000);
}
/* Per-player swap-lock signature: one character per slot — '1' when
   the slot's filled player's game has started (swap locked), '0' when
   filled and still swappable, '-' when empty. renderTeam records the
   signature it rendered with; the 1s lock-line tick compares the live
   signature against it and re-renders the Team rows the moment any
   filled player's lock state flips, so a swap button locks itself at
   that player's kickoff with no page reload. While the picker/detail
   sheet is open the re-render is deferred (the sheet's close path
   re-renders the Team view anyway), so an in-progress interaction is
   never rebuilt under the user. */
var teamSwapLockRendered = null;
function swapLockSignature() {
  var picks = (state.team && state.team.picks) || {};
  var sig = '';
  TEAM_SLOTS.forEach(function (s) {
    var p = poolPlayer(picks[s.key]);
    sig += !p ? '-' : (playerGameStarted(p) ? '1' : '0');
  });
  return sig;
}
function refreshTeamSwapLocks() {
  if (state.view !== 'team') return;
  if (poolSheetSlot) return;
  if (teamSwapLockRendered === null) return;
  if (swapLockSignature() === teamSwapLockRendered) return;
  renderTeam();
}

/* Budget bar first-load suppression (20261023n): the bar carries
   .no-anim from markup, which disables its collapse/expand
   transition, so the FIRST .is-hidden application in renderTeam —
   including a submitted lineup restored from Firebase — paints
   directly in its correct state with no visible animation. This
   helper runs on that first application only: once the initial
   state has painted (double requestAnimationFrame, with a timeout
   fallback for throttled frames), .no-anim is removed and every
   later toggle (Submit, Unlock, fingerprint-breaking pick change)
   animates. It never touches WHEN the toggle fires. */
var teamBudgetAnimPrimed = false;
function primeTeamBudgetAnimation(bar) {
  if (teamBudgetAnimPrimed || !bar) return;
  teamBudgetAnimPrimed = true;
  var cleared = false;
  var clear = function () {
    if (cleared) return;
    cleared = true;
    bar.classList.remove('no-anim');
  };
  if (typeof requestAnimationFrame === 'function') {
    requestAnimationFrame(function () { requestAnimationFrame(clear); });
  }
  setTimeout(clear, 150);
}

function renderTeam() {
  var picks = state.team.picks || {};
  teamSwapLockRendered = swapLockSignature();
  var filled = 0;
  TEAM_SLOTS.forEach(function (s) { if (poolPlayer(picks[s.key])) filled++; });
  /* One shared total computation drives the budget bar AND the Submit
     button's disabled state, so the two can never disagree. Submit
     (in the sticky header) is enabled only for a complete, eligible
     lineup: every slot filled AND the total salary within the cap —
     an incomplete lineup stays disabled even when under budget. */
  var spent = teamSpent();
  var remaining = state.team.cap - spent;
  var open = TEAM_SLOTS.length - filled;
  $('team-salary-left').textContent = '$' + remaining.toLocaleString('en-US');
  $('team-filled').textContent = filled + '/' + TEAM_SLOTS.length + ' filled';
  $('team-avg-open').textContent = open > 0
    ? '$' + Math.floor(remaining / open).toLocaleString('en-US') : '—';
  var submitBtn = $('team-submit');
  var isSubmittedNow = teamSubmitted();
  /* Budget bar visibility: collapsed exactly while the lineup is
     locked in (submitted — the same teamSubmitted() condition that
     makes the header read "Week N lineup submitted", including a
     Firebase-restored submitted lineup). The toggle below is the
     ONLY place .is-hidden is applied and it fires on the same
     condition as before; CSS animates the collapse/expand. The
     values above are written first and on every render, so they
     stay current while the bar is collapsed and expanding never
     shows stale numbers. Any other state (draft, unsubmitted
     edits, unlocked, a pick change that breaks the submitted
     fingerprint) brings the bar back. */
  var budgetBar = $('team-budget');
  if (budgetBar) {
    budgetBar.classList.toggle('is-hidden', isSubmittedNow);
    primeTeamBudgetAnimation(budgetBar);
  }
  var isEligibleNow = filled === TEAM_SLOTS.length && spent <= state.team.cap;
  if (submitBtn) {
    if (isSubmittedNow) {
      submitBtn.textContent = 'Unlock';
      submitBtn.disabled = false;
      submitBtn.classList.add('is-unlock');
    } else if (isEligibleNow) {
      submitBtn.textContent = 'Submit';
      submitBtn.disabled = false;
      submitBtn.classList.remove('is-unlock');
    } else {
      submitBtn.textContent = 'Draft';
      submitBtn.disabled = true;
      submitBtn.classList.remove('is-unlock');
    }
    /* a save is in flight: the button stays disabled until it
       settles, so a second tap can never double-write */
    if (teamSaveInFlight) submitBtn.disabled = true;
  }
  /* the header secondary text (week + countdown / submitted /
     locked) refreshes with every Team render; its timer re-checks
     every second but only re-renders when the displayed string
     changes (once a minute at/above 30 minutes out, per second
     inside it) */
  startTeamLockTimer();
  var list = $('team-list');
  list.innerHTML = '';
  TEAM_SLOTS.forEach(function (s) {
    var p = poolPlayer(picks[s.key]);
    /* Two-click-target pattern, mirroring the picker rows (.pool-row):
       the row's content area (.team-slot-info) is one target and, on
       filled rows, a visually separate swap button (.team-swap) is
       another. The row element itself is a plain container (not a
       <button>, so the swap <button> never nests inside a button);
       the content click handler lives on the row and fires for any
       tap inside .team-slot-info via bubbling, while the swap button
       stopPropagation()s so its tap can never cross-fire into the
       content navigation — and vice versa. Pressed feedback is
       separate in CSS: .team-slot-info:active vs .team-swap:active. */
    var row = document.createElement('div');
    row.className = 'player-row team-slot-row' + (p ? ' is-filled' : ' is-empty');
    row.dataset.slot = s.key;
    if (p) {
      /* Filled Team rows mirror the picker list item (.pool-row):
         no far-left slot element — the row leads with the avatar,
         the position rides inline after the name as a .player-pos
         span (the picker's own rendering), and the text block is the
         picker's fixed three lines: name line, matchup + kickoff
         meta line (injury marker when flagged), and the average
         alone on its own line (.pool-fppg, same pool FPPG source —
         poolAvgFor — with the line kept even when there is no
         value, exactly as the picker keeps it). */
      var teamAvg = poolAvgFor(p.name, p.team);
      var teamAvgText = teamAvg !== null ? teamAvg.toFixed(1) + ' FPPG' : '';
      var kickoff = poolKickoff(p);
      var metaText = escapeHtml(poolMatchup(p)) + (kickoff ? ' · ' + escapeHtml(kickoff) : '');
      row.classList.add('has-avatar');
      var lockSvg = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
      /* Locked under the pre-existing submitted condition OR once
         THIS player's own game has started (per-player: later games
         stay swappable). Both render the identical locked treatment;
         the click handler below already no-ops on .is-locked. */
      var swapBtnHtml = (isSubmittedNow || playerGameStarted(p))
        ? '<button type="button" class="team-swap is-locked" data-action="swap" aria-label="Locked ' + s.label + ': ' + escapeHtml(p.name) + '" aria-disabled="true">' + lockSvg + '</button>'
        : '<button type="button" class="team-swap" data-action="swap" aria-label="Swap ' + s.label + ': ' + escapeHtml(p.name) + '">⇅</button>';
      row.innerHTML =
        '<div class="team-slot-info" role="button" tabindex="0" aria-label="View ' + escapeHtml(p.name) + '">' +
          playerAvatarHTML(p, false) +
          '<div class="player-main">' +
            '<div class="name-line" data-line="name"><span class="player-name">' + escapeHtml(p.name) + '</span><span class="player-pos">' + escapeHtml(displayPos(p.pos)) + '</span></div>' +
            '<div class="meta-line" data-line="meta"><span class="matchup">' + metaText + '</span>' +
              (p.inj ? '<span class="inj-badge">' + escapeHtml(p.inj) + '</span>' : '') + '</div>' +
            '<div class="avg-line" data-line="avg"><span class="pool-fppg">' + escapeHtml(teamAvgText) + '</span></div>' +
          '</div>' +
          '<div class="team-cell"><span class="team-sal-val">$' + p.salary.toLocaleString('en-US') + '</span></div>' +
        '</div>' +
        swapBtnHtml;
      wireAvatarFallback(row);
      /* Filled row content tap -> straight to that player's detail
         (sheet opens with the detail pane already showing). */
      row.addEventListener('click', function () { openPoolSheetDetail(s.key); });
      var infoEl = row.querySelector('.team-slot-info');
      if (infoEl) {
        infoEl.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPoolSheetDetail(s.key); }
        });
      }
      var swapBtn = row.querySelector('.team-swap');
      if (swapBtn) {
        swapBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          if (teamSubmitted()) return;
          if (swapBtn.classList.contains('is-locked')) return;
          openPoolSheet(s.key);
        });
        /* even beyond click, guarantee no cross-fire into the row */
        swapBtn.addEventListener('keydown', function (e) { e.stopPropagation(); });
      }
    } else {
      row.classList.add('has-avatar');
      row.innerHTML =
        '<div class="team-slot-info" role="button" tabindex="0" aria-label="Add ' + s.label + '">' +
          emptySlotAvatarHTML(s.label) +
          '<div class="player-main">' +
            '<div class="name-line"><span class="player-name team-empty">Empty</span></div>' +
          '</div>' +
        '</div>' +
        '<button type="button" class="pool-quick team-add-pill" data-action="add" aria-label="Add ' + s.label + '">＋</button>';
      /* Empty row tap -> picker list for that slot (unchanged). */
      row.addEventListener('click', function () { openPoolSheet(s.key); });
      var emptyInfoEl = row.querySelector('.team-slot-info');
      if (emptyInfoEl) {
        emptyInfoEl.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPoolSheet(s.key); }
        });
      }
      var addBtn = row.querySelector('.team-add-pill');
      if (addBtn) {
        addBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          openPoolSheet(s.key);
        });
        addBtn.addEventListener('keydown', function (e) { e.stopPropagation(); });
      }
    }
    list.appendChild(row);
  });
}

/* ---------------- player browser (Team picking sheet) ----------------
   Bottom sheet on the roster sheet's pattern: the dark panel slides up
   on mobile, the sticky solid header carries the slot label as title,
   the inner list scrolls (the panel itself does not), and the close
   button rides the sheet. Players already picked in OTHER slots are
   excluded; the slot's own current player is pinned at the top as a
   card whose pill is a destructive remove action. A player pricier than the slot's budget (remaining
   cap + the current occupant's salary) renders disabled, so an
   over-cap lineup is impossible by construction. */
var poolSheetSlot = null;
var poolHideTimer = null;

/* Open the sheet for a slot with the DETAIL pane already showing
   for the slot's current occupant — the filled Team row's content
   tap. Falls back to the picker list when the slot is empty. The
   sheet's own setup runs first (it closes any prior detail and
   renders the list underneath), then the detail for the occupant is
   opened on top of it with origin "team": Back and Remove therefore
   SKIP the picker list entirely and close the sheet back to the
   Team view, and the detail action shows Remove because the player
   holds this slot. */
function openPoolSheetDetail(slotKey) {
  var cur = poolPlayer(state.team.picks[slotKey]);
  if (!cur) { openPoolSheet(slotKey); return; }
  openPoolSheet(slotKey);
  openPlayerDetail(cur.id, 'team');
}
function openPoolSheet(slotKey) {
  if (!slotDef(slotKey)) return;
  poolSheetSlot = slotKey;
  closePlayerDetail();
  var sheet = $('pool-sheet');
  if (poolHideTimer) { clearTimeout(poolHideTimer); poolHideTimer = null; }
  sheet.hidden = false;
  document.body.classList.add('pool-open');
  $('pool-title').textContent = slotDef(slotKey).label;
  $('pool-search').value = '';
  $('pool-scroll').scrollTop = 0;
  renderPoolSheet();
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { sheet.classList.add('sheet-open'); });
  });
}
/* Picker header Back: the list-level exit to the Team view — the
   same dismissal the old close (X) control performed. It lives in
   the list header, which the detail pane covers while a detail is
   open, so detail-level exits stay with the detail's own Back
   (handleDetailBack, origin-aware); this handler is only reachable
   from the list. The Team view is re-rendered as the picker closes
   so it reflects any state settled while picking. */
function handlePoolBack() {
  renderTeam();
  closePoolSheet();
}
function closePoolSheet() {
  closePlayerDetail();
  poolSheetSlot = null;
  var sheet = $('pool-sheet');
  sheet.classList.remove('sheet-open');
  /* keep body.pool-open (scroll lock) until the page has slid away —
     the horizontal push-out runs at every width, desktop included */
  if (poolHideTimer) clearTimeout(poolHideTimer);
  poolHideTimer = setTimeout(function () {
    poolHideTimer = null;
    sheet.hidden = true;
    document.body.classList.remove('pool-open');
  }, 400);
}
function forceClosePoolSheet() {
  closePlayerDetail();
  poolSheetSlot = null;
  if (poolHideTimer) { clearTimeout(poolHideTimer); poolHideTimer = null; }
  var sheet = $('pool-sheet');
  sheet.classList.remove('sheet-open');
  sheet.hidden = true;
  document.body.classList.remove('pool-open');
}

function renderPoolSheet() {
  if (!poolSheetSlot) return;
  $('pool-cap').textContent = '$' + slotBudget(poolSheetSlot).toLocaleString('en-US');
  $('pool-avg').textContent = 'Avg per player $' + slotAvgPerPlayer(poolSheetSlot).toLocaleString('en-US');
  renderPoolCurrent();
  renderPoolList();
}

/* Close the pool sheet while KEEPING the detail pane visible on
   top of the list for the whole exit, so the picker list is never
   shown: the detail covers the list inside the sheet while the sheet
   slides away, and both are hidden together when the close finishes.
   Timing mirrors closePoolSheet (400ms horizontal slide-out at every
   width). Used only for the detail's team-origin exits. */
function closePoolSheetKeepingDetail() {
  var sheet = $('pool-sheet');
  var pane = typeof document !== 'undefined' ? document.getElementById('pool-detail') : null;
  poolSheetSlot = null;
  poolDetailId = null;
  poolDetailOrigin = null;
  sheet.classList.remove('sheet-open');
  if (poolHideTimer) clearTimeout(poolHideTimer);
  poolHideTimer = setTimeout(function () {
    poolHideTimer = null;
    sheet.hidden = true;
    if (pane) { pane.hidden = true; pane.classList.remove('is-exiting'); pane.style.opacity = ''; pane.style.transform = ''; pane.style.transition = ''; }
    document.body.classList.remove('pool-open');
  }, 400);
}

/* ---------------- player detail (drill-in pane) ---------------- */
var poolDetailId = null;
/* Where the open detail was opened FROM, set fresh on every open:
   "list" — a row tap in the picker list (pinned card included);
   "team" — a filled Team row's content tap. Back and Remove branch
   on it so a team-origin detail skips the picker list entirely. */
var poolDetailOrigin = null;

function normalizePlayerName(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function playerHistoryFor(p) {
  /* Full-pool history from js/history.js -> window.MFFL_HISTORY
     ({ weeks: [1..6], byId: { <pool id>: [{week, pts, opp}] } }),
     computed from ESPN with the league's FanDuel formula. Defensive:
     any missing or malformed history data falls back to the empty
     state rather than erroring. */
  try {
    if (!p || !p.id) return [];
    var arr = null;
    if (isDerivedPlayer(p)) {
      /* Derived players' history lives in the extension file's own
         map (window.MFFL_HISTORY_EXTENDED: EXT-Id -> [{week, pts,
         opp}]) — same record shape, separate store, never merged
         into MFFL_HISTORY. */
      var HE = (typeof window !== 'undefined') ? window.MFFL_HISTORY_EXTENDED : null;
      if (!HE || typeof HE !== 'object') return [];
      arr = HE[p.id];
    } else {
      var H = (typeof window !== 'undefined') ? window.MFFL_HISTORY : null;
      if (!H || typeof H !== 'object' || !H.byId || typeof H.byId !== 'object') return [];
      arr = H.byId[p.id];
    }
    if (!Array.isArray(arr)) return [];
    var out = [];
    for (var i = 0; i < arr.length; i++) {
      var e = arr[i];
      if (!e || typeof e.week !== 'number' || typeof e.pts !== 'number' || !isFinite(e.week) || !isFinite(e.pts)) continue;
      var opp = (typeof e.opp === 'string') ? e.opp : '';
      out.push({ week: e.week, pts: e.pts, opp: opp, matchup: opp });
    }
    out.sort(function (a, b) { return a.week - b.week; });
    return out;
  } catch (err) {
    return [];
  }
}

function openPlayerDetail(id, origin) {
  var p = poolPlayer(id);
  if (!p || !poolSheetSlot) return;
  poolDetailId = id;
  poolDetailOrigin = origin === 'team' ? 'team' : 'list';
  renderPlayerDetail();
  var pane = $('pool-detail');
  if (pane) { pane.classList.remove('is-exiting'); pane.hidden = false; }
  var sc = $('pool-detail-scroll');
  if (sc) sc.scrollTop = 0;
}
function closePlayerDetail() {
  poolDetailId = null;
  poolDetailOrigin = null;
  var pane = typeof document !== 'undefined' ? document.getElementById('pool-detail') : null;
  if (pane) { pane.hidden = true; pane.classList.remove('is-exiting'); pane.style.opacity = ''; pane.style.transform = ''; pane.style.transition = ''; }
}
/* Detail Back, origin-aware: from the picker list it behaves as
   before — hide the detail and land back on the list with the sheet
   still open. From the Team view it skips the picker list entirely:
   the sheet closes (detail kept on top during the exit so the list
   is never shown) and the user lands back on the Team view. */
function handleDetailBack() {
  if (poolDetailOrigin === 'team') {
    renderTeam();
    closePoolSheetKeepingDetail();
    return;
  }
  closePlayerDetail();
}
/* Clear a slot's pick WITHOUT dismissing the selection sheet: the
   state change is real (the Team view behind the sheet updates too),
   the sheet re-renders in its empty state — no pinned card, the removed
   player back in the eligible list, header figures recomputed — and
   the sheet stays open on the same slot so a new pick can be made. */
function clearPickInPlace(slotKey) {
  delete state.team.picks[slotKey];
  renderPoolSheet();
  renderTeam();
}
function renderPlayerDetail() {
  if (!poolDetailId) return;
  var p = poolPlayer(poolDetailId);
  if (!p) return;
  var nameEl = $('pool-detail-name');
  if (nameEl) {
    var nameTextEl = $('pool-detail-name-text');
    if (nameTextEl) nameTextEl.textContent = p.name; else nameEl.textContent = p.name;
    var posEl = $('pool-detail-pos');
    if (posEl) posEl.textContent = displayPos(p.pos);
  }
  var avatarEl = $('pool-detail-avatar');
  if (avatarEl) {
    avatarEl.innerHTML = playerAvatarHTML(p, true);
    wireAvatarFallback(avatarEl);
  }
  var meta = $('pool-detail-meta');
  if (meta) {
    var kickoff = poolKickoff(p);
    var matchup = poolMatchup(p);
    meta.innerHTML =
      '<div class="pool-detail-meta-line"><span>' + escapeHtml(matchup || '') + (kickoff ? ' · ' + escapeHtml(kickoff) : '') + '</span>' +
      (p.inj ? '<span class="inj-badge">' + escapeHtml(p.inj) + '</span>' : '') + '</div>' +
      '<div class="pool-detail-meta-line"><span class="pool-detail-salary">$' + p.salary.toLocaleString('en-US') + '</span><span class="pool-detail-fppg">' + (typeof p.fppg === 'number' ? p.fppg.toFixed(1) : '0.0') + ' FPPG</span></div>';
  }
  var histWrap = $('pool-detail-history');
  if (histWrap) {
    histWrap.innerHTML = '';
    var hist = playerHistoryFor(p);
    if (!hist.length) {
      var empty = document.createElement('div');
      empty.className = 'pool-detail-empty';
      empty.textContent = 'No recorded weeks yet';
      histWrap.appendChild(empty);
    } else {
      hist.forEach(function (h) {
        var r = document.createElement('div');
        r.className = 'history-row';
        var oppLabel = h.opp || h.matchup || '';
        r.innerHTML = '<span class="history-week">Week ' + h.week + '</span>' +
          (oppLabel ? '<span class="history-matchup">' + escapeHtml(oppLabel) + '</span>' : '<span class="history-matchup"></span>') +
          '<span class="history-pts">' + fmt(h.pts) + '</span>';
        histWrap.appendChild(r);
      });
    }
  }
  var btn = $('pool-detail-pill');
  if (btn && poolSheetSlot) {
    btn.classList.remove('is-remove');
    if (isDerivedPlayer(p)) {
      /* Derived player detail is view-only until verification: the
         Add pill renders disabled/inert, exactly like the row's
         quick-add. Salary and FPPG above still show as usual. */
      btn.textContent = '＋';
      btn.disabled = true;
      btn.setAttribute('aria-label', 'Add ' + p.name);
      return;
    }
    var curId = state.team.picks[poolSheetSlot];
    if (curId === p.id) {
      btn.textContent = '✕';
      btn.disabled = false;
      btn.classList.add('is-remove');
      btn.setAttribute('aria-label', 'Remove ' + p.name);
    } else {
      var elsewhere = Object.keys(state.team.picks).some(function (k) { return k !== poolSheetSlot && state.team.picks[k] === p.id; });
      if (elsewhere) {
        btn.textContent = '✓';
        btn.disabled = true;
        btn.setAttribute('aria-label', p.name + ' is in lineup');
      } else if (p.salary > slotBudget(poolSheetSlot)) {
        btn.textContent = '＋';
        btn.disabled = true;
        btn.setAttribute('aria-label', 'Add ' + p.name);
      } else {
        btn.textContent = '＋';
        btn.disabled = false;
        btn.setAttribute('aria-label', 'Add ' + p.name);
      }
    }
  }
}
function handleDetailAction() {
  if (!poolDetailId || !poolSheetSlot) return;
  var p = poolPlayer(poolDetailId);
  if (!p) return;
  if (isDerivedPlayer(p)) return; /* derived: view-only, never selectable */
  var slotKey = poolSheetSlot;
  if (state.team.picks[slotKey] === p.id) {
    if (poolDetailOrigin === 'team') {
      /* Detail Remove from the Team view: clear the pick and close
         the sheet straight back to the Team view (slot now Empty,
         budget restored there) — the user is not dropped into a
         picker they never opened. The detail stays on top during
         the sheet exit so the list is never shown. */
      delete state.team.picks[slotKey];
      renderTeam();
      closePoolSheetKeepingDetail();
      return;
    }
    /* Detail Remove: same in-place treatment as the pinned card's
       destructive pill — clear the pick and animate BACK to the
       selection list in its empty state, sheet still open. */
    var pane = $('pool-detail');
    if (pane && !pane.hidden) {
      if (pane.classList.contains('is-exiting')) return;
      pane.style.transition = 'opacity 280ms cubic-bezier(0.32, 0.72, 0, 1), transform 280ms cubic-bezier(0.32, 0.72, 0, 1)';
      pane.classList.add('is-exiting');
      setTimeout(function () {
        pane.classList.remove('is-exiting');
        closePlayerDetail();
        clearPickInPlace(slotKey);
      }, 280);
    } else {
      closePlayerDetail();
      clearPickInPlace(slotKey);
    }
    return;
  }
  var elsewhere = Object.keys(state.team.picks).some(function (k) { return k !== slotKey && state.team.picks[k] === p.id; });
  if (elsewhere) return;
  if (p.salary > slotBudget(slotKey)) return;
  closePlayerDetail();
  pickPlayer(slotKey, p.id);
}

function poolPlayerRow(p, isCurrent) {
  var row = document.createElement('div');
  /* Derived players render with the app's existing disabled/dimmed
     row treatment (.pool-row.disabled, the same class family as
     .over-budget) — visible and tappable to VIEW, never pickable. */
  var derived = isDerivedPlayer(p);
  row.className = 'pool-row' + (isCurrent ? ' current' : '') + (derived ? ' disabled' : '');
  row.dataset.playerId = p.id;
  if (derived) row.dataset.derived = 'true';
  row.setAttribute('role', 'button');
  row.tabIndex = 0;
  var budget = poolSheetSlot ? slotBudget(poolSheetSlot) : Infinity;
  var unaffordable = !isCurrent && p.salary > budget;
  var kickoff = poolKickoff(p);
  var metaText = escapeHtml(poolMatchup(p)) + (kickoff ? ' · ' + escapeHtml(kickoff) : '');
  /* Fixed three-line layout (every row, pinned card included):
     line 1 = name line, line 2 = meta line, line 3 = average line.
     Each line element ALWAYS renders — a missing segment (no mapped
     kickoff, no recorded FPPG) is omitted from its line, but the line
     itself stays, so the structure never collapses to two lines. */
  var fppgText = (typeof p.fppg === 'number' && isFinite(p.fppg)) ? p.fppg.toFixed(1) + ' FPPG' : '';
  row.innerHTML =
    '<span class="pool-info">' +
      playerAvatarHTML(p, false) +
      '<span class="pool-main">' +
        '<span class="name-line" data-line="name"><span class="player-name">' + escapeHtml(p.name) + '</span><span class="player-pos">' + escapeHtml(displayPos(p.pos)) + '</span>' +
          (isCurrent ? '<span class="pool-tag">In lineup</span>' : '') + '</span>' +
        '<span class="meta-line" data-line="meta"><span class="matchup">' + metaText + '</span>' +
          (p.inj ? '<span class="inj-badge">' + escapeHtml(p.inj) + '</span>' : '') + '</span>' +
        '<span class="avg-line pool-avg-line" data-line="avg"><span class="pool-fppg">' + escapeHtml(fppgText) + '</span></span>' +
      '</span>' +
      '<span class="pool-salary">$' + p.salary.toLocaleString('en-US') + '</span>' +
    '</span>' +
    '<button type="button" class="pool-quick" aria-label="Quick add ' + escapeHtml(p.name) + '">＋</button>';
  wireAvatarFallback(row);
  var quick = row.querySelector('.pool-quick');
  if (quick) {
    if (derived) {
      /* Disabled from selection until verified: the pill renders in
         its disabled treatment (the .pool-quick:disabled styling)
         and carries NO pick handler — tapping it changes nothing.
         (The trailing stopPropagation listener below still applies,
         so the tap can't fall through to row navigation either way;
         the row itself still opens the detail for viewing.) */
      quick.disabled = true;
    } else if (isCurrent) {
      quick.textContent = '✕';
      quick.classList.add('is-remove');
      quick.disabled = false;
      quick.setAttribute('aria-label', 'Remove ' + p.name);
      quick.addEventListener('click', function (e) {
        e.stopPropagation();
        if (!poolSheetSlot) return;
        var slotKey = poolSheetSlot;
        /* In-place clear: animate the pinned card out, then re-render
           the sheet in its empty state WITHOUT closing it. */
        if (row.classList.contains('is-exiting')) return;
        quick.disabled = true;
        /* inline transition mirrors the .is-exiting CSS rule so the
           exit's computed transition is explicit on the element */
        row.style.transition = 'opacity 320ms cubic-bezier(0.32, 0.72, 0, 1), transform 320ms cubic-bezier(0.32, 0.72, 0, 1), height 320ms cubic-bezier(0.32, 0.72, 0, 1), padding-top 320ms cubic-bezier(0.32, 0.72, 0, 1), padding-bottom 320ms cubic-bezier(0.32, 0.72, 0, 1), min-height 320ms cubic-bezier(0.32, 0.72, 0, 1)';
        row.classList.add('is-exiting');
        var startH = row.offsetHeight;
        if (startH) row.style.height = startH + 'px';
        /* force reflow so the collapse transition runs from the
           explicit start height to 0 */
        void row.offsetHeight;
        row.style.height = '0px';
        row.style.minHeight = '0px';
        row.style.paddingTop = '0px';
        row.style.paddingBottom = '0px';
        row.style.opacity = '0';
        setTimeout(function () {
          /* guard: the sheet may have been closed/navigated away
             during the exit — only re-render if still on this slot */
          if (poolSheetSlot === slotKey) {
            clearPickInPlace(slotKey);
          } else {
            delete state.team.picks[slotKey];
            renderTeam();
          }
        }, 320);
      });
    } else if (unaffordable) {
      quick.disabled = true;
    } else {
      (function (pid) {
        quick.addEventListener('click', function (e) {
          e.stopPropagation();
          if (!poolSheetSlot) return;
          pickPlayer(poolSheetSlot, pid);
        });
      })(p.id);
    }
    /* even a disabled quick button must never trigger row navigation */
    quick.addEventListener('click', function (e) { e.stopPropagation(); });
  }
  row.addEventListener('click', function () { openPlayerDetail(p.id, 'list'); });
  row.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPlayerDetail(p.id, 'list'); }
  });
  return row;
}

function renderPoolCurrent() {
  var wrap = $('pool-current');
  wrap.innerHTML = '';
  var cur = poolPlayer(state.team.picks[poolSheetSlot]);
  if (!cur) { wrap.hidden = true; return; }
  wrap.hidden = false;
  wrap.appendChild(poolPlayerRow(cur, true));
}

function renderPoolList() {
  if (!poolSheetSlot) return;
  var list = $('pool-list');
  list.innerHTML = '';
  var pool = poolData();
  if (!pool) {
    var none = document.createElement('div');
    none.className = 'pool-empty';
    none.textContent = 'Player pool unavailable.';
    list.appendChild(none);
    return;
  }
  var slotKey = poolSheetSlot;
  var positions = SLOT_POS[slotKey] || [];
  var pickedElsewhere = {};
  Object.keys(state.team.picks).forEach(function (k) {
    if (k !== slotKey) pickedElsewhere[state.team.picks[k]] = true;
  });
  var query = ($('pool-search').value || '').trim().toLowerCase();
  var budget = slotBudget(slotKey);
  /* The list is the MERGED universe (official + derived extension):
     derived players are listed, searchable and salary-sorted exactly
     like official ones; their rows render disabled in poolPlayerRow
     and no selection path accepts them. */
  var eligible = allPoolPlayers().filter(function (p) {
    if (positions.indexOf(p.pos) < 0) return false;
    if (pickedElsewhere[p.id]) return false;
    if (state.team.picks[slotKey] === p.id) return false; /* pinned above */
    if (query && p.name.toLowerCase().indexOf(query) < 0 &&
        p.team.toLowerCase().indexOf(query) < 0) return false;
    return true;
  });
  eligible.sort(function (a, b) {
    return b.salary - a.salary || (a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
  });
  if (!eligible.length) {
    var noRes = document.createElement('div');
    noRes.className = 'pool-empty';
    noRes.textContent = 'No players match.';
    list.appendChild(noRes);
    return;
  }
  eligible.forEach(function (p) {
    var row = poolPlayerRow(p, false);
    if (p.salary > budget) row.classList.add('over-budget');
    list.appendChild(row);
  });
}

function pickPlayer(slotKey, id) {
  var p = poolPlayer(id);
  if (!p) return;
  /* Belt-and-braces: even if a future caller bypasses the disabled
     pills, a derived player can never enter the lineup, so the
     budget bar and the Submit enable rule are unreachable by them. */
  if (isDerivedPlayer(p)) return;
  if (p.salary > slotBudget(slotKey)) return; /* over-cap picks cannot happen */
  state.team.picks[slotKey] = id;
  closePoolSheet();
  renderTeam();
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
  /* keep the live week's public lineup status as fresh as its doc */
  await fetchLineupStatus(W, true);
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
