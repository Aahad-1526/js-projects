
function generateCircle(){
    let circle ="";
    for(let i =0; i<136; i++){
       let rn = Math.floor(Math.random()*10);
       circle = circle +`<div class="circle"><h2> ${rn} </h2></div>`;
    }

    document.querySelector(".pbtm").innerHTML=circle;
}

let time = 60;
function runTimer(){
    let timerInter =setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#timer").innerHTML =time;
        } else{
            clearInterval(timerInter);
            document.querySelector(".pbtm").innerHTML= `<h2> Game Over </h2>`;

        }
    },1000)
}

let rdn = 0;
function newTarget(){
    rdn =  Math.floor(Math.random()*10);
    document.querySelector("#target").innerHTML=rdn;
}




document.querySelector(".pbtm").addEventListener("click", function(gola){
    let clickedNumber = Number(gola.target.textContent);
    if(clickedNumber === rdn){
        scoreUpdate();
        generateCircle();
        newTarget();
        
    }
    
    
})

let score = 0;
function scoreUpdate(){
    document.querySelector("#score").innerHTML = score;
    score +=10;
}

scoreUpdate()
newTarget();
runTimer();
generateCircle();
