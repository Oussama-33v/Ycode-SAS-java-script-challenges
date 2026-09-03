//Professional Email Generator
//Objective: To use a function with multiple parameters.
const prompte = require('prompt-sync')();
function genererEmai(){
    let name = prompte('Enter Name');
    let prenom = prompte('Enter Prenome');
    console.log('Your email is :', name.toLowerCase() +'.'+ prenom.toLowerCase() +'@entreprise.com');
}
genererEmai();