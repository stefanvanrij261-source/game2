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

let currentSeasonYear = 2026;
let currentDate = getSeasonStartDate(currentSeasonYear);
let activeLeagueKey = null;

const appState = {
    leagues: [],
    trophies: [],
    cup: null
};

function getSeasonStartDate(year) {
    return new Date(year, 0, 1);
}

function init() {
    appState.leagues = enrichLeaguesWithSquads(buildLeagues());
    activeLeagueKey = appState.leagues[0]?.key || null;
    initializeCup();

    appState.leagues.forEach(league => {
        league.fixtures = generateFixturesForTeams(league.teams, currentSeasonYear);
        league.standings = buildEmptyStandings(league.teams);
    });

    processMatches();
    updateAllStandings();
    renderLeagueSelector();
    updateDateDisplay();
    renderActiveLeague();
    renderTrophies();
}

function initializeCup(year = currentSeasonYear) {
    if (typeof createEnglishLeagueCup !== 'function') return;
    const allTeams = appState.leagues.flatMap(league => league.teams);
    appState.cup = createEnglishLeagueCup(allTeams, year, getDateForWeek);
}

function buildLeagues() {
    const names = generateUniqueTeamNames(80);

    if (typeof createEnglishLeagueSystem === 'function') {
        const pyramid = createEnglishLeagueSystem(names);
        return pyramid.divisions.map(d => ({
            key: d.key,
            name: d.name,
            level: d.level,
            teams: d.teams,
            fixtures: [],
            standings: []
        }));
    }

    return [
        { key: 'premier-league', name: 'Premier League', level: 1, teams: names.slice(0, 20).map(createTeamMapper('premier')), fixtures: [], standings: [] },
        { key: 'championship', name: 'Championship', level: 2, teams: names.slice(20, 40).map(createTeamMapper('championship')), fixtures: [], standings: [] },
        { key: 'league-one', name: 'League One', level: 3, teams: names.slice(40, 60).map(createTeamMapper('league1')), fixtures: [], standings: [] },
        { key: 'league-two', name: 'League Two', level: 4, teams: names.slice(60, 80).map(createTeamMapper('league2')), fixtures: [], standings: [] }
    ];
}

function createTeamMapper(prefix) {
    return (name, idx) => ({ id: `${prefix}-${idx + 1}`, name });
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

function generateUniqueTeamNames(count) {
    const used = new Set();
    const names = [];

    while (names.length < count) {
        const prefix = cityPrefixes[Math.floor(Math.random() * cityPrefixes.length)];
        const suffix = teamSuffixes[Math.floor(Math.random() * teamSuffixes.length)];
        const teamName = `${prefix} ${suffix}`;

        if (!used.has(teamName)) {
            used.add(teamName);
            names.push(teamName);
        }
    }

    return names;
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

    const week52Date = getDateForWeek(52, currentSeasonYear);
    if (currentDate > week52Date) {
        currentDate = new Date(week52Date);
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

        if (fixture.homeScore === fixture.awayScore && isKnockout) {
            fixture.winnerTeamId = Math.random() < 0.5 ? fixture.homeTeamId : fixture.awayTeamId;
            fixture.winnerMethod = 'Penalties';
        } else {
            fixture.winnerTeamId = fixture.homeScore > fixture.awayScore ? fixture.homeTeamId : fixture.awayTeamId;
            fixture.winnerMethod = 'Normal Time';
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

    if (appState.cup) {
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
    return isSeasonFinished() && getCurrentWeekNumber() >= 52;
}

function renderLeagueSelector() {
    const container = document.getElementById('leagueSelector');
    container.innerHTML = '';

    appState.leagues.forEach(league => {
        const btn = document.createElement('button');
        btn.className = `league-btn ${league.key === activeLeagueKey ? 'active' : ''}`;
        btn.textContent = league.name;
        btn.onclick = () => setActiveLeague(league.key);
        container.appendChild(btn);
    });
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
        : '• New season only available in week 52 after all matches are played.';

    document.getElementById('seasonStatus').textContent = `${status} ${restriction}`;

    const startBtn = document.getElementById('startNewSeasonBtn');
    const allowNewSeason = canStartNewSeason();
    const seasonLocked = isSeasonFinished() && getCurrentWeekNumber() >= 52;

    startBtn.disabled = !allowNewSeason;
    startBtn.style.opacity = allowNewSeason ? '1' : '0.6';
    startBtn.style.cursor = allowNewSeason ? 'pointer' : 'not-allowed';

    document.querySelectorAll('.time-forward-btn').forEach(btn => {
        btn.disabled = seasonLocked;
        btn.style.opacity = seasonLocked ? '0.5' : '1';
        btn.style.cursor = seasonLocked ? 'not-allowed' : 'pointer';
    });
}

function renderActiveLeague() {
    const league = getActiveLeague();
    if (!league) return;

    document.getElementById('standingsTitle').textContent = `${league.name} Standings`;
    document.getElementById('fixturesTitle').textContent = `${league.name} Fixtures & Results`;

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
    card.innerHTML = `
        <div class="fixture-date">Week ${fixture.week} • ${dateString}</div>
        <div class="fixture-match">
            <span class="team-name"><button class="team-link" onclick="event.stopPropagation();showTeamDetails('${fixture.homeTeamId}')">${fixture.homeTeamName}</button> <small>(RTG ${fixture.homeTeamRating.toFixed(1)})</small></span>
            <div class="match-score">${fixture.played ? `${fixture.homeScore} - ${fixture.awayScore}` : '-'}</div>
            <span class="team-name"><button class="team-link" onclick="event.stopPropagation();showTeamDetails('${fixture.awayTeamId}')">${fixture.awayTeamName}</button> <small>(RTG ${fixture.awayTeamRating.toFixed(1)})</small></span>
        </div>
        <div class="fixture-status">${fixture.played ? '✓ Played' : 'To be played'}</div>
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
    document.getElementById('trophiesView').classList.remove('active');
    document.getElementById('cupView').classList.remove('active');
    setMenuActive(button);
}

function showFixtures(button) {
    document.getElementById('standingsView').classList.remove('active');
    document.getElementById('fixturesView').classList.add('active');
    document.getElementById('trophiesView').classList.remove('active');
    document.getElementById('cupView').classList.remove('active');
    setMenuActive(button);
}

function showTrophies(button) {
    document.getElementById('standingsView').classList.remove('active');
    document.getElementById('fixturesView').classList.remove('active');
    document.getElementById('trophiesView').classList.add('active');
    document.getElementById('cupView').classList.remove('active');
    setMenuActive(button);
    renderTrophies();
}

function showCup(button) {
    document.getElementById('standingsView').classList.remove('active');
    document.getElementById('fixturesView').classList.remove('active');
    document.getElementById('trophiesView').classList.remove('active');
    document.getElementById('cupView').classList.add('active');
    setMenuActive(button);
    renderCup();
}

function setMenuActive(button) {
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
    if (button) button.classList.add('active');
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
        cup.innerHTML = `<strong>English League Cup</strong><br>Winner: ${season.cupWinner || '-'}`;
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
    title.textContent = `${cup.name} • ${stage === 'completed' ? 'Completed' : stage}`;
    content.innerHTML = '';

    const today = cup.fixtures.filter(f => isSameDay(f.date, currentDate));
    const upcoming = cup.fixtures.filter(f => !f.played).sort((a, b) => a.date - b.date);
    const past = cup.fixtures.filter(f => f.played).sort((a, b) => b.date - a.date);

    if (today.length) {
        addSection(content, `🔴 Today's Cup Matches (${today.length})`);
        today.forEach(fixture => content.appendChild(createCupFixtureCard(fixture, 'today')));
    }

    if (upcoming.length) {
        addSection(content, '📅 Upcoming Cup Matches');
        upcoming.slice(0, 10).forEach(fixture => content.appendChild(createCupFixtureCard(fixture, 'upcoming')));
    }

    if (past.length) {
        addSection(content, `✅ Past Cup Matches (${past.length})`);
        past.slice(0, 10).forEach(fixture => content.appendChild(createCupFixtureCard(fixture, 'past')));
    }

    if (cup.leagueTable && cup.leagueTable.length) {
        const tableCard = document.createElement('div');
        tableCard.className = 'cup-table-card';
        tableCard.innerHTML = `
            <h3>League Phase Table</h3>
            <table class="league-table">
                <thead>
                    <tr><th>Pos</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>Pts</th></tr>
                </thead>
                <tbody>
                    ${cup.leagueTable.map((row, idx) => {
                        const gd = row.goalsFor - row.goalsAgainst;
                        return `<tr><td>${idx + 1}</td><td><button class="team-link" onclick="showTeamDetails('${row.id}')">${row.name}</button></td><td>${row.played}</td><td>${row.wins}</td><td>${row.draws}</td><td>${row.losses}</td><td>${row.goalsFor}</td><td>${row.goalsAgainst}</td><td>${gd > 0 ? '+' : ''}${gd}</td><td class=\"pts\">${row.points}</td></tr>`;
                    }).join('')}
                </tbody>
            </table>
        `;
        content.appendChild(tableCard);
    }
}

function createCupFixtureCard(fixture, type) {
    const card = createFixtureCard(fixture, type);
    const stage = document.createElement('div');
    stage.className = 'fixture-status';
    stage.textContent = `Stage: ${fixture.stageLabel}`;
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
    meta.textContent = `${competitionLabel} • Week ${fixture.week} • Team ratings: ${(fixture.homeTeamRating || 0).toFixed(1)} vs ${(fixture.awayTeamRating || 0).toFixed(1)}${fixture.played ? '' : ' • Nog niet gespeeld'}${fixture.winnerMethod === 'Penalties' ? ' • winner via penalties' : ''}`;


    const renderLineup = (players = [], teamId) => {
        if (!players || players.length === 0) {
            return '<div class="team-player-row"><div>Geen opstelling beschikbaar</div><div>-</div><div>-</div><div>-</div><div>-</div><div>-</div><div>-</div></div>';
        }

        return players.map(player =>
            `<div class="team-player-row clickable" onclick="showPlayerDetails('${teamId}','${player.id}')"><div>${player.name}</div><div>${player.position}</div><div>${player.rating}</div><div>${player.role}</div><div>${player.matchRating ?? '0.00'}</div><div>${player.goals ?? 0}</div><div>${player.assists ?? 0}</div></div>`
        ).join('');
    };

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
                updatedPlayers.push(createReplacementPlayer(leagueLevel, player.position, player.rating));
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
    const title = document.getElementById('playerModalTitle');
    const body = document.getElementById('playerModalBody');

    title.textContent = `${player.name} (${team.name})`;

    const historyRows = (player.history || [])
        .slice()
        .reverse()
        .map(h => `<tr><td>${h.season}</td><td>${h.age}</td><td>${h.rating}</td><td>€${Number(h.marketValue || 0).toLocaleString()}</td></tr>`)
        .join('');

    body.innerHTML = `
        <p><strong>Current:</strong> Age ${player.age || '-'} • Rating ${player.rating} • Value €${Number(player.marketValue || 0).toLocaleString()}</p>
        <table class="league-table">
            <thead><tr><th>Season</th><th>Age</th><th>Rating</th><th>Value</th></tr></thead>
            <tbody>${historyRows || '<tr><td colspan="4">No previous years yet</td></tr>'}</tbody>
        </table>
    `;

    modal.classList.add('open');
}

function closePlayerModal(event) {
    if (event && event.target && event.target.id !== 'playerModal') return;
    document.getElementById('playerModal').classList.remove('open');
}

window.showPlayerDetails = showPlayerDetails;
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
    meta.textContent = `Team rating: ${team.teamRating?.toFixed(1) || '-'} • Gem matchrating seizoen: ${avgSeasonMatch ?? '0.00'} • League: ${league?.name || 'Cup'}`;

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

    captureTrophiesForCurrentSeason();

    if (typeof applyPromotionRelegation === 'function') {
        const divisions = appState.leagues
            .slice()
            .sort((a, b) => a.level - b.level)
            .map(league => ({
                key: league.key,
                name: league.name,
                level: league.level,
                teams: league.standings.map(team => ({ id: team.id, name: team.name }))
            }));

        const result = applyPromotionRelegation(divisions, 2);

        appState.leagues = appState.leagues.map(league => {
            const nextDivision = result.divisions.find(d => d.key === league.key);
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