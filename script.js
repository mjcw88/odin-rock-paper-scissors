
document.addEventListener("DOMContentLoaded", function() {
    const choices = ["rock", "paper", "scissors"];
    const humanChoices = document.querySelectorAll(".choices-btn");
    const resetBtn = document.querySelector(".reset-button");
    const maxScore = 5;
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        const roundContainer = document.querySelector(".round-container");
        roundContainer.textContent = "";

        const resultsContainer = document.getElementById("round-result");
        resultsContainer.textContent = "";

        displayChoice(roundContainer, `Player`, humanChoice);
        displayChoice(roundContainer, `Computer`, computerChoice,);

        if (humanChoice === computerChoice) {
            resultsContainer.textContent = "It's a tie!";
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
                   (humanChoice === "paper" && computerChoice === "rock") || 
                   (humanChoice === "scissors" && computerChoice === "paper")) {
            resultsContainer.textContent = `You win! ${capitalizeWord(humanChoice)} beats ${computerChoice}.`        

            const container = document.getElementById("human-score");
            humanScore += 1;
            updateScore(container, humanScore);
        } else {
            resultsContainer.textContent = `You lose! ${capitalizeWord(computerChoice)} beats ${humanChoice}.`;
            
            const container = document.getElementById("computer-score");
            computerScore += 1;
            updateScore(container, computerScore);
        }
    };

    function displayChoice(container, playerType, choice) {
        switch(choice) {
            case "rock":
                choice = "🪨";
                break;
            case "paper":
                choice = "📃";
                break;
            case "scissors":
                choice = "✂️";
                break;
        }

        const playerContainer = document.createElement("div");
        playerContainer.className = "player-choice";
        container.appendChild(playerContainer);

        const choiceHeader = document.createElement("div");
        choiceHeader.textContent = playerType;
        playerContainer.appendChild(choiceHeader);

        const choiceDiv = document.createElement("div");
        choiceDiv.className = "round-choice";
        choiceDiv.textContent = choice;
        playerContainer.appendChild(choiceDiv);
    };

    function capitalizeWord(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    function updateScore(container, score) {
        const finalResultContainer = document.getElementById("final-result");
        container.textContent = score;

        if (humanScore === maxScore) {
            finalResultContainer.textContent = `You win! Congratulations!`;
            finalResultContainer.hidden = false;
            resetBtn.hidden = false;
        } else if (computerScore === maxScore) {
            finalResultContainer.textContent = `You lose! Better luck next time!`;
            finalResultContainer.hidden = false;
            resetBtn.hidden = false;
        }
    };

    function resetGame(resetBtn) {
        const humanScoreContainer = document.getElementById("human-score");
        humanScore = 0;
        updateScore(humanScoreContainer, humanScore);

        const computerScoreContainer = document.getElementById("computer-score");
        computerScore = 0;
        updateScore(computerScoreContainer, computerScore);

        const roundContainer = document.querySelector(".round-container");
        roundContainer.textContent = "";

        const resultsContainer = document.getElementById("round-result");
        resultsContainer.textContent = "";

        const finalResultContainer = document.getElementById("final-result");
        finalResultContainer.textContent = "";
        
        finalResultContainer.hidden = true;
        resetBtn.hidden = true;
    };

    humanChoices.forEach((button) => {
        button.addEventListener("click", () => {
            if (humanScore < maxScore && computerScore < maxScore) {
                playRound(button.id.toLowerCase());
            };
        });
    });

    resetBtn.addEventListener("click", () => {
        resetGame(resetBtn);
    });
});
