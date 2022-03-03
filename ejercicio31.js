console.clear();
const prompt = require("prompt-sync")();

const cantLineas = Number(prompt(`introduce numero: `));

for (let i=0; i<cantLineas; i++){
    console.log(imprimir(i," ")+imprimir(cantLineas-i,"*"));
}

function imprimir (cantidad, caracter){
    let linea ="";
    for (let i=0; i<cantidad;i++){
        linea += caracter;
    }
    return linea;
}

