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
function printElemants(arry) {
    let i = 0;
    for (i in arry) {
        console.log(arry[i]);
        i++;
    }
}

let myNumber = getUserInput();
console.log(printElemants(myNumber));