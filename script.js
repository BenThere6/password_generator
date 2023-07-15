// This function collects the character types the user wants included in their password, and pushes all possible characters into an array. 
var getCharacters = function() {
  var uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var specialCharacters = ['!','@','#','$','%','^','&','-','_','=','+','?','<','>'];

  length = window.prompt("Password length: ");

  // If length is Not a Number, send an alert and recall function
  if (isNaN(length)) {
    alert("Input length as integer")
    getCharacters();
    return;
  };

  // If length is not within 8 and 128 characters, send an alert and recall function
  if (length < 8 || length > 128) {
    // If there is no input for length, exit function
    if (!length){
      return;
    }
    window.alert("Password length needs to be between 8 and 128 characters");
    getCharacters();
    return;
  };

  window.alert("You will be prompted about the criteria for your password. Select 'OK' on the following messages to include them in your criteria.");
  upper = window.confirm("Include uppercase letters?");
  lower = window.confirm("Include lowercase letters?");
  numeric = window.confirm("Include numbers?");
  specials = window.confirm("Include special characters?");

  // If no character types are selected, send an alert until at least one is chosen
  while (!(upper||lower||numeric||specials)) {
    window.alert("You need at least one character type")
    upper = window.confirm("Include uppercase letters?");
    lower = window.confirm("Include lowercase letters?");
    numeric = window.confirm("Include numbers?");
    specials = window.confirm("Include special characters?");
  }

  var possibleCharacters = [];

  // Collect all possible characters into one array
  if (upper) {
    for (let x in uppercaseLetters) {
      possibleCharacters.push(uppercaseLetters[x])
    };
  };

  if (lower) {
    for (let x in lowercaseLetters) {
      possibleCharacters.push(lowercaseLetters[x])
      possibleCharacters.push(lowercaseLetters[x])
    };
  };

  if (numeric) {
    for (let x in numbers) {
      possibleCharacters.push(numbers[x])
    };
  };

  if (specials) {
    for (let x in specialCharacters) {
      possibleCharacters.push(specialCharacters[x])
    };
  };

  generatePassword(possibleCharacters, length);
};

var generatePassword = function(possibleCharacters, length) {
  password = [];
  for (var i = 0; i < length; i++) {
    var newCharacter;
    // Choose random number from 0 up to (not including) possibleCharacters.length
    charIndex = Math.floor(Math.random()*possibleCharacters.length);
    // Get character at index of random number chosen above
    newCharacter = possibleCharacters[charIndex];
    // Add character to password string
    password += newCharacter;
  };
  writePassword(password);
};

// Display password at id=password
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};