
const moves = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

const computerScore = 0;
const humanScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    console.log(moves[choice])
    return moves[choice];
}

function getHumanChoice(){
    let userInput = promt("Please pick rock, paper or scissors");
    return userInput; 
}

function playRound(){
    let player = getHumanChoice().toLowerCase();
    let computer = getComputerChoice();

    if (player == computer){
        console.log("ITS A TIE")
    } else if (player == "rock" && computer == "scissors"){
        console.log("NICE you won")
        humanScore +=1
    } else if (player == "scissors" && computer == "paper"){
        console.log("NICE you won")
        humanScore +=1
    }else if (player == "paper" && computer == "rock"){
        console.log("NICE you won")
        humanScore +=1
    }else{
        console.log("NOOO, YOU LOST")
        computerScore +=1
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        playGame();
    }
}