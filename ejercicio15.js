console.clear();
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un numero: "));
let paroimpar = number1 % 2;

if (isNaN(number1)) {
    console.log(`Debes ingresar solamente números`);
} else if (Number.isInteger(number1)) {
    while (number1 == 0) { 
        console.clear();
        number1 = Number(prompt("Introduce numero distinto de cero: "));
        paroimpar = number1 % 2;
    }
    if (paroimpar == 0) {
        console.log(`El número ingresado es par.`);
    } else {
        console.log(`El número ingresado es impar.`);
    }
} else {
    console.log(`El dato ingresado es nulo.`);
}