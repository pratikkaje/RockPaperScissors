let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.random();

    if (number <= 0.3) {
        return "rock";
    }
    else if (number > 0.3 && number <= 0.6) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function getHumanChoice(roundNumber) {
    let userInput = prompt(`ROUND ${roundNumber}: Please provide your choice.`)

    if(userInput === null || userInput === "no")
        AskToPlayAgain();

    while (userInput.toLowerCase() !== "rock" && userInput.toLowerCase() !== "paper" && userInput.toLowerCase() !== "scissor") {
        userInput = prompt(`ROUND ${roundNumber}: Invalid input. Please enter Rock, Paper or Scissors`);
    }

    return userInput;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissor") {
        humanScore++;
        alert("You win! Rock beats Scissor.");
    }

    if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {
        computerScore++;
        alert("You lose! Paper beats Rock.");
    }

    if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "rock") {
        alert("Draw! Try again.");
    }

    if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissor") {
        computerScore++;
        alert("You lose! Paper beats Scissor.");
    }

    if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "paper") {
        alert("Draw! Try again.");
    }

    if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        humanScore++;
        alert("You win! Paper beats rock.");
    }

    if (humanChoice.toLowerCase() == "scissor" && computerChoice.toLowerCase() == "scissor") {
        alert("Draw! Try again.");
    }

    if (humanChoice.toLowerCase() == "scissor" && computerChoice.toLowerCase() == "paper") {
        humanScore++;
        alert("You win! Scissor beats Paper.");
    }

    if (humanChoice.toLowerCase() == "scissor" && computerChoice.toLowerCase() == "rock") {
        computerScore++;
        alert("You lose! Rock beats Scissor.");
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice(i + 1);
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        if (i === 2) {
            if (humanScore === 3) {
                alert(`Congratulations, You won! Human Score: ${humanScore} Computer Score: ${computerScore}`);

                AskToPlayAgain();
            }

            if (computerScore == 3) {
                alert(`Sorry, You lose! Human Score: ${humanScore} Computer Score: ${computerScore}`);

                AskToPlayAgain();
            }
        }

        if (i === 4) {
            if (humanScore > computerScore) {
                alert(`Congratulations, You won! 
                                    Human Score: ${humanScore} 
                                    Computer Score: ${computerScore}`);

                AskToPlayAgain();
            }
            else if(humanScore === computerScore){
                alert(`It's a draw!  
                    Human Score: ${humanScore} 
                    Computer Score: ${computerScore}`);

                AskToPlayAgain();                
            }
            else {
                alert(`Sorry, You lose! 
                    Human Score: ${humanScore} 
                    Computer Score: ${computerScore}`);

                AskToPlayAgain();
            }
        }
    }
}

function AskToPlayAgain() {
    let input = prompt("Do you want to play again?");

    if (input === null || input === "no"){
        alert("Thank you for playing. Bye!");
    }

    while (input.toLowerCase() !== "yes" && input.toLowerCase() !== "no") {
        input = prompt("Incorrect input. Please select Yes or No.");
    }

    if (input.toLowerCase() === "yes") {
        playGame();
    }

}