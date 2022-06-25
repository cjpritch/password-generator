var generateBtn = document.querySelector("#generate");

// Check amount of characters the user inputs
function passOptions(characterAmount) {
  if (isNaN(characterAmount)) {
    alert("Please enter a valid number.");
    return false;
  }
  else if (parseInt(characterAmount) < 8) {
    alert("Password length must be at least 8 characters.");
    return false;
  }
  else if (parseInt(characterAmount) >= 128) {
    alert("Password length must be less than 129 characters.");
    return false;
  }
  return true;
}

// Randomize characters 
function random(collection) {
  return collection[Math.floor(math.random() * collection.length)];
}

// User prompts for password options
function generatePass() {
  var characterAmount = prompt("How many characters should your password contain?");
  var passValid = passOptions(characterAmount);
  
  // Prompts for characters included in password
    if (passValid) {
      var hasSpecialCharacters = confirm("Click ok to include special characters");
      var hasNumbers = confirm("Click ok to include numbers.");
      var hasLowerCase = confirm("Click ok to include lowercase letters.");
      var hasUpperCase = confirm("Click ok to include uppercase letters.");
    }
  // If all prompts are false, end function 
    if ([hasSpecialCharacters, hasNumbers, hasLowerCase, hasUpperCase].includes(true));

    // array for character types that can be included in password
    var chosenChar = [];

    // array for characters that will be included in password
    var includedChar = [];

    // check if type of character was selected, then randomly add one to the array
    if (hasSpecialCharacters) {
      chosenChar = chosenChar.concat(specialCharacters);
      includedChar.push(
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
      );
     }
     if (hasNumbers) {
      chosenChar = chosenChar.concat(numericCharacters);
      includedChar.push(
        numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
      );
    }
    if (hasLowerCase) {
      chosenChar = chosenChar.concat(lowerCasedCharacters);
      includedChar.push(
        lowerCasedCharacters[
          Math.floor(Math.random() * lowerCasedCharacters.length)
        ]
      );
    }
    if (hasUpperCase) {
      chosenChar = chosenChar.concat(upperCasedCharacters);
      includedChar.push(
        upperCasedCharacters[
          Math.floor(Math.random() * upperCasedCharacters.length)
        ]
      );
    }

    // for loop to select random characters from the array of possible characters
    var randomChar = [];
    for (var i = 0; i < characterAmount; i++) {
      var index = Math.floor(Math.random() * chosenChar.length);
      randomChar.push(chosenChar[index]);
    }
    var replacedPos = {};

    // while loop to ensure that a included character does not get replaced
    while (includedChar.length > 0) {
      var replacedChar = Math.floor(Math.random() * randomChar.length);
      if (!replacedPos[replacedChar]) {
        randomChar[replacedChar] = includedChar.pop();
        replacedPos[replacedChar] = true;
      }
      return randomChar.join("");
    }
}

// arrays of characters to pull from
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", "?", "/", "<", ">", "~", "`" ];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Write password to the #password input
function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
