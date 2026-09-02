const prompte = require('prompt-sync')();
console.log('**************  MENU  ************')
console.log('1 → Pizza : 60dh');
console.log('2 → Burger : 45dh');
console.log('3 → Tacos : 40dh');
console.log('4 → Salade 30dh');
console.log('**********************************');

let dish = +prompte('haw can i help you sir ?:');
let quantity = +prompte('haw much you want? :');
let total
switch(dish){
    case 1:
        console.log('pizza 60dh\n', 'price :',total = 60 * quantity);
        break;
    case 2:
        console.log('Burger 45dh\n','price :', total = 45 * quantity);
        break;
    case 3:
        console.log('Tacos 40dh\n','price :', total = 40 * quantity);
        break;
    case 4:
        console.log('Salad 30dh\n','price', total = 30 * quantity);
        break;
    default:
        console.log('dish not found !');
        break;
}