console.clear();
const prompt = require("prompt-sync")();
const notas = ["Practica","Teorica","Problemas"];
const porcentajes = [10,40,50];

let nombre;

do {
    nombre = prompt("Introduce alumno:");
    if (nombre !== "") {
        calcularNota(nombre);
    }
} while (nombre !== "");

function calcularNota(alumno) {
    let nota = 0;
    for (let i=0, max=notas.length; i<max; i++){
        nota += pedirNota (notas[i],porcentajes[i]);
    }
    console.log(`La nota de ${alumno} es ${nota}`);
}

function pedirNota(nota, porcentaje) {
    let valor = Number(prompt(`Introduce la nota de ${nota}:`));
    return valor * porcentaje / 100;
}

