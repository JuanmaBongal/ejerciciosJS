console.clear();
const prompt = require("prompt-sync")();

const randomArray = [];
const maxArray = Number(prompt("Ingrese cantidad de números a evaluar: ")),
    limit = [-100, 100];
let addAll = 0,
    countPos = 0,
    addPos = 0;

for (let i = 0; i < maxArray; i++) {
    randomArray[i] = Math.round(Math.random() * (limit[1] - limit[0])) + limit[0];
    addAll += randomArray[i];
    if (randomArray[i] > 0) {
        countPos++;
        addPos += randomArray[i];
    }
}

console.log(`${randomArray}     Suma de positivos: ${addPos}
Los cantidad de Positivos es: ${countPos}
El promedio de positivos es: ${addPos/(countPos === 0 ? 1: countPos)}
El promedio de todos los numeros es: ${addAll/randomArray.length}`);