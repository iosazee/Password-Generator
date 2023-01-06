// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  
  let passwordOptions = {
    passwordLength: parseInt(prompt('How long should your password be?')),
    lowercaseChar : confirm('Do you want your password to contain lower cased characters'),
    uppercaseChar : confirm('Do you want your password to contain upper case characters?'),
    numericChar : confirm('Do you want your password to contain numbers?'),
    specialChar : confirm('Do you want your password to contain special characters?')
  }
  
  if (passwordOptions.passwordLength < 10 || passwordOptions.passwordLength > 64) {
    alert('Please enter a length between 10 and 64?')
    generatePassword();
  } 
  else if (passwordOptions.lowercaseChar == false && 
          passwordOptions.uppercaseChar == false && 
          passwordOptions.numericChar == false && 
          passwordOptions.specialChar == false) {
    alert('You password must contain at least one character type')
    generatePassword();
  }
  else {
    return passwordOptions
  }
  return passwordOptions
}


// Function for getting a random element from an array
function getRandom() {

  let userChoice = getPasswordOptions()

  console.log(userChoice);

  let charArr = [];

  //conditional if-else statement to cycle through all the possible choices the user may give.
  if (userChoice.lowercaseChar && userChoice.uppercaseChar 
        && userChoice.numericChar && userChoice.specialChar){
    charArr = charArr.concat(lowerCasedCharacters).concat.apply(upperCasedCharacters)
      .concat(numericCharacters).concat(specialCharacters)
  }

  else if (userChoice.numericChar && userChoice.uppercaseChar && userChoice.specialChar) {
    charArr = charArr.concat(numericCharacters).concat(specialCharacters)
      .concat(lowerCasedCharacters)
  }

  else if (userChoice.lowercaseChar && userChoice.numericChar && userChoice.specialChar) {
    charArr = charArr.concat(numericCharacters)
      .concat(specialCharacters).concat(lowerCasedCharacters)
  }

  else if (userChoice.uppercaseChar && userChoice.numericChar && userChoice.specialChar) {
    charArr = charArr.concat(upperCasedCharacters)
      .concat(numericCharacters).concat(specialCharacters)
  }

  else if (userChoice.lowercaseChar && userChoice.uppercaseChar) {
    charArr = charArr.concat(lowerCasedCharacters).concat(upperCasedCharacters)
  }

  else if (userChoice.lowercaseChar && userChoice.numericChar) {
    charArr = charArr.concat(lowerCasedCharacters).concat(numericCharacters)
  }

  else if (userChoice.lowercaseChar && userChoice.specialChar) {
    charArr = charArr.concat(lowerCasedCharacters).concat(specialCharacters)
  }

  else if (userChoice.uppercaseChar && userChoice.numericChar) {
    charArr = charArr.concat(upperCasedCharacters).concat(numericCharacters)
  }

  else if (userChoice.uppercaseChar && userChoice.specialChar) {
    charArr = charArr.concat(upperCasedCharacters).concat(specialCharacters)
  }

  else if (userChoice.numericChar && userChoice.specialChar) {
    charArr = charArr.concat(numericCharacters).concat(specialCharacters)
  }

  else if (userChoice.lowercaseChar) {
    charArr = charArr.concat(lowerCasedCharacters)
  }

  else if (userChoice.uppercaseChar) {
    charArr = charArr.concat(upperCasedCharacters)
  }

  else if (userChoice.numericChar) {
    charArr = charArr.concat(numericCharacters)
}

else {
        charArr = charArr.concat(specialCharacters)
} 
  
  let userPwd = ""
  console.log(charArr.length)
  
  for (let i = 0; i < userChoice.passwordLength; i++) {
    userPwd += charArr[Math.floor(Math.random() * charArr.length)]
  }
  console.log(userPwd)
  return userPwd;
  

}

// Function to generate password with user input
function generatePassword() {
  let randomPassword = getRandom();
  return randomPassword;
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);