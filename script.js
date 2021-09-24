// Connect the button on the page to the password generator
var pwGenerator = document.querySelector("pwGenerator");

// Initialize variables at min/max respectively
var minChars = 8;
var maxChars = 128;

// Create character set arrays

const letters = "qwertyuiopasdfghjklzxcvbnm";
const lettersLC = letters.split('');
const lettersUC = letters.toUpperCase().split('');
const lettersNC = Array.from(Array(10).keys());
const specChar = "~!@#$%^&*()_?";
const lettersSC = specChar.split('');
var pwLength = 0;

var charSet = [];
var pwArray = [];
var password = "";

function generatePassword() {

    // Prompt for minimum and maximum password lengths
    // Handles exceptions if length does not meet requirements
    minChars = prompt("Minimum number of characters?");
    if (minChars < 8) {
        minChars = prompt("Please input a number greater than 8.");
    }
    maxChars = prompt("Maximum number of characters?");
    if (maxChars > 128) {
        minChars = prompt("Please input a number less than 128.");
    }

    // Calculate password length as a random number between min and max
    pwLength = Math.floor(Math.random() * (maxChars - minChars)) + minChars;


    // Prompt for character set inclusions
    includeUC = confirm("Include upper case?");
    if (includeUC) {
        charSet = charSet.concat(lettersUC);
    }
    includeLC = confirm("Include lower case?");
    if (includeLC) {
        charSet = charSet.concat(lettersLC);
    }
    includeNC = confirm("Include numeric characters?");
    if (includeNC) {
        charSet = charSet.concat(lettersNC);
    }
    includeSC = confirm("Include special characters?");
    if (includeSC) {
        charSet = charSet.concat(lettersSC);
    }

    // Check that there is a character set, maybe better to do with null?
    // if (includeLC === false && includeUC === false && includeNC === false && includeSC === false ) {
    //     alert("Please include at least one character set!");
    //     generatePassword();
    // }

    // For each loop, select a random character and append to the password
    for (let i = 0; i < pwLength; i++) {

        var randomIndex = Math.floor(Math.random() * charSet.length);
        var randomCharacter = charSet[randomIndex]; 
        pwArray = pwArray.concat(randomCharacter);
    }

    password = pwArray.join('');
    
    // Display the password as an alert
    alert("Your password is: " + password);

}

