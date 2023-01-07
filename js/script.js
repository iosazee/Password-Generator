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
  
   
  let lowercaseChar = false;
  let uppercaseChar = false;
  let numericChar = false;
  let specialChar = false;
  let passwordLength = 0;

  while (passwordLength < 10 || passwordLength > 64) {
    passwordLength = prompt('How long should your password be?')
  
  if (passwordLength < 10 || passwordLength > 64) {
    alert('Please enter a length between 10 and 64?')
  
  } 
  }
  while (lowercaseChar == false && 
    uppercaseChar == false && 
    numericChar == false && 
    specialChar == false) {
  
  lowercaseChar = confirm('Do you want your password to contain lowercase characters?')
  uppercaseChar = confirm('Do you want your password to contain uppercase characters?')
  numericChar = confirm('Do you want your password to contain numbers?')
  specialChar = confirm('Do you want your password to contain special characters?')

  if (lowercaseChar == false && 
      uppercaseChar == false && 
      numericChar == false && 
      specialChar == false) {
            
    alert('You password must contain at least one character type')
    
  }
   
    }

  return  {passwordLength: passwordLength,
          lowercaseChar: lowercaseChar,
          uppercaseChar: uppercaseChar,
          numericChar: numericChar,
          specialChar: specialChar}
  

}


// Function for getting a random element from an array
function getRandom() {

  let userChoice = getPasswordOptions()

  console.log(userChoice);

  let charArr = [];

  
  if (userChoice.lowercaseChar && userChoice.uppercaseChar && userChoice.numericChar && userChoice.specialChar){
    charArr = charArr.concat(lowerCasedCharacters).concat(upperCasedCharacters)
    .concat(numericCharacters).concat(specialCharacters)
  }
  else if (userChoice.numericChar && userChoice.uppercaseChar && userChoice.specialChar) {
    charArr = charArr.concat(numericCharacters).concat(specialCharacters).concat(lowerCasedCharacters)
  }
  else if (userChoice.lowercaseChar && userChoice.numericChar && userChoice.specialChar) {
    charArr = charArr.concat(numericCharacters).concat(specialCharacters).concat(lowerCasedCharacters)
  }
  else if (userChoice.uppercaseChar && userChoice.numericChar && userChoice.specialChar) {
    charArr = charArr.concat(upperCasedCharacters).concat(numericCharacters).concat(specialCharacters)
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