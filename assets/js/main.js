// Chiedere all'utente il suo nome
let userName = prompt('Inserisci il tuo nome');

// Stampo in console risposta dell'utente
console.log(userName);

// Chiedere all'utente il suo cognome
const userSurname = prompt('Inserisci il tuo cognome');

// Stampo in console risposta dell'utente
console.log(userSurname);

// Chiedere all'utente il suo colore preferito
const color = prompt('Inserisci il tuo colore preferito');

// Stampo in console risposta dell'utente
console.log(color);

// Inserisco nell'HTML il risultato totale
const userComplete = document.getElementById('user');

userComplete.innerHTML = `${userName}${userSurname}${color}${23}`;