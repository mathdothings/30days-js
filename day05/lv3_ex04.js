const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
  "Brazil",
];

let len = countries.length;
let middle = Math.trunc(len / 2);
if (len % 2 === 0) {
  // divide it into two equals if it is even
  console.log(countries.slice(0, middle));
  console.log(countries.slice(middle, len));
} else {
  //  or add one more to the first half if it is odd
  countries.unshift("Brazil");
  console.log(countries.slice(0, middle + 1));
  console.log(countries.slice(middle + 1, len));
}
