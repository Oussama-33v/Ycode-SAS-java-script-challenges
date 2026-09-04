//Challenge 9: Independent Meter Generator (Closure)
//Objective: To return a function without parameters from a function with parameters.

function creerCompteur(initialeValue = 0){
    return function Counter(){
        initialeValue++;
        return initialeValue;
    };
}

let MonCompteur = creerCompteur();
console.log(MonCompteur());