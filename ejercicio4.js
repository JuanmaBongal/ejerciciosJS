// Ejercicio 4
// Diseñar un algoritmo que pida por teclado tres números;
// si el primero es negativo, debe imprimir el producto de
// los tres y si no lo es, imprimirá la suma.
console.clear();
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un numero: "));
let number2 = Number(prompt("Introduce el segundo numero: "));
let number3 = Number(prompt("Introduce el tercer numero: "));
//is not a number (consuta si el ingreso es numero)
if (isNaN(number1) || isNaN(number2) || isNaN(number3)){
    console.log(`Debes ingresar solamente números`);
} 
else if (number1 < 0) {
    console.log(`${number1}`*`${number2}`*`${number3}`);
} else {
    const sum = number1 + number2 + number3;
    console.log(`el resultado de la suma es: ${sum}`);
}