global.window = global;
require('./cup.js');
const teams = [
    { id: 't1', name: 'Team 1' },
    { id: 't2', name: 'Team 2' },
    { id: 't3', name: 'Team 3' },
    { id: 't4', name: 'Team 4' },
    { id: 't5', name: 'Team 5' },
    { id: 't6', name: 'Team 6' },
    { id: 't7', name: 'Team 7' },
    { id: 't8', name: 'Team 8' }
];
const cup = createEnglishLeagueCup(teams, 2026, w => new Date(2026, 0, 1));
console.log('initial stageOrder', cup.stageOrder);
console.log('initial count', cup.fixtures.length);
console.log('round1 stages', cup.fixtures.map(f => f.stage));
for (const f of cup.fixtures) {
    f.played = true;
    f.homeScore = 1;
    f.awayScore = 0;
    f.winnerTeamId = f.homeTeamId;
    f.winnerMethod = 'Normal Time';
}
advanceCupIfNeeded(cup);
console.log('after r1 count', cup.fixtures.length, 'has round2', cup.fixtures.some(f => f.stage === 'round2'));
console.log('round2 fixtures', cup.fixtures.filter(f => f.stage === 'round2').map(f => ({ stage: f.stage, stageLabel: f.stageLabel, week: f.week })));
for (const f of cup.fixtures.filter(f => f.stage === 'round2')) {
    f.played = true;
    f.homeScore = 1;
    f.awayScore = 0;
    f.winnerTeamId = f.homeTeamId;
    f.winnerMethod = 'Normal Time';
}
advanceCupIfNeeded(cup);
console.log('after r2 count', cup.fixtures.length, 'has round3', cup.fixtures.some(f => f.stage === 'round3'));
console.log('round3 fixtures', cup.fixtures.filter(f => f.stage === 'round3').map(f => ({ stage: f.stage, stageLabel: f.stageLabel, week: f.week })));
