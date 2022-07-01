const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const northEuCountries = countries.reduce((prev, curr, currIndex) => {
  // if (curr === "IceLand") will do the same thing but without currIndex
  if (currIndex === 4) {
    return `${prev + ", " + curr} are North Europian countries.`;
  }

  return prev + ", " + curr;
});

console.log(northEuCountries);
