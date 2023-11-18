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

// caloclo il totale senza "sconto"
var tot = ((nKilo * 0.21).toFixed(2));

if (nEta < 18) {

    // Calcolo il 20% del totale
    let totS= (( tot * 20) / 100).toFixed(2);

    // Sottraggo il 20 % dal totale
    tot = tot - totS;

    console.log(tot);

}

else if (nEta > 65) {

    // Calcolo il 40% del totale
    let totS= (( tot * 40) / 100).toFixed(2);

    // Sottraggo il 20 % dal totale
    tot = tot - totS;

    console.log(tot);

}

// comunico il risultato alla mia pagina html
document.getElementById("risultato").innerHTML = "Il biglietto costerà: " + tot +"€";
