

$(document).ready(startApp);

var newGame;
var randomize;

function startApp(){
    newGame = new GuessGame();

    newGame.guess_start();
    newGame.secretNumber();
}