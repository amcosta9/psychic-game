// declaring variables

var wins = 0
var losses = 0
var guessesLeft = 10
var guessesSoFar = [];

var guessCounter = 0

// these variables will affect what is displayed on actual page
var winsDisplay = document.getElementById("wins-d");
var lossesDisplay = document.getElementById("losses-d");
var guessesLeftDisplay = document.getElementById("guesses-left-d")
var guessesSoFarDisplay = document.getElementById("guesses-so-far-d")

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// computer picks a letter fromm letters array
// needs to hold on to this answer as user continues to guess
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
			console.log("Answer: " + computerGuess);

// game begins when user presses a key (and lets go of the key-on key up) -function called event is essentially the game being played.
	document.onkeyup = function(event) {
		var userGuess = event.key;
		console.log("You guessed (this will be an alert)" + userGuess);
		console.log("User Guess: " + userGuess);
		//adds user's guess to the guessesSoFar array
		guessesSoFar.push(userGuess);
		guessesLeft--;

		if (guessCounter < 10) {
				guessCounter++;
		}
		if (userGuess === computerGuess) {
			wins++;
			console.log("You got it! (this will be an alert)");
			console.log("Wins: " + wins);
		}
		if (userGuess != computerGuess) {
			console.log("nope, try again! (this will be an alert)");
			console.log("Number of Guesses: " + guessCounter);
		}
		//checking if user has guessed already, doesn't add to counter
		else if (guessesSoFar.indexOf(userGuess) >= 0) {
				alert("You already guessed that one!");
				guessesLeft++;
		}	
			
		else if (guessCounter === 10) {
				alert("Game Over, I was thinking of " + computerGuess);
		}
			return false;	
	} //end function(event)

		function clearFields() {
			counter = 0
			guessesLeft = 10
			guessesSoFar = [];
			computerGuess = letters[Math.floor(Math.random() * letters.length)];
			console.log("Answer: " + computerGuess);
			return false;
		}


		// calling event function
		// event(userGuess, computerGuess, guessesLeft, guessesSoFar);

		winsDisplay.textContent = wins;
		lossesDisplay.textContent = losses;
		guessesLeftDisplay.textContent = guessesLeft;
		guessesSoFarDisplay.textContent = guessesSoFar;

