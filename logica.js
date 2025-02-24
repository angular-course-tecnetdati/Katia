function stampaTabellina(input) {
    
	   function chiediNumero() {
        input.question("Inserisci un numero: ", (input) => {
            const numero = parseInt(input);
			
			if (isNaN(numero)) {
                console.log("Inserisci un numero valido!");
                chiediNumero();
          
            } else {
                console.log(`Tabellina del ${input}:`);
				for (let i = 1; i <= 10; i++) {
				console.log(`${input} x ${i} = ${input * i}`);
				}
            }
            
        });
    }
	 
	
	chiediNumero();
	
}

module.exports = { stampaTabellina };

