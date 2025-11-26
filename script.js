document.addEventListener("DOMContentLoaded", function() {
    const choices = ["rock", "paper", "scissors"];
    let humanScore = 0;
    let computerScore = 0;
    let currentRound = 1;
    const maxRounds = 5;
    
    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    };
    
    function getHumanChoice() {
        let input = null;
        
        while (input == null || !choices.includes(input.toLowerCase())) {
            input = prompt(`Please choose either 'rock', 'paper' or 'scissors'.`);
        };
    
        return input.toLowerCase();
    };
    
    function playRound(computerChoice, humanChoice) {
        console.log(`Round ${currentRound} of ${maxRounds}`);
        console.log(`Player: ${humanChoice}`);
        console.log(`Computer: ${computerChoice}`);
        
        if (humanChoice === computerChoice) {
            console.log(`It's a tie!`);
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
                   (humanChoice === "paper" && computerChoice === "rock") || 
                   (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore += 1;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
        
        console.log(`Player score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log(`--------------------`)
    };

    function playGame() {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
    };

    while(currentRound <= maxRounds) {
        playGame();
        currentRound += 1;
    };
    
    if (humanScore === computerScore) {
        console.log(`It's a tie!`);
    } else if (humanScore > computerScore) {
        console.log(`You win! Congratulations!`);
    } else {
        console.log(`You lose! Better luck next time!`);
    }
});