console.clear();
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un numero: "));
let suma = 0;
let contador = 0;
const cantnumeros = number1;

if (isNaN(number1)) {
    console.log(`Debes ingresar solamente números`);
} else {
    while(contador<cantnumeros)
    if (number1 % 2 == 0) {
        suma = suma + number1;
        contador++;
        number1 +=2;
    } else {
        number1 = number1 + 1
    }
    console.log(`la suma de los ${cantnumeros} primeros numeros pares a partir de ${cantnumeros} es: ${suma}`);
}