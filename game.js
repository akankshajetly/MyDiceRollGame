let playerScore1 = document.querySelector("#Score0");
let playerScore2 = document.querySelector("#Score1");
let current1 = document.querySelector(".current1");
let current2 = document.querySelector(".current2");
let playerCurrentScore1 = document.querySelector("#currentScore0");
let playerCurrentScore2 = document.querySelector("#currentScore1");
let activePlayer1 = document.querySelector(".player1");
let activePlayer2 = document.querySelector(".player2");
let winner1 = document.querySelector("#winner0");
let winner2 = document.querySelector("#winner1");
winner1.classList.add("hidden");
winner2.classList.add("hidden");
playerScore1.textContent = "0";
console.log(playerScore1);
playerScore2.textContent = "0";
console.log(playerScore2);
let score1 = 0;
let score2 = 0;
let currentScore = 0;
let activePlayer = 0;
let play = true;
let diceRoll = document.querySelector(".dice");
diceRoll.classList.add("hidden");
const playerSwitchTo1 = function () {
  playerCurrentScore1.textContent = currentScore;
  activePlayer1.style.backgroundColor = "rgb(122, 19, 41)";
  activePlayer2.style.backgroundColor = "rgb(145, 85, 95)";
  activePlayer = 1;
};
const playerSwitchTo0 = function () {
  playerCurrentScore2.textContent = currentScore;
  activePlayer = 0;
  activePlayer1.style.backgroundColor = "rgb(145, 85, 95)";
  activePlayer2.style.backgroundColor = "rgb(122, 19, 41)";
};
document.querySelector("#btnRoll").addEventListener("click", function () {
  if (play) {
    diceRandom = Math.trunc(Math.random() * 6) + 1;
    diceRoll.classList.remove("hidden");
    diceRoll.src = `dice-0${diceRandom}.png`;

    if (diceRandom !== 1) {
      currentScore = currentScore + diceRandom;
      if (activePlayer === 0) {
        playerCurrentScore1.textContent = currentScore;
      } else {
        playerCurrentScore2.textContent = currentScore;
      }
    } else {
      currentScore = 0;
      if (activePlayer === 0) {
        playerSwitchTo1();
      } else {
        playerSwitchTo0();
      }
      // activePlayer1.classList.toggle("playerActive");
      // // console.log(activePlayer1);
      // activePlayer2.classList.toggle("playerActive");
    }
  }
});

document.querySelector("#btnHold").addEventListener("click", function () {
  if (play) {
    if (activePlayer === 0) {
      score1 = score1 + currentScore;
      playerScore1.textContent = score1;
      if (playerScore1.textContent <= 20) {
        currentScore = 0;
        playerSwitchTo1();
      } else {
        activePlayer1.style.backgroundColor = "green";
        activePlayer2.style.backgroundColor = "white";
        winner1.classList.remove("hidden");
        current1.classList.add("hidden");
        current2.classList.add("hidden");
        play = false;
        diceRoll.classList.add("hidden");
      }
    } else if (activePlayer == 1) {
      score2 = score2 + currentScore;
      playerScore2.textContent = score2;
      if (playerScore2.textContent <= 20) {
        currentScore = 0;
        playerSwitchTo0();
      } else {
        activePlayer2.style.backgroundColor = "green";
        activePlayer1.style.backgroundColor = "white";
        winner2.classList.remove("hidden");
        current1.classList.add("hidden");
        current2.classList.add("hidden");
        play = false;
        diceRoll.classList.add("hidden");
      }
    }
  }
});
document.querySelector("#btnNew").addEventListener("click", function () {
  play = true;
  score1 = 0;
  score2 = 0;
  currentScore = 0;
  playerCurrentScore1.textContent = currentScore;
  playerCurrentScore2.textContent = currentScore;
  playerScore1.textContent = score1;
  playerScore2.textContent = score2;
  activePlayer = 0;
  activePlayer1.style.backgroundColor = "rgb(145, 85, 95)";
  activePlayer2.style.backgroundColor = "rgb(122, 19, 41)";
  winner1.classList.add("hidden");
  winner2.classList.add("hidden");
  diceRoll.classList.add("hidden");
  current1.classList.remove("hidden");
  current2.classList.remove("hidden");
});
