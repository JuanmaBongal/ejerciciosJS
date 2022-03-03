/**
 * Desarrollar una calculadora de factoriales para números introducidos por teclado.
El factorial de un número N es la multiplicación de todos los números desde 1 hasta N. Es decir, para
N = 5, el factorial de 5 sería: 5! = 5*4*3*2*1 = 120
 */
console.clear();
const prompt = require("prompt-sync")();

const numero = Number(prompt(`introduce numero: `));
/** 
//factorial n = n*(factorial n-1)
let factorial = numero;
for (let i=numero-1; i>0; i--){
    factorial *= i;
}
console.log(`El factorial de ${numero} es: ${factorial}`);
*/

function factorial(num) {
    return (num > 0) ? num * factorial(num - 1) : 1;
}
console.log(`El factorial de ${numero} es: ${factorial(numero)}`);