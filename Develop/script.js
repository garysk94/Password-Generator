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
var passLength;


/* Checks for user how long they want their password*/

function askLength(){
  passLength = prompt("How long would you like your password? (8-128 Characters)");
  if(passLength > 128){
  alert("Requirements are not fulfilled. Please make the password between 8 and 128 letters.");
  askLength();
  }
  if(passLength < 8){
  alert("Requirements are not fulfilled.Please make the password between 8 and 128 letters.");
  askLength();
  }
  else if(isNaN(passLength)){
  alert("Please make the password between 8 and 128 letters.");
  askLength();
  }
  else{
  return passLength;
  }
}

/* Would let the user use capital letters in their password*/

function askCapital() {
  capitalVer = prompt("Use a capital letter in your password! Type Yes or No.");
  capitalVer = capitalVer.toLowerCase();
  
  if(capitalVer === null || capitalVer === ""){
    alert ("Please choose Yes or No");
      askCapital();
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

function askSpecial(){
  specialVer = prompt("Use a spcecial character in your password. Type Yes or No.");
  specialVer = specialVer.toLowerCase();
  if (specialVer === null | specialVer === ""){
    alert("Please type Yes or No");
      askSpecial();
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

function askNumbers(){
  numberVer = prompt("Use a number in your passoword. Type Yes on No");
  numberVer = numberVer.toLowerCase();
  if(numberVer === null | numberVer === ""){
    alert("Please type Yes or No")
    askNumbers();
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
  askLength();
  console.log(passLength);
  askCapital();
  console.log(capitalVer);
  askNumbers();
  console.log(numberVer);
  askSpecial();
  console.log(specialVer);

var password = "";
var characters = lowerLet;
if (capitalVer && specialVer && numberVer ){
  characters += capitalLet + numbers + specialLet;

}
else if (capitalVer && numberVer){
  characters += capitalLet + numbers;

}
else if (numberVer && specialVer){
  characters += numbers + specialLet;

}
else if (capitalVer && specialVer){
  characters += capitalLet + specialLet;

}
else if (capitalVer){
  characters += capitalLet;

}
else if(numberVer){
  characters += numbers;

}
else if (specialVer){
  characters += specialLet;

}
else{
  characters === lowerLet;
}

for(var i = 0; i < passLength; i++){
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
generateBtn.addEventListener("click", writePassword);
