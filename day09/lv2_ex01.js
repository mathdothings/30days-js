const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const productValues = products.map((ele) => ele.price);
const validValues = productValues.filter((ele) => {
  if (typeof ele === "number") return ele;
});
const total = validValues.reduce((prev, curr) => prev + curr);
console.log(total); // 27

const directTotal = products
  .map((ele) => ele.price)
  .filter((ele) => {
    if (typeof ele === "number") return ele;
  })
  .reduce((prev, curr) => prev + curr);

console.log(directTotal);
