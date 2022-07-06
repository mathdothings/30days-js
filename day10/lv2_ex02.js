const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const A = new Set(a);
const B = new Set(b);
const countries = ["Finland", "Sweden", "Norway"];

const c = a.filter((elem) => B.has(elem));
const C = new Set(c);
console.log(C);
