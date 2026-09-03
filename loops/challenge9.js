const prompt = require('prompt-sync')();
let x = 1;
for(let i = 0; i <= 10; i++){
    console.log(x * i)
    for(let j = 0; j <= 10; j++){
        console.log(x * j);
        j++;
    }
    i++;
}