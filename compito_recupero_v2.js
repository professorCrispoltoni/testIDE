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

  titoloCompito: "Compito di Informatica — Liste, cicli e NumPy (versione di recupero)",

  // Password della dashboard docente (filtro soft: chi legge i file la vede)
  passwordDocente: "davinci2026",

  // Stringa a piacere: serve a riconoscere i file di consegna modificati a mano.
  saleSigillo: "dv-sigillo-2026",

  // Facoltativo: i nomi della classe (la dashboard indica chi non ha consegnato).
  elencoClasse: [],

  // Questo compito usa NumPy (esercizio 3): serve il motore "pyodide".
  // Il sito deve essere pubblicato su un indirizzo web con la cartella pyodide/.
  motore: "pyodide",
  pacchetti: ["numpy"],

  esercizi: [

    {
      titolo: "Esercizio 1 — Contare e sostituire i picchi (10 punti)",
      testoBrief: String.raw`
In una sequenza di numeri un elemento è un picco se è più grande sia del precedente sia del successivo (il primo e l'ultimo elemento non possono essere picchi).

sequenza = [1, 5, 2, 6, 3, 3, 8, 4, 7, 2, 9]

A) (3 punti) Con un ciclo for conta i picchi e stampa il numero trovato.

B) (2 punti) Stampa anche la posizione (l'indice) di ogni picco trovato.

C) (5 punti) Salva prima una copia indipendente della sequenza originale con .copy() (nella variabile originale). Poi sostituisci nella sequenza ogni picco con il maggiore tra il valore precedente e il successivo. Alla fine stampa la sequenza originale (che NON deve essere cambiata) e la sequenza modificata.

Nota: input() non è supportato in questo editor: usa i valori già scritti nel codice.
`,
      templateCodice: String.raw`
# Esercizio 1 - Picchi e copie
# Scrivi qui il tuo codice. Usa il pulsante Esegui per testarlo.

sequenza = [1, 5, 2, 6, 3, 3, 8, 4, 7, 2, 9]

# A) Conta i picchi
contaPicchi = 0


print("Picchi trovati:", contaPicchi)

# B) Posizione di ogni picco


# C) Copia dell'originale e sostituzione dei picchi
originale = None   # sostituisci None con la copia della sequenza


print("Originale:", originale)
print("Modificata:", sequenza)
`,
    },

    {
      titolo: "Esercizio 2 — Sistema lineare con NumPy (10 punti)",
      testoBrief: String.raw`
Risolvi con il metodo di Cramer il sistema lineare di due equazioni in due incognite:

3x + 2y = 13
1x - 1y = 1

Il metodo richiede tre determinanti: D (matrice dei coefficienti A), Dx (A con la prima colonna sostituita dai termini noti b) e Dy (A con la seconda colonna sostituita da b). Le soluzioni sono x = Dx / D e y = Dy / D, valide solo se D è diverso da 0.

A) (2 punti) Costruisci con NumPy la matrice dei coefficienti A (2x2) e il vettore dei termini noti b.

B) (3 punti) Calcola D con np.linalg.det(A) e stampalo. Prosegui con i calcoli solo se D è diverso da 0 (usa un if).

C) (3 punti) Costruisci le matrici per Dx e Dy partendo da una copia di A (.copy()) in cui sostituisci la colonna giusta con b, in modo che A resti intatta. Calcola Dx e Dy con np.linalg.det, poi x e y, e stampali arrotondati a 2 decimali con round().

D) (2 punti) Verifica il risultato risolvendo lo stesso sistema con np.linalg.solve(A, b) e stampa la soluzione.
`,
      templateCodice: String.raw`
# Esercizio 2 - Sistema lineare con NumPy
import numpy as np

# 3x + 2y = 13
# 1x - 1y = 1

# A) Matrice dei coefficienti e vettore dei termini noti
A = None   # sostituisci None con la matrice NumPy 2x2
b = None   # sostituisci None con il vettore dei termini noti


# B) Determinante D (e controllo D != 0)


# C) Dx e Dy partendo da una copia di A, poi x e y


# D) Verifica con np.linalg.solve
`,
    },

    {
      titolo: "Esercizio 3 — Combinazioni con due cicli annidati (10 punti)",
      testoBrief: String.raw`
In un incrocio genetico il padre e la madre sono entrambi eterozigoti e producono ciascuno due tipi di gameti. A è l'allele dominante, a quello recessivo. Le due liste dei gameti sono:

gameti_padre = ['A', 'a']
gameti_madre = ['A', 'a']

A) (4 punti) Con due cicli for annidati (uno su gameti_padre, uno su gameti_madre) genera tutte le combinazioni possibili unendo i due caratteri (per esempio 'Aa'). Salvale con append in una lista combinazioni e stampala.

B) (3 punti) Con un ciclo for e dei contatori conta quanti individui sono AA, quanti eterozigoti (Aa oppure aA) e quanti aa. Stampa i tre conteggi.

C) (3 punti) Un individuo ha fenotipo dominante se contiene almeno una A. Conta quanti individui hanno fenotipo dominante e quanti recessivo, e stampa la percentuale di individui dominanti sul totale delle combinazioni.
`,
      templateCodice: String.raw`
# Esercizio 3 - Combinazioni con due cicli annidati

gameti_padre = ['A', 'a']
gameti_madre = ['A', 'a']

# A) Tutte le combinazioni con due for annidati
combinazioni = []


print("Combinazioni:", combinazioni)

# B) Conteggio dei genotipi
num_AA = 0
num_Aa = 0
num_aa = 0


print("AA:", num_AA)
print("Aa:", num_Aa)
print("aa:", num_aa)

# C) Fenotipi e percentuale di dominanti
dominanti = 0
recessivi = 0


print("Dominanti:", dominanti)
print("Recessivi:", recessivi)
`,
    },

  ],
};
