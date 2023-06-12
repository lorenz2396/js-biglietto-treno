// Chiedi all'utente il numero di chilometri da percorrere
let km = prompt("Inserisci il numero di chilometri da percorrere:");

// Chiedi all'utente l'età del passeggero
let age = prompt("Inserisci l'età del passeggero:");

let pricexKm = 0.21;
let totalPrice = km * pricexKm;


if (age < 18) {
  // Sconto del 20% per i minorenni
  totalPrice = totalPrice * 0.8;
} else if (age > 65) {
  // Sconto del 40% per gli over 65
  totalPrice = totalPrice * 0.6;
}

// Prezzo totale
console.log("Il prezzo del biglietto è: " + totalPrice.toFixed(2) + "€");


const ticketPrice = document.getElementById('ticketPrice-container')

console.log('ticketPrice-container', ticketPrice)

const previousText = ticketPrice.innerHTML;

console.log('previousText', previousText);


// Biglietto Finale
ticketPrice.innerHTML = previousText + totalPrice.toFixed(2) + '€';







