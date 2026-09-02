
//Calculating the final grade
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter Continuous assessment note :', function(noteCC){
    rl.question('enter Continuous project note :', function(noteProjet){
        rl.question('enter Continuous final exam note :', function(noteExamen){
            let Notefinale = (noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10;
            console.log('final note:' ,Notefinale);
            rl.close();
        });
    });
})