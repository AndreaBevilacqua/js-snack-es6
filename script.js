console.log('js ok');

// ^ ESERCIZIO 1

// ^ MILESTONE - 1 Creo un array con tutti gli ospiti e un variabile tavolo vip
// ^ MILESTONE - 2 Creo un array vuoto guestlist in cui inserisco i campi usando inoltre .map()
// ^ MILESTONE - 3 Stampo in console i risultati

// ~ ================
// ~      ARRAY
// ~ ================

const tableName = 'Tavolo Vip';

const guests = ['Brad Pitt','Johnny Depp','Lady Gaga','Cristiano Ronaldo','Georgina Rodriguez','Chiara Ferragni','Fedez','George Clooney','Amal Clooney','Maneskin'];

// ? ===============
// ?   SVOLGIMENTO
// ? ===============

const guestlist = guests.map((guest, i) => {
    return {
        tableName: tableName,
        guestName: guest,
        seatOccupied: i + 1
    };
});

// Stampo in console
console.log(guestlist);

// ^ ESERCIZIO 2

// ^ MILESTONE - 1 Creo un array di oggetti con tutti gli studenti e i rispettivi voti,id 
// ^ MILESTONE - 2 Stabilisco quali studenti hanno totalizzato un voto superiore a 70
// ^ MILESTONE - 3 Stabilisco quali studenti hanno totalizzato un voto superiore a 70 e id superiore a 120
// ^ MILESTONE - 4 Stampare in console infine un array con il nome degli studenti tutto in maiuscolo

// ~ ================
// ~      ARRAY
// ~ ================

const students = [
    { id: 213, name: 'Marco della Rovere', grade: 78 },
    { id: 110, name: 'Paola Cortellessa', grade: 96 },
    { id: 250, name: 'Andrea Mantegna', grade: 48 },
    { id: 145, name: 'Gaia Borromini', grade: 74 },
    { id: 196, name: 'Luigi Grimandello', grade: 68 },
    { id: 102, name: 'Piero della Francesca', grade: 50 },
    { id: 120, name: 'Francesca da Polenta', grade: 84 },
]

// ? ===============
// ?   SVOLGIMENTO
// ? ===============

const studentsOver70 = students.filter(({ grade }) => grade > 70); // DESTRUCTRING
console.log(studentsOver70);

const studentsOver70Id = students.filter(({ grade, id }) => grade > 70 && id > 120); // DESTRUCTRING
console.log(studentsOver70Id);

const namesToUppercase = students.map(({ name }) => name.toUpperCase()); // DESTRUCTRING
console.log(namesToUppercase);

// ^ ESERCIZIO 3

// ^ MILESTONE - 1 Creo un array di oggetti con 3 bici con nome e peso
// ^ MILESTONE - 2 Determino quale bici ha il peso minore
// ^ MILESTONE - 3 Stampo in console

// ~ ================
// ~      ARRAY
// ~ ================

const bicycles = [
    { name: 'Pietro', weight: '12'},
    { name: 'Angelo', weight: '20'},
    { name: 'Mauro', weight: '15'},
]

// ? ===============
// ?   SVOLGIMENTO
// ? ===============

const lightestBike = bicycles.reduce((lowWeightBike, mainBike) => mainBike.weight < lowWeightBike ? mainBike : lowWeightBike );
console.log(lightestBike);

// ^ ESERCIZIO 4

// ^ MILESTONE - 1 Creo un array di oggetti con squadre di calcio con nome, punti fatti e falli subiti
// ^ MILESTONE - 2 Genero numeri random sia per i punti fatti che per i falli subiti
// ^ MILESTONE - 3 Infine attraverso il destructring creo un nuovo array con all'interno solo e falli subiti
// ^ MILESTONE - 4 Stampo in console







