'use strict';

// Selecting DOM Elements and Storing in Variables to access Easily.
const body = document.querySelector("body");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const  number = document.querySelector(".number");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");

const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreCounter = 20;
let highScoreCounter = 0;


score.textContent = 20;
const checkNumber = function () {
    const guessedNumber = Number(guess.value);

    // When user provide no input
    if (!guessedNumber) {
        message.textContent = "NO NUMBER!";
    }
    // When User Wins the Game 
    else if (guessedNumber === secretNumber) {
        message.textContent = "HURRAH! CORRECT NUMBER";
        body.style.backgroundColor = "#60b347";
        number.style.width = '30rem';
        number.textContent = secretNumber;
        if(scoreCounter>highScoreCounter) {
            highScoreCounter = scoreCounter;
            highScore.textContent = highScoreCounter;
        }
    }
    //When Guess is Wrong 
    else if (guessedNumber != secretNumber) {
        if(scoreCounter > 1) {
            message.textContent = guessedNumber>secretNumber? "TOO HIGH" : "TOO LOW";
            scoreCounter--;
            score.textContent = scoreCounter;
        } else {
            message.textContent = "YOU LOST THE GAME";
            score.textContent = 0;
        }   
    }
};

const resetGame = function() {
    scoreCounter = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    body.style.backgroundColor = "#222";
    number.textContent = "?";
    number.style.width = "15rem";
    message.textContent = "START GUESSING...";
    score.textContent = "20";
    guess.value = "";
};

checkButton.addEventListener("click", checkNumber);
againButton.addEventListener("click",resetGame);


