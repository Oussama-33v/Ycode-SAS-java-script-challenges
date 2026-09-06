
const prompt = require('prompt-sync')();

function getUserInput() {
    let list = [];
    let number;
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
// function swapElements(array, elem1, elem2) {
//     let temp = array[elem1];
//     array[elem1] = array[elem2];
//     array[elem2] = temp;
//     return array
// }

function reversTable(array) {
    let j = array.length - 1;
    for (let i = 0; i < j; i++) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        j--;
    }
    return array;
}

let input = getUserInput();
let  = revers = reversTable(input);
console.log(revers);
