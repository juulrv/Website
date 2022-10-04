// JavaScript Document
console.log("hi");
/****************************************/
/* menu openen en sluiten met de button */
/****************************************/
var navButton = document.querySelector("header section:nth-of-type(2) nav button");

navButton.addEventListener("click", toggleMenu);

function toggleMenu(){
var deNav = document.querySelector("nav");
deNav.classList.toggle("toonMenu");
}


// Submenu uitschuiven wanneer er op de bijbehordende button wordt geklikt
// Submenu bij button vereniging
var eersteButton = document.querySelector("header section:nth-of-type(2) nav ul li:nth-of-type(2) button");
var eersteSubmenu = document.querySelector("header section:nth-of-type(2) nav ul li:nth-of-type(2) ul");

eersteButton.addEventListener("click", eersteToggleMenu);

function eersteToggleMenu() {
	eersteSubmenu.classList.toggle("subMenu");
    console.log("ik leef nog");
}


// Submenu bij button senioren
var tweedeButton = document.querySelector("header section:nth-of-type(2) nav ul li:nth-of-type(3) button");
var tweedeSubmenu = document.querySelector("header section:nth-of-type(2) nav ul li:nth-of-type(3) ul");

tweedeButton.addEventListener("click", tweedeToggleMenu);

function tweedeToggleMenu() {
	tweedeSubmenu.classList.toggle("subMenu");
}


// Submenu bij button jeugd
var derdeButton = document.querySelector("header section:nth-of-type(2) nav ul li:nth-of-type(4) button");
var derdeSubmenu = document.querySelector("header section:nth-of-type(2) nav ul li:nth-of-type(4) ul");

derdeButton.addEventListener("click", derdeToggleMenu);

function derdeToggleMenu() {
	derdeSubmenu.classList.toggle("subMenu");
}


// Submenu bij button sponsering
var vierdeButton = document.querySelector("header section:nth-of-type(2) nav ul li:nth-of-type(7) button");
var vierdeSubmenu = document.querySelector("header section:nth-of-type(2) nav ul li:nth-of-type(7) ul");

vierdeButton.addEventListener("click", vierdeToggleMenu);

function vierdeToggleMenu() {
	vierdeSubmenu.classList.toggle("subMenu");
}

// Submenu bij button beachveld
var vijfdeButton = document.querySelector("header section:nth-of-type(2) nav ul li:nth-of-type(8) button");
var vijfdeSubmenu = document.querySelector("header section:nth-of-type(2) nav ul li:nth-of-type(8) ul");

vijfdeButton.addEventListener("click", vijfdeToggleMenu);

function vijfdeToggleMenu() {
	vijfdeSubmenu.classList.toggle("subMenu");
}

// Aftelklok volgende wedstrijd
var aftelSecondenOpScherm = document.querySelector("#aftelSecondenP")
var aftelMinutenOpScherm = document.querySelector("#aftelMinutenP")
var aftelUrenOpScherm = document.querySelector("#aftelUrenP")
var aftelDagenOpScherm = document.querySelector("#aftelDagenP")


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

// Aftelklok volgende wedstrijd
var aftelSecondenOpScherm = document.querySelector("section:nth-of-type(9) section p:nth-of-type(4)")
var aftelMinutenOpScherm = document.querySelector("section:nth-of-type(9) section p:nth-of-type(3)")
var aftelUrenOpScherm = document.querySelector("section:nth-of-type(9) section p:nth-of-type(2)")
var aftelDagenOpScherm = document.querySelector("section:nth-of-type(9) section p:nth-of-type(1)")


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

var eersteButton = document.querySelector("header section:nth-of-type(2) nav ul li:nth-of-type(2) button");
var eersteSubmenu = document.querySelector("header section:nth-of-type(2) nav ul li:nth-of-type(2) ul");

eersteButton.addEventListener("click", toggleEersteMenu);

function toggleEersteMenu() {
	eersteSubmenu.classList.toggle("subMenu");
}

