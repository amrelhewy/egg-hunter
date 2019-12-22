var finalscoresucess=document.querySelector('#score');
finalscoresucess.innerHTML='<span>Your Score was '+localStorage.getItem("finalScore")+'</span> <br><input type="button" name="gomain" value="Main Menu" id="main"><input type="button" name="gogame" value="Play again" id="game">';
var redirectMain=document.querySelector('#main');
redirectMain.addEventListener('click',function(){
    window.location.href='startMenu.html';
});
var redirectGame=document.querySelector('#game');
redirectGame.addEventListener('click',function(){
window.location.href='main_game.html';
});

