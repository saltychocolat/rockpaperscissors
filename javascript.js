let playerScore = 0;
let computerScore = 0;

let ComputerChoice;
let PlayerChoice;

function getComputerChoice() {
    let nr;
    nr = Math.random();
    nr = Math.floor(nr * 3);
    switch (nr) {
        case (0):
            return "Rock";
        case (1):
            return "Paper";
        case (2):
            return "Scissors";
    }
}

function getPlayerChoice() {
    let str = prompt("Rock, Paper, or Scissors?");
    if (str != "") {
        str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        return str;
    }
}

function playRound(ComputerChoice, PlayerChoice) {
    switch (PlayerChoice) {
        case "Rock":
            switch (ComputerChoice) {
                case "Paper":
                    alert("You lose! Paper beats Rock");
                    computerScore += 1;
                    break;
                case "Scissors":
                    alert("You win! Rock beats Scissors");
                    playerScore += 1;
                    break;
                case "Rock":
                    alert("Tie");
                    break;
                default:
                    alert("Invalid choice for Computer");
            }
            break;
        case "Paper":
            switch (ComputerChoice) {
                case "Paper":
                    alert("Tie");
                    break;
                case "Scissors":
                    alert("You lose! Scissors beats Paper");
                    computerScore += 1;
                    break;
                case "Rock":
                    alert("You win! Paper beats Rock");
                    playerScore += 1;
                    break;
                default:
                    alert("Invalid choice for Computer");
            }
            break;
        case "Scissors":
            switch (ComputerChoice) {
                case "Paper":
                    alert("You win! Scissors beats Paper");
                    playerScore += 1;
                    break;
                case "Scissors":
                    alert("Tie");
                    break;
                case "Rock":
                    alert("You lose! Rock beats Scissors");
                    computerScore += 1;
                    break;
                default:
                    alert("Invalid choice for Computer");
            }
            break;
        default:
            alert("Invalid choice for Player");
    }
    alert("Player:"+playerScore+"\nComputer:"+computerScore);
}

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        ComputerChoice = getComputerChoice();
        PlayerChoice = getPlayerChoice();
        playRound(ComputerChoice, PlayerChoice);
    }
    // Display the final scores after all rounds
    alert("Final Score:\nPlayer: " + playerScore + "\nComputer: " + computerScore);
}

playGame(5);
