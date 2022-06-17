let sumEven = (sumOdd = 0);

for (let x = 0; x <= 100; x += 2) {
  sumEven += x;
}

for (let x = 1; x <= 100; x += 2) {
  sumOdd += x;
}

let sums = [sumEven, sumOdd];
console.log(sums);
