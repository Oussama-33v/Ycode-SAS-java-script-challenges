// A streaming platform wants to automatically classify films according to their duration.
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("enter the film duree !:", duree => {
if(Number(duree) < 60){
    console.log("Court métrage");
}
else if(60 < Number(duree) && Number(duree) < 120){
    console.log('Film standard');
}
else{
    console.log("Film long");
}
rl.close()
})