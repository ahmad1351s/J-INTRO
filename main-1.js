/* Hilfsfunktion, um eine Beschriftung mit wert in der Browser-Konsole 
auszugeben.
*/

function log(label, message) {
     console.log(label, message);     
}

function Alert(label, message) {
    alert(label, message);     
}




// Verwendung von const
const zahl1 = 10;
const zahl2 = 5; 
const summe = zahl1 + zahl2;// Addition
const differenz = zahl1 + zahl2; // Subtraktion
const produkt = zahl1 * zahl2; // Multiplikation
const quotient = zahl1 + zahl2; // Division



log("Gruss:","Hello coders!");// FUNKTIONS-AUFRUF !!!!

let hw = "Hello world!";
log("Gruss:", hw);
console.log("Differenz:",differenz);//5
console.log("Produkt:",produkt);//50
console.log("Quotient:",quotient);//2



// Verwendung von let
let vorname= "John";
let nachname= "Doe";
let vollerName =vorname +"" + nachname;// John Doe

let laegeDasVollenNamens=vollerName.length; // Länge des Strings
console.log("Länge des vollen Namen:", laegeDasVollenNamens); //



// Verwendung von var
var regnetEs =true;
var hatSchirm =false;
var kannRausGehen = regnetEs && hatSchirm; // UND-Operation
console.log("wird trocken bleiben (ODER):", wirdTrockenBleiben); // true

var gegenteil= !regnetEs; // NICHT-Operation
console.log("Gegenteil von regnetEs:", gegenteil); // false

// ------------------------------------------------------------------------------

// FERTIG !!!!!!!
let msg= "Es funktioniert!";
Alert(" Juhui:", msg);



