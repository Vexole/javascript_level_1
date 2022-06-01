"use strict";

var $ = function (id) {
    return document.getElementById(id);
};

window.addEventListener('DOMContentLoaded', () => {
    function processEntry() {
        const userInput = parseInt($('cents').value);
        if (isNaN(userInput) || userInput < 0 || userInput > 99) {
            alert('Please enter a valid number between 0 and 99');
        } else {
            makeChange(userInput);
        }
    }

    function makeChange(userInput) {
        const quarters = parseInt(userInput / 25);
        let amountRemainingToChange = userInput % 25;
        const dimes = parseInt(amountRemainingToChange / 10);
        amountRemainingToChange = userInput % 10;
        const nickels = parseInt(amountRemainingToChange / 5);
        amountRemainingToChange = userInput % 5;
        const pennies = amountRemainingToChange;

        $('quarters').value = quarters;
        $('dimes').value = dimes;
        $('nickels').value = nickels;
        $('pennies').value = pennies;
    }

    $('calculate').addEventListener('click', processEntry);

});
