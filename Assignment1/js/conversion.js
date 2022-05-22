'use strict';

let userInput = prompt('Enter Fahrenheit temperature');
let temperatureInCelsius = convertFahrenitToCelsius(userInput);
if (temperatureInCelsius) {
    alert(`Fahrenheit temperature is ${userInput} \n Celsius temperature is ${temperatureInCelsius}`);
}

function convertFahrenitToCelsius(fahrenheit) {
    let parsedFahrenheit = parseFloat(fahrenheit);
    if (Number.isNaN(parsedFahrenheit)) {
        alert('Please enter correct temperature in Fahrenheit!');
        return;
    }
    let temperatureInCelsius = (parsedFahrenheit - 32) * (5/9);
    return temperatureInCelsius.toFixed(2);
}