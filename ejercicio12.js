console.clear();
const prompt = require("prompt-sync")();

const number1 = Number(prompt("Introduce cantidad de sonidos: "));

if (isNaN(number1)) {
    console.log(`Debes ingresar solamente números`);
} else if (number1 == 0) {
    console.log(`Error`);
} else {
    console.log(`La temperatura es: ${number1 / 4 + 40}`);
}