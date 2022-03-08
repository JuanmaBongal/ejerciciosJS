console.clear();
const prompt = require("prompt-sync")(),
    MAXSECONDS = 10,
    MAXMINUTES = 60,
    MAXHOURS = 24;
let actualSeconds = 0;
let actualMinutes = 0;
let actualHour = 0;
//let segundos = Number(prompt(`introduce los segundos: `));

/**const myTimeout = setTimeout(cueantaAtras, MAXSECONDS*1000);

function cueantaAtras() {
    console.log(`¡¡Ring!!`);
  clearTimeout(myTimeout);
}*/
do{
    console.clear();
    setTimeout(tiempo(), 1000);
    actualSeconds++;
} while(actualSeconds < MAXSECONDS);
    
function tiempo(){
    console.log(`${actualHour}:${actualMinutes}:${actualSeconds}`);

}

/**
 * let segundos = 0;
let minutos = 0;
let horas = 0;
setInterval(() => {
    console.clear();
    if (segundos === 59) {
        segundos = 0;
        if (minutos === 59) {
            minutos = 0;
            if (horas === 24) {
                horas = 0;
            } else
            horas++;
        } else {
            minutos++;
        }
    }else{
        segundos++;
    } console.log(horas, ":", minutos, ":", segundos)
}, 1000)
 */