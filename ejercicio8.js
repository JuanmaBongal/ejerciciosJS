console.clear();
const prompt = require("prompt-sync")();

let sueldo = Number(prompt("Introduce sueldo: "));

if (isNaN(sueldo)) {
    console.log(`Debes ingresar solamente números`);
} else if (sueldo >= 1000) {
    console.log(`El sueldo a percibir es: ${sueldo}`);
} else {
    console.log(`El sueldo a percibir es: ${sueldo*1.15}.`);
}