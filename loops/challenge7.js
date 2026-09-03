
/*
The program has a secret number.
The user must try to find it.
After each attempt, display:*/
const prompte = require('prompt-sync')();
let number;
const secret_number = 30;
let trays_counter = 0;
while (trays_counter <= 10) {
    do {
        number = +prompte('gues the secret number!');
        if (number == secret_number) {
            console.log('good job', (secret_number), 'is the secret number');
        }
        else if (number >= secret_number - 10 || number >= secret_number + 10) {
            console.log('too close');
        }
        else {
            console.log('Higher!!');
        }
    }
    while (number != secret_number){

    }
    trays_counter++;
    console.log('you loser go do somthing else !');
}