// English league setup with 4 divisions.
// This file is intentionally framework-agnostic and can run in browser or Node.

const ENGLISH_DIVISIONS = [
    { key: 'premier-league', name: 'Premier League', level: 1, teams: 20 },
    { key: 'championship', name: 'Championship', level: 2, teams: 20 },
    { key: 'league-one', name: 'League One', level: 3, teams: 20 },
    { key: 'league-two', name: 'League Two', level: 4, teams: 20 }
];

/**
 * Create a 4-division English league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (80 names recommended).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createEnglishLeagueSystem(teamNames = []) {
    const totalSlots = ENGLISH_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`England Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = ENGLISH_DIVISIONS.map(division => {
        const teams = [];

        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({
                id: `${division.key}-${i + 1}`,
                name: teamName
            });
        }

        return {
            key: division.key,
            name: division.name,
            level: division.level,
            teams
        };
    });

    return {
        country: 'England',
        divisions
    };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ENGLISH_DIVISIONS,
        createEnglishLeagueSystem
    };
}

if (typeof window !== 'undefined') {
    window.ENGLISH_DIVISIONS = ENGLISH_DIVISIONS;
    window.createEnglishLeagueSystem = createEnglishLeagueSystem;
}