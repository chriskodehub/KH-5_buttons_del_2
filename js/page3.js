// page3.html

const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const alfa = document.querySelector("#alfa");

const redCol = document.querySelector("#red-bg-set");
const greenCol = document.querySelector("#green-bg-set");
const blueCol = document.querySelector("#blue-bg-set");
const alfaCol = document.querySelector("#alfa-bg-set");

const redLabel = document.querySelector(`label[for='red']`);
const greenLabel = document.querySelector(`label[for='green']`);
const blueLabel = document.querySelector(`label[for='blue']`);
const alfaLabel = document.querySelector(`label[for='alfa']`);

const finalCol = document.querySelector("#final-color");

redLabel.innerHTML = red.value;
greenLabel.innerHTML = green.value;
blueLabel.innerHTML = blue.value;
alfaLabel.innerHTML = alfa.value;

showSingleColor();
showFinalColor();

function showSingleColor() {
    redCol.style.backgroundColor = `rgba(${red.value},0,0,1)`;
    greenCol.style.backgroundColor = `rgba(0,${green.value},0,1)`;
    blueCol.style.backgroundColor = `rgba(0,0,${blue.value},1)`;
    alfaCol.style.backgroundImage = `linear-gradient(90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%)`;
}

function showFinalColor() {
    finalCol.style.backgroundColor = `rgba(${red.value},${green.value},${blue.value},${alfa.value}`;
}

function showAlfaColor() {}

red.addEventListener(
    "input",
    function () {
        redLabel.innerHTML = red.value;
        showSingleColor();
        showFinalColor();
    },
    false
);

green.addEventListener(
    "input",
    function () {
        greenLabel.innerHTML = green.value;
        showSingleColor();
        showFinalColor();
    },
    false
);

blue.addEventListener(
    "input",
    function () {
        blueLabel.innerHTML = blue.value;
        showSingleColor();
        showFinalColor();
    },
    false
);

alfa.addEventListener(
    "input",
    function () {
        alfaLabel.innerHTML = alfa.value;
        showAlfaColor();
        showFinalColor();
    },
    false
);

document.querySelector(".snowman").style.opacity = "1";