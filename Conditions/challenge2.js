const prompt = require('prompt-sync')();
let Grade = +prompt('enter the grade');
//invied grades hundel
if(Grade < 0){
    console.log('inviled grade');
}
// valide grades
if(0<= Grade && Grade < 10) {
    console.log('failure');
}
else if(Grade >= 10 && Grade <= 11.99) {
    console.log('fair');
}
else if(12 <= Grade && Grade <= 13.99){
    console.log('Pretty good');
}
else if(14 <= Grade && Grade <= 16.99){
    console.log('GOOD');
}
else if(17 <= Grade && Grade <= 20){
    console.log('Excellent');
}
else if (Grade>20){
    console.log('inviled value')
}
else {
    console.log('input not vlide !');
}