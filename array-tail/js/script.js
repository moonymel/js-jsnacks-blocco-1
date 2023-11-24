
// CHIEDO IL NUMERO DEGLI INDICI DI ARRAY

let elementi = parseInt(prompt('Inserisci il numero degli elementi'));

// CREO UN ARRAY VUOTO 

let array = [];

// CREO UN CICLO CHE FINISCE AL NUMERO INSERITO PER INDICI

for (let i=0; i<elementi; i++) {
    array.push(Math.floor(Math.random() * 100 + 1));
  
}  

// for(let i=elementi-1; i>array.length-6; i--) {
//         console.log(array[i]);
//     }

let stamp = parseInt(prompt('Quanti di questi elementi stampo in console?'));

for(let i=0; i<stamp ; i++) {
    if(stamp > elementi) {
        console.log('erroreee');
    }

    else {
        console.log(array[i])
    }
}