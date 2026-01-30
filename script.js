let playerScore = 0;
let computerScore = 0;

const icons = {
    rock: 'fa-hand-fist',
    paper: 'fa-hand-paper',
    scissors: 'fa-hand-scissors',
    default: 'fa-hand-back-fist'
};

const playerHand = document.getElementById('player-hand');
const compHand = document.getElementById('comp-hand');
const resultText = document.getElementById('result-text');
const playerScoreElem = document.getElementById('player-score');
const compScoreElem = document.getElementById('comp-score');
const choiceButtons = document.querySelectorAll('.btn');
const resetButton = document.getElementById('reset-game');

// Sound effects - replace with your own sound file paths
const selectSound = new Audio('sounds/select.mp3');
const winSound = new Audio('sounds/win.mp3');
const loseSound = new Audio('sounds/lose.mp3');
const drawSound = new Audio('sounds/draw.mp3');
const resetSound = new Audio('sounds/reset.mp3');

function updateHandDisplay(element, choice) {
    element.innerHTML = `<i class="fas ${icons[choice] || icons.default}"></i>`;
}

function animateHands() {
    playerHand.classList.add('animate');
    compHand.classList.add('animate');
    setTimeout(() => {
        playerHand.classList.remove('animate');
        compHand.classList.remove('animate');
    }, 500);
}

function determineWinner(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        return 'draw';
    }
    if (
        (playerChoice === 'rock' && compChoice === 'scissors') ||
        (playerChoice === 'paper' && compChoice === 'rock') ||
        (playerChoice === 'scissors' && compChoice === 'paper')
    ) {
        return 'player';
    }
    return 'computer';
}

function playGame(playerChoice) {
    selectSound.play(); // Play sound on selection

    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[Math.floor(Math.random() * choices.length)];

    animateHands();

    setTimeout(() => {
        updateHandDisplay(playerHand, playerChoice);
        updateHandDisplay(compHand, compChoice);

        const winner = determineWinner(playerChoice, compChoice);

        if (winner === 'draw') {
            resultText.innerText = "IT'S A DRAW!";
            resultText.style.color = "#ffd700";
            drawSound.play();
        } else if (winner === 'player') {
            resultText.innerText = "YOU WIN! 🔥";
            resultText.style.color = "#00ff88";
            winSound.play();
            playerScore++;
            playerScoreElem.innerText = playerScore;
        } else {
            resultText.innerText = "COMP WINS! 🤖";
            resultText.style.color = "#ff4757";
            loseSound.play();
            computerScore++;
            compScoreElem.innerText = computerScore;
        }
    }, 500); // Delay to sync with animation
}

function resetGame() {
    resetSound.play();
    playerScore = 0;
    computerScore = 0;
    playerScoreElem.innerText = '0';
    compScoreElem.innerText = '0';
    resultText.innerText = "Choose Your Weapon";
    resultText.style.color = "white";
    updateHandDisplay(playerHand, 'default');
    updateHandDisplay(compHand, 'default');
}

// Event Listeners
choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const choice = button.dataset.choice;
        playGame(choice);
    });
});

resetButton.addEventListener('click', resetGame);
