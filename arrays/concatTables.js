function concatTables(array1, array2){
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            array1[array1.length- 1] = array2[j];
        }
    }
    return array1;
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

concated = concatTables(array1, array2);
console.log(concated);