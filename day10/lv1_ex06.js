const countries = ["Brazil", "Argentina", "Peru", "Bolivia"];
const countriesWithLength = [];

for (const country of countries) {
  countriesWithLength.push([country, country.length]);
}

const map = new Map(countriesWithLength);

console.log(map);
