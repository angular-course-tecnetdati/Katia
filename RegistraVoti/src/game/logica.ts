import * as readline from 'readline';
const scelte: string[] = ["CANTO", "BALLO", "GIARDINAGGIO"];
const numMaterie:number = scelte.length;
var i: number=0;
var Riepilogo: string[]  ;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function ChiediVoto() {
    rl.question("Inserisci un Voto da 1 a 10: ", (vot) => {
      const numero = parseInt(vot);
       
        if (isNaN(numero)) {
            console.log("Inserisci un numero valido!");
            RegistraVoto();
           } else {

             if (numero >= 1 && numero <= 10) {
                Riepilogo=['Materia ' + scelte[i] + ' Voto:' + numero ];
                i=++i; 
                RegistraVoto();

             }else
            {
             console.log("Inserisci un numero compreso tra 1 e 10");
             RegistraVoto();

        }
        }
             
    });
}

export function RegistraVoto(): void {
               
               // ho finito di leggere le materie
               if (i === numMaterie) {

                //stampo il riepilogo
                console.log('');
                console.log('------------------');
                console.log('RIEPILOGO');
                console.log('------------------');
                for (let e = 1; e <= numMaterie; e++) {
                    console.log(Riepilogo[e]);
                    }

                rl.close();
                return;
                }

               console.log(`Materia: ` + scelte[i]);

               return ChiediVoto();
               
     
                
}