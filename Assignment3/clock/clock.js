"use strict";
var $ = function (id) { return document.getElementById(id); };

var displayCurrentTime = function () {
    // get the current date and time
    let currentTime = new Date();
    let hours = currentTime.getHours();
    // setting the hour value for midnight as 0
    hours = hours == 24 ? 0 : hours;
    // if hours > 12, subtract 12 from it to get the value in AM/PM format
    hours = hours > 12 ? hours - 12 : hours;
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    /**
     *  if current hour is less than 12, then it's AM
     *  else it's PM
     */
    let ampm = currentTime.getHours() < 12 ? 'AM' : 'PM';

    // padding the single digits with 0 and assigning them to their respective span tags
    $('hours').textContent = padSingleDigit(hours);
    $('minutes').textContent = padSingleDigit(minutes);
    $('seconds').textContent = padSingleDigit(seconds);
    $('ampm').textContent = ampm;
};

var padSingleDigit = function (num) {
    if (num < 10) { return "0" + num; }
    else { return num; }
};

window.onload = function () {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
};