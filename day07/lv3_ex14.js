function modifyArray(array) {
  if (array.length < 5) return "Not found.";

  array[4] = array[4].toUpperCase();
  return array;
}

console.log(modifyArray(["one", "two", "three", "four", "five"]));
console.log(modifyArray(["one", "two", "three", "four"]));
