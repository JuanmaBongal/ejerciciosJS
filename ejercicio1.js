//dadas 2 var num a y b que el usuario debe seleccionar, se pide realizar un algoritmo que intercambie los valores de ambas variables y muestre cuanto valen al final cada una de ellas (recuerda la asignacion)
const prompt = require("prompt-sync")();
let A = Number(prompt("introduce un numero para A: "));
let B = Number(prompt("introduce un numero para B: "));
let C = A;
A = B;
B = C;
console.log(A, B);