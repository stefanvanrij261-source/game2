// English league setup with 4 divisions.
// This file is intentionally framework-agnostic and can run in browser or Node.

const ENGLISH_DIVISIONS = [
    { key: 'premier-league', name: 'Premier League', level: 1, teams: 20 },
    { key: 'championship', name: 'Championship', level: 2, teams: 20 },
    { key: 'league-one', name: 'League One', level: 3, teams: 20 },
    { key: 'league-two', name: 'League Two', level: 4, teams: 20 }
];

const FRENCH_DIVISIONS = [
    { key: 'ligue-1', name: 'Ligue 1', level: 1, teams: 20 },
    { key: 'ligue-2', name: 'Ligue 2', level: 2, teams: 20 },
    { key: 'championnat-national', name: 'Championnat National', level: 3, teams: 20 },
    { key: 'national-2', name: 'National 2', level: 4, teams: 20 }
];

const GERMAN_DIVISIONS = [
    { key: 'bundesliga', name: 'Bundesliga', level: 1, teams: 20 },
    { key: '2-bundesliga', name: '2. Bundesliga', level: 2, teams: 20 },
    { key: '3-liga', name: '3. Liga', level: 3, teams: 20 },
    { key: 'regionalliga', name: 'Regionalliga', level: 4, teams: 20 }
];

const SPANISH_DIVISIONS = [
    { key: 'la-liga', name: 'La Liga', level: 1, teams: 20 },
    { key: 'la-liga-2', name: 'La Liga 2', level: 2, teams: 20 },
    { key: 'primera-rfef', name: 'Primera RFEF', level: 3, teams: 20 },
    { key: 'segunda-rfef', name: 'Segunda RFEF', level: 4, teams: 20 }
];

const ITALIAN_DIVISIONS = [
    { key: 'serie-a', name: 'Serie A', level: 1, teams: 20 },
    { key: 'serie-b', name: 'Serie B', level: 2, teams: 20 },
    { key: 'serie-c', name: 'Serie C', level: 3, teams: 20 },
    { key: 'serie-d', name: 'Serie D', level: 4, teams: 20 }
];

const USA_DIVISIONS = [
    { key: 'mls', name: 'MLS', level: 1, teams: 20 },
    { key: 'usl-championship', name: 'USL Championship', level: 2, teams: 20 },
    { key: 'usl-league-one', name: 'USL League One', level: 3, teams: 20 },
    { key: 'nisa', name: 'NISA', level: 4, teams: 20 }
];

const BRAZIL_DIVISIONS = [
    { key: 'serie-a', name: 'Serie A', level: 1, teams: 20 },
    { key: 'serie-b', name: 'Serie B', level: 2, teams: 20 },
    { key: 'serie-c', name: 'Serie C', level: 3, teams: 20 },
    { key: 'serie-d', name: 'Serie D', level: 4, teams: 20 }
];

const ARGENTINA_DIVISIONS = [
    { key: 'primera-division', name: 'Primera División', level: 1, teams: 20 },
    { key: 'primera-nacional', name: 'Primera Nacional', level: 2, teams: 20 },
    { key: 'primera-b', name: 'Primera B', level: 3, teams: 20 },
    { key: 'primera-c', name: 'Primera C', level: 4, teams: 20 }
];

const JAPAN_DIVISIONS = [
    { key: 'j1-league', name: 'J1 League', level: 1, teams: 20 },
    { key: 'j2-league', name: 'J2 League', level: 2, teams: 20 },
    { key: 'j3-league', name: 'J3 League', level: 3, teams: 20 },
    { key: 'jfl', name: 'Japan Football League', level: 4, teams: 20 }
];

const AUSTRALIA_DIVISIONS = [
    { key: 'a-league', name: 'A-League', level: 1, teams: 20 },
    { key: 'npl', name: 'National Premier Leagues', level: 2, teams: 20 },
    { key: 'npl2', name: 'NPL2', level: 3, teams: 20 },
    { key: 'npl3', name: 'NPL3', level: 4, teams: 20 }
];

const SOUTH_AFRICA_DIVISIONS = [
    { key: 'premier-soccer-league', name: 'Premier Soccer League', level: 1, teams: 20 },
    { key: 'national-first-division', name: 'National First Division', level: 2, teams: 20 },
    { key: 'sabc-cup', name: 'SABC Cup', level: 3, teams: 20 },
    { key: 'nedbank-cup', name: 'Nedbank Cup', level: 4, teams: 20 }
];

const MEXICO_DIVISIONS = [
    { key: 'liga-mx', name: 'Liga MX', level: 1, teams: 20 },
    { key: 'liga-expansion', name: 'Liga de Expansión MX', level: 2, teams: 20 },
    { key: 'liga-tfm', name: 'Liga TFM', level: 3, teams: 20 },
    { key: 'liga-infantil', name: 'Liga Infantil', level: 4, teams: 20 }
];

const CANADA_DIVISIONS = [
    { key: 'canadian-premier-league', name: 'Canadian Premier League', level: 1, teams: 20 },
    { key: 'canadian-championship', name: 'Canadian Championship', level: 2, teams: 20 },
    { key: 'canadian-npl', name: 'NPL Canada', level: 3, teams: 20 },
    { key: 'canadian-amateur', name: 'Canadian Amateur League', level: 4, teams: 20 }
];

const SOUTH_KOREA_DIVISIONS = [
    { key: 'k-league-1', name: 'K League 1', level: 1, teams: 20 },
    { key: 'k-league-2', name: 'K League 2', level: 2, teams: 20 },
    { key: 'k3-league', name: 'K3 League', level: 3, teams: 20 },
    { key: 'k4-league', name: 'K4 League', level: 4, teams: 20 }
];

const CHINA_DIVISIONS = [
    { key: 'china-super-league', name: 'Chinese Super League', level: 1, teams: 20 },
    { key: 'china-league-one', name: 'China League One', level: 2, teams: 20 },
    { key: 'china-league-two', name: 'China League Two', level: 3, teams: 20 },
    { key: 'china-amateur', name: 'China Amateur League', level: 4, teams: 20 }
];

const INDIA_DIVISIONS = [
    { key: 'isl', name: 'Indian Super League', level: 1, teams: 20 },
    { key: 'i-league', name: 'I-League', level: 2, teams: 20 },
    { key: 'i-league-2', name: 'I-League 2', level: 3, teams: 20 },
    { key: 'state-leagues', name: 'State Leagues', level: 4, teams: 20 }
];

const NIGERIA_DIVISIONS = [
    { key: 'npfl', name: 'NPFL', level: 1, teams: 20 },
    { key: 'nigerian-league-one', name: 'Nigerian League One', level: 2, teams: 20 },
    { key: 'nigerian-league-two', name: 'Nigerian League Two', level: 3, teams: 20 },
    { key: 'nigeria-amateur', name: 'Nigeria Amateur League', level: 4, teams: 20 }
];

const EGYPT_DIVISIONS = [
    { key: 'egyptian-premier-league', name: 'Egyptian Premier League', level: 1, teams: 20 },
    { key: 'egyptian-second-division', name: 'Egyptian Second Division', level: 2, teams: 20 },
    { key: 'egyptian-third-division', name: 'Egyptian Third Division', level: 3, teams: 20 },
    { key: 'egypt-amateur', name: 'Egypt Amateur League', level: 4, teams: 20 }
];

const MOROCCO_DIVISIONS = [
    { key: 'botola-pro1', name: 'Botola Pro 1', level: 1, teams: 20 },
    { key: 'botola-pro2', name: 'Botola Pro 2', level: 2, teams: 20 },
    { key: 'amateur-division-one', name: 'Amateur Division One', level: 3, teams: 20 },
    { key: 'amateur-division-two', name: 'Amateur Division Two', level: 4, teams: 20 }
];

const GHANA_DIVISIONS = [
    { key: 'ghana-premier-league', name: 'Ghana Premier League', level: 1, teams: 20 },
    { key: 'ghana-first-division', name: 'Ghana First Division', level: 2, teams: 20 },
    { key: 'ghana-division-two', name: 'Ghana Division Two', level: 3, teams: 20 },
    { key: 'ghana-amateur', name: 'Ghana Amateur League', level: 4, teams: 20 }
];

const NEW_ZEALAND_DIVISIONS = [
    { key: 'nz-premiership', name: 'NZ Premiership', level: 1, teams: 20 },
    { key: 'nz-championship', name: 'NZ Championship', level: 2, teams: 20 },
    { key: 'nz-npl', name: 'NPL New Zealand', level: 3, teams: 20 },
    { key: 'nz-amateur', name: 'NZ Amateur League', level: 4, teams: 20 }
];

const FIJI_DIVISIONS = [
    { key: 'fiji-premiership', name: 'Fiji Premier League', level: 1, teams: 20 },
    { key: 'fiji-super', name: 'Fiji Super League', level: 2, teams: 20 },
    { key: 'fiji-national', name: 'Fiji National League', level: 3, teams: 20 },
    { key: 'fiji-amateur', name: 'Fiji Amateur League', level: 4, teams: 20 }
];

const SAMOA_DIVISIONS = [
    { key: 'samoa-national-league', name: 'Samoa National League', level: 1, teams: 20 },
    { key: 'samoa-championship', name: 'Samoa Championship', level: 2, teams: 20 },
    { key: 'samoa-league-one', name: 'Samoa League One', level: 3, teams: 20 },
    { key: 'samoa-amateur', name: 'Samoa Amateur League', level: 4, teams: 20 }
];

const PAPUA_NEW_GUINEA_DIVISIONS = [
    { key: 'png-national-league', name: 'PNG National League', level: 1, teams: 20 },
    { key: 'png-championship', name: 'PNG Championship', level: 2, teams: 20 },
    { key: 'png-league-one', name: 'PNG League One', level: 3, teams: 20 },
    { key: 'png-amateur', name: 'PNG Amateur League', level: 4, teams: 20 }
];

const SOLOMON_ISLANDS_DIVISIONS = [
    { key: 'solomon-premier', name: 'Solomon Premier League', level: 1, teams: 20 },
    { key: 'solomon-championship', name: 'Solomon Championship', level: 2, teams: 20 },
    { key: 'solomon-league-one', name: 'Solomon League One', level: 3, teams: 20 },
    { key: 'solomon-amateur', name: 'Solomon Amateur League', level: 4, teams: 20 }
];

/**
 * Create a 4-division German league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (76 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createGermanLeagueSystem(teamNames = []) {
    const totalSlots = GERMAN_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Germany Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = GERMAN_DIVISIONS.map(division => {
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
        country: 'Germany',
        divisions
    };
}

/**
 * Create a 4-division Spanish league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (80 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createSpanishLeagueSystem(teamNames = []) {
    const totalSlots = SPANISH_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Spain Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = SPANISH_DIVISIONS.map(division => {
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
        country: 'Spain',
        divisions
    };
}

/**
 * Create a 4-division Italian league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (80 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createItalianLeagueSystem(teamNames = []) {
    const totalSlots = ITALIAN_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Italy Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = ITALIAN_DIVISIONS.map(division => {
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
        country: 'Italy',
        divisions
    };
}

/**
 * Create a 4-division USA league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (64 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createUSALeagueSystem(teamNames = []) {
    const totalSlots = USA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`USA Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = USA_DIVISIONS.map(division => {
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
        country: 'USA',
        divisions
    };
}

/**
 * Create a 4-division Brazil league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (100 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createBrazilLeagueSystem(teamNames = []) {
    const totalSlots = BRAZIL_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Brazil Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = BRAZIL_DIVISIONS.map(division => {
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
        country: 'Brazil',
        divisions
    };
}

/**
 * Create a 4-division Argentina league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (107 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createArgentinaLeagueSystem(teamNames = []) {
    const totalSlots = ARGENTINA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Argentina Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = ARGENTINA_DIVISIONS.map(division => {
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
        country: 'Argentina',
        divisions
    };
}

/**
 * Create a 4-division Japan league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (78 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createJapanLeagueSystem(teamNames = []) {
    const totalSlots = JAPAN_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Japan Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = JAPAN_DIVISIONS.map(division => {
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
        country: 'Japan',
        divisions
    };
}

/**
 * Create a 4-division Australia league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (88 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createAustraliaLeagueSystem(teamNames = []) {
    const totalSlots = AUSTRALIA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Australia Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = AUSTRALIA_DIVISIONS.map(division => {
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
        country: 'Australia',
        divisions
    };
}

/**
 * Create a 4-division South Africa league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (96 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createSouthAfricaLeagueSystem(teamNames = []) {
    const totalSlots = SOUTH_AFRICA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`South Africa Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = SOUTH_AFRICA_DIVISIONS.map(division => {
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
        country: 'South Africa',
        divisions
    };
}

function createMexicoLeagueSystem(teamNames = []) {
    const totalSlots = MEXICO_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Mexico Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = MEXICO_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Mexico', divisions };
}

function createCanadaLeagueSystem(teamNames = []) {
    const totalSlots = CANADA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Canada Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = CANADA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Canada', divisions };
}

function createSouthKoreaLeagueSystem(teamNames = []) {
    const totalSlots = SOUTH_KOREA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`South Korea Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = SOUTH_KOREA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'South Korea', divisions };
}

function createChinaLeagueSystem(teamNames = []) {
    const totalSlots = CHINA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`China Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = CHINA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'China', divisions };
}

function createIndiaLeagueSystem(teamNames = []) {
    const totalSlots = INDIA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`India Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = INDIA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'India', divisions };
}

function createNigeriaLeagueSystem(teamNames = []) {
    const totalSlots = NIGERIA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Nigeria Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = NIGERIA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Nigeria', divisions };
}

function createEgyptLeagueSystem(teamNames = []) {
    const totalSlots = EGYPT_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Egypt Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = EGYPT_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Egypt', divisions };
}

function createMoroccoLeagueSystem(teamNames = []) {
    const totalSlots = MOROCCO_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Morocco Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = MOROCCO_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Morocco', divisions };
}

function createGhanaLeagueSystem(teamNames = []) {
    const totalSlots = GHANA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Ghana Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = GHANA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Ghana', divisions };
}

function createNewZealandLeagueSystem(teamNames = []) {
    const totalSlots = NEW_ZEALAND_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`New Zealand Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = NEW_ZEALAND_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'New Zealand', divisions };
}

function createFijiLeagueSystem(teamNames = []) {
    const totalSlots = FIJI_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Fiji Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = FIJI_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Fiji', divisions };
}

function createSamoaLeagueSystem(teamNames = []) {
    const totalSlots = SAMOA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Samoa Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = SAMOA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Samoa', divisions };
}

function createPapuaNewGuineaLeagueSystem(teamNames = []) {
    const totalSlots = PAPUA_NEW_GUINEA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Papua New Guinea Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = PAPUA_NEW_GUINEA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Papua New Guinea', divisions };
}

function createSolomonIslandsLeagueSystem(teamNames = []) {
    const totalSlots = SOLOMON_ISLANDS_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Solomon Islands Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = SOLOMON_ISLANDS_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Solomon Islands', divisions };
}

/**
 * Create a 4-division French league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (80 names recommended).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createFrenchLeagueSystem(teamNames = []) {
    const totalSlots = FRENCH_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`France Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = FRENCH_DIVISIONS.map(division => {
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
        country: 'France',
        divisions
    };
}

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
        FRENCH_DIVISIONS,
        GERMAN_DIVISIONS,
        SPANISH_DIVISIONS,
        ITALIAN_DIVISIONS,
        USA_DIVISIONS,
        BRAZIL_DIVISIONS,
        ARGENTINA_DIVISIONS,
        JAPAN_DIVISIONS,
        AUSTRALIA_DIVISIONS,
        SOUTH_AFRICA_DIVISIONS,
        MEXICO_DIVISIONS,
        CANADA_DIVISIONS,
        SOUTH_KOREA_DIVISIONS,
        CHINA_DIVISIONS,
        INDIA_DIVISIONS,
        NIGERIA_DIVISIONS,
        EGYPT_DIVISIONS,
        MOROCCO_DIVISIONS,
        GHANA_DIVISIONS,
        NEW_ZEALAND_DIVISIONS,
        FIJI_DIVISIONS,
        SAMOA_DIVISIONS,
        PAPUA_NEW_GUINEA_DIVISIONS,
        SOLOMON_ISLANDS_DIVISIONS,
        createEnglishLeagueSystem,
        createFrenchLeagueSystem,
        createGermanLeagueSystem,
        createSpanishLeagueSystem,
        createItalianLeagueSystem,
        createUSALeagueSystem,
        createBrazilLeagueSystem,
        createArgentinaLeagueSystem,
        createJapanLeagueSystem,
        createAustraliaLeagueSystem,
        createSouthAfricaLeagueSystem,
        createMexicoLeagueSystem,
        createCanadaLeagueSystem,
        createSouthKoreaLeagueSystem,
        createChinaLeagueSystem,
        createIndiaLeagueSystem,
        createNigeriaLeagueSystem,
        createEgyptLeagueSystem,
        createMoroccoLeagueSystem,
        createGhanaLeagueSystem,
        createNewZealandLeagueSystem,
        createFijiLeagueSystem,
        createSamoaLeagueSystem,
        createPapuaNewGuineaLeagueSystem,
        createSolomonIslandsLeagueSystem
    };
}

if (typeof window !== 'undefined') {
    window.ENGLISH_DIVISIONS = ENGLISH_DIVISIONS;
    window.createEnglishLeagueSystem = createEnglishLeagueSystem;
    window.createFrenchLeagueSystem = createFrenchLeagueSystem;
    window.createGermanLeagueSystem = createGermanLeagueSystem;
    window.createSpanishLeagueSystem = createSpanishLeagueSystem;
    window.createItalianLeagueSystem = createItalianLeagueSystem;
    window.createUSALeagueSystem = createUSALeagueSystem;
    window.createBrazilLeagueSystem = createBrazilLeagueSystem;
    window.createArgentinaLeagueSystem = createArgentinaLeagueSystem;
    window.createJapanLeagueSystem = createJapanLeagueSystem;
    window.createAustraliaLeagueSystem = createAustraliaLeagueSystem;
    window.createSouthAfricaLeagueSystem = createSouthAfricaLeagueSystem;
    window.createMexicoLeagueSystem = createMexicoLeagueSystem;
    window.createCanadaLeagueSystem = createCanadaLeagueSystem;
    window.createSouthKoreaLeagueSystem = createSouthKoreaLeagueSystem;
    window.createChinaLeagueSystem = createChinaLeagueSystem;
    window.createIndiaLeagueSystem = createIndiaLeagueSystem;
    window.createNigeriaLeagueSystem = createNigeriaLeagueSystem;
    window.createEgyptLeagueSystem = createEgyptLeagueSystem;
    window.createMoroccoLeagueSystem = createMoroccoLeagueSystem;
    window.createGhanaLeagueSystem = createGhanaLeagueSystem;
    window.createNewZealandLeagueSystem = createNewZealandLeagueSystem;
    window.createFijiLeagueSystem = createFijiLeagueSystem;
    window.createSamoaLeagueSystem = createSamoaLeagueSystem;
    window.createPapuaNewGuineaLeagueSystem = createPapuaNewGuineaLeagueSystem;
    window.createSolomonIslandsLeagueSystem = createSolomonIslandsLeagueSystem;
}