function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerChoice() {
    const randInt = getRandomIntInclusive(0, 2);
	if (randInt === 0) {
		return "rock";
	}
	else if (randInt === 1) {
		return "paper";
	}
	else {
		return "scissor";
	}
}

function genericMessage(winLose, playerSelection, verb, computerSelection) {
	return winLose 
			+ " " 
			+ (playerSelection[0].toUpperCase() + playerSelection.substring(1))
			+ " " + verb + " "
			+ (computerSelection[0].toUpperCase() + computerSelection.substring(1));
}

function winMessage(playerSelection, computerSelection) {
    return genericMessage("You Win!", playerSelection, "beats", computerSelection);
}

function loseMessage(playerSelection, computerSelection) {
    return genericMessage("You Lose!", playerSelection, "beats", computerSelection);
}

function drawMessage(playerSelection, computerSelection) {
    return genericMessage("Draw!", playerSelection, "can't beat", computerSelection);
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
        return { winner: "player", message: winMessage(playerSelection, computerSelection) };
    }
    else if (modPlayerChoice === modComputerChoice) {
        return { winner: "none", message: drawMessage(playerSelection, computerSelection) };
    }
    else {
        return { winner: "computer", message: loseMessage(computerSelection, playerSelection) };
    }
}

function updatePlayerScore(playerScore) {
	const playerScoreDiv = document.querySelector("#player-score");
	playerScoreDiv.textContent = playerScore.toString();
}

function updateComputerScore(computerScore) {
	const computerScoreDiv = document.querySelector("#computer-score");
	computerScoreDiv.textContent = computerScore.toString();
}

function showCurrentRoundResult(roundInfo, roundList, roundCount, winner)
{
	const round = document.createElement("li");
	round.style.margin = `0`;
	round.style.padding = `0`;
	const roundMessage = document.createElement("h4");
	roundMessage.style.margin = `0`;
	roundMessage.style.padding = `0`;
	if (winner === "player") {
		roundMessage.style.color = `green`;
	}
	else if (winner === "computer") {
		roundMessage.style.color = `red`;
	}
	else {
		roundMessage.style.color = `black`;
	}
	
	roundMessage.textContent = roundInfo.message;
	const roundNum = document.createElement("span");
	roundNum.textContent = "Round " + roundCount.toString();
	roundNum.style.color = `blue`;
	round.appendChild(roundNum);
	round.appendChild(roundMessage);
	roundList.appendChild(round);
}

function playGame() {
	let playerScore = 0;
	let computerScore = 0;
	let roundCount = 1;
	let playerChoice = document.querySelector("#player-choices");
	const playArea = document.querySelector("#play-area");
	const roundList = document.createElement("ul");
	const gameScreen = document.querySelector("#game-screen");
	roundList.style.paddingLeft = `1rem`;
	const playAgainButton = document.createElement("button");
	const winnerMessage = document.querySelector("#winner-message");
	playAgainButton.addEventListener("click", () => window.location.reload());
	playAgainButton.hidden = true;
	playAgainButton.textContent = `Play again`;
	playAgainButton.style.cssText = `
									  margin: 0;
									  margin-top: 1rem;
									  padding-left: 1rem;
									  padding-right: 1rem;
									  padding-top: 0.5rem;
									  padding-bottom: 0.5rem;
									 `;
	roundList.style.cssText = `
								margin: 0;
								margin-top: 1rem;
								padding: 0;
								display: flex;
								flex-direction: column;
								align-items: start;
								gap: 1.5rem;
								width: 50%;
							 `;
								
	gameScreen.appendChild(roundList);
	playArea.appendChild(playAgainButton);
	updatePlayerScore(playerScore);
	updateComputerScore(computerScore);
	playerChoice.addEventListener("click", (event) => {
		const id = event.target.id;
		if (playerScore < 5 && computerScore < 5
			&& (id === "rock" || id === "paper" || id === "scissor"))
		{
			let computerChoice = getComputerChoice();
			const roundInfo = playRound(event.target.id, computerChoice);
			if (roundInfo.winner === "player") {
				playerScore += 1;
				updatePlayerScore(playerScore);
			}
			else if (roundInfo.winner === "computer") {
				computerScore += 1;
				updateComputerScore(computerScore);
			}
			
			showCurrentRoundResult(roundInfo, roundList, roundCount, roundInfo.winner);
			updatePlayerScore(playerScore);
			updateComputerScore(computerScore);
			roundCount += 1;
			if (playerScore === 5 || computerScore === 5) {
				playAgainButton.hidden = false;
				if (playerScore > computerScore) {
					winnerMessage.textContent = `Player Wins!`;
					winnerMessage.style.color = `green`;
				}
				else {
					winnerMessage.textContent = `Computer Wins!`;
					winnerMessage.style.color = `red`;
				}
			}
		}
	});
}

playGame();