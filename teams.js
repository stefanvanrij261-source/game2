// Team and player generation utilities

const PLAYER_FIRST_NAMES = [
    'James', 'John', 'William', 'Thomas', 'Henry', 'Edward', 'George', 'Charles', 'Harry', 'Oliver',
    'Jack', 'Jacob', 'Noah', 'Ethan', 'Lucas', 'Mason', 'Logan', 'Alexander', 'Benjamin', 'Daniel',
    'Matthew', 'Samuel', 'Joseph', 'David', 'Michael', 'Christopher', 'Andrew', 'Joshua', 'Ryan', 'Nathan',
    'Isaac', 'Caleb', 'Dylan', 'Luke', 'Gabriel', 'Anthony', 'Jonathan', 'Adam', 'Aaron', 'Connor',
    'Liam', 'Owen', 'Sebastian', 'Elijah', 'Leo', 'Julian', 'Dominic', 'Zachary', 'Tyler', 'Evan',
    'Aiden', 'Jayden', 'Brayden', 'Hayden', 'Kaden', 'Cameron', 'Jordan', 'Parker', 'Quinn', 'Blake',
    'Finley', 'Reece', 'Rowan', 'Toby', 'Alfie', 'Archie', 'Theo', 'Hugo', 'Louis', 'Arthur',
    'Reuben', 'Ezra', 'Felix', 'Jasper', 'Milo', 'Otis', 'Sonny', 'Cody', 'Brandon', 'Kyle',
    'Shane', 'Travis', 'Brett', 'Dean', 'Curtis', 'Darren', 'Leon', 'Mitchell', 'Scott', 'Stuart'
];

const PLAYER_LAST_NAMES = [
    'Smith', 'Jones', 'Taylor', 'Brown', 'Williams', 'Wilson', 'Johnson', 'Davies', 'Robinson', 'Wright',
    'Thompson', 'Evans', 'Walker', 'White', 'Roberts', 'Green', 'Hall', 'Wood', 'Jackson', 'Clarke',
    'Harris', 'Edwards', 'Turner', 'Martin', 'Cooper', 'Hill', 'Ward', 'Morris', 'Moore', 'King',
    'Baker', 'Harrison', 'Morgan', 'Allen', 'Bennett', 'Parker', 'Cook', 'Bailey', 'Carter', 'Richardson',
    'Cox', 'Gray', 'Simpson', 'Adams', 'Fisher', 'Collins', 'Stewart', 'Barnes', 'Knight', 'Palmer',
    'Chapman', 'Shaw', 'Lloyd', 'Ellis', 'Richards', 'Russell', 'Griffin', 'Foster', 'Powell', 'Long',
    'Hughes', 'Price', 'Jenkins', 'Holmes', 'Scott', 'Murray', 'Matthews', 'Hunter', 'Mills', 'Gibson',
    'Spencer', 'Berry', 'Gordon', 'Webb', 'Payne', 'Black', 'Fox', 'Rose', 'Stone', 'West',
    'Burke', 'Rice', 'Dean', 'Lane', 'Gardner', 'Hudson', 'Fowler', 'Warren', 'Porter', 'Harvey'
];

const POSITION_KEYS = ['GK', 'DEF', 'MID', 'ATT'];
let playerIdCounter = 1;

PLAYER_FIRST_NAMES.push(
    'Wayne', 'Perry', 'Craig', 'Dale', 'Glenn', 'Keith', 'Neil', 'Ross', 'Trevor', 'Warren',
    'Barry', 'Clive', 'Derek', 'Graham', 'Malcolm', 'Nigel', 'Colin', 'Rodney', 'Bernard', 'Douglas',
    'Bruce', 'Carl', 'Dennis', 'Eric', 'Frank', 'Albert', 'Alfred', 'Arnold', 'Austin', 'Axel',
    'Adrian', 'Amos', 'Andy', 'Ashton', 'Avery', 'Beckett', 'Benson', 'Brody', 'Byron', 'Callum',
    'Calvin', 'Cedric', 'Chester', 'Christian', 'Clarence', 'Clifford', 'Clyde', 'Conrad', 'Corey', 'Damian',
    'Damon', 'Darius', 'Darryl', 'Declan', 'Desmond', 'Dexter', 'Donald', 'Duncan', 'Edgar', 'Edmund',
    'Edwin', 'Elliot', 'Elton', 'Emmett', 'Ernest', 'Eugene', 'Fergus', 'Finnegan', 'Floyd', 'Frederick',
    'Gareth', 'Garry', 'Gavin', 'Geoffrey', 'Gerald', 'Gilbert', 'Guy', 'Hamish', 'Harold', 'Hector',
    'Herbert', 'Howard', 'Hugh', 'Ian', 'Irving', 'Ivan', 'Jared', 'Jason', 'Jeffery', 'Jeremy',
    'Jerome', 'Jesse', 'Joel', 'Joey', 'Johnny', 'Jonas', 'Jude', 'Justin', 'Kenneth', 'Kevin'
);

PLAYER_LAST_NAMES.push(
    'Barrett', 'Barton', 'Bates', 'Beck', 'Bell', 'Benson', 'Bird', 'Bishop', 'Blair', 'Booth',
    'Bowen', 'Boyd', 'Bradley', 'Brady', 'Brewer', 'Bridges', 'Brooks', 'Burgess', 'Burns', 'Burton',
    'Bush', 'Cain', 'Caldwell', 'Cannon', 'Carr', 'Carson', 'Case', 'Chambers', 'Chandler', 'Clayton',
    'Cobb', 'Coleman', 'Conway', 'Cooke', 'Cross', 'Curtis', 'Dalton', 'Daniels', 'Davidson', 'Dennis',
    'Dixon', 'Douglas', 'Doyle', 'Drake', 'Duncan', 'Dunn', 'Elliott', 'Erickson', 'Farmer', 'Ferguson',
    'Field', 'Fleming', 'Ford', 'Francis', 'Fuller', 'Garrett', 'George', 'Gibbs', 'Gilbert', 'Gill',
    'Goodwin', 'Graham', 'Griffiths', 'Hamilton', 'Hammond', 'Hardy', 'Harper', 'Hart', 'Hawkins', 'Hayes',
    'Henderson', 'Henry', 'Hicks', 'Holt', 'Hopkins', 'Howard', 'Hunt', 'Jacobs', 'Jarvis', 'Jennings'
);


function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPositionPool() {
    return ['GK', 'DEF', 'DEF', 'DEF', 'MID', 'MID', 'MID', 'ATT', 'ATT', 'ATT'];
}

function getRatingRangeByLevel(level) {
    if (level === 1) return [65, 90];
    if (level === 2) return [45, 75];
    if (level === 3) return [25, 55];
    return [10, 35];
}

function calculateMarketValue(age, rating) {
    const exponent = 0.5 * (((40 - age) / 24) + ((rating - 1) / 99));
    return Math.round(Math.pow(10000000, exponent));
}

function createPlayer(level, position, ratingOverride = null, ageOverride = null) {
    const [min, max] = getRatingRangeByLevel(level);
    let rating = ratingOverride ?? randomInRange(min, max);

    if (Math.random() < 0.05) {
        rating = Math.min(100, rating + randomInRange(1, 10));
    }

    const age = ageOverride ?? randomInRange(16, 30);

    return {
        id: `p-${playerIdCounter++}`,
        name: `${PLAYER_FIRST_NAMES[randomInRange(0, PLAYER_FIRST_NAMES.length - 1)]} ${PLAYER_LAST_NAMES[randomInRange(0, PLAYER_LAST_NAMES.length - 1)]}`,
        position,
        age,
        rating,
        role: 'bench',
        playChance: 10,
        seasonMatchRatings: [],
        seasonGoals: 0,
        seasonAssists: 0,
        marketValue: calculateMarketValue(age, rating),
        history: []
    };
}

function pickTopByPosition(players, position, amount) {
    return players
        .filter(p => p.position === position)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, amount);
}

function calculateTeamRating(players) {
    const starters = players.filter(p => p.role === 'starter');
    if (starters.length === 0) return 0;
    const total = starters.reduce((sum, p) => sum + p.rating, 0);
    return Number((total / starters.length).toFixed(1));
}

function buildSquadForLevel(level) {
    const squadSize = randomInRange(18, 30);
    const players = [];

    players.push(createPlayer(level, 'GK'));
    for (let i = 0; i < 3; i++) players.push(createPlayer(level, 'DEF'));
    for (let i = 0; i < 3; i++) players.push(createPlayer(level, 'MID'));
    for (let i = 0; i < 3; i++) players.push(createPlayer(level, 'ATT'));

    const pool = getPositionPool();
    while (players.length < squadSize) {
        players.push(createPlayer(level, pool[randomInRange(0, pool.length - 1)]));
    }

    const starters = [
        ...pickTopByPosition(players, 'GK', 1),
        ...pickTopByPosition(players, 'DEF', 3),
        ...pickTopByPosition(players, 'MID', 3),
        ...pickTopByPosition(players, 'ATT', 3)
    ];

    if (starters.length < 11) {
        const extra = [...players]
            .filter(p => !starters.includes(p))
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 11 - starters.length);
        starters.push(...extra);
    }

    starters.forEach(player => {
        player.role = 'starter';
        player.playChance = 70;
    });

    POSITION_KEYS.forEach(position => {
        const reserve = players
            .filter(p => p.position === position && p.role !== 'starter')
            .sort((a, b) => b.rating - a.rating);

        if (reserve.length === 0) return;

        const hasBenchForPosition = reserve.length > 1;
        reserve[0].role = 'upcoming';
        reserve[0].playChance = hasBenchForPosition ? 20 : 30;

        reserve.slice(1).forEach(player => {
            player.role = 'bench';
            player.playChance = 10;
        });
    });

    return {
        players,
        teamRating: calculateTeamRating(players)
    };
}

function createReplacementPlayer(level, position, previousRating) {
    return createPlayer(level, position, Math.max(1, previousRating - 10), 16);
}

function attachSquadToTeam(team, level) {
    if (team.players && typeof team.teamRating === 'number') {
        return team;
    }

    const squad = buildSquadForLevel(level);
    return {
        ...team,
        players: squad.players,
        teamRating: squad.teamRating
    };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { buildSquadForLevel, attachSquadToTeam, calculateMarketValue, createReplacementPlayer };
}

if (typeof window !== 'undefined') {
    window.buildSquadForLevel = buildSquadForLevel;
    window.attachSquadToTeam = attachSquadToTeam;
    window.calculateMarketValue = calculateMarketValue;
    window.createReplacementPlayer = createReplacementPlayer;
}