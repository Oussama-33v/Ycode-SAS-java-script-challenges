const prompt = require('prompt-sync')();

console.log('1 → Afficher le profil');
console.log('2 → Afficher les paramètres');
console.log('3 → Afficher les notifications');
console.log('4 → Se déconnecter');

let number = prompt('welcome sir haw can i help you today ')
switch(number){
    case 1:
        console.log("opening profil ...");
        break;
    case 2:
        console.log("oening paeameters ...");
        break;
    case 3:
        console.log('opening notifications ...');
        break;
    case 4:
        console.log('desconecting ...');
        break;
    default:
        console.log('ivailed chois !')
}
