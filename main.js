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

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose: ");
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
    }
}

game();