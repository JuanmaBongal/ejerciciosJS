console.clear();
const prompt = require("prompt-sync")();

/**const orden = ["1º","2º","3º","4º","5º","6º","7º","8º","9º","10º"];

for (let i=0; i<10; i++){
    let number = prompt(`introduce el ${orden[i]} número: `);
    console.log(`El cubo de ${number} es ${number**3}`);
}*/

for (let i=1; i<11; i++){
    let number = prompt(`introduce el ${i}º número: `);
    console.log(`El cubo de ${number} es ${number**3}`);
}
