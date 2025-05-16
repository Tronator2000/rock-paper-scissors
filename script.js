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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice){
            console.log("Tie!");
        }
        else if (
            humanChoice=="scissors" & computerChoice=="paper" | 
            humanChoice=="paper" & computerChoice=="rock" |
            humanChoice=="rock" & computerChoice=="scissors"
        ) {
            console.log(
                "You win!, " +
                humanChoice.charAt(0).toUpperCase().concat(humanChoice.slice(1)) +
                " beats " +
                computerChoice.charAt(0).toUpperCase().concat(computerChoice.slice(1))
            );
            humanScore++;
        }
        else {
            console.log(
                "You lose!, " +
                computerChoice.charAt(0).toUpperCase().concat(computerChoice.slice(1)) +
                " beats " +
                humanChoice.charAt(0).toUpperCase().concat(humanChoice.slice(1))
            );
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore == computerScore){
        console.log(`A tie!! ${humanScore} - ${computerScore}`)
    }
    else if (humanScore > computerScore) {
        console.log(`You win!! ${humanScore} - ${computerScore}`);
    }
    else {
        console.log(`You lose!! :( ${humanScore} - ${computerScore}`);
    }
}

playGame();