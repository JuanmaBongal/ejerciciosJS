const prompt = require("prompt-sync")();
/*Algoritmo que lea dos números, calcule y escriba el valor de su suma, resta, producto y división.*/

let primerNumero = Number(prompt("introduce un numero para A: "));
let segundoNumero = Number(prompt("introduce un numero para B: "));

console.log("la suma de ambos es:"+ (primerNumero+segundoNumero));
console.log(`la suma de ambos es: ${primerNumero+segundoNumero}`); //este metodo es mejor(la doble comilla invertida junto a la p)
console.log("la resta de ambos es:"+ (primerNumero-segundoNumero));
console.log("la producto de ambos es:"+ (primerNumero*segundoNumero));
console.log("la division de ambos es:"+ (primerNumero/segundoNumero));