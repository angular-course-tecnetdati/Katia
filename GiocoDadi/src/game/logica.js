
    function giocoDadi() {
		
		    console.log("Giochiamo ai DADI!");
			 
            let giocatore = Math.floor(Math.random() * 6) + 1;
			console.log("giocatore " + giocatore);
            let computer = Math.floor(Math.random() * 6) + 1;
			console.log("computer " + computer);
			
 
            if (giocatore > computer) {
                console.log("giocatore Hai vinto!");
            } else if (giocatore < computer) {
                console.log("giocatore Hai perso!");
            } else {
                console.log("Pareggio!");
            }

           }

module.exports = { giocoDadi };