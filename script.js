// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  function generatePassword() {

  // All the arrays I would use
  var upperArr = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"];
  var lowerArr = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
  var numArr = ["1", "2" , "3" , "4" , "5", "6" , "7" , "8" , "9" , "0"];
  var specArr = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "?" , "/"];
  var tempArr = [];

  // All the user inputs
  var charTotal = prompt("How many characters do you want?");
  var confirmUpper = confirm("Do you want uppercase letters?");
  var confirmLower = confirm("Do you want lowercase letters?");
  var confirmNum = confirm("Do you want any numbers?");
  var confirmSpec  = confirm("Do you want any special characters?");

  // End password result
  var returnPassword = "";
  
  
    // Functions that take the user input to form the temp array
    // Added an alert that will warn user if no value or inapproprite value entered
    if (!charTotal) {
      alert("No values entered!");
    } else if (charTotal < 8 || charTotal > 128) {
    
    charTotal = (prompt("You must choose a value between 8 and 128!"));
    }


    if (confirmUpper) {
      tempArr = tempArr.concat(upperArr)
    
    }

    if (confirmLower) {
      tempArr = tempArr.concat(lowerArr)
      
    }

    if (confirmNum) {
      tempArr = tempArr.concat(numArr)
     
    }

    if (confirmSpec) {
      tempArr = tempArr.concat(specArr)
      
    }
      // for loop to form the end password result
  for (var i=0; i<charTotal; i++) {
    var randomTempArrIndex = Math.floor(Math.random() * tempArr.length);
    returnPassword = returnPassword + tempArr [randomTempArrIndex];
  }
  
  return returnPassword 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
