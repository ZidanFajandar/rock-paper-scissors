function getComputerChoice(){
    let i= Math.floor(Math.random()*3);

    if (i===0){
        return "rock";
    }
    else if (i===1){
        return "paper";
    }
    else return "scissors";
}



let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice , computerChoice){
    const result = document.querySelector(".result");
    if (computerChoice===playerChoice) {
            result.textContent="Tie!";
        } else if ((computerChoice==="rock" && playerChoice==="scissors") || (computerChoice==="paper" && playerChoice==="rock") || (computerChoice==="scissors" && playerChoice==="paper")){
                    result.textContent=`You lose! ${computerChoice} beats ${playerChoice}`;
                    computerScore++;
        } else{
                    result.textContent=`You win! ${playerChoice} beats ${computerChoice}`;
                    playerScore++;
        }
    
    updateScore();
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
 
}

function updateScore(){
    const score = document.querySelector(".score");
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function endGame() {
    const result = document.querySelector(".result");
    const playAgainBtn = document.querySelector(".play-again");

    if (playerScore === 5) {
        result.textContent += " 🎉 You won the game!";
    } else {
        result.textContent += " 😢 The computer won the game.";
    }

    disableButtons(true);
    playAgainBtn.style.display = "inline-block";
}

function disableButtons(disable) {
    document.querySelectorAll(".rock, .paper, .scissors").forEach(button => {
        button.disabled = disable;
        });
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();

    document.querySelector(".result").textContent = "";
    document.querySelector(".play-again").style.display = "none";
    disableButtons(false);
}

document.querySelector(".play-again").addEventListener("click", resetGame);









document.querySelector(".rock").addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});
document.querySelector(".paper").addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});
document.querySelector(".scissors").addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});