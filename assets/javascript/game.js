
console.log("The Psychic Game");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var loses = 0;
var counter = 0;
var userGuess;
var mysteryLetter;
var guessesLeft = 9;
var guessedLetters = [];



document.onkeyup = function (event) {

    userGuess = event.key;
    guessedLetters.push(userGuess);

    mysteryLetter = letters[Math.floor(Math.random() * letters.length)];
    // console.log(mysteryLetter);

    if (userGuess === mysteryLetter) {
        wins++;
        reset();
    }
    else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        loses++;
        reset();

    }

    var html = "<h1> The Psychic Game</h>" +
        "<p>Guess what letter i'm thinking of: </p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + loses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + guessedLetters + "</p>";

    document.querySelector("#game").innerHTML = html;
}

function reset() {
    guessesLeft = 9;
    guessedLetters = [];
    mysteryLetter = letters[Math.floor(Math.random() * letters.length)];
    
}

