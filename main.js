function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber == 0) {
        computerChoice = 'Rock';
    }
    else if (randomNumber == 1) {
        computerChoice = 'Paper';
    }
    else {
        computerChoice = 'Scissors';
    }
    console.log(computerChoice);
}

