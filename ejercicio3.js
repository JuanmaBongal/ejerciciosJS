console.clear();
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un numero: "));
let number2 = Number(prompt("Introduce el segundo numero: "));
let number3 = Number(prompt("Introduce el tercer numero: "));

if (isNaN(number1) || isNaN(number2) || isNaN(number3)){
    console.log(`Debes ingresar solamente números`);
} else if (number1 === number2 && number1 === number3){
    console.log(`Los 3 números son iguales`);
}  else if (number1 > number2 && number1 > number3){
    console.log(`El número "${number1}" es el mayor de los 3.`);
}  else if (number1 === number2 && number1 > number3){
    console.log(`El número "${number1}" se repite dos veces y es mayor que "${number3}"`);
} else if (number1 === number3 && number1 > number2){
    console.log(`El número "${number1}" se repite dos veces y es mayor que "${number2}"`);
} else if (number2 > number3){
    console.log(`El número "${number2}" es el mayor de todos`);
} else if (number2 === number3){
    console.log(`El número "${number2}" se repite dos veces y es mayor que "${number1}"`);
} else {
    console.log(`El número "${number3}" es el mayor de todos`);
} 