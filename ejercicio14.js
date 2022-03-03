console.clear();
const prompt = require("prompt-sync")();

const cantgalones = Number(prompt("Introduce cantidad de galones: "));

if (isNaN(cantgalones)) {
    console.log(`Debes ingresar solamente números`);
} else if(cantgalones <= 0 ){
    console.log(`No ha cargado combustible`);
} else{
    console.log(`El precio es: ${cantgalones*3.78541*1.333}`);
}
