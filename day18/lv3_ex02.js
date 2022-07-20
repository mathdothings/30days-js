// find 10 largest countries searching through countries API
const countriesAPI = "https://restcountries.com/v2/all";

const fetchData = async (url) => {
  try {
    const resolve = await fetch(url);
    const data = resolve.json();
    // .json() method also returns a promise, so this way data is a promise too
    return data;
  } catch (error) {
    console.warn(error);
  }
};
// console.log(fetchData(countriesAPI));

const sortCountriesByArea = async () => {
  const countries = await fetchData(countriesAPI);
  countries.sort((prev, curr) => {
    // sort them from highest to lowest
    if (prev.area < curr.area) return 1;
    if (prev.area > curr.area) return -1;
    return 0;
  });

  return countries.slice(0, 10); // return only 10 values
};

console.log(sortCountriesByArea());
