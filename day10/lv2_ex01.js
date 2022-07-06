const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

const c = [...a, ...b];
const C = new Set(c);
console.log(C);
