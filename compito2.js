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

  titoloCompito: "Compito di Informatica — Liste e tuple",

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
      titolo: "Esercizio 1 — Liste",
      testoBrief: String.raw`
Un'insegnante registra i voti di un test in una lista:

voti = [6, 7, 5, 9, 8, 4, 10]

1) Stampa ogni voto della lista usando un ciclo for.

2) Calcola la somma dei voti con un ciclo for (usa una variabile somma che parte da 0). Poi calcola la media dividendo la somma per il numero di voti (usa len(voti)) e stampala.

3) Trova il voto più alto con un ciclo for e un if (parti da massimo = voti[0]) e stampalo.

4) Conta quanti voti sono sufficienti (maggiori o uguali a 6) e stampa il numero.

Nota: input() non è supportato in questo editor: usa i valori già scritti nel codice.
`,
      templateCodice: String.raw`
# Esercizio 1 - Liste
# Scrivi qui il tuo codice. Usa il pulsante Esegui per testarlo.

voti = [6, 7, 5, 9, 8, 4, 10]

# 1) Stampa ogni voto con un ciclo for


# 2) Somma dei voti con un ciclo for, poi media
somma = 0


# 3) Voto più alto con un ciclo for e un if
massimo = voti[0]


# 4) Quanti voti sono sufficienti (>= 6)
sufficienti = 0


print("Somma:", somma)
print("Media:", somma / len(voti))
print("Voto più alto:", massimo)
print("Sufficienti:", sufficienti)
`,
    },

    {
      titolo: "Esercizio 2 — Tuple",
      testoBrief: String.raw`
Ogni studente è rappresentato da una tupla (nome, voto). Gli studenti sono in una lista:

studenti = [("Anna", 8), ("Luca", 6), ("Sara", 9), ("Marco", 5)]

1) Stampa ogni studente nel formato "Anna: 8", usando un ciclo for che separa subito nome e voto (for nome, voto in studenti).

2) Trova lo studente con il voto più alto e stampa il suo nome.

3) Stampa i nomi degli studenti con voto insufficiente (minore di 6).
`,
      templateCodice: String.raw`
# Esercizio 2 - Tuple

studenti = [("Anna", 8), ("Luca", 6), ("Sara", 9), ("Marco", 5)]

# 1) Stampa "nome: voto" per ogni studente
for nome, voto in studenti:
    pass


# 2) Nome dello studente con il voto più alto
migliore_nome = studenti[0][0]
migliore_voto = studenti[0][1]


print("Il migliore è:", migliore_nome)


# 3) Nomi degli studenti insufficienti (voto < 6)
`,
    },

    {
      titolo: "Esercizio 3 — Liste e tuple insieme",
      testoBrief: String.raw`
Riparti dalla lista studenti dell'Esercizio 2.

1) Aggiungi alla lista due nuovi studenti, ("Giulia", 7) e ("Paolo", 10), usando append.

2) Stampa quanti studenti ci sono ora (usa len).

3) Calcola la media dei voti di tutti gli studenti con un ciclo for e stampala.

4) Stampa il nome degli studenti con voto superiore alla media.
`,
      templateCodice: String.raw`
# Esercizio 3 - Liste e tuple insieme

studenti = [("Anna", 8), ("Luca", 6), ("Sara", 9), ("Marco", 5)]

# 1) Aggiungi i due nuovi studenti con append


# 2) Quanti studenti ci sono ora?


# 3) Media dei voti con un ciclo for
somma = 0


# 4) Nomi degli studenti con voto superiore alla media
`,
    },

  ],
};
