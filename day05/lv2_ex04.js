const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let indexOfEthiopia = countries.indexOf("Ethiopia");
if (indexOfEthiopia !== -1) {
  countries[indexOfEthiopia] = countries[indexOfEthiopia].toUpperCase();
} else {
  countries.push("Ethiopia");
  indexOfEthiopia = countries.indexOf("Ethiopia");
  countries[indexOfEthiopia] = countries[indexOfEthiopia].toUpperCase();
}

console.log(countries[indexOfEthiopia]);
