//rock paper scissors game

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const computerSelection = getComputerChoice();



// Accessing the buttons and text labels
const rockButton = document.getElementById("rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieText = document.getElementById("result-tie");

//Event listeners

    rockButton.addEventListener('click', function() {
        const playerSelection = 'rock';
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
    });
    paperButton.addEventListener('click', function() {
        const playerSelection = 'paper';
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        
    });
    scissorsButton.addEventListener('click', function() {
        const playerSelection = 'scissors';
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        
    });

//Game Logic

function playRound(playerSelection , computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        return 'It is a tie!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose ! Rock beats Paper!';
        } else {
            return 'You win! Rock beats ' + computerSelection + '!';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You lose ! Paper beats Scissors!';
        } else {
            return 'You win! Paper beats ' + computerSelection + '!';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats Scissors!';
        } else {
            return 'You win! Scissors beats ' + computerSelection + '!';
        }
    }
}



console.log(playRound(playerSelection,computerSelection));
