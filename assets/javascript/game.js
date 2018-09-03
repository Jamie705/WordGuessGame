// alert("something");

// Creates list/array of abc's - need to use event key to listen for keys pressed
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// creating a list of word choices for player, this will be randomized 
var wordChoices = ["blood", "dead", "brains", "zombie", "evil", "guts"];
// var wordChoices = ["Resident Evil", "Zombieland", "Day of the Dead", "Night of the Living Dead", "World War Z", "Shaun of the Dead", "The Evil Dead", "I Am Legend", "The Crazies", "28 Days Later"];


// Creating variables to hold the number of wins, losses, guesses left and list of guessed letters.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuess = [];
var missedLog = [];
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
    document.querySelector('#missed').innerHTML = "Letters Already Guessed: " + missedLog.join(" ");
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    document.querySelector('#guessesleft').innerHTML = "Number of Guesses Remaining: " + guessesLeft;
    document.querySelector('#answerblank').innerHTML = "Answer: " + answerBlank.join(" ");
}
     
    // This function is run whenever the user presses a key. To start
    document.onkeyup = function (event) {
    getStarted = event.key;
    startGame();
    console.log("Start guessing some letters");
    
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

                //Searches for a letter in word, push letter to correctletters array, fill in blanks
                if (wordGuess.indexOf(lettersGuess) > -1) {
                    console.log(lettersGuess + ": You guessed a letter!");
                    for (var j = 0; j < wordGuess.length; j++) { 
                        if (wordGuess[j] === lettersGuess) {
                            answerBlank[j] = lettersGuess;
                            update();
                        // When user guesses the whole word)
                        if (answerBlank.join("") === wordGuess) {
                            wins++;
                            console.log("You have guessed correctly. You win. Press any key to restart.");
                            alert("Your alive, and escaped just in time. You win!");
                            reset();
                            update();
                        }           
                    }
                } 

                }
                // If user maxes guess, reset user guesses to 10 and letters guessed, had to use one because code would not run until after another keypress.
                else if (guessesLeft === 1) {
                    console.log("You ran out of guesses. You've been eaten by Zombies.");
                    losses++;
                    alert("You ran out of guesses. You've been eaten by Zombies.");
                    update();
                    reset();
                    update();
                }
                // If user does not match pc guess, decrement guesses left and push lettter to guessed letters.
                else {
                    (wordGuess.indexOf(lettersGuess) === -1);
                    guessesLeft--;
                    missedLog.push(lettersGuess);
                    console.log("Guess again.");
                    update();
                }
  
        }
    }

