const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const onlyProdWithPrice = products.filter((elem) => {
  if (typeof elem.price === "number") return [elem.product, elem.price];
});

console.log(onlyProdWithPrice);
