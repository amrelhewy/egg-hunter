//// start game button
var startGameButton=document.querySelector('#startgame');
var difficulty=document.querySelector('select').children;
/// how to play
var htp=document.querySelector('#htp');
htp.addEventListener('click',function(){
alert("Use the left and right arrow keys to move the basket, try to catch as many eggs as you can before the time ends.");
});

/// start button activation
startGameButton.addEventListener('click',function(){
var userNameIn=document.getElementsByName('username')[0].value; //username to appear
localStorage.setItem("userName",userNameIn);
for(var i=0;i<4;i++)
{
    if(difficulty[i].selected)
    {
        localStorage.setItem("difficulty",difficulty[i].value);
    }
}
window.location.href='main_game.html';
})
