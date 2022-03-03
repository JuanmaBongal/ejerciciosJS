const max= 4;

for (let i=0; i<max; i++){
    console.log(imprimir_linea(i));
}

function imprimir_linea (numLinea){
    if (numLinea === 0 || numLinea === max-1){
        return rellenar_linea ("*","*");
    } else {
        return rellenar_linea ("*"," ");
    }
}

function rellenar_linea (extremo, centro){
    let linea = "";
    for(let i=0; i<max; i++){
        if(i===0 || i===max-1){
            linea += extremo;
        } else {
            linea += centro;
        }
    }
    return linea;
}