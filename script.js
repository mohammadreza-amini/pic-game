const diceContainer = document.querySelector('.dice-img'); 
const diceElement = diceContainer.querySelector('img'); 
const rollButton = document.querySelector('.roll'); 
const playerOne = document.getElementById('score--0');
const playerTwo = document.getElementById('score--1');
const currentScorePlayerOne = document.querySelector('#current--0');
const currentScorePlayertwo = document.querySelector("#current--1");
let currentScore = 0;
let activePlayer = 0;

rollButton.addEventListener('click', () => {
    const dice = Math.floor(Math.random() * 6) + 1; 
    const imagePath = `./images/${dice}.jpg`; 
    diceElement.src = imagePath; 
    diceElement.classList.remove('hidden'); 

    if (dice !== 1) {
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).innerHTML = currentScore;
    } else {
        currentScore = 0;
        document.querySelector(`#current--${activePlayer}`).innerHTML = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.getElementsByClassName('player-1')[0].classList.toggle('player-active');
        document.getElementsByClassName('player-2')[0].classList.toggle('player-active');
    }
});
