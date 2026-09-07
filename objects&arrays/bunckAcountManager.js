const prompt = require('prompt-sync')(); 

let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};

function printSold(){ //this function printes the sold
    return (account.balance);
}
function addMontant(added){ // this function add a montant on an initial balance
    if(added < 0){
        return ('you can not add a negatif mountan !');
    }
    else{
        return  (account.balance += added);
    }
}
function moneyRetirer(retired){ // this one is subtracting a montant from your balance
    if(!(account.balance < 0 && retired < 0 && retired > account.balance)){
        return (account.balance -= retired);
    }
    else {
        return ('you cant Retirer this montant !');
    }
}
function printAccountInfos(){ // this one printing all account informations
    for(let i in account){
        console.log(i, ':', account[i]);
    }
}

console.log('1 >> print the balance !');
console.log('2 >> add a new montant to your account !');
console.log('3 >> distract from your account !');
console.log('4 >> see all informations !');

let operation = +prompt('welcome haw i can help you sir!')
switch(operation){
    case 1:
        console.log(sold = printSold());
        break;
    case 2:
        operation = +prompt('haw much you wanna add to your account');
        console.log(add = addMontant(operation));
        break;
    case 3:
        operation = +prompt('haw much destracted from your account');
        console.log(destracted = moneyRetirer(operation));
        break;
    case 4:
        console.log(infos = printAccountInfos());
        break;
    default :
        console.log('operation no found');
        break;
}

