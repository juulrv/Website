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
