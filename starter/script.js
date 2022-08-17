'use strict';
let guess = document.querySelector(`.guess`);
let check = document.querySelector(`.check`);
let displaySecret = document.querySelector(`.number`);
let message = document.querySelector(`.message`);

let score = 20;
let highScore = 0;
let scoreDom = document.querySelector(`.score`);

const result = function (bgColor, textContent) {
  document.getElementById(`main`).children[0].className = `leftAgain`;
  document.getElementById(`main`).children[1].className = `rightAgain`;
  document.querySelector(`body`).style.backgroundColor = bgColor;
  message.textContent = textContent;
  displaySecret.style.width = `30rem`;
  message.style.fontSize = 'x-large';
  document.querySelector(`.highscore`).textContent = highScore;
};

let secretNumber = Number(Math.floor(Math.random() * 20)) + 1;
check.addEventListener('click', function () {
  if (score > 0) {
    if (Number(guess.value) > 20 || Number(guess.value) < 1) {
      message.textContent = `❌ Enter values between 1 and 20 !!! `;
    } else {
      if (Number(guess.value) === secretNumber) {
        highScore = Math.max(highScore, score);
        result(`#60b347`, `✌ Correct guess!!`);
        displaySecret.textContent = secretNumber;
      } else if (Number(guess.value) !== secretNumber) {
        message.textContent =
          Number(guess.value) > secretNumber
            ? `👎 Sorry! Too High...`
            : `👎 Sorry! Too Low...`;
        score--;
        if (score === 0) {
          result(`#CC0000`, `You have lost!!!`);
          displaySecret.textContent = `👎 `;
        }
        scoreDom.textContent = score;
      }
    }
  }
  guess.value = ``;
});

let btn = document.querySelector(`.again`);
btn.addEventListener('click', function () {
  secretNumber = Number(Math.floor(Math.random() * 20)) + 1;
  score = 20;
  scoreDom.textContent = score;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.getElementById(`main`).children[0].className = `left`;
  document.getElementById(`main`).children[1].className = `right`;
  displaySecret.textContent = `?`;
  message.textContent = `Start guessing...`;
  displaySecret.style.width = `15rem`;
  message.style.fontSize = `2rem`;
});
