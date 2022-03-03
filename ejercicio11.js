console.clear();
const prompt = require("prompt-sync")();

const number1 = Number(prompt("Introduce monto de compra: "));
const Totaltxt = "Precio final: €";

if (isNaN(number1)) {
    console.log(`Debes ingresar solamente números`);
} else {
    let totalprice = 0;
    switch (true) {
        case number1 < 0:
            totalprice = "Precio ingresado incorrecto";
            break;
        case number1 >= 500 && number1 <= 1000:
            totalprice = number1 * 0.95;
            break;
        case number1 > 1000 && number1 <= 7000:
            totalprice = number1 * 0.90;
            break;
        case number1 > 7000 && number1 <= 15000:
            totalprice = number1 * 0.80;
            break;
        case number1 > 15000:
            totalprice = number1 * 0.75;
            break;
        default:
            totalprice = number1;
    }
    console.log(`${Totaltxt}${totalprice}`);
}