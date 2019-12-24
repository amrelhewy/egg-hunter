var finalscorefail=document.querySelector('#score');
finalscorefail.innerHTML='<span>Your Score was '+localStorage.getItem("finalScore")+'</span> <br></span> <br> <button type="button" id="main" class="btn btn-light">Main Menu</button> <button type="button" id="game" class="btn btn-light">Play Again</button>';
var redirectMain=document.querySelector('#main');
redirectMain.addEventListener('click',function(){
    window.location.href='startMenu.html';
});
var redirectGame=document.querySelector('#game');
redirectGame.addEventListener('click',function(){
window.location.href='main_game.html';
});

