//An online store offers free delivery above a certain amount.

const prompt = require('prompt-sync')();
let amount = +prompt('haw much you spend sur !:');
if(amount <= 500){
    amount += 40;
    console.log("total to pay + delevry :", amount);
}
else{
    console.log("free delevary");
    console.log("toutal to pay is", amount);
}