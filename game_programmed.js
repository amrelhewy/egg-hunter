function User()
{
    this.userName="defualtUser";
    this.score=0;
function setName(uName)
{this.userName=uName;}
function setScore(scorel)
{
    this.score=scorel;
}
}
var newUser=new User();

// getting back difficulty
var difficulty=localStorage.getItem("difficulty");
//// main body
var mainBody=document.querySelector('body');
/////// username
var userNametoEnter=document.querySelector('.userName');
userNametoEnter.innerText='User: '+localStorage.getItem("userName");



// Score Counter
var gameTimer=20;
var scoreCounter=0;
var displayScore=document.querySelector('.score');
displayScore.innerText='Score: '+scoreCounter;
// Timer
var clockTick=new Audio('music/clocktick.mp3');
var timerCountdown=document.querySelector('#timer');
timerCountdown.innerText=gameTimer;
var timerSet=setInterval(() => {
    gameTimer--;
    timerCountdown.innerText=gameTimer;
    if(gameTimer<5)
    {
        timerCountdown.style.color='red';
      clockTick.play();

    }
    if(gameTimer==0)
    {  clockTick.pause();
        clearInterval(timerSet);
    }

    
}, 1000);


// Basket Movement
var basket=document.querySelector('.mainbasket');
var left=50;
var movingBasket=addEventListener('keydown',function(e){
    console.log(e.keyCode)
    
    if(e.keyCode==37)
    {   
        if(left>0)
        left-=5;
        basket.style.left=left+'%';

       
    }
    else if(e.keyCode==39)
    {   
        if(left<95-parseInt(basket.style.width)*100/window.innerWidth)
        {
            left+=5;
        basket.style.left=left+'%';

        }
        
    }

});
/// cool egg crash sound
var eggCrashSound=new Audio('music/eggcrack.mp3');
// cooler egg catch sound
var eggcatchSound=new Audio('music/eggcatch.mp3');
/// Creating Eggs
var eggLeft;
var eggBottom;


//////////////////////////////////////////////////// egg drop function //////////////////////////////////////////
function eggDropOnce(e)
{  //creating an egg
    var egg=document.createElement('img');
    egg.setAttribute('src','images/egg.png');
    egg.setAttribute('style','width:80px;height:80px;position:absolute;bottom:100%;left:0%;');
    var crashedEgg=document.createElement('img');
    crashedEgg.setAttribute('src','images/eggCrash.png');
    crashedEgg.setAttribute('style','width:50px;height:50px;position:absolute;bottom:0%;left:0%');

///////////////

eggBottom=100;
eggLeft=Math.floor(Math.random()*96);
egg.style.left=eggLeft+'%';

//////////////Setting levels to this stupid game ////////////////////////

if(difficulty==0 || difficulty==1)
{
    var eggTravel=setInterval(() => {
        mainBody.appendChild(egg);
         eggBottom-=5;
        egg.style.bottom=eggBottom+'%';
    ////////////////////////////////// egg catched by basket //////////////////////////////
        if(parseInt(egg.style.bottom)<5 && Math.abs(parseInt(egg.style.left)-parseInt(basket.style.left))<5)
        {
            mainBody.removeChild(egg);
            eggcatchSound.play();
            scoreCounter++;
            if(scoreCounter==10) ////////////if he wins before time
{
    localStorage.setItem("finalScore",scoreCounter);
    
    window.location.replace('scoresheetsuccess.html');
     clearInterval(eggTravel);
     clearInterval(eggDrop);
    
};
            displayScore.innerText='Score: '+scoreCounter;
            clearInterval(eggTravel);
            
        }
    
                                                                   ////////////////////////////////////
        if(parseInt(egg.style.bottom)<0)/////egg reached bottom
        {
            mainBody.removeChild(egg);
            
            clearInterval(eggTravel);
            crashedEgg.style.left=egg.style.left;
    
            mainBody.appendChild(crashedEgg); // cool egg reaction lol
            eggCrashSound.play()//cool egg sound
            setTimeout(() => {
                mainBody.removeChild(crashedEgg);
    
            }, 3000);
           
    
           
        }
    }, 70);    //egg travel time
    

}
 else if(difficulty==2)
 {
    var eggTravel=setInterval(() => {
        mainBody.appendChild(egg);
         eggBottom-=5;
        egg.style.bottom=eggBottom+'%';
    ////////////////////////////////// egg catched by basket //////////////////////////////
        if(parseInt(egg.style.bottom)<5 && Math.abs(parseInt(egg.style.left)-parseInt(basket.style.left))<5)
        {
            mainBody.removeChild(egg);
            eggcatchSound.play();
            scoreCounter++;
            if(scoreCounter==10) ////////////if he wins before time
            {
                localStorage.setItem("finalScore",scoreCounter);
                
                window.location.replace('scoresheetsuccess.html');
                clearInterval(eggTravel);
                clearInterval(eggDrop);
                
            };
                        displayScore.innerText='Score: '+scoreCounter;
                        clearInterval(eggTravel);
                        
            displayScore.innerText='Score: '+scoreCounter;
            clearInterval(eggTravel);
            
        }
    
                                                                   ////////////////////////////////////
        if(parseInt(egg.style.bottom)<0)/////egg reached bottom
        {
            mainBody.removeChild(egg);
            
            clearInterval(eggTravel);
            crashedEgg.style.left=egg.style.left;
    
            mainBody.appendChild(crashedEgg); // cool egg reaction lol
            eggCrashSound.play()//cool egg sound
            setTimeout(() => {
                mainBody.removeChild(crashedEgg);
    
            }, 3000);
           
    
           
        }
    }, 40);    //egg travel time
    
 }

 else if(difficulty==3)
 {
    var eggTravel=setInterval(() => {
        mainBody.appendChild(egg);
         eggBottom-=5;
        egg.style.bottom=eggBottom+'%';
    ////////////////////////////////// egg catched by basket //////////////////////////////
        if(parseInt(egg.style.bottom)<5 && Math.abs(parseInt(egg.style.left)-parseInt(basket.style.left))<5)
        {
            mainBody.removeChild(egg);
            eggcatchSound.play();
            scoreCounter++;
            if(scoreCounter==10) ////////////if he wins before time
            {
                localStorage.setItem("finalScore",scoreCounter);
                
                window.location.replace('scoresheetsuccess.html');
                clearInterval(eggTravel);
                clearInterval(eggDrop);
                
            };
                        displayScore.innerText='Score: '+scoreCounter;
                        clearInterval(eggTravel);
                        
            displayScore.innerText='Score: '+scoreCounter;
            clearInterval(eggTravel);
            
        }
    
                                                                   ////////////////////////////////////
        if(parseInt(egg.style.bottom)<0)/////egg reached bottom
        {
            mainBody.removeChild(egg);
            
            clearInterval(eggTravel);
            crashedEgg.style.left=egg.style.left;
    
            mainBody.appendChild(crashedEgg); // cool egg reaction lol
            eggCrashSound.play()//cool egg sound
            setTimeout(() => {
                mainBody.removeChild(crashedEgg);
    
            }, 3000);
           
    
           
        }
    }, 15);    //egg travel time
    
 }
 


/////
}

var eggDrop=setInterval(eggDropOnce, 1500); //interval between eggs
setTimeout(() => {
    clearInterval(eggDrop);
    
}, 20000);
/////////////////////////////////////////// When game finishes //////////////////////////
setTimeout(() => {
    if(scoreCounter>=10)
    {
    localStorage.setItem("finalScore",scoreCounter);
    
    window.location.replace('scoresheetsuccess.html');
    

    }
    else
    {
       
        localStorage.setItem("finalScore",scoreCounter);
        window.location.replace('scoresheetfail.html');

    }
    
    
}, 20000);

////////////////////////// GOLDEN EGG ////////////////////////////////

setTimeout(() => {
    //creating an egg
    var gegg=document.createElement('img');
    gegg.setAttribute('src','images/goldenegg.png');
    gegg.setAttribute('style','width:100px;height:100px;position:absolute;bottom:100%;left:0%;');
    var crashedEgg=document.createElement('img');
    crashedEgg.setAttribute('src','images/eggCrash.png');
    crashedEgg.setAttribute('style','width:70px;height:70px;position:absolute;bottom:0%;left:0%');

var geggBottom=100;
var geggLeft=Math.floor(Math.random()*96);
gegg.style.left=eggLeft+'%';
var geggTravel=setInterval(() => {
    mainBody.appendChild(gegg);
     geggBottom-=5;
    gegg.style.bottom=geggBottom+'%';
////////////////////////////////// egg catched by basket //////////////////////////////
    if(parseInt(gegg.style.bottom)<5 && Math.abs(parseInt(gegg.style.left)-parseInt(basket.style.left))<5)
    {
        mainBody.removeChild(gegg);
        eggcatchSound.play();
        scoreCounter+=5;
        if(scoreCounter>=10) ////////////if he wins before time
{
localStorage.setItem("finalScore",scoreCounter);

window.location.replace('scoresheetsuccess.html');
 clearInterval(geggTravel);
 clearInterval(eggDrop);

};
        displayScore.innerText='Score: '+scoreCounter;
        clearInterval(geggTravel);
        
    }

                                                               ////////////////////////////////////
    if(parseInt(gegg.style.bottom)<0)/////egg reached bottom
    {
        mainBody.removeChild(gegg);
        
        clearInterval(geggTravel);
        crashedEgg.style.left=gegg.style.left;

        mainBody.appendChild(crashedEgg); // cool egg reaction lol
        eggCrashSound.play()//cool egg sound
        setTimeout(() => {
            mainBody.removeChild(crashedEgg);

        }, 3000);
       

       
    }
}, 50);    //egg travel time



    
}, Math.ceil(Math.random()*20000));





