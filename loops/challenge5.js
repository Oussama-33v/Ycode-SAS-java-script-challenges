const prompte = require('prompt-sync')();
let n_entered;
let counter = 0;
let somme = 0
// Input continues until the user enters something 0.
do{
    n_entered = +prompte('enter a number'); // A program asks the user to enter numbers.
    somme = somme + n_entered
    counter++;
}
while(n_entered != 0)
console.log('Count of values :',counter)
console.log('somme of values :', somme)
