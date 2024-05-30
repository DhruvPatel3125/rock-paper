let uesrScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const uesrScor = document.querySelector("#user-score");
const compScor = document.querySelector("#comp-score");




const genCompChoice = () => {
    const options = ["Rock","Paper","Scissor"];
   const randIDX =  Math.floor(Math.random() * 3);
   return options[randIDX];
    //rock, paper, scissor
};

const drawgame = () => {
    msg.innerText = "Game was Draw.Play again.!!";
    msg.style.backgroundColor = "#081b30";
}

const showwinner = (userwin, userChoice, CompChoice) => {
    if(userwin){
        uesrScore++;
        uesrScor.innerText = uesrScore;
        console.log("you win!!");
        msg.innerText = `You win!! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }
     else{
        compScore++;
        compScor.innerText = compScore;
        msg.innerText = `You lose. ${CompChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};



const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //generate computer choice
    const CompChoice = genCompChoice();
    console.log("comp choice = ",CompChoice);

    if(userChoice === CompChoice){
        drawgame();
    } 
    else{
        let userwin = true;
        if(userChoice === "Rock"){
            //scissore, paper
            userwin = CompChoice === " Paper" ? false : true;
        } else if(userChoice === "Paper"){
            //rock, scissore
            userwin = CompChoice === "Scissors" ? false: true;
        } else{
            //rock, paper
            userwin = CompChoice === "Rock" ? false : true;
        }
        showwinner(userwin, userChoice, CompChoice);
    }
    };


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});