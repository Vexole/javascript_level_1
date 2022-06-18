"use strict";

var $ = function (id) {
    return document.getElementById(id);
};

/*
    declaring a function named calculateSalesTax with two parameters subTotal and subTotal
    multiply subTotal and subTotal, divide the result by 100 and return the result
*/
const calculateSalesTax = (subTotal, taxRate) => (subTotal * taxRate) / 100;

/*
    declaring a function named processEntries that calculates the sales tax and total, 
    and displays those results in the textboxes.
*/
const processEntries = () => {
    /* 
        get the user entered value in input field with id subtotal, parse it to float, and 
        assign it to a variable subTotal
    */
    const subTotal = parseFloat($('subtotal').value);
    /*
        get the user entered value in input field with id tax_rate, parse it to float, and 
        assign it to a variable taxRate
     */
    const taxRate = parseFloat($('tax_rate').value);

    // check if the entered values are not a number
    if (isNaN(subTotal) || isNaN(taxRate)) {
        // if the entered values are not a number, display an alert box with a message
        alert('Please enter a valid number');
    }
    // check if subtotal is less than or equals to 0 or greater than or equals to 10000
    else if (subTotal >= 10000 || subTotal <= 0) {
        /*
            if subtotal is less than or equals to 0 or greater than or equals to 10000, 
            display an alert box with a message
        */
        alert('Subtotal must be > 0 and < 10000');
    }
    // check if taxRate is less than or equals to 0 or greater than or equals to 12
    else if (taxRate >= 12 || taxRate <= 0) {
        /*
            if taxRate is less than or equals to 0 or greater than or equals to 12, 
            display an alert box with a message
        */
        alert('Tax rate must be > 0 and < 12')
    } 
    // if none of the conditions mentioned above matched,
    else {
        /*
            call a function named calculateSalesTax and pass subTotal and taxRate as arguments and 
            store the result from the function to a variable salesTax
        */
        const salesTax = calculateSalesTax(subTotal, taxRate);
        // add subTotal and salesTax and assign it to a variable total
        const total = subTotal + salesTax;
        /* 
            parse the salesTax variable to float, round off the digits to 2 decimal place and
            assign it to the input field's value with id sales_tax by selecting the elements
        */
        $('sales_tax').value = parseFloat(salesTax).toFixed(2);
        /* 
            parse the total variable to float, round off the digits to 2 decimal place and
            assign it to the input field's value with id total by selecting the elements
         */
        $('total').value = parseFloat(total).toFixed(2);

        // move the cursor to the subtotal field when calculate button is clicked
        $('subtotal').focus();
    }
}

const clearFields = () => {
    // clear the input field with id subtotal
    $('subtotal').value = '';
    // clear the input field with id tax_rate
    $('tax_rate').value = '';
    // clear the input field with id sales_tax
    $('sales_tax').value = '';
    // clear the input field with id total
    $('total').value = '';
    // move the cursor to the subtotal field when clear button is clicked
    $('subtotal').focus();
}

/*
    declaring an onload event handler for the window
*/
window.onload = function () {
    // move the cursor to the subtotal field when page loads
    $('subtotal').focus();
    // add a click event listener to the button with id calculate
    $('calculate').addEventListener('click', processEntries);
    // add a click event listener to the button with id clear
    $('clear').addEventListener('click', clearFields);
    // clear value of the input field with id subtotal, when user clicks on it
    $('subtotal').addEventListener('click', e => e.target.value = '');
    // clear value of the input field with id tax_rate, when user clicks on it
    $('tax_rate').addEventListener('click', e => e.target.value = '');
}