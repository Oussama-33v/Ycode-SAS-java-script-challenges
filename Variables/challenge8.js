const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter the voltage of your battery :', function(U){
    rl.question('enter the Intesity of your battery :', function(I ){
        rl.question('enter time in hours :', function(t){
            let energie = U * I * t;
            console.log(energie);
        });
    });
});