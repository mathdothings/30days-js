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
  "Iceland",
];

let len = countries.length;
let result = [];

for (let x = 0; x < len; x++) {
  let country = countries[x];
  if (country.includes("land")) {
    result.push(country);
  }
}

console.log(result);
