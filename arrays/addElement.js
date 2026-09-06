const prompt = require('prompt-sync')();

function addElemente(array, num){
    array[array.length] = num;
    return array;
}

array = [2,4,5,8];
addnum = addElemente(array, 8);
console.log(addnum);