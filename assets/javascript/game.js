{/* <script type="text/javacscript"> */ }
var alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
var aryAlpha = alphabet.split(',');

// Counts set-up
var numWins = 0;
var numLosses = 0;
var numGuesses = 10;

document.getElementById("wins").innerHTML = numWins;
document.getElementById("losses").innerHTML = numLosses;
document.getElementById("guessesLeft").innerHTML = numGuesses;

function startGame() {
    // Reset the guesses back to 0.
    numGuesses = 10;

    // Solution is chosen randomly from aryAlpha.
    var computerGuess = aryAlpha[Math.floor(Math.random() * aryAlpha.length)];

    // Reset the wrong guesses 
    wrongGuesses = [];

    // Resets the guessesLeft to 10
    document.getElementById("guessesLeft").innerHTML = numGuesses;

    // Clears the wrong guesses from the previous round
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");
}

// Using keyboard to guess a letter
document.onkeyup = function (event) {

    var userGuess = event.key;
    var computerGuess = aryAlpha[Math.floor(Math.random() * aryAlpha.length)];

    if (numGuesses > 0) {
        // Possible outcomes of each userChoice vs computerChoice
        if (aryAlpha.indexOf(userGuess) >= 0) {
            // If the userGuess is the same as the computerGuess, the user wins that round and the game is restarted.    
            if (userGuess === computerGuess) {
                alert("You got it! The letter was " + computerGuess + "!");
                numWins = numWins + 1;
                document.getElementById("wins").innerHTML = numWins;
                startGame();
                // If the userGuess is not the same as the computerGuess, the Guesses Left is decreased and the letter guessed is recorded under "Letters Guessed".
            } else if (userGuess != computerGuess) {
                var node = document.createElement("span");
                var textnode = document.createTextNode(userGuess);
                node.appendChild(textnode);
                document.getElementById("wrongGuesses").appendChild(node);
                numGuesses = numGuesses - 1;
                document.getElementById("guessesLeft").innerHTML = numGuesses;
                console.log(numGuesses)
            }
        }
        // Once the Guesses Left countdown reaches "0", the user has lost that round and the game is restarted.
    } else {
        alert("You lost! The letter was " + computerGuess + "!");
        numLosses = numLosses + 1;
        document.getElementById("losses").innerHTML = numLosses;
        startGame();
    }
};




{/* </script> */ }