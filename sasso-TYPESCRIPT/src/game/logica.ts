import * as readline from 'readline';
export function sassoCartaForbici(input: readline.Interface): void {
    const scelte: string[] = ["sasso", "carta", "forbici"];
    console.log("Giochiamo a Sasso, Carta, Forbici!");
    input.question("Scegli tra sasso, carta o forbici: ", (sceltaUtente: string) => {
        sceltaUtente = sceltaUtente.toLowerCase();
        if (!scelte.includes(sceltaUtente)) {
            console.log("Scelta non valida. Riprova!");
            return sassoCartaForbici(input);
        }
        const sceltaComputer: string = scelte[Math.floor(Math.random() * scelte.length)];
        console.log(`Il computer ha scelto: ${sceltaComputer}`);
        if (sceltaUtente === sceltaComputer) {
            console.log("Pareggio!");
        } else if (
            (sceltaUtente === "sasso" && sceltaComputer === "forbici") ||
            (sceltaUtente === "carta" && sceltaComputer === "sasso") ||
            (sceltaUtente === "forbici" && sceltaComputer === "carta")
        ) {
            console.log("Hai vinto!");
        } else {
            console.log("Hai perso!");
        }
        input.close();
    });
}