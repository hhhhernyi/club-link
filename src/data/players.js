// Each player: { name, clubs: [array of club IDs] }
// Club IDs match the id field in clubs.js

export const PLAYERS = [
  // Arsenal
  { name: "Thierry Henry",        clubs: ["arsenalFC","fcBarcelona","newYorkRedBulls","asMonaco"] },
  { name: "Dennis Bergkamp",      clubs: ["arsenalFC","ajaxAmsterdam","interMilan"] },
  { name: "Robert Pires",         clubs: ["arsenalFC","astonVillaFC","olympiqueMarseille","villarrealCF"] },
  { name: "Patrick Vieira",       clubs: ["arsenalFC","juventusFC","interMilan","manchesterCityFC","newYorkCityFC"] },
  { name: "Cesc Fabregas",        clubs: ["arsenalFC","fcBarcelona","chelseaFC","asMonaco","comoFC"] },
  { name: "Samir Nasri",          clubs: ["arsenalFC","manchesterCityFC","sevillaFC","olympiqueMarseille"] },
  { name: "Emmanuel Petit",       clubs: ["arsenalFC","fcBarcelona","chelseaFC","asMonaco"] },
  { name: "Nicolas Anelka",       clubs: ["arsenalFC","realMadridCF","manchesterCityFC","liverpoolFC","chelseaFC","psg"] },
  { name: "Gael Clichy",          clubs: ["arsenalFC","manchesterCityFC"] },
  { name: "Bacary Sagna",         clubs: ["arsenalFC","manchesterCityFC","beneventoCalcio"] },
  { name: "Marc Overmars",        clubs: ["arsenalFC","ajaxAmsterdam","fcBarcelona"] },
  { name: "Davor Suker",          clubs: ["arsenalFC","realMadridCF","sevillaFC","dinamoZagreb"] },
  { name: "Sylvinho",             clubs: ["arsenalFC","fcBarcelona","olympiqueLyon","manchesterCityFC"] },
  { name: "Mikael Silvestre",     clubs: ["arsenalFC","manchesterUnitedFC","interMilan"] },
  { name: "Tomas Rosicky",        clubs: ["arsenalFC","borussiaD","spartaPrague"] },
  { name: "Nicklas Bendtner",     clubs: ["arsenalFC","birminghamCityFC","sunderlandAFC","nottinghamForestFC","juventusFC"] },
  { name: "Robin van Persie",     clubs: ["arsenalFC","manchesterUnitedFC","feyenoord"] },
  { name: "Lukas Podolski",       clubs: ["arsenalFC","kaiserslauternFC","bayernMunichFC","interMilan","galatasaray"] },
  { name: "Mesut Ozil",           clubs: ["arsenalFC","realMadridCF","werderBremen","fenerbahce","basaksehir"] },
  { name: "Alexis Sanchez",       clubs: ["arsenalFC","manchesterUnitedFC","fcBarcelona","interMilan","udineseCalcio"] },
  { name: "Aaron Ramsey",         clubs: ["arsenalFC","juventusFC"] },
  { name: "Jose Antonio Reyes",   clubs: ["arsenalFC","realMadridCF","sevillaFC","atleticoMadrid"] },
  { name: "Kolo Toure",           clubs: ["arsenalFC","manchesterCityFC","liverpoolFC","celticFC"] },
  { name: "Emmanuel Adebayor",    clubs: ["arsenalFC","realMadridCF","manchesterCityFC","tottenhamHotspurFC","asMonaco"] },
  { name: "Ashley Cole",          clubs: ["arsenalFC","chelseaFC","crystalPalaceFC","asRoma"] },
  { name: "William Gallas",       clubs: ["arsenalFC","chelseaFC","tottenhamHotspurFC","olympiqueMarseille"] },
  { name: "Petr Cech",            clubs: ["arsenalFC","chelseaFC","spartaPrague"] },
  { name: "Sol Campbell",         clubs: ["arsenalFC","tottenhamHotspurFC","portsmouthFC","newcastleUnitedFC"] },

  // Manchester United
  { name: "Wayne Rooney",         clubs: ["evertonFC","manchesterUnitedFC","dcUnited","derbyCountyFC"] },
  { name: "Peter Schmeichel",     clubs: ["manchesterUnitedFC","astonVillaFC","sportingCP","manchesterCityFC"] },
  { name: "Roy Keane",            clubs: ["manchesterUnitedFC","celticFC","nottinghamForestFC"] },
  { name: "Andy Cole",            clubs: ["manchesterUnitedFC","newcastleUnitedFC","blackburnRoversFC","fulhamFC","manchesterCityFC","portsmouthFC"] },
  { name: "Dwight Yorke",         clubs: ["manchesterUnitedFC","astonVillaFC","blackburnRoversFC","birminghamCityFC"] },
  { name: "Mark Hughes",          clubs: ["manchesterUnitedFC","fcBarcelona","chelseaFC","evertonFC","blackburnRoversFC"] },
  { name: "Eric Cantona",         clubs: ["manchesterUnitedFC","leedsUnitedFC","olympiqueMarseille","montpellierHSC"] },
  { name: "Juan Sebastian Veron", clubs: ["manchesterUnitedFC","chelseaFC","ssLazio","interMilan","estudiantesLP"] },
  { name: "Dimitar Berbatov",     clubs: ["manchesterUnitedFC","tottenhamHotspurFC","fulhamFC","paok","bayerLeverkusen"] },
  { name: "Owen Hargreaves",      clubs: ["manchesterUnitedFC","manchesterCityFC","bayernMunichFC"] },
  { name: "Gerard Pique",         clubs: ["manchesterUnitedFC","fcBarcelona"] },
  { name: "Ruud van Nistelrooy",  clubs: ["manchesterUnitedFC","realMadridCF","psvEindhoven","hamburgerSV","malagaCF"] },
  { name: "Diego Forlan",         clubs: ["manchesterUnitedFC","villarrealCF","atleticoMadrid","interMilan"] },
  { name: "Carlos Tevez",         clubs: ["manchesterUnitedFC","manchesterCityFC","juventusFC","westHamUnitedFC","bocaJuniors"] },
  { name: "Nicky Butt",           clubs: ["manchesterUnitedFC","newcastleUnitedFC","birminghamCityFC"] },
  { name: "Teddy Sheringham",     clubs: ["manchesterUnitedFC","tottenhamHotspurFC","nottinghamForestFC","portsmouthFC"] },
  { name: "Paul Scholes",         clubs: ["manchesterUnitedFC"] },
  { name: "Ryan Giggs",           clubs: ["manchesterUnitedFC"] },
  { name: "Quinton Fortune",      clubs: ["manchesterUnitedFC","atleticoMadrid","tottenhamHotspurFC"] },

  // Liverpool
  { name: "Fernando Torres",      clubs: ["liverpoolFC","chelseaFC","atleticoMadrid"] },
  { name: "Robbie Fowler",        clubs: ["liverpoolFC","leedsUnitedFC","manchesterCityFC","blackburnRoversFC"] },
  { name: "Michael Owen",         clubs: ["liverpoolFC","realMadridCF","newcastleUnitedFC","manchesterUnitedFC","stokeCityFC"] },
  { name: "Emile Heskey",         clubs: ["liverpoolFC","birminghamCityFC","astonVillaFC","leicesterCityFC","boltonWanderersFC"] },
  { name: "Sami Hyypia",          clubs: ["liverpoolFC","bayerLeverkusen"] },
  { name: "Jari Litmanen",        clubs: ["liverpoolFC","ajaxAmsterdam","fcBarcelona"] },
  { name: "Nick Barmby",          clubs: ["liverpoolFC","evertonFC","leedsUnitedFC","middlesbroughFC"] },
  { name: "Glen Johnson",         clubs: ["liverpoolFC","chelseaFC","portsmouthFC","westHamUnitedFC"] },
  { name: "Luis Suarez",          clubs: ["liverpoolFC","fcBarcelona","ajaxAmsterdam","atleticoMadrid","clubNacional"] },
  { name: "Daniel Sturridge",     clubs: ["liverpoolFC","chelseaFC","manchesterCityFC","boltonWanderersFC"] },
  { name: "Pepe Reina",           clubs: ["liverpoolFC","ssNapoli","bayernMunichFC","villarrealCF"] },
  { name: "Xabi Alonso",          clubs: ["liverpoolFC","realMadridCF","bayernMunichFC","realSociedadFC"] },
  { name: "Mohamed Salah",        clubs: ["liverpoolFC","chelseaFC","asRoma","acfFiorentina"] },
  { name: "Jordan Henderson",     clubs: ["liverpoolFC","ajaxAmsterdam","sunderlandAFC","alEttifaq"] },
  { name: "Virgil van Dijk",      clubs: ["liverpoolFC","celticFC","southamptonFC","fcGroningen"] },
  { name: "Alisson Becker",       clubs: ["liverpoolFC","asRoma"] },

  // Chelsea
  { name: "Didier Drogba",        clubs: ["chelseaFC","olympiqueMarseille","eaGuingamp","cfMontreal","galatasaray"] },
  { name: "Frank Lampard",        clubs: ["chelseaFC","manchesterCityFC","westHamUnitedFC","swanseaCityAFC","newYorkCityFC"] },
  { name: "John Terry",           clubs: ["chelseaFC","astonVillaFC"] },
  { name: "Arjen Robben",         clubs: ["chelseaFC","realMadridCF","bayernMunichFC","psvEindhoven","fcGroningen"] },
  { name: "Claude Makelele",      clubs: ["chelseaFC","realMadridCF","olympiqueMarseille"] },
  { name: "Michael Ballack",      clubs: ["chelseaFC","bayernMunichFC","kaiserslauternFC","bayerLeverkusen"] },
  { name: "Andriy Shevchenko",    clubs: ["chelseaFC","acMilan","dynamoKyiv"] },
  { name: "Hernan Crespo",        clubs: ["chelseaFC","interMilan","ssLazio","parmaCalcio","riverPlate"] },
  { name: "Juan Mata",            clubs: ["chelseaFC","manchesterUnitedFC","valenciaFC","galatasaray"] },
  { name: "David Luiz",           clubs: ["chelseaFC","slBenfica","arsenalFC","psg"] },
  { name: "N'Golo Kante",         clubs: ["chelseaFC","leicesterCityFC","alIttihad"] },
  { name: "Eden Hazard",          clubs: ["chelseaFC","realMadridCF","lilleOSC"] },
  { name: "Joe Cole",             clubs: ["chelseaFC","westHamUnitedFC","liverpoolFC","astonVillaFC"] },
  { name: "Eidur Gudjohnsen",     clubs: ["chelseaFC","fcBarcelona","stokeCityFC","fulhamFC","asMonaco"] },
  { name: "Jimmy Floyd Hasselbaink", clubs: ["chelseaFC","atleticoMadrid","leedsUnitedFC","middlesbroughFC"] },
  { name: "Shaun Wright-Phillips", clubs: ["chelseaFC","manchesterCityFC"] },

  // Manchester City
  { name: "Kevin De Bruyne",      clubs: ["manchesterCityFC","chelseaFC","werderBremen","genk","vflWolfsburg"] },
  { name: "Yaya Toure",           clubs: ["manchesterCityFC","fcBarcelona","asMonaco","olympiakos"] },
  { name: "David Silva",          clubs: ["manchesterCityFC","valenciaFC","celtaVigoSD","realSociedadFC"] },
  { name: "Joleon Lescott",       clubs: ["manchesterCityFC","evertonFC","westBromwichAlbionFC"] },
  { name: "Robinho",              clubs: ["manchesterCityFC","realMadridCF","santosFC","acMilan","atleticoMineiro"] },

  // Tottenham
  { name: "Gareth Bale",          clubs: ["tottenhamHotspurFC","realMadridCF","losAngelesFC"] },
  { name: "Jermain Defoe",        clubs: ["tottenhamHotspurFC","westHamUnitedFC","portsmouthFC","sunderlandAFC","bournemouthAFC"] },
  { name: "Les Ferdinand",        clubs: ["tottenhamHotspurFC","newcastleUnitedFC","queensParkRangersFC","fulhamFC"] },
  { name: "Robbie Keane",         clubs: ["tottenhamHotspurFC","liverpoolFC","astonVillaFC","laGalaxy","celticFC"] },
  { name: "David Ginola",         clubs: ["tottenhamHotspurFC","newcastleUnitedFC","evertonFC","astonVillaFC","psg"] },
  { name: "Luka Modric",          clubs: ["tottenhamHotspurFC","realMadridCF","dinamoZagreb"] },
  { name: "Darren Bent",          clubs: ["tottenhamHotspurFC","ipswichTownFC","charltonAthleticFC","sunderlandAFC","astonVillaFC"] },
  { name: "Frederic Kanoute",     clubs: ["tottenhamHotspurFC","westHamUnitedFC","sevillaFC"] },
  { name: "Christian Ziege",      clubs: ["tottenhamHotspurFC","liverpoolFC","bayernMunichFC","acMilan"] },

  // Real Madrid
  { name: "Zinedine Zidane",      clubs: ["realMadridCF","juventusFC","girondinsDeB","cannesFC"] },
  { name: "Iker Casillas",        clubs: ["realMadridCF","fcPorto"] },
  { name: "Sergio Ramos",         clubs: ["realMadridCF","sevillaFC","psg","monterreyFC"] },
  { name: "Raul",                 clubs: ["realMadridCF","fcSchalke04","alSadd"] },
  { name: "Roberto Carlos",       clubs: ["realMadridCF","interMilan","fenerbahce","scCorinthians"] },
  { name: "Fernando Hierro",      clubs: ["realMadridCF","boltonWanderersFC","sportingCP"] },
  { name: "Luis Figo",            clubs: ["realMadridCF","fcBarcelona","sportingCP","interMilan"] },
  { name: "Fernando Redondo",     clubs: ["realMadridCF","atleticoMadrid","acMilan"] },
  { name: "Clarence Seedorf",     clubs: ["realMadridCF","ajaxAmsterdam","acMilan","interMilan","botafogo"] },
  { name: "Michael Laudrup",      clubs: ["realMadridCF","fcBarcelona","juventusFC","ajaxAmsterdam","brondbyIF"] },
  { name: "Ivan Zamorano",        clubs: ["realMadridCF","interMilan","sevillaFC","coloColo"] },
  { name: "Predrag Mijatovic",    clubs: ["realMadridCF","valenciaFC","partizanBelgrade"] },
  { name: "Guti",                 clubs: ["realMadridCF","besiktas"] },
  { name: "James Rodriguez",      clubs: ["realMadridCF","asMonaco","bayernMunichFC","atleticoMadrid","evertonFC"] },
  { name: "Trent Alexander-Arnold", clubs: ["liverpoolFC","realMadridCF"] },

  // Barcelona
  { name: "Ronaldo Nazario",      clubs: ["fcBarcelona","realMadridCF","interMilan","psvEindhoven","cruzeiroEC","scCorinthians"] },
  { name: "Rivaldo",              clubs: ["fcBarcelona","acMilan","cruzeiroEC","deportivoLaCoruna","olympiakos"] },
  { name: "Samuel Eto'o",         clubs: ["fcBarcelona","interMilan","anzhiMakhachkala","chelseaFC","evertonFC","realMadridCF"] },
  { name: "Ronaldinho",           clubs: ["fcBarcelona","acMilan","psg","flamengo","atleticoMineiro"] },
  { name: "Deco",                 clubs: ["fcBarcelona","chelseaFC","fcPorto","slBenfica"] },
  { name: "Andres Iniesta",       clubs: ["fcBarcelona","visselKobe"] },
  { name: "David Villa",          clubs: ["fcBarcelona","atleticoMadrid","valenciaFC","newYorkCityFC"] },
  { name: "Zlatan Ibrahimovic",   clubs: ["fcBarcelona","juventusFC","interMilan","acMilan","psg","ajaxAmsterdam","manchesterUnitedFC","laGalaxy","malmoeFF"] },
  { name: "Neymar",               clubs: ["fcBarcelona","psg","santosFC","alHilal"] },
  { name: "Henrik Larsson",       clubs: ["fcBarcelona","celticFC","feyenoord","ifkHelsingborg"] },
  { name: "Lilian Thuram",        clubs: ["fcBarcelona","juventusFC","parmaCalcio","asMonaco"] },
  { name: "Xavi",                 clubs: ["fcBarcelona","alSadd"] },
  { name: "Lionel Messi",         clubs: ["fcBarcelona","psg","interMiami"] },
  { name: "Sergio Busquets",      clubs: ["fcBarcelona","interMiami"] },
  { name: "Antoine Griezmann",    clubs: ["atleticoMadrid","fcBarcelona","realSociedadFC"] },
  { name: "Joao Felix",           clubs: ["atleticoMadrid","chelseaFC","fcBarcelona","slBenfica"] },

  // Atletico Madrid
  { name: "Radamel Falcao",       clubs: ["atleticoMadrid","asMonaco","chelseaFC","manchesterUnitedFC","galatasaray","fcPorto"] },
  { name: "Sergio Aguero",        clubs: ["atleticoMadrid","manchesterCityFC","fcBarcelona","independiente"] },
  { name: "Thibaut Courtois",     clubs: ["atleticoMadrid","chelseaFC","realMadridCF"] },
  { name: "Jan Oblak",            clubs: ["atleticoMadrid","slBenfica"] },
  { name: "Diego Godin",          clubs: ["atleticoMadrid","interMilan","cagliariCalcio","villarrealCF"] },
  { name: "Riquelme",             clubs: ["bocaJuniors","villarrealCF","fcBarcelona"] },

  // Juventus
  { name: "Alessandro Del Piero", clubs: ["juventusFC","sydneyFC"] },
  { name: "Gianluigi Buffon",     clubs: ["juventusFC","psg","parmaCalcio"] },
  { name: "Pavel Nedved",         clubs: ["juventusFC","ssLazio"] },
  { name: "Edgar Davids",         clubs: ["juventusFC","ajaxAmsterdam","interMilan","acMilan","fcBarcelona","crystalPalaceFC"] },
  { name: "Didier Deschamps",     clubs: ["juventusFC","olympiqueMarseille","valenciaFC","chelseaFC"] },
  { name: "Filippo Inzaghi",      clubs: ["juventusFC","acMilan","atalantaBC","bolognaFC"] },
  { name: "David Trezeguet",      clubs: ["juventusFC","asMonaco","astonVillaFC"] },
  { name: "Luca Toni",            clubs: ["juventusFC","bayernMunichFC","acfFiorentina","hellasVeronaFC"] },
  { name: "Christian Vieri",      clubs: ["juventusFC","ssLazio","interMilan","atleticoMadrid","acMilan"] },
  { name: "Andrea Pirlo",         clubs: ["juventusFC","acMilan","newYorkCityFC","bresciaCalcio"] },
  { name: "Angel Di Maria",       clubs: ["juventusFC","realMadridCF","manchesterUnitedFC","psg","slBenfica","atleticoMadrid"] },
  { name: "Miralem Pjanic",       clubs: ["juventusFC","fcBarcelona","asRoma","olympiqueLyon"] },
  { name: "Hasan Salihamidzic",   clubs: ["juventusFC","bayernMunichFC","hamburgerSV"] },
  { name: "Patrick Kluivert",     clubs: ["ajaxAmsterdam","fcBarcelona","juventusFC","newcastleUnitedFC","valenciaFC","psg"] },

  // AC Milan
  { name: "Kaka",                 clubs: ["acMilan","realMadridCF","saoPauloFC","losAngelesFC"] },
  { name: "Paolo Maldini",        clubs: ["acMilan"] },
  { name: "Ruud Gullit",          clubs: ["acMilan","chelseaFC","ucSampdoria","acfFiorentina","psvEindhoven"] },
  { name: "Marco van Basten",     clubs: ["acMilan","ajaxAmsterdam"] },
  { name: "Frank Rijkaard",       clubs: ["acMilan","ajaxAmsterdam","sportingCP","realZaragozaFC"] },
  { name: "Cafu",                 clubs: ["acMilan","asRoma","saoPauloFC"] },
  { name: "George Weah",          clubs: ["acMilan","psg","asMonaco","chelseaFC","olympiqueMarseille"] },
  { name: "Zvonimir Boban",       clubs: ["acMilan","atleticoMadrid","dinamoZagreb"] },
  { name: "Oliver Bierhoff",      clubs: ["acMilan","borussiaM","udineseCalcio"] },
  { name: "Gennaro Gattuso",      clubs: ["acMilan","rangersFC"] },
  { name: "Demetrio Albertini",   clubs: ["acMilan","atleticoMadrid"] },
  { name: "Brian Laudrup",        clubs: ["rangersFC","acfFiorentina","acMilan","ajaxAmsterdam","chelseaFC"] },

  // Inter Milan
  { name: "Javier Zanetti",       clubs: ["interMilan"] },
  { name: "Marco Materazzi",      clubs: ["interMilan","evertonFC"] },
  { name: "Dejan Stankovic",      clubs: ["interMilan","ssLazio","redStarBelgrade"] },
  { name: "Mauro Icardi",         clubs: ["interMilan","psg","ucSampdoria","galatasaray"] },
  { name: "Hakan Sukur",          clubs: ["galatasaray","interMilan","parmaCalcio","blackburnRoversFC"] },
  { name: "Emre Belozoglu",       clubs: ["interMilan","atleticoMadrid","fenerbahce","newcastleUnitedFC"] },
  { name: "Alvaro Recoba",        clubs: ["interMilan","veneziaFC","torinoFC"] },
  { name: "Obafemi Martins",      clubs: ["interMilan","newcastleUnitedFC","vflWolfsburg","birminghamCityFC","seattleSounders"] },
  { name: "Stephane Dalmat",      clubs: ["interMilan","tottenhamHotspurFC"] },

  // Roma
  { name: "Francesco Totti",      clubs: ["asRoma"] },
  { name: "Gabriel Batistuta",    clubs: ["asRoma","acfFiorentina","interMilan","riverPlate"] },
  { name: "Antonio Cassano",      clubs: ["asRoma","realMadridCF","ucSampdoria","acMilan","interMilan"] },
  { name: "Radja Nainggolan",     clubs: ["asRoma","interMilan","cagliariCalcio"] },
  { name: "Daniele De Rossi",     clubs: ["asRoma","bocaJuniors"] },

  // Lazio
  { name: "Alessandro Nesta",     clubs: ["ssLazio","acMilan","cfMontreal"] },
  { name: "Sinisa Mihajlovic",    clubs: ["ssLazio","interMilan","asRoma","ucSampdoria","redStarBelgrade"] },
  { name: "Gaizka Mendieta",      clubs: ["valenciaFC","ssLazio","middlesbroughFC","fcBarcelona"] },
  { name: "Miroslav Klose",       clubs: ["ssLazio","bayernMunichFC","kaiserslauternFC","werderBremen"] },

  // Parma
  { name: "Gianfranco Zola",      clubs: ["parmaCalcio","chelseaFC","ssNapoli","cagliariCalcio"] },
  { name: "Faustino Asprilla",    clubs: ["parmaCalcio","newcastleUnitedFC"] },
  { name: "Fabio Cannavaro",      clubs: ["parmaCalcio","juventusFC","realMadridCF","interMilan","ssNapoli"] },
  { name: "Gianluigi Buffon",     clubs: ["parmaCalcio","juventusFC","psg"] },
  { name: "Hidetoshi Nakata",     clubs: ["parmaCalcio","asRoma","acfFiorentina","bolognaFC"] },

  // Bayern Munich
  { name: "Oliver Kahn",          clubs: ["bayernMunichFC"] },
  { name: "Lothar Matthaus",      clubs: ["bayernMunichFC","interMilan","borussiaM"] },
  { name: "Stefan Effenberg",     clubs: ["bayernMunichFC","acfFiorentina","borussiaM"] },
  { name: "Mario Gomez",          clubs: ["bayernMunichFC","acfFiorentina","vfbStuttgart","vflWolfsburg","besiktas"] },
  { name: "Roy Makaay",           clubs: ["bayernMunichFC","deportivoLaCoruna","feyenoord"] },
  { name: "Claudio Pizarro",      clubs: ["bayernMunichFC","werderBremen","chelseaFC"] },
  { name: "Ze Roberto",           clubs: ["bayernMunichFC","bayerLeverkusen","flamengo"] },
  { name: "Willy Sagnol",         clubs: ["bayernMunichFC","asMonaco"] },
  { name: "Bixente Lizarazu",     clubs: ["bayernMunichFC","athleticBilbaoFC","olympiqueMarseille"] },
  { name: "Markus Babbel",        clubs: ["bayernMunichFC","liverpoolFC","vfbStuttgart"] },
  { name: "Jurgen Klinsmann",     clubs: ["bayernMunichFC","tottenhamHotspurFC","vfbStuttgart","asMonaco","ucSampdoria"] },
  { name: "Giovane Elber",        clubs: ["bayernMunichFC","vfbStuttgart","olympiqueLyon"] },
  { name: "Lucio",                clubs: ["bayernMunichFC","bayerLeverkusen","interMilan","saoPauloFC"] },

  // Borussia Dortmund
  { name: "Mario Gotze",          clubs: ["borussiaD","bayernMunichFC","psvEindhoven","eintrachtFrankfurt"] },
  { name: "Mats Hummels",         clubs: ["borussiaD","bayernMunichFC"] },
  { name: "Marco Reus",           clubs: ["borussiaD","borussiaM","laGalaxy"] },
  { name: "Henrikh Mkhitaryan",   clubs: ["borussiaD","manchesterUnitedFC","arsenalFC","asRoma","interMilan","shaktarDonetsk"] },
  { name: "Pierre-Emerick Aubameyang", clubs: ["borussiaD","arsenalFC","fcBarcelona","chelseaFC","stEtienne"] },
  { name: "Robert Lewandowski",   clubs: ["borussiaD","bayernMunichFC","fcBarcelona","lecPoznan"] },

  // PSG
  { name: "Edinson Cavani",       clubs: ["psg","ssNapoli","manchesterUnitedFC","parmaCalcio"] },
  { name: "Jay-Jay Okocha",       clubs: ["psg","fenerbahce","boltonWanderersFC","eintrachtFrankfurt"] },
  { name: "Kylian Mbappe",        clubs: ["psg","asMonaco","realMadridCF"] },
  { name: "Fabinho",              clubs: ["psg","liverpoolFC","asMonaco","alIttihad"] },
  { name: "Bernardo Silva",       clubs: ["psg","manchesterCityFC","asMonaco"] },

  // Ajax
  { name: "Edwin van der Sar",    clubs: ["ajaxAmsterdam","manchesterUnitedFC","juventusFC","fulhamFC"] },
  { name: "Frank de Boer",        clubs: ["ajaxAmsterdam","rangersFC","fcBarcelona","galatasaray"] },
  { name: "Ronald de Boer",       clubs: ["ajaxAmsterdam","rangersFC","fcBarcelona"] },
  { name: "Romario",              clubs: ["psvEindhoven","fcBarcelona","flamengo","valenciaFC"] },

  // Celtic / Rangers
  { name: "Chris Sutton",         clubs: ["celticFC","chelseaFC","blackburnRoversFC","norwichCityFC"] },
  { name: "Stiliyan Petrov",      clubs: ["celticFC","astonVillaFC"] },
  { name: "Giovanni van Bronckhorst", clubs: ["rangersFC","arsenalFC","fcBarcelona","feyenoord"] },
  { name: "Arthur Numan",         clubs: ["rangersFC","psvEindhoven","fenerbahce"] },
  { name: "Ally McCoist",         clubs: ["rangersFC","kilmarnockFC","sunderlandAFC"] },

  // Galatasaray
  { name: "Gheorghe Hagi",        clubs: ["galatasaray","realMadridCF","fcBarcelona","bresciaCalcio"] },

  // Newcastle
  { name: "Alan Shearer",         clubs: ["newcastleUnitedFC","blackburnRoversFC","southamptonFC"] },
  { name: "Nolberto Solano",      clubs: ["newcastleUnitedFC","astonVillaFC","alianzaLima"] },
  { name: "Craig Bellamy",        clubs: ["newcastleUnitedFC","liverpoolFC","manchesterCityFC","blackburnRoversFC","westHamUnitedFC"] },
  { name: "Kieron Dyer",          clubs: ["newcastleUnitedFC","ipswichTownFC","westHamUnitedFC"] },

  // Everton
  { name: "Tim Cahill",           clubs: ["evertonFC","newYorkRedBulls","melbourneCity"] },
  { name: "Andrei Kanchelskis",   clubs: ["evertonFC","manchesterUnitedFC","rangersFC","acfFiorentina"] },
  { name: "Phil Neville",         clubs: ["evertonFC","manchesterUnitedFC"] },
  { name: "Francis Jeffers",      clubs: ["evertonFC","arsenalFC"] },

  // West Ham
  { name: "Paolo Di Canio",       clubs: ["westHamUnitedFC","ssLazio","juventusFC"] },
  { name: "Marc-Vivien Foe",      clubs: ["westHamUnitedFC","manchesterCityFC","olympiqueLyon"] },

  // MLS
  { name: "David Beckham",        clubs: ["laGalaxy","manchesterUnitedFC","realMadridCF","acMilan","psg","prestonNorthEndFC"] },
  { name: "Steven Gerrard",       clubs: ["laGalaxy","liverpoolFC"] },
  { name: "Landon Donovan",       clubs: ["laGalaxy","bayernMunichFC","evertonFC","bayerLeverkusen"] },

  // Misc
  { name: "Rui Costa",            clubs: ["slBenfica","acfFiorentina","acMilan"] },
  { name: "Nani",                 clubs: ["sportingCP","manchesterUnitedFC","fenerbahce","ssLazio","valenciaFC"] },
  { name: "Costinha",             clubs: ["fcPorto","galatasaray"] },
  { name: "Andrei Arshavin",      clubs: ["zenitStPetersburg","arsenalFC"] },
  { name: "Marcello Gallardo",    clubs: ["riverPlate","asMonaco","psg","clubNacional"] },
  { name: "Pablo Aimar",          clubs: ["riverPlate","valenciaFC","realZaragozaFC"] },
  { name: "Tim Sherwood",         clubs: ["blackburnRoversFC","tottenhamHotspurFC","liverpoolFC"] },
  { name: "Stan Collymore",       clubs: ["nottinghamForestFC","liverpoolFC","astonVillaFC"] },
  { name: "Neil Lennon",          clubs: ["leicesterCityFC","celticFC"] },
  { name: "Stuart Pearce",        clubs: ["nottinghamForestFC","manchesterCityFC","coventryCityFC"] },
  { name: "Jaap Stam",            clubs: ["manchesterUnitedFC","ssLazio","acMilan","psvEindhoven"] },
];

// Deduplicate by name
const seen = new Set();
export const UNIQUE_PLAYERS = PLAYERS.filter(p => {
  const key = p.name.toLowerCase().trim();
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});