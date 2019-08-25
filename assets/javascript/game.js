

var LetterBank = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z"]


var wins = 0;
var losses = 0; 
var guessesLeft = 12;
var guessesSoFar = [];

    function reset () {
            guessesLeft = 12;
            guessesSoFar = [];
            ComputerGuess = LetterBank[Math.floor(Math.random() * LetterBank.length)];
            console.log(ComputerGuess)
    }
        reset();

    function newWord () {
        guessesSoFar = [];
        guessesLeft = 12;
        ComputerGuess = LetterBank[Math.floor(Math.random() * LetterBank.length)];
        console.log(ComputerGuess)
    }

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (!/[a-z]/.test(userGuess)) {
        alert ("Please choose any letter 'a' through 'z'")
        guessesLeft++;
    }
    if (guessesSoFar.indexOf(userGuess)=== -1) {
        guessesSoFar.push(userGuess);
    }
    else {
        alert ("You've already guessed this letter, please choose another one");
        guessesLeft++;
    }


    if (userGuess === ComputerGuess) {
        wins++;
        alert ("That is correct! Let's try again with a different letter...");
        newWord();
    }

    else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        alert ("You've lost, sorry loser")
        losses++;
        reset ();
    }

        document.querySelector('#wins').innerHTML = "Win: " + wins;
        document.querySelector('#losses').innerHTML = "Loss: " +losses;
        document.querySelector('#guessesLeft').innerHTML = "Number of guess left: " + guessesLeft;
        document.querySelector('#guessesSoFar').innerHTML = " Your guess so far: " + guessesSoFar;

};











