/* MFFL Week 10 DERIVED player pool extension — producers only (Option 2).
   Source: ESPN rosters / game summaries, computed 2026-11-10 by
   pool-roll-week10 build-pool-extended-week10.mjs per pool-extension-investigation.md.
   These players are NOT in FanDuel's Week 10 Sunday-main contest pool:
   they are the producers (Weeks 1-9 stat lines) of the 8 teams in the
   4 non-main-slate games (WSH@NYG, NE@DET, PIT@CIN, LAC@BAL), plus the
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
 "week": 10,
 "cap": 60000,
 "source": "espn-derived",
 "games": {
  "WSH@NYG": "2026-11-13T01:15Z",
  "NE@DET": "2026-11-15T14:30Z",
  "PIT@CIN": "2026-11-16T01:20Z",
  "LAC@BAL": "2026-11-17T01:15Z"
 },
 "players": [
  {
   "id": "EXT-4429795",
   "name": "Jahmyr Gibbs",
   "pos": "RB",
   "team": "DET",
   "opp": "NE",
   "game": "NE@DET",
   "salary": 9200,
   "fppg": 25.5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3915511",
   "name": "Joe Burrow",
   "pos": "QB",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 8000,
   "fppg": 26.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4239993",
   "name": "Tee Higgins",
   "pos": "WR",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 7900,
   "fppg": 18.1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4362628",
   "name": "Ja'Marr Chase",
   "pos": "WR",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 7800,
   "fppg": 17.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4431452",
   "name": "Drake Maye",
   "pos": "QB",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 7700,
   "fppg": 21.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4374302",
   "name": "Amon-Ra St. Brown",
   "pos": "WR",
   "team": "DET",
   "opp": "NE",
   "game": "NE@DET",
   "salary": 7600,
   "fppg": 16.6,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4426348",
   "name": "Jayden Daniels",
   "pos": "QB",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 7600,
   "fppg": 20.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3046779",
   "name": "Jared Goff",
   "pos": "QB",
   "team": "DET",
   "opp": "NE",
   "game": "NE@DET",
   "salary": 7500,
   "fppg": 19.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4569987",
   "name": "Jaylen Warren",
   "pos": "RB",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 7500,
   "fppg": 17.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-8439",
   "name": "Aaron Rodgers",
   "pos": "QB",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 7200,
   "fppg": 15.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3043078",
   "name": "Derrick Henry",
   "pos": "RB",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 7200,
   "fppg": 15.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4595348",
   "name": "Malik Nabers",
   "pos": "WR",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 7100,
   "fppg": 14.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4429615",
   "name": "Zay Flowers",
   "pos": "WR",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 7100,
   "fppg": 14.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4432722",
   "name": "Athan Kaliakmanis",
   "pos": "QB",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 6900,
   "fppg": 12,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-2969939",
   "name": "Jameis Winston",
   "pos": "QB",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 6900,
   "fppg": 11.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4038941",
   "name": "Justin Herbert",
   "pos": "QB",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 6900,
   "fppg": 11.5,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2576980",
   "name": "Marcus Mariota",
   "pos": "QB",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 6900,
   "fppg": 11.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4433970",
   "name": "J.J. McCarthy",
   "pos": "QB",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 6700,
   "fppg": 8.7,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4426388",
   "name": "Jameson Williams",
   "pos": "WR",
   "team": "DET",
   "opp": "NE",
   "game": "NE@DET",
   "salary": 6600,
   "fppg": 11.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4429020",
   "name": "DJ Uiagalelei",
   "pos": "QB",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 6400,
   "fppg": 5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-2976212",
   "name": "Stefon Diggs",
   "pos": "WR",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 6400,
   "fppg": 10.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4569173",
   "name": "Rhamondre Stevenson",
   "pos": "RB",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 6300,
   "fppg": 11.2,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4362238",
   "name": "Chase Brown",
   "pos": "RB",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 6100,
   "fppg": 10.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429582",
   "name": "Joe Fagnano",
   "pos": "QB",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 6100,
   "fppg": 1.3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4240391",
   "name": "Tommy DeVito",
   "pos": "QB",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 6100,
   "fppg": 1.1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4696981",
   "name": "Cam Skattebo",
   "pos": "RB",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 6000,
   "fppg": 9.7,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4427095",
   "name": "DeMario Douglas",
   "pos": "WR",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 6000,
   "fppg": 9.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4689114",
   "name": "Jaxson Dart",
   "pos": "QB",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 6000,
   "fppg": 13.7,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3916387",
   "name": "Lamar Jackson",
   "pos": "QB",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 6000,
   "fppg": 16.6,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3116407",
   "name": "Mason Rudolph",
   "pos": "QB",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 6000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4035671",
   "name": "Tyler Huntley",
   "pos": "QB",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 6000,
   "fppg": 11.1,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4361050",
   "name": "Isaiah Likely",
   "pos": "TE",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 5900,
   "fppg": 13.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4047650",
   "name": "DK Metcalf",
   "pos": "WR",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 5800,
   "fppg": 8.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4697815",
   "name": "Rachaad White",
   "pos": "RB",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 5800,
   "fppg": 8.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2991662",
   "name": "Mack Hollins",
   "pos": "WR",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 5700,
   "fppg": 7.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4612826",
   "name": "Ladd McConkey",
   "pos": "WR",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 5600,
   "fppg": 7.2,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685382",
   "name": "Omarion Hampton",
   "pos": "RB",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 5600,
   "fppg": 7.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4038815",
   "name": "Rico Dowdle",
   "pos": "RB",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 5600,
   "fppg": 7.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4567156",
   "name": "Treylon Burks",
   "pos": "WR",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 5500,
   "fppg": 6.9,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4040761",
   "name": "Devin Singletary",
   "pos": "RB",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 5400,
   "fppg": 6.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685261",
   "name": "Germie Bernard",
   "pos": "WR",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 5400,
   "fppg": 6.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5081432",
   "name": "Antonio Williams",
   "pos": "WR",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 5300,
   "fppg": 5.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430027",
   "name": "Sam LaPorta",
   "pos": "TE",
   "team": "DET",
   "opp": "NE",
   "game": "NE@DET",
   "salary": 5300,
   "fppg": 9.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4038441",
   "name": "Justice Hill",
   "pos": "RB",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 5200,
   "fppg": 5.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4682648",
   "name": "Malachi Fields",
   "pos": "WR",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 5200,
   "fppg": 5.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3116164",
   "name": "Mike Gesicki",
   "pos": "TE",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 5200,
   "fppg": 8.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4361411",
   "name": "Pat Freiermuth",
   "pos": "TE",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 5200,
   "fppg": 8.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429025",
   "name": "Quentin Johnston",
   "pos": "WR",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 5200,
   "fppg": 5.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4047646",
   "name": "A.J. Brown",
   "pos": "WR",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 5100,
   "fppg": 4.9,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4695193",
   "name": "Efton Chism III",
   "pos": "WR",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 5100,
   "fppg": 5.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4596334",
   "name": "Keaton Mitchell",
   "pos": "RB",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 5100,
   "fppg": 5.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360939",
   "name": "Rashod Bateman",
   "pos": "WR",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
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
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 5100,
   "fppg": 5.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4686612",
   "name": "Tre' Harris",
   "pos": "WR",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 5100,
   "fppg": 5.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4432710",
   "name": "TreVeyon Henderson",
   "pos": "RB",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 5100,
   "fppg": 5.2,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3930066",
   "name": "Van Jefferson",
   "pos": "WR",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 5100,
   "fppg": 4.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3046439",
   "name": "Hunter Henry",
   "pos": "TE",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 5000,
   "fppg": 7.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430968",
   "name": "Kimani Vidal",
   "pos": "RB",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 5000,
   "fppg": 4.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430802",
   "name": "Darnell Washington",
   "pos": "TE",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 4900,
   "fppg": 6.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4384852",
   "name": "Dohnte Meyers",
   "pos": "WR",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 4900,
   "fppg": 4.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3068267",
   "name": "Austin Ekeler",
   "pos": "RB",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4800,
   "fppg": 3.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360635",
   "name": "Chig Okonkwo",
   "pos": "TE",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4800,
   "fppg": 5.6,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2576581",
   "name": "Chris Moore",
   "pos": "WR",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 4800,
   "fppg": 3.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4613202",
   "name": "Kyle Williams",
   "pos": "WR",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 4800,
   "fppg": 3.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4431431",
   "name": "Corey Kiner",
   "pos": "RB",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 4700,
   "fppg": 3.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4040655",
   "name": "Darnell Mooney",
   "pos": "WR",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 4700,
   "fppg": 3.2,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4831959",
   "name": "Eli Raridon",
   "pos": "TE",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 4700,
   "fppg": 5.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5123663",
   "name": "Isaac TeSlaa",
   "pos": "WR",
   "team": "DET",
   "opp": "NE",
   "game": "NE@DET",
   "salary": 4700,
   "fppg": 3.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3116365",
   "name": "Mark Andrews",
   "pos": "TE",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 4700,
   "fppg": 4.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4870847",
   "name": "Ja'Kobi Lane",
   "pos": "WR",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 4600,
   "fppg": 2.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4595342",
   "name": "Oronde Gadsden",
   "pos": "TE",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 4600,
   "fppg": 4.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4912274",
   "name": "Sione Vaki",
   "pos": "RB",
   "team": "DET",
   "opp": "NE",
   "game": "NE@DET",
   "salary": 4600,
   "fppg": 2.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4426535",
   "name": "Theo Wease Jr.",
   "pos": "WR",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 4600,
   "fppg": 2.6,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4035656",
   "name": "Ben Skowronek",
   "pos": "WR",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 4500,
   "fppg": 2.1,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430870",
   "name": "KeAndre Lambert-Smith",
   "pos": "WR",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 4500,
   "fppg": 2.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4690070",
   "name": "Mitchell Tinsley",
   "pos": "WR",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 4500,
   "fppg": 2.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4241457",
   "name": "Najee Harris",
   "pos": "RB",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 4500,
   "fppg": 2.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4241263",
   "name": "Charlie Kolar",
   "pos": "TE",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 4400,
   "fppg": 2.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4696882",
   "name": "Devontez Walker",
   "pos": "WR",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 4400,
   "fppg": 1.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5088338",
   "name": "Elijah Sarratt",
   "pos": "WR",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 4400,
   "fppg": 1.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4691889",
   "name": "Greg Desrosiers Jr.",
   "pos": "RB",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 4400,
   "fppg": 2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4683111",
   "name": "Jaden Bradley",
   "pos": "WR",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4400,
   "fppg": 1.7,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4876132",
   "name": "Josh Cuevas",
   "pos": "TE",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 4400,
   "fppg": 2.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-PIT",
   "name": "Pittsburgh Steelers",
   "pos": "D",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 4400,
   "fppg": 9.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3051738",
   "name": "Marquez Valdes-Scantling",
   "pos": "WR",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 4300,
   "fppg": 1.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4432260",
   "name": "Matt Hibner",
   "pos": "TE",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 4300,
   "fppg": 2.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429148",
   "name": "Theo Johnson",
   "pos": "TE",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 4300,
   "fppg": 2.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4240577",
   "name": "Brandon Smith",
   "pos": "WR",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 4200,
   "fppg": 0.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685553",
   "name": "Brenen Thompson",
   "pos": "WR",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 4200,
   "fppg": 0.9,
   "inj": "Q",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4257188",
   "name": "Charlie Jones",
   "pos": "WR",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 4200,
   "fppg": 0.7,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-CIN",
   "name": "Cincinnati Bengals",
   "pos": "D",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 4200,
   "fppg": 7.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4362477",
   "name": "Derius Davis",
   "pos": "WR",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 4200,
   "fppg": 0.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3127310",
   "name": "Drew Sample",
   "pos": "TE",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 4200,
   "fppg": 1.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4428396",
   "name": "Hayden Rucci",
   "pos": "TE",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 4200,
   "fppg": 1.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5085189",
   "name": "Jack Endries",
   "pos": "TE",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 4200,
   "fppg": 1.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4690143",
   "name": "LaJohntay Wester",
   "pos": "WR",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 4200,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4698253",
   "name": "Lan Larison",
   "pos": "RB",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 4200,
   "fppg": 1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4590292",
   "name": "Thomas Fidone II",
   "pos": "TE",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 4200,
   "fppg": 1.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4035198",
   "name": "Brandon Johnson",
   "pos": "WR",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 4100,
   "fppg": 0.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4242392",
   "name": "Brock Wright",
   "pos": "TE",
   "team": "DET",
   "opp": "NE",
   "game": "NE@DET",
   "salary": 4100,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5092508",
   "name": "Colbie Young",
   "pos": "WR",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 4100,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4361088",
   "name": "Colson Yankoff",
   "pos": "TE",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4100,
   "fppg": 0.5,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4421446",
   "name": "Craig Reynolds",
   "pos": "RB",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4100,
   "fppg": 0.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-2580216",
   "name": "DeAndre Carter",
   "pos": "WR",
   "team": "DET",
   "opp": "NE",
   "game": "NE@DET",
   "salary": 4100,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4602788",
   "name": "Jackson Meeks",
   "pos": "WR",
   "team": "DET",
   "opp": "NE",
   "game": "NE@DET",
   "salary": 4100,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4048228",
   "name": "John Bates",
   "pos": "TE",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4100,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685246",
   "name": "Kaytron Allen",
   "pos": "RB",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4100,
   "fppg": 0.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4426948",
   "name": "Luke McCaffrey",
   "pos": "WR",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4690013",
   "name": "Rasheen Ali",
   "pos": "RB",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 4100,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4245144",
   "name": "Tay Martin",
   "pos": "WR",
   "team": "DET",
   "opp": "NE",
   "game": "NE@DET",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4037457",
   "name": "Travis Homer",
   "pos": "RB",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3915486",
   "name": "Tyler Conklin",
   "pos": "TE",
   "team": "DET",
   "opp": "NE",
   "game": "NE@DET",
   "salary": 4100,
   "fppg": 0.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3917668",
   "name": "Alec Ingold",
   "pos": "RB",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 4000,
   "fppg": 1,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4368003",
   "name": "Andrei Iosivas",
   "pos": "WR",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 4000,
   "fppg": 1.7,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4690923",
   "name": "Ben Sinnott",
   "pos": "TE",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-3123075",
   "name": "Braxton Berrios",
   "pos": "WR",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 4000,
   "fppg": 0,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3123076",
   "name": "David Njoku",
   "pos": "TE",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 4000,
   "fppg": 4.9,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3052897",
   "name": "Durham Smythe",
   "pos": "TE",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 4000,
   "fppg": 0.2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4361577",
   "name": "Dyami Brown",
   "pos": "WR",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4000,
   "fppg": 1.7,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4427834",
   "name": "Erick All Jr.",
   "pos": "TE",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 4000,
   "fppg": 1.6,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4575131",
   "name": "Jacory Croskey-Merritt",
   "pos": "RB",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4000,
   "fppg": 8.5,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4692590",
   "name": "Jalin Hyatt",
   "pos": "WR",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4602667",
   "name": "Jaylin Lane",
   "pos": "WR",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4000,
   "fppg": 0.9,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3127586",
   "name": "Jeremy McNichols",
   "pos": "RB",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4000,
   "fppg": 2.3,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4570738",
   "name": "Ke'Shawn Williams",
   "pos": "WR",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 4000,
   "fppg": -2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4428119",
   "name": "Lew Nichols",
   "pos": "RB",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 4000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4035687",
   "name": "Michael Pittman Jr.",
   "pos": "WR",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 4000,
   "fppg": 4.1,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-NYG",
   "name": "New York Giants",
   "pos": "D",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 4000,
   "fppg": 6.1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-16733",
   "name": "Odell Beckham Jr.",
   "pos": "WR",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-2975417",
   "name": "Patrick Ricard",
   "pos": "RB",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 4000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4039505",
   "name": "Reggie Gilliam",
   "pos": "RB",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 4000,
   "fppg": 0.2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4693370",
   "name": "Riley Nowakowski",
   "pos": "RB",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-2975674",
   "name": "Robert Tonyan",
   "pos": "TE",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 4000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4431492",
   "name": "Roman Wilson",
   "pos": "WR",
   "team": "PIT",
   "opp": "CIN",
   "game": "PIT@CIN",
   "salary": 4000,
   "fppg": 7.6,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4361432",
   "name": "Romeo Doubs",
   "pos": "WR",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 4000,
   "fppg": 8.5,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4429299",
   "name": "Tahj Brooks",
   "pos": "RB",
   "team": "CIN",
   "opp": "PIT",
   "game": "PIT@CIN",
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
   "opp": "PIT",
   "game": "PIT@CIN",
   "salary": 4000,
   "fppg": 3.2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3121422",
   "name": "Terry McLaurin",
   "pos": "WR",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4000,
   "fppg": 7.7,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4360516",
   "name": "Tyrone Tracy Jr.",
   "pos": "RB",
   "team": "NYG",
   "opp": "WSH",
   "game": "WSH@NYG",
   "salary": 4000,
   "fppg": 4.2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-WSH",
   "name": "Washington Commanders",
   "pos": "D",
   "team": "WSH",
   "opp": "NYG",
   "game": "WSH@NYG",
   "salary": 4000,
   "fppg": 5.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-DET",
   "name": "Detroit Lions",
   "pos": "D",
   "team": "DET",
   "opp": "NE",
   "game": "NE@DET",
   "salary": 3900,
   "fppg": 5.6,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-NE",
   "name": "New England Patriots",
   "pos": "D",
   "team": "NE",
   "opp": "DET",
   "game": "NE@DET",
   "salary": 3900,
   "fppg": 5.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-BAL",
   "name": "Baltimore Ravens",
   "pos": "D",
   "team": "BAL",
   "opp": "LAC",
   "game": "LAC@BAL",
   "salary": 3700,
   "fppg": 3.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-LAC",
   "name": "Los Angeles Chargers",
   "pos": "D",
   "team": "LAC",
   "opp": "BAL",
   "game": "LAC@BAL",
   "salary": 3700,
   "fppg": 4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  }
 ]
};
window.MFFL_HISTORY_EXTENDED = {
 "EXT-4431452": [
  {
   "week": 1,
   "pts": 12.82,
   "opp": "SEA"
  },
  {
   "week": 2,
   "pts": 9.02,
   "opp": "PIT"
  },
  {
   "week": 3,
   "pts": 5.76,
   "opp": "JAX"
  },
  {
   "week": 4,
   "pts": 27.16,
   "opp": "BUF"
  },
  {
   "week": 5,
   "pts": 42.46,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 23.8,
   "opp": "NYJ"
  },
  {
   "week": 7,
   "pts": 31.44,
   "opp": "CHI"
  },
  {
   "week": 8,
   "pts": 22.46,
   "opp": "MIA"
  },
  {
   "week": 9,
   "pts": 21.26,
   "opp": "GB"
  }
 ],
 "EXT-2991662": [
  {
   "week": 1,
   "pts": 7.1,
   "opp": "SEA"
  },
  {
   "week": 2,
   "pts": 2.8,
   "opp": "PIT"
  },
  {
   "week": 3,
   "pts": 11.7,
   "opp": "JAX"
  },
  {
   "week": 4,
   "pts": 6.8,
   "opp": "BUF"
  },
  {
   "week": 9,
   "pts": 11.1,
   "opp": "GB"
  }
 ],
 "EXT-4569173": [
  {
   "week": 1,
   "pts": 12,
   "opp": "SEA"
  },
  {
   "week": 2,
   "pts": 3.1,
   "opp": "PIT"
  },
  {
   "week": 3,
   "pts": 5.3,
   "opp": "JAX"
  },
  {
   "week": 4,
   "pts": 16.9,
   "opp": "BUF"
  },
  {
   "week": 5,
   "pts": 16,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 3.6,
   "opp": "NYJ"
  },
  {
   "week": 7,
   "pts": 20,
   "opp": "CHI"
  },
  {
   "week": 8,
   "pts": 10.5,
   "opp": "MIA"
  },
  {
   "week": 9,
   "pts": 13.3,
   "opp": "GB"
  }
 ],
 "EXT-4431431": [
  {
   "week": 1,
   "pts": 1.1,
   "opp": "SEA"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "PIT"
  },
  {
   "week": 3,
   "pts": 3.2,
   "opp": "JAX"
  },
  {
   "week": 5,
   "pts": 4.4,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 5.7,
   "opp": "NYJ"
  },
  {
   "week": 7,
   "pts": 1.3,
   "opp": "CHI"
  },
  {
   "week": 8,
   "pts": 3.8,
   "opp": "MIA"
  },
  {
   "week": 9,
   "pts": 11.5,
   "opp": "GB"
  }
 ],
 "EXT-4698253": [
  {
   "week": 1,
   "pts": 1.9,
   "opp": "SEA"
  },
  {
   "week": 8,
   "pts": 0.6,
   "opp": "MIA"
  },
  {
   "week": 9,
   "pts": 0.4,
   "opp": "GB"
  }
 ],
 "EXT-4831959": [
  {
   "week": 1,
   "pts": 6.7,
   "opp": "SEA"
  },
  {
   "week": 2,
   "pts": 3.5,
   "opp": "PIT"
  },
  {
   "week": 4,
   "pts": 1.7,
   "opp": "BUF"
  },
  {
   "week": 5,
   "pts": 8.2,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 1.6,
   "opp": "NYJ"
  },
  {
   "week": 7,
   "pts": 13.1,
   "opp": "CHI"
  },
  {
   "week": 8,
   "pts": 1,
   "opp": "MIA"
  },
  {
   "week": 9,
   "pts": 6.7,
   "opp": "GB"
  }
 ],
 "EXT-4427095": [
  {
   "week": 1,
   "pts": 4.5,
   "opp": "SEA"
  },
  {
   "week": 2,
   "pts": 1.4,
   "opp": "PIT"
  },
  {
   "week": 3,
   "pts": 4.3,
   "opp": "JAX"
  },
  {
   "week": 4,
   "pts": 2.5,
   "opp": "BUF"
  },
  {
   "week": 5,
   "pts": 20.5,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 16.1,
   "opp": "NYJ"
  },
  {
   "week": 7,
   "pts": 3.8,
   "opp": "CHI"
  },
  {
   "week": 8,
   "pts": 15.1,
   "opp": "MIA"
  },
  {
   "week": 9,
   "pts": 15.7,
   "opp": "GB"
  }
 ],
 "EXT-4361432": [
  {
   "week": 1,
   "pts": 0,
   "opp": "SEA"
  },
  {
   "week": 2,
   "pts": 11.1,
   "opp": "PIT"
  },
  {
   "week": 3,
   "pts": 6.4,
   "opp": "JAX"
  },
  {
   "week": 4,
   "pts": 20.8,
   "opp": "BUF"
  },
  {
   "week": 5,
   "pts": 2.1,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 10.7,
   "opp": "NYJ"
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
  },
  {
   "week": 9,
   "pts": 5.58,
   "opp": "JAX"
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
  },
  {
   "week": 9,
   "pts": 16.7,
   "opp": "JAX"
  }
 ],
 "EXT-4047646": [
  {
   "week": 1,
   "pts": 4.1,
   "opp": "SEA"
  },
  {
   "week": 6,
   "pts": 4.2,
   "opp": "NYJ"
  },
  {
   "week": 7,
   "pts": 6.3,
   "opp": "CHI"
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
  },
  {
   "week": 9,
   "pts": 3.8,
   "opp": "JAX"
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
  },
  {
   "week": 9,
   "pts": 2.9,
   "opp": "JAX"
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
  },
  {
   "week": 9,
   "pts": -0.1,
   "opp": "JAX"
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
  },
  {
   "week": 9,
   "pts": 1,
   "opp": "JAX"
  }
 ],
 "EXT-3046439": [
  {
   "week": 1,
   "pts": 4.1,
   "opp": "SEA"
  },
  {
   "week": 2,
   "pts": 5.5,
   "opp": "PIT"
  },
  {
   "week": 3,
   "pts": 1,
   "opp": "JAX"
  },
  {
   "week": 4,
   "pts": 8.7,
   "opp": "BUF"
  },
  {
   "week": 5,
   "pts": 11.9,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 12.8,
   "opp": "NYJ"
  },
  {
   "week": 7,
   "pts": 10.6,
   "opp": "CHI"
  },
  {
   "week": 8,
   "pts": 4.5,
   "opp": "MIA"
  },
  {
   "week": 9,
   "pts": 5,
   "opp": "GB"
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
  },
  {
   "week": 9,
   "pts": 1.1,
   "opp": "JAX"
  }
 ],
 "EXT-3046779": [
  {
   "week": 1,
   "pts": 16.44,
   "opp": "NO"
  },
  {
   "week": 2,
   "pts": 32.78,
   "opp": "BUF"
  },
  {
   "week": 3,
   "pts": 19.36,
   "opp": "NYJ"
  },
  {
   "week": 4,
   "pts": 23.48,
   "opp": "CAR"
  },
  {
   "week": 5,
   "pts": 28.94,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 21.02,
   "opp": "GB"
  },
  {
   "week": 8,
   "pts": 10.04,
   "opp": "MIN"
  },
  {
   "week": 9,
   "pts": 6.3,
   "opp": "MIA"
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
 "EXT-4429795": [
  {
   "week": 1,
   "pts": 34.1,
   "opp": "NO"
  },
  {
   "week": 2,
   "pts": 20.3,
   "opp": "BUF"
  },
  {
   "week": 3,
   "pts": 37.9,
   "opp": "NYJ"
  },
  {
   "week": 4,
   "pts": 15.7,
   "opp": "CAR"
  },
  {
   "week": 5,
   "pts": 38.2,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 17.8,
   "opp": "GB"
  },
  {
   "week": 8,
   "pts": 26.8,
   "opp": "MIN"
  },
  {
   "week": 9,
   "pts": 13.4,
   "opp": "MIA"
  }
 ],
 "EXT-4374302": [
  {
   "week": 1,
   "pts": 23.7,
   "opp": "NO"
  },
  {
   "week": 2,
   "pts": 33.7,
   "opp": "BUF"
  },
  {
   "week": 3,
   "pts": 9.9,
   "opp": "NYJ"
  },
  {
   "week": 4,
   "pts": 11.5,
   "opp": "CAR"
  },
  {
   "week": 5,
   "pts": 9.9,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 22.7,
   "opp": "GB"
  },
  {
   "week": 8,
   "pts": 9.1,
   "opp": "MIN"
  },
  {
   "week": 9,
   "pts": 12.6,
   "opp": "MIA"
  }
 ],
 "EXT-4912274": [
  {
   "week": 1,
   "pts": 2.3,
   "opp": "NO"
  },
  {
   "week": 2,
   "pts": 2.5,
   "opp": "BUF"
  },
  {
   "week": 3,
   "pts": 4.2,
   "opp": "NYJ"
  },
  {
   "week": 4,
   "pts": 2.2,
   "opp": "CAR"
  },
  {
   "week": 5,
   "pts": 1.1,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 0.5,
   "opp": "GB"
  },
  {
   "week": 8,
   "pts": 7.5,
   "opp": "MIN"
  },
  {
   "week": 9,
   "pts": 3.1,
   "opp": "MIA"
  }
 ],
 "EXT-4430027": [
  {
   "week": 1,
   "pts": 7.3,
   "opp": "NO"
  },
  {
   "week": 2,
   "pts": 14.2,
   "opp": "BUF"
  },
  {
   "week": 3,
   "pts": 5.9,
   "opp": "NYJ"
  },
  {
   "week": 4,
   "pts": 18.4,
   "opp": "CAR"
  },
  {
   "week": 5,
   "pts": 17.3,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 2.3,
   "opp": "GB"
  },
  {
   "week": 8,
   "pts": 5,
   "opp": "MIN"
  },
  {
   "week": 9,
   "pts": 5.2,
   "opp": "MIA"
  }
 ],
 "EXT-4426388": [
  {
   "week": 1,
   "pts": 6.5,
   "opp": "NO"
  },
  {
   "week": 2,
   "pts": 4.3,
   "opp": "BUF"
  },
  {
   "week": 3,
   "pts": 6.9,
   "opp": "NYJ"
  },
  {
   "week": 4,
   "pts": 16.2,
   "opp": "CAR"
  },
  {
   "week": 5,
   "pts": 17.7,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 23.6,
   "opp": "GB"
  },
  {
   "week": 8,
   "pts": 15,
   "opp": "MIN"
  },
  {
   "week": 9,
   "pts": 4.5,
   "opp": "MIA"
  }
 ],
 "EXT-5123663": [
  {
   "week": 1,
   "pts": 0,
   "opp": "NO"
  },
  {
   "week": 2,
   "pts": 3.6,
   "opp": "BUF"
  },
  {
   "week": 3,
   "pts": 8.1,
   "opp": "NYJ"
  },
  {
   "week": 4,
   "pts": 11.5,
   "opp": "CAR"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 1.5,
   "opp": "GB"
  },
  {
   "week": 9,
   "pts": 1.4,
   "opp": "MIA"
  }
 ],
 "EXT-4242392": [
  {
   "week": 1,
   "pts": 1,
   "opp": "NO"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "BUF"
  },
  {
   "week": 3,
   "pts": 1.7,
   "opp": "NYJ"
  },
  {
   "week": 4,
   "pts": 1.3,
   "opp": "CAR"
  },
  {
   "week": 5,
   "pts": 1.6,
   "opp": "ARI"
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
  },
  {
   "week": 9,
   "pts": 29.54,
   "opp": "ATL"
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
  },
  {
   "week": 9,
   "pts": 4.3,
   "opp": "ATL"
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
  },
  {
   "week": 9,
   "pts": 9,
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
  },
  {
   "week": 9,
   "pts": 7.3,
   "opp": "ATL"
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
  },
  {
   "week": 9,
   "pts": 2.1,
   "opp": "ATL"
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
  },
  {
   "week": 9,
   "pts": 17.7,
   "opp": "ATL"
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
  },
  {
   "week": 9,
   "pts": 29.5,
   "opp": "ATL"
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
 "EXT-8439": [
  {
   "week": 1,
   "pts": 12.54,
   "opp": "ATL"
  },
  {
   "week": 2,
   "pts": 4.98,
   "opp": "NE"
  },
  {
   "week": 3,
   "pts": 23.68,
   "opp": "CIN"
  },
  {
   "week": 4,
   "pts": 23.96,
   "opp": "CLE"
  },
  {
   "week": 5,
   "pts": 22,
   "opp": "IND"
  },
  {
   "week": 6,
   "pts": 17.02,
   "opp": "TB"
  },
  {
   "week": 7,
   "pts": 13.08,
   "opp": "NO"
  },
  {
   "week": 8,
   "pts": 5.88,
   "opp": "CLE"
  }
 ],
 "EXT-4569987": [
  {
   "week": 1,
   "pts": 7.8,
   "opp": "ATL"
  },
  {
   "week": 2,
   "pts": 8.7,
   "opp": "NE"
  },
  {
   "week": 3,
   "pts": 22.1,
   "opp": "CIN"
  },
  {
   "week": 4,
   "pts": 14.1,
   "opp": "CLE"
  },
  {
   "week": 5,
   "pts": 36.8,
   "opp": "IND"
  },
  {
   "week": 6,
   "pts": 8.8,
   "opp": "TB"
  },
  {
   "week": 7,
   "pts": 18.2,
   "opp": "NO"
  },
  {
   "week": 8,
   "pts": 23.8,
   "opp": "CLE"
  }
 ],
 "EXT-4038815": [
  {
   "week": 1,
   "pts": 3.1,
   "opp": "ATL"
  },
  {
   "week": 2,
   "pts": 5.4,
   "opp": "NE"
  },
  {
   "week": 6,
   "pts": 6.4,
   "opp": "TB"
  },
  {
   "week": 7,
   "pts": 11.6,
   "opp": "NO"
  },
  {
   "week": 8,
   "pts": 11.6,
   "opp": "CLE"
  }
 ],
 "EXT-4047650": [
  {
   "week": 1,
   "pts": 6,
   "opp": "ATL"
  },
  {
   "week": 2,
   "pts": 4.7,
   "opp": "NE"
  },
  {
   "week": 3,
   "pts": 10.6,
   "opp": "CIN"
  },
  {
   "week": 4,
   "pts": 17,
   "opp": "CLE"
  },
  {
   "week": 5,
   "pts": 3.8,
   "opp": "IND"
  },
  {
   "week": 6,
   "pts": 14.8,
   "opp": "TB"
  },
  {
   "week": 7,
   "pts": 6.6,
   "opp": "NO"
  },
  {
   "week": 8,
   "pts": 0.9,
   "opp": "CLE"
  }
 ],
 "EXT-4361411": [
  {
   "week": 1,
   "pts": 13.1,
   "opp": "ATL"
  },
  {
   "week": 2,
   "pts": 5.4,
   "opp": "NE"
  },
  {
   "week": 3,
   "pts": 4.1,
   "opp": "CIN"
  },
  {
   "week": 4,
   "pts": 9.2,
   "opp": "CLE"
  },
  {
   "week": 5,
   "pts": 19,
   "opp": "IND"
  },
  {
   "week": 6,
   "pts": 2.1,
   "opp": "TB"
  },
  {
   "week": 7,
   "pts": 3,
   "opp": "NO"
  },
  {
   "week": 8,
   "pts": 10.6,
   "opp": "CLE"
  }
 ],
 "EXT-4035687": [
  {
   "week": 1,
   "pts": 7.3,
   "opp": "ATL"
  },
  {
   "week": 3,
   "pts": 2.6,
   "opp": "CIN"
  },
  {
   "week": 4,
   "pts": 2.5,
   "opp": "CLE"
  }
 ],
 "EXT-4430802": [
  {
   "week": 1,
   "pts": 2.8,
   "opp": "ATL"
  },
  {
   "week": 2,
   "pts": 1.2,
   "opp": "NE"
  },
  {
   "week": 3,
   "pts": 8.2,
   "opp": "CIN"
  },
  {
   "week": 4,
   "pts": 10.2,
   "opp": "CLE"
  },
  {
   "week": 5,
   "pts": 2.2,
   "opp": "IND"
  },
  {
   "week": 6,
   "pts": 10.5,
   "opp": "TB"
  },
  {
   "week": 7,
   "pts": 6.9,
   "opp": "NO"
  },
  {
   "week": 8,
   "pts": 10.9,
   "opp": "CLE"
  }
 ],
 "EXT-4426348": [
  {
   "week": 1,
   "pts": 17.66,
   "opp": "PHI"
  },
  {
   "week": 2,
   "pts": 14.74,
   "opp": "DAL"
  },
  {
   "week": 5,
   "pts": 35.26,
   "opp": "NYG"
  },
  {
   "week": 6,
   "pts": 24,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 14.98,
   "opp": "PHI"
  },
  {
   "week": 9,
   "pts": 14.56,
   "opp": "LAR"
  }
 ],
 "EXT-4431492": [
  {
   "week": 1,
   "pts": 4.1,
   "opp": "ATL"
  },
  {
   "week": 2,
   "pts": 5.3,
   "opp": "NE"
  },
  {
   "week": 3,
   "pts": 13.5,
   "opp": "CIN"
  },
  {
   "week": 4,
   "pts": 14.9,
   "opp": "CLE"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "IND"
  }
 ],
 "EXT-4575131": [
  {
   "week": 1,
   "pts": 12.1,
   "opp": "PHI"
  },
  {
   "week": 2,
   "pts": 5.3,
   "opp": "DAL"
  },
  {
   "week": 3,
   "pts": 4.8,
   "opp": "SEA"
  },
  {
   "week": 4,
   "pts": 6,
   "opp": "IND"
  },
  {
   "week": 5,
   "pts": 14.2,
   "opp": "NYG"
  }
 ],
 "EXT-4697815": [
  {
   "week": 1,
   "pts": 3.7,
   "opp": "PHI"
  },
  {
   "week": 2,
   "pts": 11.3,
   "opp": "DAL"
  },
  {
   "week": 3,
   "pts": 10.6,
   "opp": "SEA"
  },
  {
   "week": 5,
   "pts": 2.5,
   "opp": "NYG"
  },
  {
   "week": 6,
   "pts": 13.7,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 13,
   "opp": "PHI"
  },
  {
   "week": 9,
   "pts": 5.9,
   "opp": "LAR"
  }
 ],
 "EXT-4685246": [
  {
   "week": 1,
   "pts": 1.6,
   "opp": "PHI"
  },
  {
   "week": 2,
   "pts": 2.4,
   "opp": "DAL"
  },
  {
   "week": 4,
   "pts": 0.1,
   "opp": "IND"
  }
 ],
 "EXT-5081432": [
  {
   "week": 1,
   "pts": 14.4,
   "opp": "PHI"
  },
  {
   "week": 2,
   "pts": 3.9,
   "opp": "DAL"
  },
  {
   "week": 3,
   "pts": 2.5,
   "opp": "SEA"
  },
  {
   "week": 4,
   "pts": 3.6,
   "opp": "IND"
  },
  {
   "week": 5,
   "pts": 4.6,
   "opp": "NYG"
  },
  {
   "week": 6,
   "pts": 6.5,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 7.9,
   "opp": "PHI"
  },
  {
   "week": 9,
   "pts": 4,
   "opp": "LAR"
  }
 ],
 "EXT-2976212": [
  {
   "week": 1,
   "pts": 13.5,
   "opp": "PHI"
  },
  {
   "week": 2,
   "pts": 19.2,
   "opp": "DAL"
  },
  {
   "week": 3,
   "pts": 5.3,
   "opp": "SEA"
  },
  {
   "week": 4,
   "pts": 6,
   "opp": "IND"
  },
  {
   "week": 6,
   "pts": 13.4,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 11.3,
   "opp": "PHI"
  },
  {
   "week": 9,
   "pts": 6.6,
   "opp": "LAR"
  }
 ],
 "EXT-4360635": [
  {
   "week": 1,
   "pts": 2.6,
   "opp": "PHI"
  },
  {
   "week": 4,
   "pts": 1.5,
   "opp": "IND"
  },
  {
   "week": 5,
   "pts": 8,
   "opp": "NYG"
  },
  {
   "week": 6,
   "pts": 10.4,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 2.2,
   "opp": "PHI"
  },
  {
   "week": 9,
   "pts": 8.7,
   "opp": "LAR"
  }
 ],
 "EXT-4048228": [
  {
   "week": 1,
   "pts": 2.3,
   "opp": "PHI"
  },
  {
   "week": 3,
   "pts": 1.4,
   "opp": "SEA"
  },
  {
   "week": 5,
   "pts": 0.6,
   "opp": "NYG"
  },
  {
   "week": 6,
   "pts": 0.9,
   "opp": "SF"
  }
 ],
 "EXT-3121422": [
  {
   "week": 1,
   "pts": 2.4,
   "opp": "PHI"
  },
  {
   "week": 2,
   "pts": 6,
   "opp": "DAL"
  },
  {
   "week": 3,
   "pts": 16.7,
   "opp": "SEA"
  },
  {
   "week": 5,
   "pts": 10.2,
   "opp": "NYG"
  },
  {
   "week": 6,
   "pts": 3.2,
   "opp": "SF"
  }
 ],
 "EXT-4602667": [
  {
   "week": 1,
   "pts": 0.9,
   "opp": "PHI"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "DAL"
  },
  {
   "week": 3,
   "pts": 2.6,
   "opp": "SEA"
  }
 ],
 "EXT-4361577": [
  {
   "week": 1,
   "pts": 0,
   "opp": "PHI"
  },
  {
   "week": 2,
   "pts": 2.1,
   "opp": "DAL"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "SEA"
  },
  {
   "week": 4,
   "pts": 8,
   "opp": "IND"
  },
  {
   "week": 5,
   "pts": 0.7,
   "opp": "NYG"
  },
  {
   "week": 6,
   "pts": 1.1,
   "opp": "SF"
  }
 ],
 "EXT-4696981": [
  {
   "week": 1,
   "pts": 14.1,
   "opp": "DAL"
  },
  {
   "week": 2,
   "pts": 7.5,
   "opp": "LAR"
  },
  {
   "week": 3,
   "pts": 11.5,
   "opp": "TEN"
  },
  {
   "week": 4,
   "pts": 7.1,
   "opp": "ARI"
  },
  {
   "week": 5,
   "pts": 6.1,
   "opp": "WSH"
  },
  {
   "week": 7,
   "pts": 21.6,
   "opp": "HOU"
  }
 ],
 "EXT-4689114": [
  {
   "week": 1,
   "pts": 26.6,
   "opp": "DAL"
  },
  {
   "week": 2,
   "pts": 0.8,
   "opp": "LAR"
  }
 ],
 "EXT-4040761": [
  {
   "week": 1,
   "pts": 11.8,
   "opp": "DAL"
  },
  {
   "week": 2,
   "pts": 0.9,
   "opp": "LAR"
  },
  {
   "week": 6,
   "pts": 3.8,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 13,
   "opp": "HOU"
  },
  {
   "week": 9,
   "pts": 4.9,
   "opp": "PHI"
  }
 ],
 "EXT-4360516": [
  {
   "week": 1,
   "pts": -0.6,
   "opp": "DAL"
  },
  {
   "week": 3,
   "pts": 0.3,
   "opp": "TEN"
  },
  {
   "week": 4,
   "pts": -0.1,
   "opp": "ARI"
  },
  {
   "week": 5,
   "pts": 4.1,
   "opp": "WSH"
  },
  {
   "week": 6,
   "pts": 17.5,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 8.2,
   "opp": "HOU"
  }
 ],
 "EXT-4361050": [
  {
   "week": 1,
   "pts": 23.8,
   "opp": "DAL"
  },
  {
   "week": 2,
   "pts": 5.8,
   "opp": "LAR"
  },
  {
   "week": 3,
   "pts": 2.3,
   "opp": "TEN"
  },
  {
   "week": 4,
   "pts": 10.1,
   "opp": "ARI"
  },
  {
   "week": 5,
   "pts": 26.9,
   "opp": "WSH"
  },
  {
   "week": 6,
   "pts": 20.9,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 2.2,
   "opp": "HOU"
  },
  {
   "week": 9,
   "pts": 13.8,
   "opp": "PHI"
  }
 ],
 "EXT-4595348": [
  {
   "week": 1,
   "pts": 9.9,
   "opp": "DAL"
  },
  {
   "week": 2,
   "pts": 0.6,
   "opp": "LAR"
  },
  {
   "week": 3,
   "pts": 5.1,
   "opp": "TEN"
  },
  {
   "week": 4,
   "pts": 23.2,
   "opp": "ARI"
  },
  {
   "week": 5,
   "pts": 26.6,
   "opp": "WSH"
  },
  {
   "week": 6,
   "pts": 25.5,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 17.6,
   "opp": "HOU"
  },
  {
   "week": 9,
   "pts": 6.8,
   "opp": "PHI"
  }
 ],
 "EXT-4040655": [
  {
   "week": 1,
   "pts": 3.7,
   "opp": "DAL"
  },
  {
   "week": 2,
   "pts": 5.8,
   "opp": "LAR"
  },
  {
   "week": 3,
   "pts": 3.9,
   "opp": "TEN"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "ARI"
  },
  {
   "week": 5,
   "pts": 2.4,
   "opp": "WSH"
  },
  {
   "week": 6,
   "pts": 2,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 1.2,
   "opp": "HOU"
  },
  {
   "week": 9,
   "pts": 6.5,
   "opp": "PHI"
  }
 ],
 "EXT-4682648": [
  {
   "week": 1,
   "pts": 3.5,
   "opp": "DAL"
  },
  {
   "week": 2,
   "pts": 4,
   "opp": "LAR"
  },
  {
   "week": 3,
   "pts": 2.9,
   "opp": "TEN"
  },
  {
   "week": 4,
   "pts": 12.2,
   "opp": "ARI"
  },
  {
   "week": 5,
   "pts": 3,
   "opp": "WSH"
  },
  {
   "week": 6,
   "pts": 2.9,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 10.3,
   "opp": "HOU"
  },
  {
   "week": 9,
   "pts": 5.5,
   "opp": "PHI"
  }
 ],
 "EXT-4429148": [
  {
   "week": 1,
   "pts": 1.4,
   "opp": "DAL"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "LAR"
  },
  {
   "week": 4,
   "pts": 7.6,
   "opp": "ARI"
  },
  {
   "week": 5,
   "pts": 4.5,
   "opp": "WSH"
  }
 ],
 "EXT-2975417": [
  {
   "week": 1,
   "pts": 0,
   "opp": "DAL"
  },
  {
   "week": 4,
   "pts": 0.6,
   "opp": "ARI"
  }
 ],
 "EXT-4038941": [
  {
   "week": 1,
   "pts": 14.26,
   "opp": "ARI"
  },
  {
   "week": 2,
   "pts": 9.88,
   "opp": "LV"
  },
  {
   "week": 3,
   "pts": 13.74,
   "opp": "BUF"
  },
  {
   "week": 4,
   "pts": 11.56,
   "opp": "SEA"
  },
  {
   "week": 5,
   "pts": 11.24,
   "opp": "DEN"
  },
  {
   "week": 6,
   "pts": 9.76,
   "opp": "KC"
  },
  {
   "week": 8,
   "pts": 9.78,
   "opp": "LAR"
  },
  {
   "week": 9,
   "pts": 11.42,
   "opp": "HOU"
  }
 ],
 "EXT-4685382": [
  {
   "week": 1,
   "pts": 8.3,
   "opp": "ARI"
  },
  {
   "week": 2,
   "pts": 16.5,
   "opp": "LV"
  },
  {
   "week": 3,
   "pts": 5.6,
   "opp": "BUF"
  },
  {
   "week": 4,
   "pts": 12.3,
   "opp": "SEA"
  },
  {
   "week": 5,
   "pts": 4.4,
   "opp": "DEN"
  },
  {
   "week": 6,
   "pts": 5.9,
   "opp": "KC"
  },
  {
   "week": 8,
   "pts": 3.7,
   "opp": "LAR"
  },
  {
   "week": 9,
   "pts": 6,
   "opp": "HOU"
  }
 ],
 "EXT-4596334": [
  {
   "week": 1,
   "pts": 0.9,
   "opp": "ARI"
  },
  {
   "week": 2,
   "pts": 4.4,
   "opp": "LV"
  },
  {
   "week": 3,
   "pts": 12.2,
   "opp": "BUF"
  },
  {
   "week": 4,
   "pts": 8.8,
   "opp": "SEA"
  },
  {
   "week": 5,
   "pts": 4.4,
   "opp": "DEN"
  },
  {
   "week": 6,
   "pts": 0.4,
   "opp": "KC"
  },
  {
   "week": 8,
   "pts": 3.8,
   "opp": "LAR"
  },
  {
   "week": 9,
   "pts": 6.2,
   "opp": "HOU"
  }
 ],
 "EXT-4612826": [
  {
   "week": 1,
   "pts": 16.7,
   "opp": "ARI"
  },
  {
   "week": 2,
   "pts": 5,
   "opp": "LV"
  },
  {
   "week": 3,
   "pts": 8.6,
   "opp": "BUF"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "SEA"
  },
  {
   "week": 6,
   "pts": 2.2,
   "opp": "KC"
  },
  {
   "week": 8,
   "pts": 10.6,
   "opp": "LAR"
  }
 ],
 "EXT-4595342": [
  {
   "week": 1,
   "pts": 4.2,
   "opp": "ARI"
  },
  {
   "week": 2,
   "pts": 8.8,
   "opp": "LV"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "BUF"
  },
  {
   "week": 4,
   "pts": 6.3,
   "opp": "SEA"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "DEN"
  },
  {
   "week": 6,
   "pts": 3.2,
   "opp": "KC"
  },
  {
   "week": 8,
   "pts": 7.7,
   "opp": "LAR"
  },
  {
   "week": 9,
   "pts": 2.7,
   "opp": "HOU"
  }
 ],
 "EXT-3123076": [
  {
   "week": 1,
   "pts": 8.3,
   "opp": "ARI"
  },
  {
   "week": 2,
   "pts": 1.4,
   "opp": "LV"
  }
 ],
 "EXT-4686612": [
  {
   "week": 1,
   "pts": 3.5,
   "opp": "ARI"
  },
  {
   "week": 2,
   "pts": 5.8,
   "opp": "LV"
  },
  {
   "week": 3,
   "pts": 10.6,
   "opp": "BUF"
  },
  {
   "week": 4,
   "pts": 7.5,
   "opp": "SEA"
  },
  {
   "week": 5,
   "pts": 2.6,
   "opp": "DEN"
  },
  {
   "week": 8,
   "pts": 4.6,
   "opp": "LAR"
  },
  {
   "week": 9,
   "pts": 2.1,
   "opp": "HOU"
  }
 ],
 "EXT-4429025": [
  {
   "week": 1,
   "pts": 2.7,
   "opp": "ARI"
  },
  {
   "week": 2,
   "pts": 1.9,
   "opp": "LV"
  },
  {
   "week": 3,
   "pts": 5.5,
   "opp": "BUF"
  },
  {
   "week": 4,
   "pts": 4.5,
   "opp": "SEA"
  },
  {
   "week": 6,
   "pts": 6.2,
   "opp": "KC"
  },
  {
   "week": 8,
   "pts": 5.7,
   "opp": "LAR"
  },
  {
   "week": 9,
   "pts": 12.8,
   "opp": "HOU"
  }
 ],
 "EXT-4362477": [
  {
   "week": 1,
   "pts": 0,
   "opp": "ARI"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "LV"
  },
  {
   "week": 4,
   "pts": -0.9,
   "opp": "SEA"
  },
  {
   "week": 6,
   "pts": 0.4,
   "opp": "KC"
  },
  {
   "week": 9,
   "pts": 8,
   "opp": "HOU"
  }
 ],
 "EXT-3116407": [
  {
   "week": 2,
   "pts": 0.3,
   "opp": "NE"
  },
  {
   "week": 5,
   "pts": -0.2,
   "opp": "IND"
  }
 ],
 "EXT-4685261": [
  {
   "week": 2,
   "pts": 5.5,
   "opp": "NE"
  },
  {
   "week": 3,
   "pts": 1.9,
   "opp": "CIN"
  },
  {
   "week": 4,
   "pts": 2.1,
   "opp": "CLE"
  },
  {
   "week": 5,
   "pts": 11.4,
   "opp": "IND"
  },
  {
   "week": 6,
   "pts": 20.2,
   "opp": "TB"
  },
  {
   "week": 7,
   "pts": 4.2,
   "opp": "NO"
  },
  {
   "week": 8,
   "pts": 5.5,
   "opp": "CLE"
  }
 ],
 "EXT-4037457": [
  {
   "week": 2,
   "pts": 1.6,
   "opp": "NE"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "CIN"
  },
  {
   "week": 4,
   "pts": -0.1,
   "opp": "CLE"
  }
 ],
 "EXT-4432710": [
  {
   "week": 2,
   "pts": 13.6,
   "opp": "PIT"
  },
  {
   "week": 3,
   "pts": 3.4,
   "opp": "JAX"
  },
  {
   "week": 4,
   "pts": 4.2,
   "opp": "BUF"
  },
  {
   "week": 5,
   "pts": 4.3,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 2.5,
   "opp": "NYJ"
  },
  {
   "week": 7,
   "pts": 3.3,
   "opp": "CHI"
  }
 ],
 "EXT-4035656": [
  {
   "week": 2,
   "pts": 0.7,
   "opp": "NE"
  },
  {
   "week": 3,
   "pts": 8.8,
   "opp": "CIN"
  },
  {
   "week": 4,
   "pts": 1.2,
   "opp": "CLE"
  }
 ],
 "EXT-4039505": [
  {
   "week": 2,
   "pts": 0.9,
   "opp": "PIT"
  }
 ],
 "EXT-4613202": [
  {
   "week": 2,
   "pts": 1.5,
   "opp": "PIT"
  },
  {
   "week": 3,
   "pts": 3.9,
   "opp": "JAX"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "BUF"
  },
  {
   "week": 5,
   "pts": 16.6,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 1.7,
   "opp": "NYJ"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "CHI"
  },
  {
   "week": 8,
   "pts": 10.8,
   "opp": "MIA"
  },
  {
   "week": 9,
   "pts": 0,
   "opp": "GB"
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
 "EXT-4695193": [
  {
   "week": 2,
   "pts": 0.3,
   "opp": "PIT"
  },
  {
   "week": 3,
   "pts": 1.24,
   "opp": "JAX"
  },
  {
   "week": 4,
   "pts": 11.2,
   "opp": "BUF"
  },
  {
   "week": 5,
   "pts": 8.4,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 0,
   "opp": "NYJ"
  },
  {
   "week": 7,
   "pts": 2.1,
   "opp": "CHI"
  },
  {
   "week": 8,
   "pts": 4.2,
   "opp": "MIA"
  },
  {
   "week": 9,
   "pts": 13.4,
   "opp": "GB"
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
 "EXT-4241263": [
  {
   "week": 2,
   "pts": 3.6,
   "opp": "LV"
  },
  {
   "week": 5,
   "pts": 3.2,
   "opp": "DEN"
  },
  {
   "week": 6,
   "pts": 3.5,
   "opp": "KC"
  },
  {
   "week": 8,
   "pts": 2.5,
   "opp": "LAR"
  },
  {
   "week": 9,
   "pts": 4.9,
   "opp": "HOU"
  }
 ],
 "EXT-2576980": [
  {
   "week": 2,
   "pts": 8.74,
   "opp": "DAL"
  },
  {
   "week": 3,
   "pts": 20.42,
   "opp": "SEA"
  },
  {
   "week": 4,
   "pts": 5.34,
   "opp": "IND"
  }
 ],
 "EXT-4685553": [
  {
   "week": 2,
   "pts": 1.8,
   "opp": "LV"
  }
 ],
 "EXT-4690923": [
  {
   "week": 2,
   "pts": 1.1,
   "opp": "DAL"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "SEA"
  }
 ],
 "EXT-4567156": [
  {
   "week": 2,
   "pts": 0,
   "opp": "DAL"
  },
  {
   "week": 3,
   "pts": 8.3,
   "opp": "SEA"
  },
  {
   "week": 4,
   "pts": 11.2,
   "opp": "IND"
  },
  {
   "week": 5,
   "pts": 3.6,
   "opp": "NYG"
  },
  {
   "week": 6,
   "pts": 8.6,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 9.6,
   "opp": "PHI"
  }
 ],
 "EXT-4361088": [
  {
   "week": 2,
   "pts": 1.9,
   "opp": "DAL"
  },
  {
   "week": 3,
   "pts": 0.7,
   "opp": "SEA"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "IND"
  },
  {
   "week": 9,
   "pts": 1.1,
   "opp": "LAR"
  }
 ],
 "EXT-2969939": [
  {
   "week": 2,
   "pts": 3.54,
   "opp": "LAR"
  },
  {
   "week": 3,
   "pts": 6.12,
   "opp": "TEN"
  },
  {
   "week": 4,
   "pts": 20,
   "opp": "ARI"
  },
  {
   "week": 5,
   "pts": 28.74,
   "opp": "WSH"
  },
  {
   "week": 6,
   "pts": 8.48,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 6.4,
   "opp": "HOU"
  },
  {
   "week": 9,
   "pts": 7.94,
   "opp": "PHI"
  }
 ],
 "EXT-4241457": [
  {
   "week": 2,
   "pts": 0.6,
   "opp": "LAR"
  },
  {
   "week": 3,
   "pts": 5.2,
   "opp": "TEN"
  },
  {
   "week": 4,
   "pts": 3,
   "opp": "ARI"
  },
  {
   "week": 5,
   "pts": 1.9,
   "opp": "WSH"
  },
  {
   "week": 6,
   "pts": 0.2,
   "opp": "NO"
  }
 ],
 "EXT-4430968": [
  {
   "week": 3,
   "pts": 2.5,
   "opp": "BUF"
  },
  {
   "week": 4,
   "pts": 10.6,
   "opp": "SEA"
  },
  {
   "week": 5,
   "pts": 12.1,
   "opp": "DEN"
  },
  {
   "week": 6,
   "pts": 5.5,
   "opp": "KC"
  },
  {
   "week": 8,
   "pts": 4,
   "opp": "LAR"
  },
  {
   "week": 9,
   "pts": 4.1,
   "opp": "HOU"
  }
 ],
 "EXT-3917668": [
  {
   "week": 3,
   "pts": 5,
   "opp": "BUF"
  }
 ],
 "EXT-3051738": [
  {
   "week": 3,
   "pts": 0,
   "opp": "BUF"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "SEA"
  },
  {
   "week": 5,
   "pts": 3.2,
   "opp": "DEN"
  }
 ],
 "EXT-16733": [
  {
   "week": 3,
   "pts": 0,
   "opp": "TEN"
  }
 ],
 "EXT-4570738": [
  {
   "week": 3,
   "pts": -2,
   "opp": "PIT"
  }
 ],
 "EXT-4602788": [
  {
   "week": 3,
   "pts": 1.3,
   "opp": "NYJ"
  }
 ],
 "EXT-2975674": [
  {
   "week": 3,
   "pts": 0.7,
   "opp": "CIN"
  }
 ],
 "EXT-4428119": [
  {
   "week": 3,
   "pts": 0,
   "opp": "CIN"
  },
  {
   "week": 5,
   "pts": 0.6,
   "opp": "IND"
  }
 ],
 "EXT-4240391": [
  {
   "week": 3,
   "pts": 1.4,
   "opp": "JAX"
  },
  {
   "week": 9,
   "pts": 0.84,
   "opp": "GB"
  }
 ],
 "EXT-4432722": [
  {
   "week": 4,
   "pts": 12.04,
   "opp": "IND"
  }
 ],
 "EXT-3068267": [
  {
   "week": 4,
   "pts": 4.5,
   "opp": "IND"
  },
  {
   "week": 5,
   "pts": 1.9,
   "opp": "NYG"
  },
  {
   "week": 6,
   "pts": 1.7,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 5.6,
   "opp": "PHI"
  },
  {
   "week": 9,
   "pts": 4.4,
   "opp": "LAR"
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
 "EXT-3123075": [
  {
   "week": 4,
   "pts": 0,
   "opp": "ARI"
  }
 ],
 "EXT-4421446": [
  {
   "week": 4,
   "pts": 0.4,
   "opp": "IND"
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
  },
  {
   "week": 9,
   "pts": 0.9,
   "opp": "ATL"
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
 "EXT-4426535": [
  {
   "week": 5,
   "pts": 2.1,
   "opp": "DEN"
  },
  {
   "week": 6,
   "pts": 3.1,
   "opp": "KC"
  }
 ],
 "EXT-5088338": [
  {
   "week": 4,
   "pts": 1.8,
   "opp": "TEN"
  }
 ],
 "EXT-4433970": [
  {
   "week": 5,
   "pts": 0.2,
   "opp": "WSH"
  },
  {
   "week": 6,
   "pts": 17.32,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 10.18,
   "opp": "HOU"
  },
  {
   "week": 9,
   "pts": 7.28,
   "opp": "PHI"
  }
 ],
 "EXT-4245144": [
  {
   "week": 5,
   "pts": 0,
   "opp": "ARI"
  },
  {
   "week": 9,
   "pts": 1.6,
   "opp": "MIA"
  }
 ],
 "EXT-4428396": [
  {
   "week": 5,
   "pts": 7.2,
   "opp": "DEN"
  }
 ],
 "EXT-4257188": [
  {
   "week": 6,
   "pts": 5.6,
   "opp": "NO"
  },
  {
   "week": 9,
   "pts": -2,
   "opp": "PHI"
  }
 ],
 "EXT-3127586": [
  {
   "week": 6,
   "pts": 1.3,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 3.3,
   "opp": "PHI"
  }
 ],
 "EXT-4430870": [
  {
   "week": 6,
   "pts": 3.7,
   "opp": "KC"
  },
  {
   "week": 9,
   "pts": 5.5,
   "opp": "HOU"
  }
 ],
 "EXT-4426948": [
  {
   "week": 6,
   "pts": 0,
   "opp": "SF"
  },
  {
   "week": 9,
   "pts": 1.1,
   "opp": "LAR"
  }
 ],
 "EXT-4240577": [
  {
   "week": 7,
   "pts": 3.4,
   "opp": "NO"
  }
 ],
 "EXT-4429299": [
  {
   "week": 7,
   "pts": 0.6,
   "opp": "BAL"
  }
 ],
 "EXT-4590292": [
  {
   "week": 7,
   "pts": 3.4,
   "opp": "HOU"
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
 "EXT-3915486": [
  {
   "week": 7,
   "pts": 0.9,
   "opp": "GB"
  },
  {
   "week": 8,
   "pts": 1.2,
   "opp": "MIN"
  },
  {
   "week": 9,
   "pts": 0,
   "opp": "MIA"
  }
 ],
 "EXT-5085189": [
  {
   "week": 8,
   "pts": 6.6,
   "opp": "TEN"
  },
  {
   "week": 9,
   "pts": 0.9,
   "opp": "ATL"
  }
 ],
 "EXT-4035198": [
  {
   "week": 8,
   "pts": 1.4,
   "opp": "CLE"
  }
 ],
 "EXT-4429582": [
  {
   "week": 8,
   "pts": 0.94,
   "opp": "BUF"
  },
  {
   "week": 9,
   "pts": 1.7,
   "opp": "JAX"
  }
 ],
 "EXT-3930066": [
  {
   "week": 8,
   "pts": 0,
   "opp": "PHI"
  },
  {
   "week": 9,
   "pts": 14.3,
   "opp": "LAR"
  }
 ],
 "EXT-4693370": [
  {
   "week": 8,
   "pts": 0,
   "opp": "CLE"
  }
 ],
 "EXT-4692590": [
  {
   "week": 9,
   "pts": 0,
   "opp": "PHI"
  }
 ],
 "EXT-2580216": [
  {
   "week": 9,
   "pts": 1,
   "opp": "MIA"
  }
 ],
 "EXT-4691889": [
  {
   "week": 9,
   "pts": 2,
   "opp": "PHI"
  }
 ],
 "EXT-4683111": [
  {
   "week": 9,
   "pts": 1.7,
   "opp": "LAR"
  }
 ],
 "EXT-4429020": [
  {
   "week": 9,
   "pts": 4.96,
   "opp": "HOU"
  }
 ],
 "EXT-DEF-WSH": [
  {
   "week": 1,
   "pts": 3,
   "opp": "PHI"
  },
  {
   "week": 2,
   "pts": -2,
   "opp": "DAL"
  },
  {
   "week": 3,
   "pts": 12,
   "opp": "SEA"
  },
  {
   "week": 4,
   "pts": 5,
   "opp": "IND"
  },
  {
   "week": 5,
   "pts": 6,
   "opp": "NYG"
  },
  {
   "week": 6,
   "pts": 4,
   "opp": "SF"
  },
  {
   "week": 8,
   "pts": 13,
   "opp": "PHI"
  },
  {
   "week": 9,
   "pts": 6,
   "opp": "LAR"
  }
 ],
 "EXT-DEF-NYG": [
  {
   "week": 1,
   "pts": 3,
   "opp": "DAL"
  },
  {
   "week": 2,
   "pts": 4,
   "opp": "LAR"
  },
  {
   "week": 3,
   "pts": 8,
   "opp": "TEN"
  },
  {
   "week": 4,
   "pts": 14,
   "opp": "ARI"
  },
  {
   "week": 5,
   "pts": 5,
   "opp": "WSH"
  },
  {
   "week": 6,
   "pts": 1,
   "opp": "NO"
  },
  {
   "week": 7,
   "pts": 1,
   "opp": "HOU"
  },
  {
   "week": 9,
   "pts": 13,
   "opp": "PHI"
  }
 ],
 "EXT-DEF-NE": [
  {
   "week": 1,
   "pts": 6,
   "opp": "SEA"
  },
  {
   "week": 2,
   "pts": 21,
   "opp": "PIT"
  },
  {
   "week": 3,
   "pts": -1,
   "opp": "JAX"
  },
  {
   "week": 4,
   "pts": 5,
   "opp": "BUF"
  },
  {
   "week": 5,
   "pts": 6,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 6,
   "opp": "NYJ"
  },
  {
   "week": 7,
   "pts": 2,
   "opp": "CHI"
  },
  {
   "week": 8,
   "pts": 8,
   "opp": "MIA"
  },
  {
   "week": 9,
   "pts": -1,
   "opp": "GB"
  }
 ],
 "EXT-DEF-DET": [
  {
   "week": 1,
   "pts": 10,
   "opp": "NO"
  },
  {
   "week": 2,
   "pts": -2,
   "opp": "BUF"
  },
  {
   "week": 3,
   "pts": 7,
   "opp": "NYJ"
  },
  {
   "week": 4,
   "pts": 2,
   "opp": "CAR"
  },
  {
   "week": 5,
   "pts": 7,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 6,
   "opp": "GB"
  },
  {
   "week": 8,
   "pts": 6,
   "opp": "MIN"
  },
  {
   "week": 9,
   "pts": 9,
   "opp": "MIA"
  }
 ],
 "EXT-DEF-PIT": [
  {
   "week": 1,
   "pts": 18,
   "opp": "ATL"
  },
  {
   "week": 2,
   "pts": 8,
   "opp": "NE"
  },
  {
   "week": 3,
   "pts": 5,
   "opp": "CIN"
  },
  {
   "week": 4,
   "pts": 6,
   "opp": "CLE"
  },
  {
   "week": 5,
   "pts": 1,
   "opp": "IND"
  },
  {
   "week": 6,
   "pts": 10,
   "opp": "TB"
  },
  {
   "week": 7,
   "pts": 8,
   "opp": "NO"
  },
  {
   "week": 8,
   "pts": 19,
   "opp": "CLE"
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
  },
  {
   "week": 9,
   "pts": 3,
   "opp": "ATL"
  }
 ],
 "EXT-DEF-LAC": [
  {
   "week": 1,
   "pts": 1,
   "opp": "ARI"
  },
  {
   "week": 2,
   "pts": 4,
   "opp": "LV"
  },
  {
   "week": 3,
   "pts": 14,
   "opp": "BUF"
  },
  {
   "week": 4,
   "pts": 4,
   "opp": "SEA"
  },
  {
   "week": 5,
   "pts": 3,
   "opp": "DEN"
  },
  {
   "week": 6,
   "pts": 4,
   "opp": "KC"
  },
  {
   "week": 8,
   "pts": 3,
   "opp": "LAR"
  },
  {
   "week": 9,
   "pts": -1,
   "opp": "HOU"
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
  },
  {
   "week": 9,
   "pts": 1,
   "opp": "JAX"
  }
 ]
};
