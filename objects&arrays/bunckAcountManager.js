let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};

function printSold(){ //this function printes the sold
    return account.balance;
}

function addMontant(added){ // this function add a montant on an initial balance
    if(added < 0){
        return 'you can not add a negatif mountan !';
    }
    else{
        return  account.balance += added;
    }
}

function moneyRetirer(retired){ // this one is subtracting a montant from a balance
    if(!account.balance < 0 && retired < 0 && retired > account.balance){
        return account.balance -= retired;
    }
    else {
        return 'you cant Retirer this montant !';
    }
}

function printAccountInfos(){ // this one printing all account informations
    for(let i in account){
        return i, ':', account[i];
    }
}

console.log('1. print the balance !');
console.log('2. add a new montant to your account !');
console.log('1. distract from your account !');
console.log('1. see all informations !');

switch()

