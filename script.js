//Write logic for computer choice
//Write logic for human choice. Make use of Math.random, but put it inside Math.floor to make code easier to find the available options.
//Write code for round. Use logical operators to determine winner. Make use of && and ||
// Create function to play a game of 5 rounds. Call the playRound func from inside playGame function


function playRound(humanSelection, computerSelection) {

    let human = humanSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (human === computer) {
        console.log(`Computer selected: ${computer} and you selected ${human}. Its a tie`);
        return "tie";


    } else if ((human === "rock" && computer === "scissors") || (human === "scissors" && computer === "paper") || (human === "paper" === computer === "rock")) {
        console.log(`You have chosen ${human} and the computer has chosen ${computer}: You Win`);
        return "win";

    } else {


        console.log(`You have chosen ${human} and the computer has chosen ${computer}: You lose`);
        return "lose";
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumanChoice() {
    const humanChoose = prompt("Type in your choice: rock paper scissors");
    return humanChoose;

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);

        if (result === "win") {
            humanScore++;
        } else if (result === "lose") {
            computerScore++;
        }
    }
    console.log(`You: ${humanScore} ----- Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congrat. You win the game");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game.");
    } else {
        console.log("The game ends in a tie");
    }
}

playGame()