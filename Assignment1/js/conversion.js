"use strict";

while (true) {
  let userInput = prompt(
    "Enter Fahrenheit temperature \n Or enter 999 to terminate the conversion"
  );
  let temperatureInCelsius = convertFahrenitToCelsius(userInput);
  if (temperatureInCelsius) {
    alert(
      `Fahrenheit temperature is ${userInput} \n Celsius temperature is ${temperatureInCelsius}`
    );
  }
}

function convertFahrenitToCelsius(fahrenheit) {
  let parsedFahrenheit = parseFloat(fahrenheit);
  if (Number.isNaN(parsedFahrenheit)) {
    alert("Please enter correct temperature in Fahrenheit!");
    return;
  }

  if (parsedFahrenheit === 999) {
    exit();
  }

  if (parsedFahrenheit < -100 || parsedFahrenheit > 212) {
    alert(`You entered ${fahrenheit}. \n Entry must range from -100 to +212`);
    return;
  }

  let temperatureInCelsius = (parsedFahrenheit - 32) * (5 / 9);
  return temperatureInCelsius.toFixed(2);
}
