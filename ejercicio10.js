console.clear();
const prompt = require("prompt-sync")();

let categoria = Number(prompt("Introduce categoria del 1 al 4: "));
let sueldo = Number(prompt("Introduce sueldo: "));

/*if (!(isNaN(categoria) || isNaN(sueldo))) {
    switch (categoria) {
        case 0:
            console.log(`El sueldo actual es: $(sueldo * 1.15)`);
            break;
        case 1:
            console.log(`El sueldo actual es: $(sueldo * 1.10)`);
            break;
        case 2:
            console.log(`El sueldo actual es: $(sueldo * 1.06)`);
            break;
        case 3:
            console.log(`El sueldo actual es: $(sueldo * 1.03)`);
            break;
        default:
            console.log(`El sueldo actual es: $(sueldo)`);
    }
} else {
    console.log(`Debes ingresar solamente números`);
}*/

//Simplicando la cantidad de tipeos de console.log
/*
if (!(isNaN(categoria) || isNaN(sueldo))) {
    let incremento = 0;
    switch (categoria) {
        case 1:
            incremento = 1.15;
            break;
        case 2:
            incremento = 1.10;
            break;
        case 3:
            incremento = 1.06;
            break;
        case 4:
            incremento = 1.03;
            break;
        default:
            console.log(`Las categorias son del 1 al 4`);
    }
    if (incremento>0){
        console.log(`El nuevo sueldo es ${sueldo*incremento}`);
    }
} else {
    console.log(`Debes ingresar solamente números`);
}*/


//Con Array (entre [])
/*const incrementos = [1.15,1.10,1.06,1.03];
if (categoria >= 1 && categoria <5){
    console.log(`El nuevo sueldo es: ${sueldo*incrementos[categoria-1]}`);
} else {
    console.log(`Categoría invalida`);
}*/

//Con Bucle While
const incrementos = [1.15,1.10,1.06,1.03];
while (categoria <= 0 || categoria > 4){
    categoria = Number(prompt("la categoria debería ser SOLO del 1 al 4: "));
}
console.log(`El nuevo sueldo es: ${sueldo*incrementos[categoria-1]}`);
