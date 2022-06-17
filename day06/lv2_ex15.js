const fruits = ["banana", "orange", "mango", "lemon"];

const len = fruits.length;
let result = [];

for (let x = len - 1; x >= 0; x--) {
  let element = fruits[x];
  result.push(element);
}

console.log(result);
