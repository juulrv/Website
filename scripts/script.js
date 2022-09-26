// JavaScript Document
console.log("hi");
/****************************************/
/* menu openen en sluiten met de button */
/****************************************/
var navButton = document.querySelector("nav button");

navButton.addEventListener("click", toggleMenu);

function toggleMenu(){
var deNav = document.querySelector("nav");
deNav.classList.toggle("toonMenu");
}

// Aftelklok volgende wedstrijd
console.log("hooooi")
var aftelSecondenOpScherm = document.querySelector("section:nth-of-type(5) section p:nth-of-type(4)")
var aftelMinutenOpScherm = document.querySelector("section:nth-of-type(5) section p:nth-of-type(3)")
var aftelUrenOpScherm = document.querySelector("section:nth-of-type(5) section p:nth-of-type(2)")
var aftelDagenOpScherm = document.querySelector("section:nth-of-type(5) section p:nth-of-type(1)")


var aftelSeconden = 59
var aftelMinuten = 32
var aftelUren = 3
var aftelDagen = 5

aftelDagenOpScherm.textContent = 5
aftelUrenOpScherm.textContent = 3
aftelMinutenOpScherm.textContent = 32
aftelSecondenOpScherm.textContent = 59

aftelDagenOpScherm.addEventListener("click", minSeconde)

function minSeconde(){
    aftelSeconden = aftelSeconden - 1
    aftelSecondenOpScherm.textContent= aftelSeconden
    if(aftelSeconden == -1){
        aftelMinuten = aftelMinuten - 1
        aftelMinutenOpScherm.textContent = aftelMinuten
        aftelSeconden = 59
        aftelSecondenOpScherm.textContent= aftelSeconden
    }
    if(aftelMinuten == -1){
        aftelUren = aftelUren - 1
        aftelUrenOpScherm.textContent = aftelUren
        aftelMinuten = 59
        aftelMintuen.textContent = aftelMinuten
    }
    if(aftelUren == -1){
    aftelDagen = aftelDagen - 1
    aftelDagenOpScherm.textContent= aftelDagen
    aftelUren = 23
    aftelUren.textContent = aftelUren
}

}
setInterval(minSeconde, 1000);