var letterString = "abcdefghijklmnopqrstuvwxyz"

var letterArray = letterString.split("")

var computerGuessArray = ["Obi Wan Kenobi", "Anakin Skywalker", "Luke Skywalker", "Boba Fett"]

var computerGuessNumber = Math.floor(Math.random() * 4)

var computerGuess = computerGuessArray[computerGuessNumber].split("")

console.log(computerGuess)

var computerGuessHidden = computerGuess

var computerGuessString = ""

console.log(typeof computerGuess)

for (var i = 0; i < computerGuessHidden.length; i += 1) {
    
    if (computerGuessHidden[i] === " ") {
        computerGuessHidden["test: " + i]
        computerGuessHidden.splice(i, 1, " ")
    } else {
        console.log(i)
    computerGuessHidden.splice(i, 1, "_")

    }
    computerGuessString += computerGuessHidden[i]
}
console.log(typeof computerGuessString)
console.log(computerGuessString)

document.getElementById("word").textContent = computerGuessString

document.addEventListener("keyup", function(event) {
 console.log(event.key)
 var userGuess = event.key
    console.log(typeof userGuess)
 if (computerGuess.indexOf(userGuess) > -1) {
     console.log("correct")
 } else {
     console.log("incorrect")
 }

})