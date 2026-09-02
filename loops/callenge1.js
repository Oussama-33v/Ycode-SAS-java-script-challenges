//Write a program that asks for a number and displays its multiplication table from 1 to 11 10.

const prompt = require('prompt-sync')();
let number = +prompt('enter a number');

for(let i = 0;i <= 10; i++){
    console.log((number), '*', (i), '=', number * i);
}