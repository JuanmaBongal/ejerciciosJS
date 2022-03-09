const operacion = [(x, y) => x + y, (x, y) => x - y, (x, y) => x * y, (x, y) => x / y]
const prompt = require("prompt-sync")();
let x = Number(prompt("Introduce un número: "));
let y = Number(prompt("Introduce otro numero: "));
let eleccion;
do {
    console.clear();
    console.log(`Seleccione el número de una de las siguientes opciones:
1: Sumar
2: Restar
3: Multiplicar
4: Dividir
5: Salir del programa.
 `);
    eleccion = Number(prompt());
} while (eleccion > 5 || eleccion < 1)
if (eleccion < 5) {
    console.log("Resultado: ", operacion[eleccion - 1](x, y));
} else {
    console.log("GRACIAS POR PARTICIPAR");
}
