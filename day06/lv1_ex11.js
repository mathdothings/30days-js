let sumEven = (sumOdd = 0);

for (let x = 0; x <= 100; x += 2) {
  sumEven += x;
}

for (let x = 1; x <= 100; x += 2) {
  sumOdd += x;
}

console.log(`The sum of all evens from 0 to 100 is ${sumEven}.`);
console.log(`The sum of all odds from 0 to 100 is ${sumOdd}.`);
