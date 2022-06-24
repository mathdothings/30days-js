const sumOfArrayItems = (array) => {
  let sum = 0;
  for (let element of array) {
    if (typeof element !== "number") {
      return `'${element}' is not a number. All array elements must be numeric.`;
    } else {
      sum += element;
    }
  }

  return sum / array.length;
};

console.log(sumOfArrayItems([1, 2, "three"]));
console.log(sumOfArrayItems([1, 2, 3]));
