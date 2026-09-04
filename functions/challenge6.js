const prompt = require('prompt-sync')();
//Challenge 8: Universal Currency Converter with Callback.
//Objective: To pass a function as a parameter to another function (Callback).
const toMAD = (val) => val + 'DH';
function couvertMountant(mantant, taux, foramt){
    let result = mantant * taux;
    return toMAD(result);
}

x = couvertMountant(100, 15,5, toMAD());
console.log(x);