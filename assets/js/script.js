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
}
// arrays of characters to pull from
var specialCharacters = [];
var numericCharacters = [];
var lowerCasedCharacters = [];
var upperCasedCharacters = [];










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
