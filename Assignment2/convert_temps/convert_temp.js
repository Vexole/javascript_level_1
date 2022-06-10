"use strict";
var $ = function (id) { return document.getElementById(id); };


var clearTextBoxes = function () {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

const toFahrenheit = () => {
    $('degree_label_1').innerText = 'Enter C degrees:';
    $('degree_label_2').innerText = 'Degrees Fahrenheit:';
    clearTextBoxes();
    $("degrees_entered").focus();
};

const toCelsius = () => {
    $('degree_label_1').innerText = 'Enter F degrees:';
    $('degree_label_2').innerText = 'Degrees Celsius:';
    clearTextBoxes();
    $("degrees_entered").focus();
}

const convertTemp = () => {
    let convertedTemp = 0;
    const userInput = parseFloat($('degrees_entered').value);
    if (isNaN(userInput)) {
        alert('You must enter a valid number for degrees.');
    } else {
        if ($('to_celsius').checked) {
            convertedTemp = parseInt((userInput - 32) * (5 / 9));
        } else {
            convertedTemp = parseInt((userInput * (9 / 5)) + 32);
        }
        $('degrees_computed').value = convertedTemp;
    }
}

window.onload = function () {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
    $("degrees_entered").focus();
};