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

function getPlayerChoice(){
    let input = prompt("Enter rock, paper or scissors");
    return input.toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice , computerChoice){
    console.log(`    You chose ${playerChoice}
    Computer chose ${computerChoice}`)
    if (computerChoice===playerChoice) {
            console.log("Tie!")
        } else if ((computerChoice==="rock" && playerChoice==="scissors") || (computerChoice==="paper" && playerChoice==="rock") || (computerChoice==="scissors" && playerChoice==="paper")){
                    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                    computerScore++;
        } else{
                    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
                    playerScore++;
        }

    console.log("Score:");
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
}

while (playerScore<5 && computerScore<5){
    
    playRound(getPlayerChoice(),getComputerChoice());
}

if (playerScore===5){
    console.log("You got to 5 points first and won!");
}
else {
    console.log("The computer got to 5 points first and you lost :(");
}