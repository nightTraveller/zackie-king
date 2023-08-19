function checkGuess() {
    var guess = parseInt(document.getElementById("guessInput").value);
    var randomNumber = math.floor(Math.random() * 10) + 1;

    if (guess === randomNumber) {
        document.getElementById("result").innerHTML = "congratulation! You Guessed it right!";
    } else{
        document.getElementById("result").innerHTML = "Sorry, the number was " + randomNumber + ". Try again!";
    }
}