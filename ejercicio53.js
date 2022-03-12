console.clear();
const prompt = require("prompt-sync")();

const num = Number(prompt(`introduce cantidad de números a promediar: `));

const numList = [];
let suma = 0;

for (let i = 0; i < num; i++) {
    numList[i] = Number(prompt(`${i+1}) introduce numero: `));
    suma += numList[i];
}
console.log(`El promedio es ${suma / numList.length}`);