let apiData = [];

const fetchData = async () => {
  const url = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(url);
    const countries = await response.json();
    apiData = countries;
  } catch (e) {
    // show the error
    console.error(e);
  }
};

function getTotalAmountOfCountries() {
  return apiData.length;
}

function sortAllCountiesByLanguage() {
  const dataCopy = apiData;
  // sort by language
  dataCopy.sort((previous, current) => {
    if (previous.languages < current.languages) return -1;
    if (previous.languages < current.languages) return 1;
  });

  return dataCopy;
}

function getTotalAmountOfLanguages() {
  const uniqueLanguages = [];
  const totalAmountOfLanguages = [];
  const dataCopy = apiData;
  apiData.forEach((country) => {
    for (const language in country.languages) {
      let languageName = country.languages[language];
      if (!uniqueLanguages.includes(languageName)) {
        totalAmountOfLanguages.push({
          languageName,
          amount: 0,
        });
        uniqueLanguages.push(country.languages[language]);
      }

      if (uniqueLanguages.includes(languageName)) {
        for (const item of totalAmountOfLanguages) {
          if (item.languageName === languageName) {
            item.amount += 1;
          }
        }
      }
    }
  });

  // console.log(uniqueLanguages);
  console.log(totalAmountOfLanguages);
  return totalAmountOfLanguages;
}

function sortCountiesByPopulation() {
  const dataCopy = apiData;
  // sort descending = highest to lowest
  dataCopy.sort((previous, current) => {
    if (previous.population < current.population) return 1;
    if (previous.population > current.population) return -1;
    return 0;
  });

  return dataCopy;
}

function observeClickedButton() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const pointedElement = event.target.textContent.toLowerCase();
      // console.log(pointedElement);
      return pointedElement; // returns clicked button element
    });
  });
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

  console.clear();
  console.log(apiData);
  getTotalAmountOfLanguages();
  observeClickedButton();
  interactivlyInsertElements();
}

main();
