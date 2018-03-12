var guessesLeft = 14;
var wins = 0;
var losses = 0;

//Possible letter selections
var letterString = "abcdefghijklmnopqrstuvwxyz"

//Split letter selections into letter array
var letterArray = []

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
    document.getElementById("result").innerHTML = "Sorry.  You failed to guess " + computerGuessString + " correctly."
}

function win(computerGuessString) {
    wins += 1
    document.getElementById("wins").textContent = "Wins: " + wins;
    document.getElementById("word").innerHTML = " ";
    document.getElementById("result").innerHTML = "Congrats.  You guessed " + computerGuessString + " correctly!"

}


function startGame() {
    console.log("start game")
    document.getElementById("word").textContent = "This is a test"

    console.log(document.getElementById("word"))
    console.log("should fire")
    letterArray = letterString.split("")
    guessedLetters = []
    document.getElementById("guessed").textContent = " "
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

document.getElementById("word").textContent = computerGuessString


// Event listener for keyup
document.addEventListener("keyup", function(event) {
    document.getElementById("result").innerHTML = ""
    console.log(document.getElementById("word")) 
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
            computerGuessString = ""
            for (var i = 0; i < computerGuess.length; i += 1) {
                if (computerGuess[i].indexOf(userGuess) > -1) {
                    computerGuessHidden.splice(i, 1, userGuess)
   
                }
                else {

                }
                computerGuessString += computerGuessHidden[i]
                
            }


            document.getElementById("word").textContent = computerGuessString
            if (computerGuessHidden.indexOf("_") === -1) {
                document.getElementById("word").textContent = ""
                console.log(document.getElementById("word"))
                win(computerGuessString)
                computerGuessString = ""
                startGame()
            }
        } 
        else {
            guessesLeft -= 1
            document.getElementById("left").textContent = "Guesses Left: " + guessesLeft
            if (guessesLeft === 0) {
                lose()
                computerGuessString = ""
                startGame()
            }
        }
    }
    else if (guessedLetters.indexOf(userGuess) > -1) {
        alert("You've already guessed that letter.  Select a new one.")
    } else {
        alert("That's not a letter!  Select a letter.")
    }

})