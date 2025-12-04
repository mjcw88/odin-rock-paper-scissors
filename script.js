document.addEventListener("DOMContentLoaded", function() {
    const choices = ["rock", "paper", "scissors"];
    let humanScore = 0;
    let computerScore = 0;
    const maxScore = 5;
    
    function playRound(humanChoice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        const roundContainer = document.querySelector(".round-container");
        roundContainer.textContent = "";

        const humanContainer = document.createElement("div");
        roundContainer.appendChild(humanContainer);

        const humanChoiceHeader = document.createElement("div");
        humanChoiceHeader.textContent = `Player`;
        humanContainer.appendChild(humanChoiceHeader);

        const humanChoiceDiv = document.createElement("div");
        humanChoiceDiv.textContent = humanChoice;
        humanContainer.appendChild(humanChoiceDiv);

        const computerContainer = document.createElement("div");
        roundContainer.appendChild(computerContainer);

        const computerChoiceHeader = document.createElement("div");
        computerChoiceHeader.textContent = `Computer`;
        computerContainer.appendChild(computerChoiceHeader);

        const computerChoiceDiv = document.createElement("div");
        computerChoiceDiv.textContent = computerChoice;
        computerContainer.appendChild(computerChoiceDiv);

        if (humanChoice === computerChoice) {
            // Logic for tie
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
                   (humanChoice === "paper" && computerChoice === "rock") || 
                   (humanChoice === "scissors" && computerChoice === "paper")) {

            humanScore += 1;
            const container = document.getElementById("human-score");
            updateScore(container, humanScore);
        } else {
            computerScore += 1;
            const container = document.getElementById("computer-score");
            updateScore(container, computerScore);
        }
    };

    function updateScore(container, score) {
        container.textContent = score;

        if (humanScore === maxScore) {
            console.log("PLAYER WINS")
        } else if (computerScore === maxScore) {
            console.log("COMPUTER WINS")
        }
    };

    const humanChoices = document.querySelectorAll(".choices-btn");

    humanChoices.forEach((button) => {
        button.addEventListener("click", () => {
            if (humanScore < maxScore && computerScore < maxScore) {
                playRound(button.id.toLowerCase());
            };
        });
    });
});