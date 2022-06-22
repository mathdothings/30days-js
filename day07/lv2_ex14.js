const sumAll = (...args) => {
  let sum = 0;
  for (let num of args) sum += num;
  return sum;
};

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
