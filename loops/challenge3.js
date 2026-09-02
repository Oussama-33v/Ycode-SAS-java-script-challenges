const prompte = require('prompt-sync')();

let i = 1;
while((i * i) <= 100){
    i++;
    if((i * i) > 100){
        console.log('the first number whose square is greater than 100 is >>>', i);
        break;
    }  
}