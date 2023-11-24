
// CHIEDO IL NUMERO DEGLI INDICI DI ARRAY

let elementi = parseInt(prompt('Inserisci il numero degli elementi'));

// CREO UN ARRAY VUOTO 

let array = [];

// CREO UN CICLO CHE FINISCE AL NUMERO INSERITO PER INDICI

for (let i=0; i<elementi; i++) {
    array.push(Math.floor(Math.random() * 100 + 1));
    console.log(array[i]);
     
}