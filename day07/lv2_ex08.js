const addItem = function (...item) {
  const arr = [];
  for (let element of item) {
    arr.push(element);
  }

  return arr;
};

console.log(addItem("Math", 29, "Brazil", true));
