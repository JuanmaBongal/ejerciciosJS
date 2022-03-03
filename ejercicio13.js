console.clear();
const prompt = require("prompt-sync")();

const base1 = Number(prompt("Introduce base rectángulo: "));
const height1 = Number(prompt("Introduce altura rectángulo: "));

if (isNaN(base1 || height1)) {
    console.log(`Debes ingresar solamente números`);
} else if(base1 <= 0 || height1 <= 0){
    console.log(`No es un rectangulo`);
} else{
    console.log(`La superfice del rectangulo es: ${base1 * height1}`);
    console.log(`El perimetro del rectangulo es: ${2 * (base1 + height1)}`);
}
