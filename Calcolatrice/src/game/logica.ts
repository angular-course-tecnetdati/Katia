import * as readline from 'readline';
let datoinput: number;

// Crea l'interfaccia readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funzione per chiedere un input numerico
//function chiediNumero(input: readline.Interface)  {

    
  //  console.log(`dentro chiedinumero`);

  //  input.question('inserisci un valore numerico: ', sceltaUtente) =>{
      
   //   if (isNaN(sceltaUtente)) {
     //   console.log("Per favore, inserisci un numero valido.");
     //   return chiediNumero(input);
    //  } //else
     // {input1 = parseInt(input);}
    //});
//}


function chiediNumero() {
    rl.question("Per favore, inserisci un numero valido. ", (sceltaUtente) => {

        datoinput = parseInt(sceltaUtente);

       ///sceltaUtente = sceltaUtente.toLowerCase();
       if (isNaN(datoinput)) {
           console.log("numero non valido.");
           return chiediNumero();
         } else
           console.log("inserito numero valido");
       });

       console.log(`Numero ${datoinput}:`);
      return;
       
}


// Funzione per chiedere un operatore
//function chiediOperazione(): Promise<string> {
//  return new Promise((resolve, reject) => {
 //   rl.question('Scegli l\'operazione (+, -, *, /): ', (operazione) => {
   //   if (['+', '-', '*', '/'].includes(operazione)) {
    //    resolve(operazione);
    //  } else {
    //    console.log("Operazione non valida! Usa +, -, * o /.");
    //    chiediOperazione().then(resolve);
   //   }
   // });
 // });
//}

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

// Funzione principale per ottenere gli input e calcolare il risultato
export function eseguiCalcolatrice() {

    console.log(`dentro`);
    chiediNumero();
    //const dato1 = datoinput;
    console.log('primo numero ' + datoinput);


    //chiediNumero();
    //const dato2 = datoinput;
    //console.log('secondo numero ' + dato2);
    //rl.close();
   

  //const operazione =  chiediOperazione();

  //const risultato = calcolatrice(dato1, dato2, operazione);
 
  rl.close();
}





