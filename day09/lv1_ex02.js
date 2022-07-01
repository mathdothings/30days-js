const types = ["string", true, 10, undefined, NaN, [], {}, callbackForEach];

// forEach

function callbackForEach(element) {
  console.log(typeof element);
}

types.forEach(callbackForEach);
console.log();

// map

const callbackMap = (element) => {
  return !!element;
};

const booleanValues = types.map(callbackMap);
console.log(booleanValues);
console.log();

// filter

const callbackFilter = (element) => {
  return true == element;
};

const truthyValues = types.filter(callbackFilter);
console.log(truthyValues);
