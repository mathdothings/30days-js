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

const len = countries.length;
const search = 5;
let result = [];

for (let x = 0; x < len; x++) {
  let element = countries[x];
  let elementLength = element.length;
  if (elementLength === search) {
    result.push(element);
  }
}

console.log(result);
