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
// console.log(input)
function findElemente(array){
    let maxElemante;
    for (i = 0, i; i <= array.length; i++){
        if(array[i] >= array[i + 1]){
            maxElemante = array[i];
        }
        else{
            i++;
        }
    return maxElemante;
    }
}
input = getUserInput();
console.log(input)
maxelm = findElemente(input);
console.log(maxelm)