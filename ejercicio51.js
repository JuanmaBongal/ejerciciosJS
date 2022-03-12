console.clear();
const prompt = require("prompt-sync")();

const num = Number(prompt(`introduce un número: `));

console.log(comprobacion(num));

function comprobacion(numero) {
    if (numero <= 0 || numero === 1 || numero === 4) {
        return "No es primo";
    }
    for (let i = 2; i < numero / 2; i++) {
        if (numero % i === 0) {
            return "No es primo";
        }
    }
    return "Es primo";
}
