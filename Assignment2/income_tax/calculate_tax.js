"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

const processEntry = () => {
    // get the user input from the input field with id income and parse it to float
    const userInput = parseFloat($('income').value);
    // check if the user input is not a number or < 0
    if (isNaN(userInput) || userInput <= 0) {
        // if the user input is not a number or < 0, display an alert with message
        alert('Please enter a valid number greater than 0');
    } 
    // if the above condition fails, the else block will be executed
    else {
        // call calculateTax function with userInput as argument and assign it to a taxAmount variable
        const taxAmount = calculateTax(userInput);
        // assign the calculated taxAmount to the input field with id tax
        $('tax').value = taxAmount;
    }
    // focus on the input field with id income
    $('income').focus();
}

/*
    declaring a function named calculateTax that calculates the tax amount
*/
const calculateTax = (taxableAmount) => {
    // check if user input is <= 9275
    if (taxableAmount <= 9275) {
        // calulate tax on amount
        return getTaxAmount(9275, 10);
    }
    // check if user input is <= 37650    
    else if (taxableAmount <= 37650) {
        // add the base tax of 927.5 and calulate tax on amount > 9275 with 15% tax
        return 927.5 + getTaxAmount(taxableAmount - 9275, 15);
    } 
    // check if user input is <= 91150
    else if (taxableAmount <= 91150) {
        // add the base tax of 5183.75 and calulate tax on amount > 37650 with 25% tax
        return 5183.75 + getTaxAmount(taxableAmount - 37650, 25);
    } 
    // check if user input is <= 190150
    else if (taxableAmount <= 190150) {
        // add the base tax of 18558.75 and calulate tax on amount > 91150 with 28% tax
        return 18558.75 + getTaxAmount(taxableAmount - 91150, 28);
    } 
    // check if user input is <= 413350
    else if (taxableAmount <= 413350) {
        // add the base tax of 46278.75 and calulate tax on amount > 190150 with 33% tax
        return 46278.75 + getTaxAmount(taxableAmount - 190150, 33);
    } 
    // check if user input is <= 415050
    else if (taxableAmount <= 415050) {
        // add the base tax of 119934.75 and calulate tax on amount > 413350 with 35% tax
        return 119934.75 + getTaxAmount(taxableAmount - 413350, 35);
    } 
    // if none of the conditions above match, else block will be executed
    else {
        // add the base tax of 120529.75 and calulate tax on amount > 415050 with 39.6% tax
        return 120529.75 + getTaxAmount(taxableAmount - 415050, 39.6);
    }
}

/*
    declaring a function named getTaxAmount with two parameters taxableAmount and percent which
    calculates the tax amount and returns it
*/
const getTaxAmount = (taxableAmount, percent) => {
    return (percent * taxableAmount) / 100;
}

window.onload = function () {
    // focus on the input field with id income when loading the page
    $('income').focus();
    $("calculate").onclick = processEntry;
};