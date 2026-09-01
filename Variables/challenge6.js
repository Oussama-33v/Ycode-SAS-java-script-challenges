//Calculating an exam score
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Enter score partie 1:', function(parte1){
    rl.question('Enter score partie 2:', function(parte2){
        rl.question('Enter score partie 3:', function(parte3){
            rl.question('Enter score partie 4:', function(parte4){
                let total = Number(parte1) + Number(parte2) + Number(parte3) + Number(parte4);
                let Moyenne = total / 4;
                console.log("The total score :", total);
                console.log("The average score", Moyenne);
                rl.close();
            });
        });
    });
});