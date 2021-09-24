// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var pwGenerator = document.querySelector("pwGenerator");
var minChars = 8;
var maxChars = 128;


const numerals = Array.from(Array(10).keys());
const letters = "qwertyuiopasdfghjklzxcvbnm";
const lettersLC = letters.split('');
const lettersUC = letters.toUpperCase().split('');



function generatePassword() {

    minChars = prompt("Minimum number of characters?");
    if (minChars < 8) {
        minChars = prompt("Please input a number greater than 8.")
    }

    maxChars = prompt("Maximum number of characters?");
    if (maxChars > 128) {
        minChars = prompt("Please input a number less than 128.")
    }

    includeUC = confirm("Include upper case?");
    includeLC = confirm("Include lower case?");
    includeNC = confirm("Include numeric characters?");
    includeSC = confirm("Include special characters?");

    if (includeLC == false && includeUC == false && includeNC == false && includeSC == false ) {
        alert("Please include at least one character set!")
        generatePassword()
    }

}


//   document.getElementById("button").innerHTML = txt;