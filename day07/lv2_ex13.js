const evensAndOdds = (num) => {
  let evenSum = 0;
  let oddSun = 0;

  while (num > 0) {
    if (num % 2 === 0) {
      evenSum += num;
      num--;
    } else {
      oddSun += num;
      num--;
    }
  }

  return [evenSum, oddSun];
};

const result = evensAndOdds(10);
console.log(`Evens = ${result[0]}`);
console.log(`Odds = ${result[1]}`);
