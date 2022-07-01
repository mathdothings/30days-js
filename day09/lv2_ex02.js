const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const total = products.reduce((prev, curr, currIndex) => {
  // this is necesary if the first array item isn't a number
  // that means this is the first iteration over the recude sequence
  if (currIndex === 1) {
    if (typeof prev.price === "number") {
      prev = prev.price;
    } else {
      prev = 0;
    }
  }

  // but if first item already is a number just keep going
  if (typeof prev.price === "number") {
    prev = prev.price;
  } else prev = prev;
  if (typeof curr.price === "number") {
    curr = curr.price;
  } else curr = 0;

  return prev + curr;
});

console.log(total);
