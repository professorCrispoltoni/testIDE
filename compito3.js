/* ============================================================
   COMPITO — è l'UNICO file da modificare per preparare un compito.
   index.html non va toccato.

   Come si compila:
   - I testi lunghi vanno scritti tra  String.raw`  e  `.
   - Dentro quei testi NON usare l'accento grave ( ` ) e la sequenza ${ .
   - Per aggiungere un esercizio copia un blocco { ... }, compreso la virgola
     finale, e incollalo di seguito.
   ============================================================ */
window.COMPITO = {

  titoloCompito: "Compito di Informatica — Liste, cicli for e NumPy",

  // Password della dashboard docente
  passwordDocente: "davinci2026",

  // Stringa per riconoscere i file di consegna modificati a mano.
  saleSigillo: "dv-sigillo-2026",

  // Facoltativo: i nomi della classe.
  elencoClasse: [],

  // Pyodide è necessario per utilizzare NumPy.
  motore: "pyodide",

  // NumPy viene caricato subito all'avvio.
  pacchetti: ["numpy"],

  esercizi: [

    {
      titolo: "Esercizio 1 — Media di una sequenza",
      testoBrief: String.raw`
Data la seguente sequenza di numeri:

numeri = [12, 7, 15, 9, 18, 11, 6, 14]

1) Stampa tutti i numeri della sequenza usando un ciclo for.

2) Calcola la somma dei numeri usando un ciclo for. Non usare la funzione sum().

3) Calcola la media dei numeri usando la somma calcolata al punto precedente e len(numeri). Stampa la media.

4) Calcola nuovamente la media usando NumPy, trasformando la lista in un array con np.array() e utilizzando np.mean().

5) Stampa entrambe le medie e verifica che siano uguali.

Vincoli:
- Per il primo calcolo della media devi usare un ciclo for.
- Non usare sum() per il primo calcolo.
- Per il secondo calcolo devi usare NumPy.
`,
      templateCodice: String.raw`
# Esercizio 1 - Media di una sequenza

import numpy as np

numeri = [12, 7, 15, 9, 18, 11, 6, 14]

# 1) Stampa tutti i numeri usando un ciclo for


# 2) Calcola la somma con un ciclo for
somma = 0


# 3) Calcola la media senza usare NumPy
media = 0


# 4) Calcola la media usando NumPy
array_numeri = np.array(numeri)
media_numpy = 0


print("Media senza NumPy:", media)
print("Media con NumPy:", media_numpy)


# 5) Verifica che le due medie siano uguali
`,
    },

    {
      titolo: "Esercizio 2 — Contare i picchi",
      testoBrief: String.raw`
Data la seguente sequenza di numeri:

numeri = [2, 5, 3, 4, 8, 6, 7, 1, 5, 3, 9, 4]

Un numero è definito "picco" se è preceduto e seguito da un numero più piccolo.

Per esempio, nella sequenza:

[2, 5, 3]

il numero 5 è un picco perché:
- il numero precedente è 2, che è più piccolo di 5;
- il numero successivo è 3, che è più piccolo di 5.

1) Scorri la sequenza con un ciclo for.

2) Per controllare il numero precedente e quello successivo, usa gli indici della lista.

3) Non considerare il primo e l'ultimo elemento della lista, perché non hanno entrambi i vicini.

4) Conta quanti picchi sono presenti nella sequenza.

5) Stampa il numero totale di picchi.

6) Stampa anche il valore di ogni picco trovato.

Suggerimento:
puoi usare range(1, len(numeri) - 1) per visitare tutti gli elementi tranne il primo e l'ultimo.

Per verificare se il numero nella posizione i è un picco, devi controllare che:

numeri[i] > numeri[i - 1]

e

numeri[i] > numeri[i + 1]
`,
      templateCodice: String.raw`
# Esercizio 2 - Contare i picchi

numeri = [2, 5, 3, 4, 8, 6, 7, 1, 5, 3, 9, 4]

# Numero di picchi trovati
picchi = 0

# 1) Scorri la lista senza considerare
#    il primo e l'ultimo elemento


# 2) Controlla se ogni elemento è un picco
#    e stampa il valore quando lo trovi


# 3) Stampa il numero totale di picchi
print("Numero di picchi:", picchi)
`,
    },

    {
      titolo: "Esercizio 3 — Sistema lineare con il metodo di Cramer",
      testoBrief: String.raw`
Considera il seguente sistema lineare di due equazioni in due incognite:

2x + y = 7
x - y = 1

Devi risolvere il sistema utilizzando il metodo di Cramer e NumPy.

Il metodo di Cramer per un sistema:

a1*x + b1*y = c1
a2*x + b2*y = c2

prevede di calcolare prima il determinante principale:

D = a1*b2 - a2*b1

Poi si calcolano:

Dx = c1*b2 - c2*b1

Dy = a1*c2 - a2*c1

Se D è diverso da zero:

x = Dx / D
y = Dy / D

Svolgi i seguenti punti:

1) Crea con NumPy la matrice dei coefficienti:

A = [[2, 1],
     [1, -1]]

e il vettore dei termini noti:

b = [7, 1]

2) Calcola il determinante D usando np.linalg.det(A).

3) Calcola Dx e Dy applicando direttamente le formule del metodo di Cramer.

4) Se il determinante D è diverso da zero, calcola x e y.

5) Stampa le soluzioni del sistema.

6) Verifica la soluzione sostituendo x e y nelle due equazioni iniziali.

Nota:
in questo esercizio devi usare NumPy per il calcolo del determinante.
Non usare np.linalg.solve(): il sistema deve essere risolto con il metodo di Cramer.
`,
      templateCodice: String.raw`
# Esercizio 3 - Sistema lineare con il metodo di Cramer

import numpy as np

# Sistema:
# 2x + y = 7
# x - y = 1

# Matrice dei coefficienti
A = np.array([
    [2, 1],
    [1, -1]
])

# Termini noti
b = np.array([7, 1])

# 1) Calcola il determinante principale D
D = 0


# 2) Calcola Dx e Dy con il metodo di Cramer
Dx = 0
Dy = 0


# 3) Se D è diverso da zero, calcola x e y
if D != 0:
    x = 0
    y = 0

    print("x =", x)
    print("y =", y)


# 4) Verifica la soluzione nelle due equazioni
`,
    },

  ],
};
