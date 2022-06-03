"use strict";

let userInput;

while (userInput !== 999) {
  userInput = parseFloat(
    prompt(
      "Enter Fahrenheit temperature \nOr enter 999 to terminate the conversion"
    )
  );

  if (isNaN(userInput)) {
    alert("Please enter a valid number");
  } else if ((userInput < -100 || userInput > 212) && userInput !== 999) {
    alert(`You entered ${userInput}. \nEntry must range from -100 to +212.`);
  } else if (userInput !== 999) {
    let temperatureInCelsius = (userInput - 32) * (5 / 9);
    alert(
      `Fahrenheit temperature is ${userInput} \n\n Celsius temperature is ${temperatureInCelsius.toFixed(2)}`
    );
  }
}