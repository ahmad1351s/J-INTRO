let day = "MonTag";
day = day. toLowerCase();
function whatDay(paramDay) {
switch (paramDay) {

    case "Montag":
        console.log("Heute ist Montag, wir üben Switch-Statements");
        break;
        case "Dinstag":
            console.log("Heute ist Dienstag, Selbststudium");
            break;
            case"Mittwoch":
            console.log("Heute ist Mittwoche,starten wir ein neues Projekt");
            break;
        case "Donnerstag":
            console.log("Heute ist Donnerstag,wir pushen sicher auf GitHub");
            break;
        case "freitag":
    console.log("Heute ist Freitag, wir haben nicht frei, aber fast");
            break;
    default:
    console.log("Heute ist Wochenende, Zeit zum Entspannen");
             break;
}}

     

const name = "Antonio";
const lang = "en"
let begrüssung = "Hallo,mein Name ist";
let begrüssungDefault = "Heute Wer bist du?";

if (lang === "en") {
    begrüssung = "Hello, my name is";
    begrüssungDefault = "Hello,who are you?";
}
    else if (lang=== "es") {
    begrüssung = "Hola, ¿quien eres?";
    }
    

switch (name) {
    case "Antonio":
        console.log(begrüssung +"Antonio");
        break;
    case "Ahmad":
        console.log(begrüssung, "Ahmad");
        break
    case "Philipp":
        console.log(begrüssung, "Philippp" );
    break;
  case "Daniel":
    console.log(begrüssung + "Daniel");
    break;
  case "Harry":
    console.log(begrüssung + "Harry");
    break;
  default:
    console.log(begrüssungDefault);
    break;
}
        

