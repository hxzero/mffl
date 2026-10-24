/* MFFL Week 7 DERIVED player pool extension — producers only (Option 2).
   Source: ESPN rosters / game summaries, computed 2026-10-22 by
   history/build-pool-extended.mjs per pool-extension-investigation.md.
   These players are NOT in FanDuel's Week 7 Sunday-main contest pool:
   they are the producers (Weeks 1-6 stat lines) of the 8 teams in the
   4 non-main-slate games (NE@CHI, PIT@NO, KC@SEA, DAL@PHI), plus the
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
 "week": 7,
 "cap": 60000,
 "source": "espn-derived",
 "games": {
  "NE@CHI": "2026-10-23T00:15Z",
  "PIT@NO": "2026-10-25T13:30Z",
  "KC@SEA": "2026-10-26T00:20Z",
  "DAL@PHI": "2026-10-27T00:15Z"
 },
 "players": [
  {
   "id": "EXT-4567048",
   "name": "Kenneth Walker III",
   "pos": "RB",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 9800,
   "fppg": 28.6,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4430878",
   "name": "Jaxon Smith-Njigba",
   "pos": "WR",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 9600,
   "fppg": 25.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4241389",
   "name": "CeeDee Lamb",
   "pos": "WR",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 8200,
   "fppg": 19.3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4431611",
   "name": "Caleb Williams",
   "pos": "QB",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 7700,
   "fppg": 21.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4361370",
   "name": "Chris Olave",
   "pos": "WR",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 7700,
   "fppg": 16.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-2577417",
   "name": "Dak Prescott",
   "pos": "QB",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 7500,
   "fppg": 19,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4431452",
   "name": "Drake Maye",
   "pos": "QB",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 7500,
   "fppg": 19.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3139477",
   "name": "Patrick Mahomes",
   "pos": "QB",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 7500,
   "fppg": 20,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360689",
   "name": "Tyler Shough",
   "pos": "QB",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 7500,
   "fppg": 20,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4361579",
   "name": "Javonte Williams",
   "pos": "RB",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 7400,
   "fppg": 16.6,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-8439",
   "name": "Aaron Rodgers",
   "pos": "QB",
   "team": "PIT",
   "opp": "NO",
   "game": "PIT@NO",
   "salary": 7300,
   "fppg": 17,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4259545",
   "name": "D'Andre Swift",
   "pos": "RB",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 7300,
   "fppg": 16.3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3924327",
   "name": "Drew Lock",
   "pos": "QB",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 7300,
   "fppg": 17.1,
   "inj": "Q",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4569987",
   "name": "Jaylen Warren",
   "pos": "RB",
   "team": "PIT",
   "opp": "NO",
   "game": "PIT@NO",
   "salary": 7300,
   "fppg": 16.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4241478",
   "name": "DeVonta Smith",
   "pos": "WR",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 7200,
   "fppg": 14.8,
   "inj": "Q",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4608686",
   "name": "Kyle Monangai",
   "pos": "RB",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 7200,
   "fppg": 15.7,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3912547",
   "name": "Sam Darnold",
   "pos": "QB",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 7100,
   "fppg": 13.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685201",
   "name": "Tanner McKee",
   "pos": "QB",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 7000,
   "fppg": 12.6,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-15168",
   "name": "Case Keenum",
   "pos": "QB",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 6700,
   "fppg": 8.7,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4426354",
   "name": "George Pickens",
   "pos": "WR",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 6500,
   "fppg": 11.4,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4434153",
   "name": "Tyson Bagent",
   "pos": "QB",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 6400,
   "fppg": 5.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4047650",
   "name": "DK Metcalf",
   "pos": "WR",
   "team": "PIT",
   "opp": "NO",
   "game": "PIT@NO",
   "salary": 6100,
   "fppg": 9.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685278",
   "name": "Luther Burden III",
   "pos": "WR",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 6100,
   "fppg": 9.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4240391",
   "name": "Tommy DeVito",
   "pos": "QB",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 6100,
   "fppg": 1.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-14012",
   "name": "Andy Dalton",
   "pos": "QB",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 6000,
   "fppg": -1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4569559",
   "name": "Devaughn Vele",
   "pos": "WR",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 6000,
   "fppg": 9.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4040715",
   "name": "Jalen Hurts",
   "pos": "QB",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
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
   "opp": "NO",
   "game": "PIT@NO",
   "salary": 6000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4569173",
   "name": "Rhamondre Stevenson",
   "pos": "RB",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 5900,
   "fppg": 9.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3054850",
   "name": "Alvin Kamara",
   "pos": "RB",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 5800,
   "fppg": 9,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4427095",
   "name": "DeMario Douglas",
   "pos": "WR",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 5800,
   "fppg": 8.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4887558",
   "name": "Emanuel Wilson",
   "pos": "RB",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 5800,
   "fppg": 9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4428331",
   "name": "Rashee Rice",
   "pos": "WR",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 5700,
   "fppg": 7.9,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360238",
   "name": "Dameon Pierce",
   "pos": "RB",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 5600,
   "fppg": 7.6,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4428850",
   "name": "Dontayvion Wicks",
   "pos": "WR",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 5600,
   "fppg": 7.3,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2973405",
   "name": "Kalif Raymond",
   "pos": "WR",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 5600,
   "fppg": 7.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4683062",
   "name": "Xavier Worthy",
   "pos": "WR",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 5600,
   "fppg": 7.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4715355",
   "name": "Darius Cooper",
   "pos": "WR",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 5500,
   "fppg": 7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685261",
   "name": "Germie Bernard",
   "pos": "WR",
   "team": "PIT",
   "opp": "NO",
   "game": "PIT@NO",
   "salary": 5500,
   "fppg": 6.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5083754",
   "name": "Ryan Flournoy",
   "pos": "WR",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 5500,
   "fppg": 6.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-15847",
   "name": "Travis Kelce",
   "pos": "TE",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 5500,
   "fppg": 11,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4431299",
   "name": "Rome Odunze",
   "pos": "WR",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 5400,
   "fppg": 6.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3121023",
   "name": "Dallas Goedert",
   "pos": "TE",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 5300,
   "fppg": 9.6,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3929645",
   "name": "Juwan Johnson",
   "pos": "TE",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 5300,
   "fppg": 8.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2977187",
   "name": "Cooper Kupp",
   "pos": "WR",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 5200,
   "fppg": 5.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4599739",
   "name": "Kendre Miller",
   "pos": "RB",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 5200,
   "fppg": 6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4361411",
   "name": "Pat Freiermuth",
   "pos": "TE",
   "team": "PIT",
   "opp": "NO",
   "game": "PIT@NO",
   "salary": 5200,
   "fppg": 8.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4032473",
   "name": "Rashid Shaheed",
   "pos": "WR",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 5200,
   "fppg": 5.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4432710",
   "name": "TreVeyon Henderson",
   "pos": "RB",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 5200,
   "fppg": 5.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3929630",
   "name": "Saquon Barkley",
   "pos": "RB",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 5100,
   "fppg": 5.3,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3046439",
   "name": "Hunter Henry",
   "pos": "TE",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 5000,
   "fppg": 7.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4038815",
   "name": "Rico Dowdle",
   "pos": "RB",
   "team": "PIT",
   "opp": "NO",
   "game": "PIT@NO",
   "salary": 5000,
   "fppg": 5,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4047646",
   "name": "A.J. Brown",
   "pos": "WR",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 4900,
   "fppg": 4.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4695193",
   "name": "Efton Chism III",
   "pos": "WR",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 4900,
   "fppg": 4.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429835",
   "name": "George Holani",
   "pos": "RB",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 4900,
   "fppg": 4.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4613202",
   "name": "Kyle Williams",
   "pos": "WR",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 4900,
   "fppg": 4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4723086",
   "name": "Colston Loveland",
   "pos": "TE",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 4800,
   "fppg": 5.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430802",
   "name": "Darnell Washington",
   "pos": "TE",
   "team": "PIT",
   "opp": "NO",
   "game": "PIT@NO",
   "salary": 4800,
   "fppg": 5.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4832955",
   "name": "Emmett Johnson",
   "pos": "RB",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 4800,
   "fppg": 3.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4242355",
   "name": "Jake Ferguson",
   "pos": "TE",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 4800,
   "fppg": 6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4870795",
   "name": "Makai Lemon",
   "pos": "WR",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 4800,
   "fppg": 3.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4036131",
   "name": "Noah Fant",
   "pos": "TE",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 4800,
   "fppg": 6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4426386",
   "name": "Roschon Johnson",
   "pos": "RB",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 4800,
   "fppg": 3.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4597703",
   "name": "Tory Horton",
   "pos": "WR",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 4700,
   "fppg": 3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4576297",
   "name": "AJ Barner",
   "pos": "TE",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 4600,
   "fppg": 4.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4879276",
   "name": "Bryce Lance",
   "pos": "WR",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 4600,
   "fppg": 2.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4831959",
   "name": "Eli Raridon",
   "pos": "TE",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 4600,
   "fppg": 4.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5082630",
   "name": "Jalen Royals",
   "pos": "WR",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 4600,
   "fppg": 2.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4035656",
   "name": "Ben Skowronek",
   "pos": "WR",
   "team": "PIT",
   "opp": "NO",
   "game": "PIT@NO",
   "salary": 4500,
   "fppg": 2.1,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4431431",
   "name": "Corey Kiner",
   "pos": "RB",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 4500,
   "fppg": 2.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5093923",
   "name": "Andrew Armstrong",
   "pos": "WR",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 4400,
   "fppg": 1.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4258595",
   "name": "Cole Kmet",
   "pos": "TE",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 4400,
   "fppg": 2.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3676833",
   "name": "KaVontae Turpin",
   "pos": "WR",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 4400,
   "fppg": 1.8,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4698253",
   "name": "Lan Larison",
   "pos": "RB",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 4400,
   "fppg": 1.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4240472",
   "name": "Noah Gray",
   "pos": "TE",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 4400,
   "fppg": 3.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-SEA",
   "name": "Seattle Seahawks",
   "pos": "D",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 4400,
   "fppg": 8.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-5081999",
   "name": "CJ Donaldson",
   "pos": "RB",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 4300,
   "fppg": 1.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4241372",
   "name": "Hollywood Brown",
   "pos": "WR",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 4300,
   "fppg": 1.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-5160110",
   "name": "Jahdae Walker",
   "pos": "WR",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 4300,
   "fppg": 1.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429676",
   "name": "Tyler Goodson",
   "pos": "RB",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 4300,
   "fppg": 1.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4869748",
   "name": "Zavion Thomas",
   "pos": "WR",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 4300,
   "fppg": 1.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4243176",
   "name": "Brady Russell",
   "pos": "RB",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 4200,
   "fppg": 0.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360967",
   "name": "Brevyn Spann-Ford",
   "pos": "TE",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 4200,
   "fppg": 1.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4912218",
   "name": "Cyrus Allen",
   "pos": "WR",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 4200,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4362478",
   "name": "Emari Demercado",
   "pos": "RB",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 4200,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-2975863",
   "name": "Eric Saubert",
   "pos": "TE",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 4200,
   "fppg": 1.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4383396",
   "name": "Hunter Luepke",
   "pos": "RB",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 4200,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4426485",
   "name": "Jonathan Mingo",
   "pos": "WR",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 4200,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-KC",
   "name": "Kansas City Chiefs",
   "pos": "D",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 4200,
   "fppg": 8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-PIT",
   "name": "Pittsburgh Steelers",
   "pos": "D",
   "team": "PIT",
   "opp": "NO",
   "game": "PIT@NO",
   "salary": 4200,
   "fppg": 8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-15835",
   "name": "Zach Ertz",
   "pos": "TE",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 4200,
   "fppg": 1.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4698597",
   "name": "Barion Brown",
   "pos": "WR",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4596602",
   "name": "Brashard Smith",
   "pos": "RB",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4714365",
   "name": "Carson Steele",
   "pos": "RB",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 4100,
   "fppg": 0.5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-CHI",
   "name": "Chicago Bears",
   "pos": "D",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 4100,
   "fppg": 7.3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4372414",
   "name": "Elijah Moore",
   "pos": "WR",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3052096",
   "name": "Johnny Mundt",
   "pos": "TE",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 4100,
   "fppg": 0.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4372758",
   "name": "Kevin Austin Jr.",
   "pos": "WR",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 4100,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4428119",
   "name": "Lew Nichols",
   "pos": "RB",
   "team": "PIT",
   "opp": "NO",
   "game": "PIT@NO",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4372096",
   "name": "Luke Schoonmaker",
   "pos": "TE",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 4100,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-NE",
   "name": "New England Patriots",
   "pos": "D",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 4100,
   "fppg": 7.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4702559",
   "name": "Oscar Delp",
   "pos": "TE",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 4100,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685504",
   "name": "Sam Roush",
   "pos": "TE",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 4100,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4037457",
   "name": "Travis Homer",
   "pos": "RB",
   "team": "PIT",
   "opp": "NO",
   "game": "PIT@NO",
   "salary": 4100,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4035693",
   "name": "Velus Jones Jr.",
   "pos": "RB",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 4100,
   "fppg": 0.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4678006",
   "name": "Elijah Arroyo",
   "pos": "TE",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 4000,
   "fppg": 0.4,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4685512",
   "name": "Jadarian Price",
   "pos": "RB",
   "team": "SEA",
   "opp": "KC",
   "game": "KC@SEA",
   "salary": 4000,
   "fppg": 4,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4431196",
   "name": "Jake Briningstool",
   "pos": "TE",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 4000,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-5065495",
   "name": "Kaden Davis",
   "pos": "WR",
   "team": "CHI",
   "opp": "NE",
   "game": "NE@CHI",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-2991662",
   "name": "Mack Hollins",
   "pos": "WR",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 4000,
   "fppg": 7.1,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4035687",
   "name": "Michael Pittman Jr.",
   "pos": "WR",
   "team": "PIT",
   "opp": "NO",
   "game": "PIT@NO",
   "salary": 4000,
   "fppg": 4.1,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4372716",
   "name": "Nikko Remigio",
   "pos": "WR",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 4000,
   "fppg": -0.4,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4039505",
   "name": "Reggie Gilliam",
   "pos": "RB",
   "team": "NE",
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 4000,
   "fppg": 0.2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-2975674",
   "name": "Robert Tonyan",
   "pos": "TE",
   "team": "PIT",
   "opp": "NO",
   "game": "PIT@NO",
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
   "opp": "NO",
   "game": "PIT@NO",
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
   "opp": "CHI",
   "game": "NE@CHI",
   "salary": 4000,
   "fppg": 8.5,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4429013",
   "name": "Tank Bigsby",
   "pos": "RB",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 4000,
   "fppg": 3.9,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4239996",
   "name": "Travis Etienne Jr.",
   "pos": "RB",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 4000,
   "fppg": 7.8,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4430684",
   "name": "Treyton Welch",
   "pos": "TE",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4362921",
   "name": "Tyquan Thornton",
   "pos": "WR",
   "team": "KC",
   "opp": "SEA",
   "game": "KC@SEA",
   "salary": 4000,
   "fppg": 10.6,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4431545",
   "name": "Will Shipley",
   "pos": "RB",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 4000,
   "fppg": 3.5,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-NO",
   "name": "New Orleans Saints",
   "pos": "D",
   "team": "NO",
   "opp": "PIT",
   "game": "PIT@NO",
   "salary": 3900,
   "fppg": 5.5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-PHI",
   "name": "Philadelphia Eagles",
   "pos": "D",
   "team": "PHI",
   "opp": "DAL",
   "game": "DAL@PHI",
   "salary": 3600,
   "fppg": 3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-DAL",
   "name": "Dallas Cowboys",
   "pos": "D",
   "team": "DAL",
   "opp": "PHI",
   "game": "DAL@PHI",
   "salary": 3400,
   "fppg": 2,
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
   "pts": 25.16,
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
 "EXT-4698253": [
  {
   "week": 1,
   "pts": 1.9,
   "opp": "SEA"
  }
 ],
 "EXT-3924327": [
  {
   "week": 1,
   "pts": 12.78,
   "opp": "NE"
  },
  {
   "week": 2,
   "pts": 21.4,
   "opp": "ARI"
  }
 ],
 "EXT-3912547": [
  {
   "week": 1,
   "pts": 0.52,
   "opp": "NE"
  },
  {
   "week": 3,
   "pts": 32.66,
   "opp": "WSH"
  },
  {
   "week": 4,
   "pts": 14.32,
   "opp": "LAC"
  },
  {
   "week": 5,
   "pts": 10.3,
   "opp": "SF"
  },
  {
   "week": 6,
   "pts": 11.02,
   "opp": "DEN"
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
  }
 ],
 "EXT-4685512": [
  {
   "week": 1,
   "pts": 6.8,
   "opp": "NE"
  },
  {
   "week": 2,
   "pts": 4.5,
   "opp": "ARI"
  },
  {
   "week": 3,
   "pts": 0.7,
   "opp": "WSH"
  }
 ],
 "EXT-4429835": [
  {
   "week": 1,
   "pts": 2.9,
   "opp": "NE"
  },
  {
   "week": 2,
   "pts": 2,
   "opp": "ARI"
  },
  {
   "week": 3,
   "pts": 8.3,
   "opp": "WSH"
  },
  {
   "week": 4,
   "pts": 2.5,
   "opp": "LAC"
  },
  {
   "week": 5,
   "pts": 3.1,
   "opp": "SF"
  },
  {
   "week": 6,
   "pts": 8,
   "opp": "DEN"
  }
 ],
 "EXT-4887558": [
  {
   "week": 1,
   "pts": 0.3,
   "opp": "NE"
  },
  {
   "week": 2,
   "pts": 9.2,
   "opp": "ARI"
  },
  {
   "week": 3,
   "pts": 1.4,
   "opp": "WSH"
  },
  {
   "week": 4,
   "pts": 25.5,
   "opp": "LAC"
  },
  {
   "week": 5,
   "pts": 12.2,
   "opp": "SF"
  },
  {
   "week": 6,
   "pts": 5.2,
   "opp": "DEN"
  }
 ],
 "EXT-2977187": [
  {
   "week": 1,
   "pts": 4.5,
   "opp": "NE"
  },
  {
   "week": 2,
   "pts": 3,
   "opp": "ARI"
  },
  {
   "week": 3,
   "pts": 12.6,
   "opp": "WSH"
  },
  {
   "week": 4,
   "pts": 1.8,
   "opp": "LAC"
  },
  {
   "week": 5,
   "pts": 2.5,
   "opp": "SF"
  },
  {
   "week": 6,
   "pts": 7.5,
   "opp": "DEN"
  }
 ],
 "EXT-4430878": [
  {
   "week": 1,
   "pts": 25.2,
   "opp": "NE"
  },
  {
   "week": 2,
   "pts": 41,
   "opp": "ARI"
  },
  {
   "week": 3,
   "pts": 33.36,
   "opp": "WSH"
  },
  {
   "week": 4,
   "pts": 10.1,
   "opp": "LAC"
  },
  {
   "week": 5,
   "pts": 23.3,
   "opp": "SF"
  },
  {
   "week": 6,
   "pts": 22.4,
   "opp": "DEN"
  }
 ],
 "EXT-4243176": [
  {
   "week": 1,
   "pts": 3,
   "opp": "NE"
  },
  {
   "week": 3,
   "pts": 2.5,
   "opp": "WSH"
  }
 ],
 "EXT-4576297": [
  {
   "week": 1,
   "pts": 2.3,
   "opp": "NE"
  },
  {
   "week": 2,
   "pts": 7.4,
   "opp": "ARI"
  },
  {
   "week": 3,
   "pts": 9.4,
   "opp": "WSH"
  },
  {
   "week": 4,
   "pts": 1.7,
   "opp": "LAC"
  },
  {
   "week": 5,
   "pts": 3.5,
   "opp": "SF"
  },
  {
   "week": 6,
   "pts": 3.1,
   "opp": "DEN"
  }
 ],
 "EXT-4032473": [
  {
   "week": 1,
   "pts": 0.9,
   "opp": "NE"
  },
  {
   "week": 2,
   "pts": 5.4,
   "opp": "ARI"
  },
  {
   "week": 3,
   "pts": 2.4,
   "opp": "WSH"
  },
  {
   "week": 4,
   "pts": 11.8,
   "opp": "LAC"
  },
  {
   "week": 5,
   "pts": 3.3,
   "opp": "SF"
  },
  {
   "week": 6,
   "pts": 9.3,
   "opp": "DEN"
  }
 ],
 "EXT-4360689": [
  {
   "week": 1,
   "pts": 28.2,
   "opp": "DET"
  },
  {
   "week": 2,
   "pts": 22.38,
   "opp": "BAL"
  },
  {
   "week": 3,
   "pts": 24.8,
   "opp": "LV"
  },
  {
   "week": 4,
   "pts": 15.94,
   "opp": "ATL"
  },
  {
   "week": 5,
   "pts": 1.84,
   "opp": "MIN"
  },
  {
   "week": 6,
   "pts": 26.96,
   "opp": "NYG"
  }
 ],
 "EXT-4239996": [
  {
   "week": 1,
   "pts": 11.3,
   "opp": "DET"
  },
  {
   "week": 2,
   "pts": 4.1,
   "opp": "BAL"
  },
  {
   "week": 3,
   "pts": 8,
   "opp": "LV"
  }
 ],
 "EXT-4698597": [
  {
   "week": 1,
   "pts": 0.3,
   "opp": "DET"
  },
  {
   "week": 4,
   "pts": -0.5,
   "opp": "ATL"
  },
  {
   "week": 6,
   "pts": 1,
   "opp": "NYG"
  }
 ],
 "EXT-4599739": [
  {
   "week": 1,
   "pts": 9,
   "opp": "DET"
  },
  {
   "week": 3,
   "pts": 2.9,
   "opp": "LV"
  },
  {
   "week": 4,
   "pts": 0.9,
   "opp": "ATL"
  },
  {
   "week": 5,
   "pts": 9,
   "opp": "MIN"
  },
  {
   "week": 6,
   "pts": 8,
   "opp": "NYG"
  }
 ],
 "EXT-4361370": [
  {
   "week": 1,
   "pts": 26.2,
   "opp": "DET"
  },
  {
   "week": 2,
   "pts": 18.6,
   "opp": "BAL"
  },
  {
   "week": 3,
   "pts": 18.2,
   "opp": "LV"
  },
  {
   "week": 4,
   "pts": 18.6,
   "opp": "ATL"
  },
  {
   "week": 5,
   "pts": 6.6,
   "opp": "MIN"
  },
  {
   "week": 6,
   "pts": 12.3,
   "opp": "NYG"
  }
 ],
 "EXT-5081999": [
  {
   "week": 1,
   "pts": 0.7,
   "opp": "DET"
  },
  {
   "week": 2,
   "pts": 0.2,
   "opp": "BAL"
  },
  {
   "week": 3,
   "pts": 0.5,
   "opp": "LV"
  },
  {
   "week": 4,
   "pts": 3.3,
   "opp": "ATL"
  },
  {
   "week": 5,
   "pts": 2.5,
   "opp": "MIN"
  },
  {
   "week": 6,
   "pts": 1.9,
   "opp": "NYG"
  }
 ],
 "EXT-4569559": [
  {
   "week": 1,
   "pts": 16.4,
   "opp": "DET"
  },
  {
   "week": 2,
   "pts": 8.9,
   "opp": "BAL"
  },
  {
   "week": 3,
   "pts": 5.4,
   "opp": "LV"
  },
  {
   "week": 4,
   "pts": 14.4,
   "opp": "ATL"
  },
  {
   "week": 5,
   "pts": 4.6,
   "opp": "MIN"
  },
  {
   "week": 6,
   "pts": 5.7,
   "opp": "NYG"
  }
 ],
 "EXT-4879276": [
  {
   "week": 1,
   "pts": 5.7,
   "opp": "DET"
  },
  {
   "week": 2,
   "pts": 1.3,
   "opp": "BAL"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "LV"
  },
  {
   "week": 4,
   "pts": 1.2,
   "opp": "ATL"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "MIN"
  },
  {
   "week": 6,
   "pts": 7.9,
   "opp": "NYG"
  }
 ],
 "EXT-4036131": [
  {
   "week": 1,
   "pts": 11.3,
   "opp": "DET"
  },
  {
   "week": 3,
   "pts": 17.3,
   "opp": "LV"
  },
  {
   "week": 5,
   "pts": 1.2,
   "opp": "MIN"
  },
  {
   "week": 6,
   "pts": 0,
   "opp": "NYG"
  }
 ],
 "EXT-3929645": [
  {
   "week": 1,
   "pts": 12.9,
   "opp": "DET"
  },
  {
   "week": 2,
   "pts": 8.6,
   "opp": "BAL"
  },
  {
   "week": 3,
   "pts": 19.3,
   "opp": "LV"
  },
  {
   "week": 4,
   "pts": 8.9,
   "opp": "ATL"
  },
  {
   "week": 5,
   "pts": 3.6,
   "opp": "MIN"
  },
  {
   "week": 6,
   "pts": 0,
   "opp": "NYG"
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
   "pts": 21.96,
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
  }
 ],
 "EXT-5065495": [
  {
   "week": 1,
   "pts": 0,
   "opp": "CAR"
  }
 ],
 "EXT-4040715": [
  {
   "week": 1,
   "pts": 24.72,
   "opp": "WSH"
  },
  {
   "week": 2,
   "pts": 18.16,
   "opp": "TEN"
  },
  {
   "week": 3,
   "pts": 13.62,
   "opp": "CHI"
  },
  {
   "week": 4,
   "pts": 13.52,
   "opp": "LAR"
  },
  {
   "week": 5,
   "pts": 13,
   "opp": "JAX"
  }
 ],
 "EXT-3929630": [
  {
   "week": 1,
   "pts": 8.5,
   "opp": "WSH"
  },
  {
   "week": 2,
   "pts": 2.5,
   "opp": "TEN"
  },
  {
   "week": 3,
   "pts": 8.5,
   "opp": "CHI"
  },
  {
   "week": 4,
   "pts": 1.5,
   "opp": "LAR"
  }
 ],
 "EXT-4429013": [
  {
   "week": 1,
   "pts": 0.3,
   "opp": "WSH"
  },
  {
   "week": 2,
   "pts": 10.8,
   "opp": "TEN"
  },
  {
   "week": 3,
   "pts": -1,
   "opp": "CHI"
  },
  {
   "week": 4,
   "pts": 5.5,
   "opp": "LAR"
  }
 ],
 "EXT-4431545": [
  {
   "week": 1,
   "pts": 1.7,
   "opp": "WSH"
  },
  {
   "week": 2,
   "pts": 3.9,
   "opp": "TEN"
  },
  {
   "week": 3,
   "pts": 1.6,
   "opp": "CHI"
  },
  {
   "week": 4,
   "pts": 2.3,
   "opp": "LAR"
  },
  {
   "week": 5,
   "pts": 7.8,
   "opp": "JAX"
  }
 ],
 "EXT-4428850": [
  {
   "week": 1,
   "pts": 14.3,
   "opp": "WSH"
  },
  {
   "week": 2,
   "pts": 9.9,
   "opp": "TEN"
  },
  {
   "week": 3,
   "pts": 4.2,
   "opp": "CHI"
  },
  {
   "week": 4,
   "pts": 3.3,
   "opp": "LAR"
  },
  {
   "week": 5,
   "pts": 8.8,
   "opp": "JAX"
  },
  {
   "week": 6,
   "pts": 3.4,
   "opp": "CAR"
  }
 ],
 "EXT-3121023": [
  {
   "week": 1,
   "pts": 21.7,
   "opp": "WSH"
  },
  {
   "week": 2,
   "pts": 0.9,
   "opp": "TEN"
  },
  {
   "week": 5,
   "pts": 6.8,
   "opp": "JAX"
  },
  {
   "week": 6,
   "pts": 9.1,
   "opp": "CAR"
  }
 ],
 "EXT-4870795": [
  {
   "week": 1,
   "pts": 1,
   "opp": "WSH"
  },
  {
   "week": 2,
   "pts": 1.4,
   "opp": "TEN"
  },
  {
   "week": 3,
   "pts": 4.4,
   "opp": "CHI"
  },
  {
   "week": 4,
   "pts": 4.2,
   "opp": "LAR"
  },
  {
   "week": 5,
   "pts": 6.8,
   "opp": "JAX"
  },
  {
   "week": 6,
   "pts": 3.4,
   "opp": "CAR"
  }
 ],
 "EXT-4241478": [
  {
   "week": 1,
   "pts": 6.8,
   "opp": "WSH"
  },
  {
   "week": 2,
   "pts": 25.7,
   "opp": "TEN"
  },
  {
   "week": 3,
   "pts": 9.5,
   "opp": "CHI"
  },
  {
   "week": 6,
   "pts": 17,
   "opp": "CAR"
  }
 ],
 "EXT-4567048": [
  {
   "week": 1,
   "pts": 35.6,
   "opp": "DEN"
  },
  {
   "week": 2,
   "pts": 23.8,
   "opp": "IND"
  },
  {
   "week": 3,
   "pts": 20.3,
   "opp": "MIA"
  },
  {
   "week": 4,
   "pts": 33.4,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 29.9,
   "opp": "LAC"
  }
 ],
 "EXT-3139477": [
  {
   "week": 1,
   "pts": 22.66,
   "opp": "DEN"
  },
  {
   "week": 2,
   "pts": 31.98,
   "opp": "IND"
  },
  {
   "week": 3,
   "pts": 16.94,
   "opp": "MIA"
  },
  {
   "week": 4,
   "pts": 17,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 11.48,
   "opp": "LAC"
  }
 ],
 "EXT-15847": [
  {
   "week": 1,
   "pts": 8.6,
   "opp": "DEN"
  },
  {
   "week": 2,
   "pts": 23.6,
   "opp": "IND"
  },
  {
   "week": 3,
   "pts": 12.9,
   "opp": "MIA"
  },
  {
   "week": 4,
   "pts": 2.5,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 7.3,
   "opp": "LAC"
  }
 ],
 "EXT-4832955": [
  {
   "week": 1,
   "pts": 7.8,
   "opp": "DEN"
  },
  {
   "week": 2,
   "pts": 4.5,
   "opp": "IND"
  },
  {
   "week": 3,
   "pts": 1.7,
   "opp": "MIA"
  },
  {
   "week": 4,
   "pts": 1.5,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 3.4,
   "opp": "LAC"
  }
 ],
 "EXT-4683062": [
  {
   "week": 1,
   "pts": 3.3,
   "opp": "DEN"
  },
  {
   "week": 2,
   "pts": 11,
   "opp": "IND"
  },
  {
   "week": 3,
   "pts": 3,
   "opp": "MIA"
  },
  {
   "week": 4,
   "pts": 9,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 10.8,
   "opp": "LAC"
  }
 ],
 "EXT-4431196": [
  {
   "week": 1,
   "pts": 1.4,
   "opp": "DEN"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "MIA"
  }
 ],
 "EXT-4428331": [
  {
   "week": 1,
   "pts": 8.9,
   "opp": "DEN"
  },
  {
   "week": 2,
   "pts": 10.3,
   "opp": "IND"
  },
  {
   "week": 3,
   "pts": 12.3,
   "opp": "MIA"
  }
 ],
 "EXT-4240472": [
  {
   "week": 1,
   "pts": 1,
   "opp": "DEN"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "IND"
  },
  {
   "week": 3,
   "pts": 5.4,
   "opp": "MIA"
  },
  {
   "week": 4,
   "pts": 2.7,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 6.8,
   "opp": "LAC"
  }
 ],
 "EXT-4912218": [
  {
   "week": 1,
   "pts": 0,
   "opp": "DEN"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 3.7,
   "opp": "LAC"
  }
 ],
 "EXT-4362921": [
  {
   "week": 1,
   "pts": 0,
   "opp": "DEN"
  },
  {
   "week": 2,
   "pts": 10.6,
   "opp": "IND"
  },
  {
   "week": 3,
   "pts": 3.2,
   "opp": "MIA"
  },
  {
   "week": 4,
   "pts": 28.6,
   "opp": "LV"
  }
 ],
 "EXT-4361579": [
  {
   "week": 1,
   "pts": 21.7,
   "opp": "NYG"
  },
  {
   "week": 2,
   "pts": 6.5,
   "opp": "WSH"
  },
  {
   "week": 3,
   "pts": 17.3,
   "opp": "BAL"
  },
  {
   "week": 4,
   "pts": 28.8,
   "opp": "HOU"
  },
  {
   "week": 5,
   "pts": 13.2,
   "opp": "TB"
  },
  {
   "week": 6,
   "pts": 12,
   "opp": "GB"
  }
 ],
 "EXT-4383396": [
  {
   "week": 1,
   "pts": 0.7,
   "opp": "NYG"
  },
  {
   "week": 2,
   "pts": 0.1,
   "opp": "WSH"
  },
  {
   "week": 4,
   "pts": 0.7,
   "opp": "HOU"
  },
  {
   "week": 5,
   "pts": 0.5,
   "opp": "TB"
  },
  {
   "week": 6,
   "pts": 2.4,
   "opp": "GB"
  }
 ],
 "EXT-2577417": [
  {
   "week": 1,
   "pts": 15.4,
   "opp": "NYG"
  },
  {
   "week": 2,
   "pts": 29.76,
   "opp": "WSH"
  },
  {
   "week": 3,
   "pts": 16.94,
   "opp": "BAL"
  },
  {
   "week": 4,
   "pts": 21.1,
   "opp": "HOU"
  },
  {
   "week": 5,
   "pts": 17.64,
   "opp": "TB"
  },
  {
   "week": 6,
   "pts": 13.02,
   "opp": "GB"
  }
 ],
 "EXT-4362478": [
  {
   "week": 1,
   "pts": 0.7,
   "opp": "NYG"
  },
  {
   "week": 2,
   "pts": 0.8,
   "opp": "WSH"
  }
 ],
 "EXT-4241389": [
  {
   "week": 1,
   "pts": 12.9,
   "opp": "NYG"
  },
  {
   "week": 2,
   "pts": 34.3,
   "opp": "WSH"
  },
  {
   "week": 3,
   "pts": 19.7,
   "opp": "BAL"
  },
  {
   "week": 4,
   "pts": 35.8,
   "opp": "HOU"
  },
  {
   "week": 5,
   "pts": 1.9,
   "opp": "TB"
  },
  {
   "week": 6,
   "pts": 11.5,
   "opp": "GB"
  }
 ],
 "EXT-4426354": [
  {
   "week": 1,
   "pts": 4.3,
   "opp": "NYG"
  },
  {
   "week": 2,
   "pts": 7,
   "opp": "WSH"
  },
  {
   "week": 3,
   "pts": 11.7,
   "opp": "BAL"
  },
  {
   "week": 4,
   "pts": 8.5,
   "opp": "HOU"
  },
  {
   "week": 5,
   "pts": 26.5,
   "opp": "TB"
  },
  {
   "week": 6,
   "pts": 10.3,
   "opp": "GB"
  }
 ],
 "EXT-5083754": [
  {
   "week": 1,
   "pts": 3.2,
   "opp": "NYG"
  },
  {
   "week": 2,
   "pts": 4.8,
   "opp": "WSH"
  },
  {
   "week": 3,
   "pts": 3.2,
   "opp": "BAL"
  },
  {
   "week": 4,
   "pts": 5.7,
   "opp": "HOU"
  },
  {
   "week": 5,
   "pts": 10.5,
   "opp": "TB"
  },
  {
   "week": 6,
   "pts": 13.5,
   "opp": "GB"
  }
 ],
 "EXT-4360967": [
  {
   "week": 1,
   "pts": 2.4,
   "opp": "NYG"
  },
  {
   "week": 3,
   "pts": 2.4,
   "opp": "BAL"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "HOU"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "TB"
  },
  {
   "week": 6,
   "pts": 5.5,
   "opp": "GB"
  }
 ],
 "EXT-4372096": [
  {
   "week": 1,
   "pts": 1.7,
   "opp": "NYG"
  },
  {
   "week": 3,
   "pts": 1.4,
   "opp": "BAL"
  },
  {
   "week": 5,
   "pts": 1.4,
   "opp": "TB"
  }
 ],
 "EXT-4426485": [
  {
   "week": 1,
   "pts": 1.5,
   "opp": "NYG"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "HOU"
  },
  {
   "week": 5,
   "pts": 3,
   "opp": "TB"
  }
 ],
 "EXT-3676833": [
  {
   "week": 1,
   "pts": 1.3,
   "opp": "NYG"
  },
  {
   "week": 2,
   "pts": 0.1,
   "opp": "WSH"
  },
  {
   "week": 3,
   "pts": 8.3,
   "opp": "BAL"
  },
  {
   "week": 5,
   "pts": 1.2,
   "opp": "TB"
  }
 ],
 "EXT-4242355": [
  {
   "week": 1,
   "pts": 1.6,
   "opp": "NYG"
  },
  {
   "week": 2,
   "pts": 18.3,
   "opp": "WSH"
  },
  {
   "week": 3,
   "pts": 7.8,
   "opp": "BAL"
  },
  {
   "week": 4,
   "pts": 2.6,
   "opp": "HOU"
  },
  {
   "week": 5,
   "pts": 3.4,
   "opp": "TB"
  },
  {
   "week": 6,
   "pts": 2.3,
   "opp": "GB"
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
 "EXT-4241372": [
  {
   "week": 2,
   "pts": 1.2,
   "opp": "TEN"
  }
 ],
 "EXT-4715355": [
  {
   "week": 2,
   "pts": 9.6,
   "opp": "TEN"
  },
  {
   "week": 4,
   "pts": 16.8,
   "opp": "LAR"
  },
  {
   "week": 5,
   "pts": 14.1,
   "opp": "JAX"
  },
  {
   "week": 6,
   "pts": 1.4,
   "opp": "CAR"
  }
 ],
 "EXT-3052096": [
  {
   "week": 2,
   "pts": 1.8,
   "opp": "TEN"
  },
  {
   "week": 3,
   "pts": 0.9,
   "opp": "CHI"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "JAX"
  },
  {
   "week": 6,
   "pts": 0.9,
   "opp": "CAR"
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
  }
 ],
 "EXT-4039505": [
  {
   "week": 2,
   "pts": 0.9,
   "opp": "PIT"
  }
 ],
 "EXT-4702559": [
  {
   "week": 2,
   "pts": 1.3,
   "opp": "BAL"
  },
  {
   "week": 6,
   "pts": 2,
   "opp": "NYG"
  }
 ],
 "EXT-3054850": [
  {
   "week": 2,
   "pts": 4.7,
   "opp": "BAL"
  },
  {
   "week": 3,
   "pts": 4.6,
   "opp": "LV"
  },
  {
   "week": 4,
   "pts": 20.3,
   "opp": "ATL"
  },
  {
   "week": 5,
   "pts": 1.6,
   "opp": "MIN"
  },
  {
   "week": 6,
   "pts": 13.9,
   "opp": "NYG"
  }
 ],
 "EXT-4372758": [
  {
   "week": 2,
   "pts": 1.2,
   "opp": "BAL"
  }
 ],
 "EXT-4678006": [
  {
   "week": 2,
   "pts": 2.2,
   "opp": "ARI"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "SF"
  }
 ],
 "EXT-2975863": [
  {
   "week": 2,
   "pts": -0.5,
   "opp": "ARI"
  },
  {
   "week": 3,
   "pts": 7.8,
   "opp": "WSH"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "SF"
  },
  {
   "week": 6,
   "pts": 0,
   "opp": "DEN"
  }
 ],
 "EXT-4596602": [
  {
   "week": 3,
   "pts": 0.9,
   "opp": "MIA"
  }
 ],
 "EXT-5082630": [
  {
   "week": 2,
   "pts": 7.6,
   "opp": "IND"
  },
  {
   "week": 3,
   "pts": 1.6,
   "opp": "MIA"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 3.4,
   "opp": "LAC"
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
 "EXT-2975674": [
  {
   "week": 3,
   "pts": 0.7,
   "opp": "CIN"
  }
 ],
 "EXT-4597703": [
  {
   "week": 3,
   "pts": 6.3,
   "opp": "WSH"
  },
  {
   "week": 4,
   "pts": 7.1,
   "opp": "LAC"
  },
  {
   "week": 6,
   "pts": 1.8,
   "opp": "DEN"
  }
 ],
 "EXT-4240391": [
  {
   "week": 3,
   "pts": 1.4,
   "opp": "JAX"
  }
 ],
 "EXT-4429676": [
  {
   "week": 3,
   "pts": 2.2,
   "opp": "BAL"
  },
  {
   "week": 4,
   "pts": 1.2,
   "opp": "HOU"
  },
  {
   "week": 6,
   "pts": 1.4,
   "opp": "GB"
  }
 ],
 "EXT-14012": [
  {
   "week": 3,
   "pts": -1,
   "opp": "CHI"
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
 "EXT-15835": [
  {
   "week": 3,
   "pts": 1.4,
   "opp": "CHI"
  },
  {
   "week": 4,
   "pts": 2.3,
   "opp": "LAR"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "JAX"
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
  }
 ],
 "EXT-4430684": [
  {
   "week": 4,
   "pts": 0,
   "opp": "ATL"
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
  }
 ],
 "EXT-4035693": [
  {
   "week": 6,
   "pts": 2.4,
   "opp": "DEN"
  }
 ],
 "EXT-4685201": [
  {
   "week": 6,
   "pts": 12.6,
   "opp": "CAR"
  }
 ],
 "EXT-4372414": [
  {
   "week": 6,
   "pts": 0.9,
   "opp": "CAR"
  }
 ],
 "EXT-4360238": [
  {
   "week": 5,
   "pts": 2.2,
   "opp": "JAX"
  },
  {
   "week": 6,
   "pts": 13,
   "opp": "CAR"
  }
 ],
 "EXT-4714365": [
  {
   "week": 6,
   "pts": 0.9,
   "opp": "CAR"
  }
 ],
 "EXT-5093923": [
  {
   "week": 6,
   "pts": 1.8,
   "opp": "LAC"
  }
 ],
 "EXT-4372716": [
  {
   "week": 6,
   "pts": -2,
   "opp": "LAC"
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
  }
 ],
 "EXT-DEF-KC": [
  {
   "week": 1,
   "pts": 12,
   "opp": "DEN"
  },
  {
   "week": 2,
   "pts": 1,
   "opp": "IND"
  },
  {
   "week": 3,
   "pts": 8,
   "opp": "MIA"
  },
  {
   "week": 4,
   "pts": 4,
   "opp": "LV"
  },
  {
   "week": 6,
   "pts": 15,
   "opp": "LAC"
  }
 ],
 "EXT-DEF-SEA": [
  {
   "week": 1,
   "pts": 13,
   "opp": "NE"
  },
  {
   "week": 2,
   "pts": 8,
   "opp": "ARI"
  },
  {
   "week": 3,
   "pts": 8,
   "opp": "WSH"
  },
  {
   "week": 4,
   "pts": 12,
   "opp": "LAC"
  },
  {
   "week": 5,
   "pts": 9,
   "opp": "SF"
  },
  {
   "week": 6,
   "pts": 3,
   "opp": "DEN"
  }
 ],
 "EXT-DEF-DAL": [
  {
   "week": 1,
   "pts": 3,
   "opp": "NYG"
  },
  {
   "week": 2,
   "pts": 3,
   "opp": "WSH"
  },
  {
   "week": 3,
   "pts": -1,
   "opp": "BAL"
  },
  {
   "week": 4,
   "pts": 1,
   "opp": "HOU"
  },
  {
   "week": 5,
   "pts": 1,
   "opp": "TB"
  },
  {
   "week": 6,
   "pts": 5,
   "opp": "GB"
  }
 ],
 "EXT-DEF-PHI": [
  {
   "week": 1,
   "pts": 3,
   "opp": "WSH"
  },
  {
   "week": 2,
   "pts": 3,
   "opp": "TEN"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "CHI"
  },
  {
   "week": 4,
   "pts": 5,
   "opp": "LAR"
  },
  {
   "week": 5,
   "pts": 5,
   "opp": "JAX"
  },
  {
   "week": 6,
   "pts": 2,
   "opp": "CAR"
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
  }
 ],
 "EXT-DEF-NO": [
  {
   "week": 1,
   "pts": 2,
   "opp": "DET"
  },
  {
   "week": 2,
   "pts": 8,
   "opp": "BAL"
  },
  {
   "week": 3,
   "pts": 1,
   "opp": "LV"
  },
  {
   "week": 4,
   "pts": -3,
   "opp": "ATL"
  },
  {
   "week": 5,
   "pts": 12,
   "opp": "MIN"
  },
  {
   "week": 6,
   "pts": 13,
   "opp": "NYG"
  }
 ]
};
