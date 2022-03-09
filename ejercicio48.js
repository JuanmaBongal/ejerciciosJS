console.clear();
const prompt = require("prompt-sync")();
const unorderNames = [];
let newName;
let countNames=0;
do{
    console.clear();
    newName = prompt("Introduce un nombre: ");
    unorderNames[countNames] = newName;
    countNames++;
}while ( moreNames()) 

console.log(`LISTA ORIGINAL: ${unorderNames}`);
console.log(`LISTA ORDENADA; ${unorderNames.sort((a, b) => (a > b) ? 1 : -1)}`);

function moreNames() {
    let needName;
    do{
        needName = prompt("pulse S para mas nombres o N para terminar ");             
    } while (!(needName == "s" || needName == "n"))
    return (needName == "s") ?  true :  false;
}