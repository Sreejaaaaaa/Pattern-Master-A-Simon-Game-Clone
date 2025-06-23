let gameseq=[];
let userseq=[];

let boxes=["one","two","three","four"];

let start=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(start==false)
    {
        console.log("game started");
        start=true;    
        
        levelup();
    }
});

function box_flash(box){
    box.classList.add("flash");

    setTimeout(function(){
        box.classList.remove("flash")
    },350);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText= `level ${level}`;
    
    let randIndex= Math.floor(Math.random()*3);
    let randomColor=boxes[randIndex];
    let randombox=document.querySelector(`.${randomColor}`);
    
    gameseq.push(randomColor);
    console.log(gameseq);

    box_flash(randombox);
}


function checkAns(idx){
    
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup,1000);
        }
        
    }
    else{
        h2.innerHTML=`Game Over, Your score was ${level}<br> Press key to start over`;
        document.querySelector("body").style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor='white';
        },150);
        reset();
    }
}

function boxpress(){
    console.log("box pressed");
    let box=this;
    box_flash(box);

    userColor=box.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
    
}

let allboxes=document.querySelectorAll(".box");
for (box of allboxes)
{
    box.addEventListener("click", boxpress);
}


function reset(){
    start= false;
    gameseq=[];
    userseq=[];
    level=0;
}

