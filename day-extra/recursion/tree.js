function hasProperty(object) {
  if (typeof object === "object") {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        if (key !== undefined) {
          return true;
        }
      }
    }
  }

  return false;
}

function iterateRecursive(object) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (hasProperty(object[key])) {
        console.log("Inside: " + key);
        iterateRecursive(object[key]);
        console.log("Outside: " + key);
      } else {
        console.log("\tproperty: " + key + "\tvalue: " + object[key]);
      }
    }
  }
}

const empty = {};

const tree = {
  name: "John",
  children: [
    {
      name: "Gim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        {
          name: "Kyle",
          children: [],
        },
        {
          name: "Sophia",
          children: [],
        },
      ],
    },
  ],
};

iterateRecursive(empty); // => <nothing>
iterateRecursive(tree);
