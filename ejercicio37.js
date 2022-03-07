console.clear();
const prompt = require("prompt-sync")();

const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

do{
    dninput = (prompt("Introduce SOLO 8 numero del DNI: "));
} while (test(dninput));
    console.log(`El DNI completo es ${dninput}${letras[Number(dninput) % 23] }`);

function test(numero) {
    if(numero.length === 8){
        return true;
    } else {
        console.log(`El numero debe tener solo 8 digitos`);
        return false;
    }
}