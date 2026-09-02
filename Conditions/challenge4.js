//Write a simple calculator using switch / case.
const prompt = require('prompt-sync')();
let number1 = +prompt('enter first number\n');
let operator = prompt('enter opertor\n');
let number2 = +prompt('enter socand number\n')

if (number2 === 0 && operator == '/') { // devision by zero error hundel
    console.log('cant division by zero.') 
}
else {
    switch (operator) {
        case '+':
            console.log(number1 + number2);
            break;
        case '-':
            console.log(number1 - number2);
            break;
        case '*':
            console.log(number1 * numbe2);
            break;
        case '/':
            console.log(number1 / number2);
            break;
        default:
            console.log('invailed operation !')
    }
}