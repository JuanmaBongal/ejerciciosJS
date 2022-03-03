/**
 * Desarrollar un timer o temporizador. La cantidad de segundos con la que se quiere hacer 
 * la cuenta atrás se introducirá por teclado. Cuando llegue al final, se imprimirá 
 * "¡¡Ring!!“ y el programa acabará.
• Investigar cómo hacer los intervalos en JS
 */

console.clear();
const prompt = require("prompt-sync")();

let segundos = Number(prompt(`introduce los segundos: `));

const myTimeout = setTimeout(cueantaAtras, segundos*1000);

function cueantaAtras() {
    console.log(`¡¡Ring!!`);
  clearTimeout(myTimeout);
}