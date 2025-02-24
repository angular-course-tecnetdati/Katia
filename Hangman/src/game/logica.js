const parole = ["cane", "gatto", "mari", "katia"];
const parolaCasuale = parole[Math.floor(Math.random() * parole.length)];
let parolaNascosta = "_".repeat(parolaCasuale.length).split("");
let tentativi = 6;
let lettereUsate = [];

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gioca() {
    rl.question("Inserisci una lettera: ", (lettera) => {
        indovinaLettera(lettera.toLowerCase());
    });
}


function indovinaLettera(lettera) {
    if (!lettera || lettera.length !== 1 || !/[a-z]/.test(lettera)) {
        console.log("Inserisci una sola lettera valida!");
        return gioca();
    }
    if (lettereUsate.includes(lettera)) {
        console.log("Hai già usato questa lettera!");
        return gioca();
    }
    lettereUsate.push(lettera);
    
    if (parolaCasuale.includes(lettera)) {
        for (let i = 0; i < parolaCasuale.length; i++) {
            if (parolaCasuale[i] === lettera) {
                parolaNascosta[i] = lettera;
            }
        }
    } else {
        tentativi--;
        console.log(`Lettera sbagliata! Tentativi rimasti: ${tentativi}`);
    }
    
    console.log("Parola: " + parolaNascosta.join(" "));
    console.log("Lettere usate: " + lettereUsate.join(", "));
    
    if (!parolaNascosta.includes("_")) {
        console.log("Congratulazioni! Hai indovinato la parola: " + parolaCasuale);
        rl.close();
        return;
    } else if (tentativi === 0) {
        console.log("Hai perso! La parola era: " + parolaCasuale);
        rl.close();
        return;
    }
    
    gioca();
}

module.exports = { gioca };