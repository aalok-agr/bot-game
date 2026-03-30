let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompCho = () => {
    const options = ["rock", "paper", "scissors"];
    const romidx = Math.floor(Math.random()*3);
    return options[romidx];
};

const drawGame = () => {
    msg.innerText = "Game was Drawn, Play again."
    msg.style.backgroundColor = "#998FC7";
    msg.style.color = "#F9F5FF";
};

const showWinner = (useWin, userChoice, compChoice) => {
    if(useWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "#14248A";
        msg.style.color = "#615B7A";
    } else {
        compScore++; 
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "#28262C";
        msg.style.color = "#878DC5";
    };
};

const playGame = (userChoice) => {
    // Computer Choice
    const compChoice = genCompCho();

    if(userChoice === compChoice) {
        //drawn game
        drawGame();
    } else {
        let useWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            useWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //scissors, rock
            useWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            useWin = compChoice === "rock" ? false : true;
        }
        showWinner(useWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});