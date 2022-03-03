console.clear();
let multiplosTres = 0;
let multiplosDos = 0;

for (let i = 1; i <= 100; i++) {
    multiplosDos += (i % 2 === 0) ? 1 : 0;
    multiplosTres += (i % 3 === 0) ? 1 : 0;
}
console.log(`la cantidad de multiplos de DOS es ${multiplosDos}`);
console.log(`la cantidad de multiplos de TRES es ${multiplosTres}`);