let winningNumber = Math.round(Math.random() * 100);
console.log(winningNumber)
// let userGuess = +prompt("Enter a number between 0 - 9");
let userGuess;

while (userGuess !== winningNumber) {
  userGuess = Number(prompt("Enter a number between 0 - 100"));
  if (Number.isInteger(userGuess)) {
    if (userGuess > winningNumber) {
      alert("Guessed number is high");
    } else if (userGuess < winningNumber) {
      alert("Guessed number is low");
    }
  } else {
    
    alert(String(userGuess) + " is not a number");
  }
}
alert('You guessed the right number ' + userGuess)
