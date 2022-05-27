"use strict";
let userInput;

do {
  let letterGrade = "";
  userInput = parseFloat(
    prompt(
      "Enter number grade from 0 through 100 \nOr enter 999 to end entries"
    )
  );

  if (userInput >= 0 && userInput <= 100 && !isNaN(userInput)) {
    if (userInput >= 88 && userInput <= 100) {
      letterGrade = "A";
    } else if (userInput >= 80 && userInput <= 87) {
      letterGrade = "B";
    } else if (userInput >= 68 && userInput <= 79) {
      letterGrade = "C";
    } else if (userInput >= 60 && userInput <= 67) {
      letterGrade = "D";
    } else {
      letterGrade = "F";
    }
    alert(`Number grade = ${userInput} \nLetter grade = ${letterGrade}`);
  }
} while (userInput !== 999);
