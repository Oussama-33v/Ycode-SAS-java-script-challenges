
//Write a program that displays the Nfirst terms of the Fibonacci sequence.
const prompte = require('prompt-sync')();
let number = prompte('enter a number to see its Fibonacci Sequence :')
let fibonacci = 0;
let a = 0;
let b = 1;


for(let i = 0; i < number; i++){
    fibonacci = a + b;
    console.log(fibonacci);
    b = a;
    a = fibonacci;
}