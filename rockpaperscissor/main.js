function getComputerChoice() {
    return "Rock";
}

function winMessage(playerSelection, computerSelection) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
}

function loseMessage(playerSelection, computerSelection) {
    return "You Lose! " + playerSelection + " beats " + computerSelection;
}

function drawMessage(playerSelection, computerSelection) {
    return "Draw! " + playerSelection + " can't beat " + computerSelection;
}

function playRound(playerSelection, computerSelection) {
    const modPlayerChoice = playerSelection.toLowerCase();
    const modComputerChoice = computerSelection.toLowerCase()
    const combinations = {
        'rock': 'scissor',
        'scissor': 'paper',
        'paper': 'rock'
    }

    if (combinations[modPlayerChoice] === modComputerChoice) {
        return { winner: 1, message: winMessage(playerSelection, computerSelection) };
    }
    else if (modPlayerChoice === modComputerChoice) {
        return { winner: 0, message: drawMessage(playerSelection, computerSelection) };
    }
    else {
        return { winner: -1, message: loseMessage(computerSelection, playerSelection) };
    }
}

function playGame() {
    let playerPoint = 0;
    let computerPoint = 0;
    let roundInfo = playRound(prompt("Enter your choice"), getComputerChoice());
    if (roundInfo.winner == 1) {
        playerPoint += 1;
    }
    else if (roundInfo.winner == -1) {
        computerPoint += 1;
    }

    console.log(roundInfo.message);
    roundInfo = playRound(prompt("Enter your choice"), getComputerChoice());
    if (roundInfo.winner == 1) {
        playerPoint += 1;
    }
    else if (roundInfo.winner == -1) {
        computerPoint += 1;
    }

    console.log(roundInfo.message);
    roundInfo = playRound(prompt("Enter your choice"), getComputerChoice());
    if (roundInfo.winner == 1) {
        playerPoint += 1;
    }
    else if (roundInfo.winner == -1) {
        computerPoint += 1;
    }

    console.log(roundInfo.message);
    roundInfo = playRound(prompt("Enter your choice"), getComputerChoice());
    if (roundInfo.winner == 1) {
        playerPoint += 1;
    }
    else if (roundInfo.winner == -1) {
        computerPoint += 1;
    }

    console.log(roundInfo.message);
    roundInfo = playRound(prompt("Enter your choice"), getComputerChoice());
    if (roundInfo.winner == 1) {
        playerPoint += 1;
    }
    else if (roundInfo.winner == -1) {
        computerPoint += 1;
    }

    console.log(roundInfo.message);
    if (playerPoint > computerPoint) {
        console.log('Player wins!');
    }
    else if (computerPoint > playerPoint) {
        console.log('Computer wins!');
    }
    else {
        console.log('It is a draw!');
    }
}

playGame();