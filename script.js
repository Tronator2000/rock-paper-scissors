function getComputerChoice(){
    let valRand = Math.random() * 3;
    if (valRand <= 1){
        return "rock";
    }
    else if(valRand <= 2){
        return 'paper';
    }
    else return 'scissors';
}

function getHumanChoice(){
    return prompt("Choose between rock, paper or scissors");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    // Hay que escribir la logica de quien gana
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);