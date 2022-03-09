//const nOrder = [23, 45, 15, 72, 96];

//const ordered = nOrder.sort((a, b) => b-a);
console.clear();

const nOrder = [];
for (let i = 0; i < 10; i++){
    nOrder[i] = Math.round(Math.random() * 100) +1;
}
const ordered = nOrder.sort((a, b) => (a > b) ? -1 : 1);
console.log(ordered);