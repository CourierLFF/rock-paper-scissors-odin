const resultsDiv = document.querySelector('#results');
const playerScoreP = document.querySelector('#playerScore');
const playerChoiceP = document.querySelector('#playerChoice');
const computerScoreP = document.querySelector('#computerScore');
const computerChoiceP = document.querySelector('#computerChoice')

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber == 0) {
        computerChoice = 'rock';
    }
    else if (randomNumber == 1) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }
    computerChoiceP.textContent = `${computerChoice}`
    return computerChoice;
}

function updateScoreUI() {
    playerScoreP.textContent = `Player Score: ${playerScore}`;
    computerScoreP.textContent = `Computer Score: ${computerScore}`;
}
updateScoreUI();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "It's a draw!";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        updateScoreUI();
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        updateScoreUI();
        return "You Win! Rock beats Scissors! ";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        updateScoreUI();
        return "You Win! Paper beats Rock!";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        updateScoreUI();
        return "You Lose! Scissors beats Paper!";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        updateScoreUI();
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        updateScoreUI();
        return "You win! Scissors beats paper!";
    }
}

function game(playerSelection) {
        let result = playRound(playerSelection, getComputerChoice());
        if (playerScore < 5 && computerScore < 5) {
            resultsDiv.textContent = result;
        } else if (playerScore == 5) {
            resultsDiv.textContent = "Player Wins!";
            computerScore = 0;
            playerScore = 0;
            updateScoreUI();
        } else if (computerScore == 5) {
            resultsDiv.textContent = "Computer Wins!";
            computerScore = 0;
            playerScore = 0;
            updateScoreUI();
        }
}

//Create event listeners for rock paper and scissors buttons
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    let playerSelection = 'rock';
    playerChoiceP.textContent = `${playerSelection}`
    game(playerSelection);
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    let playerSelection = 'paper';
    playerChoiceP.textContent = `${playerSelection}`
    game(playerSelection);
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    let playerSelection = 'scissors';
    playerChoiceP.textContent = `${playerSelection}`
    game(playerSelection);
});
