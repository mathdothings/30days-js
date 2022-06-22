const sumOfOdds = function (num) {
  let sum = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      sum += num;
    }
    num--;
  }

  return sum;
};

console.log(sumOfOdds(5));
