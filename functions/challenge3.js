//The Universal Summer (Rest Parameter)

const prompt = require('prompt-sync')();
let nuser = [];
let numbers;
function getUserInpt() { // this function is to tack input from user as a list
    do {
        numbers = +prompt('enter your numbers and type done whene you finish :');
        if (!isNaN(numbers) && numbers !== null && numbers !== " "){ // this line is to chacke the input quality
        nuser[nuser.length] = numbers;
        }
        else{
            break;
        }
    }while (true);
    return nuser;
}
// console.log(x)
function additionnerTout(NUMS){ // this for main operation 
    i = 0;
    let sum = 0;
    for(let i in NUMS){
        sum = sum + NUMS[i];
        i++;
    }
    return sum;
}
input = getUserInpt();
output = additionnerTout(input);

console.log(output);
