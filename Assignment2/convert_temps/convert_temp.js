"use strict";
var $ = function (id) { return document.getElementById(id); };

/*
    declaring a function named clearTextBoxes to clear the input fields
*/
var clearTextBoxes = function () {
    // assigning an empty value to the input field with id degrees_entered
    $("degrees_entered").value = "";
    // assigning an empty value to the input field with id degrees_computed
    $("degrees_computed").value = "";
};

/*
    declaring the toFahrenheit function that is executed when the user clicks on
    the second radio button.
*/
const toFahrenheit = () => {
    // setting the value of label with id degree_label_1 to Enter C degrees:
    $('degree_label_1').innerText = 'Enter C degrees:';
    // setting the value of label with id degree_label_2 to Degrees Fahrenheit:
    $('degree_label_2').innerText = 'Degrees Fahrenheit:';
    // call the clearTextBoxes function to clear the text boxes
    clearTextBoxes();
    // focusing on the input field with id degrees_entered
    $("degrees_entered").focus();
};

/*
    declaring the toCelsius function that is executed when the user clicks on
    the first radio button.
*/
const toCelsius = () => {
    // setting the value of label with id degree_label_1 to Enter F degrees:
    $('degree_label_1').innerText = 'Enter F degrees:';
    // setting the value of label with id degree_label_2 to Degrees Celsius:
    $('degree_label_2').innerText = 'Degrees Celsius:';
    // call the clearTextBoxes function to clear the text boxes
    clearTextBoxes();
    // focusing on the input field with id degrees_entered
    $("degrees_entered").focus();
}

/* 
    declaring function named convertTemp that calculate the temperature based on which button is 
    checked.
*/
const convertTemp = () => {
    // initializing a variable named convertedTemp to 0
    let convertedTemp = 0;
    /*
        getting the input from user from the input field with id degrees_entered, converting it to 
        float and assigning it to a variable userInput.
    */
    const userInput = parseFloat($('degrees_entered').value);
    // condition to check if the user input is not a number
    if (isNaN(userInput)) {
        // if the user input is not a number, show an alert box with message
        alert('You must enter a valid number for degrees.');
    } 
    // the else block will be executed when the user input is a number
    else {
        // check if the radio button with id to_celsius is checked
        if ($('to_celsius').checked) {
            /* 
                To convert Fahrenheit to Celsius, first subtract 32 from the Fahrenheit temperature,
                and then multiply that result by 5/9. And round off to 0 digits.
            */
            convertedTemp = parseFloat((userInput - 32) * (5 / 9)).toFixed(0);
        } 
        // the else block will be executed when the above condition fails
        else {
            /*
                To convert Celsius to Fahrenheit, first multiply Celsius by 9/5, and then add 32.
                And round off to 0 digits.
             */
            convertedTemp = parseFloat((userInput * (9 / 5)) + 32).toFixed(0);
        }
        // assigning the converted value to the input field with id degrees_computed
        $('degrees_computed').value = convertedTemp;
    }
}

window.onload = function () {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
    $("degrees_entered").focus();
};