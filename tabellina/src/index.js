/**
 * 
 * In questo progetto sto utilizzato `commonjs`, il sistema a moduli predefinito su Node
 * 
 */
const readline = require('readline');

// importo il modulo `game` e la funzione `stampaTabellina`
const { stampaTabellina } = require('./game/logica.js');

// oggetto per leggere l'input da tastiera (l'output non viene utilizzato)
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("AVVIO GIOCO ...");
stampaTabellina(input);