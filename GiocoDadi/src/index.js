/**
 * 
 * In questo progetto sto utilizzato `commonjs`, il sistema a moduli predefinito su Node
 * 
 */
const readline = require('readline');

// importo il modulo `game` e la funzione `giocoDadi`
const { giocoDadi } = require('./game/logica.js');


console.log("AVVIO giocoDadi ...");
giocoDadi();