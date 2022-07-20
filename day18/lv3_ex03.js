// read countries api and count total number of languages in the world used as officials

const countriesAPI = "https://restcountries.com/v2/all";

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = response.json();
  return data;
};
// console.log(fetchData(countriesAPI));

const countTotalOfficialLanguages = async () => {
  const countries = await fetchData(countriesAPI);
  let count = 0;
  countries.forEach((country) => {
    country.languages.forEach((language) => {
      if (language.name !== "") count += 1;
    });
  });

  return count;
};

console.log(countTotalOfficialLanguages()); // total = 377
