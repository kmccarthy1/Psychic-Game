

var LetterBank = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z"]


var wins = 0;
var losses = 0; 
var guessesLeft, guessedLetters, letterToGuess;

resetGame();

document.onkeyup = function(event) {
    var UserGuess = event.key;
    var ComputerGuess = LetterBank[Math.floor(Math.random() * LetterBank.length)];


    if ( UserGuess === ComputerGuess){
        wins++
    }else if  
        (guessesLeft -1 === 0) {
            lost();
    }
    else { 
        resetGame(); 
        losses--       
    }

    
}

window.onload = function display () {
    var winsP = document.getElementById("#wins");
    var losesP = document.getElementById("#losses");
    var guessLeft = document.getElementById("#guessesLeft");
    var letterGuessed = document.getElementById("#guessed");

}

function win(){
    wins++
    resetGame();
}

function lost () {
    losses++;
    resetGame();
}

function fail() {
    guessesLeft--;
    guessedLetters.push(letter);
}

function resetGame() {
    guessesLeft = 10;
    guessedLetters = [];
    letterToGuess = LetterBank[Math.floor(Math.random() * LetterBank.length)];
    console.log ("Letter to guess: " + letterToGuess);
}

var html = "<h1>The Psychic Game<h1>" + "<p>Guess which letter I'm thinking of<p>" + " <p> Wins: </p> " + wins + " <p> Losses: </p>" + losses + "<p> Guesses Left: </p> " + guessesLeft + "<p>Letters Guessed so far: </p>" + guessedLetters;

document.querySelector("#game").innerHTML = html;
