//Vous développez une application permettant à un voyageur de convertir son budget.

const readline = require('node:readline');
// This interface will handle the input and output streams.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("haw much MAD to couvert", MAD => {
    console.log(Number(MAD) / 11, "ERU");
    rl.close();
});
