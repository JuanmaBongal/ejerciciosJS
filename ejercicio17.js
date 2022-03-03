console.clear();
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un numero: "));
// suma= (n*(n+1))/2
if (isNaN(number1)) {
    console.log(`Debes ingresar solamente números`);
} else {
    let resultado =0;
    for(let i = 1; i <=number1; i++){
        resultado = i+resultado;
        console.log(`La suma de todos los numeros es: ${resultado}`);
    }
}