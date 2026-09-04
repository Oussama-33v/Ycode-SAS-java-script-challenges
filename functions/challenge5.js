//System Clock / Timestamp
//Objective: To create a parameterless function that returns dynamic data.

function obtenirHeureActuelle(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    return h + ':' + m + ':' + s;
}

let date = obtenirHeureActuelle();
console.log(date)