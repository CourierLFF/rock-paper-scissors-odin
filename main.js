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
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "It's a draw!";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You Win! Rock beats Scissors! ";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You Win! Paper beats Rock!";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You Lose! Scissors beats Paper!";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats paper!";
    }
}

function game(playerSelection) {
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
}

//Create event listeners for rock paper and scissors buttons
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    let playerSelection = 'rock';
    game(playerSelection);
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    let playerSelection = 'paper';
    game(playerSelection);
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    let playerSelection = 'scissors';
    game(playerSelection);
});