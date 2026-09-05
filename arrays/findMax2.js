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
function arryLength(array){
    let counter = 0;
    while (array[counter]){
        counter++;
    }
    return counter;
}
// console.log(input)
function findElemente(array){
    let maxElemante = array[0];
    let i = 0;
    for (i in array){
        if(array[i] >= maxElemante){
            maxElemante = array[i];
        }
    }
    return maxElemante;
}
input = getUserInput();
console.log(input)
maxelem = findElemente(input);
console.log(len = arryLength(input));
console.log(maxelem);