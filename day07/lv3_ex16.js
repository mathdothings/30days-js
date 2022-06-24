function isUnique(array) {
  for (let elementOne of array) {
    let count = 0;
    for (let elementTwo of array) {
      if (elementOne === elementTwo) {
        count++;
      }
    }
    if (count > 1) return false;
  }

  return true;
}

console.log(isUnique([1, 2, 3, 3]));
console.log(isUnique([1, 2, 3]));
