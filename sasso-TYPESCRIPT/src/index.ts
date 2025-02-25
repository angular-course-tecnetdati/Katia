import * as readline from 'readline';
import { sassoCartaForbici } from './game/logica';
// per usare readline tipizzato ho installato ==> @types/node
const input: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("AVVIO GIOCO ...");
sassoCartaForbici(input);