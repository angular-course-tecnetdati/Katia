import * as readline from 'readline';

var i: number=0;
var operaz: string;
var numero1:number=0;
var numero2:number=0;


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function chiediNumero() {
  
    if (i < 3){
    rl.question("Per favore, inserisci un numero valido. ", (sceltaUtente) => {

      const numero = parseInt(sceltaUtente);
       
        if (isNaN(numero)) {
            console.log("Inserisci un numero valido!");
             eseguiCalcolatrice();
           } else {
                const numero = parseInt(sceltaUtente);
                if (i ===1) { 
                 numero1=numero; 
                } 
                if (i ===2) { 
                  numero2=numero;
                } 
             
                eseguiCalcolatrice();

                  }
             
    });
    }
    if (i === 3){

    rl.question("ora iserisci opertore tra + * - : ", (operazione) => {
               eseguiCalcolatrice();

             
    });


  }
}


// Funzione calcolatrice
export function calcolatrice(): number | string {
  switch (operaz) {
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
export function eseguiCalcolatrice(): void  {
     

    i=++i; 
    //console.log(i);
    if (i === 4) {
    const risultato = calcolatrice();

    console.log('risultato' + risultato);

    rl.close();
    return;
       }
    
    return chiediNumero();
    
  
  
 
}





