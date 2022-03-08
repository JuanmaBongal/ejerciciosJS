console.clear();

const randomArray = [];
const maxArray = 20;

for (let i = 0; i < maxArray; i++) {
    randomArray[i] = comprobar(randomArray);
}
console.log(randomArray);

//valor,indice,array
function comprobar(array) {
    let value;
    do {
        value = Math.floor(Math.random() * maxArray) + 1;
    } while (include(array, value))
    return value;
}

function include(array, num) {
    for (const item of array) {
        if (num === item){
            return true;
        }
    }
    return false;
}

/**
 * const comprobar = (array) => {
 * let value;
    do {
        value = Math.floor(Math.random() * maxArray) + 1;
    } while (include(array, value))
    return value;
 * }
    De esta manera se genera una clausura del valor de "VALUE" y se 
    guarda en una constante hasta tanto se vuelva a llamar a la función.
 */