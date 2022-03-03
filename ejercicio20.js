console.clear();
const prompt = require("prompt-sync")();

let password = prompt("Introduce una clave: ");
let contador = 1;
for (contador; contador <= 3; contador++) {
    if (password == "eureka") {
        console.log(`La clave es correcta.`);
        break;
    } else {
        let intento = 3 - contador
        if (intento !== 0) {
            password = prompt(`INCORRECTA (quedan ${intento} intentos).Introduce nuevamente clave: `);
        }
    }
}