"use strict";

var $ = function (id) {
    return document.getElementById(id);
};

/*
    declaring an event handler named processEntry that gets the user’s entry and checks to make 
    sure that it is a number between 0 and 99. If it isn’t, display an alert dialog boxfor the error. 
    If it is valid, call a function named makeChange and pass it the user’s entry.
*/
function processEntry() {
    // get the input value of the input field and parse it to int 
    const userInput = parseInt($('cents').value);
    // check if the entered input is not a number or is less than 0 or greater than 99
    if (isNaN(userInput) || userInput < 0 || userInput > 99) {
        // if the entered input is not a number or is less than 0 or greater than 99 display an alert with a message
        alert('Please enter a valid number between 0 and 99');
    } 
    // if the above mentioned condition is not true, go inside the else block
    else {
        // if the entered input is a valid number call the function makeChange with the entered input
        makeChange(userInput);
    }
}

/*
    declaring the makeChange function, which accepts one parameter i.e. the user’s entry. 
    This function does not return anything, but it displays the results in the text boxes for 
    Quarters, Dimes, Nickels, and Pennies.
*/
function makeChange(userInput) {
    /*
        divide the user input by the highest change, truncate the decimal and assign it to a 
        variable named quarters so that the number of changes is minimum
    */
    const quarters = parseInt(userInput / 25);
    // get the remaining amount which could not be covered by quarters
    let amountRemainingToChange = userInput % 25;
    /*
        divide the remaining amount by the second highest change, truncate the decimal and assign it
        to a variable named dimes
    */
     const dimes = parseInt(amountRemainingToChange / 10);
    // get the remaining amount which could not be covered by dimes
    amountRemainingToChange = amountRemainingToChange % 10;
    /*
        divide the remaining amount by the third highest change, truncate the decimal and 
        assign it to a variable named nickels so that the number of changes is minimum
    */
    const nickels = parseInt(amountRemainingToChange / 5);
    // get the remaining amount which could not be covered by nickels
    amountRemainingToChange = amountRemainingToChange % 5;
    // the remaining amount which was not covered by other changes is now changed as pennies
    const pennies = amountRemainingToChange;

    //assign the quarters value to the input field with quarters id
    $('quarters').value = quarters;
    //assign the dimes value to the input field with dimes id
    $('dimes').value = dimes;
    //assign the nickels value to the input field with nickels id
    $('nickels').value = nickels;
    //assign the pennies value to the input field with pennies id
    $('pennies').value = pennies;
}

/*
    declaring an onload event handler that attaches the processEntry event handler to the click 
    event of the Make Change button
*/
window.onload = function () {
    $('calculate').addEventListener('click', processEntry);
}