const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
let resultado;
for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
        resultado = "Diferentes";
        break;
    } else {
        resultado = "Son Iguales";
    }
}
console.log(resultado);