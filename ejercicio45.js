let arrayInicio = [];
let arraySecundario = [];
const prompt = require('prompt-sync')();
let tamaño = Number(prompt("Tamaño maximo: "));
for (let i = 0; i < tamaño; i++) {
    arrayInicio[i] = Math.floor(Math.random() * 1000) + 1;
    (arrayInicio[i] % 2 === 0 && arrayInicio[i] > 25) ? arraySecundario[i] = arrayInicio[i]: arraySecundario[i] = null;
}
console.log(arrayInicio, arraySecundario);