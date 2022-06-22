const printArray = (...args) => {
  for (let element of args) {
    console.log(element);
  }
};

printArray(1, 2, 3, 4);
