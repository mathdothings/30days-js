declaration(); // the js interpreter will hoist the function declaration below and use it here
// expression(); // error because expression was not yet initialized

// declaration
function declaration() {
  return true;
}

const expression = function () {
  console.log("Expression");
};

function sumAll(arg1, arg2) {
  console.log(arg1, arg2);
  console.log(arguments);
  let sum = 0;
  for (elem of arguments) sum += elem;
  return sum;
}

// unlimited params arrow function need to be declared with spread operator
const sumAllNums = (...args) => {
  // console.log(args);
  // console.log(typeof args); // object but it is not an array-like object like 'arguments' actually is
  // console.log(arguments);
  let sum = 0;
  for (let elem of args) sum += elem;
  return sum;
};

// this function can't accept unlimited params
const duplicate = (param1, param2) => {
  return [param1 * 2, param2 * 2];
};
console.log(duplicate(1, 2, 3));

// self invoking function
(function () {
  // console.log(arguments);
  let sum = 0;
  for (let elem of arguments) sum += elem;
  return sum;
})(1, 2, 3, 4, 5);
