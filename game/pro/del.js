// Promotion / relegation utilities.
// Promotes top 2 and relegates bottom 2 between each adjacent division.

/**
 * @typedef {{id:string,name:string,position?:number,points?:number}} Team
 * @typedef {{key:string,name:string,level:number,teams:Team[]}} Division
 */

/**
 * Apply promotion/relegation between adjacent divisions.
 * The division list must be sorted from highest (level 1) to lowest.
 * Teams are expected to already be sorted by final table ranking per division.
 *
 * @param {Division[]} divisions
 * @param {number} count
 * @returns {{divisions: Division[], movement: Array<{type:'promoted'|'relegated', team:Team, from:string, to:string}>}}
 */
function applyPromotionRelegation(divisions, count = 2) {
    if (!Array.isArray(divisions) || divisions.length < 2) {
        return { divisions: divisions || [], movement: [] };
    }

    const copy = divisions.map(d => ({
        ...d,
        teams: [...d.teams]
    }));

    const movement = [];

    for (let i = 0; i < copy.length - 1; i++) {
        const upper = copy[i];
        const lower = copy[i + 1];

        const relegated = upper.teams.slice(-count);
        const promoted = lower.teams.slice(0, count);

        upper.teams = [...upper.teams.slice(0, upper.teams.length - count), ...promoted];
        lower.teams = [...relegated, ...lower.teams.slice(count)];

        promoted.forEach(team => {
            movement.push({
                type: 'promoted',
                team,
                from: lower.name,
                to: upper.name
            });
        });

        relegated.forEach(team => {
            movement.push({
                type: 'relegated',
                team,
                from: upper.name,
                to: lower.name
            });
        });
    }

    return {
        divisions: copy,
        movement
    };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        applyPromotionRelegation
    };
}

if (typeof window !== 'undefined') {
    window.applyPromotionRelegation = applyPromotionRelegation;
}