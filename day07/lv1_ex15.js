const findMax = (...args) => {
  let max = args[0];
  for (let element of args) {
    if (element > max) max = element;
  }

  return max;
};

console.log(findMax(0, 5, 10));
console.log(findMax(0, -10, -2));
