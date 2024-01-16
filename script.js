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