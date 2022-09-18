let data = [];

const fetchData = async () => {
  const url = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(url);
    const countries = await response.json();
    data = countries;
  } catch (e) {
    // show the error
    console.error(e);
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

const interactivlyInsertElements = () => {
  const TOTAL_AMOUT_TO_INSERT = 10;
  const totalCountriesAmout = document.querySelector(
    "#total-amount-of-countries"
  );
  totalCountriesAmout.textContent = getTotalAmountOfCountries();
  const filteredChoice = document.querySelector("#filtered-choice");
  const countries = sortCountiesByPopulation();

  countries.forEach((country, index = 0) => {
    if (index < TOTAL_AMOUT_TO_INSERT) {
      const countryInfoContainer = document.createElement("div");
      const countryPosition = document.createElement("p");
      const countryFlagAndName = document.createElement("p");
      const countryPopulation = document.createElement("p");
      filteredChoice.appendChild(countryInfoContainer);
      countryInfoContainer.appendChild(countryPosition);
      countryInfoContainer.appendChild(countryFlagAndName);
      countryInfoContainer.appendChild(countryPopulation);
      countryPosition.innerText = index + 1;
      countryPosition.classList.add("country-position");
      countryFlagAndName.innerText = `${country.flag} ${country.fifa}`;
      countryPopulation.innerText = country.population;
    }
  });
};

async function main() {
  await fetchData();
  /*
    console.log("Countries by population:");
    console.log(sortCountiesByPopulation());

    console.log("Counties by languages:");
    console.log(sortCountiesByPopulation());

    console.log("Total amount of countries:");
    console.log(getTotalAmountOfCountries());

    console.log("Interactivly change elements");
  */
  interactivlyInsertElements();
}

main();
