const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
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

function rateProduct(array, product, rate) {
  const item = isProduct(array, product);
  // this means that the item already exists
  if (item !== false) {
    item.ratings.push({ userId: "admin", rate: rate });
  }
}

function isProduct(array, product) {
  for (let element of array) {
    for (let key in element) {
      let value = element[key];
      if (value === product) return element;
    }
  }

  return false;
}

// a)

console.log(isProduct(products, "Laptop")); // product before adding new rate
rateProduct(products, "Laptop", 5);
rateProduct(products, "Laptop", 1);
console.log(isProduct(products, "Laptop")); // product after adding new rate

// b)

function averageRating(array, product) {
  const totalRating = [];

  const item = isProduct(array, product);
  for (let key in item) {
    if (key === "ratings") {
      const ratings = key;
      for (let index of ratings) {
        for (let prop in index) {
          let value = index[prop];
          if (prop === "rate") totalRating.push(index[value]);
        }
      }
    }
  }

  console.log(totalRating);

  const len = totalRating.length;
  let sum = 0;
  for (let rate of totalRating) {
    sum += rate;
  }
  return Math.floor(sum / len);
}

averageRating(products, "Laptop");
