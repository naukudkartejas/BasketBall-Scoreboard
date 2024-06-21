let scoreA = document.getElementById('scoreleft');
let scoreB = document.getElementById('scoreright');
resultel=document.getElementById('result');
function left1(){
    scoreA.textContent = parseInt(scoreA.textContent) + 1;
}
function left2(){
    scoreA.textContent = parseInt(scoreA.textContent) + 2;
}
function left3(){
    scoreA.textContent = parseInt(scoreA.textContent) + 3;
}
function right1(){
    
    scoreB.textContent = parseInt(scoreB.textContent) + 1;
}
function right2(){
    scoreB.textContent = parseInt(scoreB.textContent) + 2;
}
function right3(){
    scoreB.textContent = parseInt(scoreB.textContent) + 3;
}
function reset(){
    
    scoreA.textContent=0;
    scoreB.textContent=0;
}
function End(){
    if(scoreA.textContent >scoreB.textContent){
        
        resultel.textContent="Team A wins!"
        document.getElementById("result").style.display = "block";
        setTimeout(() => {
            document.getElementById("result").style.display = "none";
            reset();
        }, 3000);
    }
    else if(scoreA.textContent <scoreB.textContent){
        
        resultel.textContent="Team B wins!"
        document.getElementById("result").style.display = "block";
        setTimeout(() => {
            document.getElementById("result").style.display = "none";
            reset();
        }, 3000);
    }
    else{
        resultel.textContent="Its a Tie!"
        document.getElementById("result").style.display = "block";
        setTimeout(() => {
            document.getElementById("result").style.display = "none";
            reset();
        }, 3000);
    }
}