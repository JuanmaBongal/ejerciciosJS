console.clear();
const prompt = require("prompt-sync")();

let precio = Number(prompt("Introduce precio del artículo: "));
let pago = Number(prompt("Introduce pago realizado: "));
const vuelto = pago - precio;

if (isNaN(precio || pago)) {
    console.log(`Debes ingresar solamente números`);
} else if (pago >= precio) {
    console.log(`El vuelto a recibir es: ${vuelto}`);
} else {
    console.log(`El pago es insuficiente.`);
}