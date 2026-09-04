const prompte = require('prompt-sync')();
 // Challenge 4: Personalized Greeting with Default Value

function userInput(){
    let name = prompte('enrt full name :');
    let city = prompte('what city your leving at :');
    return name;
}
function saluerClient(client, title){
    
}
let user = userInput();

let output = saluerClient(user);
console.log(output);