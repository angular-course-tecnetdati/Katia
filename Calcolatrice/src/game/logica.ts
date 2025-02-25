import * as readline from 'readline';
//var datoinput: string;
var i:number = 0;

///////////////////////////////////////////////
// LUCA LASCIA STARE ...NON GUARDAREEEE
//////////////////////////////////////////////


// Crea l'interfaccia readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function chiediNumero() {
  if (i <2 ) {
   
    rl.question("Per favore, inserisci un numero valido. ", (sceltaUtente) => {

      const numero = parseInt(sceltaUtente);
       
        if (isNaN(numero)) {
            console.log("Inserisci un numero valido!");
            eseguiCalcolatrice();
           } else {
               
                i=++i; 
                eseguiCalcolatrice();

                  }
             
    });
  }
  else {

    rl.question("ora iserisci opertore tra + * - : ", (sceltaUtente) => {

                i=++i; 
                eseguiCalcolatrice();

             
    });


  }
}


// Funzione calcolatrice
export function calcolatrice(numero1: number, numero2: number, operazione: string): number | string {
  switch (operazione) {
    case '+':
      return numero1 + numero2;
    case '-':
      return numero1 - numero2;
    case '*':
      return numero1 * numero2;
    case '/':
      if (numero2 === 0) {
        return 'Errore: divisione per zero non permessa!';
      }
      return numero1 / numero2;
    default:
      return 'Operazione non valida! Usa +, -, * o /.';
  }
}

// Funzione principale
export function eseguiCalcolatrice() {
    if (i === 3) {
    //const risultato = calcolatrice(dato1, dato2, operazione);
    rl.close();
    return;
       }
    return chiediNumero();
  
  
 
}





