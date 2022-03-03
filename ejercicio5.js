console.clear();
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un numero: "));

if (isNaN(number1)){
    console.log(`Debes ingresar solamente números`);
} else if (Number.isInteger(number1)){
    if (number1 == 0){
        console.log(`El númer ingresado es 0`);
    } else if (number1 > 0){
        console.log(`El número ingresado es positivo.`);
    } else {console.log(`El número ingresado es negativo.`);
    } 
} else {console.log(`El dato ingresado es nulo.`);}