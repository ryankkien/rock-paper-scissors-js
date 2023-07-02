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

const buttonRock = document.createElement('button')
const buttonPaper = document.createElement('button')
const buttonScissors = document.createElement('button')

buttonRock.addEventListener('click', () => {
    oneRound('rock', getComputerChoice());
})

buttonPaper.addEventListener('click', () => {
    oneRound('paper', getComputerChoice());
})

buttonScissors.addEventListener('click', () => {
    oneRound('scissors', getComputerChoice());
})

document.body.appendChild(buttonRock)
document.body.appendChild(buttonPaper)
document.body.appendChild(buttonScissors)