//An online store offers free delivery above a certain amount.

const prompt = require('prompt-sync')();
let amount = +prompt('haw much you spend sir !:');
if(amount <= 500){ //Amount < 500 DH→ Delivery charges:40 DH
        amount += 40;
    console.log("total to pay + delevry :", amount);
}
else{
    console.log("free delevary"); // Amount >= 500 DH→ Free delivery
    console.log("toutal to pay is", amount);
}
console.log("have a good day sir")