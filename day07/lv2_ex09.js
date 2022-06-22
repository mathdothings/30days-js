function removeItem(arr, index) {
  const result = [];
  for (let element of arr) {
    if (element !== arr[index] && index < arr.length) {
      result.push(element);
    }
  }

  return result;
}

console.log(removeItem([1, 2, 3, 4, 5], 2));
