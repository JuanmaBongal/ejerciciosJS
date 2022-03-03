console.clear();
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un numero: "));
let maximo = number1;
let minimo = number1;
let suma = 0;
let contador = 1;

 while ( number1 != 0){
    if (number1 >= maximo){
        maximo = number1;
    }
    if (number1<=minimo){
        minimo = number1;
    }
    suma =suma + number1;
    number1 = Number(prompt("Introduce un numero: "));
    if (number1!=0){
        contador++;
    }
}
console.log(`el númer maximo es: ${maximo}, el mínimo es ${minimo} `);
console.log(`la cantidad de números es: ${contador} y la media de todos es ${suma/contador}`);