//  // Assignment Code
var generateBtn = document.querySelector("#generate");
var capitalLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLet = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialLet = "@$&#?!%*"
var capitalVer;
var lowerVer;
var numberVer;
var specialVer;
var passLen;


/* Checks for user how long they want their password*/

function askLength(){
  passLen = prompt("How long would you like your password? (8-128 Characters)");
  if(passLen > 128){
  alert("Requirements are not fulfilled. Please make the password between 8 and 128 letters.");
  askLength();
  }
  if(passLen < 8){
  alert("Requirements are not fulfilled.Please make the password between 8 and 128 letters.");
  askLength();
  }
  else if(isNaN(passLen)){
  alert("Please make the password between 8 and 128 letters.");
  askLength();
  }
  else{
  return passLen;
  }
}

/* Would let the user use capital letters in their password*/

function checkCapital() {
  capitalVer = prompt("Use a capital letter in your password! Type Yes or No.");
  capitalVer = capitalCheck.toLowerCase();
  
  if(capitalVer === null || capitalVer === ""){
    alert ("Please choose Yes or No");
      checkCapital();
  }
  else if (capitalVer === "yes") {
    capitalVer = true;
    return capitalVer;
  }
  else if (capitalVer === "no"){
    capitalVer = false;
    return capitalVer;
  }
  return capitalVer;
}

/* Would let the user use special charaters in their password*/

function checkSpecial(){
  specialVer = prompt("Use a spcecial character in your password. Type Yes or No.");
  specialVer = specialVer.toLowerCase();
  if (specialVer === null | specialVer === ""){
    alert("Please type Yes or No");
      checkSpecial();
  }
  else if (specialVer === "yes"){
    specialVer = true;
    return specialVer;
  }
  else if (specialVer === "no"){
    specialVer = false;
    return specialVer;
  }
  return specialVer;
}

/*Would let the user use numbers characters in their password */

function checkNumbers(){
  numberVer = prompt("Use a number in your passoword. Type Yes on No");
  numberVer = numberVer.toLowerCase();
  if(numberVer === null | numberVer === ""){
    alert("Please type Yes or No")
    checkNumbers();
  }
  else if (numberVer === "yes"){
    numberVer = true;
    return numberVer; 
  }
  else if (numberVer === "no"){
    numberVer = false;
    return numberVer;
  }
  return numberVer;
}


/* This will generate a password for the user */
function generatePassword() {
  checkLength();
  console.log(passLen);
  checkUpper();
  console.log(capitalVer);
  checkNumbers();
  console.log(numberVer);
  checkSpecial();
  console.log(specialVer);

var password = "";
var characters = lowerChar;
if (capitalVer && specialVer && numberVer ){
  characters += capitalLet + numbers + specialLet;

}
else if (capitalVer && numberVer){
  characters += capitalLet + numbers;
}
else if (capitalVer && specialVer){
  characters += capitalLet + specialLet;
}
else if (numberVer && specialVer){
  characters += numbers + specialLet;
}
else if (capitalVer){
  characters += capitalLet;
}
else if (specialVer){
  characters += specialLet;
}
else if(numberVer){
  characters += numbers;
}
else{characters === lowerLet;
}

  for(var i = 0; i < passLen; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
