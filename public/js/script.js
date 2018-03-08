var guessesLeft = 14;
var wins = 0;
var losses = 0;

//Possible letter selections
var letterString = "abcdefghijklmnopqrstuvwxyz"

//Split letter selections into letter array
var letterArray = letterString.split("")

//Array of possible words
var computerGuessArray = ["obi wan kenobi", "anakin skywalker", "luke skywalker", "boba fett"]

var computerGuessNumber = 0
var computerGuess = []
var computerGuessHidden = []
var guessedLetters = []
var computerGuessString = ""
var guessedLetterString = ""


function lose() {
    losses += 1
    document.getElementById("losses").textContent = "Losses: " + losses;
}


function startGame() {
    guessesLeft = 14;
    computerGuessNumber = Math.floor(Math.random() * computerGuessArray.length)
    computerGuess = computerGuessArray[computerGuessNumber].split("")
    computerGuessHidden = computerGuessArray[computerGuessNumber].split("")

    //Looping through guessed word and replacing letters with "_" and spaces with nothing
    for (var i = 0; i < computerGuessHidden.length; i += 1) {
    
        if (computerGuessHidden[i] === " ") {
            computerGuessHidden.splice(i, 1, " ")
        } 
        else {
        computerGuessHidden.splice(i, 1, "_")
        }
        
        computerGuessString += computerGuessHidden[i]
    }
    document.getElementById("word").textContent = computerGuessString
}

startGame()

console.log(typeof computerGuessString)

document.getElementById("word").textContent = computerGuessString

document.addEventListener("keyup", function(event) {
 
    var userGuess = event.key.toLowerCase()
    var guessedIndex = letterArray.indexOf(userGuess)
    guessedLetterString = ""
    if (guessedIndex > -1) {

        guessedLetters.push(letterArray[guessedIndex])

        for (var i = 0; i < guessedLetters.length; i += 1) {
            guessedLetterString += guessedLetters[i] + " "
        }

        document.getElementById("guessed").textContent = guessedLetterString

        //Removing letter 
        letterArray.splice(guessedIndex, 1)
        if (computerGuess.indexOf(userGuess) > -1) {
            console.log("correct")
        } 
        else {
            guessesLeft -= 1
            document.getElementById("left").textContent = "Guesses Left: " + guessesLeft
            if (guessesLeft === 0) {
                lose()
                startGame()
            }
        }
    }
    else {
        alert("Please select a letter")
    }

})