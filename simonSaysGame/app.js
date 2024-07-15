let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "orange", "blue"];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let start = document.querySelector(".start");

start.addEventListener("click", function () {
    if (started == false) {
        h3.innerHTML = ``;
        started = true;
        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    start.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    setTimeout(function () {
        compFlash(randBtn);
    }, 500);
}
function compFlash(randBtn) {
    randBtn.classList.add("black");
    setTimeout(function () {
        randBtn.classList.remove("black")
    }, 400);
}
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 200);
}

function btnPress() {
    if (started == true) {
        let btn = this;
        let userColor = btn.getAttribute("id");
        userSeq.push(userColor);
        btnFlash(btn);

        checkAns(userSeq.length - 1);
    }
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `GAME OVER! <br> Your score is <b>${level}</b> <br>`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reSet();
    }
}
function reSet() {
    start.innerText = "RESTART";
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}