function morningRoutine() {
    console.log("Weke up");
    console.log("Have breakfast");
    console.log("Brusch teeth");
} 

/* function randomNumber() {
    console.log(Math.floor(Math.random() * 100) + 1);
} */

function forestQuote(){
    console.log("Life is like a box of chocolates");
}


function collectCoins(coinAmount) {
    
    console.log("Mario collected " + coinAmount + " coins!");
}

function birthDay(name) {
    console.log("Happy birthday " + name);
  }
  
  function fairWell(name) {
    console.log("Live long and prosper " + name);
  }

  function order(drink, food) {
    console.log("I want to drink a " + drink);
    console.log("I want to eat a " + food);
  }
  function order(drink, food) {
    console.log("I want to drink a " + drink);
    console.log("I want to eat a " + food);
  }

  function nameAndAge(name, age) {
    console.log(name + " is " + age + " years old.");
  }

  function printCharInfo(name, role) {
    console.log(name + " is " + role + " in The Lion King.");
  }

  function order1(drink, food) {
    console.log("Guten Tag " + "ich möchte gerne " + drink + " trinken");
  }

  

  
  
  
  



function randomNumber() {
    printInParagraph("Zufallszahl: ", Math.floor(Math.random() * 100) + 1);
    

}

// ------------------------------------------------------------------------------------------

function log(label, message) {
    console.log(label, message);     
}

function Alert(label, message) {
   alert(label, message);     
}
//'document' ist das zentrale Daten- und funktionsobjekt des DOM.
// getElementById: https://www.w3schools.com/jsref/met document getellementbyid.asp
function printInParagraph(label, message) {
    let element = document.getElementById("print-paragraph");
    element.innerText = label + message;   
}
    
    function printInParagraph2(label, message) {
        let element = document.getElementById("print2");
        element.innerText = label + message;   
    }




