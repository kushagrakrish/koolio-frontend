let elevator = document.getElementById("elevator");
let level0 = document.getElementById("level0");
let level1 = document.getElementById("level1");
let level2 = document.getElementById("level2");
let elevatorAudio = new Audio("./assets/lift-audio.mp3");

const levelZeroBtn = document.getElementById("level-0-up-btn");
const levelOneUpBtn = document.getElementById("level-1-up-btn");
const levelOneDownBtn = document.getElementById("level-1-down-btn");
const levelTwoDownBtn = document.getElementById("level-2-down-button");

levelZeroBtn.addEventListener("click", levelZeroGoUp);
levelOneUpBtn.addEventListener("click", levelOneGoUp);
levelOneDownBtn.addEventListener("click", levelOneGoDown);
levelTwoDownBtn.addEventListener("click", levelTwoFoDown);

let currentfloor = 0;
let nextfloor;

function levelZeroGoUp() {
  nextfloor = 2;
  var distance = (currentfloor - nextfloor) * 250 - 3;
  elevator.style["transition"] = "10s linear";
  elevator.style.transform = "translateY(" + distance + "px)";
  setTimeout(() => {
    elevatorAudio.play();
  }, 10000);
}

function levelOneGoUp() {
  if (nextfloor == 0) {
    return;
  }
  nextfloor = 1;
  var distance = (currentfloor - nextfloor) * 250;
  elevator.style["transition"] = "5s linear";
  elevator.style.transform = "translateY(" + distance + "px)";
  setTimeout(() => {
    elevatorAudio.play();
  }, 5000);
}
function levelTwoFoDown() {
  nextfloor = 0;
  var distance = (currentfloor - nextfloor) * 250;
  elevator.style["transition"] = "10s linear";
  elevator.style.transform = "translateY(" + distance + "px)";
  setTimeout(() => {
    elevatorAudio.play();
  }, 10000);
}
function levelOneGoDown() {
  if (nextfloor == 2) {
    return;
  }
  nextfloor = 1;
  var distance = (currentfloor - nextfloor) * 250;
  elevator.style["transition"] = "5s linear";
  elevator.style.transform = "translateY(" + distance + "px)";
  setTimeout(() => {
    elevatorAudio.play();
  }, 5000);
}
