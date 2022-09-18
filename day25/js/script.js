let data = [];

const fetchData = async () => {
  const url = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(url);
    const countries = await response.json();
    data = countries;
  } catch (e) {
    console.error(e); // show the error
  }
};

function getTotalAmountOfCountries() {
  return data.length;
}

function sortAllCountiesByLanguage() {
  const dataCopy = data;
  // sort by language
  dataCopy.sort((previous, current) => {
    if (previous.languages < current.languages) return -1;
    if (previous.languages < current.languages) return 1;
  });

  return dataCopy;
}

function sortCountiesByPopulation() {
  const dataCopy = data;
  // sort descending = highest to lowest
  dataCopy.sort((previous, current) => {
    if (previous.population < current.population) return 1;
    if (previous.population > current.population) return -1;
    return 0;
  });

  return dataCopy;
}

async function main() {
  await fetchData();
  console.log("Countries by population:");
  console.log(sortCountiesByPopulation());

  console.log("Counties by languages:");
  console.log(sortCountiesByPopulation());

  console.log("Total amount of countries:");
  console.log(getTotalAmountOfCountries());
}

main();
