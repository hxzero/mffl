/* MFFL Week 9 DERIVED player pool extension — producers only (Option 2).
   Source: ESPN rosters / game summaries, computed 2026-11-03 by
   pool-roll-week9 build-pool-extended-week9.mjs per pool-extension-investigation.md.
   These players are NOT in FanDuel's Week 9 Sunday-main contest pool:
   they are the producers (Weeks 1-8 stat lines) of the 8 teams in the
   4 non-main-slate games (JAX@BAL, CIN@ATL, TB@CHI, BUF@MIN), plus the
   8 team defenses. FPPG = ESPN-computed FanDuel points / games appeared.
   Salary = per-position model (floor + slope x FPPG, clamped at the
   positional floor, rounded to $100) — MODELED, not FanDuel-official.
   Every record carries derived: true and a priceTier:
   "model" (formula price off a solid average), "floor" (modeled price
   sits at the positional floor), "flagged" (price is an estimate:
   defense, injured reserve, tiny sample, or star-premium zone).
   IDs are "EXT-" + ESPN athlete id ("EXT-DEF-<TEAM>" for defenses) and
   cannot collide with FanDuel contest ids in js/pool.js, which this
   file never modifies. Loaded after js/pool.js; app code reads
   window.MFFL_POOL_EXTENDED / window.MFFL_HISTORY_EXTENDED. */
window.MFFL_POOL_EXTENDED = {
 "week": 9,
 "cap": 60000,
 "source": "espn-derived",
 "games": {
  "JAX@BAL": "2026-11-06T01:15Z",
  "CIN@ATL": "2026-11-08T14:30Z",
  "TB@CHI": "2026-11-09T01:20Z",
  "BUF@MIN": "2026-11-10T01:15Z"
 },
 "players": [
  {
   "id": "EXT-3918298",
   "name": "Josh Allen",
   "pos": "QB",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 8200,
   "fppg": 28.3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3915511",
   "name": "Joe Burrow",
   "pos": "QB",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 8000,
   "fppg": 25.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4239993",
   "name": "Tee Higgins",
   "pos": "WR",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 8000,
   "fppg": 18.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4379399",
   "name": "James Cook III",
   "pos": "RB",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 7900,
   "fppg": 19.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4430807",
   "name": "Bijan Robinson",
   "pos": "RB",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 7700,
   "fppg": 18.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4431611",
   "name": "Caleb Williams",
   "pos": "QB",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 7600,
   "fppg": 20.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4259545",
   "name": "D'Andre Swift",
   "pos": "RB",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 7600,
   "fppg": 17.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360310",
   "name": "Trevor Lawrence",
   "pos": "QB",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 7600,
   "fppg": 20.5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3043078",
   "name": "Derrick Henry",
   "pos": "RB",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 7500,
   "fppg": 17.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429615",
   "name": "Zay Flowers",
   "pos": "WR",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 7500,
   "fppg": 15.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4362628",
   "name": "Ja'Marr Chase",
   "pos": "WR",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 7400,
   "fppg": 15.7,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4882093",
   "name": "Bhayshul Tuten",
   "pos": "RB",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 7300,
   "fppg": 16.3,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4596448",
   "name": "Bucky Irving",
   "pos": "RB",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 7300,
   "fppg": 16.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3916387",
   "name": "Lamar Jackson",
   "pos": "QB",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 7300,
   "fppg": 16.6,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4608686",
   "name": "Kyle Monangai",
   "pos": "RB",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 7200,
   "fppg": 15.7,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360423",
   "name": "Michael Penix Jr.",
   "pos": "QB",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 7100,
   "fppg": 14.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2573079",
   "name": "Carson Wentz",
   "pos": "QB",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 7000,
   "fppg": 12.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3917315",
   "name": "Kyler Murray",
   "pos": "QB",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 7000,
   "fppg": 12.8,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4035671",
   "name": "Tyler Huntley",
   "pos": "QB",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 6800,
   "fppg": 11.1,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3052587",
   "name": "Baker Mayfield",
   "pos": "QB",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 6700,
   "fppg": 9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-15168",
   "name": "Case Keenum",
   "pos": "QB",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 6700,
   "fppg": 8.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685278",
   "name": "Luther Burden III",
   "pos": "WR",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 6700,
   "fppg": 12.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4426502",
   "name": "Drake London",
   "pos": "WR",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 6600,
   "fppg": 12,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4596472",
   "name": "Jalon Daniels",
   "pos": "QB",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 6600,
   "fppg": 7.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4262921",
   "name": "Justin Jefferson",
   "pos": "WR",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 6600,
   "fppg": 12.1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4432620",
   "name": "Parker Washington",
   "pos": "WR",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 6600,
   "fppg": 12.1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4434153",
   "name": "Tyson Bagent",
   "pos": "QB",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 6400,
   "fppg": 5.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3042519",
   "name": "Aaron Jones Sr.",
   "pos": "RB",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 6300,
   "fppg": 11.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2972515",
   "name": "Cooper Rush",
   "pos": "QB",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 6300,
   "fppg": 4.6,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4362238",
   "name": "Chase Brown",
   "pos": "RB",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 6100,
   "fppg": 10.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3915416",
   "name": "DJ Moore",
   "pos": "WR",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 6100,
   "fppg": 9.6,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4567750",
   "name": "Emeka Egbuka",
   "pos": "WR",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 6100,
   "fppg": 9.5,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5344782",
   "name": "Jack Strand",
   "pos": "QB",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 6100,
   "fppg": 1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4429582",
   "name": "Joe Fagnano",
   "pos": "QB",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 6100,
   "fppg": 0.9,
   "inj": "Q",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3115293",
   "name": "Kyle Allen",
   "pos": "QB",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 6000,
   "fppg": -0.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3059989",
   "name": "Nick Mullens",
   "pos": "QB",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 6000,
   "fppg": -0.3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4889929",
   "name": "Quinn Ewers",
   "pos": "QB",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 6000,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4241479",
   "name": "Tua Tagovailoa",
   "pos": "QB",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 6000,
   "fppg": 0.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4635008",
   "name": "Keon Coleman",
   "pos": "WR",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 5900,
   "fppg": 8.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4241474",
   "name": "Brian Robinson Jr.",
   "pos": "RB",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 5700,
   "fppg": 8.4,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3916433",
   "name": "Jakobi Meyers",
   "pos": "WR",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 5700,
   "fppg": 7.7,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4373678",
   "name": "Khalil Shakir",
   "pos": "WR",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 5700,
   "fppg": 7.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4431299",
   "name": "Rome Odunze",
   "pos": "WR",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 5600,
   "fppg": 7.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429205",
   "name": "Jordan Addison",
   "pos": "WR",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 5500,
   "fppg": 6.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4385690",
   "name": "Dalton Kincaid",
   "pos": "TE",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 5400,
   "fppg": 9.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4361409",
   "name": "Jahan Dotson",
   "pos": "WR",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 5400,
   "fppg": 6.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360569",
   "name": "Jordan Mason",
   "pos": "RB",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 5400,
   "fppg": 6.9,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-2973405",
   "name": "Kalif Raymond",
   "pos": "WR",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 5400,
   "fppg": 6.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3116164",
   "name": "Mike Gesicki",
   "pos": "TE",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 5400,
   "fppg": 9.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4371733",
   "name": "Kenny Gainwell",
   "pos": "RB",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 5300,
   "fppg": 6.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4036133",
   "name": "T.J. Hockenson",
   "pos": "TE",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 5300,
   "fppg": 9.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4362619",
   "name": "Chris Rodriguez Jr.",
   "pos": "RB",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 5200,
   "fppg": 6,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360939",
   "name": "Rashod Bateman",
   "pos": "WR",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 5200,
   "fppg": 5.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430539",
   "name": "Brenton Strange",
   "pos": "TE",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 5100,
   "fppg": 7.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3116165",
   "name": "Chris Godwin Jr.",
   "pos": "WR",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 5100,
   "fppg": 5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3116389",
   "name": "Samaje Perine",
   "pos": "RB",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 5100,
   "fppg": 5.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3915411",
   "name": "Ty Johnson",
   "pos": "RB",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 5100,
   "fppg": 5.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4723086",
   "name": "Colston Loveland",
   "pos": "TE",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 5000,
   "fppg": 7.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4242433",
   "name": "Joshua Palmer",
   "pos": "WR",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 5000,
   "fppg": 4.3,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360248",
   "name": "Kyle Pitts Sr.",
   "pos": "TE",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 5000,
   "fppg": 6.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4432773",
   "name": "Brian Thomas Jr.",
   "pos": "WR",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 4900,
   "fppg": 4.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4879194",
   "name": "Josh Cameron",
   "pos": "WR",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 4900,
   "fppg": 4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4038441",
   "name": "Justice Hill",
   "pos": "RB",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 4900,
   "fppg": 4.3,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2576581",
   "name": "Chris Moore",
   "pos": "WR",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 4800,
   "fppg": 3.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4384852",
   "name": "Dohnte Meyers",
   "pos": "WR",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 4800,
   "fppg": 3.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4870847",
   "name": "Ja'Kobi Lane",
   "pos": "WR",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 4800,
   "fppg": 3.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5220680",
   "name": "Ted Hurst III",
   "pos": "WR",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 4800,
   "fppg": 3.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4608810",
   "name": "Tez Johnson",
   "pos": "WR",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 4800,
   "fppg": 3.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3116365",
   "name": "Mark Andrews",
   "pos": "TE",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 4700,
   "fppg": 5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-MIN",
   "name": "Minnesota Vikings",
   "pos": "D",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 4700,
   "fppg": 11.1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4426386",
   "name": "Roschon Johnson",
   "pos": "RB",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 4700,
   "fppg": 3.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430871",
   "name": "Sean Tucker",
   "pos": "RB",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 4700,
   "fppg": 3.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4035886",
   "name": "Khalil Herbert",
   "pos": "RB",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 4600,
   "fppg": 2.7,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4690070",
   "name": "Mitchell Tinsley",
   "pos": "WR",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 4600,
   "fppg": 2.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685415",
   "name": "Travis Hunter",
   "pos": "WR",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 4600,
   "fppg": 2.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4243331",
   "name": "Cade Otton",
   "pos": "TE",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 4500,
   "fppg": 3.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4696882",
   "name": "Devontez Walker",
   "pos": "WR",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 4500,
   "fppg": 2.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4686248",
   "name": "Nate Boerkircher",
   "pos": "TE",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 4500,
   "fppg": 3.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-TB",
   "name": "Tampa Bay Buccaneers",
   "pos": "D",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 4500,
   "fppg": 9.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-5088338",
   "name": "Elijah Sarratt",
   "pos": "WR",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 4400,
   "fppg": 1.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-JAX",
   "name": "Jacksonville Jaguars",
   "pos": "D",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 4400,
   "fppg": 8.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4360637",
   "name": "Jeshaun Jones",
   "pos": "WR",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 4400,
   "fppg": 1.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4876132",
   "name": "Josh Cuevas",
   "pos": "TE",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 4400,
   "fppg": 3.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3043275",
   "name": "Austin Hooper",
   "pos": "TE",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 4300,
   "fppg": 2.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-CIN",
   "name": "Cincinnati Bengals",
   "pos": "D",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 4300,
   "fppg": 8.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3930086",
   "name": "Dawson Knox",
   "pos": "TE",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 4300,
   "fppg": 2.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3127310",
   "name": "Drew Sample",
   "pos": "TE",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 4300,
   "fppg": 2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3886598",
   "name": "Jauan Jennings",
   "pos": "WR",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 4300,
   "fppg": 1.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4432260",
   "name": "Matt Hibner",
   "pos": "TE",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 4300,
   "fppg": 2.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429501",
   "name": "Ray Davis",
   "pos": "RB",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 4300,
   "fppg": 1.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4870612",
   "name": "Zachariah Branch",
   "pos": "WR",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 4300,
   "fppg": 1.3,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-2576336",
   "name": "Ameer Abdullah",
   "pos": "RB",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 4200,
   "fppg": 1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4433959",
   "name": "Ben Yurosek",
   "pos": "TE",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 4200,
   "fppg": 1.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4240631",
   "name": "DeeJay Dallas",
   "pos": "RB",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 4200,
   "fppg": 1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4832846",
   "name": "Demond Claiborne",
   "pos": "RB",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 4200,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4708049",
   "name": "Gavin Bartholomew",
   "pos": "TE",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 4200,
   "fppg": 1.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5085189",
   "name": "Jack Endries",
   "pos": "TE",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 4200,
   "fppg": 1.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5160110",
   "name": "Jahdae Walker",
   "pos": "WR",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 4200,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4690143",
   "name": "LaJohntay Wester",
   "pos": "WR",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 4200,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3917914",
   "name": "Olamide Zaccheaus",
   "pos": "WR",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 4200,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4565185",
   "name": "Tai Felton",
   "pos": "WR",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 4200,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4869748",
   "name": "Zavion Thomas",
   "pos": "WR",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 4200,
   "fppg": 1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4035020",
   "name": "Charlie Woerner",
   "pos": "TE",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 4100,
   "fppg": 0.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-CHI",
   "name": "Chicago Bears",
   "pos": "D",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 4100,
   "fppg": 7,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-5092508",
   "name": "Colbie Young",
   "pos": "WR",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 4100,
   "fppg": 0.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429805",
   "name": "Frank Gore Jr.",
   "pos": "RB",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4911851",
   "name": "LeQuint Allen Jr.",
   "pos": "RB",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 4100,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430656",
   "name": "Myles Price",
   "pos": "WR",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 4100,
   "fppg": 0.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4249624",
   "name": "Nick Muse",
   "pos": "TE",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 4100,
   "fppg": 0.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4690013",
   "name": "Rasheen Ali",
   "pos": "RB",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 4100,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685504",
   "name": "Sam Roush",
   "pos": "TE",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 4100,
   "fppg": 0.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4368003",
   "name": "Andrei Iosivas",
   "pos": "WR",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 4000,
   "fppg": 1.7,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-ATL",
   "name": "Atlanta Falcons",
   "pos": "D",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 4000,
   "fppg": 5.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4890373",
   "name": "Bauer Sharp",
   "pos": "TE",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 4000,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4369886",
   "name": "Chris Blair",
   "pos": "WR",
   "team": "ATL",
   "opp": "CIN",
   "game": "CIN@ATL",
   "salary": 4000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4258595",
   "name": "Cole Kmet",
   "pos": "TE",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 4000,
   "fppg": 2.8,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3871102",
   "name": "David Sills V",
   "pos": "WR",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 4000,
   "fppg": 0,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3052897",
   "name": "Durham Smythe",
   "pos": "TE",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 4000,
   "fppg": 0.2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4427834",
   "name": "Erick All Jr.",
   "pos": "TE",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 4000,
   "fppg": 1.6,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4573699",
   "name": "Jackson Hawes",
   "pos": "TE",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 4000,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4430834",
   "name": "Jalen McMillan",
   "pos": "WR",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 4000,
   "fppg": 0,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3921690",
   "name": "Josh Oliver",
   "pos": "TE",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 4000,
   "fppg": 2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-5065495",
   "name": "Kaden Davis",
   "pos": "WR",
   "team": "CHI",
   "opp": "TB",
   "game": "TB@CHI",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-5097554",
   "name": "Kameron Johnson",
   "pos": "WR",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 4000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4570738",
   "name": "Ke'Shawn Williams",
   "pos": "WR",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 4000,
   "fppg": -2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4034779",
   "name": "Ko Kieft",
   "pos": "TE",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4878695",
   "name": "Max Bredeson",
   "pos": "RB",
   "team": "MIN",
   "opp": "BUF",
   "game": "BUF@MIN",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4372505",
   "name": "Payne Durham",
   "pos": "TE",
   "team": "TB",
   "opp": "CHI",
   "game": "TB@CHI",
   "salary": 4000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4244049",
   "name": "Quintin Morris",
   "pos": "TE",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 4000,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4683153",
   "name": "Skyler Bell",
   "pos": "WR",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4429299",
   "name": "Tahj Brooks",
   "pos": "RB",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 4000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-3050481",
   "name": "Tanner Hudson",
   "pos": "TE",
   "team": "CIN",
   "opp": "ATL",
   "game": "CIN@ATL",
   "salary": 4000,
   "fppg": 3.2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4917427",
   "name": "Tanner Koziol",
   "pos": "TE",
   "team": "JAX",
   "opp": "BAL",
   "game": "JAX@BAL",
   "salary": 4000,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-DEF-BUF",
   "name": "Buffalo Bills",
   "pos": "D",
   "team": "BUF",
   "opp": "MIN",
   "game": "BUF@MIN",
   "salary": 3800,
   "fppg": 5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-BAL",
   "name": "Baltimore Ravens",
   "pos": "D",
   "team": "BAL",
   "opp": "JAX",
   "game": "JAX@BAL",
   "salary": 3700,
   "fppg": 4.3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  }
 ]
};
window.MFFL_HISTORY_EXTENDED = {
 "EXT-3052587": [
  {
   "week": 1,
   "pts": 11.64,
   "opp": "CIN"
  },
  {
   "week": 2,
   "pts": 13.18,
   "opp": "CLE"
  },
  {
   "week": 3,
   "pts": 12.28,
   "opp": "MIN"
  },
  {
   "week": 7,
   "pts": 6.66,
   "opp": "CAR"
  },
  {
   "week": 8,
   "pts": 1.4,
   "opp": "ATL"
  }
 ],
 "EXT-4596448": [
  {
   "week": 1,
   "pts": 16.8,
   "opp": "CIN"
  },
  {
   "week": 2,
   "pts": 11,
   "opp": "CLE"
  },
  {
   "week": 3,
   "pts": 6.8,
   "opp": "MIN"
  },
  {
   "week": 4,
   "pts": 6.1,
   "opp": "GB"
  },
  {
   "week": 5,
   "pts": 33.5,
   "opp": "DAL"
  },
  {
   "week": 6,
   "pts": 5.9,
   "opp": "PIT"
  },
  {
   "week": 7,
   "pts": 26.5,
   "opp": "CAR"
  },
  {
   "week": 8,
   "pts": 24,
   "opp": "ATL"
  }
 ],
 "EXT-4371733": [
  {
   "week": 1,
   "pts": 2.3,
   "opp": "CIN"
  },
  {
   "week": 2,
   "pts": 3,
   "opp": "CLE"
  },
  {
   "week": 3,
   "pts": 2,
   "opp": "MIN"
  },
  {
   "week": 4,
   "pts": 9.7,
   "opp": "GB"
  },
  {
   "week": 5,
   "pts": 4.3,
   "opp": "DAL"
  },
  {
   "week": 6,
   "pts": 2.9,
   "opp": "PIT"
  },
  {
   "week": 7,
   "pts": 8.8,
   "opp": "CAR"
  },
  {
   "week": 8,
   "pts": 17,
   "opp": "ATL"
  }
 ],
 "EXT-3915511": [
  {
   "week": 1,
   "pts": 15.16,
   "opp": "TB"
  },
  {
   "week": 2,
   "pts": 16.18,
   "opp": "HOU"
  },
  {
   "week": 3,
   "pts": 22.58,
   "opp": "PIT"
  },
  {
   "week": 4,
   "pts": 28.72,
   "opp": "JAX"
  },
  {
   "week": 5,
   "pts": 24.6,
   "opp": "MIA"
  },
  {
   "week": 7,
   "pts": 28.88,
   "opp": "BAL"
  },
  {
   "week": 8,
   "pts": 45.48,
   "opp": "TEN"
  }
 ],
 "EXT-4243331": [
  {
   "week": 1,
   "pts": 4.1,
   "opp": "CIN"
  },
  {
   "week": 2,
   "pts": 6.3,
   "opp": "CLE"
  },
  {
   "week": 3,
   "pts": 7.1,
   "opp": "MIN"
  },
  {
   "week": 4,
   "pts": 5.7,
   "opp": "GB"
  },
  {
   "week": 5,
   "pts": 4,
   "opp": "DAL"
  },
  {
   "week": 6,
   "pts": 0.9,
   "opp": "PIT"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "CAR"
  }
 ],
 "EXT-5220680": [
  {
   "week": 1,
   "pts": 5.1,
   "opp": "CIN"
  },
  {
   "week": 2,
   "pts": 3.7,
   "opp": "CLE"
  },
  {
   "week": 3,
   "pts": 10.5,
   "opp": "MIN"
  },
  {
   "week": 4,
   "pts": 3.5,
   "opp": "GB"
  },
  {
   "week": 6,
   "pts": 5.5,
   "opp": "PIT"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "CAR"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "ATL"
  }
 ],
 "EXT-4567750": [
  {
   "week": 1,
   "pts": 8.8,
   "opp": "CIN"
  },
  {
   "week": 2,
   "pts": 8.8,
   "opp": "CLE"
  },
  {
   "week": 3,
   "pts": 8.7,
   "opp": "MIN"
  },
  {
   "week": 4,
   "pts": 2.3,
   "opp": "GB"
  },
  {
   "week": 5,
   "pts": 14.2,
   "opp": "DAL"
  },
  {
   "week": 6,
   "pts": 14.3,
   "opp": "PIT"
  }
 ],
 "EXT-3116389": [
  {
   "week": 1,
   "pts": 6.5,
   "opp": "TB"
  },
  {
   "week": 2,
   "pts": 2.7,
   "opp": "HOU"
  },
  {
   "week": 3,
   "pts": 1.9,
   "opp": "PIT"
  },
  {
   "week": 4,
   "pts": 0.7,
   "opp": "JAX"
  },
  {
   "week": 5,
   "pts": 14.8,
   "opp": "MIA"
  },
  {
   "week": 7,
   "pts": 7.6,
   "opp": "BAL"
  },
  {
   "week": 8,
   "pts": 2.4,
   "opp": "TEN"
  }
 ],
 "EXT-3116165": [
  {
   "week": 1,
   "pts": 6.3,
   "opp": "CIN"
  },
  {
   "week": 2,
   "pts": 7.3,
   "opp": "CLE"
  },
  {
   "week": 3,
   "pts": 4,
   "opp": "MIN"
  },
  {
   "week": 4,
   "pts": 6.1,
   "opp": "GB"
  },
  {
   "week": 5,
   "pts": 5.5,
   "opp": "DAL"
  },
  {
   "week": 6,
   "pts": 5.7,
   "opp": "PIT"
  },
  {
   "week": 7,
   "pts": 4.7,
   "opp": "CAR"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "ATL"
  }
 ],
 "EXT-4384852": [
  {
   "week": 1,
   "pts": 3.3,
   "opp": "TB"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "HOU"
  },
  {
   "week": 3,
   "pts": 4.4,
   "opp": "PIT"
  },
  {
   "week": 4,
   "pts": 11.7,
   "opp": "JAX"
  },
  {
   "week": 5,
   "pts": 2.2,
   "opp": "MIA"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "BAL"
  },
  {
   "week": 8,
   "pts": 4.9,
   "opp": "TEN"
  }
 ],
 "EXT-4362238": [
  {
   "week": 1,
   "pts": 16.3,
   "opp": "TB"
  },
  {
   "week": 2,
   "pts": 9.7,
   "opp": "HOU"
  },
  {
   "week": 3,
   "pts": 7.9,
   "opp": "PIT"
  },
  {
   "week": 4,
   "pts": 13.6,
   "opp": "JAX"
  },
  {
   "week": 5,
   "pts": 5.5,
   "opp": "MIA"
  },
  {
   "week": 7,
   "pts": 7.8,
   "opp": "BAL"
  },
  {
   "week": 8,
   "pts": 12.1,
   "opp": "TEN"
  }
 ],
 "EXT-3116164": [
  {
   "week": 1,
   "pts": 16.3,
   "opp": "TB"
  },
  {
   "week": 3,
   "pts": 11.2,
   "opp": "PIT"
  },
  {
   "week": 4,
   "pts": 11.5,
   "opp": "JAX"
  },
  {
   "week": 5,
   "pts": 6.9,
   "opp": "MIA"
  },
  {
   "week": 7,
   "pts": 7.1,
   "opp": "BAL"
  },
  {
   "week": 8,
   "pts": 15.6,
   "opp": "TEN"
  }
 ],
 "EXT-4608810": [
  {
   "week": 1,
   "pts": -0.4,
   "opp": "CIN"
  },
  {
   "week": 2,
   "pts": 5.4,
   "opp": "CLE"
  },
  {
   "week": 3,
   "pts": 1.3,
   "opp": "MIN"
  },
  {
   "week": 4,
   "pts": 3.7,
   "opp": "GB"
  },
  {
   "week": 5,
   "pts": 6.9,
   "opp": "DAL"
  },
  {
   "week": 6,
   "pts": 1.7,
   "opp": "PIT"
  },
  {
   "week": 7,
   "pts": 11.7,
   "opp": "CAR"
  }
 ],
 "EXT-4239993": [
  {
   "week": 1,
   "pts": 7.4,
   "opp": "TB"
  },
  {
   "week": 2,
   "pts": 12,
   "opp": "HOU"
  },
  {
   "week": 3,
   "pts": 18,
   "opp": "PIT"
  },
  {
   "week": 4,
   "pts": 24.2,
   "opp": "JAX"
  },
  {
   "week": 5,
   "pts": 3.2,
   "opp": "MIA"
  },
  {
   "week": 7,
   "pts": 26.8,
   "opp": "BAL"
  },
  {
   "week": 8,
   "pts": 35.5,
   "opp": "TEN"
  }
 ],
 "EXT-3127310": [
  {
   "week": 1,
   "pts": 3.4,
   "opp": "TB"
  },
  {
   "week": 3,
   "pts": 0.5,
   "opp": "PIT"
  },
  {
   "week": 5,
   "pts": 1,
   "opp": "MIA"
  },
  {
   "week": 7,
   "pts": 9.4,
   "opp": "BAL"
  }
 ],
 "EXT-4368003": [
  {
   "week": 1,
   "pts": 2.2,
   "opp": "TB"
  },
  {
   "week": 2,
   "pts": 1.2,
   "opp": "HOU"
  }
 ],
 "EXT-4362628": [
  {
   "week": 1,
   "pts": 2.2,
   "opp": "TB"
  },
  {
   "week": 2,
   "pts": 23,
   "opp": "HOU"
  },
  {
   "week": 3,
   "pts": 20.3,
   "opp": "PIT"
  },
  {
   "week": 4,
   "pts": 4.2,
   "opp": "JAX"
  },
  {
   "week": 5,
   "pts": 16.7,
   "opp": "MIA"
  },
  {
   "week": 7,
   "pts": 14.7,
   "opp": "BAL"
  },
  {
   "week": 8,
   "pts": 28.6,
   "opp": "TEN"
  }
 ],
 "EXT-3050481": [
  {
   "week": 1,
   "pts": 0.9,
   "opp": "TB"
  },
  {
   "week": 3,
   "pts": 2.3,
   "opp": "PIT"
  },
  {
   "week": 4,
   "pts": 0.7,
   "opp": "JAX"
  },
  {
   "week": 5,
   "pts": 8.9,
   "opp": "MIA"
  }
 ],
 "EXT-3916387": [
  {
   "week": 1,
   "pts": 27.96,
   "opp": "IND"
  },
  {
   "week": 2,
   "pts": 15.8,
   "opp": "NO"
  },
  {
   "week": 3,
   "pts": 20.44,
   "opp": "DAL"
  },
  {
   "week": 4,
   "pts": 18.88,
   "opp": "TEN"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "BUF"
  }
 ],
 "EXT-4038441": [
  {
   "week": 1,
   "pts": 3.3,
   "opp": "IND"
  },
  {
   "week": 2,
   "pts": 2.8,
   "opp": "NO"
  },
  {
   "week": 3,
   "pts": 3.3,
   "opp": "DAL"
  },
  {
   "week": 4,
   "pts": 3.5,
   "opp": "TEN"
  },
  {
   "week": 5,
   "pts": 8.8,
   "opp": "ATL"
  },
  {
   "week": 6,
   "pts": 2.4,
   "opp": "CLE"
  },
  {
   "week": 7,
   "pts": 4.8,
   "opp": "CIN"
  },
  {
   "week": 8,
   "pts": 5.5,
   "opp": "BUF"
  }
 ],
 "EXT-3043078": [
  {
   "week": 1,
   "pts": 37.8,
   "opp": "IND"
  },
  {
   "week": 2,
   "pts": 16.2,
   "opp": "NO"
  },
  {
   "week": 3,
   "pts": 21.4,
   "opp": "DAL"
  },
  {
   "week": 4,
   "pts": 14.9,
   "opp": "TEN"
  },
  {
   "week": 5,
   "pts": 23.5,
   "opp": "ATL"
  },
  {
   "week": 6,
   "pts": 4.5,
   "opp": "CLE"
  },
  {
   "week": 7,
   "pts": 5.4,
   "opp": "CIN"
  },
  {
   "week": 8,
   "pts": 13,
   "opp": "BUF"
  }
 ],
 "EXT-4429615": [
  {
   "week": 1,
   "pts": 26.5,
   "opp": "IND"
  },
  {
   "week": 3,
   "pts": 12.9,
   "opp": "DAL"
  },
  {
   "week": 4,
   "pts": 24.8,
   "opp": "TEN"
  },
  {
   "week": 5,
   "pts": 10.6,
   "opp": "ATL"
  },
  {
   "week": 6,
   "pts": 9.7,
   "opp": "CLE"
  },
  {
   "week": 7,
   "pts": 26.7,
   "opp": "CIN"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "BUF"
  }
 ],
 "EXT-2576581": [
  {
   "week": 1,
   "pts": 5.8,
   "opp": "IND"
  },
  {
   "week": 2,
   "pts": 1.1,
   "opp": "NO"
  },
  {
   "week": 3,
   "pts": 6.9,
   "opp": "DAL"
  }
 ],
 "EXT-3116365": [
  {
   "week": 1,
   "pts": 6.9,
   "opp": "IND"
  },
  {
   "week": 2,
   "pts": 7.9,
   "opp": "NO"
  },
  {
   "week": 3,
   "pts": 3.9,
   "opp": "DAL"
  },
  {
   "week": 4,
   "pts": 11.2,
   "opp": "TEN"
  },
  {
   "week": 5,
   "pts": 2.8,
   "opp": "ATL"
  },
  {
   "week": 6,
   "pts": 0.9,
   "opp": "CLE"
  },
  {
   "week": 7,
   "pts": 3.8,
   "opp": "CIN"
  },
  {
   "week": 8,
   "pts": 2.9,
   "opp": "BUF"
  }
 ],
 "EXT-4690143": [
  {
   "week": 1,
   "pts": 2.5,
   "opp": "IND"
  },
  {
   "week": 2,
   "pts": 1.9,
   "opp": "NO"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "TEN"
  },
  {
   "week": 7,
   "pts": 2,
   "opp": "CIN"
  }
 ],
 "EXT-4870847": [
  {
   "week": 1,
   "pts": 1.6,
   "opp": "IND"
  },
  {
   "week": 6,
   "pts": 6,
   "opp": "CLE"
  },
  {
   "week": 7,
   "pts": 4,
   "opp": "CIN"
  },
  {
   "week": 8,
   "pts": 1.8,
   "opp": "BUF"
  }
 ],
 "EXT-4432260": [
  {
   "week": 1,
   "pts": 1.8,
   "opp": "IND"
  },
  {
   "week": 3,
   "pts": 9.3,
   "opp": "DAL"
  },
  {
   "week": 4,
   "pts": 4.4,
   "opp": "TEN"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "BUF"
  }
 ],
 "EXT-3052897": [
  {
   "week": 1,
   "pts": 0.9,
   "opp": "IND"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "NO"
  }
 ],
 "EXT-4360939": [
  {
   "week": 1,
   "pts": 0,
   "opp": "IND"
  },
  {
   "week": 2,
   "pts": 18.3,
   "opp": "NO"
  },
  {
   "week": 3,
   "pts": 4.7,
   "opp": "DAL"
  },
  {
   "week": 4,
   "pts": 5.6,
   "opp": "TEN"
  },
  {
   "week": 5,
   "pts": 8.7,
   "opp": "ATL"
  },
  {
   "week": 6,
   "pts": 0,
   "opp": "CLE"
  },
  {
   "week": 7,
   "pts": 4.3,
   "opp": "CIN"
  },
  {
   "week": 8,
   "pts": 2.7,
   "opp": "BUF"
  }
 ],
 "EXT-2972515": [
  {
   "week": 1,
   "pts": 7.72,
   "opp": "PIT"
  },
  {
   "week": 2,
   "pts": 1.44,
   "opp": "CAR"
  }
 ],
 "EXT-4430807": [
  {
   "week": 1,
   "pts": 27.3,
   "opp": "PIT"
  },
  {
   "week": 2,
   "pts": 9.6,
   "opp": "CAR"
  },
  {
   "week": 3,
   "pts": 37.3,
   "opp": "GB"
  },
  {
   "week": 4,
   "pts": 30.2,
   "opp": "NO"
  },
  {
   "week": 5,
   "pts": 13.8,
   "opp": "BAL"
  },
  {
   "week": 6,
   "pts": 6.3,
   "opp": "CHI"
  },
  {
   "week": 7,
   "pts": 14.7,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 7.6,
   "opp": "TB"
  }
 ],
 "EXT-4241474": [
  {
   "week": 1,
   "pts": 3.1,
   "opp": "PIT"
  },
  {
   "week": 2,
   "pts": 7.7,
   "opp": "CAR"
  },
  {
   "week": 3,
   "pts": 11,
   "opp": "GB"
  },
  {
   "week": 4,
   "pts": 25.2,
   "opp": "NO"
  },
  {
   "week": 5,
   "pts": 1.6,
   "opp": "BAL"
  },
  {
   "week": 6,
   "pts": 2,
   "opp": "CHI"
  }
 ],
 "EXT-4361409": [
  {
   "week": 1,
   "pts": 2.4,
   "opp": "PIT"
  },
  {
   "week": 2,
   "pts": 2.1,
   "opp": "CAR"
  },
  {
   "week": 3,
   "pts": 1.6,
   "opp": "GB"
  },
  {
   "week": 4,
   "pts": 12.4,
   "opp": "NO"
  },
  {
   "week": 5,
   "pts": 6.4,
   "opp": "BAL"
  },
  {
   "week": 6,
   "pts": 16.2,
   "opp": "CHI"
  },
  {
   "week": 7,
   "pts": 1.1,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 10.5,
   "opp": "TB"
  }
 ],
 "EXT-4426502": [
  {
   "week": 1,
   "pts": 4.5,
   "opp": "PIT"
  },
  {
   "week": 2,
   "pts": 6.9,
   "opp": "CAR"
  },
  {
   "week": 3,
   "pts": 26.9,
   "opp": "GB"
  },
  {
   "week": 4,
   "pts": 12.1,
   "opp": "NO"
  },
  {
   "week": 5,
   "pts": 18.3,
   "opp": "BAL"
  },
  {
   "week": 6,
   "pts": 10.2,
   "opp": "CHI"
  },
  {
   "week": 7,
   "pts": 16.1,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 1.3,
   "opp": "TB"
  }
 ],
 "EXT-4431611": [
  {
   "week": 1,
   "pts": 37.26,
   "opp": "CAR"
  },
  {
   "week": 2,
   "pts": 8.72,
   "opp": "MIN"
  },
  {
   "week": 6,
   "pts": 19.5,
   "opp": "ATL"
  },
  {
   "week": 7,
   "pts": 25.12,
   "opp": "NE"
  },
  {
   "week": 8,
   "pts": 13.98,
   "opp": "SEA"
  }
 ],
 "EXT-3917914": [
  {
   "week": 1,
   "pts": 1,
   "opp": "PIT"
  },
  {
   "week": 2,
   "pts": 0.8,
   "opp": "CAR"
  },
  {
   "week": 3,
   "pts": 1.9,
   "opp": "GB"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "NO"
  },
  {
   "week": 6,
   "pts": 0,
   "opp": "CHI"
  },
  {
   "week": 8,
   "pts": 0.9,
   "opp": "TB"
  }
 ],
 "EXT-4360248": [
  {
   "week": 1,
   "pts": 0,
   "opp": "PIT"
  },
  {
   "week": 2,
   "pts": 2,
   "opp": "CAR"
  },
  {
   "week": 3,
   "pts": 1,
   "opp": "GB"
  },
  {
   "week": 4,
   "pts": 6.2,
   "opp": "NO"
  },
  {
   "week": 5,
   "pts": 12.7,
   "opp": "BAL"
  },
  {
   "week": 6,
   "pts": 20.5,
   "opp": "CHI"
  },
  {
   "week": 7,
   "pts": 10.7,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 1.6,
   "opp": "TB"
  }
 ],
 "EXT-4259545": [
  {
   "week": 1,
   "pts": 34.9,
   "opp": "CAR"
  },
  {
   "week": 2,
   "pts": 10.4,
   "opp": "MIN"
  },
  {
   "week": 3,
   "pts": 9.8,
   "opp": "PHI"
  },
  {
   "week": 4,
   "pts": 6.4,
   "opp": "NYJ"
  },
  {
   "week": 5,
   "pts": 15.3,
   "opp": "GB"
  },
  {
   "week": 6,
   "pts": 21,
   "opp": "ATL"
  },
  {
   "week": 7,
   "pts": 17,
   "opp": "NE"
  },
  {
   "week": 8,
   "pts": 26.9,
   "opp": "SEA"
  }
 ],
 "EXT-4608686": [
  {
   "week": 1,
   "pts": 22.4,
   "opp": "CAR"
  },
  {
   "week": 2,
   "pts": 6.8,
   "opp": "MIN"
  },
  {
   "week": 3,
   "pts": 3.1,
   "opp": "PHI"
  },
  {
   "week": 4,
   "pts": 30.5,
   "opp": "NYJ"
  }
 ],
 "EXT-4685278": [
  {
   "week": 1,
   "pts": 7,
   "opp": "CAR"
  },
  {
   "week": 2,
   "pts": 4.7,
   "opp": "MIN"
  },
  {
   "week": 3,
   "pts": 16.3,
   "opp": "PHI"
  },
  {
   "week": 4,
   "pts": 9.4,
   "opp": "NYJ"
  },
  {
   "week": 5,
   "pts": 6.9,
   "opp": "GB"
  },
  {
   "week": 6,
   "pts": 13.5,
   "opp": "ATL"
  },
  {
   "week": 7,
   "pts": 24.7,
   "opp": "NE"
  },
  {
   "week": 8,
   "pts": 15.1,
   "opp": "SEA"
  }
 ],
 "EXT-2973405": [
  {
   "week": 1,
   "pts": 12.4,
   "opp": "CAR"
  },
  {
   "week": 2,
   "pts": 6.5,
   "opp": "MIN"
  },
  {
   "week": 3,
   "pts": 18,
   "opp": "PHI"
  },
  {
   "week": 4,
   "pts": 1.6,
   "opp": "NYJ"
  },
  {
   "week": 5,
   "pts": 1.9,
   "opp": "GB"
  },
  {
   "week": 6,
   "pts": 2.8,
   "opp": "ATL"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "NE"
  },
  {
   "week": 8,
   "pts": 6.3,
   "opp": "SEA"
  }
 ],
 "EXT-4431299": [
  {
   "week": 1,
   "pts": 6.2,
   "opp": "CAR"
  },
  {
   "week": 2,
   "pts": 5.8,
   "opp": "MIN"
  },
  {
   "week": 3,
   "pts": 5.9,
   "opp": "PHI"
  },
  {
   "week": 4,
   "pts": 12.4,
   "opp": "NYJ"
  },
  {
   "week": 5,
   "pts": 3.5,
   "opp": "GB"
  },
  {
   "week": 6,
   "pts": 5.4,
   "opp": "ATL"
  },
  {
   "week": 7,
   "pts": 8.9,
   "opp": "NE"
  },
  {
   "week": 8,
   "pts": 10.7,
   "opp": "SEA"
  }
 ],
 "EXT-4258595": [
  {
   "week": 1,
   "pts": 10.5,
   "opp": "CAR"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "MIN"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "PHI"
  },
  {
   "week": 4,
   "pts": 2.3,
   "opp": "NYJ"
  },
  {
   "week": 5,
   "pts": 1.3,
   "opp": "GB"
  },
  {
   "week": 6,
   "pts": 1.3,
   "opp": "ATL"
  },
  {
   "week": 7,
   "pts": 4.3,
   "opp": "NE"
  }
 ],
 "EXT-4723086": [
  {
   "week": 1,
   "pts": 0,
   "opp": "CAR"
  },
  {
   "week": 2,
   "pts": 0.8,
   "opp": "MIN"
  },
  {
   "week": 3,
   "pts": 5.1,
   "opp": "PHI"
  },
  {
   "week": 4,
   "pts": 8.7,
   "opp": "NYJ"
  },
  {
   "week": 5,
   "pts": 2.9,
   "opp": "GB"
  },
  {
   "week": 6,
   "pts": 15.5,
   "opp": "ATL"
  },
  {
   "week": 7,
   "pts": 16.4,
   "opp": "NE"
  },
  {
   "week": 8,
   "pts": 8,
   "opp": "SEA"
  }
 ],
 "EXT-5160110": [
  {
   "week": 1,
   "pts": 6.6,
   "opp": "CAR"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "GB"
  }
 ],
 "EXT-5065495": [
  {
   "week": 1,
   "pts": 0,
   "opp": "CAR"
  }
 ],
 "EXT-4360310": [
  {
   "week": 1,
   "pts": 26.1,
   "opp": "CLE"
  },
  {
   "week": 2,
   "pts": 7.16,
   "opp": "DEN"
  },
  {
   "week": 3,
   "pts": 20.78,
   "opp": "NE"
  },
  {
   "week": 4,
   "pts": 13.08,
   "opp": "CIN"
  },
  {
   "week": 5,
   "pts": 25.74,
   "opp": "PHI"
  },
  {
   "week": 6,
   "pts": 31.34,
   "opp": "HOU"
  },
  {
   "week": 8,
   "pts": 19.4,
   "opp": "IND"
  }
 ],
 "EXT-4882093": [
  {
   "week": 1,
   "pts": 9.3,
   "opp": "CLE"
  },
  {
   "week": 2,
   "pts": 13.2,
   "opp": "DEN"
  },
  {
   "week": 3,
   "pts": 16,
   "opp": "NE"
  },
  {
   "week": 4,
   "pts": 10.1,
   "opp": "CIN"
  },
  {
   "week": 5,
   "pts": 10.6,
   "opp": "PHI"
  },
  {
   "week": 6,
   "pts": 22.7,
   "opp": "HOU"
  },
  {
   "week": 8,
   "pts": 31.9,
   "opp": "IND"
  }
 ],
 "EXT-2576336": [
  {
   "week": 1,
   "pts": 3.7,
   "opp": "CLE"
  },
  {
   "week": 2,
   "pts": 1.8,
   "opp": "DEN"
  },
  {
   "week": 3,
   "pts": 0.2,
   "opp": "NE"
  },
  {
   "week": 8,
   "pts": 1.3,
   "opp": "IND"
  }
 ],
 "EXT-4685415": [
  {
   "week": 1,
   "pts": 1.6,
   "opp": "CLE"
  },
  {
   "week": 5,
   "pts": 1.4,
   "opp": "PHI"
  },
  {
   "week": 6,
   "pts": 13.9,
   "opp": "HOU"
  },
  {
   "week": 8,
   "pts": 0.5,
   "opp": "IND"
  }
 ],
 "EXT-4362619": [
  {
   "week": 1,
   "pts": 2.3,
   "opp": "CLE"
  },
  {
   "week": 2,
   "pts": 1.3,
   "opp": "DEN"
  },
  {
   "week": 3,
   "pts": 9.7,
   "opp": "NE"
  },
  {
   "week": 4,
   "pts": 9.5,
   "opp": "CIN"
  },
  {
   "week": 5,
   "pts": 1.6,
   "opp": "PHI"
  },
  {
   "week": 6,
   "pts": 5.5,
   "opp": "HOU"
  },
  {
   "week": 8,
   "pts": 12.3,
   "opp": "IND"
  }
 ],
 "EXT-3916433": [
  {
   "week": 1,
   "pts": 11.2,
   "opp": "CLE"
  },
  {
   "week": 2,
   "pts": 3.3,
   "opp": "DEN"
  },
  {
   "week": 3,
   "pts": 15.9,
   "opp": "NE"
  },
  {
   "week": 4,
   "pts": 4.8,
   "opp": "CIN"
  },
  {
   "week": 5,
   "pts": 4.7,
   "opp": "PHI"
  },
  {
   "week": 6,
   "pts": 10.8,
   "opp": "HOU"
  },
  {
   "week": 8,
   "pts": 3.4,
   "opp": "IND"
  }
 ],
 "EXT-4432620": [
  {
   "week": 1,
   "pts": 16.8,
   "opp": "CLE"
  },
  {
   "week": 2,
   "pts": 13.3,
   "opp": "DEN"
  },
  {
   "week": 3,
   "pts": 11.5,
   "opp": "NE"
  },
  {
   "week": 4,
   "pts": 1.5,
   "opp": "CIN"
  },
  {
   "week": 5,
   "pts": 30.4,
   "opp": "PHI"
  },
  {
   "week": 6,
   "pts": 8.4,
   "opp": "HOU"
  },
  {
   "week": 8,
   "pts": 3.1,
   "opp": "IND"
  }
 ],
 "EXT-3059989": [
  {
   "week": 1,
   "pts": -0.3,
   "opp": "CLE"
  }
 ],
 "EXT-4430539": [
  {
   "week": 1,
   "pts": 9.3,
   "opp": "CLE"
  },
  {
   "week": 2,
   "pts": 2.7,
   "opp": "DEN"
  },
  {
   "week": 3,
   "pts": 4.7,
   "opp": "NE"
  },
  {
   "week": 4,
   "pts": 13,
   "opp": "CIN"
  },
  {
   "week": 5,
   "pts": 10.3,
   "opp": "PHI"
  },
  {
   "week": 6,
   "pts": 6.9,
   "opp": "HOU"
  },
  {
   "week": 8,
   "pts": 6.5,
   "opp": "IND"
  }
 ],
 "EXT-4432773": [
  {
   "week": 1,
   "pts": 5.5,
   "opp": "CLE"
  },
  {
   "week": 2,
   "pts": 5.5,
   "opp": "DEN"
  },
  {
   "week": 3,
   "pts": 1.3,
   "opp": "NE"
  },
  {
   "week": 4,
   "pts": 8.7,
   "opp": "CIN"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "PHI"
  },
  {
   "week": 6,
   "pts": 0,
   "opp": "HOU"
  },
  {
   "week": 8,
   "pts": 7.7,
   "opp": "IND"
  }
 ],
 "EXT-4879194": [
  {
   "week": 1,
   "pts": 9,
   "opp": "CLE"
  },
  {
   "week": 3,
   "pts": 7.7,
   "opp": "NE"
  },
  {
   "week": 4,
   "pts": 5.2,
   "opp": "CIN"
  },
  {
   "week": 5,
   "pts": 5.8,
   "opp": "PHI"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "IND"
  }
 ],
 "EXT-4686248": [
  {
   "week": 1,
   "pts": 1.4,
   "opp": "CLE"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "NE"
  },
  {
   "week": 4,
   "pts": 2,
   "opp": "CIN"
  },
  {
   "week": 5,
   "pts": 3,
   "opp": "PHI"
  },
  {
   "week": 6,
   "pts": 7.8,
   "opp": "HOU"
  },
  {
   "week": 8,
   "pts": 9.6,
   "opp": "IND"
  }
 ],
 "EXT-3918298": [
  {
   "week": 1,
   "pts": 38.66,
   "opp": "HOU"
  },
  {
   "week": 2,
   "pts": 40.82,
   "opp": "DET"
  },
  {
   "week": 3,
   "pts": 18.96,
   "opp": "LAC"
  },
  {
   "week": 4,
   "pts": 19.52,
   "opp": "NE"
  },
  {
   "week": 5,
   "pts": 34.5,
   "opp": "LAR"
  },
  {
   "week": 6,
   "pts": 18.3,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 27.56,
   "opp": "BAL"
  }
 ],
 "EXT-4244049": [
  {
   "week": 1,
   "pts": 0,
   "opp": "CLE"
  },
  {
   "week": 2,
   "pts": 1.2,
   "opp": "DEN"
  }
 ],
 "EXT-4379399": [
  {
   "week": 1,
   "pts": 8.4,
   "opp": "HOU"
  },
  {
   "week": 2,
   "pts": 23.4,
   "opp": "DET"
  },
  {
   "week": 3,
   "pts": 22.4,
   "opp": "LAC"
  },
  {
   "week": 4,
   "pts": 15.3,
   "opp": "NE"
  },
  {
   "week": 5,
   "pts": 25.3,
   "opp": "LAR"
  },
  {
   "week": 6,
   "pts": 22.8,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 17.1,
   "opp": "BAL"
  }
 ],
 "EXT-4429501": [
  {
   "week": 1,
   "pts": 0.3,
   "opp": "HOU"
  },
  {
   "week": 4,
   "pts": 1.2,
   "opp": "NE"
  },
  {
   "week": 5,
   "pts": 3.8,
   "opp": "LAR"
  },
  {
   "week": 6,
   "pts": 1.4,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 3,
   "opp": "BAL"
  }
 ],
 "EXT-4385690": [
  {
   "week": 1,
   "pts": 18.5,
   "opp": "HOU"
  },
  {
   "week": 2,
   "pts": 19,
   "opp": "DET"
  },
  {
   "week": 3,
   "pts": 2.8,
   "opp": "LAC"
  },
  {
   "week": 4,
   "pts": 1.2,
   "opp": "NE"
  },
  {
   "week": 5,
   "pts": 3.2,
   "opp": "LAR"
  },
  {
   "week": 6,
   "pts": 7.3,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 16.6,
   "opp": "BAL"
  }
 ],
 "EXT-4429805": [
  {
   "week": 1,
   "pts": 0.3,
   "opp": "HOU"
  }
 ],
 "EXT-3915416": [
  {
   "week": 1,
   "pts": 21.5,
   "opp": "HOU"
  },
  {
   "week": 2,
   "pts": -0.1,
   "opp": "DET"
  },
  {
   "week": 3,
   "pts": 9.7,
   "opp": "LAC"
  },
  {
   "week": 4,
   "pts": 2.2,
   "opp": "NE"
  },
  {
   "week": 8,
   "pts": 14.6,
   "opp": "BAL"
  }
 ],
 "EXT-4373678": [
  {
   "week": 1,
   "pts": 7,
   "opp": "HOU"
  },
  {
   "week": 2,
   "pts": 5.3,
   "opp": "DET"
  },
  {
   "week": 3,
   "pts": 1.1,
   "opp": "LAC"
  },
  {
   "week": 4,
   "pts": 9.7,
   "opp": "NE"
  },
  {
   "week": 5,
   "pts": 9.5,
   "opp": "LAR"
  },
  {
   "week": 6,
   "pts": 11.4,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 8.9,
   "opp": "BAL"
  }
 ],
 "EXT-4242433": [
  {
   "week": 1,
   "pts": 9.9,
   "opp": "HOU"
  },
  {
   "week": 2,
   "pts": 10.8,
   "opp": "DET"
  },
  {
   "week": 4,
   "pts": 0.8,
   "opp": "NE"
  },
  {
   "week": 6,
   "pts": 4.2,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "BAL"
  }
 ],
 "EXT-3930086": [
  {
   "week": 1,
   "pts": 1.2,
   "opp": "HOU"
  },
  {
   "week": 2,
   "pts": 7.5,
   "opp": "DET"
  },
  {
   "week": 3,
   "pts": 1,
   "opp": "LAC"
  },
  {
   "week": 4,
   "pts": 2.3,
   "opp": "NE"
  },
  {
   "week": 5,
   "pts": 1.1,
   "opp": "LAR"
  },
  {
   "week": 6,
   "pts": 0.5,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 1.1,
   "opp": "BAL"
  }
 ],
 "EXT-2573079": [
  {
   "week": 1,
   "pts": 19.22,
   "opp": "GB"
  },
  {
   "week": 2,
   "pts": 6.32,
   "opp": "CHI"
  }
 ],
 "EXT-3917315": [
  {
   "week": 1,
   "pts": 0.62,
   "opp": "GB"
  },
  {
   "week": 3,
   "pts": 11.42,
   "opp": "TB"
  },
  {
   "week": 4,
   "pts": 11.48,
   "opp": "MIA"
  },
  {
   "week": 5,
   "pts": 18.26,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 13.9,
   "opp": "IND"
  },
  {
   "week": 8,
   "pts": 20.9,
   "opp": "DET"
  }
 ],
 "EXT-4635008": [
  {
   "week": 1,
   "pts": 0.6,
   "opp": "HOU"
  },
  {
   "week": 2,
   "pts": 9.3,
   "opp": "DET"
  },
  {
   "week": 3,
   "pts": 4.2,
   "opp": "LAC"
  },
  {
   "week": 4,
   "pts": 23.6,
   "opp": "NE"
  },
  {
   "week": 5,
   "pts": 7.2,
   "opp": "LAR"
  },
  {
   "week": 6,
   "pts": 13.9,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 0.9,
   "opp": "BAL"
  }
 ],
 "EXT-3042519": [
  {
   "week": 1,
   "pts": 10,
   "opp": "GB"
  },
  {
   "week": 2,
   "pts": 13.5,
   "opp": "CHI"
  },
  {
   "week": 3,
   "pts": 11.7,
   "opp": "TB"
  },
  {
   "week": 4,
   "pts": 14.8,
   "opp": "MIA"
  },
  {
   "week": 5,
   "pts": 20.2,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 3.1,
   "opp": "IND"
  },
  {
   "week": 8,
   "pts": 5,
   "opp": "DET"
  }
 ],
 "EXT-4360569": [
  {
   "week": 1,
   "pts": 11.9,
   "opp": "GB"
  },
  {
   "week": 7,
   "pts": 6.8,
   "opp": "IND"
  },
  {
   "week": 8,
   "pts": 2,
   "opp": "DET"
  }
 ],
 "EXT-4262921": [
  {
   "week": 1,
   "pts": 27.2,
   "opp": "GB"
  },
  {
   "week": 2,
   "pts": 7,
   "opp": "CHI"
  },
  {
   "week": 3,
   "pts": 4.2,
   "opp": "TB"
  },
  {
   "week": 5,
   "pts": 15.8,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 6.4,
   "opp": "IND"
  },
  {
   "week": 8,
   "pts": 11.8,
   "opp": "DET"
  }
 ],
 "EXT-4036133": [
  {
   "week": 1,
   "pts": 11.6,
   "opp": "GB"
  },
  {
   "week": 2,
   "pts": 4.4,
   "opp": "CHI"
  },
  {
   "week": 3,
   "pts": 2.1,
   "opp": "TB"
  },
  {
   "week": 4,
   "pts": 21.4,
   "opp": "MIA"
  },
  {
   "week": 5,
   "pts": 1.2,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 11.5,
   "opp": "IND"
  },
  {
   "week": 8,
   "pts": 13.8,
   "opp": "DET"
  }
 ],
 "EXT-3921690": [
  {
   "week": 1,
   "pts": 3.2,
   "opp": "GB"
  },
  {
   "week": 2,
   "pts": 2.9,
   "opp": "CHI"
  }
 ],
 "EXT-4240631": [
  {
   "week": 1,
   "pts": 0.6,
   "opp": "GB"
  },
  {
   "week": 2,
   "pts": 2.5,
   "opp": "CHI"
  },
  {
   "week": 3,
   "pts": 0.2,
   "opp": "TB"
  },
  {
   "week": 4,
   "pts": 1.5,
   "opp": "MIA"
  },
  {
   "week": 5,
   "pts": 1.6,
   "opp": "NO"
  },
  {
   "week": 8,
   "pts": 0.4,
   "opp": "DET"
  }
 ],
 "EXT-4429205": [
  {
   "week": 1,
   "pts": 0,
   "opp": "GB"
  },
  {
   "week": 2,
   "pts": 3.1,
   "opp": "CHI"
  },
  {
   "week": 3,
   "pts": 17.5,
   "opp": "TB"
  },
  {
   "week": 4,
   "pts": 7.1,
   "opp": "MIA"
  },
  {
   "week": 7,
   "pts": 3.3,
   "opp": "IND"
  },
  {
   "week": 8,
   "pts": 10.1,
   "opp": "DET"
  }
 ],
 "EXT-3886598": [
  {
   "week": 1,
   "pts": 0,
   "opp": "GB"
  },
  {
   "week": 3,
   "pts": 0.6,
   "opp": "TB"
  },
  {
   "week": 4,
   "pts": 1.3,
   "opp": "MIA"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 4.4,
   "opp": "IND"
  },
  {
   "week": 8,
   "pts": 2.1,
   "opp": "DET"
  }
 ],
 "EXT-5344782": [
  {
   "week": 2,
   "pts": 0.96,
   "opp": "CAR"
  }
 ],
 "EXT-4870612": [
  {
   "week": 2,
   "pts": 2.4,
   "opp": "CAR"
  },
  {
   "week": 3,
   "pts": 1.2,
   "opp": "GB"
  },
  {
   "week": 4,
   "pts": 2,
   "opp": "NO"
  },
  {
   "week": 5,
   "pts": 2.5,
   "opp": "BAL"
  },
  {
   "week": 6,
   "pts": -0.1,
   "opp": "CHI"
  },
  {
   "week": 7,
   "pts": 2.2,
   "opp": "SF"
  }
 ],
 "EXT-3043275": [
  {
   "week": 2,
   "pts": 3,
   "opp": "CAR"
  },
  {
   "week": 3,
   "pts": 8.1,
   "opp": "GB"
  },
  {
   "week": 4,
   "pts": 1.4,
   "opp": "NO"
  },
  {
   "week": 6,
   "pts": 1.1,
   "opp": "CHI"
  },
  {
   "week": 7,
   "pts": 3.1,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 1.4,
   "opp": "TB"
  }
 ],
 "EXT-4369886": [
  {
   "week": 2,
   "pts": 1.1,
   "opp": "CAR"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "SF"
  }
 ],
 "EXT-4035020": [
  {
   "week": 2,
   "pts": 0,
   "opp": "CAR"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "NO"
  },
  {
   "week": 5,
   "pts": 1.8,
   "opp": "BAL"
  },
  {
   "week": 7,
   "pts": 1.7,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "TB"
  }
 ],
 "EXT-4832846": [
  {
   "week": 2,
   "pts": 0.7,
   "opp": "CHI"
  },
  {
   "week": 3,
   "pts": 0.1,
   "opp": "TB"
  },
  {
   "week": 4,
   "pts": 1.2,
   "opp": "MIA"
  },
  {
   "week": 5,
   "pts": 1.1,
   "opp": "NO"
  }
 ],
 "EXT-4434153": [
  {
   "week": 2,
   "pts": 2.16,
   "opp": "MIN"
  },
  {
   "week": 4,
   "pts": 9.82,
   "opp": "NYJ"
  },
  {
   "week": 5,
   "pts": 3.18,
   "opp": "GB"
  }
 ],
 "EXT-4430656": [
  {
   "week": 2,
   "pts": 0,
   "opp": "CHI"
  },
  {
   "week": 4,
   "pts": 1.8,
   "opp": "MIA"
  },
  {
   "week": 5,
   "pts": 1.5,
   "opp": "NO"
  }
 ],
 "EXT-4685504": [
  {
   "week": 2,
   "pts": 1.4,
   "opp": "MIN"
  },
  {
   "week": 3,
   "pts": 2.1,
   "opp": "PHI"
  },
  {
   "week": 4,
   "pts": 1.3,
   "opp": "NYJ"
  }
 ],
 "EXT-4696882": [
  {
   "week": 2,
   "pts": 5.2,
   "opp": "NO"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "DAL"
  },
  {
   "week": 4,
   "pts": 2.4,
   "opp": "TEN"
  },
  {
   "week": 5,
   "pts": 7.9,
   "opp": "ATL"
  },
  {
   "week": 6,
   "pts": 0,
   "opp": "CLE"
  }
 ],
 "EXT-5092508": [
  {
   "week": 2,
   "pts": 1.2,
   "opp": "HOU"
  },
  {
   "week": 3,
   "pts": 0.7,
   "opp": "PIT"
  }
 ],
 "EXT-4427834": [
  {
   "week": 2,
   "pts": 1.5,
   "opp": "HOU"
  },
  {
   "week": 5,
   "pts": 4,
   "opp": "MIA"
  },
  {
   "week": 7,
   "pts": 4.1,
   "opp": "BAL"
  }
 ],
 "EXT-4911851": [
  {
   "week": 2,
   "pts": 0,
   "opp": "DEN"
  },
  {
   "week": 3,
   "pts": 1.9,
   "opp": "NE"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "PHI"
  },
  {
   "week": 6,
   "pts": 0.1,
   "opp": "HOU"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "IND"
  }
 ],
 "EXT-3915411": [
  {
   "week": 3,
   "pts": 7,
   "opp": "LAC"
  },
  {
   "week": 4,
   "pts": 2.2,
   "opp": "NE"
  },
  {
   "week": 5,
   "pts": 9.2,
   "opp": "LAR"
  },
  {
   "week": 6,
   "pts": 3.7,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 3.8,
   "opp": "BAL"
  }
 ],
 "EXT-4360423": [
  {
   "week": 3,
   "pts": 15.04,
   "opp": "GB"
  },
  {
   "week": 4,
   "pts": 12.72,
   "opp": "NO"
  },
  {
   "week": 5,
   "pts": 14.4,
   "opp": "BAL"
  },
  {
   "week": 6,
   "pts": 23.1,
   "opp": "CHI"
  },
  {
   "week": 7,
   "pts": 20.42,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 2.1,
   "opp": "TB"
  }
 ],
 "EXT-4573699": [
  {
   "week": 3,
   "pts": 0,
   "opp": "LAC"
  },
  {
   "week": 8,
   "pts": 1.2,
   "opp": "BAL"
  }
 ],
 "EXT-4570738": [
  {
   "week": 3,
   "pts": -2,
   "opp": "PIT"
  }
 ],
 "EXT-4596472": [
  {
   "week": 3,
   "pts": -0.1,
   "opp": "MIN"
  },
  {
   "week": 4,
   "pts": 13.42,
   "opp": "GB"
  },
  {
   "week": 5,
   "pts": 13.86,
   "opp": "DAL"
  },
  {
   "week": 6,
   "pts": 12.66,
   "opp": "PIT"
  },
  {
   "week": 7,
   "pts": -0.3,
   "opp": "CAR"
  }
 ],
 "EXT-4565185": [
  {
   "week": 3,
   "pts": 0,
   "opp": "TB"
  },
  {
   "week": 4,
   "pts": 1.9,
   "opp": "MIA"
  },
  {
   "week": 5,
   "pts": 3.7,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "IND"
  }
 ],
 "EXT-4876132": [
  {
   "week": 3,
   "pts": 1.9,
   "opp": "DAL"
  },
  {
   "week": 5,
   "pts": 3.6,
   "opp": "ATL"
  },
  {
   "week": 6,
   "pts": 12.4,
   "opp": "CLE"
  },
  {
   "week": 7,
   "pts": 4.5,
   "opp": "CIN"
  },
  {
   "week": 8,
   "pts": 2,
   "opp": "BUF"
  }
 ],
 "EXT-15168": [
  {
   "week": 3,
   "pts": 24.48,
   "opp": "PHI"
  },
  {
   "week": 5,
   "pts": 1.72,
   "opp": "GB"
  }
 ],
 "EXT-4372505": [
  {
   "week": 3,
   "pts": 0,
   "opp": "MIN"
  },
  {
   "week": 5,
   "pts": 1,
   "opp": "DAL"
  }
 ],
 "EXT-4430834": [
  {
   "week": 3,
   "pts": 0,
   "opp": "MIN"
  }
 ],
 "EXT-4869748": [
  {
   "week": 3,
   "pts": 0.6,
   "opp": "PHI"
  },
  {
   "week": 5,
   "pts": 2.7,
   "opp": "GB"
  },
  {
   "week": 6,
   "pts": 4,
   "opp": "ATL"
  },
  {
   "week": 8,
   "pts": 0.9,
   "opp": "SEA"
  }
 ],
 "EXT-4426386": [
  {
   "week": 4,
   "pts": 2.8,
   "opp": "NYJ"
  },
  {
   "week": 5,
   "pts": 6.5,
   "opp": "GB"
  },
  {
   "week": 6,
   "pts": 13.5,
   "opp": "ATL"
  },
  {
   "week": 7,
   "pts": 1.3,
   "opp": "NE"
  },
  {
   "week": 8,
   "pts": 3.3,
   "opp": "SEA"
  }
 ],
 "EXT-4430871": [
  {
   "week": 4,
   "pts": 7,
   "opp": "GB"
  },
  {
   "week": 5,
   "pts": 1.8,
   "opp": "DAL"
  },
  {
   "week": 7,
   "pts": 11.2,
   "opp": "CAR"
  }
 ],
 "EXT-4690070": [
  {
   "week": 4,
   "pts": 6.4,
   "opp": "JAX"
  },
  {
   "week": 7,
   "pts": 1.2,
   "opp": "BAL"
  }
 ],
 "EXT-4035671": [
  {
   "week": 4,
   "pts": 4.12,
   "opp": "TEN"
  },
  {
   "week": 5,
   "pts": 24.04,
   "opp": "ATL"
  },
  {
   "week": 6,
   "pts": 13.4,
   "opp": "CLE"
  },
  {
   "week": 7,
   "pts": 16.12,
   "opp": "CIN"
  },
  {
   "week": 8,
   "pts": -2,
   "opp": "BUF"
  }
 ],
 "EXT-5097554": [
  {
   "week": 4,
   "pts": 0.8,
   "opp": "GB"
  }
 ],
 "EXT-5088338": [
  {
   "week": 4,
   "pts": 1.8,
   "opp": "TEN"
  }
 ],
 "EXT-4708049": [
  {
   "week": 4,
   "pts": 0.9,
   "opp": "MIA"
  },
  {
   "week": 5,
   "pts": 5.8,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 2.2,
   "opp": "IND"
  }
 ],
 "EXT-4360637": [
  {
   "week": 5,
   "pts": 3.7,
   "opp": "NO"
  }
 ],
 "EXT-4433959": [
  {
   "week": 5,
   "pts": 1.5,
   "opp": "NO"
  },
  {
   "week": 8,
   "pts": 2.9,
   "opp": "DET"
  }
 ],
 "EXT-4241479": [
  {
   "week": 5,
   "pts": 0.36,
   "opp": "BAL"
  }
 ],
 "EXT-4890373": [
  {
   "week": 6,
   "pts": 2.6,
   "opp": "PIT"
  }
 ],
 "EXT-4683153": [
  {
   "week": 5,
   "pts": 0,
   "opp": "LAR"
  },
  {
   "week": 6,
   "pts": 0,
   "opp": "LV"
  }
 ],
 "EXT-4035886": [
  {
   "week": 7,
   "pts": 3.3,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 2,
   "opp": "TB"
  }
 ],
 "EXT-4249624": [
  {
   "week": 7,
   "pts": 7.2,
   "opp": "SF"
  }
 ],
 "EXT-4878695": [
  {
   "week": 7,
   "pts": 0,
   "opp": "IND"
  }
 ],
 "EXT-4034779": [
  {
   "week": 7,
   "pts": 0,
   "opp": "CAR"
  }
 ],
 "EXT-3871102": [
  {
   "week": 7,
   "pts": 0,
   "opp": "CAR"
  }
 ],
 "EXT-4429299": [
  {
   "week": 7,
   "pts": 0.6,
   "opp": "BAL"
  }
 ],
 "EXT-4690013": [
  {
   "week": 7,
   "pts": 1.9,
   "opp": "CIN"
  },
  {
   "week": 8,
   "pts": 0.5,
   "opp": "BUF"
  }
 ],
 "EXT-4429582": [
  {
   "week": 8,
   "pts": 0.94,
   "opp": "BUF"
  }
 ],
 "EXT-5085189": [
  {
   "week": 8,
   "pts": 6.6,
   "opp": "TEN"
  }
 ],
 "EXT-3115293": [
  {
   "week": 8,
   "pts": -0.2,
   "opp": "BAL"
  }
 ],
 "EXT-4889929": [
  {
   "week": 8,
   "pts": 0.32,
   "opp": "IND"
  }
 ],
 "EXT-4917427": [
  {
   "week": 8,
   "pts": 1.3,
   "opp": "IND"
  }
 ],
 "EXT-DEF-JAX": [
  {
   "week": 1,
   "pts": 13,
   "opp": "CLE"
  },
  {
   "week": 2,
   "pts": 3,
   "opp": "DEN"
  },
  {
   "week": 3,
   "pts": 16,
   "opp": "NE"
  },
  {
   "week": 4,
   "pts": 7,
   "opp": "CIN"
  },
  {
   "week": 5,
   "pts": 2,
   "opp": "PHI"
  },
  {
   "week": 6,
   "pts": 1,
   "opp": "HOU"
  },
  {
   "week": 8,
   "pts": 20,
   "opp": "IND"
  }
 ],
 "EXT-DEF-BAL": [
  {
   "week": 1,
   "pts": 6,
   "opp": "IND"
  },
  {
   "week": 2,
   "pts": 3,
   "opp": "NO"
  },
  {
   "week": 3,
   "pts": 4,
   "opp": "DAL"
  },
  {
   "week": 4,
   "pts": 6,
   "opp": "TEN"
  },
  {
   "week": 5,
   "pts": 6,
   "opp": "ATL"
  },
  {
   "week": 6,
   "pts": 11,
   "opp": "CLE"
  },
  {
   "week": 7,
   "pts": -3,
   "opp": "CIN"
  },
  {
   "week": 8,
   "pts": 1,
   "opp": "BUF"
  }
 ],
 "EXT-DEF-CIN": [
  {
   "week": 1,
   "pts": 18,
   "opp": "TB"
  },
  {
   "week": 2,
   "pts": 11,
   "opp": "HOU"
  },
  {
   "week": 3,
   "pts": 3,
   "opp": "PIT"
  },
  {
   "week": 4,
   "pts": 4,
   "opp": "JAX"
  },
  {
   "week": 5,
   "pts": 9,
   "opp": "MIA"
  },
  {
   "week": 7,
   "pts": 10,
   "opp": "BAL"
  },
  {
   "week": 8,
   "pts": 4,
   "opp": "TEN"
  }
 ],
 "EXT-DEF-ATL": [
  {
   "week": 1,
   "pts": 5,
   "opp": "PIT"
  },
  {
   "week": 2,
   "pts": 1,
   "opp": "CAR"
  },
  {
   "week": 3,
   "pts": 6,
   "opp": "GB"
  },
  {
   "week": 4,
   "pts": 4,
   "opp": "NO"
  },
  {
   "week": 5,
   "pts": 11,
   "opp": "BAL"
  },
  {
   "week": 6,
   "pts": 5,
   "opp": "CHI"
  },
  {
   "week": 7,
   "pts": 11,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 4,
   "opp": "TB"
  }
 ],
 "EXT-DEF-TB": [
  {
   "week": 1,
   "pts": 9,
   "opp": "CIN"
  },
  {
   "week": 2,
   "pts": 2,
   "opp": "CLE"
  },
  {
   "week": 3,
   "pts": 6,
   "opp": "MIN"
  },
  {
   "week": 4,
   "pts": 5,
   "opp": "GB"
  },
  {
   "week": 5,
   "pts": 7,
   "opp": "DAL"
  },
  {
   "week": 6,
   "pts": 7,
   "opp": "PIT"
  },
  {
   "week": 7,
   "pts": 25,
   "opp": "CAR"
  },
  {
   "week": 8,
   "pts": 18,
   "opp": "ATL"
  }
 ],
 "EXT-DEF-CHI": [
  {
   "week": 1,
   "pts": 6,
   "opp": "CAR"
  },
  {
   "week": 2,
   "pts": 7,
   "opp": "MIN"
  },
  {
   "week": 3,
   "pts": 12,
   "opp": "PHI"
  },
  {
   "week": 4,
   "pts": 7,
   "opp": "NYJ"
  },
  {
   "week": 5,
   "pts": 1,
   "opp": "GB"
  },
  {
   "week": 6,
   "pts": 11,
   "opp": "ATL"
  },
  {
   "week": 7,
   "pts": 4,
   "opp": "NE"
  },
  {
   "week": 8,
   "pts": 8,
   "opp": "SEA"
  }
 ],
 "EXT-DEF-BUF": [
  {
   "week": 1,
   "pts": 6,
   "opp": "HOU"
  },
  {
   "week": 2,
   "pts": 3,
   "opp": "DET"
  },
  {
   "week": 3,
   "pts": 5,
   "opp": "LAC"
  },
  {
   "week": 4,
   "pts": 4,
   "opp": "NE"
  },
  {
   "week": 5,
   "pts": 2,
   "opp": "LAR"
  },
  {
   "week": 6,
   "pts": 1,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 14,
   "opp": "BAL"
  }
 ],
 "EXT-DEF-MIN": [
  {
   "week": 1,
   "pts": 8,
   "opp": "GB"
  },
  {
   "week": 2,
   "pts": 17,
   "opp": "CHI"
  },
  {
   "week": 3,
   "pts": 17,
   "opp": "TB"
  },
  {
   "week": 4,
   "pts": 8,
   "opp": "MIA"
  },
  {
   "week": 5,
   "pts": 11,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 10,
   "opp": "IND"
  },
  {
   "week": 8,
   "pts": 7,
   "opp": "DET"
  }
 ]
};
