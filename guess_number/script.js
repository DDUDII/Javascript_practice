'use strict';

//연습
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value); */

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//시크릿 넘버 보여주기
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //입력값 없음
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔️ Give me number!';
    displayMessage('⛔️ Give me number!');

    //맞췄을때
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    //document.querySelector('.message').textContent = '🎉 correct number!';
    displayMessage('🎉 correct number!');
    highscore++;
    //document.querySelector('.highscore').textContent = highscore;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //틀렸을때
  else if (guess !== number) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      displayMessage(guess > number ? '⬇️ Shuld be low!' : '⬆️ Shuld be high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  //변수 재설정
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = '💬 Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
