 //Password Validator

const prompt = require('prompt-sync')(); //Objective: Function performing conditional checks and returning a boolean.
function getUserInput(){
    let passWord = prompt('Enter your Password :');
    return passWord;
}
function chackPasswordQuality(password){
    if(password.length >= 8 && password.includes('@')){
        return true;
    }
    else{
        return false;
    }
}

input = getUserInput();
output = chackPasswordQuality(input);
console.log(output);
