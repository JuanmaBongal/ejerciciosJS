console.clear();

let costes = [];
const departamentos = ["Dulces", "Bebidas", "conservas"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Sept", "Octubre", "Noviembre", "Diciembre"
];

const MAXMESES = meses.length;
const MAXDEP = departamentos.length;

for (let i = 0; i < MAXDEP; i++) {
    const item = [];
    for (let j = 0; j < MAXMESES; j++) {
        item[j] = Math.floor(Math.random() * 100000) + 20000;
    }
    costes[i] = item;
}
console.log(costes);

/** Esto será reemplazado mas abajo por las funciones
 let maxCoste = -1;
 let maxPos = -1;
 for (let i = 0; i < MAXMESES; i++) {
    if (costes[0][i] > maxCoste) {
        maxCoste = costes[0][i];
        maxPos = i;
    }
}
console.log(`El mes ${meses[maxPos]} fue e de mayor coste con un valor de ${maxCoste}`);

let suma = 0;
for (let i = 0; i < MAXMESES; i++) {
    suma += costes[1][i];
}
console.log(`El prmedio del departamento de ${departamentos[1]} fue de ${suma/MAXMESES}`);

let minCoste = Infinity;
let minPos = -1;
maxCoste = -Infinity;
maxPos = -1;
for (let i = 0; i < MAXMESES; i++) {
    if (costes[1][i] > maxCoste) {
        maxCoste = costes[1][i];
        maxPos = i;
    }
    if (costes[1][i] < minCoste) {
        minCoste = costes[1][i];
        minPos = i;
    }
}
console.log(`El mes ${meses[maxPos]} fue e de mayor coste con un valor de ${maxCoste}`);
console.log(`El mes ${meses[minPos]} fue e de menor coste con un valor de ${minCoste}`);

minPos = -1;
minCoste = -1;
for (let i = 0; i < MAXDEP; i++) {
    if (costes[i][11] < minCoste) {
        minCoste = costes[i][11];
        minPos = i;
    }
}
console.log(`El departamento ${departamentos[minPos]} fue el de menor coste con un valor de ${minCoste}`);
*/

//con funciones 
//ej.: para valor maximo:
//let a = selector (costes[0], (x,y) => (x>y));
//ej.: para valor minimo:
//let b = selector (costes[0], (x,y) => (x>y));

function selector(lista, comparacion) {
    let posicion = 0;
    let valor = lista[0];
    for (let i = 0, max =lista.length; i < max; i++) {
        if (comparacion(lista[i], valor)){
            valor = lista[i];
            posicion = i;
        }
    }
    return [posicion, valor] //si lo transformo en objeto seria: return {pos: posicion, val: valor}
}

let value = selector (costes[0], (x,y) => (x>y));
console.log (`El mes ${meses[value[0]]} fue el de mayor coste con un valor de ${value[1]}`);//usando el objeto quedaria ${meses[value.pos]} y ${value.val}
let suma = 0;
for (let i=0; i < MAXMESES; i++) {
    suma += costes[1][i];
}
console.log (`El promedido del departamento de ${departamentos[1]} fue ${suma/MAXMESES}`);
value = selector (costes[1], (x,y) => (x>y));
console.log (`El mes ${meses[value[0]]} fue el de mayor coste con un valor de ${value[1]}`);
value = selector (costes[1], (x,y) => (x<y));
console.log (`El mes ${meses[value[0]]} fue el de menor coste con un valor de ${value[1]}`);
value = selector (costes, (x,y) => (x[11] < y[11]));
console.log (`El departamento ${departamentos[value[0]]} fue el de menor coste en diciembre con un valor de ${value[1][11]}`);


//esto fue reemplazado en la función flecha de arriba
/**function maximo (x,y){
    return (x > y);
}
function minimo (x,y) {
    return (x < y);
}*/