// ### global variables ###
let APIDATA = [];
const buttons = document.querySelectorAll("button");
let renderPopulationChartControl = false;
let renderLanguageChartControl = false;
let hasChart = false;

// ### colors ###
const BLUE = "#076678";
const YELLOW = "#d79921";
const RED = "#cc241d";
const BLACK = "#3c3836";

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

function getTotalWorldPopulation() {
  let population = 0;
  APIDATA.forEach((country) => {
    population += country.population;
  });

  return population;
}

function getTenMostPopulatedCountriesByName() {
  const namesAndFlags = [];
  const data = sortCountiesByPopulation();

  for (let x = 0; x < 10; x++) {
    const countryName = data[x].name.common;
    const countryFlag = data[x].flag;
    namesAndFlags.push(`${countryName} ${countryFlag}`);
  }

  return namesAndFlags;
}

function calculateWorldPercentPopulationPerContry() {
  const percentages = [];
  const totalPopulation = getTotalWorldPopulation();
  let sum = 0;
  const countries = sortCountiesByPopulation();
  for (let x = 0; x < 10; x++) {
    const countryPop = countries[x].population;
    const calc = Math.floor((countryPop / totalPopulation) * 100);
    percentages.push(calc);
  }

  return percentages;
}

function calculateMostSpokenLanguages() {
  const languages = sortAllLanguagesByAmount();
  const result = [];

  for (let x = 0; x < 10; x++) {
    const item = languages[x];
    result.push(item.language);
  }

  return result;
}

function calculateMostSpokenLanguagesAmouts() {
  const languages = sortAllLanguagesByAmount();
  const result = [];

  for (let x = 0; x < 10; x++) {
    const item = languages[x];
    result.push(item.amount);
  }

  return result;
}

// ### browser event handling ###
function observeClickedButton() {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const pointedButton = event.target;

      stylyzeClickedButton(pointedButton);

      if (pointedButton.textContent === "Population") {
        if (renderPopulationChartControl) {
          return;
        } else {
          removeChart();
          renderPopulationChart();
          renderPopulationChartControl = true;
          renderLanguageChartControl = false;
        }
      }

      if (pointedButton.textContent === "Language") {
        if (renderLanguageChartControl) {
          return;
        } else {
          removeChart();
          renderLanguageChart();
          renderLanguageChartControl = true;
          renderPopulationChartControl = false;
        }
      }
      // return pointedButton;
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

function renderTotalAmountOfCountries() {
  const totalCountriesAmout = document.querySelector(
    "#total-amount-of-countries"
  );
  totalCountriesAmout.textContent = getTotalAmountOfCountries();
}

function removeChart() {
  if (hasChart) {
    const chart = Chart.getChart("chart-canvas");
    chart.destroy();
  }
}

// this will use chartjs
function renderPopulationChart() {
  const chartCanvas = document.getElementById("chart-canvas");
  const chart = new Chart(chartCanvas, {
    type: "bar",
    data: {
      labels: getTenMostPopulatedCountriesByName(),
      datasets: [
        {
          label: "% based on total world population",
          data: calculateWorldPercentPopulationPerContry(),
          backgroundColor: YELLOW,
          borderColor: YELLOW,
          borderWidth: 1,
        },
      ],
    },
    options: {
      events: ["mousemove", "mouseout", "touchstart", "touchmove"],
      layout: {
        padding: 0,
      },
      barPercentage: 0.5,
      categoryPercentage: 1,
      indexAxis: "y",
      offset: true,
      scales: {
        x: {
          beginAtZero: true,
          min: 0,
          max: 25,
        },
        y: {
          stacked: false,
          ticks: {
            autoSkip: false,
          },
        },
      },
    },
  });
  hasChart = true;
}

function renderLanguageChart() {
  const chartCanvas = document.getElementById("chart-canvas");
  const chart = new Chart(chartCanvas, {
    type: "bar",
    data: {
      labels: calculateMostSpokenLanguages(),
      datasets: [
        {
          label: "based on total world most spoken languages",
          data: calculateMostSpokenLanguagesAmouts(),
          backgroundColor: YELLOW,
          borderColor: YELLOW,
          borderWidth: 1,
        },
      ],
    },
    options: {
      events: ["mousemove", "mouseout", "touchstart", "touchmove"],
      layout: {
        padding: 0,
      },
      barPercentage: 0.5,
      categoryPercentage: 1,
      indexAxis: "y",
      offset: true,
      scales: {
        x: {
          beginAtZero: true,
          min: 0,
          max: 100,
        },
        y: {
          stacked: false,
          ticks: {
            autoSkip: false,
          },
        },
      },
    },
  });
  hasChart = true;
}

// ### aplication start ###
async function main() {
  await fetchData();

  /* ### DEBUGGING ### */

  /* ### DEBUGGING ### */

  renderTotalAmountOfCountries();
  observeClickedButton();
}

console.clear();

main();
