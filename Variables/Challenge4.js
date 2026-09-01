const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("enter distance parked", Distance => {
    rl.question("enter the carburant consommed en litres", carburant_consommée =>{
        conssomation = (Number(Distance, ) / Number(carburant_consommée)) * 100;
        console.log(conssomation / 100,"L / 100KM"); 
        rl.close();
    })
})
    