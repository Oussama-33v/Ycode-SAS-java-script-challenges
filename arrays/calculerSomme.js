const prompt = require('prompt-sync')();
let list = [];
let number;

function getUserInput() {
    do {
        number = +prompt('enter numbers and when you finish type /Y')
        if (!isNaN(number) && number !== null && number !== " ") {
            list[list.length] = number;
        }
        else {
            break;
        }
    } while (true);
    return list;
}
function culculateSomme(arry) {
    let i = 0;
    let sum = 0;
    for (i in arry) {
        sum += arry[i];
        i++;
    }
    return sum;
}
let input = getUserInput();
let somme = culculateSomme(input);
console.log(somme)