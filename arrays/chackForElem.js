const prompt = require('prompt-sync')();

function getUserInput(){
    let element = prompt('chack for what !?');
    return element;
}

function chackFroElement(array, element){
    for (i = 0; i <= array.length; i++){
        if(array[i] == element){
            return true;
        }
        else{
            return 'not found';
        }
    }
}

data = ['banana', 'apple', 'orange', 3, 18];
input = getUserInput();
result = chackFroElement(data, input);
console.log(result);
