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

const FRENCH_FIRST_NAMES = [
    'Lucas', 'Hugo', 'Léo', 'Arthur', 'Raphaël', 'Noah', 'Gabriel', 'Louis', 'Ethan', 'Mathis',
    'Adam', 'Nathan', 'Tom', 'Enzo', 'Axel', 'Maël', 'Paul', 'Victor', 'Gabin', 'Romain'
];

const FRENCH_LAST_NAMES = [
    'Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau',
    'Simon', 'Laurent', 'Lefèvre', 'Michel', 'Garcia', 'David', 'Bertrand', 'Rousseau', 'Vincent', 'Fournier'
];

const GERMAN_FIRST_NAMES = [
    'Lukas', 'Felix', 'Max', 'Paul', 'Levin', 'Luis', 'Jonas', 'Noah', 'Finn', 'Elias',
    'Mats', 'Jan', 'Nico', 'Tobias', 'Niklas', 'Moritz', 'Simon', 'Marcel', 'Tim', 'Oskar'
];

const GERMAN_LAST_NAMES = [
    'Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann',
    'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann'
];

const SPANISH_FIRST_NAMES = [
    'Alejandro', 'Carlos', 'Daniel', 'David', 'Diego', 'Fernando', 'Francisco', 'Gabriel', 'Hugo', 'Iván',
    'Javier', 'José', 'Juan', 'Luis', 'Manuel', 'Miguel', 'Pablo', 'Pedro', 'Rafael', 'Sergio'
];

const SPANISH_LAST_NAMES = [
    'García', 'Rodríguez', 'González', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Martín', 'Ruiz',
    'Hernández', 'Jiménez', 'Moreno', 'Álvarez', 'Romero', 'Gutiérrez', 'Navarro', 'Torres', 'Domínguez', 'Vázquez'
];

const ITALIAN_FIRST_NAMES = [
    'Alessandro', 'Andrea', 'Antonio', 'Carlo', 'Davide', 'Emanuele', 'Fabio', 'Federico', 'Francesco', 'Gabriele',
    'Gianluca', 'Giovanni', 'Luca', 'Marco', 'Matteo', 'Massimo', 'Nicola', 'Paolo', 'Roberto', 'Simone'
];

const ITALIAN_LAST_NAMES = [
    'Rossi', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco', 'Bruno',
    'Gallo', 'Conti', 'De Luca', 'Mancini', 'Costa', 'Giordano', 'Rizzo', 'Lombardi', 'Moretti', 'Barbieri'
];

const MEXICO_FIRST_NAMES = [
    'Miguel', 'Javier', 'Luis', 'Carlos', 'Antonio', 'Alejandro', 'Fernando', 'Francisco', 'Jesus', 'Eduardo',
    'Ricardo', 'Juan', 'Roberto', 'Rafael', 'Mario', 'Oscar', 'Sergio', 'Victor', 'Enrique', 'Ignacio'
];

const MEXICO_LAST_NAMES = [
    'Hernández', 'García', 'Martínez', 'López', 'González', 'Pérez', 'Rodríguez', 'Sánchez', 'Ramírez', 'Torres',
    'Flores', 'Gómez', 'Díaz', 'Reyes', 'Jiménez', 'Ruiz', 'Morales', 'Ortega', 'Castillo', 'Vázquez'
];

const CANADA_FIRST_NAMES = [
    'Liam', 'Noah', 'Oliver', 'Ethan', 'Mason', 'Logan', 'Lucas', 'Jackson', 'Aiden', 'Jacob',
    'William', 'Benjamin', 'Henry', 'Owen', 'Alexander', 'Samuel', 'Matthew', 'Ryan', 'Nathan', 'Connor'
];

const CANADA_LAST_NAMES = [
    'Smith', 'Brown', 'Tremblay', 'Martin', 'Roy', 'Lee', 'Walker', 'Green', 'Hall', 'Thomas',
    'Scott', 'McDonald', 'Wilson', 'Clark', 'Campbell', 'Mitchell', 'Watson', 'Peterson', 'Carter', 'Poirier'
];

const SOUTH_KOREA_FIRST_NAMES = [
    'Ji', 'Min', 'Seo', 'Jun', 'Woo', 'Hyun', 'Tae', 'Dong', 'Sung', 'Young',
    'Hye', 'Jin', 'Mi', 'Eun', 'Seo', 'Na', 'Yeon', 'Hae', 'Ji', 'In'
];

const SOUTH_KOREA_LAST_NAMES = [
    'Kim', 'Lee', 'Park', 'Choi', 'Jung', 'Kang', 'Cho', 'Yoon', 'Jang', 'Lim',
    'Han', 'Oh', 'Seo', 'Shin', 'Yoo', 'Kwon', 'Hwang', 'Ahn', 'Song', 'Chun'
];

const CHINA_FIRST_NAMES = [
    'Wei', 'Jian', 'Lei', 'Jie', 'Li', 'Jun', 'Peng', 'Tao', 'Hao', 'Ming',
    'Yu', 'Hui', 'Bo', 'Chen', 'Qiang', 'Guang', 'Feng', 'Zhi', 'Xiao', 'Yang'
];

const CHINA_LAST_NAMES = [
    'Li', 'Wang', 'Zhang', 'Liu', 'Chen', 'Yang', 'Huang', 'Zhao', 'Wu', 'Zhou',
    'Xu', 'Sun', 'Ma', 'Zhu', 'Hu', 'Guo', 'He', 'Gao', 'Lin', 'Luo'
];

const INDIA_FIRST_NAMES = [
    'Arjun', 'Rahul', 'Rohan', 'Vikram', 'Amit', 'Siddharth', 'Karan', 'Nikhil', 'Anand', 'Vijay',
    'Ravi', 'Rohit', 'Manish', 'Saurav', 'Aakash', 'Deven', 'Deepak', 'Harish', 'Kunal', 'Sachin'
];

const INDIA_LAST_NAMES = [
    'Patel', 'Singh', 'Kumar', 'Sharma', 'Gupta', 'Verma', 'Chaudhary', 'Joshi', 'Reddy', 'Nair',
    'Mehta', 'Das', 'Jain', 'Chopra', 'Bhat', 'Shah', 'Nanda', 'Iyer', 'Kapoor', 'Saxena'
];

const NIGERIA_FIRST_NAMES = [
    'Chinedu', 'Ifeanyi', 'Oluwaseun', 'Adekemi', 'Emeka', 'Ibrahim', 'Ade', 'Tunde', 'Chukwu', 'Uche',
    'Bisi', 'Femi', 'Kemi', 'Amina', 'Esther', 'Ngozi', 'Oluchi', 'Tosin', 'Ken', 'Nnamdi'
];

const NIGERIA_LAST_NAMES = [
    'Okafor', 'Johnson', 'Oladipo', 'Ibrahim', 'Ogun', 'Ola', 'Adebayo', 'Chukwu', 'Eze', 'Okechukwu',
    'Onyeka', 'Balogun', 'Okonkwo', 'Adewale', 'Ojo', 'Idowu', 'Oluwole', 'Ajayi', 'Ibe', 'Ebenezer'
];

const EGYPT_FIRST_NAMES = [
    'Mohamed', 'Ahmed', 'Omar', 'Youssef', 'Ali', 'Mostafa', 'Karim', 'Hassan', 'Mahmoud', 'Ibrahim',
    'Amir', 'Tamer', 'Adel', 'Ayman', 'Hany', 'Walid', 'Sherif', 'Nader', 'Mourad', 'Sami'
];

const EGYPT_LAST_NAMES = [
    'Hassan', 'Mohamed', 'Ali', 'Abdel', 'Ibrahim', 'Youssef', 'El-Sayed', 'Hussein', 'Saeed', 'Farouk',
    'Mahmoud', 'Fahmy', 'Salah', 'Abdelrahman', 'Nashat', 'Ramzy', 'Fathi', 'Gamal', 'Tarek', 'Zaki'
];

const MOROCCO_FIRST_NAMES = [
    'Karim', 'Youssef', 'Ahmed', 'Hassan', 'Said', 'Omar', 'Rachid', 'Abdel', 'Nabil', 'Anas',
    'Samir', 'Hamid', 'Yassine', 'Mehdi', 'Tarek', 'Ayman', 'Bilal', 'Rida', 'Hicham', 'Younes'
];

const MOROCCO_LAST_NAMES = [
    'El Idrissi', 'Amrani', 'Benzema', 'Oulad', 'Alaoui', 'Boufal', 'Mzoughi', 'Bennani', 'Hassani', 'Barkat',
    'Talbi', 'Aziz', 'Fassi', 'Hamdani', 'Lahmar', 'Sahraoui', 'Rahal', 'Chaoui', 'Errai', 'Mansouri'
];

const GHANA_FIRST_NAMES = [
    'Kwame', 'Kofi', 'Yaw', 'Kojo', 'Prince', 'Nana', 'Samuel', 'Daniel', 'Michael', 'John',
    'David', 'Joseph', 'Emmanuel', 'Peter', 'Richard', 'Benjamin', 'Edward', 'Frederick', 'Eric', 'Frank'
];

const GHANA_LAST_NAMES = [
    'Mensah', 'Boateng', 'Appiah', 'Owusu', 'Adams', 'Ofori', 'Agyeman', 'Kwarteng', 'Asante', 'Nkrumah',
    'Osei', 'Aidoo', 'Antwi', 'Kumah', 'Ankrah', 'Tetteh', 'Amponsah', 'Kissi', 'Sarpong', 'Baah'
];

const NEW_ZEALAND_FIRST_NAMES = [
    'Liam', 'Noah', 'Oliver', 'Mason', 'Lucas', 'Oliver', 'Leo', 'Charlie', 'James', 'Thomas',
    'Jacob', 'Max', 'Ethan', 'Leo', 'Isaac', 'Harry', 'Hugo', 'Samuel', 'Archie', 'Oscar'
];

const NEW_ZEALAND_LAST_NAMES = [
    'Smith', 'Jones', 'Williams', 'Brown', 'Taylor', 'Wilson', 'Thompson', 'Evans', 'Nguyen', 'Robinson',
    'Walker', 'Hill', 'King', 'Scott', 'Young', 'Martin', 'Lee', 'Mitchell', 'Reid', 'Carter'
];

const FIJI_FIRST_NAMES = [
    'Jone', 'Peni', 'Ratu', 'Isimeli', 'Eroni', 'Sakiusa', 'Esala', 'Mako', 'Viliame', 'Apisai',
    'Semisi', 'Elia', 'Naemi', 'Jas', 'Tevita', 'Samu', 'Apenisa', 'Manasa', 'Peniasi', 'Jonah'
];

const FIJI_LAST_NAMES = [
    'Ratu', 'Naiqama', 'Nawaqanitawase', 'Baledrokadroka', 'Tuisawau', 'Masilaca', 'Kuridrani', 'Vatubua', 'Radradra', 'Raiwalui',
    'Vakalahi', 'Ravi', 'Tavui', 'Yarnall', 'Luvu', 'Saili', 'Waqavonovono', 'Tavua', 'Matae', 'Nasilia'
];

const SAMOA_FIRST_NAMES = [
    'Luka', 'Tusi', 'Mata', 'Faasiu', 'Iose', 'Faalogo', 'Samuela', 'Tupu', 'Malo', 'Lemalu',
    'Poe', 'Fili', 'Mose', 'Uili', 'Telea', 'Logan', 'Tulia', 'Paia', 'Niko', 'Leki'
];

const SAMOA_LAST_NAMES = [
    'Tupuola', 'Tuuga', 'Fale', 'Ala', 'Mataafa', 'Vai', 'Aiono', 'Lavelua', 'Toto', 'Tuilaepa',
    'Malietoa', 'Mataafa', 'Taufa', 'Tafuna', 'Alofa', 'Lemanu', 'Leota', 'Tuipulotu', 'Fao', 'Vai'
];

const PAPUA_NEW_GUINEA_FIRST_NAMES = [
    'Moses', 'John', 'Peter', 'David', 'Paul', 'Mark', 'Daniel', 'Joseph', 'Isaac', 'Samuel',
    'Benjamin', 'Simon', 'Elijah', 'Joshua', 'Jacob', 'Nathan', 'Michael', 'Andrew', 'Thomas', 'Luke'
];

const PAPUA_NEW_GUINEA_LAST_NAMES = [
    'Malo', 'Moresby', 'Kidu', 'Gavara', 'Nepa', 'Kapi', 'Tasip', 'Mekere', 'Zeming', 'Naupa',
    'Koim', 'Yali', 'Gogom', 'Waroi', 'Piri', 'Wabo', 'Kijana', 'Rigo', 'Bebe', 'Kakasa'
];

const SOLOMON_ISLANDS_FIRST_NAMES = [
    'David', 'James', 'Peter', 'Michael', 'John', 'Samuel', 'Daniel', 'Paul', 'Andrew', 'Mark',
    'Joseph', 'Thomas', 'Isaac', 'Benjamin', 'Joshua', 'Simon', 'Luke', 'Nathan', 'Robert', 'Aaron'
];

const SOLOMON_ISLANDS_LAST_NAMES = [
    'Ramo', 'Honiara', 'Pasa', 'Riki', 'Kokomala', 'Tavui', 'Ari', 'Bana', 'Ishihara', 'Kort',
    'Sauni', 'Tuki', 'Ravi', 'Vakalahi', 'Taoa', 'Marau', 'Lomaloma', 'Tome', 'Nasi', 'Peni'
];

const USA_FIRST_NAMES = [
    'James', 'Michael', 'John', 'David', 'William', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Daniel',
    'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth', 'Kevin'
];

const USA_LAST_NAMES = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
    'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'
];

const BRAZIL_FIRST_NAMES = [
    'João', 'José', 'Maria', 'Antonio', 'Francisco', 'Carlos', 'Paulo', 'Pedro', 'Lucas', 'Luiz',
    'Marcos', 'Luis', 'Gabriel', 'Rafael', 'Daniel', 'Marcelo', 'Bruno', 'Eduardo', 'Felipe', 'Raimundo'
];

const BRAZIL_LAST_NAMES = [
    'Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Gomes',
    'Costa', 'Ribeiro', 'Martins', 'Carvalho', 'Almeida', 'Lopes', 'Soares', 'Fernandes', 'Vieira', 'Barbosa'
];

const ARGENTINA_FIRST_NAMES = [
    'Juan', 'José', 'Carlos', 'Jorge', 'Luis', 'Miguel', 'Antonio', 'Pedro', 'Alejandro', 'Roberto',
    'Fernando', 'Ricardo', 'Pablo', 'Daniel', 'Eduardo', 'Sergio', 'Gustavo', 'Mario', 'Raúl', 'Oscar'
];

const ARGENTINA_LAST_NAMES = [
    'García', 'Rodríguez', 'González', 'Fernández', 'López', 'Martínez', 'Pérez', 'Sánchez', 'Romero', 'Sosa',
    'Torres', 'Álvarez', 'Ruiz', 'Ramírez', 'Flores', 'Acosta', 'Benítez', 'Medina', 'Herrera', 'Aguirre'
];

const JAPAN_FIRST_NAMES = [
    'Hiroshi', 'Kenji', 'Yuki', 'Takashi', 'Kazuki', 'Ryota', 'Yuto', 'Haruto', 'Sota', 'Yuta',
    'Daiki', 'Shota', 'Taro', 'Jiro', 'Saburo', 'Shiro', 'Kuro', 'Akira', 'Haru', 'Natsu'
];

const JAPAN_LAST_NAMES = [
    'Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe', 'Ito', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Kato',
    'Yoshida', 'Yamada', 'Sasaki', 'Yamaguchi', 'Matsumoto', 'Inoue', 'Kimura', 'Hayashi', 'Shimizu', 'Saito'
];

const AUSTRALIA_FIRST_NAMES = [
    'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Charles', 'Joseph', 'Thomas',
    'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua'
];

const AUSTRALIA_LAST_NAMES = [
    'Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Taylor', 'Johnson', 'White', 'Martin', 'Anderson',
    'Thompson', 'Nguyen', 'Thomas', 'Walker', 'Harris', 'Lee', 'Ryan', 'Robinson', 'Kelly', 'King'
];

const SOUTH_AFRICA_FIRST_NAMES = [
    'Sipho', 'Thabo', 'Lerato', 'Nomsa', 'Bongani', 'Zanele', 'Jabulani', 'Nomsa', 'Thandi', 'Sibusiso',
    'Mandla', 'Nomvula', 'Themba', 'Zodwa', 'Vusi', 'Nomsa', 'Bhekisisa', 'Nomsa', 'Thabo', 'Lerato'
];

const SOUTH_AFRICA_LAST_NAMES = [
    'Nkosi', 'Dlamini', 'Zulu', 'Mthembu', 'Ndlovu', 'Shabalala', 'Mkhize', 'Khoza', 'Buthelezi', 'Sithole',
    'Ngwenya', 'Moyo', 'Ncube', 'Sibanda', 'Gumede', 'Cele', 'Mthembu', 'Nxumalo', 'Zwane', 'Mthembu'
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
    const ageFactor = Math.max(0.6, Math.min(1.0, (35 - age) / 30 + 0.4));
    const ratingFactor = Math.pow(Math.max(1, rating), 2.0);
    const value = 10000 + ratingFactor * 45 * ageFactor;
    return Math.round(value);
}

function calculateInitialCashBalance(players, level = 1) {
    const totalPlayerValue = (players || []).reduce((sum, player) => sum + (player.marketValue || 0), 0);
    const averagePlayerValue = totalPlayerValue / Math.max(1, (players || []).length);
    const buyingPower = averagePlayerValue * 4;
    const levelSafetyCash = 50000 + (level - 1) * 20000;
    return Math.round(buyingPower + levelSafetyCash);
}

function createPlayer(level, position, ratingOverride = null, ageOverride = null, countryName = '') {
    const [min, max] = getRatingRangeByLevel(level);
    let rating = ratingOverride ?? randomInRange(min, max);

    if (Math.random() < 0.05) {
        rating = Math.min(100, rating + randomInRange(1, 10));
    }

    const age = ageOverride ?? randomInRange(16, 30);
    const useFrenchNames = countryName === 'France';
    const useGermanNames = countryName === 'Germany';
    const useSpanishNames = countryName === 'Spain';
    const useItalianNames = countryName === 'Italy';
    const useUSANames = countryName === 'USA';
    const useBrazilNames = countryName === 'Brazil';
    const useArgentinaNames = countryName === 'Argentina';
    const useJapanNames = countryName === 'Japan';
    const useAustraliaNames = countryName === 'Australia';
    const useSouthAfricaNames = countryName === 'South Africa';
    const firstNames = useFrenchNames
        ? FRENCH_FIRST_NAMES
        : useGermanNames
            ? GERMAN_FIRST_NAMES
            : useSpanishNames
                ? SPANISH_FIRST_NAMES
                : useItalianNames
                    ? ITALIAN_FIRST_NAMES
                    : useUSANames
                        ? USA_FIRST_NAMES
                        : useBrazilNames
                            ? BRAZIL_FIRST_NAMES
                            : useArgentinaNames
                                ? ARGENTINA_FIRST_NAMES
                                : useJapanNames
                                    ? JAPAN_FIRST_NAMES
                                    : useAustraliaNames
                                        ? AUSTRALIA_FIRST_NAMES
                                        : useSouthAfricaNames
                                            ? SOUTH_AFRICA_FIRST_NAMES
                                            : PLAYER_FIRST_NAMES;
    const lastNames = useFrenchNames
        ? FRENCH_LAST_NAMES
        : useGermanNames
            ? GERMAN_LAST_NAMES
            : useSpanishNames
                ? SPANISH_LAST_NAMES
                : useItalianNames
                    ? ITALIAN_LAST_NAMES
                    : useUSANames
                        ? USA_LAST_NAMES
                        : useBrazilNames
                            ? BRAZIL_LAST_NAMES
                            : useArgentinaNames
                                ? ARGENTINA_LAST_NAMES
                                : useJapanNames
                                    ? JAPAN_LAST_NAMES
                                    : useAustraliaNames
                                        ? AUSTRALIA_LAST_NAMES
                                        : useSouthAfricaNames
                                            ? SOUTH_AFRICA_LAST_NAMES
                                            : PLAYER_LAST_NAMES;

    return {
        id: `p-${playerIdCounter++}`,
        name: `${firstNames[randomInRange(0, firstNames.length - 1)]} ${lastNames[randomInRange(0, lastNames.length - 1)]}`,
        position,
        age,
        rating,
        role: 'bench',
        playChance: 10,
        countryName,
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

function buildSquadForLevel(level, countryName = '') {
    const squadSize = randomInRange(18, 30);
    const players = [];

    players.push(createPlayer(level, 'GK', null, null, countryName));
    for (let i = 0; i < 3; i++) players.push(createPlayer(level, 'DEF', null, null, countryName));
    for (let i = 0; i < 3; i++) players.push(createPlayer(level, 'MID', null, null, countryName));
    for (let i = 0; i < 3; i++) players.push(createPlayer(level, 'ATT', null, null, countryName));

    const pool = getPositionPool();
    while (players.length < squadSize) {
        players.push(createPlayer(level, pool[randomInRange(0, pool.length - 1)], null, null, countryName));
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

function createReplacementPlayer(level, position, previousRating, countryName = '') {
    return createPlayer(level, position, Math.max(1, previousRating - 10), 16, countryName);
}

function attachSquadToTeam(team, level) {
    let players = team.players;
    let teamRating = team.teamRating;
    let cashBalance = team.cashBalance;

    if (typeof cashBalance !== 'number' && typeof team.netWorth === 'number') {
        cashBalance = team.netWorth;
    }

    if (!players || typeof teamRating !== 'number') {
        const squad = buildSquadForLevel(level, team.countryName);
        players = squad.players;
        teamRating = squad.teamRating;
    }

    if (typeof cashBalance !== 'number') {
        cashBalance = calculateInitialCashBalance(players, level);
    }

    players = players.map(player => ({
        ...player,
        careerHistory: player.careerHistory || [{ season: currentSeasonYear, teamId: team.id, teamName: team.name }],
        transferHistory: player.transferHistory || []
    }));

    return {
        ...team,
        players,
        teamRating,
        cashBalance
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