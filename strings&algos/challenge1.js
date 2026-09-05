const prompt = require('prompt-sync')();
function getUserInput(){
    let message = prompt('enter somthing !');
    return message;
}

function countCaracters(chanelle){
    let i = 0;
    for(i in chanelle){
        i++;
    }
    return i;
}

message = getUserInput();
count = countCaracters(message);
console.log(count);
