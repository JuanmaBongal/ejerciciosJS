const unOrder = [];
const MAXLENGTH = 5;
for (let i = 0; i < MAXLENGTH; i++){
    unOrder[i] = Math.round(Math.random() * 100) +1;
}
console.log(unOrder);
const ordered = unOrder.sort((a, b) => (a > b) ? 1 : -1);
console.log(ordered);