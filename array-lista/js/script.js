
// CREO ARRAY DEL FRIGO

let frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

// AGGIUNGO LA PESCA

frigo.push('pesca');

let flag = false;

// CREO CICLO PER INDICI DI FRIGO

for (let i=0; i<frigo.length; i++) {
    
    // SETTO FLAG
    
    if(frigo[i] == 'cocomero') {
        flag = true;
    }
}

// STAMPO I RISULTATI DI FLAG

if(flag == true) {
    console.log("Trovato! Devo solo preparare il cocktail.");
}

else {
    console.log("Oh no, devo uscire a comprare il cocomero!");
}