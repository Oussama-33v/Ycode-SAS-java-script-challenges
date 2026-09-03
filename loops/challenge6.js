// Write a program that calculates the factorial of a number.
const prompte = require('prompt-sync')();
let number = +prompte('enter a number to start calculate the factorial !');
let facltorial = 1;

if(number == 0){
    console.log(1);
    return;
}
else if(number == 1){
    console.log(1);
    return;
}
else{
    for(let i = 1; i <= number; i++){
        facltorial *= i ;
    }
    console.log(facltorial);
}