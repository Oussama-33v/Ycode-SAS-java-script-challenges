//Un utilisateur souhaite connaître l'espace disponible sur son ordinateur.
const MB = 1024;
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("haw many GB you wanna couvert", GB =>{
    console.log(Number(GB) * MB,"MB");
    rl.close();
});