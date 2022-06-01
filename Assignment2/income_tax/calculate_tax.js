"use strict";
var $ = function (id) {
    return document.getElementById(id);
};



window.onload = function () {
    $("calculate").onclick = processEntry;

    function processEntry() {
        const userInput = parseFloat($('income').value);
        if (isNaN(userInput) || userInput < 0) {
            alert('Please enter a valid number greater than 0');
        } else {
            const taxAmount = calculateTax(userInput);
            $('tax').value = taxAmount;
        }
        $('income').focus();
    }

    function calculateTax(taxableAmount) {
        if (taxableAmount <= 9275) {
            return getTaxAmount(9275, 10);
        } else if (taxableAmount <= 37650) {
            return 927.5 + getTaxAmount(taxableAmount - 9275, 15);
        } else if (taxableAmount <= 91150) {
            return 5183.75 + getTaxAmount(taxableAmount - 37650, 25);
        } else if (taxableAmount <= 190150) {
            return 18558.75 + getTaxAmount(taxableAmount - 91150, 28);
        } else if (taxableAmount <= 413350) {
            return 46278.75 + getTaxAmount(taxableAmount - 190150, 33);
        } else if (taxableAmount <= 415050) {
            return 119934.75 + getTaxAmount(taxableAmount - 413350, 35);
        } else {
            return 120529.75 + getTaxAmount(taxableAmount - 415050, 39.6);
        }
    }

    function getTaxAmount(taxableAmount, percent) {
        return (percent * taxableAmount) / 100;
    }
};

