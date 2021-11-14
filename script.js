function computerPlay() {
    //The result is a random number between 1 and 99
    //The one is added to make the result starts with 1 not zero
    let resultNum = Math.random() * 98 + 1;

    if (resultNum >= 1 && resultNum <= 33) {
        return 'Rock';
    } else if (resultNum > 33 && resultNum <= 66) {
        return 'Paper';
    } else if (resultNum > 66 && resultNum <= 99) {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase().trim();
    let computer = computerSelection.toLowerCase();
    let result = `Computer Choice: ${computer.charAt(0).toUpperCase() + computer.substr(1)}\nPlayer Choice: ${player.charAt(0).toUpperCase() + player.substr(1)}\n\n`;
    if (player === computer) {
        return result + `The Game is Draw! Both you and the Computer chose ${player.charAt(0).toUpperCase() + player.substr(1)}!`;
    } else if (isComputerWinner(player, computer)) {
        return result + `You Lose! ${computer.charAt(0).toUpperCase() + computer.substr(1)} beats ${player.charAt(0).toUpperCase() + player.substr(1)}`;
    } else {
        return result + `You Won! ${player.charAt(0).toUpperCase() + player.substr(1)} beats ${computer.charAt(0).toUpperCase() + computer.substr(1)}`;
    }
}

function isComputerWinner(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player === 'rock' && computer === 'paper') {
        return true;
    } else if (player === 'paper' && computer === 'scissor') {
        return true;
    } else if (player === 'scissor' && computer === 'rock') {
        return true;
    }
    return false;
}

const computerSelection = computerPlay();
const playerSelection = prompt("Enter Rock, Paper or Scissors");
const result = playRound(playerSelection, computerSelection);
console.log(result);
alert(result);