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
function bobbleSort(array) {
    for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < array.length - 1 - i; j++){
            if (array[j] >= array[j + 1]){
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
            else{
                j++;
            }
        }
    }
    return array;
}

input = getUserInput();
console.log(sorted = bobbleSort(input));