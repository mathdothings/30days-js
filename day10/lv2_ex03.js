const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

const A = new Set(a);
const B = new Set(b);

// (A / B) - difference between A and B
const c = a.filter((num) => !B.has(num));
const C = new Set(c);

// (B / A) - difference between B and A
const d = b.filter((num) => !A.has(num));
const D = new Set(d);

console.log(C); // { 8, 9 }
console.log(D); // { 3, 7 }
