const catsAPI = "https://api.thecatapi.com/v1/breeds";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.map((cat) => cat.name);
  } catch (error) {
    console.warn(error);
  }
};

const r = fetchData(catsAPI);
console.log(r);
