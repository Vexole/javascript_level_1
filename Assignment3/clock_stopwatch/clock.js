"use strict";
var $ = function(id) { return document.getElementById(id); };

//global stop watch timer variable and elapsed time object
var stopwatchTimer;
var elapsedMinutes = 0;
var elapsedSeconds = 0;
var elapsedMilliseconds = 0;

var displayCurrentTime = function() {
    //create a date object and find out if it is AM or PM
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

	//display the hours, minutes, milliseconds and AM/PM on the webpage
    $('hours').textContent = padSingleDigit(hours);
    $('minutes').textContent = padSingleDigit(minutes);
    $('seconds').textContent = padSingleDigit(seconds);
    $('ampm').textContent = ampm;
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

var tickStopwatch = function() {    
    // increment milliseconds by 10 milliseconds
    elapsedMilliseconds += 10;

    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if (elapsedMilliseconds === 1000) {
        elapsedSeconds += 1;
        elapsedMilliseconds = 0;
    }

    // if seconds total 60, increment minutes by one and reset seconds to zero
    if (elapsedSeconds === 60) {
        elapsedMinutes += 1;
        elapsedSeconds = 0;
    }

    //display new stopwatch time
    $('s_minutes').textContent = padSingleDigit(elapsedMinutes);
    $('s_seconds').textContent = padSingleDigit(elapsedSeconds);
    $('s_ms').textContent = elapsedMilliseconds;
};

// event handler functions
var startStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault();
    
    // do first tick of stop watch and then set interval timer to tick
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
    // variable so next two functions can stop timer.
    tickStopwatch();
    stopwatchTimer = setInterval(tickStopwatch, 10);
};

var stopStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault();

    // stop timer
    clearInterval(stopwatchTimer);    
};

var resetStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault();

    // stop timer
    clearInterval(stopwatchTimer);

    // reset elapsed variables and clear stopwatch display
    $('s_minutes').textContent = '00';
    $('s_seconds').textContent = '00';
    $('s_ms').textContent = '000';
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    
    // set up stopwatch event handlers
    $('start').onclick = startStopwatch;
    $('stop').onclick = stopStopwatch;
    $('reset').onclick = resetStopwatch;
};