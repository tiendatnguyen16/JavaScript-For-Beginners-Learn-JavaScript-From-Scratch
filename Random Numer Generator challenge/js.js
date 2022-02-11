let userInput = prompt("Please input a number: ");
let numberEntered = parseInt(userInput);
document.write(Math.floor(Math.random() * numberEntered) + 1);