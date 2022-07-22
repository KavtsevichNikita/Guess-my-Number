'use strict';



let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}


// check the answer
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {        
        displayMessage('😢 No number!')
    } else if (guess === secretNumber) {
        displayMessage('✔  Correct number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

    if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

      // when guess is wrong
    } else if(guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? ' 🐱‍🏍Too high' : '💨Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0;
        }
    } 
})

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';


})