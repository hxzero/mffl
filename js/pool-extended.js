/* MFFL Week 12 DERIVED player pool extension — producers only (Option 2).
   Source: ESPN rosters / game summaries, computed 2026-11-24 by
   pool-roll-week12 build-pool-extended-week12.mjs per pool-extension-investigation.md.
   These players are NOT in FanDuel's Week 12 Sunday-main contest pool:
   they are the producers (Weeks 1-11 stat lines) of the 14 teams in the
   7 non-main-slate games (GB@LAR, CHI@DET, PHI@DAL, KC@BUF, DEN@PIT, LV@CLE, CAR@TB), plus the
   14 team defenses. FPPG = ESPN-computed FanDuel points / games appeared.
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
 "week": 12,
 "cap": 60000,
 "source": "espn-derived",
 "games": {
  "GB@LAR": "2026-11-26T01:00Z",
  "CHI@DET": "2026-11-26T18:00Z",
  "PHI@DAL": "2026-11-26T21:30Z",
  "KC@BUF": "2026-11-27T01:20Z",
  "DEN@PIT": "2026-11-27T20:00Z",
  "LV@CLE": "2026-11-30T01:20Z",
  "CAR@TB": "2026-12-01T01:15Z"
 },
 "players": [
  {
   "id": "EXT-4429795",
   "name": "Jahmyr Gibbs",
   "pos": "RB",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 9500,
   "fppg": 27.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4567048",
   "name": "Kenneth Walker III",
   "pos": "RB",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 9000,
   "fppg": 24.8,
   "inj": "Q",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4241389",
   "name": "CeeDee Lamb",
   "pos": "WR",
   "team": "DAL",
   "opp": "PHI",
   "game": "PHI@DAL",
   "salary": 8400,
   "fppg": 20.3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4241416",
   "name": "Chuba Hubbard",
   "pos": "RB",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 8000,
   "fppg": 20,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4379399",
   "name": "James Cook III",
   "pos": "RB",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 7900,
   "fppg": 19.5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3918298",
   "name": "Josh Allen",
   "pos": "QB",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 7900,
   "fppg": 25.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2577417",
   "name": "Dak Prescott",
   "pos": "QB",
   "team": "DAL",
   "opp": "PHI",
   "game": "PHI@DAL",
   "salary": 7800,
   "fppg": 23.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4374302",
   "name": "Amon-Ra St. Brown",
   "pos": "WR",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 7700,
   "fppg": 16.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4248528",
   "name": "Christian Watson",
   "pos": "WR",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 7700,
   "fppg": 17,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4036378",
   "name": "Jordan Love",
   "pos": "QB",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 7700,
   "fppg": 21.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3139477",
   "name": "Patrick Mahomes",
   "pos": "QB",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 7700,
   "fppg": 21.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3046779",
   "name": "Jared Goff",
   "pos": "QB",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 7600,
   "fppg": 20.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4596448",
   "name": "Bucky Irving",
   "pos": "RB",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 7500,
   "fppg": 17.5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4431611",
   "name": "Caleb Williams",
   "pos": "QB",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 7500,
   "fppg": 19.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4701936",
   "name": "Matthew Golden",
   "pos": "WR",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 7500,
   "fppg": 15.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4685720",
   "name": "Bryce Young",
   "pos": "QB",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 7400,
   "fppg": 18.4,
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
   "game": "PHI@DAL",
   "salary": 7400,
   "fppg": 16.7,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-12483",
   "name": "Matthew Stafford",
   "pos": "QB",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 7400,
   "fppg": 18.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3122840",
   "name": "Deshaun Watson",
   "pos": "QB",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 7300,
   "fppg": 16.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4426354",
   "name": "George Pickens",
   "pos": "WR",
   "team": "DAL",
   "opp": "PHI",
   "game": "PHI@DAL",
   "salary": 7300,
   "fppg": 15.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-14880",
   "name": "Kirk Cousins",
   "pos": "QB",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 7300,
   "fppg": 16.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4694237",
   "name": "Max Hurleman",
   "pos": "WR",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 7300,
   "fppg": 15.1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-8439",
   "name": "Aaron Rodgers",
   "pos": "QB",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 7200,
   "fppg": 15.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4259545",
   "name": "D'Andre Swift",
   "pos": "RB",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 7200,
   "fppg": 15.6,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4426338",
   "name": "Bo Nix",
   "pos": "QB",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 7100,
   "fppg": 14.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4569987",
   "name": "Jaylen Warren",
   "pos": "RB",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 7100,
   "fppg": 15.1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4702555",
   "name": "Jonah Coleman",
   "pos": "RB",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 7100,
   "fppg": 15.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4837248",
   "name": "Fernando Mendoza",
   "pos": "QB",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 7000,
   "fppg": 13.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4890973",
   "name": "Ashton Jeanty",
   "pos": "RB",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 6900,
   "fppg": 14.1,
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
   "game": "PHI@DAL",
   "salary": 6900,
   "fppg": 13.1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4430737",
   "name": "Kyren Williams",
   "pos": "RB",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 6900,
   "fppg": 14.5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3052587",
   "name": "Baker Mayfield",
   "pos": "QB",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 6800,
   "fppg": 10.6,
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
   "game": "PHI@DAL",
   "salary": 6800,
   "fppg": 10.7,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685472",
   "name": "Tetairoa McMillan",
   "pos": "WR",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 6800,
   "fppg": 12.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-15168",
   "name": "Case Keenum",
   "pos": "QB",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 6700,
   "fppg": 8.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360698",
   "name": "Joe Milton",
   "pos": "QB",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
   "salary": 6700,
   "fppg": 9.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4596472",
   "name": "Jalon Daniels",
   "pos": "QB",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 6600,
   "fppg": 7.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4426388",
   "name": "Jameson Williams",
   "pos": "WR",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 6600,
   "fppg": 11.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4047365",
   "name": "Josh Jacobs",
   "pos": "RB",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 6600,
   "fppg": 12.8,
   "inj": "Q",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4608686",
   "name": "Kyle Monangai",
   "pos": "RB",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 6600,
   "fppg": 12.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4685278",
   "name": "Luther Burden III",
   "pos": "WR",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 6600,
   "fppg": 11.7,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4432762",
   "name": "Shedeur Sanders",
   "pos": "QB",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 6600,
   "fppg": 7.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4432665",
   "name": "Brock Bowers",
   "pos": "TE",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 6400,
   "fppg": 16.7,
   "inj": "Q",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3915416",
   "name": "DJ Moore",
   "pos": "WR",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 6400,
   "fppg": 11.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4832955",
   "name": "Emmett Johnson",
   "pos": "RB",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 6400,
   "fppg": 11.7,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4434153",
   "name": "Tyson Bagent",
   "pos": "QB",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 6400,
   "fppg": 5.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429096",
   "name": "Blake Corum",
   "pos": "RB",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 6300,
   "fppg": 11.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685702",
   "name": "Quinshon Judkins",
   "pos": "RB",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 6200,
   "fppg": 10.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4240703",
   "name": "Kenny Pickett",
   "pos": "QB",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 6100,
   "fppg": 1.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4428718",
   "name": "Tre Tucker",
   "pos": "WR",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 6100,
   "fppg": 9.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-14012",
   "name": "Andy Dalton",
   "pos": "QB",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
   "salary": 6000,
   "fppg": -1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4040715",
   "name": "Jalen Hurts",
   "pos": "QB",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
   "salary": 6000,
   "fppg": 16.6,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3044720",
   "name": "Joshua Dobbs",
   "pos": "QB",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 6000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4362887",
   "name": "Justin Fields",
   "pos": "QB",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 6000,
   "fppg": -0.6,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-3115293",
   "name": "Kyle Allen",
   "pos": "QB",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 6000,
   "fppg": -0.2,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-3116407",
   "name": "Mason Rudolph",
   "pos": "QB",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 6000,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4428331",
   "name": "Rashee Rice",
   "pos": "WR",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 6000,
   "fppg": 9.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4259553",
   "name": "Stetson Bennett IV",
   "pos": "QB",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 6000,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-14163",
   "name": "Tyrod Taylor",
   "pos": "QB",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 6000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4832800",
   "name": "Denzel Boston",
   "pos": "WR",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 5900,
   "fppg": 8.9,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4695883",
   "name": "Jalen Coker",
   "pos": "WR",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 5900,
   "fppg": 8.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360238",
   "name": "Dameon Pierce",
   "pos": "RB",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
   "salary": 5800,
   "fppg": 8.8,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4047650",
   "name": "DK Metcalf",
   "pos": "WR",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 5800,
   "fppg": 8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4567750",
   "name": "Emeka Egbuka",
   "pos": "WR",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 5800,
   "fppg": 8.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4870653",
   "name": "KC Concepcion",
   "pos": "WR",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 5800,
   "fppg": 8.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4373678",
   "name": "Khalil Shakir",
   "pos": "WR",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 5800,
   "fppg": 8.3,
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
   "game": "PHI@DAL",
   "salary": 5800,
   "fppg": 8.6,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4372016",
   "name": "Jaylen Waddle",
   "pos": "WR",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 5700,
   "fppg": 7.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4600981",
   "name": "Pat Bryant",
   "pos": "WR",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 5700,
   "fppg": 7.6,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4431299",
   "name": "Rome Odunze",
   "pos": "WR",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 5700,
   "fppg": 7.9,
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
   "game": "PHI@DAL",
   "salary": 5700,
   "fppg": 7.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4431492",
   "name": "Roman Wilson",
   "pos": "WR",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 5600,
   "fppg": 7.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-15847",
   "name": "Travis Kelce",
   "pos": "TE",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 5600,
   "fppg": 11.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4635008",
   "name": "Keon Coleman",
   "pos": "WR",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 5500,
   "fppg": 6.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5083076",
   "name": "Harold Fannin Jr.",
   "pos": "TE",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 5400,
   "fppg": 9.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4371733",
   "name": "Kenny Gainwell",
   "pos": "RB",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 5400,
   "fppg": 6.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4038815",
   "name": "Rico Dowdle",
   "pos": "RB",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 5400,
   "fppg": 6.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4385690",
   "name": "Dalton Kincaid",
   "pos": "TE",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 5300,
   "fppg": 8.9,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4715355",
   "name": "Darius Cooper",
   "pos": "WR",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
   "salary": 5300,
   "fppg": 5.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5081397",
   "name": "Dylan Sampson",
   "pos": "RB",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 5300,
   "fppg": 6.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685261",
   "name": "Germie Bernard",
   "pos": "WR",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 5300,
   "fppg": 5.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2973405",
   "name": "Kalif Raymond",
   "pos": "WR",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 5300,
   "fppg": 5.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4431487",
   "name": "Savion Williams",
   "pos": "WR",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 5300,
   "fppg": 6.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4683062",
   "name": "Xavier Worthy",
   "pos": "WR",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 5300,
   "fppg": 6.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4241985",
   "name": "J.K. Dobbins",
   "pos": "RB",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 5200,
   "fppg": 5.8,
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
   "game": "PHI@DAL",
   "salary": 5200,
   "fppg": 5.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429023",
   "name": "MarShawn Lloyd",
   "pos": "RB",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 5200,
   "fppg": 5.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4361411",
   "name": "Pat Freiermuth",
   "pos": "TE",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 5200,
   "fppg": 8.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430027",
   "name": "Sam LaPorta",
   "pos": "TE",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 5200,
   "fppg": 8.5,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4723086",
   "name": "Colston Loveland",
   "pos": "TE",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 5100,
   "fppg": 7.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3128429",
   "name": "Courtland Sutton",
   "pos": "WR",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 5100,
   "fppg": 5.1,
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
   "game": "PHI@DAL",
   "salary": 5100,
   "fppg": 7.9,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2576925",
   "name": "Darren Waller",
   "pos": "TE",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 5100,
   "fppg": 7.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4603186",
   "name": "Jack Bech",
   "pos": "WR",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 5100,
   "fppg": 5.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5220680",
   "name": "Ted Hurst III",
   "pos": "WR",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 5100,
   "fppg": 4.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4572680",
   "name": "Tucker Kraft",
   "pos": "TE",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 5100,
   "fppg": 7.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3915411",
   "name": "Ty Johnson",
   "pos": "RB",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 5100,
   "fppg": 5.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3116165",
   "name": "Chris Godwin Jr.",
   "pos": "WR",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 5000,
   "fppg": 4.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4241555",
   "name": "Elijah Mitchell",
   "pos": "RB",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
   "salary": 5000,
   "fppg": 4.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4372519",
   "name": "Jashaun Corbin",
   "pos": "RB",
   "team": "DAL",
   "opp": "PHI",
   "game": "PHI@DAL",
   "salary": 4900,
   "fppg": 4.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4608810",
   "name": "Tez Johnson",
   "pos": "WR",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 4900,
   "fppg": 4.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4241983",
   "name": "Cody White",
   "pos": "WR",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 4800,
   "fppg": 3.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430802",
   "name": "Darnell Washington",
   "pos": "TE",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 4800,
   "fppg": 5.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5123663",
   "name": "Isaac TeSlaa",
   "pos": "WR",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 4800,
   "fppg": 3.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4241463",
   "name": "Jerry Jeudy",
   "pos": "WR",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 4800,
   "fppg": 3.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4567096",
   "name": "John Metchie III",
   "pos": "WR",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 4800,
   "fppg": 3.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4710855",
   "name": "Konata Mumpfield",
   "pos": "WR",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 4800,
   "fppg": 3.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429086",
   "name": "Michael Mayer",
   "pos": "TE",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 4800,
   "fppg": 6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4686658",
   "name": "Mike Washington Jr.",
   "pos": "RB",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 4800,
   "fppg": 4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4372780",
   "name": "Tommy Tremble",
   "pos": "TE",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 4800,
   "fppg": 5.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2573401",
   "name": "Tyler Higbee",
   "pos": "TE",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 4800,
   "fppg": 5.4,
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
   "game": "PHI@DAL",
   "salary": 4700,
   "fppg": 5,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4819231",
   "name": "Kaleb Johnson",
   "pos": "RB",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 4700,
   "fppg": 3.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4249836",
   "name": "Pierre Strong Jr.",
   "pos": "RB",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 4700,
   "fppg": 3.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4569682",
   "name": "Audric Estime",
   "pos": "RB",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 4600,
   "fppg": 2.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4912218",
   "name": "Cyrus Allen",
   "pos": "WR",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 4600,
   "fppg": 2.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3051876",
   "name": "Evan Engram",
   "pos": "TE",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 4600,
   "fppg": 4.2,
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
   "game": "PHI@DAL",
   "salary": 4600,
   "fppg": 2.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4382466",
   "name": "Jalen Nailor",
   "pos": "WR",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 4600,
   "fppg": 2.8,
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
   "game": "PHI@DAL",
   "salary": 4600,
   "fppg": 2.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4686472",
   "name": "Marvin Mims Jr.",
   "pos": "WR",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 4600,
   "fppg": 2.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4243003",
   "name": "Ronnie Rivers",
   "pos": "RB",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 4600,
   "fppg": 2.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4426386",
   "name": "Roschon Johnson",
   "pos": "RB",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 4600,
   "fppg": 2.7,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4243315",
   "name": "Salvon Ahmed",
   "pos": "RB",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 4600,
   "fppg": 2.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4912274",
   "name": "Sione Vaki",
   "pos": "RB",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 4600,
   "fppg": 3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4431545",
   "name": "Will Shipley",
   "pos": "RB",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
   "salary": 4600,
   "fppg": 3,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4386544",
   "name": "Xavier Smith",
   "pos": "WR",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 4600,
   "fppg": 2.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5093923",
   "name": "Andrew Armstrong",
   "pos": "WR",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 4500,
   "fppg": 2.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4243331",
   "name": "Cade Otton",
   "pos": "TE",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 4500,
   "fppg": 3.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3149687",
   "name": "Chris Brooks",
   "pos": "RB",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 4500,
   "fppg": 2.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4242557",
   "name": "Colby Parkinson",
   "pos": "TE",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 4500,
   "fppg": 3.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4426553",
   "name": "Davis Allen",
   "pos": "TE",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 4500,
   "fppg": 3.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4722893",
   "name": "Jaleel McLaughlin",
   "pos": "RB",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 4500,
   "fppg": 2.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4688813",
   "name": "Josh Downs",
   "pos": "WR",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 4500,
   "fppg": 2.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4683243",
   "name": "Mitchell Evans",
   "pos": "TE",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 4500,
   "fppg": 3.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4240472",
   "name": "Noah Gray",
   "pos": "TE",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 4500,
   "fppg": 3.7,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430871",
   "name": "Sean Tucker",
   "pos": "RB",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 4500,
   "fppg": 2.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360797",
   "name": "Tutu Atwell",
   "pos": "WR",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 4500,
   "fppg": 2.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4869748",
   "name": "Zavion Thomas",
   "pos": "WR",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 4500,
   "fppg": 2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4035656",
   "name": "Ben Skowronek",
   "pos": "WR",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 4400,
   "fppg": 1.6,
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
   "game": "PHI@DAL",
   "salary": 4400,
   "fppg": 2.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360763",
   "name": "Brycen Tremayne",
   "pos": "WR",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 4400,
   "fppg": 1.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3930086",
   "name": "Dawson Knox",
   "pos": "TE",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 4400,
   "fppg": 2.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4635009",
   "name": "J. Michael Sturdivant",
   "pos": "WR",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 4400,
   "fppg": 1.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5082630",
   "name": "Jalen Royals",
   "pos": "WR",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 4400,
   "fppg": 1.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4383440",
   "name": "Nate Adkins",
   "pos": "TE",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 4400,
   "fppg": 2.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-TB",
   "name": "Tampa Bay Buccaneers",
   "pos": "D",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 4400,
   "fppg": 9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4685350",
   "name": "Trevor Etienne",
   "pos": "RB",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 4400,
   "fppg": 1.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430034",
   "name": "Xavier Legette",
   "pos": "WR",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 4400,
   "fppg": 1.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4239934",
   "name": "AJ Dillon",
   "pos": "RB",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 4300,
   "fppg": 1.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4240577",
   "name": "Brandon Smith",
   "pos": "WR",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 4300,
   "fppg": 1.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-CHI",
   "name": "Chicago Bears",
   "pos": "D",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 4300,
   "fppg": 8.6,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4374187",
   "name": "Deven Thompkins",
   "pos": "WR",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 4300,
   "fppg": 1.3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4045305",
   "name": "Ian Thomas",
   "pos": "TE",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 4300,
   "fppg": 2.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4808839",
   "name": "Isaiah Bond",
   "pos": "WR",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 4300,
   "fppg": 1.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429202",
   "name": "Israel Abanikanda",
   "pos": "RB",
   "team": "DAL",
   "opp": "PHI",
   "game": "PHI@DAL",
   "salary": 4300,
   "fppg": 1.5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4429501",
   "name": "Ray Davis",
   "pos": "RB",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 4300,
   "fppg": 1.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430191",
   "name": "Skyy Moore",
   "pos": "WR",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 4300,
   "fppg": 1.2,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4431280",
   "name": "Troy Franklin",
   "pos": "WR",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 4300,
   "fppg": 1.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3911853",
   "name": "Adam Trautman",
   "pos": "TE",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 4200,
   "fppg": 1.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4709392",
   "name": "Anthony Tyus III",
   "pos": "RB",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 4200,
   "fppg": 1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4362018",
   "name": "Blake Whiteheart",
   "pos": "TE",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 4200,
   "fppg": 1.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4259305",
   "name": "Bo Melton",
   "pos": "WR",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 4200,
   "fppg": 0.6,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4242392",
   "name": "Brock Wright",
   "pos": "TE",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 4200,
   "fppg": 1.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4605951",
   "name": "CJ Daniels",
   "pos": "WR",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 4200,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-DEN",
   "name": "Denver Broncos",
   "pos": "D",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 4200,
   "fppg": 7.7,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4366963",
   "name": "Dylan Laube",
   "pos": "RB",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 4200,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4431574",
   "name": "Eli Stowers",
   "pos": "TE",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
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
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 4200,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4361988",
   "name": "James Mitchell",
   "pos": "TE",
   "team": "DAL",
   "opp": "PHI",
   "game": "PHI@DAL",
   "salary": 4200,
   "fppg": 1.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685489",
   "name": "Jaydn Ott",
   "pos": "RB",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 4200,
   "fppg": 0.8,
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
   "game": "PHI@DAL",
   "salary": 4200,
   "fppg": 0.8,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3054212",
   "name": "Jonnu Smith",
   "pos": "TE",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 4200,
   "fppg": 1.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3118892",
   "name": "Justin Watson",
   "pos": "WR",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 4200,
   "fppg": 0.6,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4688552",
   "name": "Keleki Latu",
   "pos": "TE",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 4200,
   "fppg": 1.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4428119",
   "name": "Lew Nichols",
   "pos": "RB",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 4200,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4039057",
   "name": "Lil'Jordan Humphrey",
   "pos": "WR",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 4200,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-PIT",
   "name": "Pittsburgh Steelers",
   "pos": "D",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 4200,
   "fppg": 7.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4685504",
   "name": "Sam Roush",
   "pos": "TE",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 4200,
   "fppg": 1.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4241424",
   "name": "Tylan Wallace",
   "pos": "WR",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 4200,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3929914",
   "name": "Adam Prentice",
   "pos": "RB",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 4100,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4035198",
   "name": "Brandon Johnson",
   "pos": "WR",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 4100,
   "fppg": 0.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-BUF",
   "name": "Buffalo Bills",
   "pos": "D",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 4100,
   "fppg": 7,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4714365",
   "name": "Carson Steele",
   "pos": "RB",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
   "salary": 4100,
   "fppg": 0.5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4241961",
   "name": "Connor Heyward",
   "pos": "RB",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 4100,
   "fppg": 0.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4401805",
   "name": "Dareke Young",
   "pos": "WR",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4212909",
   "name": "David Moore",
   "pos": "WR",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2580216",
   "name": "DeAndre Carter",
   "pos": "WR",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4372414",
   "name": "Elijah Moore",
   "pos": "WR",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
   "salary": 4100,
   "fppg": 0.5,
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
   "game": "PHI@DAL",
   "salary": 4100,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429805",
   "name": "Frank Gore Jr.",
   "pos": "RB",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-GB",
   "name": "Green Bay Packers",
   "pos": "D",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 4100,
   "fppg": 7.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4383396",
   "name": "Hunter Luepke",
   "pos": "RB",
   "team": "DAL",
   "opp": "PHI",
   "game": "PHI@DAL",
   "salary": 4100,
   "fppg": 0.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4602788",
   "name": "Jackson Meeks",
   "pos": "WR",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 4100,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4431196",
   "name": "Jake Briningstool",
   "pos": "TE",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 4100,
   "fppg": 0.6,
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
   "game": "PHI@DAL",
   "salary": 4100,
   "fppg": 0.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-KC",
   "name": "Kansas City Chiefs",
   "pos": "D",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 4100,
   "fppg": 7.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4372096",
   "name": "Luke Schoonmaker",
   "pos": "TE",
   "team": "DAL",
   "opp": "PHI",
   "game": "PHI@DAL",
   "salary": 4100,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4613104",
   "name": "Malachi Corley",
   "pos": "WR",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 4100,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5150247",
   "name": "Malik Benson",
   "pos": "WR",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4605841",
   "name": "Nate Carter",
   "pos": "RB",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 4100,
   "fppg": 0.5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4245144",
   "name": "Tay Martin",
   "pos": "WR",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
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
   "opp": "DEN",
   "game": "DEN@PIT",
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
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 4100,
   "fppg": 0.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-15835",
   "name": "Zach Ertz",
   "pos": "TE",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
   "salary": 4100,
   "fppg": 0.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4890373",
   "name": "Bauer Sharp",
   "pos": "TE",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 4000,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4596602",
   "name": "Brashard Smith",
   "pos": "RB",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 4000,
   "fppg": 0.2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4808759",
   "name": "Camden Brown",
   "pos": "WR",
   "team": "DAL",
   "opp": "PHI",
   "game": "PHI@DAL",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-DEF-CLE",
   "name": "Cleveland Browns",
   "pos": "D",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 4000,
   "fppg": 5.9,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4391845",
   "name": "Cody Schrader",
   "pos": "RB",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
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
   "opp": "DET",
   "game": "CHI@DET",
   "salary": 4000,
   "fppg": 2.8,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4578436",
   "name": "Coleman Owen",
   "pos": "WR",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 4000,
   "fppg": -0.5,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-16800",
   "name": "Davante Adams",
   "pos": "WR",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 4000,
   "fppg": 15.5,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3871102",
   "name": "David Sills V",
   "pos": "WR",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-DEF-DET",
   "name": "Detroit Lions",
   "pos": "D",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 4000,
   "fppg": 6,
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
   "game": "PHI@DAL",
   "salary": 4000,
   "fppg": 7.3,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4241374",
   "name": "Grant Calcaterra",
   "pos": "TE",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4037235",
   "name": "Greg Dortch",
   "pos": "WR",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4876995",
   "name": "Ja'seem Reed",
   "pos": "WR",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4573699",
   "name": "Jackson Hawes",
   "pos": "TE",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 4000,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4383429",
   "name": "Jacob Saylors",
   "pos": "RB",
   "team": "DET",
   "opp": "CHI",
   "game": "CHI@DET",
   "salary": 4000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4430834",
   "name": "Jalen McMillan",
   "pos": "WR",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 4000,
   "fppg": 0,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4362249",
   "name": "Jayden Reed",
   "pos": "WR",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 4000,
   "fppg": 2.2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4685279",
   "name": "Jaydon Blue",
   "pos": "RB",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
   "salary": 4000,
   "fppg": -0.2,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4708486",
   "name": "Jimmy Horn Jr.",
   "pos": "WR",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 4000,
   "fppg": -2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4678008",
   "name": "Jonathon Brooks",
   "pos": "RB",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 4000,
   "fppg": 4.2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4685409",
   "name": "Jordan Hudson",
   "pos": "WR",
   "team": "DAL",
   "opp": "PHI",
   "game": "PHI@DAL",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4569382",
   "name": "Jordan Whittington",
   "pos": "WR",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 4000,
   "fppg": 0.3,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4242433",
   "name": "Joshua Palmer",
   "pos": "WR",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 4000,
   "fppg": 4.3,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-5065495",
   "name": "Kaden Davis",
   "pos": "WR",
   "team": "CHI",
   "opp": "DET",
   "game": "CHI@DET",
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
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 4000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4034779",
   "name": "Ko Kieft",
   "pos": "TE",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-DEF-LAR",
   "name": "Los Angeles Rams",
   "pos": "D",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 4000,
   "fppg": 6.5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4431346",
   "name": "Mark Redman",
   "pos": "TE",
   "team": "GB",
   "opp": "LAR",
   "game": "GB@LAR",
   "salary": 4000,
   "fppg": 0.3,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-2515270",
   "name": "Michael Burton",
   "pos": "RB",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 4000,
   "fppg": 0,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4035687",
   "name": "Michael Pittman Jr.",
   "pos": "WR",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
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
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 4000,
   "fppg": -0.2,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4372505",
   "name": "Payne Durham",
   "pos": "TE",
   "team": "TB",
   "opp": "CAR",
   "game": "CAR@TB",
   "salary": 4000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4426515",
   "name": "Puka Nacua",
   "pos": "WR",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 4000,
   "fppg": 21.1,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4601080",
   "name": "Raheim Sanders",
   "pos": "RB",
   "team": "CLE",
   "opp": "LV",
   "game": "LV@CLE",
   "salary": 4000,
   "fppg": 3.4,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4693370",
   "name": "Riley Nowakowski",
   "pos": "RB",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4568490",
   "name": "RJ Harvey",
   "pos": "RB",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 4000,
   "fppg": 9.2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-2975674",
   "name": "Robert Tonyan",
   "pos": "TE",
   "team": "PIT",
   "opp": "DEN",
   "game": "DEN@PIT",
   "salary": 4000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4683153",
   "name": "Skyler Bell",
   "pos": "WR",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4429013",
   "name": "Tank Bigsby",
   "pos": "RB",
   "team": "PHI",
   "opp": "DAL",
   "game": "PHI@DAL",
   "salary": 4000,
   "fppg": 3.9,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4570037",
   "name": "Terrance Ferguson",
   "pos": "TE",
   "team": "LAR",
   "opp": "GB",
   "game": "GB@LAR",
   "salary": 4000,
   "fppg": 5.3,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4362748",
   "name": "Tyler Badie",
   "pos": "RB",
   "team": "DEN",
   "opp": "PIT",
   "game": "DEN@PIT",
   "salary": 4000,
   "fppg": 2.8,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4429676",
   "name": "Tyler Goodson",
   "pos": "RB",
   "team": "DAL",
   "opp": "PHI",
   "game": "PHI@DAL",
   "salary": 4000,
   "fppg": 2.9,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4362921",
   "name": "Tyquan Thornton",
   "pos": "WR",
   "team": "KC",
   "opp": "BUF",
   "game": "KC@BUF",
   "salary": 4000,
   "fppg": 10.6,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4241476",
   "name": "Tyrell Shavers",
   "pos": "WR",
   "team": "BUF",
   "opp": "KC",
   "game": "KC@BUF",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-CAR",
   "name": "Carolina Panthers",
   "pos": "D",
   "team": "CAR",
   "opp": "TB",
   "game": "CAR@TB",
   "salary": 3900,
   "fppg": 5.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-LV",
   "name": "Las Vegas Raiders",
   "pos": "D",
   "team": "LV",
   "opp": "CLE",
   "game": "LV@CLE",
   "salary": 3900,
   "fppg": 5.4,
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
   "game": "PHI@DAL",
   "salary": 3700,
   "fppg": 3.9,
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
   "game": "PHI@DAL",
   "salary": 3600,
   "fppg": 3.3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  }
 ]
};
window.MFFL_HISTORY_EXTENDED = {
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
  },
  {
   "week": 10,
   "pts": 43.7,
   "opp": "NE"
  },
  {
   "week": 11,
   "pts": 25.8,
   "opp": "TB"
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
  },
  {
   "week": 10,
   "pts": 23.8,
   "opp": "NE"
  },
  {
   "week": 11,
   "pts": 12.2,
   "opp": "TB"
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
  },
  {
   "week": 10,
   "pts": 5,
   "opp": "NE"
  },
  {
   "week": 11,
   "pts": 1.1,
   "opp": "TB"
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
  },
  {
   "week": 10,
   "pts": 25.42,
   "opp": "NE"
  },
  {
   "week": 11,
   "pts": 20.36,
   "opp": "TB"
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
  },
  {
   "week": 10,
   "pts": 8.9,
   "opp": "NE"
  },
  {
   "week": 11,
   "pts": 0,
   "opp": "TB"
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
  },
  {
   "week": 10,
   "pts": 2.1,
   "opp": "NE"
  },
  {
   "week": 11,
   "pts": 5.2,
   "opp": "TB"
  }
 ],
 "EXT-12483": [
  {
   "week": 1,
   "pts": 5.1,
   "opp": "SF"
  },
  {
   "week": 2,
   "pts": 30.98,
   "opp": "NYG"
  },
  {
   "week": 3,
   "pts": 25.9,
   "opp": "DEN"
  },
  {
   "week": 4,
   "pts": 14.68,
   "opp": "PHI"
  },
  {
   "week": 5,
   "pts": 30.32,
   "opp": "BUF"
  },
  {
   "week": 6,
   "pts": 16.88,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 18.5,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 9.28,
   "opp": "LAC"
  },
  {
   "week": 9,
   "pts": 12.22,
   "opp": "WSH"
  },
  {
   "week": 10,
   "pts": 20.76,
   "opp": "ARI"
  }
 ],
 "EXT-4259553": [
  {
   "week": 1,
   "pts": 1.42,
   "opp": "SF"
  }
 ],
 "EXT-4429096": [
  {
   "week": 1,
   "pts": 5.4,
   "opp": "SF"
  },
  {
   "week": 2,
   "pts": 9.7,
   "opp": "NYG"
  },
  {
   "week": 3,
   "pts": 2.5,
   "opp": "DEN"
  },
  {
   "week": 4,
   "pts": 2.6,
   "opp": "PHI"
  },
  {
   "week": 5,
   "pts": 14.7,
   "opp": "BUF"
  },
  {
   "week": 6,
   "pts": 13,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 16.6,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 13.3,
   "opp": "LAC"
  },
  {
   "week": 9,
   "pts": 11.8,
   "opp": "WSH"
  },
  {
   "week": 10,
   "pts": 22.4,
   "opp": "ARI"
  }
 ],
 "EXT-4243003": [
  {
   "week": 1,
   "pts": 2.9,
   "opp": "SF"
  },
  {
   "week": 10,
   "pts": 8.1,
   "opp": "ARI"
  }
 ],
 "EXT-4430737": [
  {
   "week": 1,
   "pts": 14,
   "opp": "SF"
  },
  {
   "week": 2,
   "pts": 14.7,
   "opp": "NYG"
  },
  {
   "week": 3,
   "pts": 18.8,
   "opp": "DEN"
  },
  {
   "week": 4,
   "pts": 31.7,
   "opp": "PHI"
  },
  {
   "week": 5,
   "pts": 16.6,
   "opp": "BUF"
  },
  {
   "week": 6,
   "pts": 8.2,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 17.1,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 12.4,
   "opp": "LAC"
  },
  {
   "week": 9,
   "pts": 7.6,
   "opp": "WSH"
  },
  {
   "week": 10,
   "pts": 4.2,
   "opp": "ARI"
  }
 ],
 "EXT-4426515": [
  {
   "week": 1,
   "pts": 9.9,
   "opp": "SF"
  },
  {
   "week": 4,
   "pts": 26.2,
   "opp": "PHI"
  },
  {
   "week": 5,
   "pts": 32.2,
   "opp": "BUF"
  },
  {
   "week": 6,
   "pts": 11,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 17.8,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 19.5,
   "opp": "LAC"
  },
  {
   "week": 9,
   "pts": 31,
   "opp": "WSH"
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
  },
  {
   "week": 10,
   "pts": 2.1,
   "opp": "NE"
  },
  {
   "week": 11,
   "pts": 7.7,
   "opp": "TB"
  }
 ],
 "EXT-16800": [
  {
   "week": 1,
   "pts": 4.1,
   "opp": "SF"
  },
  {
   "week": 2,
   "pts": 38.5,
   "opp": "NYG"
  },
  {
   "week": 3,
   "pts": 20.2,
   "opp": "DEN"
  },
  {
   "week": 4,
   "pts": 5.2,
   "opp": "PHI"
  },
  {
   "week": 5,
   "pts": 19.6,
   "opp": "BUF"
  },
  {
   "week": 6,
   "pts": 5.4,
   "opp": "ARI"
  }
 ],
 "EXT-4426553": [
  {
   "week": 1,
   "pts": 1.8,
   "opp": "SF"
  },
  {
   "week": 2,
   "pts": 1.2,
   "opp": "NYG"
  },
  {
   "week": 3,
   "pts": 2.9,
   "opp": "DEN"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "PHI"
  },
  {
   "week": 5,
   "pts": 3.4,
   "opp": "BUF"
  },
  {
   "week": 6,
   "pts": 0,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 16,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 1.8,
   "opp": "LAC"
  },
  {
   "week": 10,
   "pts": 8.4,
   "opp": "ARI"
  }
 ],
 "EXT-2573401": [
  {
   "week": 1,
   "pts": 0.2,
   "opp": "SF"
  },
  {
   "week": 3,
   "pts": 16.2,
   "opp": "DEN"
  },
  {
   "week": 4,
   "pts": 9.2,
   "opp": "PHI"
  },
  {
   "week": 5,
   "pts": 10.8,
   "opp": "BUF"
  },
  {
   "week": 6,
   "pts": 2.2,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 2.4,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 1.9,
   "opp": "LAC"
  },
  {
   "week": 9,
   "pts": 1.8,
   "opp": "WSH"
  },
  {
   "week": 10,
   "pts": 9.2,
   "opp": "ARI"
  }
 ],
 "EXT-4242557": [
  {
   "week": 1,
   "pts": 1.1,
   "opp": "SF"
  },
  {
   "week": 2,
   "pts": 2.5,
   "opp": "NYG"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "DEN"
  },
  {
   "week": 5,
   "pts": 0.8,
   "opp": "BUF"
  },
  {
   "week": 6,
   "pts": 11.6,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 7.3,
   "opp": "LV"
  },
  {
   "week": 9,
   "pts": 3.3,
   "opp": "WSH"
  },
  {
   "week": 10,
   "pts": 2.1,
   "opp": "ARI"
  }
 ],
 "EXT-4569382": [
  {
   "week": 1,
   "pts": 1.3,
   "opp": "SF"
  },
  {
   "week": 4,
   "pts": 0.9,
   "opp": "PHI"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "LAC"
  }
 ],
 "EXT-4570037": [
  {
   "week": 1,
   "pts": 0,
   "opp": "SF"
  },
  {
   "week": 2,
   "pts": 14.4,
   "opp": "NYG"
  },
  {
   "week": 3,
   "pts": 1.4,
   "opp": "DEN"
  }
 ],
 "EXT-4710855": [
  {
   "week": 1,
   "pts": 0,
   "opp": "SF"
  },
  {
   "week": 2,
   "pts": 1.7,
   "opp": "NYG"
  },
  {
   "week": 3,
   "pts": 17.3,
   "opp": "DEN"
  },
  {
   "week": 4,
   "pts": 1.2,
   "opp": "PHI"
  },
  {
   "week": 6,
   "pts": 2.5,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 2,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "LAC"
  },
  {
   "week": 9,
   "pts": 3,
   "opp": "WSH"
  },
  {
   "week": 10,
   "pts": 9.6,
   "opp": "ARI"
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
  },
  {
   "week": 10,
   "pts": 7,
   "opp": "NE"
  },
  {
   "week": 11,
   "pts": 17.3,
   "opp": "TB"
  }
 ],
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
  },
  {
   "week": 9,
   "pts": 9.72,
   "opp": "CHI"
  },
  {
   "week": 11,
   "pts": 19.08,
   "opp": "DET"
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
  },
  {
   "week": 9,
   "pts": 26.5,
   "opp": "CHI"
  },
  {
   "week": 11,
   "pts": 17.5,
   "opp": "DET"
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
  },
  {
   "week": 9,
   "pts": 3.8,
   "opp": "CHI"
  },
  {
   "week": 11,
   "pts": 2.8,
   "opp": "DET"
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
  },
  {
   "week": 9,
   "pts": 9.1,
   "opp": "CHI"
  },
  {
   "week": 11,
   "pts": 7.9,
   "opp": "DET"
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
  },
  {
   "week": 9,
   "pts": 8.6,
   "opp": "CHI"
  },
  {
   "week": 11,
   "pts": 2.7,
   "opp": "DET"
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
  },
  {
   "week": 9,
   "pts": 4.5,
   "opp": "CHI"
  },
  {
   "week": 11,
   "pts": 1.3,
   "opp": "DET"
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
  },
  {
   "week": 9,
   "pts": 5.4,
   "opp": "CHI"
  },
  {
   "week": 11,
   "pts": 2.8,
   "opp": "DET"
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
  },
  {
   "week": 9,
   "pts": 0,
   "opp": "CHI"
  },
  {
   "week": 11,
   "pts": 20.1,
   "opp": "DET"
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
  },
  {
   "week": 10,
   "pts": 15.62,
   "opp": "CIN"
  },
  {
   "week": 11,
   "pts": 15.98,
   "opp": "PHI"
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
  },
  {
   "week": 10,
   "pts": 4.4,
   "opp": "CIN"
  },
  {
   "week": 11,
   "pts": 5.4,
   "opp": "PHI"
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
  },
  {
   "week": 10,
   "pts": 6.6,
   "opp": "CIN"
  },
  {
   "week": 11,
   "pts": 3.9,
   "opp": "PHI"
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
  },
  {
   "week": 10,
   "pts": 10.5,
   "opp": "CIN"
  },
  {
   "week": 11,
   "pts": 6.5,
   "opp": "PHI"
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
  },
  {
   "week": 10,
   "pts": 14.4,
   "opp": "CIN"
  },
  {
   "week": 11,
   "pts": 0.7,
   "opp": "PHI"
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
  },
  {
   "week": 11,
   "pts": 5.8,
   "opp": "PHI"
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
  },
  {
   "week": 10,
   "pts": 1,
   "opp": "CIN"
  },
  {
   "week": 11,
   "pts": 3.7,
   "opp": "PHI"
  }
 ],
 "EXT-4685702": [
  {
   "week": 1,
   "pts": 6,
   "opp": "JAX"
  },
  {
   "week": 2,
   "pts": 7.3,
   "opp": "TB"
  },
  {
   "week": 3,
   "pts": 8.9,
   "opp": "CAR"
  },
  {
   "week": 4,
   "pts": 18.6,
   "opp": "PIT"
  },
  {
   "week": 5,
   "pts": 6.5,
   "opp": "NYJ"
  },
  {
   "week": 7,
   "pts": 22.9,
   "opp": "TEN"
  },
  {
   "week": 8,
   "pts": 5.9,
   "opp": "PIT"
  },
  {
   "week": 9,
   "pts": 5,
   "opp": "NO"
  },
  {
   "week": 10,
   "pts": 14.6,
   "opp": "HOU"
  }
 ],
 "EXT-3122840": [
  {
   "week": 1,
   "pts": 15,
   "opp": "JAX"
  },
  {
   "week": 2,
   "pts": 19.72,
   "opp": "TB"
  },
  {
   "week": 3,
   "pts": 20.26,
   "opp": "CAR"
  },
  {
   "week": 4,
   "pts": 13.92,
   "opp": "PIT"
  },
  {
   "week": 5,
   "pts": 12.2,
   "opp": "NYJ"
  },
  {
   "week": 6,
   "pts": 9.46,
   "opp": "BAL"
  },
  {
   "week": 7,
   "pts": 22.22,
   "opp": "TEN"
  },
  {
   "week": 8,
   "pts": 14.16,
   "opp": "PIT"
  },
  {
   "week": 10,
   "pts": 25.38,
   "opp": "HOU"
  }
 ],
 "EXT-4601080": [
  {
   "week": 1,
   "pts": 4.1,
   "opp": "JAX"
  },
  {
   "week": 2,
   "pts": 1.6,
   "opp": "TB"
  },
  {
   "week": 3,
   "pts": 7.1,
   "opp": "CAR"
  },
  {
   "week": 4,
   "pts": 2.6,
   "opp": "PIT"
  },
  {
   "week": 5,
   "pts": 1.8,
   "opp": "NYJ"
  }
 ],
 "EXT-4870653": [
  {
   "week": 1,
   "pts": 5.8,
   "opp": "JAX"
  },
  {
   "week": 2,
   "pts": 5.2,
   "opp": "TB"
  },
  {
   "week": 3,
   "pts": 1.9,
   "opp": "CAR"
  },
  {
   "week": 4,
   "pts": 8.9,
   "opp": "PIT"
  },
  {
   "week": 5,
   "pts": 1,
   "opp": "NYJ"
  },
  {
   "week": 6,
   "pts": 5.9,
   "opp": "BAL"
  },
  {
   "week": 7,
   "pts": 22.2,
   "opp": "TEN"
  },
  {
   "week": 8,
   "pts": 5.2,
   "opp": "PIT"
  },
  {
   "week": 9,
   "pts": 16.8,
   "opp": "NO"
  },
  {
   "week": 10,
   "pts": 10.2,
   "opp": "HOU"
  }
 ],
 "EXT-4832800": [
  {
   "week": 1,
   "pts": 12.9,
   "opp": "JAX"
  },
  {
   "week": 2,
   "pts": 18,
   "opp": "TB"
  },
  {
   "week": 3,
   "pts": 7.1,
   "opp": "CAR"
  },
  {
   "week": 4,
   "pts": 10.9,
   "opp": "PIT"
  },
  {
   "week": 5,
   "pts": 12.1,
   "opp": "NYJ"
  },
  {
   "week": 6,
   "pts": 2,
   "opp": "BAL"
  },
  {
   "week": 7,
   "pts": 4.2,
   "opp": "TEN"
  },
  {
   "week": 8,
   "pts": 6.7,
   "opp": "PIT"
  },
  {
   "week": 9,
   "pts": 12.8,
   "opp": "NO"
  },
  {
   "week": 10,
   "pts": 2.1,
   "opp": "HOU"
  }
 ],
 "EXT-4241463": [
  {
   "week": 1,
   "pts": 3.6,
   "opp": "JAX"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "TB"
  },
  {
   "week": 4,
   "pts": 5.1,
   "opp": "PIT"
  },
  {
   "week": 5,
   "pts": 3.4,
   "opp": "NYJ"
  },
  {
   "week": 6,
   "pts": 8.9,
   "opp": "BAL"
  },
  {
   "week": 7,
   "pts": 4.1,
   "opp": "TEN"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "PIT"
  },
  {
   "week": 9,
   "pts": 4.7,
   "opp": "NO"
  },
  {
   "week": 10,
   "pts": 8.4,
   "opp": "HOU"
  }
 ],
 "EXT-4362018": [
  {
   "week": 1,
   "pts": 1.9,
   "opp": "JAX"
  },
  {
   "week": 2,
   "pts": 8.2,
   "opp": "TB"
  },
  {
   "week": 6,
   "pts": 1.3,
   "opp": "BAL"
  },
  {
   "week": 8,
   "pts": 1.4,
   "opp": "PIT"
  },
  {
   "week": 9,
   "pts": 0,
   "opp": "NO"
  },
  {
   "week": 10,
   "pts": 0,
   "opp": "HOU"
  }
 ],
 "EXT-5083076": [
  {
   "week": 1,
   "pts": 3.1,
   "opp": "JAX"
  },
  {
   "week": 2,
   "pts": 7.9,
   "opp": "TB"
  },
  {
   "week": 3,
   "pts": 20.6,
   "opp": "CAR"
  },
  {
   "week": 4,
   "pts": 10.2,
   "opp": "PIT"
  },
  {
   "week": 5,
   "pts": 0.9,
   "opp": "NYJ"
  },
  {
   "week": 6,
   "pts": 1.4,
   "opp": "BAL"
  },
  {
   "week": 7,
   "pts": 10.1,
   "opp": "TEN"
  },
  {
   "week": 8,
   "pts": 21.4,
   "opp": "PIT"
  },
  {
   "week": 9,
   "pts": 11.2,
   "opp": "NO"
  },
  {
   "week": 10,
   "pts": 12.6,
   "opp": "HOU"
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
  },
  {
   "week": 9,
   "pts": 16.76,
   "opp": "TB"
  },
  {
   "week": 11,
   "pts": 15.34,
   "opp": "NO"
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
  },
  {
   "week": 11,
   "pts": 1.8,
   "opp": "NO"
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
  },
  {
   "week": 9,
   "pts": 3.1,
   "opp": "TB"
  },
  {
   "week": 11,
   "pts": 10.9,
   "opp": "NO"
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
  },
  {
   "week": 9,
   "pts": 17.2,
   "opp": "TB"
  },
  {
   "week": 11,
   "pts": 2.3,
   "opp": "NO"
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
  },
  {
   "week": 9,
   "pts": 5.2,
   "opp": "TB"
  },
  {
   "week": 11,
   "pts": 1.9,
   "opp": "NO"
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
  },
  {
   "week": 9,
   "pts": 14,
   "opp": "TB"
  },
  {
   "week": 11,
   "pts": 6.5,
   "opp": "NO"
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
  },
  {
   "week": 9,
   "pts": 7.4,
   "opp": "TB"
  },
  {
   "week": 11,
   "pts": 10.4,
   "opp": "NO"
  }
 ],
 "EXT-4685720": [
  {
   "week": 1,
   "pts": 35.44,
   "opp": "CHI"
  },
  {
   "week": 2,
   "pts": 24.08,
   "opp": "ATL"
  },
  {
   "week": 3,
   "pts": 14.64,
   "opp": "CLE"
  },
  {
   "week": 4,
   "pts": 24.46,
   "opp": "DET"
  },
  {
   "week": 6,
   "pts": 19.84,
   "opp": "PHI"
  },
  {
   "week": 7,
   "pts": 7.42,
   "opp": "TB"
  },
  {
   "week": 8,
   "pts": 11.36,
   "opp": "GB"
  },
  {
   "week": 9,
   "pts": 21.34,
   "opp": "DEN"
  },
  {
   "week": 10,
   "pts": 8.1,
   "opp": "NO"
  },
  {
   "week": 11,
   "pts": 16.96,
   "opp": "BAL"
  }
 ],
 "EXT-4240703": [
  {
   "week": 1,
   "pts": 2.4,
   "opp": "CHI"
  },
  {
   "week": 2,
   "pts": -0.4,
   "opp": "ATL"
  },
  {
   "week": 7,
   "pts": 3.38,
   "opp": "TB"
  }
 ],
 "EXT-4241416": [
  {
   "week": 1,
   "pts": 22.2,
   "opp": "CHI"
  },
  {
   "week": 2,
   "pts": 13.4,
   "opp": "ATL"
  },
  {
   "week": 3,
   "pts": 13,
   "opp": "CLE"
  },
  {
   "week": 4,
   "pts": 28.4,
   "opp": "DET"
  },
  {
   "week": 6,
   "pts": 21.6,
   "opp": "PHI"
  },
  {
   "week": 7,
   "pts": 8,
   "opp": "TB"
  },
  {
   "week": 8,
   "pts": 21.4,
   "opp": "GB"
  },
  {
   "week": 9,
   "pts": 11.6,
   "opp": "DEN"
  },
  {
   "week": 10,
   "pts": 31.7,
   "opp": "NO"
  },
  {
   "week": 11,
   "pts": 29,
   "opp": "BAL"
  }
 ],
 "EXT-4239934": [
  {
   "week": 1,
   "pts": 2.8,
   "opp": "CHI"
  },
  {
   "week": 2,
   "pts": -0.3,
   "opp": "ATL"
  },
  {
   "week": 3,
   "pts": 1.9,
   "opp": "CLE"
  },
  {
   "week": 4,
   "pts": 1.2,
   "opp": "DET"
  }
 ],
 "EXT-4678008": [
  {
   "week": 1,
   "pts": 6.7,
   "opp": "CHI"
  },
  {
   "week": 2,
   "pts": 1.6,
   "opp": "ATL"
  }
 ],
 "EXT-4685472": [
  {
   "week": 1,
   "pts": 8,
   "opp": "CHI"
  },
  {
   "week": 2,
   "pts": 15.6,
   "opp": "ATL"
  },
  {
   "week": 3,
   "pts": 2.7,
   "opp": "CLE"
  },
  {
   "week": 4,
   "pts": 41.2,
   "opp": "DET"
  },
  {
   "week": 6,
   "pts": 11.6,
   "opp": "PHI"
  },
  {
   "week": 7,
   "pts": 6,
   "opp": "TB"
  },
  {
   "week": 8,
   "pts": 8.8,
   "opp": "GB"
  },
  {
   "week": 9,
   "pts": 13.6,
   "opp": "DEN"
  },
  {
   "week": 10,
   "pts": 5,
   "opp": "NO"
  },
  {
   "week": 11,
   "pts": 16.1,
   "opp": "BAL"
  }
 ],
 "EXT-4695883": [
  {
   "week": 1,
   "pts": 32.8,
   "opp": "CHI"
  },
  {
   "week": 2,
   "pts": 10.6,
   "opp": "ATL"
  },
  {
   "week": 3,
   "pts": 2.8,
   "opp": "CLE"
  },
  {
   "week": 6,
   "pts": 12.7,
   "opp": "PHI"
  },
  {
   "week": 7,
   "pts": 1.4,
   "opp": "TB"
  },
  {
   "week": 8,
   "pts": 8.6,
   "opp": "GB"
  },
  {
   "week": 9,
   "pts": 4.6,
   "opp": "DEN"
  },
  {
   "week": 10,
   "pts": 0.3,
   "opp": "NO"
  },
  {
   "week": 11,
   "pts": 6.7,
   "opp": "BAL"
  }
 ],
 "EXT-2576925": [
  {
   "week": 1,
   "pts": 3.8,
   "opp": "CHI"
  },
  {
   "week": 2,
   "pts": 16.8,
   "opp": "ATL"
  },
  {
   "week": 3,
   "pts": 7.6,
   "opp": "CLE"
  },
  {
   "week": 4,
   "pts": 5.1,
   "opp": "DET"
  },
  {
   "week": 6,
   "pts": 0,
   "opp": "PHI"
  },
  {
   "week": 7,
   "pts": 11.5,
   "opp": "TB"
  },
  {
   "week": 8,
   "pts": 1.6,
   "opp": "GB"
  },
  {
   "week": 9,
   "pts": 19,
   "opp": "DEN"
  },
  {
   "week": 10,
   "pts": 3.4,
   "opp": "NO"
  },
  {
   "week": 11,
   "pts": 5.7,
   "opp": "BAL"
  }
 ],
 "EXT-4683243": [
  {
   "week": 1,
   "pts": 1.4,
   "opp": "CHI"
  },
  {
   "week": 2,
   "pts": 1.8,
   "opp": "ATL"
  },
  {
   "week": 3,
   "pts": 5.1,
   "opp": "CLE"
  },
  {
   "week": 4,
   "pts": 1.3,
   "opp": "DET"
  },
  {
   "week": 6,
   "pts": 0.1,
   "opp": "PHI"
  },
  {
   "week": 7,
   "pts": 4.9,
   "opp": "TB"
  },
  {
   "week": 8,
   "pts": 3.2,
   "opp": "GB"
  },
  {
   "week": 9,
   "pts": 3,
   "opp": "DEN"
  },
  {
   "week": 10,
   "pts": 0,
   "opp": "NO"
  },
  {
   "week": 11,
   "pts": 12.9,
   "opp": "BAL"
  }
 ],
 "EXT-4430034": [
  {
   "week": 1,
   "pts": 0,
   "opp": "CHI"
  },
  {
   "week": 2,
   "pts": 7.4,
   "opp": "ATL"
  }
 ],
 "EXT-4372780": [
  {
   "week": 1,
   "pts": 4,
   "opp": "CHI"
  },
  {
   "week": 2,
   "pts": 0.9,
   "opp": "ATL"
  },
  {
   "week": 3,
   "pts": 5.6,
   "opp": "CLE"
  },
  {
   "week": 4,
   "pts": 3.2,
   "opp": "DET"
  },
  {
   "week": 6,
   "pts": 18.6,
   "opp": "PHI"
  },
  {
   "week": 7,
   "pts": 1.3,
   "opp": "TB"
  },
  {
   "week": 8,
   "pts": 2.4,
   "opp": "GB"
  },
  {
   "week": 9,
   "pts": 10.4,
   "opp": "DEN"
  },
  {
   "week": 10,
   "pts": 6.8,
   "opp": "NO"
  },
  {
   "week": 11,
   "pts": 2.3,
   "opp": "BAL"
  }
 ],
 "EXT-4708486": [
  {
   "week": 1,
   "pts": -2,
   "opp": "CHI"
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
  },
  {
   "week": 9,
   "pts": 13.86,
   "opp": "MIN"
  },
  {
   "week": 10,
   "pts": 23.34,
   "opp": "NYJ"
  },
  {
   "week": 11,
   "pts": 17.16,
   "opp": "MIA"
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
  },
  {
   "week": 9,
   "pts": 19.7,
   "opp": "MIN"
  },
  {
   "week": 10,
   "pts": 24.7,
   "opp": "NYJ"
  },
  {
   "week": 11,
   "pts": 16.2,
   "opp": "MIA"
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
  },
  {
   "week": 9,
   "pts": 0.2,
   "opp": "MIN"
  },
  {
   "week": 10,
   "pts": 0.8,
   "opp": "NYJ"
  },
  {
   "week": 11,
   "pts": 1.4,
   "opp": "MIA"
  }
 ],
 "EXT-4429805": [
  {
   "week": 1,
   "pts": 0.3,
   "opp": "HOU"
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
  },
  {
   "week": 9,
   "pts": 4.3,
   "opp": "MIN"
  },
  {
   "week": 10,
   "pts": 6.8,
   "opp": "NYJ"
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
  },
  {
   "week": 9,
   "pts": 5.1,
   "opp": "MIN"
  },
  {
   "week": 10,
   "pts": 17.4,
   "opp": "NYJ"
  },
  {
   "week": 11,
   "pts": 19.1,
   "opp": "MIA"
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
  },
  {
   "week": 9,
   "pts": 7.8,
   "opp": "MIN"
  },
  {
   "week": 10,
   "pts": 6.5,
   "opp": "NYJ"
  },
  {
   "week": 11,
   "pts": 15.8,
   "opp": "MIA"
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
  },
  {
   "week": 9,
   "pts": 5.7,
   "opp": "MIN"
  },
  {
   "week": 10,
   "pts": 1.2,
   "opp": "NYJ"
  },
  {
   "week": 11,
   "pts": 4.1,
   "opp": "MIA"
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
  },
  {
   "week": 9,
   "pts": 3.2,
   "opp": "MIN"
  },
  {
   "week": 10,
   "pts": 1.6,
   "opp": "NYJ"
  },
  {
   "week": 11,
   "pts": 2.7,
   "opp": "MIA"
  }
 ],
 "EXT-4890973": [
  {
   "week": 1,
   "pts": 32.7,
   "opp": "MIA"
  },
  {
   "week": 2,
   "pts": 8.3,
   "opp": "LAC"
  },
  {
   "week": 3,
   "pts": 10.8,
   "opp": "NO"
  },
  {
   "week": 4,
   "pts": 15.6,
   "opp": "KC"
  },
  {
   "week": 5,
   "pts": 9.2,
   "opp": "NE"
  },
  {
   "week": 6,
   "pts": 13.8,
   "opp": "BUF"
  },
  {
   "week": 7,
   "pts": 17.6,
   "opp": "LAR"
  },
  {
   "week": 8,
   "pts": 8.8,
   "opp": "NYJ"
  },
  {
   "week": 9,
   "pts": 4.5,
   "opp": "SF"
  },
  {
   "week": 10,
   "pts": 8.4,
   "opp": "SEA"
  },
  {
   "week": 11,
   "pts": 25.4,
   "opp": "DEN"
  }
 ],
 "EXT-14880": [
  {
   "week": 1,
   "pts": 15.8,
   "opp": "MIA"
  },
  {
   "week": 2,
   "pts": 21.22,
   "opp": "LAC"
  },
  {
   "week": 3,
   "pts": 22.22,
   "opp": "NO"
  },
  {
   "week": 4,
   "pts": 26.6,
   "opp": "KC"
  },
  {
   "week": 5,
   "pts": 13.72,
   "opp": "NE"
  },
  {
   "week": 6,
   "pts": 22.52,
   "opp": "BUF"
  },
  {
   "week": 7,
   "pts": 20.4,
   "opp": "LAR"
  },
  {
   "week": 8,
   "pts": 28.18,
   "opp": "NYJ"
  },
  {
   "week": 9,
   "pts": 15.64,
   "opp": "SF"
  }
 ],
 "EXT-4686658": [
  {
   "week": 1,
   "pts": 4.1,
   "opp": "MIA"
  },
  {
   "week": 2,
   "pts": 0.7,
   "opp": "LAC"
  },
  {
   "week": 3,
   "pts": 11.4,
   "opp": "NO"
  },
  {
   "week": 4,
   "pts": 2.2,
   "opp": "KC"
  },
  {
   "week": 5,
   "pts": 1.5,
   "opp": "NE"
  },
  {
   "week": 6,
   "pts": 5.5,
   "opp": "BUF"
  },
  {
   "week": 7,
   "pts": 2.7,
   "opp": "LAR"
  },
  {
   "week": 8,
   "pts": 8.3,
   "opp": "NYJ"
  },
  {
   "week": 9,
   "pts": -0.3,
   "opp": "SF"
  },
  {
   "week": 10,
   "pts": 3.2,
   "opp": "SEA"
  },
  {
   "week": 11,
   "pts": 4.2,
   "opp": "DEN"
  }
 ],
 "EXT-5150247": [
  {
   "week": 1,
   "pts": 0.3,
   "opp": "MIA"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "LAC"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "NO"
  },
  {
   "week": 5,
   "pts": 1.1,
   "opp": "NE"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "LAR"
  }
 ],
 "EXT-4241961": [
  {
   "week": 1,
   "pts": 0.1,
   "opp": "MIA"
  },
  {
   "week": 2,
   "pts": 0.1,
   "opp": "LAC"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "NO"
  },
  {
   "week": 4,
   "pts": 1,
   "opp": "KC"
  },
  {
   "week": 7,
   "pts": 1.8,
   "opp": "LAR"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "NYJ"
  },
  {
   "week": 10,
   "pts": 1.6,
   "opp": "SEA"
  }
 ],
 "EXT-4429086": [
  {
   "week": 1,
   "pts": 6.2,
   "opp": "MIA"
  },
  {
   "week": 2,
   "pts": 3.8,
   "opp": "LAC"
  },
  {
   "week": 3,
   "pts": 10.7,
   "opp": "NO"
  },
  {
   "week": 4,
   "pts": 12.2,
   "opp": "KC"
  },
  {
   "week": 5,
   "pts": 0.7,
   "opp": "NE"
  },
  {
   "week": 6,
   "pts": 13,
   "opp": "BUF"
  },
  {
   "week": 7,
   "pts": 4.7,
   "opp": "LAR"
  },
  {
   "week": 8,
   "pts": 7.8,
   "opp": "NYJ"
  },
  {
   "week": 9,
   "pts": 3.2,
   "opp": "SF"
  },
  {
   "week": 10,
   "pts": 2.8,
   "opp": "SEA"
  },
  {
   "week": 11,
   "pts": 0.9,
   "opp": "DEN"
  }
 ],
 "EXT-4428718": [
  {
   "week": 1,
   "pts": 3.7,
   "opp": "MIA"
  },
  {
   "week": 2,
   "pts": 23.4,
   "opp": "LAC"
  },
  {
   "week": 3,
   "pts": 6.3,
   "opp": "NO"
  },
  {
   "week": 4,
   "pts": 6.4,
   "opp": "KC"
  },
  {
   "week": 5,
   "pts": 5.5,
   "opp": "NE"
  },
  {
   "week": 6,
   "pts": 24.2,
   "opp": "BUF"
  },
  {
   "week": 7,
   "pts": 21.8,
   "opp": "LAR"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "NYJ"
  },
  {
   "week": 9,
   "pts": 7.5,
   "opp": "SF"
  },
  {
   "week": 10,
   "pts": 1.4,
   "opp": "SEA"
  },
  {
   "week": 11,
   "pts": 6,
   "opp": "DEN"
  }
 ],
 "EXT-4382466": [
  {
   "week": 1,
   "pts": 4.2,
   "opp": "MIA"
  },
  {
   "week": 2,
   "pts": 1.4,
   "opp": "LAC"
  },
  {
   "week": 3,
   "pts": 2.1,
   "opp": "NO"
  },
  {
   "week": 6,
   "pts": 1.4,
   "opp": "BUF"
  },
  {
   "week": 7,
   "pts": 2.4,
   "opp": "LAR"
  },
  {
   "week": 8,
   "pts": 11.8,
   "opp": "NYJ"
  },
  {
   "week": 9,
   "pts": 1.9,
   "opp": "SF"
  },
  {
   "week": 10,
   "pts": 0.4,
   "opp": "SEA"
  },
  {
   "week": 11,
   "pts": 2.1,
   "opp": "DEN"
  }
 ],
 "EXT-4241983": [
  {
   "week": 1,
   "pts": 0,
   "opp": "MIA"
  },
  {
   "week": 2,
   "pts": 15.4,
   "opp": "LAC"
  },
  {
   "week": 3,
   "pts": 6.9,
   "opp": "NO"
  },
  {
   "week": 4,
   "pts": 6.6,
   "opp": "KC"
  },
  {
   "week": 5,
   "pts": 5.4,
   "opp": "NE"
  },
  {
   "week": 6,
   "pts": 0,
   "opp": "BUF"
  },
  {
   "week": 7,
   "pts": 0.9,
   "opp": "LAR"
  },
  {
   "week": 10,
   "pts": 2.7,
   "opp": "SEA"
  }
 ],
 "EXT-4603186": [
  {
   "week": 1,
   "pts": 9.8,
   "opp": "MIA"
  },
  {
   "week": 2,
   "pts": 3.5,
   "opp": "LAC"
  },
  {
   "week": 9,
   "pts": 1.4,
   "opp": "SF"
  },
  {
   "week": 10,
   "pts": 2,
   "opp": "SEA"
  },
  {
   "week": 11,
   "pts": 18.8,
   "opp": "DEN"
  }
 ],
 "EXT-4036378": [
  {
   "week": 1,
   "pts": 23.48,
   "opp": "MIN"
  },
  {
   "week": 2,
   "pts": 13.8,
   "opp": "NYJ"
  },
  {
   "week": 3,
   "pts": 22.48,
   "opp": "ATL"
  },
  {
   "week": 4,
   "pts": 14.08,
   "opp": "TB"
  },
  {
   "week": 5,
   "pts": 28.28,
   "opp": "CHI"
  },
  {
   "week": 6,
   "pts": 21.24,
   "opp": "DAL"
  },
  {
   "week": 7,
   "pts": 17.96,
   "opp": "DET"
  },
  {
   "week": 8,
   "pts": 22.52,
   "opp": "CAR"
  },
  {
   "week": 9,
   "pts": 39.18,
   "opp": "NE"
  },
  {
   "week": 10,
   "pts": 11.8,
   "opp": "MIN"
  }
 ],
 "EXT-4429023": [
  {
   "week": 1,
   "pts": 3.7,
   "opp": "MIN"
  },
  {
   "week": 2,
   "pts": 7.6,
   "opp": "NYJ"
  },
  {
   "week": 3,
   "pts": 2.8,
   "opp": "ATL"
  },
  {
   "week": 4,
   "pts": 7.4,
   "opp": "TB"
  },
  {
   "week": 5,
   "pts": 16.2,
   "opp": "CHI"
  },
  {
   "week": 6,
   "pts": 1,
   "opp": "DAL"
  },
  {
   "week": 7,
   "pts": 4.5,
   "opp": "DET"
  },
  {
   "week": 8,
   "pts": 2.1,
   "opp": "CAR"
  },
  {
   "week": 10,
   "pts": 5.4,
   "opp": "MIN"
  }
 ],
 "EXT-3149687": [
  {
   "week": 1,
   "pts": 2.9,
   "opp": "MIN"
  },
  {
   "week": 2,
   "pts": 3.1,
   "opp": "NYJ"
  },
  {
   "week": 3,
   "pts": 0.9,
   "opp": "ATL"
  },
  {
   "week": 4,
   "pts": 4,
   "opp": "TB"
  },
  {
   "week": 10,
   "pts": 0.8,
   "opp": "MIN"
  }
 ],
 "EXT-4248528": [
  {
   "week": 1,
   "pts": 32.7,
   "opp": "MIN"
  },
  {
   "week": 2,
   "pts": 12.1,
   "opp": "NYJ"
  },
  {
   "week": 3,
   "pts": 19.1,
   "opp": "ATL"
  },
  {
   "week": 4,
   "pts": 6.2,
   "opp": "TB"
  },
  {
   "week": 5,
   "pts": 32.3,
   "opp": "CHI"
  },
  {
   "week": 6,
   "pts": 7.9,
   "opp": "DAL"
  },
  {
   "week": 7,
   "pts": 8.2,
   "opp": "DET"
  },
  {
   "week": 8,
   "pts": 16.3,
   "opp": "CAR"
  },
  {
   "week": 9,
   "pts": 29.6,
   "opp": "NE"
  },
  {
   "week": 10,
   "pts": 5.2,
   "opp": "MIN"
  }
 ],
 "EXT-4701936": [
  {
   "week": 1,
   "pts": 12.5,
   "opp": "MIN"
  },
  {
   "week": 2,
   "pts": 7.8,
   "opp": "NYJ"
  },
  {
   "week": 3,
   "pts": 21.5,
   "opp": "ATL"
  },
  {
   "week": 4,
   "pts": 10.2,
   "opp": "TB"
  },
  {
   "week": 5,
   "pts": 20.3,
   "opp": "CHI"
  },
  {
   "week": 6,
   "pts": 22.4,
   "opp": "DAL"
  },
  {
   "week": 7,
   "pts": 6.9,
   "opp": "DET"
  },
  {
   "week": 8,
   "pts": 17.4,
   "opp": "CAR"
  },
  {
   "week": 9,
   "pts": 30.4,
   "opp": "NE"
  },
  {
   "week": 10,
   "pts": 9.5,
   "opp": "MIN"
  }
 ],
 "EXT-3054212": [
  {
   "week": 1,
   "pts": 6,
   "opp": "MIN"
  },
  {
   "week": 3,
   "pts": 2.6,
   "opp": "ATL"
  },
  {
   "week": 4,
   "pts": 2.4,
   "opp": "TB"
  },
  {
   "week": 7,
   "pts": 1.4,
   "opp": "DET"
  }
 ],
 "EXT-4362249": [
  {
   "week": 1,
   "pts": 3.5,
   "opp": "MIN"
  },
  {
   "week": 2,
   "pts": 0.9,
   "opp": "NYJ"
  }
 ],
 "EXT-4572680": [
  {
   "week": 1,
   "pts": 8,
   "opp": "MIN"
  },
  {
   "week": 2,
   "pts": 2.5,
   "opp": "NYJ"
  },
  {
   "week": 3,
   "pts": 4.6,
   "opp": "ATL"
  },
  {
   "week": 4,
   "pts": 13.5,
   "opp": "TB"
  },
  {
   "week": 5,
   "pts": 9.1,
   "opp": "CHI"
  },
  {
   "week": 6,
   "pts": 6.2,
   "opp": "DAL"
  },
  {
   "week": 7,
   "pts": 12.8,
   "opp": "DET"
  },
  {
   "week": 8,
   "pts": 14.3,
   "opp": "CAR"
  },
  {
   "week": 9,
   "pts": 1.4,
   "opp": "NE"
  },
  {
   "week": 10,
   "pts": 2.4,
   "opp": "MIN"
  }
 ],
 "EXT-4259305": [
  {
   "week": 1,
   "pts": 1.5,
   "opp": "MIN"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "NYJ"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "ATL"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "TB"
  },
  {
   "week": 5,
   "pts": 3.5,
   "opp": "CHI"
  },
  {
   "week": 7,
   "pts": 0.9,
   "opp": "DET"
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
 "EXT-4430191": [
  {
   "week": 1,
   "pts": 0,
   "opp": "MIN"
  },
  {
   "week": 2,
   "pts": 1.6,
   "opp": "NYJ"
  },
  {
   "week": 3,
   "pts": 4.6,
   "opp": "ATL"
  },
  {
   "week": 4,
   "pts": 0.3,
   "opp": "TB"
  },
  {
   "week": 5,
   "pts": 0.5,
   "opp": "CHI"
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
  },
  {
   "week": 11,
   "pts": 0.9,
   "opp": "PIT"
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
  },
  {
   "week": 7,
   "pts": 14.1,
   "opp": "DAL"
  },
  {
   "week": 8,
   "pts": 11.9,
   "opp": "WSH"
  },
  {
   "week": 9,
   "pts": 8.2,
   "opp": "NYG"
  },
  {
   "week": 11,
   "pts": 13.5,
   "opp": "PIT"
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
  },
  {
   "week": 7,
   "pts": 7.3,
   "opp": "DAL"
  },
  {
   "week": 8,
   "pts": 5.2,
   "opp": "WSH"
  },
  {
   "week": 9,
   "pts": 7.5,
   "opp": "NYG"
  },
  {
   "week": 11,
   "pts": 4.3,
   "opp": "PIT"
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
  },
  {
   "week": 11,
   "pts": 6.6,
   "opp": "PIT"
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
  },
  {
   "week": 7,
   "pts": 16.2,
   "opp": "DAL"
  },
  {
   "week": 8,
   "pts": 8.7,
   "opp": "WSH"
  },
  {
   "week": 9,
   "pts": 9.1,
   "opp": "NYG"
  },
  {
   "week": 11,
   "pts": 0.8,
   "opp": "PIT"
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
  },
  {
   "week": 7,
   "pts": 24.5,
   "opp": "PHI"
  },
  {
   "week": 8,
   "pts": 6.2,
   "opp": "ARI"
  },
  {
   "week": 9,
   "pts": 23.4,
   "opp": "IND"
  },
  {
   "week": 10,
   "pts": 7.2,
   "opp": "SF"
  },
  {
   "week": 11,
   "pts": 22.6,
   "opp": "TEN"
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
   "pts": 18.94,
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
  },
  {
   "week": 7,
   "pts": 23.28,
   "opp": "PHI"
  },
  {
   "week": 8,
   "pts": 19.8,
   "opp": "ARI"
  },
  {
   "week": 9,
   "pts": 22.5,
   "opp": "IND"
  },
  {
   "week": 10,
   "pts": 38.42,
   "opp": "SF"
  },
  {
   "week": 11,
   "pts": 38.9,
   "opp": "TEN"
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
  },
  {
   "week": 7,
   "pts": 0.3,
   "opp": "PHI"
  },
  {
   "week": 10,
   "pts": 2,
   "opp": "SF"
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
  },
  {
   "week": 7,
   "pts": 13.7,
   "opp": "PHI"
  },
  {
   "week": 8,
   "pts": 5.8,
   "opp": "ARI"
  },
  {
   "week": 10,
   "pts": 41,
   "opp": "SF"
  },
  {
   "week": 11,
   "pts": 23.3,
   "opp": "TEN"
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
  },
  {
   "week": 7,
   "pts": 21.9,
   "opp": "PHI"
  },
  {
   "week": 8,
   "pts": 9.3,
   "opp": "ARI"
  },
  {
   "week": 9,
   "pts": 31.5,
   "opp": "IND"
  },
  {
   "week": 10,
   "pts": 16.7,
   "opp": "SF"
  },
  {
   "week": 11,
   "pts": 27.7,
   "opp": "TEN"
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
  },
  {
   "week": 7,
   "pts": 9,
   "opp": "PHI"
  },
  {
   "week": 8,
   "pts": 11.6,
   "opp": "ARI"
  },
  {
   "week": 9,
   "pts": 6.3,
   "opp": "IND"
  },
  {
   "week": 10,
   "pts": 16.1,
   "opp": "SF"
  },
  {
   "week": 11,
   "pts": 1.6,
   "opp": "TEN"
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
  },
  {
   "week": 7,
   "pts": 2.1,
   "opp": "PHI"
  },
  {
   "week": 8,
   "pts": 5.1,
   "opp": "ARI"
  },
  {
   "week": 9,
   "pts": 3,
   "opp": "IND"
  },
  {
   "week": 10,
   "pts": 3.1,
   "opp": "SF"
  },
  {
   "week": 11,
   "pts": 7.5,
   "opp": "TEN"
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
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "PHI"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "ARI"
  },
  {
   "week": 9,
   "pts": 2.8,
   "opp": "IND"
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
  },
  {
   "week": 10,
   "pts": 1.7,
   "opp": "SF"
  },
  {
   "week": 11,
   "pts": 1.1,
   "opp": "TEN"
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
  },
  {
   "week": 10,
   "pts": 2.4,
   "opp": "SF"
  },
  {
   "week": 11,
   "pts": 10.1,
   "opp": "TEN"
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
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "PHI"
  },
  {
   "week": 9,
   "pts": 9.1,
   "opp": "IND"
  }
 ],
 "EXT-4426338": [
  {
   "week": 1,
   "pts": 6.44,
   "opp": "KC"
  },
  {
   "week": 2,
   "pts": 15.12,
   "opp": "JAX"
  },
  {
   "week": 3,
   "pts": 25.14,
   "opp": "LAR"
  },
  {
   "week": 4,
   "pts": 13.56,
   "opp": "SF"
  },
  {
   "week": 5,
   "pts": 7.92,
   "opp": "LAC"
  },
  {
   "week": 6,
   "pts": 4.48,
   "opp": "SEA"
  },
  {
   "week": 7,
   "pts": 26.18,
   "opp": "ARI"
  },
  {
   "week": 8,
   "pts": 19.28,
   "opp": "KC"
  },
  {
   "week": 9,
   "pts": 16.68,
   "opp": "CAR"
  },
  {
   "week": 11,
   "pts": 12.5,
   "opp": "LV"
  }
 ],
 "EXT-4241985": [
  {
   "week": 1,
   "pts": 3.6,
   "opp": "KC"
  },
  {
   "week": 2,
   "pts": 3.6,
   "opp": "JAX"
  },
  {
   "week": 3,
   "pts": 5.8,
   "opp": "LAR"
  },
  {
   "week": 4,
   "pts": 6.2,
   "opp": "SF"
  },
  {
   "week": 5,
   "pts": 14.4,
   "opp": "LAC"
  },
  {
   "week": 6,
   "pts": 12.1,
   "opp": "SEA"
  },
  {
   "week": 7,
   "pts": 8.3,
   "opp": "ARI"
  },
  {
   "week": 8,
   "pts": 1.3,
   "opp": "KC"
  },
  {
   "week": 9,
   "pts": 2.7,
   "opp": "CAR"
  },
  {
   "week": 11,
   "pts": 0,
   "opp": "LV"
  }
 ],
 "EXT-4568490": [
  {
   "week": 1,
   "pts": 6.1,
   "opp": "KC"
  },
  {
   "week": 3,
   "pts": 7.7,
   "opp": "LAR"
  },
  {
   "week": 4,
   "pts": 14.3,
   "opp": "SF"
  },
  {
   "week": 5,
   "pts": 0.7,
   "opp": "LAC"
  },
  {
   "week": 6,
   "pts": 13.1,
   "opp": "SEA"
  },
  {
   "week": 7,
   "pts": 13,
   "opp": "ARI"
  }
 ],
 "EXT-4431280": [
  {
   "week": 1,
   "pts": 0.5,
   "opp": "KC"
  },
  {
   "week": 2,
   "pts": 3.2,
   "opp": "JAX"
  },
  {
   "week": 3,
   "pts": 2.6,
   "opp": "LAR"
  },
  {
   "week": 5,
   "pts": 2.6,
   "opp": "LAC"
  },
  {
   "week": 6,
   "pts": 0.7,
   "opp": "SEA"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "ARI"
  },
  {
   "week": 8,
   "pts": 0.8,
   "opp": "KC"
  },
  {
   "week": 9,
   "pts": 4.6,
   "opp": "CAR"
  },
  {
   "week": 11,
   "pts": 0,
   "opp": "LV"
  }
 ],
 "EXT-3051876": [
  {
   "week": 1,
   "pts": 12.3,
   "opp": "KC"
  },
  {
   "week": 2,
   "pts": 2.2,
   "opp": "JAX"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "LAR"
  },
  {
   "week": 4,
   "pts": 1.1,
   "opp": "SF"
  },
  {
   "week": 5,
   "pts": 7.5,
   "opp": "LAC"
  },
  {
   "week": 6,
   "pts": 2.3,
   "opp": "SEA"
  },
  {
   "week": 7,
   "pts": 0.7,
   "opp": "ARI"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "KC"
  },
  {
   "week": 9,
   "pts": 5.3,
   "opp": "CAR"
  },
  {
   "week": 11,
   "pts": 10.4,
   "opp": "LV"
  }
 ],
 "EXT-4600981": [
  {
   "week": 1,
   "pts": 6.2,
   "opp": "KC"
  },
  {
   "week": 2,
   "pts": 1.6,
   "opp": "JAX"
  },
  {
   "week": 3,
   "pts": 13.4,
   "opp": "LAR"
  },
  {
   "week": 4,
   "pts": 6.2,
   "opp": "SF"
  },
  {
   "week": 9,
   "pts": 13.6,
   "opp": "CAR"
  },
  {
   "week": 11,
   "pts": 4.7,
   "opp": "LV"
  }
 ],
 "EXT-3128429": [
  {
   "week": 1,
   "pts": 2.1,
   "opp": "KC"
  },
  {
   "week": 2,
   "pts": 4,
   "opp": "JAX"
  },
  {
   "week": 3,
   "pts": 6.1,
   "opp": "LAR"
  },
  {
   "week": 4,
   "pts": 0.9,
   "opp": "SF"
  },
  {
   "week": 5,
   "pts": 8.8,
   "opp": "LAC"
  },
  {
   "week": 6,
   "pts": 2.9,
   "opp": "SEA"
  },
  {
   "week": 7,
   "pts": 6,
   "opp": "ARI"
  },
  {
   "week": 8,
   "pts": 7.3,
   "opp": "KC"
  },
  {
   "week": 9,
   "pts": 13,
   "opp": "CAR"
  },
  {
   "week": 11,
   "pts": 0,
   "opp": "LV"
  }
 ],
 "EXT-3911853": [
  {
   "week": 1,
   "pts": 2,
   "opp": "KC"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "SF"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "ARI"
  },
  {
   "week": 8,
   "pts": 4,
   "opp": "KC"
  },
  {
   "week": 9,
   "pts": 2.5,
   "opp": "CAR"
  },
  {
   "week": 11,
   "pts": 6.6,
   "opp": "LV"
  }
 ],
 "EXT-4372016": [
  {
   "week": 1,
   "pts": 0.7,
   "opp": "KC"
  },
  {
   "week": 2,
   "pts": 20.8,
   "opp": "JAX"
  },
  {
   "week": 3,
   "pts": 5.4,
   "opp": "LAR"
  },
  {
   "week": 4,
   "pts": 12,
   "opp": "SF"
  },
  {
   "week": 5,
   "pts": 3.8,
   "opp": "LAC"
  },
  {
   "week": 6,
   "pts": 4.4,
   "opp": "SEA"
  },
  {
   "week": 7,
   "pts": 6.8,
   "opp": "ARI"
  },
  {
   "week": 8,
   "pts": 13.4,
   "opp": "KC"
  },
  {
   "week": 9,
   "pts": 2.7,
   "opp": "CAR"
  },
  {
   "week": 11,
   "pts": 7.6,
   "opp": "LV"
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
  },
  {
   "week": 7,
   "pts": 7,
   "opp": "SEA"
  },
  {
   "week": 8,
   "pts": 28.44,
   "opp": "DEN"
  },
  {
   "week": 9,
   "pts": 16.48,
   "opp": "NYJ"
  },
  {
   "week": 10,
   "pts": 38.42,
   "opp": "ATL"
  },
  {
   "week": 11,
   "pts": 27.96,
   "opp": "ARI"
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
  },
  {
   "week": 7,
   "pts": 7.7,
   "opp": "SEA"
  },
  {
   "week": 8,
   "pts": 10.4,
   "opp": "DEN"
  },
  {
   "week": 9,
   "pts": 37.3,
   "opp": "NYJ"
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
  },
  {
   "week": 7,
   "pts": 6.4,
   "opp": "SEA"
  },
  {
   "week": 8,
   "pts": 9.2,
   "opp": "DEN"
  },
  {
   "week": 9,
   "pts": 15.3,
   "opp": "NYJ"
  },
  {
   "week": 10,
   "pts": 4,
   "opp": "ATL"
  },
  {
   "week": 11,
   "pts": 22.4,
   "opp": "ARI"
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
  },
  {
   "week": 7,
   "pts": 2.7,
   "opp": "SEA"
  },
  {
   "week": 8,
   "pts": 25.8,
   "opp": "DEN"
  },
  {
   "week": 9,
   "pts": 9.4,
   "opp": "NYJ"
  },
  {
   "week": 10,
   "pts": 35.1,
   "opp": "ATL"
  },
  {
   "week": 11,
   "pts": 25.3,
   "opp": "ARI"
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
  },
  {
   "week": 8,
   "pts": 1.1,
   "opp": "DEN"
  },
  {
   "week": 9,
   "pts": 0.8,
   "opp": "NYJ"
  },
  {
   "week": 10,
   "pts": 2.5,
   "opp": "ATL"
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
  },
  {
   "week": 8,
   "pts": 14.8,
   "opp": "DEN"
  },
  {
   "week": 9,
   "pts": 7.4,
   "opp": "NYJ"
  },
  {
   "week": 10,
   "pts": 10.7,
   "opp": "ATL"
  },
  {
   "week": 11,
   "pts": 8.3,
   "opp": "ARI"
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
  },
  {
   "week": 7,
   "pts": 2.6,
   "opp": "SEA"
  },
  {
   "week": 8,
   "pts": 2.8,
   "opp": "DEN"
  },
  {
   "week": 9,
   "pts": 7.8,
   "opp": "NYJ"
  },
  {
   "week": 10,
   "pts": 0,
   "opp": "ATL"
  },
  {
   "week": 11,
   "pts": 10.8,
   "opp": "ARI"
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
  },
  {
   "week": 7,
   "pts": 2.3,
   "opp": "SEA"
  },
  {
   "week": 8,
   "pts": 3,
   "opp": "DEN"
  },
  {
   "week": 9,
   "pts": 0,
   "opp": "NYJ"
  },
  {
   "week": 10,
   "pts": 11.4,
   "opp": "ATL"
  },
  {
   "week": 11,
   "pts": 5.1,
   "opp": "ARI"
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
  },
  {
   "week": 7,
   "pts": 5.9,
   "opp": "SEA"
  },
  {
   "week": 8,
   "pts": 8.5,
   "opp": "DEN"
  },
  {
   "week": 9,
   "pts": 1.6,
   "opp": "NYJ"
  },
  {
   "week": 10,
   "pts": 1.1,
   "opp": "ATL"
  },
  {
   "week": 11,
   "pts": 3.6,
   "opp": "ARI"
  }
 ],
 "EXT-4241372": [
  {
   "week": 2,
   "pts": 1.2,
   "opp": "TEN"
  },
  {
   "week": 7,
   "pts": 4,
   "opp": "DAL"
  },
  {
   "week": 8,
   "pts": 2.7,
   "opp": "WSH"
  },
  {
   "week": 9,
   "pts": 2.1,
   "opp": "NYG"
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
  },
  {
   "week": 7,
   "pts": 2.2,
   "opp": "DAL"
  },
  {
   "week": 8,
   "pts": 2.9,
   "opp": "WSH"
  },
  {
   "week": 9,
   "pts": 3.5,
   "opp": "NYG"
  },
  {
   "week": 11,
   "pts": 7.9,
   "opp": "PIT"
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
  },
  {
   "week": 9,
   "pts": 3.3,
   "opp": "TB"
  },
  {
   "week": 11,
   "pts": 2.4,
   "opp": "NO"
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
  },
  {
   "week": 10,
   "pts": 0.98,
   "opp": "CIN"
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
  },
  {
   "week": 10,
   "pts": 0,
   "opp": "CIN"
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
  },
  {
   "week": 10,
   "pts": 0.5,
   "opp": "CIN"
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
  },
  {
   "week": 10,
   "pts": 1,
   "opp": "CIN"
  },
  {
   "week": 11,
   "pts": 7,
   "opp": "PHI"
  }
 ],
 "EXT-4819231": [
  {
   "week": 2,
   "pts": 3.2,
   "opp": "NYJ"
  },
  {
   "week": 3,
   "pts": 2.1,
   "opp": "ATL"
  },
  {
   "week": 4,
   "pts": 2.2,
   "opp": "TB"
  },
  {
   "week": 5,
   "pts": 2.6,
   "opp": "CHI"
  },
  {
   "week": 6,
   "pts": -0.2,
   "opp": "DAL"
  },
  {
   "week": 9,
   "pts": 12.8,
   "opp": "NE"
  },
  {
   "week": 10,
   "pts": 4.2,
   "opp": "MIN"
  }
 ],
 "EXT-4722893": [
  {
   "week": 2,
   "pts": 0.3,
   "opp": "TB"
  },
  {
   "week": 4,
   "pts": 8.8,
   "opp": "PIT"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "NYJ"
  },
  {
   "week": 6,
   "pts": 7.5,
   "opp": "BAL"
  }
 ],
 "EXT-4808839": [
  {
   "week": 2,
   "pts": 1.5,
   "opp": "TB"
  },
  {
   "week": 4,
   "pts": 0.7,
   "opp": "PIT"
  },
  {
   "week": 5,
   "pts": 8.9,
   "opp": "NYJ"
  }
 ],
 "EXT-4702555": [
  {
   "week": 2,
   "pts": 13.3,
   "opp": "JAX"
  },
  {
   "week": 7,
   "pts": 7.9,
   "opp": "ARI"
  },
  {
   "week": 8,
   "pts": 18.4,
   "opp": "KC"
  },
  {
   "week": 9,
   "pts": 16.8,
   "opp": "CAR"
  },
  {
   "week": 11,
   "pts": 35.9,
   "opp": "LV"
  }
 ],
 "EXT-4383440": [
  {
   "week": 2,
   "pts": 11.3,
   "opp": "JAX"
  },
  {
   "week": 3,
   "pts": 7.3,
   "opp": "LAR"
  },
  {
   "week": 8,
   "pts": 7.4,
   "opp": "KC"
  },
  {
   "week": 11,
   "pts": 0.8,
   "opp": "LV"
  }
 ],
 "EXT-4362748": [
  {
   "week": 2,
   "pts": 3.9,
   "opp": "JAX"
  },
  {
   "week": 3,
   "pts": 1.9,
   "opp": "LAR"
  },
  {
   "week": 4,
   "pts": 6.9,
   "opp": "SF"
  },
  {
   "week": 5,
   "pts": 0.6,
   "opp": "LAC"
  },
  {
   "week": 6,
   "pts": 0.6,
   "opp": "SEA"
  }
 ],
 "EXT-3929914": [
  {
   "week": 2,
   "pts": 0.7,
   "opp": "JAX"
  },
  {
   "week": 5,
   "pts": 0.3,
   "opp": "LAC"
  },
  {
   "week": 8,
   "pts": 1.5,
   "opp": "KC"
  },
  {
   "week": 11,
   "pts": 0.3,
   "opp": "LV"
  }
 ],
 "EXT-4039057": [
  {
   "week": 2,
   "pts": 0,
   "opp": "JAX"
  },
  {
   "week": 5,
   "pts": 1.3,
   "opp": "LAC"
  },
  {
   "week": 7,
   "pts": 1,
   "opp": "ARI"
  },
  {
   "week": 8,
   "pts": 1.5,
   "opp": "KC"
  }
 ],
 "EXT-4045305": [
  {
   "week": 2,
   "pts": 1.6,
   "opp": "LAC"
  },
  {
   "week": 4,
   "pts": 10.2,
   "opp": "KC"
  },
  {
   "week": 5,
   "pts": 1.4,
   "opp": "NE"
  },
  {
   "week": 7,
   "pts": 1.3,
   "opp": "LAR"
  },
  {
   "week": 10,
   "pts": 1.8,
   "opp": "SEA"
  },
  {
   "week": 11,
   "pts": 8.4,
   "opp": "DEN"
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
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "SEA"
  },
  {
   "week": 8,
   "pts": 0.9,
   "opp": "DEN"
  },
  {
   "week": 9,
   "pts": 2.8,
   "opp": "NYJ"
  },
  {
   "week": 11,
   "pts": 0,
   "opp": "ARI"
  }
 ],
 "EXT-4401805": [
  {
   "week": 2,
   "pts": 3.2,
   "opp": "LAC"
  },
  {
   "week": 4,
   "pts": -0.6,
   "opp": "KC"
  }
 ],
 "EXT-4386544": [
  {
   "week": 2,
   "pts": 0,
   "opp": "NYG"
  },
  {
   "week": 10,
   "pts": 11,
   "opp": "ARI"
  }
 ],
 "EXT-4360797": [
  {
   "week": 2,
   "pts": 2.4,
   "opp": "NYG"
  },
  {
   "week": 4,
   "pts": 1.3,
   "opp": "PHI"
  },
  {
   "week": 5,
   "pts": 0.9,
   "opp": "BUF"
  },
  {
   "week": 8,
   "pts": 6.2,
   "opp": "LAC"
  },
  {
   "week": 9,
   "pts": 2.6,
   "opp": "WSH"
  },
  {
   "week": 10,
   "pts": 3.6,
   "opp": "ARI"
  }
 ],
 "EXT-4602788": [
  {
   "week": 3,
   "pts": 1.3,
   "opp": "NYJ"
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
  },
  {
   "week": 9,
   "pts": 4.7,
   "opp": "MIN"
  },
  {
   "week": 10,
   "pts": 0.9,
   "opp": "NYJ"
  },
  {
   "week": 11,
   "pts": 9.2,
   "opp": "MIA"
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
  },
  {
   "week": 9,
   "pts": 1.3,
   "opp": "MIN"
  }
 ],
 "EXT-4360763": [
  {
   "week": 3,
   "pts": 10.3,
   "opp": "CLE"
  },
  {
   "week": 4,
   "pts": 4.2,
   "opp": "DET"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "TB"
  },
  {
   "week": 8,
   "pts": 1.6,
   "opp": "GB"
  },
  {
   "week": 9,
   "pts": 0,
   "opp": "DEN"
  },
  {
   "week": 11,
   "pts": 1.1,
   "opp": "BAL"
  }
 ],
 "EXT-4567096": [
  {
   "week": 3,
   "pts": 8.9,
   "opp": "CLE"
  },
  {
   "week": 4,
   "pts": 5.2,
   "opp": "DET"
  },
  {
   "week": 6,
   "pts": 3.4,
   "opp": "PHI"
  },
  {
   "week": 7,
   "pts": 3,
   "opp": "TB"
  },
  {
   "week": 8,
   "pts": 2.9,
   "opp": "GB"
  },
  {
   "week": 9,
   "pts": 5,
   "opp": "DEN"
  },
  {
   "week": 10,
   "pts": 0.9,
   "opp": "NO"
  },
  {
   "week": 11,
   "pts": 2.4,
   "opp": "BAL"
  }
 ],
 "EXT-4212909": [
  {
   "week": 3,
   "pts": 0,
   "opp": "CLE"
  },
  {
   "week": 6,
   "pts": 3.2,
   "opp": "PHI"
  },
  {
   "week": 7,
   "pts": -2,
   "opp": "TB"
  }
 ],
 "EXT-4432762": [
  {
   "week": 3,
   "pts": 0,
   "opp": "CAR"
  },
  {
   "week": 8,
   "pts": 0.08,
   "opp": "PIT"
  },
  {
   "week": 9,
   "pts": 22.68,
   "opp": "NO"
  }
 ],
 "EXT-2515270": [
  {
   "week": 3,
   "pts": 0,
   "opp": "CAR"
  },
  {
   "week": 6,
   "pts": 0.2,
   "opp": "BAL"
  }
 ],
 "EXT-4613104": [
  {
   "week": 3,
   "pts": -2,
   "opp": "CAR"
  },
  {
   "week": 9,
   "pts": 0,
   "opp": "NO"
  },
  {
   "week": 10,
   "pts": 5.2,
   "opp": "HOU"
  }
 ],
 "EXT-4635009": [
  {
   "week": 3,
   "pts": 3.7,
   "opp": "ATL"
  },
  {
   "week": 4,
   "pts": 0,
   "opp": "TB"
  },
  {
   "week": 8,
   "pts": 2.1,
   "opp": "CAR"
  },
  {
   "week": 10,
   "pts": 8.7,
   "opp": "MIN"
  }
 ],
 "EXT-4596602": [
  {
   "week": 3,
   "pts": 0.9,
   "opp": "MIA"
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
  },
  {
   "week": 10,
   "pts": 5,
   "opp": "CIN"
  }
 ],
 "EXT-2975674": [
  {
   "week": 3,
   "pts": 0.7,
   "opp": "CIN"
  },
  {
   "week": 10,
   "pts": 0,
   "opp": "CIN"
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
  },
  {
   "week": 11,
   "pts": 0,
   "opp": "DET"
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
  },
  {
   "week": 7,
   "pts": 3.8,
   "opp": "PHI"
  },
  {
   "week": 8,
   "pts": 4.3,
   "opp": "ARI"
  },
  {
   "week": 9,
   "pts": 7.7,
   "opp": "IND"
  }
 ],
 "EXT-4430834": [
  {
   "week": 3,
   "pts": 0,
   "opp": "MIN"
  }
 ],
 "EXT-4432665": [
  {
   "week": 3,
   "pts": 25.6,
   "opp": "NO"
  },
  {
   "week": 4,
   "pts": 17.6,
   "opp": "KC"
  },
  {
   "week": 5,
   "pts": 22,
   "opp": "NE"
  },
  {
   "week": 6,
   "pts": 9,
   "opp": "BUF"
  },
  {
   "week": 7,
   "pts": 10.3,
   "opp": "LAR"
  },
  {
   "week": 8,
   "pts": 24.7,
   "opp": "NYJ"
  },
  {
   "week": 9,
   "pts": 21.8,
   "opp": "SF"
  },
  {
   "week": 10,
   "pts": 2.8,
   "opp": "SEA"
  }
 ],
 "EXT-14012": [
  {
   "week": 3,
   "pts": -1,
   "opp": "CHI"
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
 "EXT-4366963": [
  {
   "week": 3,
   "pts": -2,
   "opp": "NO"
  },
  {
   "week": 5,
   "pts": 10,
   "opp": "NE"
  },
  {
   "week": 6,
   "pts": 0.4,
   "opp": "BUF"
  },
  {
   "week": 10,
   "pts": 0,
   "opp": "SEA"
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
  },
  {
   "week": 9,
   "pts": 1.8,
   "opp": "TB"
  },
  {
   "week": 11,
   "pts": 9.6,
   "opp": "NO"
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
 "EXT-4431346": [
  {
   "week": 4,
   "pts": 3.9,
   "opp": "TB"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "DET"
  },
  {
   "week": 10,
   "pts": -1,
   "opp": "MIN"
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
 "EXT-5097554": [
  {
   "week": 4,
   "pts": 0.8,
   "opp": "GB"
  }
 ],
 "EXT-4686472": [
  {
   "week": 4,
   "pts": -0.5,
   "opp": "SF"
  },
  {
   "week": 5,
   "pts": 1.9,
   "opp": "LAC"
  },
  {
   "week": 6,
   "pts": 2.3,
   "opp": "SEA"
  },
  {
   "week": 7,
   "pts": 6.6,
   "opp": "ARI"
  },
  {
   "week": 8,
   "pts": 3.9,
   "opp": "KC"
  },
  {
   "week": 9,
   "pts": 1,
   "opp": "CAR"
  },
  {
   "week": 11,
   "pts": 5.2,
   "opp": "LV"
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
  },
  {
   "week": 7,
   "pts": 11.3,
   "opp": "DAL"
  }
 ],
 "EXT-4876995": [
  {
   "week": 4,
   "pts": 0,
   "opp": "DET"
  }
 ],
 "EXT-4249836": [
  {
   "week": 5,
   "pts": 3.3,
   "opp": "CHI"
  },
  {
   "week": 6,
   "pts": 9.2,
   "opp": "DAL"
  },
  {
   "week": 8,
   "pts": 0.2,
   "opp": "CAR"
  },
  {
   "week": 9,
   "pts": 4.3,
   "opp": "NE"
  }
 ],
 "EXT-14163": [
  {
   "week": 5,
   "pts": -0.2,
   "opp": "CHI"
  },
  {
   "week": 10,
   "pts": 0.12,
   "opp": "MIN"
  }
 ],
 "EXT-4374187": [
  {
   "week": 5,
   "pts": 1.3,
   "opp": "NE"
  }
 ],
 "EXT-4837248": [
  {
   "week": 5,
   "pts": 2.22,
   "opp": "NE"
  },
  {
   "week": 10,
   "pts": 13.92,
   "opp": "SEA"
  },
  {
   "week": 11,
   "pts": 23.88,
   "opp": "DEN"
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
 "EXT-4569682": [
  {
   "week": 6,
   "pts": 7.9,
   "opp": "BAL"
  }
 ],
 "EXT-4241424": [
  {
   "week": 6,
   "pts": 1.7,
   "opp": "BAL"
  },
  {
   "week": 8,
   "pts": 0.8,
   "opp": "PIT"
  },
  {
   "week": 9,
   "pts": 1.1,
   "opp": "NO"
  },
  {
   "week": 10,
   "pts": 1.9,
   "opp": "HOU"
  }
 ],
 "EXT-4685350": [
  {
   "week": 6,
   "pts": -0.1,
   "opp": "PHI"
  },
  {
   "week": 7,
   "pts": 3.5,
   "opp": "TB"
  },
  {
   "week": 8,
   "pts": 0.1,
   "opp": "GB"
  },
  {
   "week": 9,
   "pts": 0.7,
   "opp": "DEN"
  },
  {
   "week": 10,
   "pts": 2,
   "opp": "NO"
  },
  {
   "week": 11,
   "pts": 4.1,
   "opp": "BAL"
  }
 ],
 "EXT-4685201": [
  {
   "week": 6,
   "pts": 12.6,
   "opp": "CAR"
  },
  {
   "week": 7,
   "pts": 11.54,
   "opp": "DAL"
  },
  {
   "week": 8,
   "pts": 7.98,
   "opp": "WSH"
  }
 ],
 "EXT-4372414": [
  {
   "week": 6,
   "pts": 0.9,
   "opp": "CAR"
  },
  {
   "week": 7,
   "pts": 2.6,
   "opp": "DAL"
  },
  {
   "week": 9,
   "pts": 0.2,
   "opp": "NYG"
  }
 ],
 "EXT-4890373": [
  {
   "week": 6,
   "pts": 2.6,
   "opp": "PIT"
  },
  {
   "week": 11,
   "pts": 0,
   "opp": "DET"
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
  },
  {
   "week": 7,
   "pts": 0.8,
   "opp": "SEA"
  },
  {
   "week": 10,
   "pts": 10.8,
   "opp": "ATL"
  },
  {
   "week": 11,
   "pts": 0,
   "opp": "ARI"
  }
 ],
 "EXT-4372716": [
  {
   "week": 6,
   "pts": -2,
   "opp": "LAC"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "DEN"
  }
 ],
 "EXT-4431487": [
  {
   "week": 6,
   "pts": 6.1,
   "opp": "DAL"
  },
  {
   "week": 7,
   "pts": 6.6,
   "opp": "DET"
  },
  {
   "week": 8,
   "pts": 2.8,
   "opp": "CAR"
  },
  {
   "week": 9,
   "pts": 11.3,
   "opp": "NE"
  },
  {
   "week": 10,
   "pts": 3.7,
   "opp": "MIN"
  }
 ],
 "EXT-5081397": [
  {
   "week": 7,
   "pts": 9.2,
   "opp": "TEN"
  },
  {
   "week": 8,
   "pts": 9.9,
   "opp": "PIT"
  },
  {
   "week": 9,
   "pts": 6.3,
   "opp": "NO"
  },
  {
   "week": 10,
   "pts": 5.7,
   "opp": "HOU"
  }
 ],
 "EXT-4240577": [
  {
   "week": 7,
   "pts": 3.4,
   "opp": "NO"
  },
  {
   "week": 10,
   "pts": 2.5,
   "opp": "CIN"
  }
 ],
 "EXT-3871102": [
  {
   "week": 7,
   "pts": 0,
   "opp": "CAR"
  }
 ],
 "EXT-4034779": [
  {
   "week": 7,
   "pts": 0,
   "opp": "CAR"
  }
 ],
 "EXT-4709392": [
  {
   "week": 7,
   "pts": 8.3,
   "opp": "TB"
  }
 ],
 "EXT-4047365": [
  {
   "week": 7,
   "pts": 17.6,
   "opp": "DET"
  },
  {
   "week": 8,
   "pts": 20.2,
   "opp": "CAR"
  },
  {
   "week": 9,
   "pts": 0.5,
   "opp": "NE"
  }
 ],
 "EXT-3118892": [
  {
   "week": 7,
   "pts": 1.2,
   "opp": "SEA"
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
  },
  {
   "week": 11,
   "pts": 2.3,
   "opp": "TB"
  }
 ],
 "EXT-3115293": [
  {
   "week": 8,
   "pts": -0.2,
   "opp": "BAL"
  },
  {
   "week": 9,
   "pts": -0.2,
   "opp": "MIN"
  },
  {
   "week": 10,
   "pts": -0.2,
   "opp": "NYJ"
  },
  {
   "week": 11,
   "pts": -0.1,
   "opp": "MIA"
  }
 ],
 "EXT-4431574": [
  {
   "week": 7,
   "pts": 0,
   "opp": "DAL"
  },
  {
   "week": 8,
   "pts": 6.8,
   "opp": "WSH"
  },
  {
   "week": 9,
   "pts": 0,
   "opp": "NYG"
  }
 ],
 "EXT-4241555": [
  {
   "week": 7,
   "pts": 4.9,
   "opp": "DAL"
  },
  {
   "week": 8,
   "pts": 5.7,
   "opp": "WSH"
  },
  {
   "week": 9,
   "pts": 4.1,
   "opp": "NYG"
  }
 ],
 "EXT-4361988": [
  {
   "week": 8,
   "pts": 0,
   "opp": "ARI"
  },
  {
   "week": 11,
   "pts": 5,
   "opp": "TEN"
  }
 ],
 "EXT-4578436": [
  {
   "week": 8,
   "pts": -2,
   "opp": "CAR"
  }
 ],
 "EXT-4035198": [
  {
   "week": 8,
   "pts": 1.4,
   "opp": "CLE"
  }
 ],
 "EXT-4693370": [
  {
   "week": 8,
   "pts": 0,
   "opp": "CLE"
  }
 ],
 "EXT-4685279": [
  {
   "week": 8,
   "pts": 1.4,
   "opp": "WSH"
  },
  {
   "week": 11,
   "pts": -2,
   "opp": "PIT"
  }
 ],
 "EXT-4685409": [
  {
   "week": 9,
   "pts": 0,
   "opp": "IND"
  }
 ],
 "EXT-4362887": [
  {
   "week": 9,
   "pts": -2.1,
   "opp": "NYJ"
  },
  {
   "week": 10,
   "pts": 0,
   "opp": "ATL"
  },
  {
   "week": 11,
   "pts": -0.2,
   "opp": "ARI"
  }
 ],
 "EXT-4685489": [
  {
   "week": 9,
   "pts": 1.9,
   "opp": "NYJ"
  },
  {
   "week": 11,
   "pts": 1.2,
   "opp": "ARI"
  }
 ],
 "EXT-4241374": [
  {
   "week": 9,
   "pts": 0,
   "opp": "NYG"
  }
 ],
 "EXT-4360698": [
  {
   "week": 9,
   "pts": 13.16,
   "opp": "NYG"
  },
  {
   "week": 11,
   "pts": 6.34,
   "opp": "PIT"
  }
 ],
 "EXT-2580216": [
  {
   "week": 9,
   "pts": 1,
   "opp": "MIA"
  }
 ],
 "EXT-4243315": [
  {
   "week": 9,
   "pts": 2.5,
   "opp": "TB"
  },
  {
   "week": 11,
   "pts": 3.3,
   "opp": "NO"
  }
 ],
 "EXT-4688552": [
  {
   "week": 9,
   "pts": 9,
   "opp": "MIN"
  },
  {
   "week": 11,
   "pts": 3.5,
   "opp": "MIA"
  }
 ],
 "EXT-3044720": [
  {
   "week": 10,
   "pts": 0.08,
   "opp": "NE"
  }
 ],
 "EXT-4383429": [
  {
   "week": 10,
   "pts": 0.9,
   "opp": "NE"
  }
 ],
 "EXT-4605841": [
  {
   "week": 10,
   "pts": 0.6,
   "opp": "ATL"
  },
  {
   "week": 11,
   "pts": 0.3,
   "opp": "ARI"
  }
 ],
 "EXT-4688813": [
  {
   "week": 10,
   "pts": 13.3,
   "opp": "ATL"
  },
  {
   "week": 11,
   "pts": 7.9,
   "opp": "ARI"
  }
 ],
 "EXT-4037235": [
  {
   "week": 10,
   "pts": 0,
   "opp": "NYJ"
  }
 ],
 "EXT-4605951": [
  {
   "week": 10,
   "pts": 2.7,
   "opp": "ARI"
  }
 ],
 "EXT-4808759": [
  {
   "week": 10,
   "pts": 0,
   "opp": "SF"
  }
 ],
 "EXT-4429202": [
  {
   "week": 10,
   "pts": 1.5,
   "opp": "SF"
  }
 ],
 "EXT-4372519": [
  {
   "week": 11,
   "pts": 4.2,
   "opp": "TEN"
  }
 ],
 "EXT-4694237": [
  {
   "week": 11,
   "pts": 15.1,
   "opp": "PHI"
  }
 ],
 "EXT-4241476": [
  {
   "week": 11,
   "pts": 0,
   "opp": "MIA"
  }
 ],
 "EXT-4391845": [
  {
   "week": 11,
   "pts": 0.3,
   "opp": "LV"
  }
 ],
 "EXT-DEF-GB": [
  {
   "week": 1,
   "pts": 1,
   "opp": "MIN"
  },
  {
   "week": 2,
   "pts": 5,
   "opp": "NYJ"
  },
  {
   "week": 3,
   "pts": -2,
   "opp": "ATL"
  },
  {
   "week": 4,
   "pts": 8,
   "opp": "TB"
  },
  {
   "week": 5,
   "pts": 18,
   "opp": "CHI"
  },
  {
   "week": 6,
   "pts": 9,
   "opp": "DAL"
  },
  {
   "week": 7,
   "pts": 6,
   "opp": "DET"
  },
  {
   "week": 8,
   "pts": 11,
   "opp": "CAR"
  },
  {
   "week": 9,
   "pts": 12,
   "opp": "NE"
  },
  {
   "week": 10,
   "pts": 4,
   "opp": "MIN"
  }
 ],
 "EXT-DEF-LAR": [
  {
   "week": 1,
   "pts": 2,
   "opp": "SF"
  },
  {
   "week": 2,
   "pts": 11,
   "opp": "NYG"
  },
  {
   "week": 3,
   "pts": 3,
   "opp": "DEN"
  },
  {
   "week": 4,
   "pts": 5,
   "opp": "PHI"
  },
  {
   "week": 5,
   "pts": 1,
   "opp": "BUF"
  },
  {
   "week": 6,
   "pts": 3,
   "opp": "ARI"
  },
  {
   "week": 7,
   "pts": 2,
   "opp": "LV"
  },
  {
   "week": 8,
   "pts": 10,
   "opp": "LAC"
  },
  {
   "week": 9,
   "pts": 12,
   "opp": "WSH"
  },
  {
   "week": 10,
   "pts": 16,
   "opp": "ARI"
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
  },
  {
   "week": 9,
   "pts": 14,
   "opp": "TB"
  },
  {
   "week": 11,
   "pts": 16,
   "opp": "NO"
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
  },
  {
   "week": 10,
   "pts": 11,
   "opp": "NE"
  },
  {
   "week": 11,
   "pts": 4,
   "opp": "TB"
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
  },
  {
   "week": 7,
   "pts": -4,
   "opp": "DAL"
  },
  {
   "week": 8,
   "pts": 4,
   "opp": "WSH"
  },
  {
   "week": 9,
   "pts": 9,
   "opp": "NYG"
  },
  {
   "week": 11,
   "pts": 6,
   "opp": "PIT"
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
  },
  {
   "week": 7,
   "pts": 4,
   "opp": "PHI"
  },
  {
   "week": 8,
   "pts": 14,
   "opp": "ARI"
  },
  {
   "week": 9,
   "pts": 6,
   "opp": "IND"
  },
  {
   "week": 10,
   "pts": 1,
   "opp": "SF"
  },
  {
   "week": 11,
   "pts": 6,
   "opp": "TEN"
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
  },
  {
   "week": 7,
   "pts": 3,
   "opp": "SEA"
  },
  {
   "week": 8,
   "pts": 0,
   "opp": "DEN"
  },
  {
   "week": 9,
   "pts": 11,
   "opp": "NYJ"
  },
  {
   "week": 10,
   "pts": 11,
   "opp": "ATL"
  },
  {
   "week": 11,
   "pts": 7,
   "opp": "ARI"
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
  },
  {
   "week": 9,
   "pts": 15,
   "opp": "MIN"
  },
  {
   "week": 10,
   "pts": 12,
   "opp": "NYJ"
  },
  {
   "week": 11,
   "pts": 8,
   "opp": "MIA"
  }
 ],
 "EXT-DEF-DEN": [
  {
   "week": 1,
   "pts": 3,
   "opp": "KC"
  },
  {
   "week": 2,
   "pts": 8,
   "opp": "JAX"
  },
  {
   "week": 3,
   "pts": 14,
   "opp": "LAR"
  },
  {
   "week": 4,
   "pts": 2,
   "opp": "SF"
  },
  {
   "week": 5,
   "pts": 12,
   "opp": "LAC"
  },
  {
   "week": 6,
   "pts": 12,
   "opp": "SEA"
  },
  {
   "week": 7,
   "pts": 4,
   "opp": "ARI"
  },
  {
   "week": 8,
   "pts": 2,
   "opp": "KC"
  },
  {
   "week": 9,
   "pts": 7,
   "opp": "CAR"
  },
  {
   "week": 11,
   "pts": 13,
   "opp": "LV"
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
  },
  {
   "week": 10,
   "pts": -3,
   "opp": "CIN"
  },
  {
   "week": 11,
   "pts": 6,
   "opp": "PHI"
  }
 ],
 "EXT-DEF-LV": [
  {
   "week": 1,
   "pts": 13,
   "opp": "MIA"
  },
  {
   "week": 2,
   "pts": 12,
   "opp": "LAC"
  },
  {
   "week": 3,
   "pts": 12,
   "opp": "NO"
  },
  {
   "week": 4,
   "pts": 1,
   "opp": "KC"
  },
  {
   "week": 5,
   "pts": -1,
   "opp": "NE"
  },
  {
   "week": 6,
   "pts": 1,
   "opp": "BUF"
  },
  {
   "week": 7,
   "pts": 1,
   "opp": "LAR"
  },
  {
   "week": 8,
   "pts": 9,
   "opp": "NYJ"
  },
  {
   "week": 9,
   "pts": 2,
   "opp": "SF"
  },
  {
   "week": 10,
   "pts": 7,
   "opp": "SEA"
  },
  {
   "week": 11,
   "pts": 2,
   "opp": "DEN"
  }
 ],
 "EXT-DEF-CLE": [
  {
   "week": 1,
   "pts": 0,
   "opp": "JAX"
  },
  {
   "week": 2,
   "pts": 6,
   "opp": "TB"
  },
  {
   "week": 3,
   "pts": 6,
   "opp": "CAR"
  },
  {
   "week": 4,
   "pts": 9,
   "opp": "PIT"
  },
  {
   "week": 5,
   "pts": 9,
   "opp": "NYJ"
  },
  {
   "week": 6,
   "pts": 9,
   "opp": "BAL"
  },
  {
   "week": 7,
   "pts": 5,
   "opp": "TEN"
  },
  {
   "week": 8,
   "pts": 3,
   "opp": "PIT"
  },
  {
   "week": 9,
   "pts": 9,
   "opp": "NO"
  },
  {
   "week": 10,
   "pts": 3,
   "opp": "HOU"
  }
 ],
 "EXT-DEF-CAR": [
  {
   "week": 1,
   "pts": 0,
   "opp": "CHI"
  },
  {
   "week": 2,
   "pts": 26,
   "opp": "ATL"
  },
  {
   "week": 3,
   "pts": 4,
   "opp": "CLE"
  },
  {
   "week": 4,
   "pts": 1,
   "opp": "DET"
  },
  {
   "week": 6,
   "pts": 4,
   "opp": "PHI"
  },
  {
   "week": 7,
   "pts": -4,
   "opp": "TB"
  },
  {
   "week": 8,
   "pts": 6,
   "opp": "GB"
  },
  {
   "week": 9,
   "pts": 3,
   "opp": "DEN"
  },
  {
   "week": 10,
   "pts": 8,
   "opp": "NO"
  },
  {
   "week": 11,
   "pts": 10,
   "opp": "BAL"
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
  },
  {
   "week": 9,
   "pts": 11,
   "opp": "CHI"
  },
  {
   "week": 11,
   "pts": 0,
   "opp": "DET"
  }
 ]
};
