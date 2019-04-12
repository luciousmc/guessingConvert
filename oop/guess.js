class GuessGame{
    constructor(){
        this.secretNumber = null;
        this.handleGuess = this.handleGuess.bind(this);
        this.randomize = new RandomGenerator();
    }
    guess_start(){
        this.secretNumber = this.pickRandomNumber(1,10);
        this.attachHandlers();
    }
    pickRandomNumber(min, max){

       this.randomize.generate();
       var number = this.randomize.getNum();

       return number;
    }
    attachHandlers(){
        $('#submitGuess').click( this.handleGuess );
        $('#userGuess').focus( this.clearGuess );
    }
    handleGuess(){
        var userGuess = parseInt( $('#userGuess').val());
        if(userGuess<1 || userGuess>10){
            displayResult('invalid range.  Must be between 1 and 10');
            return;
        }
        if(userGuess === this.secretNumber){
            this.displayResult('you got it!');
        } else if (userGuess < this.secretNumber){
            this.displayResult('too low!');
        } else if (userGuess > this.secretNumber){
            this.displayResult('too high!');
        }
    }
    clearGuess(){
        $("#userGuess").val('');
    }
    displayResult( message ){
        $("#display").text( message );
    }
}