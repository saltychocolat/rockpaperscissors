
let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let nr;
    nr = Math.random();
    nr = Math.floor(nr*3)
    switch(nr){
        case(0):
            return "Rock";
        case(1):
            return "Paper";
        case(2):
            return "Scissorss";
    }
}
function getPlayerChoice(){
    let str = prompt("Rock Papper or Scissors");
    if (str != ""){
        str = str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
        return str;
    }
}

let ComputerChoice = getComputerChoice();
let PlayerChoice = getPlayerChoice();
function playRound(ComputerChoice,PlayerChoice){
    
}