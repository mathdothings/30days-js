const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// const result = products.map((elem) => [elem.product, elem.price]);
const result = products.map(function (elem) {
  if (typeof elem.price === "number") {
    return [elem.product, elem.price];
  } else {
    return [elem.product, null];
  }
});
console.log(result);
