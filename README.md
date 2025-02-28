# ESEMPI PROGETTI NODEJS

## Descrizione

Obbiettivo di questo progetto è la creazione di semplici progetti NODEJS per spiegare l'esecuzione di _Javascript_ tramite `NodeJS`.


## Progetti

Per puro scopo didattico si sono creati due progetti di esempio:

- ***Indovina il numero***
- ***Sasso carta forbici***

## Requisiti dei progetti

I progetti possono essere eseguiti attraverso `NodeJS` con le seguenti versioini:

- node Version 20+
- npm Version 10+   

### Esecuzione dei progetti

Per eseguire il progetto basterà semplicemente eseguire il comando 

```bash
npm install
```

per scaricare eventuali dipendenze del progetto, ed il comando

```bash 
npm start
```

### Struttura dei progetti

```
<nome del gioco>/
├── src/
│   ├── index.js        -> PROGRAMMA PRINCIPALE
│   ├── game/
│   │   └── logica.js   -> MODULO CON LOGICA DEL GIOCO
├── package.json

```

# Note sugli esercizi svolti

## Primo giorno

- ***Esercizio Dado***: Ottimo lavoro
- ***Esercizio Tabellina***: va bene, fai attenzione il nome della variabile della funzione di call-back sovrascrive il nome del readline
- ***Esercizio hangman***: ottimo lavoro, forse avrei aggiunto qualche funzione per scomporre ulteriormente, come:
  - verificaLettera(lettera)
  - checkLettera(lettera)
  - stampaEsito() 
- ***Esercizio calcolatrice***: la cartella(_package_) `game`  potevi chiamarla diversamente non essendo un gioco, per il resto ok.
- ***tecnetdati sito***: Per iniziare direi che va benissimo con questi tre componenti ;)
- ***Angular tabelline***: 
  - bravissima che hai utilizzato la direttiva `ngClass` ed `ngStyle`
  - ok utilizzo di `ngFor`
  - `ngIf` ok, ma potevi sfruttare il [`truthiness`](https://github.com/angular-course-tecnetdati/slide/blob/master/Lezione02_IntroTypescript.pdf) 