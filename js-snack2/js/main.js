const word1 = prompt("Inserisci una parola");
const word2 = prompt("Inserisci una parola");

if (word1.length > word2.length) {
  console.log("La parola 1 è piu lunga");
} else if (word1.length < word2.length) {
  console.log("La parola 2 è più lunga");
} else if ((word1.length = word2.length)) {
  console.log("Le parole hanno uguale lunghezza");
}
