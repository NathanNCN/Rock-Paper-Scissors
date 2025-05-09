
const moves = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

let computerScore = 0;
let playerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const playerTracker = document.querySelector("#Player-Score");
const computerTracker = document.querySelector("#Computer-Score");

const displayText = document.querySelector("#winnerText");




function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    console.log(moves[choice])
    return moves[choice];
}


function playRound(player){
    let computer = getComputerChoice();
    
    
    if (player == computer){
        displayText.innerHTML = `It's a tie we both picked ${player}`
    } else if (player == "rock" && computer == "scissors"){
        playerScore +=1;
        playerTracker.innerHTML = playerScore;
        displayText.innerHTML = `You Won, You picked ${player} and I picked ${computer}`

    } else if (player == "scissors" && computer == "paper"){
        playerScore +=1;
        playerTracker.innerHTML = playerScore;
        displayText.innerHTML = `You Won, You picked ${player} and I picked ${computer}`

    }else if (player == "paper" && computer == "rock"){
        playerScore +=1;
        playerTracker.innerHTML = playerScore;
        displayText.innerHTML = `You Won, You picked ${player} and I picked ${computer}`

    }else{
        console.log("NOOO, YOU LOST")
        computerScore+=1
        computerTracker.innerHTML = computerScore;
        displayText.innerHTML = `You Lost, You picked ${player} and I picked ${computer}`

        
    }

    if (playerScore == 5){
        displayText.innerHTML = `Nice, you won the series before me`
        computerScore = 0;
        playerScore = 0;
        computerTracker.innerHTML = computerScore;
        playerTracker.innerHTML = playerScore;

    } else if (computerScore == 5){
        displayText.innerHTML = `Sorry, I won the series before you`
        computerScore = 0;
        playerScore = 0;
        computerTracker.innerHTML = computerScore;
        playerTracker.innerHTML = playerScore;

    }
}


rockBtn.addEventListener("click", ()=> {
    playRound("rock");
})

paperBtn.addEventListener("click", ()=> {
    playRound("paper");
})
scissorsBtn.addEventListener("click", ()=> {
    playRound("scissors");
})