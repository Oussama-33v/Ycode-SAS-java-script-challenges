//Write a program that calculates a power without using Math.pow().

const prompt = require('prompt-sync')();
let base = prompt('inter a base :');
let exposant = prompt('inter an exposant :');
let i = 1;
let rusalt = 1
while (i <= exposant) {
   rusalt = rusalt * base;
   i++;
}
console.log(rusalt);