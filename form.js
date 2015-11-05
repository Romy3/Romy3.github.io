/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var project = document.querySelector("#project"); /*Variabelen worden aangemaakt + de juist ID wordt bij de juiste variabele geselecteerd*/
var chooseProject = document.querySelector("#chooseProject");
var stage = document.querySelector("#stage");
var chooseStage = document.querySelector("#chooseStage");

function showOne() {
    stage.classList.add("hideFieldset"); /*zorgt ervoor dat wanneer JS niet werkt de velden toch worden getoond*/
    project.classList.add("hideFieldset");

    chooseProject.addEventListener("click", function() {
        showProject(); /*luistert of er op #chooseProject wordt geklikt en voert de functie showProject uit*/
    });

    chooseStage.addEventListener("click", function() {
        showStage(); /*luistert of er op #chooseStage wordt geklikt en voert de functie showStage uit*/
    });
}

function showStage() {
    stage.classList.remove("hideFieldset");
    project.classList.add("hideFieldset");
}

function showProject() {
    project.classList.remove("hideFieldset");
    stage.classList.add("hideFieldset");
}

showOne();



