const CUP_CONFIG = {
    key: 'english-league-cup',
    name: 'English League Cup',
    stageOrder: ['round1', 'round2', 'round3', 'round4', 'league', 'final'],
    stageLabels: {
        round1: 'Round 1',
        round2: 'Round 2',
        round3: 'Round 3',
        round4: 'Round 4',
        league: 'League Phase',
        final: 'Final'
    },
    stageWeeks: {
        round1: [4],
        round2: [7],
        round3: [12],
        round4: [18],
        league: [24, 30, 36, 42, 48],
        final: [52]
    }
};

function shuffleList(list) {
    const arr = [...list];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function createCupFixture(cup, stage, week, homeTeam, awayTeam, roundIndex = 0) {
    cup.nextFixtureId += 1;
    return {
        id: `cup-${cup.seasonYear}-${cup.nextFixtureId}`,
        competition: 'cup',
        stage,
        stageLabel: CUP_CONFIG.stageLabels[stage] || stage,
        roundIndex,
        week,
        date: cup.getDateForWeek(week, cup.seasonYear),
        homeTeamId: homeTeam.id,
        awayTeamId: awayTeam.id,
        homeTeamName: homeTeam.name,
        awayTeamName: awayTeam.name,
        homeScore: null,
        awayScore: null,
        homePenalties: null,
        awayPenalties: null,
        played: false,
        winnerTeamId: null,
        winnerMethod: null
    };
}

function createKnockoutFixtures(cup, stage, teamIds) {
    const week = CUP_CONFIG.stageWeeks[stage][0];
    const fixtures = [];

    for (let i = 0; i < teamIds.length; i += 2) {
        const homeTeam = cup.teamLookup.get(teamIds[i]);
        const awayTeam = cup.teamLookup.get(teamIds[i + 1]);
        if (!homeTeam || !awayTeam) continue;
        fixtures.push(createCupFixture(cup, stage, week, homeTeam, awayTeam));
    }

    return fixtures;
}

function createRoundRobinPairings(teamIds) {
    const ids = [...teamIds];
    if (ids.length % 2 === 1) ids.push(null);

    const rounds = [];
    for (let round = 0; round < ids.length - 1; round++) {
        const pairings = [];
        for (let i = 0; i < ids.length / 2; i++) {
            const home = ids[i];
            const away = ids[ids.length - 1 - i];
            if (home && away) pairings.push([home, away]);
        }
        rounds.push(pairings);

        const fixed = ids[0];
        const moving = ids.slice(1);
        moving.unshift(moving.pop());
        ids.splice(0, ids.length, fixed, ...moving);
    }

    return rounds;
}

function createLeaguePhaseFixtures(cup, teamIds) {
    const rounds = createRoundRobinPairings(teamIds);
    const weeks = CUP_CONFIG.stageWeeks.league;
    const fixtures = [];

    rounds.forEach((pairings, roundIndex) => {
        const week = weeks[roundIndex] || weeks[weeks.length - 1];
        pairings.forEach(([homeId, awayId]) => {
            const homeTeam = cup.teamLookup.get(homeId);
            const awayTeam = cup.teamLookup.get(awayId);
            if (!homeTeam || !awayTeam) return;
            fixtures.push(createCupFixture(cup, 'league', week, homeTeam, awayTeam, roundIndex + 1));
        });
    });

    return fixtures;
}

function buildCupLeagueTable(cup) {
    const stats = {};
    const teamIds = (Array.isArray(cup.leaguePhaseTeamIds) && cup.leaguePhaseTeamIds.length > 0)
        ? cup.leaguePhaseTeamIds
        : Array.from(new Set(cup.fixtures.filter(fixture => fixture.stage === 'league').flatMap(fixture => [fixture.homeTeamId, fixture.awayTeamId])));

    teamIds.forEach(teamId => {
        const team = cup.teamLookup.get(teamId);
        if (!team) return;
        stats[teamId] = {
            id: teamId,
            name: team.name,
            played: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            points: 0
        };
    });

    cup.fixtures
        .filter(fixture => fixture.stage === 'league' && fixture.played)
        .forEach(fixture => {
            const home = stats[fixture.homeTeamId];
            const away = stats[fixture.awayTeamId];
            if (!home || !away) return;

            home.played += 1;
            away.played += 1;
            home.goalsFor += fixture.homeScore;
            home.goalsAgainst += fixture.awayScore;
            away.goalsFor += fixture.awayScore;
            away.goalsAgainst += fixture.homeScore;

            if (fixture.homeScore > fixture.awayScore) {
                home.wins += 1;
                away.losses += 1;
                home.points += 3;
            } else if (fixture.homeScore < fixture.awayScore) {
                away.wins += 1;
                home.losses += 1;
                away.points += 3;
            } else {
                home.draws += 1;
                away.draws += 1;
                home.points += 1;
                away.points += 1;
            }
        });

    return Object.values(stats).sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        const gdA = a.goalsFor - a.goalsAgainst;
        const gdB = b.goalsFor - b.goalsAgainst;
        if (gdB !== gdA) return gdB - gdA;
        if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
        return a.name.localeCompare(b.name);
    });
}

function createEnglishLeagueCup(teams, seasonYear, getDateForWeek) {
    const teamLookup = new Map((teams || []).map(team => [team.id, team]));
    const shuffledIds = shuffleList((teams || []).map(team => team.id));

    const cup = {
        key: CUP_CONFIG.key,
        name: CUP_CONFIG.name,
        seasonYear,
        stageOrder: [...CUP_CONFIG.stageOrder],
        stageLabels: { ...CUP_CONFIG.stageLabels },
        getDateForWeek,
        teamLookup,
        fixtures: [],
        completed: false,
        winnerTeamId: null,
        nextFixtureId: 0,
        leagueTable: [],
        leaguePhaseTeamIds: []
    };

    cup.fixtures.push(...createKnockoutFixtures(cup, 'round1', shuffledIds));
    return cup;
}

function getCurrentCupStage(cup) {
    if (!cup || cup.completed) return 'completed';

    for (const stage of cup.stageOrder) {
        const stageFixtures = cup.fixtures.filter(fixture => fixture.stage === stage);
        if (!stageFixtures.length) return stage;
        if (stageFixtures.some(fixture => !fixture.played)) return stage;
    }

    return 'completed';
}

function allStagePlayed(cup, stage) {
    const fixtures = cup.fixtures.filter(fixture => fixture.stage === stage);
    return fixtures.length > 0 && fixtures.every(fixture => fixture.played);
}

function advanceCupIfNeeded(cup) {
    if (!cup || cup.completed) return;

    if (allStagePlayed(cup, 'round1') && !cup.fixtures.some(f => f.stage === 'round2')) {
        const winners = cup.fixtures.filter(f => f.stage === 'round1').map(f => f.winnerTeamId).filter(Boolean);
        cup.fixtures.push(...createKnockoutFixtures(cup, 'round2', winners));
    }

    if (allStagePlayed(cup, 'round2') && !cup.fixtures.some(f => f.stage === 'round3')) {
        const winners = cup.fixtures.filter(f => f.stage === 'round2').map(f => f.winnerTeamId).filter(Boolean);
        cup.fixtures.push(...createKnockoutFixtures(cup, 'round3', winners));
    }

    if (allStagePlayed(cup, 'round3') && !cup.fixtures.some(f => f.stage === 'round4')) {
        const winners = cup.fixtures.filter(f => f.stage === 'round3').map(f => f.winnerTeamId).filter(Boolean);
        cup.fixtures.push(...createKnockoutFixtures(cup, 'round4', winners));
    }

    if (allStagePlayed(cup, 'round4') && !cup.fixtures.some(f => f.stage === 'league')) {
        const winners = cup.fixtures.filter(f => f.stage === 'round4').map(f => f.winnerTeamId).filter(Boolean);
        cup.leaguePhaseTeamIds = winners;
        cup.fixtures.push(...createLeaguePhaseFixtures(cup, winners));
    }

    if (allStagePlayed(cup, 'league')) {
        cup.leagueTable = buildCupLeagueTable(cup);

        if (!cup.fixtures.some(f => f.stage === 'final') && cup.leagueTable.length >= 2) {
            const finalWeek = CUP_CONFIG.stageWeeks.final[0];
            const first = cup.teamLookup.get(cup.leagueTable[0].id);
            const second = cup.teamLookup.get(cup.leagueTable[1].id);
            cup.fixtures.push(createCupFixture(cup, 'final', finalWeek, first, second));
        }
    }

    if (allStagePlayed(cup, 'final')) {
        cup.completed = true;
        const finalMatch = cup.fixtures.find(fixture => fixture.stage === 'final');
        cup.winnerTeamId = finalMatch?.winnerTeamId || null;
    }
}

window.createEnglishLeagueCup = createEnglishLeagueCup;
window.advanceCupIfNeeded = advanceCupIfNeeded;
window.getCurrentCupStage = getCurrentCupStage;
window.buildCupLeagueTable = buildCupLeagueTable;