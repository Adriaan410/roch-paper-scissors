//Write logic for computer choice
//Write logic for human choice. Make use of Math.random, but put it inside Math.floor to make code easier to find the available options.
//Write code for round. Use logical operators to determine winner. Make use of && and ||
// Create function to play a game of 5 rounds. Call the playRound func from inside playGame function

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorBtn = document.querySelector("#scissors");

let humanScore = 0;
let computerScore = 0;

let playRound = (humanSelection) => {
    if (humanScore === 5 || computerScore === 5) {
        alert("The game is over. Please reset to play again");
        return;
    }
    const computerSelection = getComputerChoice();

    let human = humanSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    let resultMessage = "";

    if (human === computer) {
        resultMessage = `Computer selected: ${computer}, and you selected: ${human}. It's a tie.`;
        displayResult(resultMessage);
        // "tie";
    } else if ((human === "rock" && computer === "scissors") || (human === "scissors" && computer === "paper") || (human === "paper" && computer === "rock")) {
        resultMessage = `You have chosen  ${human} and the computer has chosen ${computer}. You Win.`
        humanScore++;
        displayResult(resultMessage);
        //return "win";
    } else {
        resultMessage = `You have chosen ${human} and the computer has chosen ${computer}. You lose`;
        computerScore++;
        displayResult(resultMessage);
        //return "lose";
    }
    checkGameOver();
}

let getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

let displayResult = (resultMessage) => {
    document.querySelector(".result").innerHTML = resultMessage;
    document.querySelector(".score").innerHTML = `You : ${humanScore} --- Computer: ${computerScore}`;
}

let displayScore = () => {
    document.querySelector(".score").innerHTML = `You: ${humanScore} --- Computer: ${computerScore}`;
}

let checkGameOver = () => {
    if (humanScore === 5) {
        alert("Congratulations! You are the winnner of the game");
        resetGame();
    } else if (computerScore === 5) {
        alert("Computer is the winner of the game, better luck next time");
        resetGame();
    }
}

let resetGame = () => {
    humanScore = 0;
    computerScore = 0;

    displayResult("");
    displayScore();
}
rockBtn.addEventListener("click", () => {
    playRound("rock");
})

paperBtn.addEventListener("click", () => {
    playRound("paper");
})

scissorBtn.addEventListener("click", () => {
    playRound("scissors");
})