//Write a program that performs a countdown from a given number to 0.

const prompte = require('prompt-sync')();
let number = +prompte('enter number !');

while (number >= 0){
    console.log(number);
    number--;
}