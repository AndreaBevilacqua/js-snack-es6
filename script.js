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
// ^ MILESTONE - 4 Stampare in console infine un array con il nome di questi studenti tutto in maiuscolo

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

