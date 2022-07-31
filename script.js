const choices = [rock , paper , scissors];

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function singleRound (userChoice , computerChoice){
    if (userChoice === computerChoice) {
        return 'Draw';
    }
    if (userChoice === 'rock') {
        return computerChoice === 'paper' ? 'Lose' : 'Win';
    }
    if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'Lose' : 'Win';
    }
    if (userChoice === 'scissors') {
        return computerChoice === 'rock' ? 'Lose' : 'Win';
    }
}

