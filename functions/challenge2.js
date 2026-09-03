const prompte = require('prompt-sync')();
 // Challenge 4: Personalized Greeting with Default Value

function userInput(){
    let name = prompte('enrt full name :');
    let title = prompte('what city your leving at :');
    return [name, city];
}
function saluerClient(client, addres){
    if(client === true || subject === true){
        return ('hello mr ', client);
    }
    else{
        return('hello mr.',client, 'from ', addres);
    }
}


let user = userInput();
let output = saluerClient(user);
console.log(user);