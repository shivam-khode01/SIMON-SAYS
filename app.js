let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
    }
    levelup();
});
//flash event function & game seq
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 1000);
}
function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    gameseq.push(randColor);
    let randBtn = document.querySelector(`.${randColor}`);

    btnflash(randBtn);
}
//check seqeunce 
function checkAns(idx) {
    //console.log("current level :", level);
   
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML= `Game over! your score was <b>${level}</br> press any key to start.`;
        document.querySelector('.game-container').classList.add('game-over');
        setTimeout(function() {
            document.querySelector('.game-container').classList.remove('game-over');
        }, 150);
        reset();
    }
}
//user seq
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 1000);
}
function btnpress() {
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id")
    userseq.push(usercolor)
    checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}
function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}