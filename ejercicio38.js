const arrayCinco = [1, 2, 3, 4, 5];
let nuevoArray = [];
for (let i = 0; i< arrayCinco.length; i++) {
    nuevoArray[arrayCinco.length-i-1] = arrayCinco[i];
}
console.log(nuevoArray);