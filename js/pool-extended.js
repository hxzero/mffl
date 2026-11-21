/* MFFL Week 11 DERIVED player pool extension — producers only (Option 2).
   Source: ESPN rosters / game summaries, computed 2026-11-20 by
   pool-roll-week11 build-pool-extended-week11.mjs per pool-extension-investigation.md.
   These players are NOT in FanDuel's Week 11 Sunday-main contest pool:
   they are the producers (Weeks 1-10 stat lines) of the 6 teams in the
   3 non-main-slate games (IND@HOU, MIN@SF, CIN@WSH), plus the
   6 team defenses. FPPG = ESPN-computed FanDuel points / games appeared.
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
 "week": 11,
 "cap": 60000,
 "source": "espn-derived",
 "games": {
  "IND@HOU": "2026-11-20T01:15Z",
  "MIN@SF": "2026-11-23T01:20Z",
  "CIN@WSH": "2026-11-24T01:15Z"
 },
 "players": [
  {
   "id": "EXT-3117251",
   "name": "Christian McCaffrey",
   "pos": "RB",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 8400,
   "fppg": 21.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4362628",
   "name": "Ja'Marr Chase",
   "pos": "WR",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 8100,
   "fppg": 19,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3915511",
   "name": "Joe Burrow",
   "pos": "QB",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 8100,
   "fppg": 27.5,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4361741",
   "name": "Brock Purdy",
   "pos": "QB",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 7800,
   "fppg": 23.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4432577",
   "name": "C.J. Stroud",
   "pos": "QB",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 7700,
   "fppg": 22.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4239993",
   "name": "Tee Higgins",
   "pos": "WR",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 7700,
   "fppg": 17.1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4426348",
   "name": "Jayden Daniels",
   "pos": "QB",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 7600,
   "fppg": 20.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4242335",
   "name": "Jonathan Taylor",
   "pos": "RB",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 7100,
   "fppg": 15.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4258173",
   "name": "Nico Collins",
   "pos": "WR",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 7100,
   "fppg": 14.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3917315",
   "name": "Kyler Murray",
   "pos": "QB",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 7000,
   "fppg": 12.8,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4432722",
   "name": "Athan Kaliakmanis",
   "pos": "QB",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 6900,
   "fppg": 12,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-2576980",
   "name": "Marcus Mariota",
   "pos": "QB",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 6900,
   "fppg": 11.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-16737",
   "name": "Mike Evans",
   "pos": "WR",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 6900,
   "fppg": 13.1,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3917792",
   "name": "Daniel Jones",
   "pos": "QB",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 6800,
   "fppg": 9.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3126486",
   "name": "Deebo Samuel Sr.",
   "pos": "WR",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 6800,
   "fppg": 12.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2573079",
   "name": "Carson Wentz",
   "pos": "QB",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 6600,
   "fppg": 8.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4262921",
   "name": "Justin Jefferson",
   "pos": "WR",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 6500,
   "fppg": 11.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2976212",
   "name": "Stefon Diggs",
   "pos": "WR",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 6500,
   "fppg": 11.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4362238",
   "name": "Chase Brown",
   "pos": "RB",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 6400,
   "fppg": 11.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429939",
   "name": "Jawhar Jordan",
   "pos": "RB",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 6300,
   "fppg": 11.5,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4573398",
   "name": "Max Brosmer",
   "pos": "QB",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 6200,
   "fppg": 2.3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4366031",
   "name": "Tank Dell",
   "pos": "WR",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 6200,
   "fppg": 10,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3042519",
   "name": "Aaron Jones Sr.",
   "pos": "RB",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 6100,
   "fppg": 10.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-14880",
   "name": "Kirk Cousins",
   "pos": "QB",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 6100,
   "fppg": 1.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429084",
   "name": "Anthony Richardson Sr.",
   "pos": "QB",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 6000,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4242546",
   "name": "Davis Mills",
   "pos": "QB",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 6000,
   "fppg": 0.1,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4241464",
   "name": "Mac Jones",
   "pos": "QB",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 6000,
   "fppg": -0.2,
   "inj": "Q",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4035538",
   "name": "David Montgomery",
   "pos": "RB",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 5700,
   "fppg": 8.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-15818",
   "name": "Keenan Allen",
   "pos": "WR",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 5700,
   "fppg": 7.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4697815",
   "name": "Rachaad White",
   "pos": "RB",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 5700,
   "fppg": 8.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4686422",
   "name": "Xavier Hutchinson",
   "pos": "WR",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 5700,
   "fppg": 7.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3040151",
   "name": "George Kittle",
   "pos": "TE",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 5600,
   "fppg": 11.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429059",
   "name": "Woody Marks",
   "pos": "RB",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 5600,
   "fppg": 7.8,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-5081432",
   "name": "Antonio Williams",
   "pos": "WR",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 5400,
   "fppg": 6.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429205",
   "name": "Jordan Addison",
   "pos": "WR",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 5400,
   "fppg": 6.4,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4429022",
   "name": "Kayshon Boutte",
   "pos": "WR",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 5400,
   "fppg": 6.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4567156",
   "name": "Treylon Burks",
   "pos": "WR",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 5400,
   "fppg": 6.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360569",
   "name": "Jordan Mason",
   "pos": "RB",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 5300,
   "fppg": 6.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4688813",
   "name": "Josh Downs",
   "pos": "WR",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 5300,
   "fppg": 5.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4036133",
   "name": "T.J. Hockenson",
   "pos": "TE",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 5300,
   "fppg": 8.9,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4431466",
   "name": "Jordan Watkins",
   "pos": "WR",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 5200,
   "fppg": 5.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3116389",
   "name": "Samaje Perine",
   "pos": "RB",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 5200,
   "fppg": 5.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4431459",
   "name": "Tyler Warren",
   "pos": "TE",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 5200,
   "fppg": 8.3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3043116",
   "name": "Demarcus Robinson",
   "pos": "WR",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 5100,
   "fppg": 5.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4384852",
   "name": "Dohnte Meyers",
   "pos": "WR",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 5100,
   "fppg": 4.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4696044",
   "name": "Kaelon Black",
   "pos": "RB",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 5100,
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
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 5100,
   "fppg": 8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3117256",
   "name": "Dalton Schultz",
   "pos": "TE",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 5000,
   "fppg": 7.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3068267",
   "name": "Austin Ekeler",
   "pos": "RB",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4900,
   "fppg": 4.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3051889",
   "name": "Laquon Treadwell",
   "pos": "WR",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 4900,
   "fppg": 3.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4686468",
   "name": "Seth McGowan",
   "pos": "RB",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 4900,
   "fppg": 4.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4061956",
   "name": "Ashton Dulin",
   "pos": "WR",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 4800,
   "fppg": 3.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360635",
   "name": "Chig Okonkwo",
   "pos": "TE",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4800,
   "fppg": 5.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3930066",
   "name": "Van Jefferson",
   "pos": "WR",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4800,
   "fppg": 3.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-MIN",
   "name": "Minnesota Vikings",
   "pos": "D",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 4700,
   "fppg": 11.6,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-16731",
   "name": "Brandin Cooks",
   "pos": "WR",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 4600,
   "fppg": 2.9,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-16002",
   "name": "Kyle Juszczyk",
   "pos": "RB",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 4600,
   "fppg": 3,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4874509",
   "name": "DJ Giddens",
   "pos": "RB",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 4500,
   "fppg": 2.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3843945",
   "name": "Foster Moreau",
   "pos": "TE",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 4500,
   "fppg": 3.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4432708",
   "name": "Marvin Harrison Jr.",
   "pos": "WR",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 4500,
   "fppg": 2.1,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4430656",
   "name": "Myles Price",
   "pos": "WR",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 4500,
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
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 4400,
   "fppg": 2.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4683111",
   "name": "Jaden Bradley",
   "pos": "WR",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4400,
   "fppg": 1.7,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4690070",
   "name": "Mitchell Tinsley",
   "pos": "WR",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 4400,
   "fppg": 1.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4683151",
   "name": "Deion Burks",
   "pos": "WR",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 4300,
   "fppg": 1.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4362478",
   "name": "Emari Demercado",
   "pos": "RB",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 4300,
   "fppg": 1.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4708049",
   "name": "Gavin Bartholomew",
   "pos": "TE",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 4300,
   "fppg": 2.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4430681",
   "name": "Jared Wayne",
   "pos": "WR",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 4300,
   "fppg": 1.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3886598",
   "name": "Jauan Jennings",
   "pos": "WR",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 4300,
   "fppg": 1.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4360637",
   "name": "Jeshaun Jones",
   "pos": "WR",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 4300,
   "fppg": 1.2,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-3047876",
   "name": "KhaDarel Hodge",
   "pos": "WR",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 4300,
   "fppg": 1.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4565185",
   "name": "Tai Felton",
   "pos": "WR",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 4300,
   "fppg": 1.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4429684",
   "name": "Anthony Gould",
   "pos": "WR",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 4200,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4690923",
   "name": "Ben Sinnott",
   "pos": "TE",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4200,
   "fppg": 1.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4433959",
   "name": "Ben Yurosek",
   "pos": "TE",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 4200,
   "fppg": 1.1,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4240631",
   "name": "DeeJay Dallas",
   "pos": "RB",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 4200,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5085189",
   "name": "Jack Endries",
   "pos": "TE",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 4200,
   "fppg": 1.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4575665",
   "name": "Jacob Cowing",
   "pos": "WR",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 4200,
   "fppg": 0.8,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685397",
   "name": "Jordan James",
   "pos": "RB",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 4200,
   "fppg": 0.7,
   "inj": "Q",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4362504",
   "name": "Brevin Jordan",
   "pos": "TE",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 4100,
   "fppg": 0.4,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4426496",
   "name": "Cade Stover",
   "pos": "TE",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 4100,
   "fppg": 0.7,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-DEF-CIN",
   "name": "Cincinnati Bengals",
   "pos": "D",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 4100,
   "fppg": 7.3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-5092508",
   "name": "Colbie Young",
   "pos": "WR",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
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
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4100,
   "fppg": 0.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4421446",
   "name": "Craig Reynolds",
   "pos": "RB",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4100,
   "fppg": 0.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-2983509",
   "name": "Dare Ogunbowale",
   "pos": "RB",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 4100,
   "fppg": 0.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4722908",
   "name": "Drew Ogletree",
   "pos": "TE",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 4100,
   "fppg": 0.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4048228",
   "name": "John Bates",
   "pos": "TE",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4100,
   "fppg": 0.6,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4685246",
   "name": "Kaytron Allen",
   "pos": "RB",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4100,
   "fppg": 0.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4040612",
   "name": "Luke Farrell",
   "pos": "TE",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 4100,
   "fppg": 0.5,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4426948",
   "name": "Luke McCaffrey",
   "pos": "WR",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4695705",
   "name": "Marlin Klein",
   "pos": "TE",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 4100,
   "fppg": 0.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-2971281",
   "name": "Pharaoh Brown",
   "pos": "TE",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 4100,
   "fppg": 0.4,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-5151317",
   "name": "Robert Henry Jr.",
   "pos": "RB",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4100,
   "fppg": 0.4,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-SF",
   "name": "San Francisco 49ers",
   "pos": "D",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 4100,
   "fppg": 6.7,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4429299",
   "name": "Tahj Brooks",
   "pos": "RB",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 4100,
   "fppg": 0.2,
   "inj": "",
   "derived": true,
   "priceTier": "model"
  },
  {
   "id": "EXT-4362523",
   "name": "Will Mallory",
   "pos": "TE",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 4100,
   "fppg": 1,
   "inj": "O",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4360078",
   "name": "Alec Pierce",
   "pos": "WR",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 4000,
   "fppg": 4.9,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4368003",
   "name": "Andrei Iosivas",
   "pos": "WR",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 4000,
   "fppg": 1.7,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4360290",
   "name": "Brayden Willis",
   "pos": "TE",
   "team": "SF",
   "opp": "MIN",
   "game": "MIN@SF",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-4832846",
   "name": "Demond Claiborne",
   "pos": "RB",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 4000,
   "fppg": 0.8,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4361577",
   "name": "Dyami Brown",
   "pos": "WR",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
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
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 4000,
   "fppg": 1.6,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-HOU",
   "name": "Houston Texans",
   "pos": "D",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 4000,
   "fppg": 6.2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4575131",
   "name": "Jacory Croskey-Merritt",
   "pos": "RB",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4000,
   "fppg": 8.5,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4602667",
   "name": "Jaylin Lane",
   "pos": "WR",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4000,
   "fppg": 0.9,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4586312",
   "name": "Jaylin Noel",
   "pos": "WR",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 4000,
   "fppg": 8.6,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3127586",
   "name": "Jeremy McNichols",
   "pos": "RB",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4000,
   "fppg": 2.3,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3921690",
   "name": "Josh Oliver",
   "pos": "TE",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 4000,
   "fppg": 2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4570738",
   "name": "Ke'Shawn Williams",
   "pos": "WR",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
   "salary": 4000,
   "fppg": -2,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4683159",
   "name": "Lewis Bond",
   "pos": "WR",
   "team": "HOU",
   "opp": "IND",
   "game": "IND@HOU",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-4878695",
   "name": "Max Bredeson",
   "pos": "RB",
   "team": "MIN",
   "opp": "SF",
   "game": "MIN@SF",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-2998565",
   "name": "Mo Alie-Cox",
   "pos": "TE",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 4000,
   "fppg": 1.2,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-3929785",
   "name": "Nick Westbrook-Ikhine",
   "pos": "WR",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 4000,
   "fppg": 0,
   "inj": "",
   "derived": true,
   "priceTier": "floor"
  },
  {
   "id": "EXT-3050481",
   "name": "Tanner Hudson",
   "pos": "TE",
   "team": "CIN",
   "opp": "WSH",
   "game": "CIN@WSH",
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
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 4000,
   "fppg": 7.7,
   "inj": "IR",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-WSH",
   "name": "Washington Commanders",
   "pos": "D",
   "team": "WSH",
   "opp": "CIN",
   "game": "CIN@WSH",
   "salary": 3900,
   "fppg": 5.8,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  },
  {
   "id": "EXT-DEF-IND",
   "name": "Indianapolis Colts",
   "pos": "D",
   "team": "IND",
   "opp": "HOU",
   "game": "IND@HOU",
   "salary": 3700,
   "fppg": 4.3,
   "inj": "",
   "derived": true,
   "priceTier": "flagged"
  }
 ]
};
window.MFFL_HISTORY_EXTENDED = {
 "EXT-4696044": [
  {
   "week": 1,
   "pts": 7.5,
   "opp": "LAR"
  },
  {
   "week": 2,
   "pts": 2.5,
   "opp": "MIA"
  },
  {
   "week": 3,
   "pts": 1.7,
   "opp": "ARI"
  },
  {
   "week": 4,
   "pts": 1.3,
   "opp": "DEN"
  },
  {
   "week": 5,
   "pts": 1.6,
   "opp": "SEA"
  },
  {
   "week": 6,
   "pts": 4.2,
   "opp": "WSH"
  },
  {
   "week": 7,
   "pts": 10.4,
   "opp": "ATL"
  },
  {
   "week": 9,
   "pts": 7,
   "opp": "LV"
  },
  {
   "week": 10,
   "pts": 13.6,
   "opp": "DAL"
  }
 ],
 "EXT-3117251": [
  {
   "week": 1,
   "pts": 11.3,
   "opp": "LAR"
  },
  {
   "week": 2,
   "pts": 20.6,
   "opp": "MIA"
  },
  {
   "week": 3,
   "pts": 19.6,
   "opp": "ARI"
  },
  {
   "week": 4,
   "pts": 14.5,
   "opp": "DEN"
  },
  {
   "week": 5,
   "pts": 15.8,
   "opp": "SEA"
  },
  {
   "week": 6,
   "pts": 26.2,
   "opp": "WSH"
  },
  {
   "week": 7,
   "pts": 19,
   "opp": "ATL"
  },
  {
   "week": 9,
   "pts": 21.7,
   "opp": "LV"
  },
  {
   "week": 10,
   "pts": 47.3,
   "opp": "DAL"
  }
 ],
 "EXT-4361741": [
  {
   "week": 1,
   "pts": 22.1,
   "opp": "LAR"
  },
  {
   "week": 2,
   "pts": 28.48,
   "opp": "MIA"
  },
  {
   "week": 3,
   "pts": 31.28,
   "opp": "ARI"
  },
  {
   "week": 4,
   "pts": 19.62,
   "opp": "DEN"
  },
  {
   "week": 5,
   "pts": 17.16,
   "opp": "SEA"
  },
  {
   "week": 6,
   "pts": 17.36,
   "opp": "WSH"
  },
  {
   "week": 7,
   "pts": 14.02,
   "opp": "ATL"
  },
  {
   "week": 9,
   "pts": 26.28,
   "opp": "LV"
  },
  {
   "week": 10,
   "pts": 34.66,
   "opp": "DAL"
  }
 ],
 "EXT-4040612": [
  {
   "week": 1,
   "pts": 2.9,
   "opp": "LAR"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "ARI"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "SEA"
  },
  {
   "week": 7,
   "pts": 1.9,
   "opp": "ATL"
  },
  {
   "week": 9,
   "pts": 0,
   "opp": "LV"
  }
 ],
 "EXT-3040151": [
  {
   "week": 1,
   "pts": 2.2,
   "opp": "LAR"
  },
  {
   "week": 2,
   "pts": 16,
   "opp": "MIA"
  },
  {
   "week": 3,
   "pts": 23.2,
   "opp": "ARI"
  },
  {
   "week": 4,
   "pts": 15,
   "opp": "DEN"
  },
  {
   "week": 5,
   "pts": 4.9,
   "opp": "SEA"
  },
  {
   "week": 6,
   "pts": 15.4,
   "opp": "WSH"
  },
  {
   "week": 7,
   "pts": 10.8,
   "opp": "ATL"
  },
  {
   "week": 9,
   "pts": 7.8,
   "opp": "LV"
  },
  {
   "week": 10,
   "pts": 10.4,
   "opp": "DAL"
  }
 ],
 "EXT-3917792": [
  {
   "week": 1,
   "pts": 10.04,
   "opp": "BAL"
  },
  {
   "week": 2,
   "pts": 12.4,
   "opp": "KC"
  },
  {
   "week": 3,
   "pts": 8.9,
   "opp": "HOU"
  },
  {
   "week": 4,
   "pts": 8.92,
   "opp": "WSH"
  },
  {
   "week": 5,
   "pts": 11.08,
   "opp": "PIT"
  },
  {
   "week": 6,
   "pts": 15.76,
   "opp": "TEN"
  },
  {
   "week": 7,
   "pts": 4.62,
   "opp": "MIN"
  },
  {
   "week": 8,
   "pts": 8.46,
   "opp": "JAX"
  },
  {
   "week": 9,
   "pts": 11.3,
   "opp": "DAL"
  },
  {
   "week": 10,
   "pts": 7.22,
   "opp": "MIA"
  }
 ],
 "EXT-4242335": [
  {
   "week": 1,
   "pts": 23.6,
   "opp": "BAL"
  },
  {
   "week": 2,
   "pts": 27.2,
   "opp": "KC"
  },
  {
   "week": 3,
   "pts": 8.2,
   "opp": "HOU"
  },
  {
   "week": 4,
   "pts": 22.2,
   "opp": "WSH"
  },
  {
   "week": 5,
   "pts": 9.7,
   "opp": "PIT"
  },
  {
   "week": 6,
   "pts": 20.1,
   "opp": "TEN"
  },
  {
   "week": 7,
   "pts": 18,
   "opp": "MIN"
  },
  {
   "week": 8,
   "pts": 4.7,
   "opp": "JAX"
  },
  {
   "week": 9,
   "pts": 6.9,
   "opp": "DAL"
  },
  {
   "week": 10,
   "pts": 11.3,
   "opp": "MIA"
  }
 ],
 "EXT-4360078": [
  {
   "week": 1,
   "pts": 8.1,
   "opp": "BAL"
  },
  {
   "week": 2,
   "pts": 1.6,
   "opp": "KC"
  }
 ],
 "EXT-3126486": [
  {
   "week": 1,
   "pts": 15,
   "opp": "LAR"
  },
  {
   "week": 2,
   "pts": 5,
   "opp": "MIA"
  },
  {
   "week": 3,
   "pts": 15.4,
   "opp": "ARI"
  },
  {
   "week": 4,
   "pts": 15.5,
   "opp": "DEN"
  },
  {
   "week": 5,
   "pts": 1.5,
   "opp": "SEA"
  },
  {
   "week": 10,
   "pts": 24.4,
   "opp": "DAL"
  }
 ],
 "EXT-15818": [
  {
   "week": 1,
   "pts": 6.2,
   "opp": "BAL"
  },
  {
   "week": 2,
   "pts": 1,
   "opp": "KC"
  },
  {
   "week": 3,
   "pts": 15.3,
   "opp": "HOU"
  },
  {
   "week": 5,
   "pts": 7,
   "opp": "PIT"
  },
  {
   "week": 6,
   "pts": 12.2,
   "opp": "TEN"
  },
  {
   "week": 7,
   "pts": 4.6,
   "opp": "MIN"
  },
  {
   "week": 8,
   "pts": 10.2,
   "opp": "JAX"
  },
  {
   "week": 9,
   "pts": 4.6,
   "opp": "DAL"
  },
  {
   "week": 10,
   "pts": 8.6,
   "opp": "DAL"
  }
 ],
 "EXT-4431459": [
  {
   "week": 1,
   "pts": 8.8,
   "opp": "BAL"
  },
  {
   "week": 2,
   "pts": 11.4,
   "opp": "KC"
  },
  {
   "week": 3,
   "pts": 10.2,
   "opp": "HOU"
  },
  {
   "week": 4,
   "pts": 6.6,
   "opp": "WSH"
  },
  {
   "week": 5,
   "pts": 17.9,
   "opp": "PIT"
  },
  {
   "week": 8,
   "pts": 3.8,
   "opp": "JAX"
  },
  {
   "week": 9,
   "pts": 6.4,
   "opp": "DAL"
  },
  {
   "week": 10,
   "pts": 1.4,
   "opp": "MIA"
  }
 ],
 "EXT-4688813": [
  {
   "week": 1,
   "pts": 4.7,
   "opp": "BAL"
  },
  {
   "week": 2,
   "pts": 10.7,
   "opp": "KC"
  },
  {
   "week": 3,
   "pts": 10.2,
   "opp": "HOU"
  },
  {
   "week": 4,
   "pts": 3.1,
   "opp": "WSH"
  },
  {
   "week": 5,
   "pts": 6.2,
   "opp": "PIT"
  },
  {
   "week": 6,
   "pts": 6.7,
   "opp": "TEN"
  },
  {
   "week": 7,
   "pts": 2.8,
   "opp": "MIN"
  },
  {
   "week": 8,
   "pts": 10.3,
   "opp": "JAX"
  },
  {
   "week": 9,
   "pts": 3.9,
   "opp": "DAL"
  }
 ],
 "EXT-3043116": [
  {
   "week": 1,
   "pts": 12,
   "opp": "LAR"
  },
  {
   "week": 2,
   "pts": 4.9,
   "opp": "MIA"
  },
  {
   "week": 9,
   "pts": 3.7,
   "opp": "LV"
  }
 ],
 "EXT-3051889": [
  {
   "week": 1,
   "pts": 0,
   "opp": "BAL"
  },
  {
   "week": 2,
   "pts": 7.6,
   "opp": "KC"
  },
  {
   "week": 3,
   "pts": 2.5,
   "opp": "HOU"
  },
  {
   "week": 4,
   "pts": 6.7,
   "opp": "WSH"
  },
  {
   "week": 5,
   "pts": 4.4,
   "opp": "PIT"
  },
  {
   "week": 6,
   "pts": 3.1,
   "opp": "TEN"
  },
  {
   "week": 7,
   "pts": 2.9,
   "opp": "MIN"
  },
  {
   "week": 8,
   "pts": 2.3,
   "opp": "JAX"
  },
  {
   "week": 9,
   "pts": 0,
   "opp": "DAL"
  },
  {
   "week": 10,
   "pts": 9.9,
   "opp": "MIA"
  }
 ],
 "EXT-4061956": [
  {
   "week": 1,
   "pts": 0,
   "opp": "BAL"
  },
  {
   "week": 4,
   "pts": 4.4,
   "opp": "WSH"
  },
  {
   "week": 8,
   "pts": 0.3,
   "opp": "JAX"
  },
  {
   "week": 9,
   "pts": 12.3,
   "opp": "DAL"
  },
  {
   "week": 10,
   "pts": 3.5,
   "opp": "MIA"
  }
 ],
 "EXT-16737": [
  {
   "week": 1,
   "pts": 13.9,
   "opp": "LAR"
  },
  {
   "week": 2,
   "pts": 6.9,
   "opp": "MIA"
  },
  {
   "week": 3,
   "pts": 10.9,
   "opp": "ARI"
  },
  {
   "week": 4,
   "pts": 10.1,
   "opp": "DEN"
  },
  {
   "week": 5,
   "pts": 25.8,
   "opp": "SEA"
  },
  {
   "week": 6,
   "pts": 10.9,
   "opp": "WSH"
  }
 ],
 "EXT-4722908": [
  {
   "week": 1,
   "pts": 0,
   "opp": "BAL"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "KC"
  },
  {
   "week": 5,
   "pts": 0.9,
   "opp": "PIT"
  },
  {
   "week": 7,
   "pts": 2.2,
   "opp": "MIN"
  },
  {
   "week": 10,
   "pts": 1,
   "opp": "MIA"
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
  },
  {
   "week": 10,
   "pts": 24.3,
   "opp": "PIT"
  }
 ],
 "EXT-4686468": [
  {
   "week": 1,
   "pts": 0.5,
   "opp": "BAL"
  },
  {
   "week": 2,
   "pts": 0,
   "opp": "KC"
  },
  {
   "week": 3,
   "pts": 1.4,
   "opp": "HOU"
  },
  {
   "week": 4,
   "pts": 4.3,
   "opp": "WSH"
  },
  {
   "week": 5,
   "pts": 2.4,
   "opp": "PIT"
  },
  {
   "week": 6,
   "pts": 2.7,
   "opp": "TEN"
  },
  {
   "week": 7,
   "pts": 5.3,
   "opp": "MIN"
  },
  {
   "week": 8,
   "pts": 2.9,
   "opp": "JAX"
  },
  {
   "week": 9,
   "pts": 10.7,
   "opp": "DAL"
  },
  {
   "week": 10,
   "pts": 13.7,
   "opp": "MIA"
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
  },
  {
   "week": 10,
   "pts": 36.16,
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
  },
  {
   "week": 9,
   "pts": 4.3,
   "opp": "ATL"
  },
  {
   "week": 10,
   "pts": 11.9,
   "opp": "PIT"
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
  },
  {
   "week": 10,
   "pts": 1.4,
   "opp": "PIT"
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
  },
  {
   "week": 10,
   "pts": 9,
   "opp": "PIT"
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
  },
  {
   "week": 10,
   "pts": 9.1,
   "opp": "PIT"
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
  },
  {
   "week": 10,
   "pts": 9,
   "opp": "PIT"
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
  },
  {
   "week": 9,
   "pts": 29.5,
   "opp": "ATL"
  },
  {
   "week": 10,
   "pts": 31.6,
   "opp": "PIT"
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
 "EXT-4035538": [
  {
   "week": 1,
   "pts": 27.4,
   "opp": "BUF"
  },
  {
   "week": 2,
   "pts": 3.4,
   "opp": "CIN"
  },
  {
   "week": 3,
   "pts": 5.8,
   "opp": "IND"
  },
  {
   "week": 4,
   "pts": 4.3,
   "opp": "DAL"
  },
  {
   "week": 5,
   "pts": 1.1,
   "opp": "TEN"
  }
 ],
 "EXT-4432577": [
  {
   "week": 1,
   "pts": 16.46,
   "opp": "BUF"
  },
  {
   "week": 2,
   "pts": 20.02,
   "opp": "CIN"
  },
  {
   "week": 3,
   "pts": 11.68,
   "opp": "IND"
  },
  {
   "week": 4,
   "pts": 26.08,
   "opp": "DAL"
  },
  {
   "week": 5,
   "pts": 20.94,
   "opp": "TEN"
  },
  {
   "week": 6,
   "pts": 26.98,
   "opp": "JAX"
  },
  {
   "week": 7,
   "pts": 16.52,
   "opp": "NYG"
  },
  {
   "week": 9,
   "pts": 39.36,
   "opp": "LAC"
  },
  {
   "week": 10,
   "pts": 21.44,
   "opp": "CLE"
  }
 ],
 "EXT-4258173": [
  {
   "week": 1,
   "pts": 17.7,
   "opp": "BUF"
  },
  {
   "week": 4,
   "pts": 30.3,
   "opp": "DAL"
  },
  {
   "week": 5,
   "pts": 8.1,
   "opp": "TEN"
  },
  {
   "week": 6,
   "pts": 9.4,
   "opp": "JAX"
  },
  {
   "week": 7,
   "pts": 1.6,
   "opp": "NYG"
  },
  {
   "week": 9,
   "pts": 13.5,
   "opp": "LAC"
  },
  {
   "week": 10,
   "pts": 19.9,
   "opp": "CLE"
  }
 ],
 "EXT-4429059": [
  {
   "week": 1,
   "pts": 4.5,
   "opp": "BUF"
  },
  {
   "week": 2,
   "pts": 6,
   "opp": "CIN"
  },
  {
   "week": 3,
   "pts": 8.6,
   "opp": "IND"
  },
  {
   "week": 4,
   "pts": 8.2,
   "opp": "DAL"
  },
  {
   "week": 5,
   "pts": 10.5,
   "opp": "TEN"
  },
  {
   "week": 6,
   "pts": 9.1,
   "opp": "JAX"
  },
  {
   "week": 7,
   "pts": 8.6,
   "opp": "NYG"
  },
  {
   "week": 9,
   "pts": 7.9,
   "opp": "LAC"
  },
  {
   "week": 10,
   "pts": 7,
   "opp": "CLE"
  }
 ],
 "EXT-3117256": [
  {
   "week": 1,
   "pts": 5.5,
   "opp": "BUF"
  },
  {
   "week": 2,
   "pts": 23,
   "opp": "CIN"
  },
  {
   "week": 3,
   "pts": 4.5,
   "opp": "IND"
  },
  {
   "week": 4,
   "pts": 1.9,
   "opp": "DAL"
  },
  {
   "week": 5,
   "pts": 4.5,
   "opp": "TEN"
  },
  {
   "week": 6,
   "pts": 5.3,
   "opp": "JAX"
  },
  {
   "week": 7,
   "pts": 7,
   "opp": "NYG"
  },
  {
   "week": 9,
   "pts": 5.2,
   "opp": "LAC"
  },
  {
   "week": 10,
   "pts": 7.6,
   "opp": "CLE"
  }
 ],
 "EXT-4586312": [
  {
   "week": 1,
   "pts": 6.3,
   "opp": "BUF"
  },
  {
   "week": 2,
   "pts": 4.9,
   "opp": "CIN"
  },
  {
   "week": 3,
   "pts": 3.5,
   "opp": "IND"
  },
  {
   "week": 4,
   "pts": 10.4,
   "opp": "DAL"
  },
  {
   "week": 5,
   "pts": 12.7,
   "opp": "TEN"
  },
  {
   "week": 6,
   "pts": 21.7,
   "opp": "JAX"
  },
  {
   "week": 7,
   "pts": 0.7,
   "opp": "NYG"
  }
 ],
 "EXT-4686422": [
  {
   "week": 1,
   "pts": 4.7,
   "opp": "BUF"
  },
  {
   "week": 2,
   "pts": 5.2,
   "opp": "CIN"
  },
  {
   "week": 3,
   "pts": 7,
   "opp": "IND"
  },
  {
   "week": 4,
   "pts": 6.1,
   "opp": "DAL"
  },
  {
   "week": 5,
   "pts": 8.5,
   "opp": "TEN"
  },
  {
   "week": 6,
   "pts": 2,
   "opp": "JAX"
  },
  {
   "week": 7,
   "pts": 10.4,
   "opp": "NYG"
  },
  {
   "week": 9,
   "pts": 10.4,
   "opp": "LAC"
  },
  {
   "week": 10,
   "pts": 13.8,
   "opp": "CLE"
  }
 ],
 "EXT-4695705": [
  {
   "week": 1,
   "pts": 2.1,
   "opp": "BUF"
  }
 ],
 "EXT-4429022": [
  {
   "week": 1,
   "pts": 2.6,
   "opp": "BUF"
  },
  {
   "week": 2,
   "pts": 5.2,
   "opp": "CIN"
  },
  {
   "week": 3,
   "pts": 3.1,
   "opp": "IND"
  },
  {
   "week": 4,
   "pts": 5.1,
   "opp": "DAL"
  },
  {
   "week": 5,
   "pts": 5.3,
   "opp": "TEN"
  },
  {
   "week": 6,
   "pts": 2.6,
   "opp": "JAX"
  },
  {
   "week": 7,
   "pts": 3,
   "opp": "NYG"
  },
  {
   "week": 9,
   "pts": 29.5,
   "opp": "LAC"
  },
  {
   "week": 10,
   "pts": 0,
   "opp": "CLE"
  }
 ],
 "EXT-4430681": [
  {
   "week": 1,
   "pts": 1.7,
   "opp": "BUF"
  },
  {
   "week": 2,
   "pts": 4.3,
   "opp": "CIN"
  },
  {
   "week": 3,
   "pts": 2.5,
   "opp": "IND"
  }
 ],
 "EXT-3843945": [
  {
   "week": 1,
   "pts": 2.5,
   "opp": "BUF"
  },
  {
   "week": 2,
   "pts": 4.4,
   "opp": "CIN"
  },
  {
   "week": 3,
   "pts": 7.7,
   "opp": "IND"
  },
  {
   "week": 4,
   "pts": 0.6,
   "opp": "DAL"
  },
  {
   "week": 5,
   "pts": 1.8,
   "opp": "TEN"
  },
  {
   "week": 6,
   "pts": 13.7,
   "opp": "JAX"
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
  },
  {
   "week": 9,
   "pts": -0.76,
   "opp": "BUF"
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
 "EXT-4426496": [
  {
   "week": 1,
   "pts": 0.3,
   "opp": "BUF"
  },
  {
   "week": 4,
   "pts": 2.5,
   "opp": "DAL"
  },
  {
   "week": 6,
   "pts": 0.5,
   "opp": "JAX"
  },
  {
   "week": 7,
   "pts": 2.4,
   "opp": "NYG"
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
  },
  {
   "week": 9,
   "pts": 2.6,
   "opp": "BUF"
  },
  {
   "week": 10,
   "pts": 12,
   "opp": "GB"
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
  },
  {
   "week": 9,
   "pts": 5.2,
   "opp": "BUF"
  },
  {
   "week": 10,
   "pts": 5.9,
   "opp": "GB"
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
  },
  {
   "week": 9,
   "pts": 5.3,
   "opp": "BUF"
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
  },
  {
   "week": 9,
   "pts": 7.3,
   "opp": "BUF"
  },
  {
   "week": 10,
   "pts": 11.9,
   "opp": "GB"
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
  },
  {
   "week": 9,
   "pts": 0.7,
   "opp": "BUF"
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
  },
  {
   "week": 10,
   "pts": 22.76,
   "opp": "NYG"
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
  },
  {
   "week": 9,
   "pts": 3.8,
   "opp": "BUF"
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
  },
  {
   "week": 10,
   "pts": 5.7,
   "opp": "NYG"
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
  },
  {
   "week": 10,
   "pts": 17.3,
   "opp": "NYG"
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
  },
  {
   "week": 10,
   "pts": 11.2,
   "opp": "NYG"
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
  },
  {
   "week": 10,
   "pts": 4.4,
   "opp": "NYG"
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
  },
  {
   "week": 9,
   "pts": 1.1,
   "opp": "BUF"
  },
  {
   "week": 10,
   "pts": 14.1,
   "opp": "GB"
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
  },
  {
   "week": 10,
   "pts": 12.2,
   "opp": "NYG"
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
  },
  {
   "week": 10,
   "pts": 3.7,
   "opp": "NYG"
  }
 ],
 "EXT-4683151": [
  {
   "week": 2,
   "pts": 1.4,
   "opp": "KC"
  },
  {
   "week": 4,
   "pts": 1.1,
   "opp": "WSH"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "PIT"
  },
  {
   "week": 6,
   "pts": 5.8,
   "opp": "TEN"
  },
  {
   "week": 7,
   "pts": 1.6,
   "opp": "MIN"
  },
  {
   "week": 8,
   "pts": 0.7,
   "opp": "JAX"
  },
  {
   "week": 9,
   "pts": 0.5,
   "opp": "DAL"
  },
  {
   "week": 10,
   "pts": 0,
   "opp": "MIA"
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
 "EXT-4241464": [
  {
   "week": 2,
   "pts": -0.2,
   "opp": "MIA"
  },
  {
   "week": 9,
   "pts": -0.3,
   "opp": "LV"
  }
 ],
 "EXT-4685397": [
  {
   "week": 2,
   "pts": 1.5,
   "opp": "MIA"
  },
  {
   "week": 7,
   "pts": 2.2,
   "opp": "ATL"
  },
  {
   "week": 9,
   "pts": 1.1,
   "opp": "LV"
  }
 ],
 "EXT-16002": [
  {
   "week": 2,
   "pts": 9.7,
   "opp": "MIA"
  },
  {
   "week": 3,
   "pts": 0,
   "opp": "ARI"
  },
  {
   "week": 4,
   "pts": 3.8,
   "opp": "DEN"
  },
  {
   "week": 6,
   "pts": 1.5,
   "opp": "WSH"
  },
  {
   "week": 7,
   "pts": 8.6,
   "opp": "ATL"
  },
  {
   "week": 9,
   "pts": 0.4,
   "opp": "LV"
  }
 ],
 "EXT-4683159": [
  {
   "week": 3,
   "pts": 0,
   "opp": "IND"
  }
 ],
 "EXT-3047876": [
  {
   "week": 2,
   "pts": 2.3,
   "opp": "MIA"
  },
  {
   "week": 9,
   "pts": 2.2,
   "opp": "LV"
  }
 ],
 "EXT-4570738": [
  {
   "week": 3,
   "pts": -2,
   "opp": "PIT"
  }
 ],
 "EXT-2998565": [
  {
   "week": 3,
   "pts": 2.1,
   "opp": "HOU"
  },
  {
   "week": 5,
   "pts": 2.4,
   "opp": "PIT"
  },
  {
   "week": 6,
   "pts": 6.6,
   "opp": "TEN"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "MIN"
  }
 ],
 "EXT-4575665": [
  {
   "week": 3,
   "pts": 0,
   "opp": "ARI"
  },
  {
   "week": 4,
   "pts": 0.2,
   "opp": "DEN"
  },
  {
   "week": 5,
   "pts": -0.6,
   "opp": "SEA"
  },
  {
   "week": 6,
   "pts": 0,
   "opp": "WSH"
  },
  {
   "week": 7,
   "pts": 6.3,
   "opp": "ATL"
  },
  {
   "week": 9,
   "pts": 1,
   "opp": "LV"
  }
 ],
 "EXT-4431466": [
  {
   "week": 3,
   "pts": 7,
   "opp": "ARI"
  },
  {
   "week": 6,
   "pts": 2.7,
   "opp": "WSH"
  },
  {
   "week": 7,
   "pts": 7.1,
   "opp": "ATL"
  },
  {
   "week": 9,
   "pts": 16.6,
   "opp": "LV"
  },
  {
   "week": 10,
   "pts": 5.9,
   "opp": "DAL"
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
  },
  {
   "week": 10,
   "pts": 4.8,
   "opp": "GB"
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
  },
  {
   "week": 10,
   "pts": 7.2,
   "opp": "NYG"
  }
 ],
 "EXT-4432722": [
  {
   "week": 4,
   "pts": 12.04,
   "opp": "IND"
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
  },
  {
   "week": 10,
   "pts": 11.1,
   "opp": "GB"
  }
 ],
 "EXT-4362504": [
  {
   "week": 4,
   "pts": 1.8,
   "opp": "DAL"
  },
  {
   "week": 6,
   "pts": 0.4,
   "opp": "JAX"
  }
 ],
 "EXT-16731": [
  {
   "week": 4,
   "pts": 0,
   "opp": "DEN"
  },
  {
   "week": 5,
   "pts": 7.2,
   "opp": "SEA"
  },
  {
   "week": 6,
   "pts": 1.8,
   "opp": "WSH"
  },
  {
   "week": 7,
   "pts": 1.8,
   "opp": "ATL"
  },
  {
   "week": 9,
   "pts": 3.5,
   "opp": "LV"
  }
 ],
 "EXT-4360290": [
  {
   "week": 4,
   "pts": 0,
   "opp": "DEN"
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
  },
  {
   "week": 9,
   "pts": 0,
   "opp": "BUF"
  },
  {
   "week": 10,
   "pts": 1.2,
   "opp": "GB"
  }
 ],
 "EXT-3929785": [
  {
   "week": 5,
   "pts": 0,
   "opp": "PIT"
  },
  {
   "week": 10,
   "pts": 0,
   "opp": "MIA"
  }
 ],
 "EXT-4432708": [
  {
   "week": 6,
   "pts": 4.9,
   "opp": "JAX"
  },
  {
   "week": 7,
   "pts": 7.1,
   "opp": "NYG"
  },
  {
   "week": 9,
   "pts": 3,
   "opp": "LAC"
  }
 ],
 "EXT-4429939": [
  {
   "week": 6,
   "pts": 11.5,
   "opp": "JAX"
  }
 ],
 "EXT-2971281": [
  {
   "week": 6,
   "pts": 1.2,
   "opp": "TEN"
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
 "EXT-4362523": [
  {
   "week": 6,
   "pts": 3,
   "opp": "TEN"
  },
  {
   "week": 7,
   "pts": 0,
   "opp": "MIN"
  }
 ],
 "EXT-4878695": [
  {
   "week": 7,
   "pts": 0,
   "opp": "IND"
  },
  {
   "week": 10,
   "pts": 0,
   "opp": "GB"
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
 "EXT-4366031": [
  {
   "week": 7,
   "pts": 5,
   "opp": "NYG"
  },
  {
   "week": 9,
   "pts": 21.5,
   "opp": "LAC"
  },
  {
   "week": 10,
   "pts": 3.6,
   "opp": "CLE"
  }
 ],
 "EXT-4429299": [
  {
   "week": 7,
   "pts": 0.6,
   "opp": "BAL"
  },
  {
   "week": 10,
   "pts": 1.2,
   "opp": "PIT"
  }
 ],
 "EXT-4429084": [
  {
   "week": 8,
   "pts": 0.72,
   "opp": "JAX"
  }
 ],
 "EXT-4874509": [
  {
   "week": 8,
   "pts": 4.3,
   "opp": "JAX"
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
  },
  {
   "week": 10,
   "pts": 0.9,
   "opp": "PIT"
  }
 ],
 "EXT-4429684": [
  {
   "week": 9,
   "pts": 2.1,
   "opp": "DAL"
  },
  {
   "week": 10,
   "pts": 3.8,
   "opp": "MIA"
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
 "EXT-4242546": [
  {
   "week": 9,
   "pts": 0.08,
   "opp": "LAC"
  }
 ],
 "EXT-4683111": [
  {
   "week": 9,
   "pts": 1.7,
   "opp": "LAR"
  }
 ],
 "EXT-4362478": [
  {
   "week": 9,
   "pts": 2.9,
   "opp": "LAC"
  },
  {
   "week": 10,
   "pts": 2,
   "opp": "CLE"
  }
 ],
 "EXT-4573398": [
  {
   "week": 9,
   "pts": 2.32,
   "opp": "BUF"
  }
 ],
 "EXT-2983509": [
  {
   "week": 9,
   "pts": 0.8,
   "opp": "LAC"
  },
  {
   "week": 10,
   "pts": 2,
   "opp": "CLE"
  }
 ],
 "EXT-14880": [
  {
   "week": 10,
   "pts": 16.38,
   "opp": "GB"
  }
 ],
 "EXT-5151317": [
  {
   "week": 10,
   "pts": 0.4,
   "opp": "NYG"
  }
 ],
 "EXT-DEF-IND": [
  {
   "week": 1,
   "pts": 0,
   "opp": "BAL"
  },
  {
   "week": 2,
   "pts": 1,
   "opp": "KC"
  },
  {
   "week": 3,
   "pts": 4,
   "opp": "HOU"
  },
  {
   "week": 4,
   "pts": 8,
   "opp": "WSH"
  },
  {
   "week": 5,
   "pts": 0,
   "opp": "PIT"
  },
  {
   "week": 6,
   "pts": 4,
   "opp": "TEN"
  },
  {
   "week": 7,
   "pts": 6,
   "opp": "MIN"
  },
  {
   "week": 8,
   "pts": 1,
   "opp": "JAX"
  },
  {
   "week": 9,
   "pts": 7,
   "opp": "DAL"
  },
  {
   "week": 10,
   "pts": 12,
   "opp": "MIA"
  }
 ],
 "EXT-DEF-HOU": [
  {
   "week": 1,
   "pts": -2,
   "opp": "BUF"
  },
  {
   "week": 2,
   "pts": 6,
   "opp": "CIN"
  },
  {
   "week": 3,
   "pts": 11,
   "opp": "IND"
  },
  {
   "week": 4,
   "pts": 4,
   "opp": "DAL"
  },
  {
   "week": 5,
   "pts": 15,
   "opp": "TEN"
  },
  {
   "week": 6,
   "pts": 1,
   "opp": "JAX"
  },
  {
   "week": 7,
   "pts": 3,
   "opp": "NYG"
  },
  {
   "week": 9,
   "pts": 12,
   "opp": "LAC"
  },
  {
   "week": 10,
   "pts": 6,
   "opp": "CLE"
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
  },
  {
   "week": 9,
   "pts": 6,
   "opp": "BUF"
  },
  {
   "week": 10,
   "pts": 20,
   "opp": "GB"
  }
 ],
 "EXT-DEF-SF": [
  {
   "week": 1,
   "pts": 8,
   "opp": "LAR"
  },
  {
   "week": 2,
   "pts": 8,
   "opp": "MIA"
  },
  {
   "week": 3,
   "pts": 1,
   "opp": "ARI"
  },
  {
   "week": 4,
   "pts": 3,
   "opp": "DEN"
  },
  {
   "week": 5,
   "pts": 18,
   "opp": "SEA"
  },
  {
   "week": 6,
   "pts": 5,
   "opp": "WSH"
  },
  {
   "week": 7,
   "pts": -1,
   "opp": "ATL"
  },
  {
   "week": 9,
   "pts": 17,
   "opp": "LV"
  },
  {
   "week": 10,
   "pts": 1,
   "opp": "DAL"
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
  },
  {
   "week": 10,
   "pts": 4,
   "opp": "PIT"
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
  },
  {
   "week": 10,
   "pts": 5,
   "opp": "NYG"
  }
 ]
};
