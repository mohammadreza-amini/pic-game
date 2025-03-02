const diceContainer = document.querySelector('.dice-img'); 
const diceElement = diceContainer.querySelector('img'); 
const rollButton = document.querySelector('.roll'); 
const scorePlayerOne = document.getElementById('score--0');
const scorePlayerTwo = document.getElementById('score--1');
const currentScorePlayerOne = document.querySelector('#current--0');
const currentScorePlayertwo = document.querySelector("#current--1");

let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;

rollButton.addEventListener('click', () => {
    if (isPlaying) {
        const dice = Math.floor(Math.random() * 6) + 1;
        const imagePath = `./images/${dice}.jpg`;
        diceElement.src = imagePath;
        diceElement.classList.remove("hidden");

        if (dice !== 1) {
          currentScore += dice;
          document.querySelector(`#current--${activePlayer}`).innerHTML =
            currentScore;
        } else {
          playerSwitch();
        }
    }
});

const playerSwitch = () => {
        currentScore = 0;
        document.querySelector(`#current--${activePlayer}`).innerHTML = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.getElementsByClassName('player--0')[0].classList.toggle('player-active');
        document.getElementsByClassName('player--1')[0].classList.toggle('player-active');
}

let scores = [0, 0];

document.getElementsByClassName('hold')[0].addEventListener('click', () => {
    if (isPlaying) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).innerHTML =
          scores[activePlayer];

        if (scores[activePlayer] >= 10) {
          document
            .getElementsByClassName(`player--${activePlayer}`)[0]
            .classList.add("player-winner");
            diceElement.classList.add("hidden");
            isPlaying = false;
        }

        playerSwitch();
    }
});





// reset game

document.getElementsByClassName('start-game')[0].addEventListener('click', () => {
    scores = [0, 0];
    scorePlayerOne.innerHTML = 0;
    scorePlayerTwo.innerHTML = 0;
    currentScorePlayerOne.innerHTML = 0;
    currentScorePlayertwo.innerHTML = 0;
    document.getElementsByClassName(`player--0`)[0].classList.remove('player-winner');
    document.getElementsByClassName(`player--0`)[0].classList.add('player-active');
    document.getElementsByClassName(`player--1`)[0].classList.remove('player-winner');
    document.getElementsByClassName(`player--1`)[0].classList.remove("player-active");
    activePlayer = 0;
    isPlaying = true;
});