// Football League Simulator - multi league + season flow

const cityPrefixes = [
    'Manchester', 'Liverpool', 'Arsenal', 'Chelsea', 'Tottenham', 'Brighton',
    'Newcastle', 'Everton', 'Leicester', 'Aston', 'West Ham', 'Fulham',
    'Crystal', 'Bournemouth', 'Nottingham', 'Sheffield', 'Southampton', 'Ipswich',
    'Brentford', 'Luton', 'Coventry', 'Bristol', 'Reading', 'Norwich',
    'Oxford', 'Swindon', 'Watford', 'Stevenage', 'Colchester', 'Southend',
    'Peterborough', 'Northampton', 'Cambridge', 'Wigan', 'Bolton', 'Preston',
    'Burnley', 'Blackburn', 'Leeds', 'Middleborough', 'Sunderland', 'Stoke',
    'Wolverhampton', 'Birmingham', 'Millwall', 'Charlton', 'Swansea',
    'Cardiff', 'Wrexham', 'Doncaster', 'Rotherham', 'Huddersfield', 'Bradford',
    'Barnsley', 'Grimsby', 'Lincoln', 'Notts', 'Salford', 'Stockport',
    'Oldham', 'Accrington', 'Morecambe', 'Tranmere', 'York', 'Hartlepool'
];

const teamSuffixes = [
    'United', 'City', 'Town', 'Rovers', 'Wanderers', 'Athletic',
    'Albion', 'Rangers', 'County', 'Borough', 'FC', 'AFC'
];

const frenchCityPrefixes = [
    'Paris', 'Marseille', 'Lyon', 'Lille', 'Nice', 'Nantes', 'Bordeaux', 'Strasbourg', 'Rennes', 'Montpellier',
    'Toulouse', 'Dijon', 'Angers', 'Clermont', 'Reims', 'Le Mans', 'Grenoble', 'Amiens', 'Brest', 'Metz',
    'Nancy', 'Valence', 'Toulon', 'Nîmes', 'Perpignan', 'Ajaccio', 'Cannes', 'Besançon', 'Bayonne', 'Annecy'
];

const frenchTeamSuffixes = [
    'FC', 'Olympique', 'AC', 'AS', 'Stade', 'US', 'RC', 'Club', 'Foot', 'Athlétique'
];

const germanCityPrefixes = [
    'Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Cologne', 'Stuttgart', 'Dortmund', 'Leipzig', 'Dresden', 'Nuremberg',
    'Bremen', 'Hannover', 'Bochum', 'Wolfsburg', 'Mannheim', 'Augsburg', 'Kiel', 'Mainz', 'Freiburg', 'Duisburg'
];

const germanTeamSuffixes = [
    'FC', 'SV', 'VfB', 'VfL', 'SC', 'Borussia', 'TSV', 'SG', 'FV', '1. FC'
];

const spanishCityPrefixes = [
    'Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Bilbao', 'Atlético', 'Betis', 'Villarreal', 'Granada', 'Celta',
    'Levante', 'Almería', 'Cádiz', 'Mallorca', 'Osasuna', 'Getafe', 'Rayo', 'Espanyol', 'Zaragoza', 'Oviedo',
    'Málaga', 'Las Palmas', 'Tenerife', 'Cartagena', 'Albacete', 'Burgos', 'Huesca', 'Ponferrada', 'Ibiza', 'Lugo'
];

const spanishTeamSuffixes = [
    'FC', 'CF', 'UD', 'RC', 'SD', 'CD', 'AD', 'CP', 'CA', 'Real'
];

const italianCityPrefixes = [
    'Milan', 'Roma', 'Juventus', 'Napoli', 'Inter', 'Lazio', 'Fiorentina', 'Torino', 'Atalanta', 'Bologna',
    'Sampdoria', 'Genoa', 'Udinese', 'Parma', 'Cagliari', 'Sassuolo', 'Verona', 'Brescia', 'Spal', 'Pescara',
    'Bari', 'Palermo', 'Catania', 'Messina', 'Reggina', 'Livorno', 'Pisa', 'Modena', 'Cesena', 'Ancona'
];

const italianTeamSuffixes = [
    'FC', 'AC', 'SSC', 'US', 'AS', 'SPAL', 'Hellas', 'Calcio', 'Atalanta', 'Juventus'
];

const usaCityPrefixes = [
    'Los Angeles', 'New York', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
    'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Boston',
    'El Paso', 'Detroit', 'Nashville', 'Portland', 'Memphis', 'Oklahoma City', 'Las Vegas', 'Louisville', 'Baltimore', 'Milwaukee'
];

const usaTeamSuffixes = [
    'FC', 'United', 'City', 'SC', 'Sounders', 'Timbers', 'Earthquakes', 'Galaxy', 'Rapids', 'Dynamo'
];

const brazilCityPrefixes = [
    'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Porto Alegre', 'Recife', 'Salvador', 'Brasília', 'Fortaleza', 'Curitiba', 'Manaus',
    'Belém', 'Goiânia', 'Guarulhos', 'Campinas', 'São Luís', 'São Gonçalo', 'Maceió', 'Duque de Caxias', 'Natal', 'Teresina',
    'Campo Grande', 'João Pessoa', 'Aracaju', 'Cuiabá', 'Santarém', 'Vitória', 'Montes Claros', 'Petrolina', 'Canoas', 'Ponta Grossa'
];

const brazilTeamSuffixes = [
    'FC', 'EC', 'SC', 'AC', 'CR', 'SE', 'CE', 'PR', 'MG', 'RS'
];

const argentinaCityPrefixes = [
    'Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata', 'Mar del Plata', 'Salta', 'Santa Fe', 'San Juan', 'Resistencia',
    'Neuquén', 'Bahía Blanca', 'Cipolletti', 'Comodoro Rivadavia', 'Concordia', 'Corrientes', 'Formosa', 'Jujuy', 'La Rioja', 'Paraná',
    'Posadas', 'Rawson', 'Río Cuarto', 'Río Gallegos', 'San Luis', 'San Nicolás', 'Santa Rosa', 'Santiago del Estero', 'Tandil', 'Trelew'
];

const argentinaTeamSuffixes = [
    'CA', 'AC', 'FC', 'SC', 'CC', 'CS', 'AD', 'CD', 'EC', 'RC'
];

const japanCityPrefixes = [
    'Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kawasaki', 'Saitama', 'Hiroshima',
    'Sendai', 'Chiba', 'Kitakyushu', 'Sakai', 'Niigata', 'Hamamatsu', 'Okayama', 'Kumamoto', 'Shizuoka', 'Kagoshima',
    'Utsunomiya', 'Kanazawa', 'Oita', 'Maebashi', 'Naha', 'Akita', 'Yamagata', 'Miyazaki', 'Matsumoto', 'Toyama'
];

const japanTeamSuffixes = [
    'FC', 'SC', 'AC', 'FC Tokyo', 'Vortis', 'Marinos', 'Antlers', 'Reysol', 'S-Pulse', 'Albirex'
];

const australiaCityPrefixes = [
    'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle', 'Canberra', 'Wollongong', 'Logan',
    'Geelong', 'Hobart', 'Townsville', 'Cairns', 'Toowoomba', 'Ballarat', 'Bendigo', 'Albury', 'Launceston', 'Alice Springs',
    'Darwin', 'Katherine', 'Tennant Creek', 'Palmerston', 'Katherine', 'Tennant Creek', 'Palmerston', 'Katherine', 'Tennant Creek', 'Palmerston'
];

const australiaTeamSuffixes = [
    'FC', 'City', 'United', 'Wanderers', 'Roar', 'Victory', 'Heart', 'Jets', 'Phoenix', 'Knights'
];

const southAfricaCityPrefixes = [
    'Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein', 'East London', 'Pietermaritzburg', 'Benoni', 'Vereeniging',
    'Kempton Park', 'Alberton', 'Randburg', 'Roodepoort', 'Midrand', 'Centurion', 'Soshanguve', 'Mamelodi', 'Atteridgeville', 'Winterveldt',
    'Tembisa', 'Ekurhuleni', 'Springs', 'Nigel', 'Heidelberg', 'Delmas', 'Bronkhorstspruit', 'Cullinan', 'Rayton', 'Refilwe'
];

const southAfricaTeamSuffixes = [
    'FC', 'United', 'City', 'Chiefs', 'Pirates', 'Sundowns', 'AFC', 'Rovers', 'Wanderers', 'Athletic'
];

const mexicoCityPrefixes = [
    'Guadalajara', 'Monterrey', 'Tijuana', 'Pachuca', 'Toluca', 'Puebla', 'León', 'Querétaro', 'Morelia', 'Chiapas',
    'Veracruz', 'Mérida', 'Zacatecas', 'Aguascalientes', 'Culiacán', 'Mexicali', 'Saltillo', 'Durango', 'Acapulco', 'Cuernavaca'
];

const mexicoTeamSuffixes = [
    'FC', 'United', 'Atlético', 'Deportivo', 'Club', 'De Oro', 'C.F.', 'Tiburones', 'Rayos', 'Guerreros'
];

const canadaCityPrefixes = [
    'Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Halifax', 'Victoria', 'Hamilton',
    'Quebec', 'Saskatoon', 'Regina', 'London', 'Kitchener', 'Windsor', 'St. John', 'Niagara', 'Barrie', 'Guelph'
];

const canadaTeamSuffixes = [
    'FC', 'United', 'City', 'SC', 'Rangers', 'Voyageurs', 'Blizzard', 'Rampage', 'Mounties', 'Highlanders'
];

const southKoreaCityPrefixes = [
    'Seoul', 'Busan', 'Daegu', 'Incheon', 'Daejeon', 'Gwangju', 'Ulsan', 'Suwon', 'Jeonju', 'Cheonan',
    'Chuncheon', 'Mokpo', 'Andong', 'Gimcheon', 'Changwon', 'Pohang', 'Jeju', 'Gimhae', 'Gangneung', 'Asan'
];

const southKoreaTeamSuffixes = [
    'FC', 'SC', 'United', 'Crew', 'Stars', 'Dynamo', 'Suns', 'Wings', 'Tigers', 'Titans'
];

const chinaCityPrefixes = [
    'Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Wuhan', 'Tianjin', 'Chongqing', 'Hangzhou', 'Nanjing',
    'Xi’an', 'Suzhou', 'Qingdao', 'Dalian', 'Shenyang', 'Ningbo', 'Kunming', 'Fuzhou', 'Zhengzhou', 'Changsha'
];

const chinaTeamSuffixes = [
    'FC', 'SC', 'Dragons', 'Lions', 'Tigers', 'Phoenix', 'Titans', 'Warriors', 'Eagles', 'Stars'
];

const indiaCityPrefixes = [
    'Mumbai', 'Delhi', 'Bengaluru', 'Kolkata', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow',
    'Kanpur', 'Nagpur', 'Indore', 'Bhopal', 'Patna', 'Visakhapatnam', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra'
];

const indiaTeamSuffixes = [
    'FC', 'United', 'City', 'Tigers', 'Warriors', 'Kings', 'Dynamos', 'Strikers', 'Royals', 'Eagles'
];

const nigeriaCityPrefixes = [
    'Lagos', 'Abuja', 'Kano', 'Port Harcourt', 'Ibadan', 'Benin', 'Enugu', 'Aba', 'Jos', 'Ilorin',
    'Maiduguri', 'Ondo', 'Uyo', 'Akure', 'Calabar', 'Aba', 'Oyo', 'Kaduna', 'Zaria', 'Sokoto'
];

const nigeriaTeamSuffixes = [
    'FC', 'United', 'Stars', 'Warriors', 'Eagles', 'Rangers', 'Giants', 'Kings', 'Pirates', 'Dynamos'
];

const egyptCityPrefixes = [
    'Cairo', 'Alexandria', 'Giza', 'Shubra', 'Luxor', 'Aswan', 'Suez', 'Hurghada', 'Port Said', 'Tanta',
    'Ismailia', 'Mansoura', 'Damanhur', 'Zagazig', 'Beni Suef', 'Sohag', 'Daqahliya', 'Minya', 'Faiyum', 'Qena'
];

const egyptTeamSuffixes = [
    'FC', 'SC', 'United', 'Stars', 'Pyramids', 'Pharaohs', 'Tigers', 'Lions', 'Warriors', 'Rangers'
];

const moroccoCityPrefixes = [
    'Casablanca', 'Rabat', 'Marrakech', 'Fes', 'Tangier', 'Agadir', 'Meknes', 'Oujda', 'Nador', 'Settat',
    'El Jadida', 'Kenitra', 'Safi', 'Khouribga', 'Beni Mellal', 'Tétouan', 'Ksar El Kebir', 'Essaouira', 'Larache', 'Taza'
];

const moroccoTeamSuffixes = [
    'FC', 'AC', 'Raja', 'Wydad', 'Olympic', 'Stars', 'Atlas', 'Sahara', 'Mariners', 'United'
];

const ghanaCityPrefixes = [
    'Accra', 'Kumasi', 'Tamale', 'Takoradi', 'Ashaiman', 'Cape Coast', 'Sunyani', 'Ho', 'Obuasi', 'Tema',
    'Koforidua', 'Bolgatanga', 'Wa', 'Sekondi', 'Yendi', 'Bawku', 'Madina', 'Nkoranza', 'Cape Coast', 'Axim'
];

const ghanaTeamSuffixes = [
    'FC', 'United', 'Hearts', 'Stars', 'Warriors', 'Tigers', 'Rangers', 'Giants', 'Pirates', 'Kings'
];

const newZealandCityPrefixes = [
    'Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga', 'Dunedin', 'Napier', 'New Plymouth', 'Rotorua', 'Invercargill',
    'Palmerston', 'Whanganui', 'Gisborne', 'Blenheim', 'Whangarei', 'Queenstown', 'Nelson', 'Masterton', 'Timaru', 'Blenheim'
];

const newZealandTeamSuffixes = [
    'FC', 'United', 'City', 'Rangers', 'Wanderers', 'Thistles', 'Mariners', 'Storm', 'Kings', 'Knights'
];

const fijiCityPrefixes = [
    'Suva', 'Nadi', 'Lautoka', 'Labasa', 'Ba', 'Nasinu', 'Sigatoka', 'Savusavu', 'Levuka', 'Rakiraki'
];

const fijiTeamSuffixes = [
    'FC', 'United', 'City', 'Rovers', 'Islanders', 'Warriors', 'Voyagers', 'Fijians', 'Stars', 'Tridents'
];

const samoaCityPrefixes = [
    'Apia', 'Salelologa', 'Lalomanu', 'Faleasiu', 'Vaitele', 'Leulumoega', 'Pago Pago', 'Afega', 'Tafuna', 'Fagaalu'
];

const samoaTeamSuffixes = [
    'FC', 'United', 'City', 'Wanderers', 'Warriors', 'Islanders', 'Titans', 'Seas', 'Voyage', 'Rangers'
];

const papuaNewGuineaCityPrefixes = [
    'Port Moresby', 'Lae', 'Mount Hagen', 'Madang', 'Goroka', 'Kavieng', 'Kimbe', 'Alotau', 'Wewak', 'Kokopo'
];

const papuaNewGuineaTeamSuffixes = [
    'FC', 'United', 'City', 'Warriors', 'Kastom', 'Barramundi', 'Islanders', 'Rangers', 'Lightning', 'Pirates'
];

const solomonIslandsCityPrefixes = [
    'Honiara', 'Gizo', 'Auki', 'Munda', 'Kirakira', 'Lau', 'Tulagi', 'Buala', 'Taro', 'Yandina'
];

const solomonIslandsTeamSuffixes = [
    'FC', 'United', 'City', 'Warriors', 'Islanders', 'Sharks', 'Tigers', 'Phoenix', 'Rangers', 'Mariners'
];

let currentSeasonYear = 2026;
let currentDate = getSeasonStartDate(currentSeasonYear);
let activeContinentKey = null;
let activeCountryKey = null;
let activeLeagueKey = null;

const appState = {
    continents: [],
    leagues: [],
    trophies: [],
    cups: {},
    cup: null,
    transfers: []
};

function getSeasonStartDate(year) {
    return new Date(year, 0, 1);
}

function init() {
    const built = buildLeagues();
    appState.leagues = enrichLeaguesWithSquads(built.leagues);
    appState.continents = built.continents;
    activeContinentKey = appState.continents[0]?.key || null;
    activeCountryKey = getSelectedContinent()?.countries[0]?.key || null;
    activeLeagueKey = getSelectedCountry()?.leagues[0]?.key || null;
    initializeCup();

    appState.leagues.forEach(league => {
        league.fixtures = generateFixturesForTeams(league.teams, currentSeasonYear);
        league.standings = buildEmptyStandings(league.teams);
    });

    processMatches();
    updateAllStandings();
    renderContinentSelector();
    renderCountrySelector();
    renderLeagueSelector();
    updateDateDisplay();
    renderActiveLeague();
    renderTrophies();
}

function initializeCup(year = currentSeasonYear) {
    if (typeof createEnglishLeagueCup !== 'function') return;
    appState.cups = {};

    appState.continents.forEach(continent => {
        continent.countries.forEach(country => {
            const countryTeams = country.leagues.flatMap(league => league.teams);
            const cup = createEnglishLeagueCup(countryTeams, year, getDateForWeek);
            cup.name = country.name === 'England' ? 'English League Cup' : `${country.name} Cup`;
            cup.key = `${country.key}-cup`;
            cup.countryKey = country.key;
            cup.countryName = country.name;
            appState.cups[country.key] = cup;
        });
    });

    appState.cup = getActiveCup();
}

function getActiveCup() {
    return appState.cups[activeCountryKey] || null;
}

function buildLeagues() {
    const continentsDefinition = [
        { key: 'europe', name: 'Europe', countries: ['England', 'France', 'Spain', 'Germany', 'Italy'] },
        { key: 'americas', name: 'Americas', countries: ['USA', 'Brazil', 'Argentina', 'Mexico', 'Canada'] },
        { key: 'asia', name: 'Asia', countries: ['Japan', 'South Korea', 'China', 'India', 'Australia'] },
        { key: 'africa', name: 'Africa', countries: ['Nigeria', 'Egypt', 'South Africa', 'Morocco', 'Ghana'] },
        { key: 'oceania', name: 'Oceania', countries: ['New Zealand', 'Fiji', 'Samoa', 'Papua New Guinea', 'Solomon Islands'] }
    ];

    const continents = continentsDefinition.map(continent => ({
        ...continent,
        countries: continent.countries.map(countryName => {
            const countryKey = `${continent.key}-${countryName.toLowerCase().replace(/\s+/g, '-')}`;
            const teamNames = generateUniqueTeamNames(80, countryName);
            const pyramid = countryName === 'France' && typeof createFrenchLeagueSystem === 'function'
                ? createFrenchLeagueSystem(teamNames)
                : countryName === 'Germany' && typeof createGermanLeagueSystem === 'function'
                    ? createGermanLeagueSystem(teamNames)
                    : countryName === 'Spain' && typeof createSpanishLeagueSystem === 'function'
                        ? createSpanishLeagueSystem(teamNames)
                        : countryName === 'Italy' && typeof createItalianLeagueSystem === 'function'
                            ? createItalianLeagueSystem(teamNames)
                            : countryName === 'USA' && typeof createUSALeagueSystem === 'function'
                                ? createUSALeagueSystem(teamNames)
                                : countryName === 'Brazil' && typeof createBrazilLeagueSystem === 'function'
                                    ? createBrazilLeagueSystem(teamNames)
                                    : countryName === 'Argentina' && typeof createArgentinaLeagueSystem === 'function'
                                        ? createArgentinaLeagueSystem(teamNames)
                                        : countryName === 'Japan' && typeof createJapanLeagueSystem === 'function'
                                            ? createJapanLeagueSystem(teamNames)
                                            : countryName === 'Australia' && typeof createAustraliaLeagueSystem === 'function'
                                                ? createAustraliaLeagueSystem(teamNames)
                                                : countryName === 'South Africa' && typeof createSouthAfricaLeagueSystem === 'function'
                                                    ? createSouthAfricaLeagueSystem(teamNames)
                                                    : countryName === 'Mexico' && typeof createMexicoLeagueSystem === 'function'
                                                        ? createMexicoLeagueSystem(teamNames)
                                                        : countryName === 'Canada' && typeof createCanadaLeagueSystem === 'function'
                                                            ? createCanadaLeagueSystem(teamNames)
                                                            : countryName === 'South Korea' && typeof createSouthKoreaLeagueSystem === 'function'
                                                                ? createSouthKoreaLeagueSystem(teamNames)
                                                                : countryName === 'China' && typeof createChinaLeagueSystem === 'function'
                                                                    ? createChinaLeagueSystem(teamNames)
                                                                    : countryName === 'India' && typeof createIndiaLeagueSystem === 'function'
                                                                        ? createIndiaLeagueSystem(teamNames)
                                                                        : countryName === 'Nigeria' && typeof createNigeriaLeagueSystem === 'function'
                                                                            ? createNigeriaLeagueSystem(teamNames)
                                                                            : countryName === 'Egypt' && typeof createEgyptLeagueSystem === 'function'
                                                                                ? createEgyptLeagueSystem(teamNames)
                                                                                : countryName === 'Morocco' && typeof createMoroccoLeagueSystem === 'function'
                                                                                    ? createMoroccoLeagueSystem(teamNames)
                                                                                    : countryName === 'Ghana' && typeof createGhanaLeagueSystem === 'function'
                                                                                        ? createGhanaLeagueSystem(teamNames)
                                                                                        : countryName === 'New Zealand' && typeof createNewZealandLeagueSystem === 'function'
                                                                                            ? createNewZealandLeagueSystem(teamNames)
                                                                                            : countryName === 'Fiji' && typeof createFijiLeagueSystem === 'function'
                                                                                                ? createFijiLeagueSystem(teamNames)
                                                                                                : countryName === 'Samoa' && typeof createSamoaLeagueSystem === 'function'
                                                                                                    ? createSamoaLeagueSystem(teamNames)
                                                                                                    : countryName === 'Papua New Guinea' && typeof createPapuaNewGuineaLeagueSystem === 'function'
                                                                                                        ? createPapuaNewGuineaLeagueSystem(teamNames)
                                                                                                        : countryName === 'Solomon Islands' && typeof createSolomonIslandsLeagueSystem === 'function'
                                                                                                            ? createSolomonIslandsLeagueSystem(teamNames)
                                                                                                            : typeof createEnglishLeagueSystem === 'function'
                                                                                                                ? createEnglishLeagueSystem(teamNames)
                                                                                                                : null;

            const leagues = pyramid ? pyramid.divisions.map(division => ({
                ...division,
                key: `${countryKey}-${division.key}`,
                teams: division.teams.map(team => ({
                    ...team,
                    id: `${countryKey}-${team.id}`,
                    countryKey,
                    countryName
                })),
                countryKey,
                countryName,
                continentKey: continent.key,
                continentName: continent.name,
                fixtures: [],
                standings: []
            })) : [
                { key: `${countryKey}-premier-league`, name: 'Premier League', level: 1, teams: teamNames.slice(0, 20).map(createTeamMapper(`${countryKey}-premier`, countryKey, countryName)), fixtures: [], standings: [] },
                { key: `${countryKey}-championship`, name: 'Championship', level: 2, teams: teamNames.slice(20, 40).map(createTeamMapper(`${countryKey}-championship`, countryKey, countryName)), fixtures: [], standings: [] },
                { key: `${countryKey}-league-one`, name: 'League One', level: 3, teams: teamNames.slice(40, 60).map(createTeamMapper(`${countryKey}-league1`, countryKey, countryName)), fixtures: [], standings: [] },
                { key: `${countryKey}-league-two`, name: 'League Two', level: 4, teams: teamNames.slice(60, 80).map(createTeamMapper(`${countryKey}-league2`, countryKey, countryName)), fixtures: [], standings: [] }
            ];

            return {
                key: countryKey,
                name: countryName,
                leagues
            };
        })
    }));

    const leagues = continents.flatMap(continent => continent.countries.flatMap(country => country.leagues));
    return { continents, leagues };
}

function createTeamMapper(prefix, countryKey = '', countryName = '') {
    return (name, idx) => ({ id: `${prefix}-${idx + 1}`, name, countryKey, countryName });
}

function generateUniqueTeamNames(count, countryName = '') {
    const used = new Set();
    const names = [];
    const isFrench = countryName === 'France';
    const isGerman = countryName === 'Germany';
    const isSpanish = countryName === 'Spain';
    const isItalian = countryName === 'Italy';
    const isUSA = countryName === 'USA';
    const isBrazil = countryName === 'Brazil';
    const isArgentina = countryName === 'Argentina';
    const isJapan = countryName === 'Japan';
    const isAustralia = countryName === 'Australia';
    const isSouthAfrica = countryName === 'South Africa';
    const isMexico = countryName === 'Mexico';
    const isCanada = countryName === 'Canada';
    const isSouthKorea = countryName === 'South Korea';
    const isChina = countryName === 'China';
    const isIndia = countryName === 'India';
    const isNigeria = countryName === 'Nigeria';
    const isEgypt = countryName === 'Egypt';
    const isMorocco = countryName === 'Morocco';
    const isGhana = countryName === 'Ghana';
    const isNewZealand = countryName === 'New Zealand';
    const isFiji = countryName === 'Fiji';
    const isSamoa = countryName === 'Samoa';
    const isPapuaNewGuinea = countryName === 'Papua New Guinea';
    const isSolomonIslands = countryName === 'Solomon Islands';

    while (names.length < count) {
        const prefix = isFrench
            ? frenchCityPrefixes[Math.floor(Math.random() * frenchCityPrefixes.length)]
            : isGerman
                ? germanCityPrefixes[Math.floor(Math.random() * germanCityPrefixes.length)]
                : isSpanish
                    ? spanishCityPrefixes[Math.floor(Math.random() * spanishCityPrefixes.length)]
                    : isItalian
                        ? italianCityPrefixes[Math.floor(Math.random() * italianCityPrefixes.length)]
                        : isUSA
                            ? usaCityPrefixes[Math.floor(Math.random() * usaCityPrefixes.length)]
                            : isBrazil
                                ? brazilCityPrefixes[Math.floor(Math.random() * brazilCityPrefixes.length)]
                                : isArgentina
                                    ? argentinaCityPrefixes[Math.floor(Math.random() * argentinaCityPrefixes.length)]
                                    : isJapan
                                        ? japanCityPrefixes[Math.floor(Math.random() * japanCityPrefixes.length)]
                                        : isAustralia
                                            ? australiaCityPrefixes[Math.floor(Math.random() * australiaCityPrefixes.length)]
                                            : isSouthAfrica
                                                ? southAfricaCityPrefixes[Math.floor(Math.random() * southAfricaCityPrefixes.length)]
                                                : isMexico
                                                    ? mexicoCityPrefixes[Math.floor(Math.random() * mexicoCityPrefixes.length)]
                                                    : isCanada
                                                        ? canadaCityPrefixes[Math.floor(Math.random() * canadaCityPrefixes.length)]
                                                        : isSouthKorea
                                                            ? southKoreaCityPrefixes[Math.floor(Math.random() * southKoreaCityPrefixes.length)]
                                                            : isChina
                                                                ? chinaCityPrefixes[Math.floor(Math.random() * chinaCityPrefixes.length)]
                                                                : isIndia
                                                                    ? indiaCityPrefixes[Math.floor(Math.random() * indiaCityPrefixes.length)]
                                                                    : isNigeria
                                                                        ? nigeriaCityPrefixes[Math.floor(Math.random() * nigeriaCityPrefixes.length)]
                                                                        : isEgypt
                                                                            ? egyptCityPrefixes[Math.floor(Math.random() * egyptCityPrefixes.length)]
                                                                            : isMorocco
                                                                                ? moroccoCityPrefixes[Math.floor(Math.random() * moroccoCityPrefixes.length)]
                                                                                : isGhana
                                                                                    ? ghanaCityPrefixes[Math.floor(Math.random() * ghanaCityPrefixes.length)]
                                                                                    : isNewZealand
                                                                                        ? newZealandCityPrefixes[Math.floor(Math.random() * newZealandCityPrefixes.length)]
                                                                                        : isFiji
                                                                                            ? fijiCityPrefixes[Math.floor(Math.random() * fijiCityPrefixes.length)]
                                                                                            : isSamoa
                                                                                                ? samoaCityPrefixes[Math.floor(Math.random() * samoaCityPrefixes.length)]
                                                                                                : isPapuaNewGuinea
                                                                                                    ? papuaNewGuineaCityPrefixes[Math.floor(Math.random() * papuaNewGuineaCityPrefixes.length)]
                                                                                                    : isSolomonIslands
                                                                                                        ? solomonIslandsCityPrefixes[Math.floor(Math.random() * solomonIslandsCityPrefixes.length)]
                                                                                                        : cityPrefixes[Math.floor(Math.random() * cityPrefixes.length)];
        const suffix = isFrench
            ? frenchTeamSuffixes[Math.floor(Math.random() * frenchTeamSuffixes.length)]
            : isGerman
                ? germanTeamSuffixes[Math.floor(Math.random() * germanTeamSuffixes.length)]
                : isSpanish
                    ? spanishTeamSuffixes[Math.floor(Math.random() * spanishTeamSuffixes.length)]
                    : isItalian
                        ? italianTeamSuffixes[Math.floor(Math.random() * italianTeamSuffixes.length)]
                        : isUSA
                            ? usaTeamSuffixes[Math.floor(Math.random() * usaTeamSuffixes.length)]
                            : isBrazil
                                ? brazilTeamSuffixes[Math.floor(Math.random() * brazilTeamSuffixes.length)]
                                : isArgentina
                                    ? argentinaTeamSuffixes[Math.floor(Math.random() * argentinaTeamSuffixes.length)]
                                    : isJapan
                                        ? japanTeamSuffixes[Math.floor(Math.random() * japanTeamSuffixes.length)]
                                        : isAustralia
                                            ? australiaTeamSuffixes[Math.floor(Math.random() * australiaTeamSuffixes.length)]
                                            : isSouthAfrica
                                                ? southAfricaTeamSuffixes[Math.floor(Math.random() * southAfricaTeamSuffixes.length)]
                                                : isMexico
                                                    ? mexicoTeamSuffixes[Math.floor(Math.random() * mexicoTeamSuffixes.length)]
                                                    : isCanada
                                                        ? canadaTeamSuffixes[Math.floor(Math.random() * canadaTeamSuffixes.length)]
                                                        : isSouthKorea
                                                            ? southKoreaTeamSuffixes[Math.floor(Math.random() * southKoreaTeamSuffixes.length)]
                                                            : isChina
                                                                ? chinaTeamSuffixes[Math.floor(Math.random() * chinaTeamSuffixes.length)]
                                                                : isIndia
                                                                    ? indiaTeamSuffixes[Math.floor(Math.random() * indiaTeamSuffixes.length)]
                                                                    : isNigeria
                                                                        ? nigeriaTeamSuffixes[Math.floor(Math.random() * nigeriaTeamSuffixes.length)]
                                                                        : isEgypt
                                                                            ? egyptTeamSuffixes[Math.floor(Math.random() * egyptTeamSuffixes.length)]
                                                                            : isMorocco
                                                                                ? moroccoTeamSuffixes[Math.floor(Math.random() * moroccoTeamSuffixes.length)]
                                                                                : isGhana
                                                                                    ? ghanaTeamSuffixes[Math.floor(Math.random() * ghanaTeamSuffixes.length)]
                                                                                    : isNewZealand
                                                                                        ? newZealandTeamSuffixes[Math.floor(Math.random() * newZealandTeamSuffixes.length)]
                                                                                        : isFiji
                                                                                            ? fijiTeamSuffixes[Math.floor(Math.random() * fijiTeamSuffixes.length)]
                                                                                            : isSamoa
                                                                                                ? samoaTeamSuffixes[Math.floor(Math.random() * samoaTeamSuffixes.length)]
                                                                                                : isPapuaNewGuinea
                                                                                                    ? papuaNewGuineaTeamSuffixes[Math.floor(Math.random() * papuaNewGuineaTeamSuffixes.length)]
                                                                                                    : isSolomonIslands
                                                                                                        ? solomonIslandsTeamSuffixes[Math.floor(Math.random() * solomonIslandsTeamSuffixes.length)]
                                                                                                        : teamSuffixes[Math.floor(Math.random() * teamSuffixes.length)];
        const teamName = `${prefix} ${suffix}${countryName ? ` (${countryName})` : ''}`;

        if (!used.has(teamName)) {
            used.add(teamName);
            names.push(teamName);
        }
    }

    return names;
}

function enrichLeaguesWithSquads(leagues) {
    return leagues.map(league => ({
        ...league,
        teams: league.teams.map(team => {
            if (typeof attachSquadToTeam === 'function') {
                return attachSquadToTeam(team, league.level);
            }
            return { ...team, players: [], teamRating: 0 };
        })
    }));
}

function generateFixturesForTeams(teams, year = currentSeasonYear) {
    const n = teams.length;
    const allRounds = [];

    for (let half = 0; half < 2; half++) {
        const positions = Array.from({ length: n }, (_, i) => i);

        for (let round = 0; round < n - 1; round++) {
            const roundMatches = [];

            const firstHome = positions[0];
            const firstAway = positions[n - 1];
            roundMatches.push(half === 0
                ? { homeIdx: firstHome, awayIdx: firstAway }
                : { homeIdx: firstAway, awayIdx: firstHome });

            for (let i = 1; i < (n - 1) / 2; i++) {
                const homeIdx = positions[i];
                const awayIdx = positions[n - 1 - i];

                roundMatches.push(half === 0
                    ? { homeIdx, awayIdx }
                    : { homeIdx: awayIdx, awayIdx: homeIdx });
            }

            allRounds.push(roundMatches);

            const temp = positions[n - 1];
            positions.splice(n - 1, 1);
            positions.splice(1, 0, temp);
        }
    }

    const weeks = [1, 2, 3, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 43, 44, 45, 46];
    const fixtures = [];
    let fixtureId = 1;

    allRounds.forEach((roundMatches, roundIndex) => {
        const week = weeks[roundIndex] || 47 + (roundIndex - weeks.length);
        roundMatches.forEach(match => {
            fixtures.push({
                id: fixtureId++,
                homeTeamId: teams[match.homeIdx].id,
                awayTeamId: teams[match.awayIdx].id,
                homeTeamName: teams[match.homeIdx].name,
                awayTeamName: teams[match.awayIdx].name,
                homeTeamRating: teams[match.homeIdx].teamRating || 0,
                awayTeamRating: teams[match.awayIdx].teamRating || 0,
                homeScore: null,
                awayScore: null,
                played: false,
                week,
                date: getDateForWeek(week, year)
            });
        });
    });

    return fixtures;
}

function getDateForWeek(weekNumber, year = currentSeasonYear) {
    const jan1 = new Date(year, 0, 1);
    const firstSaturday = new Date(year, 0, 1 + ((6 - jan1.getDay() + 7) % 7));
    const weekDate = new Date(firstSaturday);
    weekDate.setDate(firstSaturday.getDate() + (weekNumber - 1) * 7);
    return weekDate;
}

function getCurrentWeekNumber() {
    const jan1 = new Date(currentSeasonYear, 0, 1);
    const firstSaturday = new Date(currentSeasonYear, 0, 1 + ((6 - jan1.getDay() + 7) % 7));

    if (currentDate < firstSaturday) {
        return 0;
    }

    const diffMs = currentDate - firstSaturday;
    return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7)) + 1;
}

function buildEmptyStandings(teams) {
    return teams.map(team => ({
        id: team.id,
        name: team.name,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0
    }));
}

function changeDate(days) {
    currentDate.setDate(currentDate.getDate() + days);

    // Cap at week 52
    const maxDate = getDateForWeek(52, currentSeasonYear);
    if (currentDate > maxDate) {
        currentDate = new Date(maxDate);
    }

    processMatches();
    updateAllStandings();
    updateDateDisplay();
    renderActiveLeague();
    if (document.getElementById('cupView')?.classList.contains('active')) {
        renderCup();
    }
}

function pickMatchSquad(team) {
    if (!team || !Array.isArray(team.players)) return [];

    const selected = [];
    const players = team.players || [];

    players.forEach(player => {
        const chance = player.playChance || (player.role === 'starter' ? 70 : player.role === 'upcoming' ? 20 : 10);
        if (Math.random() * 100 < chance) {
            selected.push(player);
        }
    });

    if (selected.length < 11) {
        const filler = [...players]
            .filter(player => !selected.includes(player))
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 11 - selected.length);
        selected.push(...filler);
    }

    return selected.slice(0, 11);
}

function calculateLineupStrength(lineup, fallbackRating) {
    if (!lineup || lineup.length === 0) return fallbackRating || 50;
    const avg = lineup.reduce((sum, p) => sum + p.rating, 0) / lineup.length;
    return avg;
}

function simulateGoals(ownStrength, oppStrength, homeAdvantage = 0) {
    const strengthFactor = (ownStrength - oppStrength) / 55;
    const base = 1.05 + strengthFactor + homeAdvantage;
    const noise = Math.random() * 2.4;
    return Math.max(0, Math.min(7, Math.floor(base + noise)));
}

function weightedRandom(players) {
    if (!players || players.length === 0) return null;
    return players[Math.floor(Math.random() * players.length)];
}

function pickGoalScorer(lineup) {
    const attackers = lineup.filter(p => p.position === 'ATT');
    const midfielders = lineup.filter(p => p.position === 'MID');
    const defenders = lineup.filter(p => p.position === 'DEF');

    const roll = Math.random() * 100;
    if (roll < 60 && attackers.length) return weightedRandom(attackers);
    if (roll < 90 && midfielders.length) return weightedRandom(midfielders);
    if (defenders.length) return weightedRandom(defenders);

    return weightedRandom(lineup.filter(p => p.position !== 'GK')) || weightedRandom(lineup);
}

function pickAssistProvider(lineup, scorer) {
    const candidates = lineup.filter(p => p !== scorer && p.position !== 'GK');
    if (!candidates.length || Math.random() < 0.25) return null;
    return weightedRandom(candidates);
}

function randomDelta(maxAbs) {
    return (Math.random() * maxAbs * 2) - maxAbs;
}

function calculatePlayerMatchRating(player, won, goals, assists) {
    let rating = 6.6;

    if (player.position === 'ATT') {
        if (won) rating += 0.5;
        else rating -= 0.35;
        rating += goals * (1 + randomDelta(0.3));
        rating += assists * (0.8 + randomDelta(0.2));
        if (!goals && !assists) rating -= 0.25 + randomDelta(0.25);
    } else if (player.position === 'MID') {
        if (won) rating += 0.8;
        else rating -= 0.35;
        rating += goals * (0.7 + randomDelta(0.3));
        rating += assists * (0.7 + randomDelta(0.3));
        if (!goals && !assists) rating -= 0.25 + randomDelta(0.25);
    } else if (player.position === 'DEF') {
        if (won) rating += 1.0;
        else rating -= 0.7 + randomDelta(0.25);
        rating += goals * 1.0;
        rating += assists * 0.8;
    } else {
        rating += won ? 0.7 : -0.4;
    }

    return Number(Math.max(1, Math.min(10, rating)).toFixed(1));
}

function processLineupPerformance(lineup, teamGoals, oppGoals) {
    const won = teamGoals > oppGoals;
    const goalsByPlayer = new Map();
    const assistsByPlayer = new Map();
    const playerKey = player => `${player.name}|${player.position}`;

    for (let i = 0; i < teamGoals; i++) {
        const scorer = pickGoalScorer(lineup);
        if (!scorer) continue;
        const scorerKey = playerKey(scorer);
        goalsByPlayer.set(scorerKey, (goalsByPlayer.get(scorerKey) || 0) + 1);

        const assister = pickAssistProvider(lineup, scorer);
        if (assister) {
            const assisterKey = playerKey(assister);
            assistsByPlayer.set(assisterKey, (assistsByPlayer.get(assisterKey) || 0) + 1);
        }
    }

    return lineup.map(player => {
        const key = playerKey(player);
        const goals = goalsByPlayer.get(key) || 0;
        const assists = assistsByPlayer.get(key) || 0;
        const matchRating = calculatePlayerMatchRating(player, won, goals, assists);

        player.seasonMatchRatings = player.seasonMatchRatings || [];
        player.seasonMatchRatings.push(matchRating);
        player.seasonGoals = (player.seasonGoals || 0) + goals;
        player.seasonAssists = (player.seasonAssists || 0) + assists;

        return {
            id: player.id,
            name: player.name,
            position: player.position,
            rating: player.rating,
            role: player.role,
            goals,
            assists,
            matchRating
        };
    });
}

function processMatches() {
    const processSingleFixture = (fixture, homeTeam, awayTeam, isKnockout = false) => {
        const homeLineup = pickMatchSquad(homeTeam);
        const awayLineup = pickMatchSquad(awayTeam);

        const homeStrength = calculateLineupStrength(homeLineup, homeTeam?.teamRating || 50);
        const awayStrength = calculateLineupStrength(awayLineup, awayTeam?.teamRating || 50);

        fixture.homeTeamRating = Number(homeStrength.toFixed(1));
        fixture.awayTeamRating = Number(awayStrength.toFixed(1));
        fixture.homeScore = simulateGoals(homeStrength, awayStrength, 0.2);
        fixture.awayScore = simulateGoals(awayStrength, homeStrength, 0);
        fixture.played = true;

        fixture.homeLineup = processLineupPerformance(homeLineup, fixture.homeScore, fixture.awayScore);
        fixture.awayLineup = processLineupPerformance(awayLineup, fixture.awayScore, fixture.homeScore);

        if (fixture.homeScore === fixture.awayScore) {
            if (isKnockout) {
                fixture.winnerTeamId = Math.random() < 0.5 ? fixture.homeTeamId : fixture.awayTeamId;
                fixture.winnerMethod = 'Penalties';
                fixture.homePenalties = simulateGoals(homeStrength, awayStrength, 0.7) + 1;
                fixture.awayPenalties = simulateGoals(awayStrength, homeStrength, 0.7) + 1;
                if (fixture.homePenalties === fixture.awayPenalties) {
                    fixture.homePenalties += 1;
                }
            } else {
                fixture.winnerTeamId = null;
                fixture.winnerMethod = 'Draw';
                fixture.homePenalties = null;
                fixture.awayPenalties = null;
            }
        } else {
            fixture.winnerTeamId = fixture.homeScore > fixture.awayScore ? fixture.homeTeamId : fixture.awayTeamId;
            fixture.winnerMethod = 'Normal Time';
            fixture.homePenalties = null;
            fixture.awayPenalties = null;
        }
    };

    appState.leagues.forEach(league => {
        league.fixtures.forEach(fixture => {
            if (!fixture.played && fixture.date <= currentDate) {
                const homeTeam = league.teams.find(team => team.id === fixture.homeTeamId);
                const awayTeam = league.teams.find(team => team.id === fixture.awayTeamId);
                processSingleFixture(fixture, homeTeam, awayTeam, false);
            }
        });
    });

    if (appState.cups && typeof appState.cups === 'object') {
        Object.values(appState.cups).forEach(cup => {
            cup.fixtures.forEach(fixture => {
                if (fixture.played || fixture.date > currentDate) return;

                const { team: homeTeam } = findTeamById(fixture.homeTeamId);
                const { team: awayTeam } = findTeamById(fixture.awayTeamId);
                if (!homeTeam || !awayTeam) return;

                const isKnockout = fixture.stage !== 'league';
                processSingleFixture(fixture, homeTeam, awayTeam, isKnockout);
            });

            if (typeof advanceCupIfNeeded === 'function') {
                advanceCupIfNeeded(cup);
            }
        });
    } else if (appState.cup) {
        appState.cup.fixtures.forEach(fixture => {
            if (fixture.played || fixture.date > currentDate) return;

            const { team: homeTeam } = findTeamById(fixture.homeTeamId);
            const { team: awayTeam } = findTeamById(fixture.awayTeamId);
            if (!homeTeam || !awayTeam) return;

            const isKnockout = fixture.stage !== 'league';
            processSingleFixture(fixture, homeTeam, awayTeam, isKnockout);
        });

        if (typeof advanceCupIfNeeded === 'function') {
            advanceCupIfNeeded(appState.cup);
        }
    }
}

function updateAllStandings() {
    appState.leagues.forEach(league => {
        const stats = {};
        league.teams.forEach(team => {
            const starters = (team.players || []).filter(player => player.role === 'starter');
            if (starters.length > 0) {
                team.teamRating = Number((starters.reduce((sum, p) => sum + p.rating, 0) / starters.length).toFixed(1));
            }

            stats[team.id] = {
                id: team.id,
                name: team.name,
                played: 0,
                wins: 0,
                draws: 0,
                losses: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                points: 0,
                rating: team.teamRating || 0
            };
        });

        league.fixtures.forEach(fixture => {
            if (!fixture.played) return;

            const home = stats[fixture.homeTeamId];
            const away = stats[fixture.awayTeamId];

            home.played++;
            away.played++;
            home.goalsFor += fixture.homeScore;
            home.goalsAgainst += fixture.awayScore;
            away.goalsFor += fixture.awayScore;
            away.goalsAgainst += fixture.homeScore;

            if (fixture.homeScore > fixture.awayScore) {
                home.wins++;
                home.points += 3;
                away.losses++;
            } else if (fixture.homeScore < fixture.awayScore) {
                away.wins++;
                away.points += 3;
                home.losses++;
            } else {
                home.draws++;
                away.draws++;
                home.points++;
                away.points++;
            }
        });

        league.standings = Object.values(stats).sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            const gdA = a.goalsFor - a.goalsAgainst;
            const gdB = b.goalsFor - b.goalsAgainst;
            if (gdB !== gdA) return gdB - gdA;
            return b.goalsFor - a.goalsFor;
        });
    });
}

function isSeasonFinished() {
    const total = appState.leagues.reduce((acc, league) => acc + league.fixtures.length, 0);
    const played = appState.leagues.reduce((acc, league) => acc + league.fixtures.filter(f => f.played).length, 0);
    const leagueFinished = total > 0 && played === total;
    if (!appState.cup) return leagueFinished;

    return leagueFinished && appState.cup.completed;
}

function canStartNewSeason() {
    return getCurrentWeekNumber() >= 52;
}

function getSelectedContinent() {
    return appState.continents.find(continent => continent.key === activeContinentKey) || appState.continents[0];
}

function getSelectedCountry() {
    const continent = getSelectedContinent();
    return continent?.countries.find(country => country.key === activeCountryKey) || continent?.countries[0];
}

function renderContinentSelector() {
    const container = document.getElementById('continentSelector');
    container.innerHTML = '';

    appState.continents.forEach(continent => {
        const btn = document.createElement('button');
        btn.className = `league-btn ${continent.key === activeContinentKey ? 'active' : ''}`;
        btn.textContent = continent.name;
        btn.onclick = () => setActiveContinent(continent.key);
        container.appendChild(btn);
    });
}

function renderCountrySelector() {
    const container = document.getElementById('countrySelector');
    container.innerHTML = '';

    const continent = getSelectedContinent();
    if (!continent) return;

    continent.countries.forEach(country => {
        const btn = document.createElement('button');
        btn.className = `league-btn ${country.key === activeCountryKey ? 'active' : ''}`;
        btn.textContent = country.name;
        btn.onclick = () => setActiveCountry(country.key);
        container.appendChild(btn);
    });
}

function renderLeagueSelector() {
    const container = document.getElementById('leagueSelector');
    container.innerHTML = '';

    const country = getSelectedCountry();
    if (!country) return;

    country.leagues.forEach(league => {
        const btn = document.createElement('button');
        btn.className = `league-btn ${league.key === activeLeagueKey ? 'active' : ''}`;
        btn.textContent = league.name;
        btn.onclick = () => setActiveLeague(league.key);
        container.appendChild(btn);
    });
}

function setActiveContinent(continentKey) {
    activeContinentKey = continentKey;
    activeCountryKey = getSelectedContinent()?.countries[0]?.key || null;
    activeLeagueKey = getSelectedCountry()?.leagues[0]?.key || null;
    appState.cup = getActiveCup();
    renderContinentSelector();
    renderCountrySelector();
    renderLeagueSelector();
    renderActiveLeague();
    if (document.getElementById('cupView')?.classList.contains('active')) {
        renderCup();
    }
}

function setActiveCountry(countryKey) {
    activeCountryKey = countryKey;
    activeLeagueKey = getSelectedCountry()?.leagues[0]?.key || null;
    appState.cup = getActiveCup();
    renderCountrySelector();
    renderLeagueSelector();
    renderActiveLeague();
    if (document.getElementById('cupView')?.classList.contains('active')) {
        renderCup();
    }
}

function setActiveLeague(leagueKey) {
    activeLeagueKey = leagueKey;
    renderLeagueSelector();
    renderActiveLeague();
}

function getActiveLeague() {
    return appState.leagues.find(league => league.key === activeLeagueKey);
}

function findTeamById(teamId) {
    for (const league of appState.leagues) {
        const team = league.teams.find(item => item.id === teamId);
        if (team) return { team, league };
    }
    return { team: null, league: null };
}

function findPlayerById(playerId) {
    for (const league of appState.leagues) {
        for (const team of league.teams) {
            const player = team.players?.find(p => p.id === playerId);
            if (player) return { player, team, league };
        }
    }
    return { player: null, team: null, league: null };
}

function getTeamPlayerValue(team) {
    return (team.players || []).reduce((sum, player) => sum + (player.marketValue || 0), 0);
}

function calculateLeaguePrize(league, rank) {
    const basePrize = 90000 + (league.level - 1) * 90000;
    const positionFactor = 1 + ((league.teams.length - rank) / league.teams.length) * 0.45;
    return Math.round(basePrize * positionFactor);
}

function distributeLeaguePrizeMoney() {
    appState.leagues.forEach(league => {
        league.standings.forEach((standing, index) => {
            const prizeMoney = calculateLeaguePrize(league, index + 1);
            const { team } = findTeamById(standing.id);
            if (team) {
                team.cashBalance = (team.cashBalance || 0) + prizeMoney;
            }
        });
    });
}

function aggregateGoalsFromFixtures(fixtures) {
    const map = new Map();

    fixtures.forEach(fixture => {
        [{lineup: fixture.homeLineup, teamId: fixture.homeTeamId}, {lineup: fixture.awayLineup, teamId: fixture.awayTeamId}].forEach(({lineup, teamId}) => {
            if (!Array.isArray(lineup)) return;

            lineup.forEach(playerResult => {
                const key = playerResult.id;
                const existing = map.get(key) || {
                    id: key,
                    name: playerResult.name,
                    rating: playerResult.rating || 0,
                    age: 0,
                    goals: 0,
                    teamId,
                    teamName: '',
                    teamRating: 0
                };

                const { team } = findTeamById(teamId);
                const player = team?.players?.find(p => p.id === key);

                existing.teamName = team?.name || existing.teamName;
                existing.teamRating = team?.teamRating || existing.teamRating;
                existing.age = player?.age ?? existing.age;
                existing.rating = player?.rating ?? existing.rating;
                existing.goals += playerResult.goals || 0;
                map.set(key, existing);
            });
        });
    });

    return Array.from(map.values()).filter(entry => entry.goals > 0);
}

function getTopScorersForLeague(league, count = 5) {
    const fixtures = league.fixtures.filter(fixture => fixture.played);
    const scorers = aggregateGoalsFromFixtures(fixtures);
    return scorers.sort((a, b) => b.goals - a.goals || b.rating - a.rating || a.name.localeCompare(b.name)).slice(0, count);
}

function getTopScorersForCup(count = 5) {
    if (!appState.cup) return [];
    const fixtures = appState.cup.fixtures.filter(fixture => fixture.played && (fixture.homeLineup || fixture.awayLineup));
    const scorers = aggregateGoalsFromFixtures(fixtures);
    return scorers.sort((a, b) => b.goals - a.goals || b.rating - a.rating || a.name.localeCompare(b.name)).slice(0, count);
}

function updateDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = currentDate.toLocaleDateString('en-GB', options);
    const week = getCurrentWeekNumber();
    document.getElementById('currentDate').textContent = `${dateString.charAt(0).toUpperCase() + dateString.slice(1)} • Week ${week}`;

    const total = appState.leagues.reduce((acc, league) => acc + league.fixtures.length, 0);
    const played = appState.leagues.reduce((acc, league) => acc + league.fixtures.filter(f => f.played).length, 0);
    const cupTotal = appState.cup ? appState.cup.fixtures.length : 0;
    const cupPlayed = appState.cup ? appState.cup.fixtures.filter(f => f.played).length : 0;
    const cupStage = appState.cup && typeof getCurrentCupStage === 'function' ? getCurrentCupStage(appState.cup) : null;
    const cupDone = !appState.cup || appState.cup.completed;
    const finished = played === total && total > 0 && cupDone;

    const status = finished
        ? `Season ${currentSeasonYear} finished • League ${played}/${total}, Cup ${cupPlayed}/${cupTotal}`
        : `Season ${currentSeasonYear} running • League ${played}/${total}, Cup ${cupPlayed}/${cupTotal}${cupStage && cupStage !== 'completed' ? ` • Cup stage: ${cupStage}` : ''}`;

    const restriction = canStartNewSeason()
        ? '• You can start the new season now.'
        : '• New season only available after all matches are played.';

    document.getElementById('seasonStatus').textContent = `${status} ${restriction}`;

    const startBtn = document.getElementById('startNewSeasonBtn');
    const allowNewSeason = canStartNewSeason();
    const atWeek52 = getCurrentWeekNumber() >= 52;

    startBtn.disabled = !allowNewSeason;
    startBtn.style.opacity = allowNewSeason ? '1' : '0.6';
    startBtn.style.cursor = allowNewSeason ? 'pointer' : 'not-allowed';

    document.querySelectorAll('.time-forward-btn').forEach(btn => {
        btn.disabled = atWeek52;
        btn.style.opacity = atWeek52 ? '0.5' : '1';
        btn.style.cursor = atWeek52 ? 'not-allowed' : 'pointer';
    });
}

function renderActiveLeague() {
    const league = getActiveLeague();
    if (!league) return;

    const continent = getSelectedContinent();
    const country = getSelectedCountry();
    const titlePrefix = `${continent?.name || ''} / ${country?.name || ''}`;

    document.getElementById('standingsTitle').textContent = `${titlePrefix} • ${league.name} Standings`;
    document.getElementById('fixturesTitle').textContent = `${titlePrefix} • ${league.name} Fixtures & Results`;

    renderStandings(league);
    renderFixtures(league);
}

function renderStandings(league) {
    const tbody = document.getElementById('standingsBody');
    tbody.innerHTML = '';

    league.standings.forEach((team, index) => {
        const gd = team.goalsFor - team.goalsAgainst;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><button class="team-link" onclick="showTeamDetails('${team.id}')">${team.name}</button></td>
            <td>${((league.teams.find(t => t.id === team.id)?.teamRating ?? team.rating) || 0).toFixed(1)}</td>
            <td>${team.played}</td>
            <td>${team.wins}</td>
            <td>${team.draws}</td>
            <td>${team.losses}</td>
            <td>${team.goalsFor}</td>
            <td>${team.goalsAgainst}</td>
            <td>${gd > 0 ? '+' : ''}${gd}</td>
            <td class="pts">${team.points}</td>
        `;
        tbody.appendChild(row);
    });
}

function renderFixtures(league) {
    const content = document.getElementById('fixturesContent');
    content.innerHTML = '';

    const today = league.fixtures.filter(f => isSameDay(f.date, currentDate));
    const upcoming = league.fixtures.filter(f => !f.played).sort((a, b) => a.date - b.date);
    const past = league.fixtures.filter(f => f.played).sort((a, b) => b.date - a.date);

    if (today.length) {
        addSection(content, `🔴 Today's Matches (${today.length})`);
        today.forEach(f => content.appendChild(createFixtureCard(f, 'today')));
    }

    if (upcoming.length) {
        addSection(content, '📅 Upcoming Matches');
        upcoming.slice(0, 10).forEach(f => content.appendChild(createFixtureCard(f, 'upcoming')));
    }

    if (past.length) {
        addSection(content, `✅ Past Matches (${past.length})`);
        past.slice(0, 10).forEach(f => content.appendChild(createFixtureCard(f, 'past')));
    }
}

function addSection(content, title) {
    const section = document.createElement('div');
    section.className = 'section-title';
    section.textContent = title;
    content.appendChild(section);
}

function createFixtureCard(fixture, type) {
    const card = document.createElement('div');
    card.className = `fixture-card ${type}`;
    card.onclick = () => showFixtureDetails(fixture.id);

    const dateString = fixture.date.toLocaleDateString('en-GB', { weekday: 'short', month: 'short', day: 'numeric' });
    const penaltySummary = fixture.played && fixture.winnerMethod === 'Penalties'
        ? ` (${fixture.homePenalties}-${fixture.awayPenalties} pens)`
        : '';
    const matchResult = fixture.played ? `${fixture.homeScore} - ${fixture.awayScore}${penaltySummary}` : '-';
    const statusLabel = fixture.played
        ? `✓ Played${fixture.winnerMethod === 'Penalties' ? ' • Penalties' : ''}`
        : 'To be played';

    card.innerHTML = `
        <div class="fixture-date">Week ${fixture.week} • ${dateString}</div>
        <div class="fixture-match">
            <span class="team-name"><button class="team-link" onclick="event.stopPropagation();showTeamDetails('${fixture.homeTeamId}')">${fixture.homeTeamName}</button> <small>(RTG ${fixture.homeTeamRating.toFixed(1)})</small></span>
            <div class="match-score">${matchResult}</div>
            <span class="team-name"><button class="team-link" onclick="event.stopPropagation();showTeamDetails('${fixture.awayTeamId}')">${fixture.awayTeamName}</button> <small>(RTG ${fixture.awayTeamRating.toFixed(1)})</small></span>
        </div>
        <div class="fixture-status">${statusLabel}</div>
        <div class="fixture-click-hint">Klik voor opstelling</div>
    `;

    return card;
}

function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate();
}

function showStandings(button) {
    document.getElementById('standingsView').classList.add('active');
    document.getElementById('fixturesView').classList.remove('active');
    document.getElementById('topScorersView').classList.remove('active');
    document.getElementById('trophiesView').classList.remove('active');
    document.getElementById('cupView').classList.remove('active');
    setMenuActive(button);
}

function showFixtures(button) {
    document.getElementById('standingsView').classList.remove('active');
    document.getElementById('fixturesView').classList.add('active');
    document.getElementById('topScorersView').classList.remove('active');
    document.getElementById('trophiesView').classList.remove('active');
    document.getElementById('cupView').classList.remove('active');
    setMenuActive(button);
}

function showTrophies(button) {
    document.getElementById('standingsView').classList.remove('active');
    document.getElementById('fixturesView').classList.remove('active');
    document.getElementById('topScorersView').classList.remove('active');
    document.getElementById('trophiesView').classList.add('active');
    document.getElementById('cupView').classList.remove('active');
    setMenuActive(button);
    renderTrophies();
}

function showCup(button) {
    document.getElementById('standingsView').classList.remove('active');
    document.getElementById('fixturesView').classList.remove('active');
    document.getElementById('topScorersView').classList.remove('active');
    document.getElementById('transfersView').classList.remove('active');
    document.getElementById('trophiesView').classList.remove('active');
    document.getElementById('cupView').classList.add('active');
    setMenuActive(button);
    renderCup();
}

function showTopScorers(button) {
    document.getElementById('standingsView').classList.remove('active');
    document.getElementById('fixturesView').classList.remove('active');
    document.getElementById('cupView').classList.remove('active');
    document.getElementById('transfersView').classList.remove('active');
    document.getElementById('trophiesView').classList.remove('active');
    document.getElementById('topScorersView').classList.add('active');
    setMenuActive(button);
    renderTopScorers();
}

function showTransfers(button) {
    document.getElementById('standingsView').classList.remove('active');
    document.getElementById('fixturesView').classList.remove('active');
    document.getElementById('cupView').classList.remove('active');
    document.getElementById('topScorersView').classList.remove('active');
    document.getElementById('trophiesView').classList.remove('active');
    document.getElementById('transfersView').classList.add('active');
    setMenuActive(button);
    renderTransfers();
}

function renderTransfers() {
    const content = document.getElementById('transfersContent');
    content.innerHTML = '';

    const recentTransfers = appState.transfers.filter(transfer => transfer.season >= currentSeasonYear - 2);
    if (!recentTransfers.length) {
        content.innerHTML = '<p>Er zijn nog geen transfers geweest in de laatste 2 jaar.</p>';
        return;
    }

    const sortedTransfers = recentTransfers.slice().sort((a, b) => b.transferFee - a.transferFee);

    const table = document.createElement('table');
    table.className = 'transfer-table';
    table.innerHTML = `
        <thead>
            <tr><th>Date</th><th>Player</th><th>From</th><th>To</th><th>Fee</th></tr>
        </thead>
        <tbody>
            ${sortedTransfers.map(transfer => `
                <tr>
                    <td>${transfer.date}</td>
                    <td><button class="player-link" onclick="showPlayerDetails('${transfer.toTeamId}','${transfer.playerId}')">${transfer.playerName}</button></td>
                    <td><button class="team-link" onclick="showTeamDetails('${transfer.fromTeamId}')">${transfer.fromTeamName} (${transfer.fromTeamRating.toFixed(1)})</button></td>
                    <td><button class="team-link" onclick="showTeamDetails('${transfer.toTeamId}')">${transfer.toTeamName} (${transfer.toTeamRating.toFixed(1)})</button></td>
                    <td>€${Number(transfer.transferFee).toLocaleString()}</td>
                </tr>
            `).join('')}
        </tbody>
    `;

    content.appendChild(table);
}

function setMenuActive(button) {
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
    if (button) button.classList.add('active');
}

function renderTopScorers() {
    const content = document.getElementById('topScorersContent');
    content.innerHTML = '';

    appState.leagues.forEach(league => {
        const section = document.createElement('div');
        section.className = 'top-scorers-section';
        section.innerHTML = `<h3>${league.name} Top 5</h3>`;

        const topPlayers = getTopScorersForLeague(league);
        if (!topPlayers.length) {
            section.innerHTML += '<p>Geen doelpunten gescoord in deze competitie.</p>';
        } else {
            const table = document.createElement('table');
            table.className = 'league-table';
            table.innerHTML = `
                <thead>
                    <tr><th>Rank</th><th>Player</th><th>Club</th><th>Club RTG</th><th>Player RTG</th><th>Age</th><th>Goals</th></tr>
                </thead>
                <tbody>
                    ${topPlayers.map((player, idx) => `
                        <tr>
                            <td>${idx + 1}</td>
                            <td>${player.name}</td>
                            <td><button class="team-link" onclick="showTeamDetails('${player.teamId}')">${player.teamName}</button></td>
                            <td>${player.teamRating.toFixed(1)}</td>
                            <td>${player.rating}</td>
                            <td>${player.age}</td>
                            <td>${player.goals}</td>
                        </tr>
                    `).join('')}
                </tbody>
            `;
            section.appendChild(table);
        }

        content.appendChild(section);
    });

    if (appState.cup) {
        const cupSection = document.createElement('div');
        cupSection.className = 'top-scorers-section';
        cupSection.innerHTML = `<h3>${appState.cup.name} Top 5</h3>`;

        const topPlayers = getTopScorersForCup();
        if (!topPlayers.length) {
            cupSection.innerHTML += '<p>Geen doelpunten gescoord in de beker.</p>';
        } else {
            const table = document.createElement('table');
            table.className = 'league-table';
            table.innerHTML = `
                <thead>
                    <tr><th>Rank</th><th>Player</th><th>Club</th><th>Club RTG</th><th>Player RTG</th><th>Age</th><th>Goals</th></tr>
                </thead>
                <tbody>
                    ${topPlayers.map((player, idx) => `
                        <tr>
                            <td>${idx + 1}</td>
                            <td>${player.name}</td>
                            <td><button class="team-link" onclick="showTeamDetails('${player.teamId}')">${player.teamName}</button></td>
                            <td>${player.teamRating.toFixed(1)}</td>
                            <td>${player.rating}</td>
                            <td>${player.age}</td>
                            <td>${player.goals}</td>
                        </tr>
                    `).join('')}
                </tbody>
            `;
            cupSection.appendChild(table);
        }

        content.appendChild(cupSection);
    }
}

function captureTrophiesForCurrentSeason() {
    const divisions = appState.leagues
        .slice()
        .sort((a, b) => a.level - b.level)
        .map(league => ({
            division: league.name,
            topTwo: league.standings.slice(0, 2).map(team => ({
                name: team.name,
                points: team.points
            }))
        }));

    appState.trophies.unshift({
        year: currentSeasonYear,
        divisions,
        cupWinner: appState.cup?.winnerTeamId ? (findTeamById(appState.cup.winnerTeamId).team?.name || '-') : '-'
    });
}

function renderTrophies() {
    const content = document.getElementById('trophiesContent');
    content.innerHTML = '';

    if (appState.trophies.length === 0) {
        content.innerHTML = '<p>Nog geen trophies. Speel eerst een seizoen uit.</p>';
        return;
    }

    appState.trophies.forEach(season => {
        const block = document.createElement('div');
        block.className = 'trophy-season';

        const title = document.createElement('h3');
        title.textContent = `Season ${season.year}`;
        block.appendChild(title);

        season.divisions.forEach(division => {
            const item = document.createElement('div');
            item.className = 'trophy-division';
            const first = division.topTwo[0];
            const second = division.topTwo[1];

            item.innerHTML = `
                <strong>${division.division}</strong><br>
                1) ${first ? `${first.name} (${first.points} pts)` : '-'}<br>
                2) ${second ? `${second.name} (${second.points} pts)` : '-'}
            `;
            block.appendChild(item);
        });

        const cup = document.createElement('div');
        cup.className = 'trophy-division';
        cup.innerHTML = `<strong>${appState.cup?.name || 'Country Cup'}</strong><br>Winner: ${season.cupWinner || '-'}`;
        block.appendChild(cup);

        content.appendChild(block);
    });
}

function renderCup() {
    const title = document.getElementById('cupTitle');
    const content = document.getElementById('cupContent');
    if (!title || !content) return;

    if (!appState.cup) {
        title.textContent = 'English League Cup';
        content.innerHTML = '<p>Cup is niet beschikbaar.</p>';
        return;
    }

    const cup = appState.cup;
    const stage = typeof getCurrentCupStage === 'function' ? getCurrentCupStage(cup) : 'round1';
    const stageLabel = stage === 'completed' ? 'Completed' : (cup.stageLabels?.[stage] || stage);
    title.textContent = `${cup.name} • ${stageLabel}`;
    content.innerHTML = '';

    const currentWeek = getCurrentWeekNumber();
    const currentWeekMatches = cup.fixtures.filter(fixture => fixture.week === currentWeek).sort((a, b) => a.date - b.date);
    const currentWeekIds = new Set(currentWeekMatches.map(fixture => fixture.id));
    const stageOrderDisplay = [...cup.stageOrder].reverse();
    const playedStages = stageOrderDisplay.map(stage => ({
        stage,
        label: cup.stageLabels?.[stage] || stage,
        fixtures: cup.fixtures
            .filter(fixture => fixture.stage === stage && fixture.played && !currentWeekIds.has(fixture.id))
            .sort((a, b) => b.date - a.date)
    })).filter(group => group.fixtures.length > 0);
    const upcomingStages = stageOrderDisplay.map(stage => ({
        stage,
        label: cup.stageLabels?.[stage] || stage,
        fixtures: cup.fixtures
            .filter(fixture => fixture.stage === stage && !fixture.played && !currentWeekIds.has(fixture.id))
            .sort((a, b) => a.date - b.date)
    })).filter(group => group.fixtures.length > 0);

    // Ensure played and upcoming fixtures are grouped by their actual stage.
    const getCupStageLabel = (stageKey) => cup.stageLabels?.[stageKey] || stageKey;

    if (currentWeekMatches.length) {
        addSection(content, `🔴 Current Week Cup Matches (${currentWeekMatches.length})`);
        currentWeekMatches.forEach(fixture => content.appendChild(createCupFixtureCard(fixture, fixture.played ? 'past' : 'today')));
    }

    const leaguePhaseStarted = cup.fixtures.some(fixture => fixture.stage === 'league')
        || (Array.isArray(cup.leaguePhaseTeamIds) && cup.leaguePhaseTeamIds.length > 0)
        || (Array.isArray(cup.leagueTable) && cup.leagueTable.length > 0);
    const leagueTable = leaguePhaseStarted ? buildCupLeagueTable(cup) : [];

    if (leaguePhaseStarted && leagueTable.length) {
        const tableCard = document.createElement('div');
        tableCard.className = 'cup-table-card';
        tableCard.innerHTML = `
            <h3>League Phase Standings</h3>
            <table class="league-table">
                <thead>
                    <tr><th>Pos</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>Pts</th></tr>
                </thead>
                <tbody>
                    ${leagueTable.map((row, idx) => {
                        const gd = row.goalsFor - row.goalsAgainst;
                        return `<tr><td>${idx + 1}</td><td><button class="team-link" onclick="showTeamDetails('${row.id}')">${row.name}</button></td><td>${row.played}</td><td>${row.wins}</td><td>${row.draws}</td><td>${row.losses}</td><td>${row.goalsFor}</td><td>${row.goalsAgainst}</td><td>${gd > 0 ? '+' : ''}${gd}</td><td class="pts">${row.points}</td></tr>`;
                    }).join('')}
                </tbody>
            </table>
        `;
        content.appendChild(tableCard);
    }

    playedStages.forEach(group => {
        addSection(content, `✅ Played ${getCupStageLabel(group.stage)} (${group.fixtures.length})`);
        group.fixtures.forEach(fixture => content.appendChild(createCupFixtureCard(fixture, 'past')));
    });

    upcomingStages.forEach(group => {
        addSection(content, `📅 Upcoming ${group.label} (${group.fixtures.length})`);
        group.fixtures.forEach(fixture => content.appendChild(createCupFixtureCard(fixture, 'upcoming')));
    });

}

function createCupFixtureCard(fixture, type) {
    const card = createFixtureCard(fixture, type);
    const stage = document.createElement('div');
    stage.className = 'fixture-status';
    stage.textContent = `Stage: ${fixture.stageLabel || fixture.stage}`;
    card.appendChild(stage);
    return card;
}



function showFixtureDetails(fixtureId) {
    const league = getActiveLeague();
    const fixtureFromLeague = league?.fixtures?.find(match => match.id === fixtureId);
    const fixture = fixtureFromLeague || appState.cup?.fixtures?.find(match => match.id === fixtureId);
    if (!fixture) return;
    const fixtureLeague = fixtureFromLeague ? league : null;

    const modal = document.getElementById('fixtureModal');
    const title = document.getElementById('fixtureModalTitle');
    const meta = document.getElementById('fixtureModalMeta');
    const body = document.getElementById('fixtureModalLineups');

    title.textContent = fixture.played
        ? `${fixture.homeTeamName} ${fixture.homeScore} - ${fixture.awayScore} ${fixture.awayTeamName}`
        : `${fixture.homeTeamName} vs ${fixture.awayTeamName}`;

    const { team: homeTeam } = findTeamById(fixture.homeTeamId);
    const { team: awayTeam } = findTeamById(fixture.awayTeamId);

    const homePlayers = fixture.played
        ? (fixture.homeLineup || [])
        : pickMatchSquad(homeTeam).map(player => ({ id: player.id, name: player.name, position: player.position, rating: player.rating, role: player.role, matchRating: getPlayerSeasonAverage(player), goals: 0, assists: 0 }));
    const awayPlayers = fixture.played
        ? (fixture.awayLineup || [])
        : pickMatchSquad(awayTeam).map(player => ({ id: player.id, name: player.name, position: player.position, rating: player.rating, role: player.role, matchRating: getPlayerSeasonAverage(player), goals: 0, assists: 0 }));


    const formatContrib = (players, field) => {
        const entries = (players || [])
            .filter(player => (player[field] || 0) > 0)
            .map(player => `${player.name} (${player[field]})`);
        return entries.length ? entries.join(', ') : 'none';
    };

    const homeScorers = formatContrib(homePlayers, 'goals');
    const awayScorers = formatContrib(awayPlayers, 'goals');
    const homeAssists = formatContrib(homePlayers, 'assists');
    const awayAssists = formatContrib(awayPlayers, 'assists');

    const competitionLabel = fixtureLeague ? fixtureLeague.name : appState.cup?.name || 'Cup';
    const penaltyDetails = fixture.winnerMethod === 'Penalties'
        ? ` • Penalties ${fixture.homePenalties}-${fixture.awayPenalties}`
        : '';
    meta.textContent = `${competitionLabel} • Week ${fixture.week} • Team ratings: ${(fixture.homeTeamRating || 0).toFixed(1)} vs ${(fixture.awayTeamRating || 0).toFixed(1)}${fixture.played ? '' : ' • Nog niet gespeeld'}${penaltyDetails}`;


    const renderLineup = (players = [], teamId) => {
        if (!players || players.length === 0) {
            return '<div class="team-player-row"><div>Geen opstelling beschikbaar</div><div>-</div><div>-</div><div>-</div><div>-</div><div>-</div><div>-</div></div>';
        }

        return players.map(player =>
            `<div class="team-player-row clickable" onclick="showPlayerDetails('${teamId}','${player.id}')"><div>${player.name}</div><div>${player.position}</div><div>${player.rating}</div><div>${player.role}</div><div>${player.matchRating ?? '0.00'}</div><div>${player.goals ?? 0}</div><div>${player.assists ?? 0}</div></div>`
        ).join('');
    };

    const penaltyLine = fixture.winnerMethod === 'Penalties'
        ? `<div>Penalties: ${fixture.homePenalties} - ${fixture.awayPenalties}</div>`
        : '';
    body.innerHTML = `
        <div class="fixture-team-summary">
            <div class="fixture-team-side home">
                <h4>${fixture.homeTeamName}</h4>
                <div>Scorers: <strong>${homeScorers}</strong></div>
                <div>Assists: <strong>${homeAssists}</strong></div>
            </div>
            <div class="fixture-team-score">${fixture.played ? `${fixture.homeScore} - ${fixture.awayScore}` : 'vs'}</div>
            <div class="fixture-team-side away">
                <h4>${fixture.awayTeamName}</h4>
                <div>Scorers: <strong>${awayScorers}</strong></div>
                <div>Assists: <strong>${awayAssists}</strong></div>
            </div>
        </div>
        ${penaltyLine}
        <div class="lineup-grid">
            <div class="lineup-box">
                <h4>${fixture.homeTeamName}${fixture.played ? '' : ' (verwacht)'}</h4>
                <div class="team-player-row head"><div>Name</div><div>Pos</div><div>Rating</div><div>Role</div><div>MatchRating</div><div>G</div><div>A</div></div>
                ${renderLineup(homePlayers, fixture.homeTeamId)}
            </div>
            <div class="lineup-box">
                <h4>${fixture.awayTeamName}${fixture.played ? '' : ' (verwacht)'}</h4>
                <div class="team-player-row head"><div>Name</div><div>Pos</div><div>Rating</div><div>Role</div><div>MatchRating</div><div>G</div><div>A</div></div>
                ${renderLineup(awayPlayers, fixture.awayTeamId)}
            </div>
        </div>
    `;

    modal.classList.add('open');
}

function closeFixtureModal(event) {
    if (event && event.target && event.target.id !== 'fixtureModal') return;
    document.getElementById('fixtureModal').classList.remove('open');
}

window.showFixtureDetails = showFixtureDetails;
window.closeFixtureModal = closeFixtureModal;



function getPlayerSeasonAverage(player) {
    const ratings = player?.seasonMatchRatings || [];
    if (!ratings.length) return null;
    return Number((ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2));
}

function getTeamSeasonAverageMatchRating(team) {
    const players = team.players || [];
    const ratings = players.flatMap(p => p.seasonMatchRatings || []);
    if (!ratings.length) return null;
    return Number((ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2));
}


function rebalanceTeamRoles(team) {
    const players = team.players || [];
    if (!players.length) return;

    players.forEach(player => {
        player.role = 'bench';
        player.playChance = 10;
    });

    const pickTop = (position, amount) => players
        .filter(p => p.position === position)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, amount);

    const starters = [
        ...pickTop('GK', 1),
        ...pickTop('DEF', 3),
        ...pickTop('MID', 3),
        ...pickTop('ATT', 3)
    ];

    if (starters.length < 11) {
        const extra = players
            .filter(p => !starters.includes(p))
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 11 - starters.length);
        starters.push(...extra);
    }

    starters.forEach(player => {
        player.role = 'starter';
        player.playChance = 70;
    });

    ['GK', 'DEF', 'MID', 'ATT'].forEach(position => {
        const reserves = players
            .filter(p => p.position === position && p.role !== 'starter')
            .sort((a, b) => b.rating - a.rating);
        if (!reserves.length) return;

        reserves[0].role = 'upcoming';
        reserves[0].playChance = reserves.length > 1 ? 20 : 30;
        reserves.slice(1).forEach(player => {
            player.role = 'bench';
            player.playChance = 10;
        });
    });
}

function applyAgeAndRetirement(team, leagueLevel) {
    const updatedPlayers = [];

    (team.players || []).forEach(player => {
        player.age = (player.age || 16) + 1;

        const retireChance = player.age >= 30 ? Math.min(1, (player.age - 29) * 0.1) : 0;
        const retired = Math.random() < retireChance;

        if (retired) {
            if (typeof createReplacementPlayer === 'function') {
                updatedPlayers.push(createReplacementPlayer(leagueLevel, player.position, player.rating, team.countryName));
            } else {
                updatedPlayers.push({
                    ...player,
                    age: 16,
                    rating: Math.max(1, player.rating - 10),
                    seasonMatchRatings: [],
                    seasonGoals: 0,
                    seasonAssists: 0
                });
            }
            return;
        }

        if (typeof calculateMarketValue === 'function') {
            player.marketValue = calculateMarketValue(player.age, player.rating);
        }

        updatedPlayers.push(player);
    });

    team.players = updatedPlayers;
}

function applyEndSeasonPlayerProgression(team, leagueLevel) {
    (team.players || []).forEach(player => {
        const ratings = player.seasonMatchRatings || [];
        if (!ratings.length) return;

        player.history = player.history || [];
        player.history.push({ season: currentSeasonYear, age: player.age || 16, rating: player.rating, marketValue: player.marketValue || 0 });

        const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
        let delta = 0;

        if (avg < 6) {
            delta = -(8 + (Math.random() * 4 - 2));
        } else if (avg >= 6 && avg <= 7.5) {
            delta = (Math.random() * 10) - 5;
        } else if (avg > 8) {
            delta = 8 + (Math.random() * 4 - 2);
        }

        player.rating = Math.max(1, Math.min(100, Number((player.rating + delta).toFixed(1))));
        if (typeof calculateMarketValue === 'function') {
            player.marketValue = calculateMarketValue(player.age || 16, player.rating);
        }
        player.seasonMatchRatings = [];
        player.seasonGoals = 0;
        player.seasonAssists = 0;
    });

    applyAgeAndRetirement(team, leagueLevel);

    rebalanceTeamRoles(team);

    const starters = (team.players || []).filter(p => p.role === 'starter');
    if (starters.length) {
        team.teamRating = Number((starters.reduce((sum, p) => sum + p.rating, 0) / starters.length).toFixed(1));
    }

}


function showPlayerDetails(teamId, playerId) {
    const { team, league } = findTeamById(teamId);
    const player = team?.players?.find(p => p.id === playerId);
    if (!player) return;

    const modal = document.getElementById('playerModal');
    const actions = document.getElementById('playerModalActions');
    const title = document.getElementById('playerModalTitle');
    const body = document.getElementById('playerModalBody');

    const playerCountry = player.countryName || team.countryName || 'Unknown';
    title.textContent = `${player.name} (${playerCountry})`;

    const historyRows = (player.history || [])
        .slice()
        .reverse()
        .map(h => `<tr><td>${h.season}</td><td>${h.age}</td><td>${h.rating}</td><td>€${Number(h.marketValue || 0).toLocaleString()}</td></tr>`)
        .join('');

    const careerRows = (player.careerHistory || [])
        .slice()
        .reverse()
        .map(entry => `<tr><td>${entry.season}</td><td><button class="team-link" onclick="showTeamDetails('${entry.teamId}')">${entry.teamName}</button></td></tr>`)
        .join('');

    const transferRows = (player.transferHistory || [])
        .slice()
        .reverse()
        .map(transfer => `<tr><td>${transfer.season}</td><td>${transfer.fromTeamName}</td><td>${transfer.toTeamName}</td><td>€${Number(transfer.fee).toLocaleString()}</td></tr>`)
        .join('');

    const buyerOptions = appState.leagues
        .flatMap(league => league.teams)
        .filter(t => t.id !== team.id)
        .sort((a, b) => a.name.localeCompare(b.name));

    const buyerSelect = buyerOptions.length ? `
        <div class="player-buy-section">
            <label>Buyer team:
                <select id="buyerTeamSelect">
                    ${buyerOptions.map(t => `<option value="${t.id}">${t.name} (RTG ${t.teamRating.toFixed(1)})</option>`).join('')}
                </select>
            </label>
            <button class="transfer-btn" onclick="attemptPlayerTransfer('${player.id}','${team.id}')">Buy player</button>
        </div>
    ` : '<p>Geen andere clubs beschikbaar om deze speler te kopen.</p>';

    body.innerHTML = `
        <p><strong>Current:</strong> Age ${player.age || '-'} • Rating ${player.rating} • Value €${Number(player.marketValue || 0).toLocaleString()} • Country ${playerCountry}</p>
        <h4>Career</h4>
        <table class="league-table">
            <thead><tr><th>Season</th><th>Team</th></tr></thead>
            <tbody>${careerRows || '<tr><td colspan="2">Geen teamgeschiedenis beschikbaar</td></tr>'}</tbody>
        </table>
        <h4>Transfer History</h4>
        <table class="league-table">
            <thead><tr><th>Season</th><th>From</th><th>To</th><th>Fee</th></tr></thead>
            <tbody>${transferRows || '<tr><td colspan="4">Geen transfers uitgevoerd</td></tr>'}</tbody>
        </table>
    `;

    actions.innerHTML = buyerSelect;
    modal.classList.add('open');
}

function closePlayerModal(event) {
    if (event && event.target && event.target.id !== 'playerModal') return;
    document.getElementById('playerModal').classList.remove('open');
}

function calculateTransferFee(player, fromTeam, toTeam) {
    const ageFactor = player.age <= 23 ? 1.2 : 1;
    const teamStrengthFactor = Math.max(0.85, (fromTeam.teamRating + toTeam.teamRating) / 120);
    const base = Math.max(15000, Math.round(player.marketValue * 0.6 * ageFactor * teamStrengthFactor + player.rating * 200));
    return base;
}

function attemptPlayerTransfer(playerId, sellerTeamId) {
    const buyerSelect = document.getElementById('buyerTeamSelect');
    const buyerTeamId = buyerSelect?.value;
    if (!buyerTeamId || buyerTeamId === sellerTeamId) {
        alert('Selecteer een andere club om de speler te kopen.');
        return;
    }

    const buyer = findTeamById(buyerTeamId).team;
    const seller = findTeamById(sellerTeamId).team;
    const player = seller?.players?.find(p => p.id === playerId);
    if (!buyer || !seller || !player) return;

    const fee = calculateTransferFee(player, seller, buyer);
    if ((buyer.cashBalance || 0) < fee) {
        alert(`Deze club heeft niet genoeg geld om ${player.name} te kopen. Nodig: €${fee.toLocaleString()}`);
        return;
    }

    buyer.cashBalance = (buyer.cashBalance || 0) - fee;
    seller.cashBalance = (seller.cashBalance || 0) + fee;
    seller.players = seller.players.filter(p => p.id !== playerId);
    buyer.players.push(player);

    rebalanceTeamRoles(seller);
    rebalanceTeamRoles(buyer);

    const sellerStarters = seller.players.filter(p => p.role === 'starter');
    seller.teamRating = sellerStarters.length
        ? Number((sellerStarters.reduce((sum, p) => sum + p.rating, 0) / sellerStarters.length).toFixed(1))
        : 0;

    const buyerStarters = buyer.players.filter(p => p.role === 'starter');
    buyer.teamRating = buyerStarters.length
        ? Number((buyerStarters.reduce((sum, p) => sum + p.rating, 0) / buyerStarters.length).toFixed(1))
        : 0;

    player.transferHistory = player.transferHistory || [];
    player.transferHistory.push({
        season: currentSeasonYear,
        fromTeamId: seller.id,
        fromTeamName: seller.name,
        toTeamId: buyer.id,
        toTeamName: buyer.name,
        fee,
        date: currentDate.toLocaleDateString('en-GB')
    });

    player.careerHistory = player.careerHistory || [];
    player.careerHistory.push({
        season: currentSeasonYear,
        teamId: buyer.id,
        teamName: buyer.name
    });

    appState.transfers.unshift({
        date: currentDate.toLocaleDateString('en-GB'),
        season: currentSeasonYear,
        playerId: player.id,
        playerName: player.name,
        fromTeamId: seller.id,
        fromTeamName: seller.name,
        toTeamId: buyer.id,
        toTeamName: buyer.name,
        transferFee: fee,
        fromTeamRating: seller.teamRating,
        toTeamRating: buyer.teamRating
    });

    renderTransfers();
    showPlayerDetails(buyer.id, player.id);
}

function getPositionCounts(team) {
    const counts = { GK: 0, DEF: 0, MID: 0, ATT: 0 };
    team.players.forEach(p => counts[p.position]++);
    return counts;
}

function simulateEndOfSeasonTransfers() {
    console.log('Simulating end of season transfers');
    const allTeams = appState.leagues.flatMap(league => league.teams);
    const minCounts = { GK: 2, DEF: 5, MID: 5, ATT: 3 };
    const maxCounts = { GK: 3, DEF: 7, MID: 7, ATT: 4 };

    allTeams.forEach(buyer => {
        if (Math.random() < 0.3 && (buyer.cashBalance || 0) > 20000) {
            const buyerCounts = getPositionCounts(buyer);
            const lowPositions = Object.keys(minCounts).filter(pos => buyerCounts[pos] < minCounts[pos]);
            if (!lowPositions.length) return; // No need to buy

            const positionNeeded = lowPositions[Math.floor(Math.random() * lowPositions.length)];

            const potentialSellers = allTeams.filter(team => {
                if (team.id === buyer.id) return false;
                const sellerCounts = getPositionCounts(team);
                return sellerCounts[positionNeeded] > maxCounts[positionNeeded] && team.teamRating >= buyer.teamRating - 5;
            });

            if (!potentialSellers.length) return;

            const seller = potentialSellers[Math.floor(Math.random() * potentialSellers.length)];
            const availablePlayers = seller.players.filter(p => p.position === positionNeeded && p.role !== 'starter' && p.rating <= buyer.teamRating + 10);
            if (!availablePlayers.length) return;

            const player = availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
            const fee = calculateTransferFee(player, seller, buyer);

            if (fee <= (buyer.cashBalance || 0)) {
                // Execute transfer
                buyer.cashBalance -= fee;
                seller.cashBalance += fee;
                seller.players = seller.players.filter(p => p.id !== player.id);
                buyer.players.push(player);

                rebalanceTeamRoles(seller);
                rebalanceTeamRoles(buyer);

                const sellerStarters = seller.players.filter(p => p.role === 'starter');
                seller.teamRating = sellerStarters.length ? Number((sellerStarters.reduce((sum, p) => sum + p.rating, 0) / sellerStarters.length).toFixed(1)) : 0;

                const buyerStarters = buyer.players.filter(p => p.role === 'starter');
                buyer.teamRating = buyerStarters.length ? Number((buyerStarters.reduce((sum, p) => sum + p.rating, 0) / buyerStarters.length).toFixed(1)) : 0;

                player.transferHistory = player.transferHistory || [];
                player.transferHistory.push({
                    season: currentSeasonYear,
                    fromTeamId: seller.id,
                    fromTeamName: seller.name,
                    toTeamId: buyer.id,
                    toTeamName: buyer.name,
                    fee,
                    date: currentDate.toLocaleDateString('en-GB')
                });

                player.careerHistory = player.careerHistory || [];
                player.careerHistory.push({
                    season: currentSeasonYear + 1,
                    teamId: buyer.id,
                    teamName: buyer.name
                });

                appState.transfers.unshift({
                    date: currentDate.toLocaleDateString('en-GB'),
                    season: currentSeasonYear,
                    playerId: player.id,
                    playerName: player.name,
                    fromTeamId: seller.id,
                    fromTeamName: seller.name,
                    toTeamId: buyer.id,
                    toTeamName: buyer.name,
                    transferFee: fee,
                    fromTeamRating: seller.teamRating,
                    toTeamRating: buyer.teamRating
                });
            }
        }
    });
    console.log('Transfers after simulation:', appState.transfers.length);
}

window.showPlayerDetails = showPlayerDetails;
window.attemptPlayerTransfer = attemptPlayerTransfer;
window.closePlayerModal = closePlayerModal;

function showTeamDetails(teamId) {
    const { team, league } = findTeamById(teamId);
    if (!team) return;

    const modal = document.getElementById('teamModal');
    const title = document.getElementById('teamModalTitle');
    const meta = document.getElementById('teamModalMeta');
    const players = document.getElementById('teamModalPlayers');

    title.textContent = team.name;
    const avgSeasonMatch = getTeamSeasonAverageMatchRating(team);
    const teamCashBalance = Number(team.cashBalance || 0).toLocaleString();
    const teamCountry = team.countryName || 'Unknown';
    meta.textContent = `Team rating: ${team.teamRating?.toFixed(1) || '-'} • Country: ${teamCountry} • Cash balance: €${teamCashBalance} • Gem matchrating seizoen: ${avgSeasonMatch ?? '0.00'} • League: ${league?.name || 'Cup'}`;

    const roleOrder = { starter: 1, upcoming: 2, bench: 3 };
    const sortedPlayers = [...(team.players || [])].sort((a, b) => {
        if ((roleOrder[a.role] || 9) !== (roleOrder[b.role] || 9)) {
            return (roleOrder[a.role] || 9) - (roleOrder[b.role] || 9);
        }
        return b.rating - a.rating;
    });

    players.innerHTML = `
        <div class="team-player-row head"><div>Name</div><div>Pos</div><div>Rating</div><div>Role</div><div>MatchRating</div><div>G</div><div>A</div></div>
        ${sortedPlayers.map(player => `<div class=\"team-player-row clickable\" onclick=\"showPlayerDetails('${team.id}','${player.id}')\"><div>${player.name}</div><div>${player.position}</div><div>${player.rating}</div><div>${player.role}</div><div>${getPlayerSeasonAverage(player) ?? '0.00'}</div><div>${player.seasonGoals ?? 0}</div><div>${player.seasonAssists ?? 0}</div></div>`).join('')}
    `;

    modal.classList.add('open');
}

function closeTeamModal(event) {
    if (event && event.target && event.target.id !== 'teamModal') return;
    document.getElementById('teamModal').classList.remove('open');
}

window.showTeamDetails = showTeamDetails;
window.closeTeamModal = closeTeamModal;

function startNewSeason() {
    if (!canStartNewSeason()) {
        alert('Je kunt alleen in week 52 een nieuw seizoen starten, nadat alle wedstrijden zijn gespeeld.');
        return;
    }

    const existingTeamMap = new Map();
    appState.leagues.forEach(league => {
        league.teams.forEach(team => {
            existingTeamMap.set(team.id, team);
        });
    });

    appState.leagues.forEach(league => league.teams.forEach(team => applyEndSeasonPlayerProgression(team, league.level)));

    simulateEndOfSeasonTransfers();
    distributeLeaguePrizeMoney();
    captureTrophiesForCurrentSeason();

    if (document.getElementById('transfersView')?.classList.contains('active')) {
        renderTransfers();
    }

    if (typeof applyPromotionRelegation === 'function') {
        // Apply promotion/relegation per country, not globally
        const allPromotionResults = [];
        
        appState.continents.forEach(continent => {
            continent.countries.forEach(country => {
                // Get all divisions for this country and sort by level
                const countryDivisions = appState.leagues
                    .filter(league => league.countryKey === country.key)
                    .sort((a, b) => a.level - b.level)
                    .map(league => ({
                        key: league.key,
                        name: league.name,
                        level: league.level,
                        teams: league.standings.map(team => ({ id: team.id, name: team.name }))
                    }));

                // Apply promotion/relegation within this country only
                if (countryDivisions.length >= 2) {
                    const result = applyPromotionRelegation(countryDivisions, 2);
                    allPromotionResults.push(...result.divisions);
                } else {
                    allPromotionResults.push(...countryDivisions);
                }
            });
        });

        appState.leagues = appState.leagues.map(league => {
            const nextDivision = allPromotionResults.find(d => d.key === league.key);
            const rawTeams = nextDivision ? nextDivision.teams : league.teams;
            const teams = rawTeams.map(team => {
                const existing = existingTeamMap.get(team.id);

                if (existing) {
                    return existing;
                }

                if (typeof attachSquadToTeam === 'function') {
                    return attachSquadToTeam({ id: team.id, name: team.name }, league.level);
                }

                return { ...team, players: [], teamRating: 0 };
            });

            return {
                ...league,
                teams,
                fixtures: generateFixturesForTeams(teams, currentSeasonYear + 1),
                standings: buildEmptyStandings(teams)
            };
        });
    } else {
        appState.leagues = appState.leagues.map(league => {
            const teams = league.teams.map(team => {
                if (typeof attachSquadToTeam === 'function') return attachSquadToTeam(team, league.level);
                return { ...team, players: [], teamRating: 0 };
            });

            return {
                ...league,
                teams,
                fixtures: generateFixturesForTeams(teams, currentSeasonYear + 1),
                standings: buildEmptyStandings(teams)
            };
        });
    }

    currentSeasonYear += 1;
    appState.leagues.forEach(league => {
        league.teams.forEach(team => {
            team.players.forEach(player => {
                player.careerHistory = player.careerHistory || [];
                const lastEntry = player.careerHistory[player.careerHistory.length - 1];
                if (!lastEntry || lastEntry.season !== currentSeasonYear || lastEntry.teamId !== team.id) {
                    player.careerHistory.push({
                        season: currentSeasonYear,
                        teamId: team.id,
                        teamName: team.name
                    });
                }
            });
        });
    });
    initializeCup(currentSeasonYear);
    currentDate = getSeasonStartDate(currentSeasonYear);
    processMatches();
    updateAllStandings();
    renderLeagueSelector();
    updateDateDisplay();
    renderActiveLeague();
    renderTrophies();
}

window.addEventListener('DOMContentLoaded', init);