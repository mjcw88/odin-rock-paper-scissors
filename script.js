document.addEventListener("DOMContentLoaded", function() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    let round = 0;

    while(round < 5) {
        playGame(round);
    }

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];

        return choices[Math.floor(Math.random() * choices.length)];
    };

    function getHumanChoice() {
        const choice = prompt(`Please choose either "rock", "paper" or "scissors".`)

        return choice.toLowerCase();
    };

    function playGame(round) {
        let humanScore = 0;
        let computerScore = 0;

        playRound(computerChoice, humanChoice);
        round += 1;

        function playRound(computerChoice, humanChoice) {
            console.log(`Player: ${humanChoice}`);
            console.log(`Computer: ${computerChoice}`);

            if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
                humanScore += 1;
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            } else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
                computerScore += 1;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            } else if (humanChoice === computerChoice) {
                console.log(`It's a tie!`);
            }

            console.log(`Player score: ${humanScore}`);
            console.log(`Computer score: ${computerScore}`);
        };
    };
});
