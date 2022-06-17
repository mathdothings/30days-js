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
];

let len = countries.length;
let result = [];

for (let x = 0; x < len; x++) {
  let elemt = countries[x];
  let elemt3Upper = elemt.substring(0, 3).toUpperCase();
  let elemtLength = countries[x].length;
  // push a new array with these three elements
  result.push([elemt, elemt3Upper, elemtLength]);
}

console.log(result);
