console.clear();
const prompt = require("prompt-sync")();

const num = Number(prompt(`introduce un número: `));
const numPrimos = [];

console.log(`Los números son: ${comprobacion(num, numPrimos)}`);

function comprobacion(limit, lista) {
    let cantPrimos = 0;
    for (let i = 0; i <= limit; i++) {
        if (i <= 0 || i === 1 || i === 4) {
            continue;
        }
        testI(i);
        if (testI(i)) {
            continue;
        }
        lista[cantPrimos] = i;
        cantPrimos++;
    }
    console.log(`la cantidad de numeros primos es: ${cantPrimos}`);
    return lista;
}

function testI(value) {
    for (let j = 2; j < value / 2; j++) {
        if (value % j === 0) {
            return true;
        }
    }
}
