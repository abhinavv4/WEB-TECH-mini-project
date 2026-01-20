let pScore = 0;
let cScore = 0;

const icons = {
    rock: 'fa-hand-fist',
    paper: 'fa-hand-paper',
    scissors: 'fa-hand-scissors'
};

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[Math.floor(Math.random() * 3)];

    // Update Icons
    document.getElementById('player-hand').innerHTML = `<i class="fas ${icons[playerChoice]}"></i>`;
    document.getElementById('comp-hand').innerHTML = `<i class="fas ${icons[compChoice]}"></i>`;

    const resultTxt = document.getElementById('result-text');

    // Win/Loss Logic
    if (playerChoice === compChoice) {
        resultTxt.innerText = "IT'S A DRAW!";
        resultTxt.style.color = "#ffd700";
    } else if (
        (playerChoice === 'rock' && compChoice === 'scissors') ||
        (playerChoice === 'paper' && compChoice === 'rock') ||
        (playerChoice === 'scissors' && compChoice === 'paper')
    ) {
        resultTxt.innerText = "YOU WIN! 🔥";
        resultTxt.style.color = "#00ff88";
        pScore++;
    } else {
        resultTxt.innerText = "COMP WINS! 🤖";
        resultTxt.style.color = "#ff4757";
        cScore++;
    }

    // Update Scores
    document.getElementById('player-score').innerText = pScore;
    document.getElementById('comp-score').innerText = cScore;
}

function resetGame() {
    pScore = 0;
    cScore = 0;
    document.getElementById('player-score').innerText = '0';
    document.getElementById('comp-score').innerText = '0';
    document.getElementById('result-text').innerText = "Choose Your Weapon";
    document.getElementById('result-text').style.color = "white";
    document.getElementById('player-hand').innerHTML = `<i class="fas fa-hand-back-fist"></i>`;
    document.getElementById('comp-hand').innerHTML = `<i class="fas fa-hand-back-fist"></i>`;
}