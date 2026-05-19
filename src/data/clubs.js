// CLUBS: array of club objects
// Each club has: id (camelCase), name (display), league, flag, crestId

export const CLUBS = [
  // Premier League
  { id: "arsenalFC",               name: "Arsenal",                   league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 57 },
  { id: "chelseaFC",               name: "Chelsea",                   league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 61 },
  { id: "liverpoolFC",             name: "Liverpool",                 league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 64 },
  { id: "manchesterCityFC",        name: "Manchester City",           league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 65 },
  { id: "manchesterUnitedFC",      name: "Manchester United",         league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 66 },
  { id: "tottenhamHotspurFC",      name: "Tottenham Hotspur",         league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 73 },
  { id: "newcastleUnitedFC",       name: "Newcastle United",          league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 67 },
  { id: "astonVillaFC",            name: "Aston Villa",               league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 58 },
  { id: "evertonFC",               name: "Everton",                   league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 62 },
  { id: "leicesterCityFC",         name: "Leicester City",            league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 338 },
  { id: "westHamUnitedFC",         name: "West Ham United",           league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 563 },
  { id: "blackburnRoversFC",       name: "Blackburn Rovers",          league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 59 },
  { id: "fulhamFC",                name: "Fulham",                    league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 63 },
  { id: "leedsUnitedFC",           name: "Leeds United",              league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 341 },
  { id: "sunderlandAFC",           name: "Sunderland",                league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 71 },
  { id: "boltonWanderersFC",       name: "Bolton Wanderers",          league: "ENG 3", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 332 },
  { id: "portsmouthFC",            name: "Portsmouth",                league: "ENG 4", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 69 },
  { id: "birminghamCityFC",        name: "Birmingham City",           league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 331 },
  { id: "nottinghamForestFC",      name: "Nottingham Forest",         league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 351 },
  { id: "crystalPalaceFC",         name: "Crystal Palace",            league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 354 },
  { id: "southamptonFC",           name: "Southampton",               league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 340 },
  { id: "middlesbroughFC",         name: "Middlesbrough",             league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 343 },
  { id: "stokeCityFC",             name: "Stoke City",                league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 70 },
  { id: "coventryCityFC",          name: "Coventry City",             league: "ENG 3", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 333 },
  { id: "ipswichTownFC",           name: "Ipswich Town",              league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 339 },
  { id: "derbyCountyFC",           name: "Derby County",              league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 342 },
  { id: "charltonAthleticFC",      name: "Charlton Athletic",         league: "ENG 3", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 60 },
  { id: "bournemouthAFC",          name: "Bournemouth",               league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 1044 },
  { id: "wolverhamptonWanderersFC",name: "Wolverhampton Wanderers",   league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 76 },
  { id: "westBromwichAlbionFC",    name: "West Bromwich Albion",      league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 74 },
  { id: "swanseaCityAFC",          name: "Swansea City",              league: "ENG 2", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", crestId: 72 },
  { id: "queensParkRangersFC",     name: "Queens Park Rangers",       league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 69 },
  { id: "norwichCityFC",           name: "Norwich City",              league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 68 },
  { id: "prestonNorthEndFC",       name: "Preston North End",         league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 1081 },

  // La Liga
  { id: "realMadridCF",            name: "Real Madrid",               league: "ESP 1", flag: "🇪🇸", crestId: 86 },
  { id: "fcBarcelona",             name: "Barcelona",                 league: "ESP 1", flag: "🇪🇸", crestId: 81 },
  { id: "atleticoMadrid",          name: "Atletico Madrid",           league: "ESP 1", flag: "🇪🇸", crestId: 78 },
  { id: "valenciaFC",              name: "Valencia",                  league: "ESP 1", flag: "🇪🇸", crestId: 95 },
  { id: "sevillaFC",               name: "Sevilla",                   league: "ESP 1", flag: "🇪🇸", crestId: 559 },
  { id: "villarrealCF",            name: "Villarreal",                league: "ESP 1", flag: "🇪🇸", crestId: 449 },
  { id: "deportivoLaCoruna",       name: "Deportivo La Coruna",       league: "ESP 2", flag: "🇪🇸", crestId: 559 },
  { id: "realSociedadFC",          name: "Real Sociedad",             league: "ESP 1", flag: "🇪🇸", crestId: 92 },
  { id: "celtaVigoSD",             name: "Celta Vigo",                league: "ESP 1", flag: "🇪🇸", crestId: 558 },
  { id: "athleticBilbaoFC",        name: "Athletic Bilbao",           league: "ESP 1", flag: "🇪🇸", crestId: 77 },
  { id: "realZaragozaFC",          name: "Zaragoza",                  league: "ESP 2", flag: "🇪🇸", crestId: 97 },
  { id: "malagaCF",                name: "Malaga",                    league: "ESP 2", flag: "🇪🇸", crestId: 84 },
  { id: "realValladolidCF",        name: "Valladolid",                league: "ESP 1", flag: "🇪🇸", crestId: 94 },

  // Serie A
  { id: "juventusFC",              name: "Juventus",                  league: "ITA 1", flag: "🇮🇹", crestId: 109 },
  { id: "acMilan",                 name: "AC Milan",                  league: "ITA 1", flag: "🇮🇹", crestId: 98 },
  { id: "interMilan",              name: "Inter Milan",               league: "ITA 1", flag: "🇮🇹", crestId: 108 },
  { id: "asRoma",                  name: "Roma",                      league: "ITA 1", flag: "🇮🇹", crestId: 100 },
  { id: "ssLazio",                 name: "Lazio",                     league: "ITA 1", flag: "🇮🇹", crestId: 110 },
  { id: "acfFiorentina",           name: "Fiorentina",                league: "ITA 1", flag: "🇮🇹", crestId: 99 },
  { id: "parmaCalcio",             name: "Parma",                     league: "ITA 2", flag: "🇮🇹", crestId: 111 },
  { id: "ssNapoli",                name: "Napoli",                    league: "ITA 1", flag: "🇮🇹", crestId: 113 },
  { id: "ucSampdoria",             name: "Sampdoria",                 league: "ITA 1", flag: "🇮🇹", crestId: 101 },
  { id: "atalantaBC",              name: "Atalanta",                  league: "ITA 1", flag: "🇮🇹", crestId: 102 },
  { id: "bolognaFC",               name: "Bologna",                   league: "ITA 1", flag: "🇮🇹", crestId: 103 },
  { id: "udineseCalcio",           name: "Udinese",                   league: "ITA 1", flag: "🇮🇹", crestId: 115 },
  { id: "cagliariCalcio",          name: "Cagliari",                  league: "ITA 1", flag: "🇮🇹", crestId: 1106 },
  { id: "torinoFC",                name: "Torino",                    league: "ITA 1", flag: "🇮🇹", crestId: 586 },
  { id: "veneziaFC",               name: "Venezia",                   league: "ITA 1", flag: "🇮🇹", crestId: 454 },
  { id: "hellasVeronaFC",          name: "Hellas Verona",             league: "ITA 1", flag: "🇮🇹", crestId: 450 },
  { id: "bresciaCalcio",           name: "Brescia",                   league: "ITA 2", flag: "🇮🇹", crestId: 104 },
  { id: "beneventoCalcio",         name: "Benevento",                 league: "ITA 2", flag: "🇮🇹", crestId: 1107 },
  { id: "comoFC",                  name: "Como",                      league: "ITA 1", flag: "🇮🇹", crestId: 105 },

  // Bundesliga
  { id: "bayernMunichFC",          name: "Bayern Munich",             league: "GER 1", flag: "🇩🇪", crestId: 5 },
  { id: "borussiaD",               name: "Borussia Dortmund",         league: "GER 1", flag: "🇩🇪", crestId: 4 },
  { id: "bayerLeverkusen",         name: "Bayer Leverkusen",          league: "GER 1", flag: "🇩🇪", crestId: 3 },
  { id: "vflWolfsburg",            name: "Wolfsburg",                 league: "GER 1", flag: "🇩🇪", crestId: 11 },
  { id: "fcSchalke04",             name: "Schalke 04",                league: "GER 2", flag: "🇩🇪", crestId: 10 },
  { id: "hamburgerSV",             name: "Hamburg",                   league: "GER 2", flag: "🇩🇪", crestId: 6 },
  { id: "eintrachtFrankfurt",      name: "Eintracht Frankfurt",       league: "GER 1", flag: "🇩🇪", crestId: 19 },
  { id: "borussiaM",               name: "Borussia Monchengladbach",  league: "GER 1", flag: "🇩🇪", crestId: 18 },
  { id: "werderBremen",            name: "Werder Bremen",             league: "GER 2", flag: "🇩🇪", crestId: 12 },
  { id: "vfbStuttgart",            name: "VfB Stuttgart",             league: "GER 1", flag: "🇩🇪", crestId: 8 },
  { id: "kaiserslauternFC",        name: "Kaiserslautern",            league: "GER 3", flag: "🇩🇪", crestId: 7 },
  { id: "mainz05",                 name: "Mainz",                     league: "GER 1", flag: "🇩🇪", crestId: 15 },

  // Ligue 1
  { id: "psg",                     name: "PSG",                       league: "FRA 1", flag: "🇫🇷", crestId: 524 },
  { id: "asMonaco",                name: "Monaco",                    league: "FRA 1", flag: "🇫🇷", crestId: 548 },
  { id: "olympiqueMarseille",      name: "Marseille",                 league: "FRA 1", flag: "🇫🇷", crestId: 516 },
  { id: "olympiqueLyon",           name: "Lyon",                      league: "FRA 1", flag: "🇫🇷", crestId: 523 },
  { id: "girondinsDeB",            name: "Bordeaux",                  league: "FRA 4", flag: "🇫🇷", crestId: 514 },
  { id: "montpellierHSC",          name: "Montpellier",               league: "FRA 1", flag: "🇫🇷", crestId: 514 },
  { id: "eaGuingamp",              name: "Guingamp",                  league: "FRA 2", flag: "🇫🇷", crestId: 521 },
  { id: "stadeRennais",            name: "Rennes",                    league: "FRA 1", flag: "🇫🇷", crestId: 519 },
  { id: "stEtienne",               name: "Saint-Etienne",             league: "FRA 2", flag: "🇫🇷", crestId: 527 },
  { id: "lilleOSC",                name: "Lille",                     league: "FRA 1", flag: "🇫🇷", crestId: 521 },
  { id: "cannesFC",                name: "Cannes",                    league: "FRA 3", flag: "🇫🇷", crestId: 515 },

  // Eredivisie
  { id: "ajaxAmsterdam",           name: "Ajax",                      league: "NED 1", flag: "🇳🇱", crestId: 678 },
  { id: "psvEindhoven",            name: "PSV Eindhoven",             league: "NED 1", flag: "🇳🇱", crestId: 674 },
  { id: "feyenoord",               name: "Feyenoord",                 league: "NED 1", flag: "🇳🇱", crestId: 675 },
  { id: "fcGroningen",             name: "Groningen",                 league: "NED 1", flag: "🇳🇱", crestId: 683 },
  { id: "vitesse",                 name: "Vitesse",                   league: "NED 2", flag: "🇳🇱", crestId: 677 },

  // Portuguese
  { id: "slBenfica",               name: "Benfica",                   league: "POR 1", flag: "🇵🇹", crestId: 1793 },
  { id: "fcPorto",                 name: "Porto",                     league: "POR 1", flag: "🇵🇹", crestId: 496 },
  { id: "sportingCP",              name: "Sporting CP",               league: "POR 1", flag: "🇵🇹", crestId: 498 },

  // Scottish
  { id: "celticFC",                name: "Celtic",                    league: "SCO 1", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", crestId: 264 },
  { id: "rangersFC",               name: "Rangers",                   league: "SCO 1", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", crestId: 272 },
  { id: "kilmarnockFC",            name: "Kilmarnock",                league: "SCO 1", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", crestId: 267 },
  { id: "rosenborg",               name: "Rosenborg",                 league: "NOR 1", flag: "🇳🇴", crestId: 1761 },

  // Turkish
  { id: "galatasaray",             name: "Galatasaray",               league: "TUR 1", flag: "🇹🇷", crestId: 2637 },
  { id: "fenerbahce",              name: "Fenerbahce",                league: "TUR 1", flag: "🇹🇷", crestId: 2636 },
  { id: "besiktas",                name: "Besiktas",                  league: "TUR 1", flag: "🇹🇷", crestId: 2635 },
  { id: "basaksehir",              name: "Basaksehir",                league: "TUR 1", flag: "🇹🇷", crestId: 2638 },

  // Russian / Eastern Europe
  { id: "zenitStPetersburg",       name: "Zenit Saint Petersburg",    league: "RUS 1", flag: "🇷🇺", crestId: 610 },
  { id: "shaktarDonetsk",          name: "Shakhtar Donetsk",          league: "UKR 1", flag: "🇺🇦", crestId: 678 },
  { id: "dynamoKyiv",              name: "Dynamo Kyiv",               league: "UKR 1", flag: "🇺🇦", crestId: 678 },
  { id: "anzhiMakhachkala",        name: "Anzhi Makhachkala",         league: "RUS 1", flag: "🇷🇺", crestId: 617 },

  // Greek
  { id: "olympiakos",              name: "Olympiakos",                league: "GRE 1", flag: "🇬🇷", crestId: 1874 },
  { id: "paok",                    name: "PAOK",                      league: "GRE 1", flag: "🇬🇷", crestId: 1877 },

  // South American
  { id: "bocaJuniors",             name: "Boca Juniors",              league: "ARG 1", flag: "🇦🇷", crestId: 5856 },
  { id: "riverPlate",              name: "River Plate",               league: "ARG 1", flag: "🇦🇷", crestId: 5840 },
  { id: "independiente",           name: "Independiente",             league: "ARG 1", flag: "🇦🇷", crestId: 5842 },
  { id: "estudiantesLP",           name: "Estudiantes",               league: "ARG 1", flag: "🇦🇷", crestId: 5843 },
  { id: "santosFC",                name: "Santos",                    league: "BRA 1", flag: "🇧🇷", crestId: 1755 },
  { id: "flamengo",                name: "Flamengo",                  league: "BRA 1", flag: "🇧🇷", crestId: 1749 },
  { id: "atleticoMineiro",         name: "Atletico Mineiro",          league: "BRA 1", flag: "🇧🇷", crestId: 1750 },
  { id: "saoPauloFC",              name: "Sao Paulo",                 league: "BRA 1", flag: "🇧🇷", crestId: 1754 },
  { id: "cruzeiroEC",              name: "Cruzeiro",                  league: "BRA 1", flag: "🇧🇷", crestId: 1748 },
  { id: "scCorinthians",           name: "Corinthians",               league: "BRA 1", flag: "🇧🇷", crestId: 1762 },
  { id: "botafogo",                name: "Botafogo",                  league: "BRA 1", flag: "🇧🇷", crestId: 1747 },
  { id: "coloColo",                name: "Colo-Colo",                 league: "CHI 1", flag: "🇨🇱", crestId: 5839 },
  { id: "alianzaLima",             name: "Alianza Lima",              league: "PER 1", flag: "🇵🇪", crestId: 5860 },
  { id: "clubNacional",            name: "Nacional",                  league: "URU 1", flag: "🇺🇾", crestId: 1800 },

  // Eastern Europe
  { id: "redStarBelgrade",         name: "Red Star Belgrade",         league: "SRB 1", flag: "🇷🇸", crestId: 1935 },
  { id: "partizanBelgrade",        name: "Partizan",                  league: "SRB 1", flag: "🇷🇸", crestId: 1940 },
  { id: "dinamoZagreb",            name: "Dinamo Zagreb",             league: "CRO 1", flag: "🇭🇷", crestId: 1922 },
  { id: "spartaPrague",            name: "Sparta Prague",             league: "CZE 1", flag: "🇨🇿", crestId: 553 },
  { id: "brondbyIF",               name: "Brondby",                   league: "DEN 1", flag: "🇩🇰", crestId: 1783 },
  { id: "malmoeFF",                name: "Malmo",                     league: "SWE 1", flag: "🇸🇪", crestId: 337 },
  { id: "ifkHelsingborg",          name: "Helsingborg",               league: "SWE 1", flag: "🇸🇪", crestId: 337 },
  { id: "fcSion",                  name: "Sion",                      league: "SUI 1", flag: "🇨🇭", crestId: 1942 },
  { id: "lecPoznan",               name: "Lech Poznan",               league: "POL 1", flag: "🇵🇱", crestId: 563 },

  // MLS
  { id: "laGalaxy",                name: "LA Galaxy",                 league: "MLS",   flag: "🇺🇸", crestId: 1674 },
  { id: "newYorkRedBulls",         name: "New York Red Bulls",        league: "MLS",   flag: "🇺🇸", crestId: 1675 },
  { id: "newYorkCityFC",           name: "New York City FC",          league: "MLS",   flag: "🇺🇸", crestId: 18514 },
  { id: "dcUnited",                name: "DC United",                 league: "MLS",   flag: "🇺🇸", crestId: 1670 },
  { id: "seattleSounders",         name: "Seattle Sounders",          league: "MLS",   flag: "🇺🇸", crestId: 1692 },
  { id: "cfMontreal",              name: "Montreal Impact",           league: "MLS",   flag: "🇨🇦", crestId: 1686 },
  { id: "losAngelesFC",            name: "Los Angeles FC",            league: "MLS",   flag: "🇺🇸", crestId: 1680 },
  { id: "interMiami",              name: "Inter Miami",               league: "MLS",   flag: "🇺🇸", crestId: 1684 },

  // Middle East / Asia / Australia
  { id: "alSadd",                  name: "Al Sadd",                   league: "QAT 1", flag: "🇶🇦", crestId: 1817 },
  { id: "alHilal",                 name: "Al Hilal",                  league: "SAU 1", flag: "🇸🇦", crestId: 1817 },
  { id: "alIttihad",               name: "Al-Ittihad",                league: "SAU 1", flag: "🇸🇦", crestId: 1817 },
  { id: "alEttifaq",               name: "Al Ettifaq",                league: "SAU 1", flag: "🇸🇦", crestId: 1817 },
  { id: "visselKobe",              name: "Vissel Kobe",               league: "JPN 1", flag: "🇯🇵", crestId: 2117 },
  { id: "sydneyFC",                name: "Sydney FC",                 league: "AUS 1", flag: "🇦🇺", crestId: 1851 },
  { id: "melbourneCity",           name: "Melbourne City",            league: "AUS 1", flag: "🇦🇺", crestId: 1850 },
  { id: "monterreyFC",             name: "Monterrey",                 league: "MEX 1", flag: "🇲🇽", crestId: 1827 },
  { id: "genk",                    name: "Genk",                      league: "BEL 1", flag: "🇧🇪", crestId: 471 },
];

// Lookup maps for convenience
export const CLUB_BY_ID   = Object.fromEntries(CLUBS.map(c => [c.id, c]));
export const CLUB_BY_NAME = Object.fromEntries(CLUBS.map(c => [c.name, c]));