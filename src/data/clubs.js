// CLUB_META: clubName -> { league, flag, crestId }
// crestId maps to https://crests.football-data.org/{id}.png

import { UNIQUE_PLAYERS } from './players';

/**
 * Build sorted list of all clubs that appear in player data.
 * Imported here to avoid circular dep — gameLogic.js is the authority.
 */
export { UNIQUE_PLAYERS };

export const CLUB_META = {
  // Premier League
  "Arsenal":              { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 57 },
  "Chelsea":              { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 61 },
  "Liverpool":            { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 64 },
  "Manchester City":      { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 65 },
  "Manchester United":    { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 66 },
  "Tottenham Hotspur":    { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 73 },
  "Newcastle United":     { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 67 },
  "Aston Villa":          { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 58 },
  "Everton":              { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 62 },
  "Leicester City":       { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 338 },
  "West Ham United":      { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 563 },
  "Blackburn Rovers":     { league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 59 },
  "Fulham":               { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 63 },
  "Leeds United":         { league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 341 },
  "Sunderland":           { league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 71 },
  "Bolton Wanderers":     { league: "ENG 3", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 332 },
  "Portsmouth":           { league: "ENG 4", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 69 },
  "Birmingham City":      { league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 331 },
  "Nottingham Forest":    { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 351 },
  "Crystal Palace":       { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 354 },
  "Southampton":          { league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 340 },
  "Middlesbrough":        { league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 343 },
  "Stoke City":           { league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 70 },
  "Coventry City":        { league: "ENG 3", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 333 },
  "Ipswich Town":         { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 339 },
  "Derby County":         { league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 342 },
  "Charlton Athletic":    { league: "ENG 3", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 60 },
  "Bournemouth":          { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 1044 },
  "Wolverhampton Wanderers": { league: "ENG 1", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 76 },
  "West Bromwich Albion": { league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 74 },
  "Swansea City":         { league: "ENG 2", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", crestId: 72 },
  "Queens Park Rangers":  { league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 69 },
  "Norwich City":         { league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 68 },
  "Preston North End":    { league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 1081 },

  // La Liga
  "Real Madrid":          { league: "ESP 1", flag: "🇪🇸", crestId: 86 },
  "Barcelona":            { league: "ESP 1", flag: "🇪🇸", crestId: 81 },
  "Atletico Madrid":      { league: "ESP 1", flag: "🇪🇸", crestId: 78 },
  "Valencia":             { league: "ESP 1", flag: "🇪🇸", crestId: 95 },
  "Sevilla":              { league: "ESP 1", flag: "🇪🇸", crestId: 559 },
  "Villarreal":           { league: "ESP 1", flag: "🇪🇸", crestId: 449 },
  "Deportivo La Coruna":  { league: "ESP 2", flag: "🇪🇸", crestId: 559 },
  "Real Sociedad":        { league: "ESP 1", flag: "🇪🇸", crestId: 92 },
  "Celta Vigo":           { league: "ESP 1", flag: "🇪🇸", crestId: 558 },
  "Athletic Bilbao":      { league: "ESP 1", flag: "🇪🇸", crestId: 77 },
  "Zaragoza":             { league: "ESP 2", flag: "🇪🇸", crestId: 97 },
  "Malaga":               { league: "ESP 2", flag: "🇪🇸", crestId: 84 },
  "Valladolid":           { league: "ESP 1", flag: "🇪🇸", crestId: 94 },
  "Monterrey":            { league: "MEX 1", flag: "🇲🇽", crestId: 1827 },

  // Serie A
  "Juventus":             { league: "ITA 1", flag: "🇮🇹", crestId: 109 },
  "AC Milan":             { league: "ITA 1", flag: "🇮🇹", crestId: 98 },
  "Inter Milan":          { league: "ITA 1", flag: "🇮🇹", crestId: 108 },
  "Roma":                 { league: "ITA 1", flag: "🇮🇹", crestId: 100 },
  "Lazio":                { league: "ITA 1", flag: "🇮🇹", crestId: 110 },
  "Fiorentina":           { league: "ITA 1", flag: "🇮🇹", crestId: 99 },
  "Parma":                { league: "ITA 2", flag: "🇮🇹", crestId: 111 },
  "Napoli":               { league: "ITA 1", flag: "🇮🇹", crestId: 113 },
  "Sampdoria":            { league: "ITA 1", flag: "🇮🇹", crestId: 101 },
  "Atalanta":             { league: "ITA 1", flag: "🇮🇹", crestId: 102 },
  "Bologna":              { league: "ITA 1", flag: "🇮🇹", crestId: 103 },
  "Udinese":              { league: "ITA 1", flag: "🇮🇹", crestId: 115 },
  "Cagliari":             { league: "ITA 1", flag: "🇮🇹", crestId: 1106 },
  "Torino":               { league: "ITA 1", flag: "🇮🇹", crestId: 586 },
  "Venezia":              { league: "ITA 1", flag: "🇮🇹", crestId: 454 },
  "Verona":               { league: "ITA 1", flag: "🇮🇹", crestId: 450 },
  "Hellas Verona":        { league: "ITA 1", flag: "🇮🇹", crestId: 450 },
  "Brescia":              { league: "ITA 2", flag: "🇮🇹", crestId: 104 },
  "Benevento":            { league: "ITA 2", flag: "🇮🇹", crestId: 1107 },
  "Como":                 { league: "ITA 1", flag: "🇮🇹", crestId: 105 },

  // Bundesliga
  "Bayern Munich":        { league: "GER 1", flag: "🇩🇪", crestId: 5 },
  "Borussia Dortmund":    { league: "GER 1", flag: "🇩🇪", crestId: 4 },
  "Bayer Leverkusen":     { league: "GER 1", flag: "🇩🇪", crestId: 3 },
  "Wolfsburg":            { league: "GER 1", flag: "🇩🇪", crestId: 11 },
  "Schalke 04":           { league: "GER 2", flag: "🇩🇪", crestId: 10 },
  "Hamburg":              { league: "GER 2", flag: "🇩🇪", crestId: 6 },
  "Eintracht Frankfurt":  { league: "GER 1", flag: "🇩🇪", crestId: 19 },
  "Borussia Monchengladbach": { league: "GER 1", flag: "🇩🇪", crestId: 18 },
  "Werder Bremen":        { league: "GER 2", flag: "🇩🇪", crestId: 12 },
  "VfB Stuttgart":        { league: "GER 1", flag: "🇩🇪", crestId: 8 },
  "Kaiserslautern":       { league: "GER 3", flag: "🇩🇪", crestId: 7 },
  "Karlsruhe":            { league: "GER 3", flag: "🇩🇪", crestId: 1867 },
  "Mainz":                { league: "GER 1", flag: "🇩🇪", crestId: 15 },

  // Ligue 1
  "PSG":                  { league: "FRA 1", flag: "🇫🇷", crestId: 524 },
  "Monaco":               { league: "FRA 1", flag: "🇫🇷", crestId: 548 },
  "Marseille":            { league: "FRA 1", flag: "🇫🇷", crestId: 516 },
  "Lyon":                 { league: "FRA 1", flag: "🇫🇷", crestId: 523 },
  "Bordeaux":             { league: "FRA 4", flag: "🇫🇷", crestId: 514 },
  "Montpellier":          { league: "FRA 1", flag: "🇫🇷", crestId: 514 },
  "Guingamp":             { league: "FRA 2", flag: "🇫🇷", crestId: 521 },
  "Le Mans":              { league: "FRA 3", flag: "🇫🇷", crestId: 521 },
  "Bastia":               { league: "FRA 2", flag: "🇫🇷", crestId: 518 },
  "Toulouse":             { league: "FRA 1", flag: "🇫🇷", crestId: 519 },
  "Saint-Etienne":        { league: "FRA 2", flag: "🇫🇷", crestId: 527 },
  "Lens":                 { league: "FRA 1", flag: "🇫🇷", crestId: 522 },
  "Cannes":               { league: "FRA 3", flag: "🇫🇷", crestId: 515 },
  "Lille":                { league: "FRA 1", flag: "🇫🇷", crestId: 521 },

  // Eredivisie
  "Ajax":                 { league: "NED 1", flag: "🇳🇱", crestId: 678 },
  "PSV Eindhoven":        { league: "NED 1", flag: "🇳🇱", crestId: 674 },
  "Feyenoord":            { league: "NED 1", flag: "🇳🇱", crestId: 675 },
  "Groningen":            { league: "NED 1", flag: "🇳🇱", crestId: 683 },
  "Roda JC":              { league: "NED 2", flag: "🇳🇱", crestId: 676 },
  "Vitesse":              { league: "NED 2", flag: "🇳🇱", crestId: 677 },
  "Twente":               { league: "NED 1", flag: "🇳🇱", crestId: 679 },

  // Portuguese
  "Benfica":              { league: "POR 1", flag: "🇵🇹", crestId: 1793 },
  "Porto":                { league: "POR 1", flag: "🇵🇹", crestId: 496 },
  "Sporting CP":          { league: "POR 1", flag: "🇵🇹", crestId: 498 },
  "Nacional":             { league: "POR 1", flag: "🇵🇹", crestId: 1800 },

  // Scottish
  "Celtic":               { league: "SCO 1", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", crestId: 264 },
  "Rangers":              { league: "SCO 1", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", crestId: 272 },
  "Kilmarnock":           { league: "SCO 1", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", crestId: 267 },
  "Heart of Midlothian":  { league: "SCO 1", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", crestId: 265 },
  "Rosenborg":            { league: "NOR 1", flag: "🇳🇴", crestId: 1761 },

  // Turkish
  "Galatasaray":          { league: "TUR 1", flag: "🇹🇷", crestId: 2637 },
  "Fenerbahce":           { league: "TUR 1", flag: "🇹🇷", crestId: 2636 },
  "Besiktas":             { league: "TUR 1", flag: "🇹🇷", crestId: 2635 },
  "Basaksehir":           { league: "TUR 1", flag: "🇹🇷", crestId: 2638 },

  // Russian
  "Zenit Saint Petersburg": { league: "RUS 1", flag: "🇷🇺", crestId: 610 },
  "Kuban Krasnodar":      { league: "RUS 1", flag: "🇷🇺", crestId: 617 },
  "Anzhi Makhachkala":    { league: "RUS 1", flag: "🇷🇺", crestId: 617 },
  "Metalurh Donetsk":     { league: "UKR 1", flag: "🇺🇦", crestId: 678 },
  "Shakhtar Donetsk":     { league: "UKR 1", flag: "🇺🇦", crestId: 678 },
  "Dynamo Kyiv":          { league: "UKR 1", flag: "🇺🇦", crestId: 678 },

  // Greek
  "Olympiakos":           { league: "GRE 1", flag: "🇬🇷", crestId: 1874 },
  "PAOK":                 { league: "GRE 1", flag: "🇬🇷", crestId: 1877 },

  // South American
  "Boca Juniors":         { league: "ARG 1", flag: "🇦🇷", crestId: 5856 },
  "River Plate":          { league: "ARG 1", flag: "🇦🇷", crestId: 5840 },
  "Independiente":        { league: "ARG 1", flag: "🇦🇷", crestId: 5842 },
  "Estudiantes":          { league: "ARG 1", flag: "🇦🇷", crestId: 5843 },
  "Atletico Bucaramanga": { league: "COL 1", flag: "🇨🇴", crestId: 5856 },
  "Deportivo Cali":       { league: "COL 1", flag: "🇨🇴", crestId: 5856 },
  "Santos":               { league: "BRA 1", flag: "🇧🇷", crestId: 1755 },
  "Flamengo":             { league: "BRA 1", flag: "🇧🇷", crestId: 1749 },
  "Atletico Mineiro":     { league: "BRA 1", flag: "🇧🇷", crestId: 1750 },
  "Sao Paulo":            { league: "BRA 1", flag: "🇧🇷", crestId: 1754 },
  "Cruzeiro":             { league: "BRA 1", flag: "🇧🇷", crestId: 1748 },
  "Corinthians":          { league: "BRA 1", flag: "🇧🇷", crestId: 1762 },
  "Botafogo":             { league: "BRA 1", flag: "🇧🇷", crestId: 1747 },
  "Colo-Colo":            { league: "CHI 1", flag: "🇨🇱", crestId: 5839 },
  "Alianza Lima":         { league: "PER 1", flag: "🇵🇪", crestId: 5860 },
  "Nacional":             { league: "URU 1", flag: "🇺🇾", crestId: 1800 },
  "Lech Poznan":          { league: "POL 1", flag: "🇵🇱", crestId: 563 },
  "Red Star Belgrade":    { league: "SRB 1", flag: "🇷🇸", crestId: 1935 },
  "Partizan":             { league: "SRB 1", flag: "🇷🇸", crestId: 1940 },
  "Dinamo Zagreb":        { league: "CRO 1", flag: "🇭🇷", crestId: 1922 },
  "Olimpija Ljubljana":   { league: "SVN 1", flag: "🇸🇮", crestId: 1934 },
  "Sparta Prague":        { league: "CZE 1", flag: "🇨🇿", crestId: 553 },
  "Sion":                 { league: "SUI 1", flag: "🇨🇭", crestId: 1942 },
  "Brondby":              { league: "DEN 1", flag: "🇩🇰", crestId: 1783 },
  "Malmo":                { league: "SWE 1", flag: "🇸🇪", crestId: 337 },
  "Helsingborg":          { league: "SWE 1", flag: "🇸🇪", crestId: 337 },
  "Lahti":                { league: "FIN 1", flag: "🇫🇮", crestId: 337 },

  // MLS
  "LA Galaxy":            { league: "MLS", flag: "🇺🇸", crestId: 1674 },
  "New York Red Bulls":   { league: "MLS", flag: "🇺🇸", crestId: 1675 },
  "New York City FC":     { league: "MLS", flag: "🇺🇸", crestId: 18514 },
  "DC United":            { league: "MLS", flag: "🇺🇸", crestId: 1670 },
  "Seattle Sounders":     { league: "MLS", flag: "🇺🇸", crestId: 1692 },
  "Montreal Impact":      { league: "MLS", flag: "🇨🇦", crestId: 1686 },
  "Los Angeles FC":       { league: "MLS", flag: "🇺🇸", crestId: 1680 },
  "Inter Miami":          { league: "MLS", flag: "🇺🇸", crestId: 1684 },
  "New York MetroStars":  { league: "MLS", flag: "🇺🇸", crestId: 1675 },
  "Melbourne City":       { league: "AUS 1", flag: "🇦🇺", crestId: 1850 },
  "Sydney FC":            { league: "AUS 1", flag: "🇦🇺", crestId: 1851 },

  // Others
  "Al Sadd":              { league: "QAT 1", flag: "🇶🇦", crestId: 1817 },
  "Al Hilal":             { league: "SAU 1", flag: "🇸🇦", crestId: 1817 },
  "Al-Ittihad":           { league: "SAU 1", flag: "🇸🇦", crestId: 1817 },
  "Al Ettifaq":           { league: "SAU 1", flag: "🇸🇦", crestId: 1817 },
  "Sagan Tosu":           { league: "JPN 1", flag: "🇯🇵", crestId: 2117 },
  "Vissel Kobe":          { league: "JPN 1", flag: "🇯🇵", crestId: 2117 },
  "Delhi Dynamos":        { league: "ISL", flag: "🇮🇳", crestId: 2117 },
  "Talleres":             { league: "ARG 1", flag: "🇦🇷", crestId: 5843 },
  "Genk":                 { league: "BEL 1", flag: "🇧🇪", crestId: 471 },
  "Anderlecht":           { league: "BEL 1", flag: "🇧🇪", crestId: 471 },
  "Oxford United":        { league: "ENG 3", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 354 },
  "Sheffield Wednesday":  { league: "ENG 2", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", crestId: 345 },
  "Duisburg":             { league: "GER 4", flag: "🇩🇪", crestId: 7 },
  "Toulouse":             { league: "FRA 1", flag: "🇫🇷", crestId: 519 },
  "Bastia":               { league: "FRA 2", flag: "🇫🇷", crestId: 518 },
  "Fiorentina":           { league: "ITA 1", flag: "🇮🇹", crestId: 99 },
};

// Build set of all clubs that appear in player data
export function getAllClubsFromPlayers(players) {
  const clubs = new Set();
  players.forEach(p => p.clubs.forEach(c => clubs.add(c)));
  return Array.from(clubs).sort();
}
