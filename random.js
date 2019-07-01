// Ask user for initial number
var initialNumber = parseInt(prompt('What is the starting number of the range?'));

// Ask user for final number
var endingNumber = parseInt(prompt('What is the finishing number of the range?'));

// Calculate random number between 1 and 2
var randomNumber = Math.floor(Math.random() * (endingNumber - initialNumber + 1)) + initialNumber;

// Display number to page
var message = '<p>' + randomNumber + ' is a number between ' + initialNumber + ' and ' + endingNumber + '.</p>';
document.write(message);