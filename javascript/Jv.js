/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

    * il prezzo del biglietto è definito in base ai km (0.21 € al km)
    *va applicato uno sconto del 20% per i minorenni
    *va applicato uno sconto del 40% per gli over 65.

    L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/



// Svolgimento

// chiedo numero chilometri

const nKilo = parseInt (prompt("Inserisci il numero dei chilometri"));

console.log(nKilo);

// chiedo l'età del passeggero

const nEta = parseInt (prompt("Inserisci l'età"));

console.log(nEta);

if (nEta < 18) {

    let  tot = (((nKilo * 0.21).toFixed(2)) * 20) / 100;

    console.log(tot);
    // comunico il risultato alla mia pagina html
    document.getElementById("risultato").innerHTML = "Il biglietto costerà: " + tot +"€";
}

else if (nEta > 65) {

    let  tot = (((nKilo * 0.21).toFixed(2)) * 40) / 100;

    console.log(tot);
    // comunico il risultato alla mia pagina html
    document.getElementById("risultato").innerHTML = "Il biglietto costerà: " + tot +"€";
}

else {

    let tot = (nKilo * 0.21).toFixed(2);
    
    console.log(tot);
    // comunico il risultato alla mia pagina html
    document.getElementById("risultato").innerHTML = "Il biglietto costerà: " + tot +"€";
}

