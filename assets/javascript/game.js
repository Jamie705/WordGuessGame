// alert("something");

// Creates list/array of abc's - need to use event key to listen for keys pressed
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// creating a list of word choices for player, this will be randomized 
var wordChoices = ["cat", "dog", "cow", "pig"];
// var wordChoices = ["Resident Evil", "Zombieland", "Day of the Dead", "Night of the Living Dead", "World War Z", "Shaun of the Dead", "The Evil Dead", "I Am Legend", "The Crazies", "28 Days Later"];

// Creating variables to hold the number of wins, losses, guesses left and list of guessed letters.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuess = [];
var missedLog = [];
var wordGuess ="";
var lettersLeft =[];
//get started event variable
var getStarted = "";
//answer variable
var answerBlank = [];

//function to reset game
function reset() {
    guessesLeft = 10;
    lettersGuess = [];
}    
// This function is run whenever the user presses a key. To start
document.onkeyup = function (event) {
getStarted = event.key;
console.log("Start guessing some letters");

// Randomly math to chooses a word from list. Computer picks.
var wordGuess = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log("Computer guessed: " + wordGuess);  

//create variable to push blank spaces equal to chars in wordGuess
answerBlank = [];
for (var i = 0; i < wordGuess.length; i++) {
    answerBlank[i] = "_"; 
}
console.log(answerBlank);
answerBlank= answerBlank.join(" ");
document.querySelector('#answerblank').innerHTML= "Answer: " + answerBlank;
      
    //create new event to log letters guessed
    document.onkeyup = function (event) {
    lettersGuess = event.key;
    console.log("Letter guessed: " + lettersGuess);  

    // If user does not match pc guess, decrement guesses left and push lettter to guessed letters.
    // If statments for (win/loss/guesses left)
    if (wordGuess.indexOf(lettersGuess) > -1) {
        console.log(lettersGuess + ": You guessed a letter!");
        for (var j = 0; j < wordGuess.length; j++) { 
            if (wordGuess[j] === lettersGuess) {
                answerBlank[j]= lettersGuess[j];
                console.log(answerBlank);
            }
        }
    }

    if (wordGuess.indexOf(lettersGuess) < -1) {
        missedLog.push(lettersGuess);
        guessesLeft--;
        console.log(lettersGuess + ":is not in the secret word");
    } 

    if (wordGuess.length === lettersGuess.length) {
        wins++;
        reset();
        console.log("You have guessed the word correctly. You win.");
    }

    // if (guessesLeft === 0)
    //     losses++;
    //     console.log("You ran out of guesses.Game Over");
    //     reset();
    }

//update HTML to show wins, losses, guesses left and letters guessed
    document.querySelector('#wins').innerHTML = "Wins: " + wins;
    document.querySelector('#missed').innerHTML = "Missed so far: " + missedLog;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    document.querySelector('#guessesleft').innerHTML = "Guesses left: " + guessesLeft;

}