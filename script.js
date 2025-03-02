const diceContainer = document.querySelector('.dice-img'); 
const diceElement = diceContainer.querySelector('img'); 
const rollButton = document.querySelector('.roll'); 
const playerOne = document.getElementById('score--0');
const playerTwo = document.getElementById('score--1');
const currentScorePlayerOne = document.querySelector('#current--0');
const currentScorePlayertwo = document.querySelector("#current--1");
let currentScore = 0;

rollButton.addEventListener('click', () => {
    const dice = Math.floor(Math.random() * 6) + 1; 
    const imagePath = `./images/${dice}.jpg`; 
    diceElement.src = imagePath; 
    diceElement.classList.remove('hidden'); 

    if (dice !== 1) {
        currentScore += dice;
        currentScorePlayerOne.innerHTML = currentScore;
    } else {
        currentScore = 0;
        currentScorePlayerOne.innerHTML = 0;
    }
});
