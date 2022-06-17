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
let search = "ia";
let result = [];

for (let x = 0; x < len; x++) {
  let element = countries[x];
  let elementLength = element.length;
  let endOfElement = element.substring(elementLength - 2); // elementLength - 2 is the 2nd character of that string starting from the end of it
  if (endOfElement === search) result.push(element);
}

console.log(result);
