//questa funzione permette uno scroll automatico tramite il click
//dell'anchor nel nav e del button nell'hero

function scrollToId() {
    let section = document.getElementById("game-section");
    section.scrollIntoView({ behavior: 'smooth' });
}

let scrollLink = document.querySelector("#scroll-link");
scrollLink.addEventListener("click", scrollToId);

let scrollButton = document.querySelector("#scroll-button");
scrollButton.addEventListener("click", scrollToId);



//game code - start of section
let startBtn = document.querySelector("#start-button");
let stopBtn = document.querySelector("#stop-button");

function getRandomInt(min = 2000, max = 3000) {
    let number = Math.random();
    number = number * (max - min) + min;
    return Math.floor(number);
}

let redDelay = getRandomInt(1000, 3000);
let greenDelay = getRandomInt(2000, 3000);

function changeLights(lightIds, color) {
    lightIds.forEach(id => {
        let light = document.getElementById(id);
        if (light) {
            light.classList.remove("gray");
            light.classList.add(color);
        }
    });
}

function startGame() {
    let redLights1 = ["l1", "l2", "l3", "l4", "l5"];
    let redLights2 = ["l6", "l7", "l8", "l9", "l10"];
    let redLights3 = ["l11", "l12", "l13", "l14", "l15"];
    let greenLights = ["l16", "l17", "l18", "l19", "l20"];

    setTimeout(() => {
        changeLights(redLights1, "red");
    }, redDelay);

    setTimeout(() => {
        changeLights(redLights2, "red");
    }, redDelay * 2);

    setTimeout(() => {
        changeLights(redLights3, "red");
    }, redDelay * 3);

    setTimeout(() => {
        changeLights(greenLights, "green");
    }, greenDelay * 4);
}

startBtn.addEventListener("click", startGame);