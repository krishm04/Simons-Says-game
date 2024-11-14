let gameSeq=[];
let userSeq=[];
let btn = ["red","yellow","purple","green"];
let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress",function()
{
    if(started == false)
    {
        console.log("Game start");
    started = true;
    }
    levelup();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
};

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    
    let randIndx = Math.floor(Math.random()* btn.length);
    let randColor = btn[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
};

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
        setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game over! Your socre was <b>${level}</b> </br> Press Any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}

function btnPress(){ 
    let btn = this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
};

let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns)
{
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}