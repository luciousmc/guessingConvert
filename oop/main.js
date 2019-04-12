

$(document).ready(startApp);
var newGame;
function startApp(){
	newGame = new GuessGame();
	newGame.guess_start();
}