const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "huawei honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function isProduct(array, product) {
  for (let element of array) {
    for (let key in element) {
      let value = element[key];
      if (value === product) return element;
    }
  }

  return false;
}

function isObject(obj) {
  if (typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (key !== undefined) return true;
      }
    }
  }

  return false;
}

function iterateRecursive(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (isObject(key)) {
        iterateRecursive(obj[key]);
      } else {
        if (key === "ratings") {
        }
      }
    }
  }
}

function rateProduct(array, product, rate) {
  const item = isProduct(array, product);
  // this means that the item already exists
  if (item !== false) {
    item.ratings.push({ userId: "admin", rate: rate });
  }
}

// a)

console.log(isProduct(products, "Laptop")); // product before adding new rate
rateProduct(products, "Laptop", 5);
rateProduct(products, "Laptop", 1);
console.log(isProduct(products, "Laptop")); // product after adding new rate

// b)
