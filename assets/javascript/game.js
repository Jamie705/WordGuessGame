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
var correctLetters = [];
var wordGuess ="";

//get started event variable
var getStarted = "";
//answer variable
var answerBlank =[];


function startGame() {
    // Randomly math to chooses a word from list. Computer picks.
    wordGuess = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    console.log("Computer guessed: " + wordGuess);
    answerBlank = [];
    for (var i = 0; i < wordGuess.length; i++) {
        answerBlank[i] = "_";
    }
}

//function to reset game
function reset() {
    guessesLeft = 10;
    lettersGuess = [];
    missedLog = [];
    wordGuess = "";
    startGame();
} 

//function to update html page
function update() {
    document.querySelector('#wins').innerHTML = "Wins: " + wins;
    document.querySelector('#missed').innerHTML = "Missed so far: " + missedLog;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    document.querySelector('#guessesleft').innerHTML = "Guesses left: " + guessesLeft;
    document.querySelector('#answerblank').innerHTML = answerBlank;
}
     
    // This function is run whenever the user presses a key. To start
    document.onkeyup = function (event) {
    getStarted = event.key;
    startGame();
    console.log("Start guessing some letters");
    
//   function startGame() {
//           // Randomly math to chooses a word from list. Computer picks.
//         wordGuess = wordChoices[Math.floor(Math.random() * wordChoices.length)];
//         console.log("Computer guessed: " + wordGuess);
//         answerBlank = [];
//         for (var i = 0; i < wordGuess.length; i++) {
//             answerBlank[i] = "_";
//         } 
//  }       
    // var wordGuess = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    // console.log("Computer guessed: " + wordGuess);      

    //create variable to push blank spaces equal to chars in wordGuess
        answerBlank = [];
        for (var i = 0; i < wordGuess.length; i++) {
            answerBlank[i] = "_"; 
        }
        console.log(answerBlank);
        document.querySelector('#answerblank').innerHTML= "Answer: " + answerBlank.join(" ");


        //create new event to log letters guessed
        document.onkeyup = function (event) {
        lettersGuess = event.key.toLowerCase();
        console.log("Letter guessed: " + lettersGuess);  

            // If user does not match pc guess, decrement guesses left and push lettter to guessed letters.
            // If statments for (win/loss/guesses left)
                if (answerBlank.join("") === wordGuess) {
                    wins++;
                    console.log("You have guessed correctly. You win.");
                    update();
                    reset();
                    startGame();
                    console.log("Press any key to restart.");
                }
                // If user maxes guess, reset user guesses to 10 and letters guessed
                else if (guessesLeft === 1) {
                    console.log("you ran out of guesses");
                    losses++;
                    update();
                    reset();
                    update();
                }
                    // If user does not match pc guess, decrement guesses left and push lettter to guessed letters.
                else if (wordGuess.indexOf(lettersGuess) === -1) {
                        guessesLeft--;
                        missedLog.push(lettersGuess);
                        console.log("Guess again.");
                        update();
                }
                // search for letter in word, push letter to correctletters array, fill in blanks;
                else if (wordGuess.indexOf(lettersGuess) > -1) {
                    console.log(lettersGuess + ": You guessed a letter!");
                    correctLetters.push(lettersGuess);
                    for (var j = 0; j < wordGuess.length; j++) { 
                        if (wordGuess[j] === lettersGuess) {
                            answerBlank[j] = lettersGuess;
                            update();
                            
                        }           
                    }
                }   
        }
    }

