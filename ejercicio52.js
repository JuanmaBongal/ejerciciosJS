console.clear();
const prompt = require("prompt-sync")();

const num = Number(prompt(`introduce un número: `));

const numList = [];
const MAXLENGTH = 10;

for (let i = 0; i < MAXLENGTH; i++) {
    numList[i] = Math.round(Math.random() * 15) + 1;
    if (num === numList[i]) {
     console.log(`El numero ${num} está en el índice ${i} de la lista`);
     break; 
    } else if (i === MAXLENGTH-1){
        console.log(`El número ${num} no esta en la lista`);
    }
}
console.log("Solo para comprobar: " + numList);

