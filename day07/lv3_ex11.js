const sum = function () {
  let sum = 0;
  for (let element of arguments) sum += element;
  return sum;
};

console.log(sum(1, 2, 3, 4, 5));
