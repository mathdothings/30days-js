const factorial = function (num) {
  let result = 1;
  while (num > 1) {
    result *= num;
    num--;
  }

  return result;
};

console.log(factorial(4));
