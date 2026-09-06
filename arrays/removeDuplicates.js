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
function removeDupliacte(array) {
    let newarray = [];
    for (let i = 0; i < array.length; i++) {
        let cheacker = 0;
        for (let j = 0; j < newarray.length; j++) {
            if (array[i] === newarray[j]) {
                cheacker = 1;
            }
        }
        if (cheacker === 0) {
            newarray[newarray.length] = array[i];
        }
    } 
    return newarray;
}

let input = getUserInput();
let cleanArray = removeDupliacte(input);
console.log(cleanArray);
