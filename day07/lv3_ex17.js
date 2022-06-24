function isSameDataType(array) {
  for (let elementOne of array) {
    for (let elementTwo of array) {
      if (typeof elementOne === typeof elementTwo) {
        continue;
      } else return false;
    }
  }

  return true;
}

console.log(isSameDataType([1, 2, "three"]));
console.log(isSameDataType([1, 2, 3]));
