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
  } else if (userInput !== 999) {
    let temperatureInCelsius = convertFahrenitToCelsius(userInput);
    if (temperatureInCelsius) {
      alert(
        `Fahrenheit temperature is ${userInput} \n\n Celsius temperature is ${temperatureInCelsius}`
      );
    }
  }
}

function convertFahrenitToCelsius(fahrenheit) {
  if (fahrenheit < -100 || fahrenheit > 212) {
    alert(`You entered ${fahrenheit}. \n Entry must range from -100 to +212.`);
    return;
  }

  let temperatureInCelsius = (fahrenheit - 32) * (5 / 9);
  return temperatureInCelsius.toFixed(2);
}
