function reverseArray(arr) {
  const reversed = [];
  for (let e = arr.length - 1; e >= 0; e--) {
    let element = arr[e];
    reversed.push(element);
  }

  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
