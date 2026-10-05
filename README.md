# Editor Compito Python — versione standalone

Editor Python in-browser per compiti in classe. **Non richiede nessun account**
(né Claude né altro) e non fa nessuna chiamata a servizi esterni: gira come
semplice sito statico.

## Cosa fa

- Più esercizi per compito, ciascuno con consegna, codice di partenza e output separati.
- Editor con colori: **commenti in verde**, stringhe, parole chiave e numeri evidenziati.
- Esegue Python nel browser con due motori a scelta (vedi sotto): uno leggero in
  Python puro, uno completo con **numpy e pandas**.
- Registra: uscite dalla pagina (con orario e durata), uscite da schermo intero,
  tentativi di copia/taglia/incolla, tentativi di aprire gli strumenti sviluppatore,
  ricariche della pagina.
- Blocca copia/incolla/menu contestuale nell'editor.
- **Salvataggio automatico** nel browser dello studente (con l'ora dell'ultimo salvataggio
  sempre visibile) e **copia di backup scaricabile** con «Salva copia».
- **Alla consegna** esegue il codice di ogni esercizio, ne conserva l'output e scarica un
  file `.json` che lo studente carica su Teams.
- **Dashboard docente**: si caricano insieme tutti i file `.json` (anche 20 insieme) e si
  vedono stato, uscite, tempo fuori pagina, copia/incolla, durata, codice con output di
  ogni esercizio e registro eventi.
- **Report PDF**: un compito per pagina con intestazione, statistiche, codice colorato,
  output ed eventi di ogni studente.

## Cosa NON fa (a differenza della versione con dashboard live)

- Il docente **non vede gli studenti in tempo reale**: i dati arrivano a fine compito,
  con i file consegnati. Le uscite dalla pagina sono comunque tutte registrate con
  l'orario e lo studente vede l'avviso rosso subito.
- Se uno studente non consegna il file, il docente non ha nulla di suo (il lavoro resta
  solo nel suo browser, salvo un backup che abbia scaricato). Con `elencoClasse` compilato
  la dashboard indica chi manca.

## Come pubblicarlo (serve un indirizzo web: gli iPad non aprono bene file locali)

Servono questi file/cartelle, tutti nella stessa posizione:

```
index.html          (non si modifica mai)
compito.js          (il compito: l'unico file da cambiare)
skulpt/             (motore Python leggero)
pyodide/            (motore con numpy e pandas, circa 21 MB)
```

Se usi sempre il motore leggero puoi omettere la cartella `pyodide/`.

Opzioni gratuite:

1. **GitHub Pages** — crea un repository, carica i file, attiva Pages dalle
   impostazioni. Indirizzo tipo `https://utente.github.io/nome-repo/`.
2. **Netlify** — trascina la cartella su https://app.netlify.com/drop
   (serve un account gratuito per tenerlo online stabilmente).
3. **Sito/server della scuola**, se permette di pubblicare pagine statiche.

SharePoint, OneDrive e Teams **non** servono per questo: scaricano l'HTML invece di
mostrarlo. Su un PC con Chrome o Edge puoi provare il motore leggero anche facendo doppio
clic su `index.html` (il motore con numpy richiede invece l'indirizzo web).

Poi: manda agli studenti il link (in Teams) e il codice del compito, e crea su Teams
un'attività di tipo "Compito" dove caricano il file `.json`.

## Preparare un nuovo compito

Si modifica **solo `compito.js`** (con Blocco note o qualsiasi editor di testo);
`index.html` resta com'è. Dentro `compito.js` ci sono le istruzioni e tre esercizi
di esempio da usare come modello:

- `titoloCompito`: titolo mostrato allo studente.
- `passwordDocente`: password della dashboard (filtro soft: chi legge il file la vede).
- `saleSigillo`: una stringa a piacere, serve a riconoscere i file di consegna e di backup
  modificati a mano. Cambiala ogni tanto.
- `elencoClasse`: facoltativo, lista dei nomi (`["Mario Rossi", "Anna Bianchi"]`):
  la dashboard segnala chi non ha ancora consegnato (l'ordine nome/cognome non conta).
- `motore`: `"skulpt"` oppure `"pyodide"` (vedi sotto).
- `pacchetti`: solo con `"pyodide"`, librerie da caricare subito, es. `["numpy"]`.
- `esercizi`: un blocco per esercizio con `titolo`, `testoBrief` (la consegna) e
  `templateCodice` (codice di partenza). I testi si scrivono su più righe tra
  String.raw` e ` (accenti gravi); il codice Python si scrive così com'è.
  Non usare l'accento grave né la sequenza `${` dentro i testi.

Poi ricarica `compito.js` sul sito: gli studenti lo vedono alla prossima apertura
della pagina. Se il file ha un errore (una virgola mancante, un accento grave in più),
la pagina lo dice con un messaggio rosso invece di restare bianca: provala sempre
tu prima di darla agli studenti. Con un nuovo `compito.js` cambia anche il codice
del compito che comunichi alla classe.

## Quale motore Python scegliere

| | `skulpt` (predefinito) | `pyodide` |
|---|---|---|
| Python | puro, simile al 3.7 | completo (3.14) |
| numpy / pandas | no | sì |
| Primo caricamento | immediato | circa 4-10 secondi (circa 20 MB, poi in cache) |
| `input()` | non supportato | non supportato (errore EOF) |
| Cicli infiniti | interrotti dopo qualche secondo | interrotti dopo 10 secondi (l'ambiente riparte da solo) |
| Pagina da `file://` | sì | no, serve un indirizzo web |

Con `pyodide` possono servire fino a un paio di minuti se la rete della scuola è lenta e
tutta la classe scarica insieme la prima volta: fai aprire la pagina a tutti prima di
iniziare. Le librerie incluse sono numpy e pandas; altre (matplotlib, scipy...) non sono
nella cartella e darebbero errore all'import.

## Svolgimento in classe

1. Lo studente apre il link, "Sono uno studente", scrive nome e cognome e il codice
   del compito (lo stesso per tutta la classe, es. `4A-15OTT`), avvia a schermo intero.
2. Svolge gli esercizi, li prova con "Esegui", poi "Consegna".
3. Viene scaricato `consegna_nome-cognome_codice.json`: lo carica nell'attività su Teams.
   Se il download non parte, c'è un riquadro di ripiego con il testo da copiare.
4. A fine compito il docente scarica da Teams i file (anche in blocco), apre
   "Sono il docente", inserisce la password e trascina tutti i file nella dashboard.
5. Per il PDF: dalla dashboard preme «Report PDF» e, nella finestra di stampa che si apre,
   sceglie «Salva come PDF» come destinazione. Ogni studente inizia su una nuova pagina.

## Se qualcosa va storto durante il compito

- **Pagina ricaricata o computer riacceso**: lo studente riapre il link e rientra con lo
  stesso nome e codice: riprende da dove era (il salvataggio automatico sta nel browser,
  la riga «salvato alle…» in alto lo conferma). Ricaricare conta come uscita dalla pagina
  e compare nel registro come «ripresa».
- **Altro computer o dati del browser cancellati**: serve un backup. Con «Salva copia» lo
  studente scarica un file; sulla schermata d'ingresso usa «Ho un file di backup» per
  ricaricarlo. Il backup è sigillato: se è stato modificato a mano viene rifiutato.
  Conviene far scaricare una copia ogni tanto (ad esempio a metà compito).
- Un backup caricato nella dashboard compare come «Backup non consegnato».

## Limiti da tenere presenti

- Sono deterrenti, non blocchi: uno studente determinato può usare un secondo
  dispositivo o aggirare i controlli del browser. Su iPad lo schermo intero spesso non
  è disponibile (il resto funziona comunque).
- Il sigillo sui file scoraggia le modifiche a mano ma non è sicurezza vera
  (il sale è nel codice della pagina). Per un controllo più forte, confronta con
  i dati su Teams (ora di caricamento, versione del file).
- L'output nel report è quello ottenuto eseguendo il codice sul computer dello studente
  al momento della consegna.
- Se lo studente cancella i dati del browser a metà compito e non ha un backup, il
  lavoro salvato localmente va perso.
- Il PDF si crea con la stampa del browser (Chrome o Edge sono i più affidabili).
