"use strict";

let tryAgain = true;

do {
  let sum = 0;
  let userInput = parseInt(
    prompt("Enter any top number to sum \n from 1 through 100")
  );

  if (userInput < 1 || userInput > 100 || isNaN(userInput)) {
    alert("Please enter a number between 1 and 100");
  } else {
    for (let i = 0; i <= userInput; i++) {
      sum += i;
    }
    alert(`The sum of the numbers from 1 through ${userInput} is ${sum}`);
    tryAgain = prompt("Do another sum?").toLowerCase() === "y";
  }
} while (tryAgain);
