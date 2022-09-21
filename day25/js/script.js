// ### global variables ###
let APIDATA = [];
const buttons = document.querySelectorAll("button");

// ### data fetch ###
const fetchData = async () => {
  const url = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(url);
    const countries = await response.json();
    APIDATA = countries;
  } catch (e) {
    // show the error
    console.error(e);
  }
};

// ### data handling ###
function getTotalAmountOfCountries() {
  return APIDATA.length;
}

function getTotalAmountOfLanguages() {
  const uniqueLanguages = [];
  const totalAmountOfLanguages = [];
  const dataCopy = APIDATA;
  APIDATA.forEach((country) => {
    for (const language in country.languages) {
      let languageName = country.languages[language];
      if (!uniqueLanguages.includes(languageName)) {
        totalAmountOfLanguages.push({
          language: languageName,
          amount: 0,
        });
        uniqueLanguages.push(country.languages[language]);
      }

      if (uniqueLanguages.includes(languageName)) {
        for (const item of totalAmountOfLanguages) {
          if (item.language === languageName) {
            item.amount += 1;
          }
        }
      }
    }
  });

  return totalAmountOfLanguages;
}

function sortAllLanguagesByAmount() {
  const languages = getTotalAmountOfLanguages();

  // sort by language ascending
  const result = languages.sort((previous, current) => {
    if (previous.amount < current.amount) return 1;
    if (previous.amount > current.amount) return -1;
    return 0;
  });

  return result;
}

function sortCountiesByPopulation() {
  const dataCopy = APIDATA;
  // sort descending = highest to lowest
  dataCopy.sort((previous, current) => {
    if (previous.population < current.population) return 1;
    if (previous.population > current.population) return -1;
    return 0;
  });

  return dataCopy;
}

// ### browser event handling ###
function observeClickedButton() {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const pointedButton = event.target;
      // console.log(pointedButton);
      stylyzeClickedButton(pointedButton);
      return pointedButton; // returns clicked button element
    });
  });
}

// ### redering handling ###
function clearElement(element) {
  element.innerHTML = "";
}

function resetHightlightedButton() {
  buttons.forEach((button) => {
    button.classList.remove("clicked-button");
  });
}

function stylyzeClickedButton(button) {
  resetHightlightedButton();
  if (button !== undefined) {
    button.classList.toggle("clicked-button");
  }
}

// [TODO] -> REWRITE THIS FEATURE
const interactivlyInsertElements = () => {
  const TOTAL_AMOUT_TO_INSERT = 10;
  const totalCountriesAmout = document.querySelector(
    "#total-amount-of-countries"
  );
  totalCountriesAmout.textContent = getTotalAmountOfCountries();
  const filteredChoice = document.querySelector("#filtered-choice");
  const countries = sortCountiesByPopulation();

  clearElement(filteredChoice);

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

// ### aplication start ###
async function main() {
  await fetchData();

  /* ### DEBUGGING ### */

  // console.log(APIDATA);
  // console.log(observeClickedButton())
  // console.log(getTotalAmountOfLanguages());
  // console.log(sortAllLanguagesByAmount());

  /* ### DEBUGGING ### */

  observeClickedButton();
  getTotalAmountOfLanguages();
  interactivlyInsertElements();
}

console.clear();

main();
