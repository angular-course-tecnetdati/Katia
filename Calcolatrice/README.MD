# ESEMPIO PROGETTO NODEJS + TYPESCRIPT

## Descrizione

Obbiettivo di questo progetto è la creazione di un gioco che sfrutta nodejs e typescript. 

Per semplicità è stato riproposto il gioco già visto in [INTRO-NODE](https://github.com/angular-course-tecnetdati/intro-node) ***"sasso forbice e carta"*** adeguandolo per l'utilizzo con typescript.

### Operazioni di adeguamento

Per adeguare il progetto sono stati eseguiti i seguenti passi:

- installazione di typescript nel progetto `npm install typescript --save-dev`
- configurazione `tsconfig.json` 
- installazione della versione tipizzata dei moduli ***nodejs*** `npm i --save-dev @types/node`
- creazione dei moduli logica e index in formato typescript `.ts` 
- compilazione `npx tsc` ed esecuzione `npm start`

#### Configurazione `tsconfig.json` 

Di seguito gli attributi impostati nel file tsconfig.json.

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist", 
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true, 
    "strictPropertyInitialization": true,
    "skipLibCheck": true,
  },
  "include": ["src/**/*.ts"]
}
```

### Struttura del progetto

Si ripropone la struttura già vista nel progetto INTRO-NODE con l'aggiunta della cartella `dist/` per contenere l'output della compilazione.

```
<nome del gioco>/
├── src/
│   ├── index.ts        -> PROGRAMMA PRINCIPALE
│   ├── game/
│   │   └── logica.ts   -> MODULO CON LOGICA DEL GIOCO
├── dist/               -> CARTELLA CON L'OUTPUT DELLA COMPILAZIONE
├── package.json
├── tsconfig.json
```

### Il modulo `@types/node`

Il modulo `@types/node` nasce per la tipizzazione dei moduli ***built-in*** di node, per poterli successivamente utilizzare anche all'interno del codice typescript.

Installando questo modulo è dunque possibile utilizzare il modulo `readline` per effettuare le operazioni già viste sul progetto INTRO-NODE.
