/* ============================================================
   COMPITO — è l'UNICO file da modificare per preparare un compito.
   index.html non va toccato.

   Come si compila:
   - I testi lunghi vanno scritti tra  String.raw`  e  `  (accento grave,
     tasto ALT+96 su Windows) e possono occupare più righe: vai a capo
     normalmente. Il codice Python si scrive così com'è, anche con \n dentro
     le stringhe, senza raddoppiare i backslash.
   - Dentro quei testi NON usare l'accento grave ( ` ) e la sequenza ${ .
   - Per aggiungere un esercizio copia un blocco { ... }, compreso la virgola
     finale, e incollalo di seguito. Ogni esercizio è una scheda per lo studente.
   - Dopo averlo salvato, ricarica il file sul sito: gli studenti lo vedono
     alla prossima apertura della pagina.
   ============================================================ */
window.COMPITO = {

  titoloCompito: "Compito di Informatica — Liste, tuple e funzioni",

  // Password della dashboard docente (filtro soft: chi legge i file la vede)
  passwordDocente: "davinci2026",

  // Stringa a piacere: serve a riconoscere i file di consegna modificati a mano.
  saleSigillo: "dv-sigillo-2026",

  // Facoltativo: i nomi della classe. Se compilato, la dashboard indica chi non
  // ha ancora consegnato (nome e cognome in qualsiasi ordine). Esempio:
  //   elencoClasse: ["Mario Rossi", "Anna Bianchi", "Luca Verdi"],
  elencoClasse: [],

  // Motore Python:
  //   "skulpt"  = Python puro, leggero e veloce (niente numpy, niente input()).
  //   "pyodide" = Python completo con numpy e pandas (la prima apertura scarica circa
  //               20 MB, poi resta in cache; richiede la cartella pyodide/ e la pagina
  //               pubblicata su un indirizzo web).
  motore: "skulpt",

  // Solo con motore "pyodide": librerie da caricare subito all'avvio, per esempio
  // ["numpy"] oppure ["numpy", "pandas"]. Le altre disponibili si caricano da sole
  // al primo "import".
  pacchetti: [],

  esercizi: [

    {
      titolo: "Esercizio 1 — Liste e funzioni",
      testoBrief: String.raw`
Scrivi un programma Python che gestisce i voti di una classe.

1) Crea una lista voti con almeno 5 numeri interi tra 4 e 10.

2) Scrivi una funzione media(lista) che restituisce la media dei voti (usa una funzione, con dichiarazione e invocazione separate).

3) Scrivi una funzione voto_piu_alto(lista) che restituisce il voto massimo.

4) Stampa la media della classe e il voto più alto.

Nota: input() non è supportato in questo editor: usa valori già scritti nel codice.
`,
      templateCodice: String.raw`
# Esercizio 1 - Liste e funzioni
# Scrivi qui il tuo codice. Usa il pulsante Esegui per testarlo.

voti = [6, 7, 8, 9, 5]

def media(lista):
    # TODO: calcola e restituisci la media
    pass

def voto_piu_alto(lista):
    # TODO: restituisci il voto massimo
    pass

print("Media:", media(voti))
print("Voto piu' alto:", voto_piu_alto(voti))
`,
    },

    {
      titolo: "Esercizio 2 — Tuple",
      testoBrief: String.raw`
Rappresenta ogni studente come una tupla (nome, voto).

1) Crea una lista di tuple con almeno 3 studenti.

2) Stampa ogni studente con un ciclo for (nome, voto in studenti).

3) Scrivi una funzione nome_voto_piu_alto(lista) che restituisce il nome dello studente con il voto più alto.
`,
      templateCodice: String.raw`
# Esercizio 2 - Tuple

studenti = [("Anna", 8), ("Luca", 6), ("Sara", 9)]

for nome, voto in studenti:
    print(nome, voto)

def nome_voto_piu_alto(lista):
    # TODO: restituisci il nome dello studente con il voto piu' alto
    pass

print("Migliore:", nome_voto_piu_alto(studenti))
`,
    },

    {
      titolo: "Esercizio 3 — Funzioni",
      testoBrief: String.raw`
Scrivi una funzione conta_promossi(lista, soglia) che restituisce quanti voti in lista sono maggiori o uguali a soglia.

Richiamala sulla lista voti dell'Esercizio 1 con soglia 6 e stampa il risultato.
`,
      templateCodice: String.raw`
# Esercizio 3 - Funzioni

voti = [6, 7, 8, 9, 5]

def conta_promossi(lista, soglia):
    # TODO
    pass

print("Promossi:", conta_promossi(voti, 6))
`,
    },

  ],
};
