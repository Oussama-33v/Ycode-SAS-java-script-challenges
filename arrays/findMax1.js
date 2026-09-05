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
function swapElements(elem1, elem2) {
    let temp = elem1
    elem1 = elem2;
    elem2 = temp;
}
function sortElements(arry) {
    for (let  i = 0; i <= arry.length; i++) {
        let j = i + 1;
        if (arry[i] > arry[j]) {
            arry = swapElements( arry[i], arry[j]);
        }
        else{
            i++;
        }
    }
    return arry;
}
input = getUserInput();
sorted = sortElements(input);
console.log(sorted)
