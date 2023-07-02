function getComputerChoice(){
    
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'
    }
}

function oneRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == computerChoice) {
        return "It's a tie!";
    }
    if (playerChoice == 'rock') {
        if (computerChoice == 'paper') {
            return 'You lose!';
        } else {
            return 'You win!';
        }
    }
    if (playerChoice == 'paper') {
        if (computerChoice == 'scissors') {
            return 'You lose!';
        } else {
            return 'You win!';
        }
    }
    if (playerChoice == 'scissors') {
        if (computerChoice == 'rock') {
            return 'You lose!';
        } else {
            return 'You win!';
        }
    }
    else {
        return 'Invalid input!';
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        result = oneRound(prompt("Rock, paper, or scissors?"), getComputerChoice());
        console.log(result);    
    }
}

console.log(game());