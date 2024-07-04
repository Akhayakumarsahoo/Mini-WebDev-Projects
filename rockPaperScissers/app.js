let user = 0;
let comp = 0;

let options = ["rock","paper","scissers"];

const msg = document.querySelector(".msg");
let userScore = document.querySelector(".user");
let compScore = document.querySelector(".computer");
const choices = document.querySelectorAll(".choices");

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        let rand = Math.floor(Math.random()*3);
        let compChoice = options[rand];
        check(choice.getAttribute("id"),compChoice) ;
    })
});

function check(userChoice,compChoice){
    if(userChoice === compChoice){
        msg.innerHTML = "Draw <br> Try Again";
        msg.style.backgroundColor = "#fcf803";
    }else if(compChoice == "rock"){
        if(userChoice == "scissers"){
           updation(compChoice,userChoice,false);
        }else{
            msg.innerHTML = "You loose <br> computer choose rock";
            updation(userChoice,compChoice,true);
        }
    }else if(compChoice == "paper"){
        if(userChoice == "rock"){
            updation(compChoice,userChoice,false);
        }else{
            updation(userChoice,compChoice,true);
        }
    }else{
        if(userChoice == "rock"){
            updation(userChoice,compChoice,true);
        }else{
            updation(compChoice,userChoice,false);
        }
    }
}

function updation(winner,looser,userWin){
    let score ;
    if(userWin === true){
        score = "won";
        userScore.innerText = ++user;
        msg.style.backgroundColor = "#35fc03";
    }else{
        score = "lost";
        compScore.innerText = ++comp;
        msg.style.backgroundColor = "#fc0303";
    }
    msg.innerHTML = `You ${score} <br> ${winner} beats ${looser}`;
}