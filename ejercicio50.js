console.clear();
const prompt = require("prompt-sync")();

let letra = "";
let sumaletras = 0;
let frase = "";
do{
    frase = prompt(`introduce una frase: `);
    frase = frase.toLowerCase();
} while (frase.length === 0)

do{
    letra = prompt(`introduce una letra: `);
    letra = letra.toLowerCase();
} while (letra.length === 0 || letra.length > 1 || !isNaN(letra))

for (let item of frase) {
    if (item === letra){
        sumaletras ++;
    }
}

console.log(`La letra "${letra}" se encuentra "${sumaletras}" veces en la frase`);
