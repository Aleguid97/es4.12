/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function  area(l1, l2) {
    let result = l1 * l2;
    return result;
  }
  
  console.log(area(5, 10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
    if (a === b) {
      return (a + b) * 3;
    } else {
      return a + b;
    }
  }

  console.log(crazySum(4, 2)); 
console.log(crazySum(6, 6));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a) {
    if (a > 19) {
      return (a-19)*3;
    } else {
      return 19 - a
    }
  }

  console.log(crazyDiff(a=67)); 
console.log(crazyDiff(a=3));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    return (20 <= n && n <= 100) || n === 400;
  }

console.log(boundary(13)); 
console.log(boundary(54)); 
console.log(boundary(100)); 
console.log(boundary(400)); 
console.log(boundary(401));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {
    const firstSixCharacters = string.slice(0, 6);
    return firstSixCharacters === "EPICODE" ? "Epicode" : "EPICODE" + string;
  }

console.log(epify("Ciao mondo!")); 
console.log(epify("EPICODECiao mondo!"));


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(number) {
    return number % 3 === 0 || number % 7 === 0;
  }
  console.log(check3and7(3)); 
  console.log(check3and7(7)); 
  console.log(check3and7(10)); 
  console.log(check3and7(21));
    

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string) {
    return string.split("").reverse().join("");
  }
  console.log(reverseString("EPICODE"));
  

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
    const words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }

  console.log(upperFirst("javascript linguaggio del demonio"));



  

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string) {
    return string.slice(1, string.length - 1);
  }
  console.log(cutString("AAmedeo Infamee"));
    

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    const numbers = [];
    for (let i = 0; i < n; i++) {
      numbers.push(Math.floor(Math.random() * 11));
    }
    return numbers;
  }

  console.log(giveMeRandom(7));


