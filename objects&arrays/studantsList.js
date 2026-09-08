const prompt = require('prompt-sync')();

let students = [
    {
        firstName: "Ali",
        age: 20,
        city: "Youssoufia"
    },
    {
        firstName: "Sara",
        age: 22,
        city: "Marrakech"
    },
    {
        firstName: "Omar",
        age: 19,
        city: "Safi"
    }
];

function printLst(){
    for(i in students){
        console.log(students[i]);
    }
}

console.log(all = printLst());
