const api = "https://restcountries.com/v2/all";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    const objs = countries.map((country) => {
      let ctr = {};
      ctr = {
        name: country.name,
        capital: country.capital,
        languages: country.languages,
        population: country.population,
        area: country.area,
      };
      return ctr;
    });
    return objs;
  } catch (error) {
    console.error(error);
  }
};

const r = fetchData(api);
console.log(r);
