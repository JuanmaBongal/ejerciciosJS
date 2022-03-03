/**
 * Desarrollar un algoritmo que imprima la tabla de multiplicación 
 * del número N introducido por
teclado. Para N = 13, el output sería:
13 X 1 = 13
13 X 2 = 26
…
13 X 10 = 130
 */
console.clear();
const prompt = require("prompt-sync")();

let number = prompt(`introduce el número: `);

for (let i=0; i<11; i++){
    console.log(`${number} x ${i} = ${number*i}`);
}