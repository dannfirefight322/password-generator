// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





function generatePassword() {
  var passwordLength = prompt("Enter the number of characters you want for you new password. More than 12 but less than 128.");
  var numbers = confirm("Do you want numbers in your password?");
  var lower = confirm("Do you want lowercases in your password?");
  var upper = confirm("Do you want uppercases in your password?");
  var minimumCount = 0;
  var minimumNumbers = "";
  var minimumLower = "";
  var minimumUpper = "";
 var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLower: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpper: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
};
 if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
}
  if (lower === true) {
    minimumLower = functionArray.getLower();
    minimumCount++;
}

  if (upper === true) {
    minimumUpper = functionArray.getUpper();
    minimumCount++;
}
 var randomPasswordGenerated = "";
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
randomPasswordGenerated += randomNumberPicked;
}
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLower;
  randomPasswordGenerated += minimumUpper;

 return randomPasswordGenerated;
}