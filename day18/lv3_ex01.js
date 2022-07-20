const catsAPI = "https://api.thecatapi.com/v1/breeds";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const result = await data.map((cat) => cat.weight.metric);
    return result;
  } catch (error) {
    console.warn(error);
  }
};

const weights = async () => {
  const result = await fetchData(catsAPI);
  const wgs = [];
  result.forEach((item) => {
    wgs.push(item);
  });

  const wgSplited = [];
  wgs.forEach((item) => wgSplited.push(item.split(" ")));

  const wgsNum = [];
  wgSplited.forEach((item) => {
    wgsNum.push([Number(item[0]), Number(item[item.length - 1])]);
  });

  let min = 0;
  let max = 0;
  let mean = 0;
  let count = wgsNum.length;
  wgsNum.forEach((item) => {
    const len = item.length - 1;
    min += item[0];
    max += item[len];
  });

  mean = (max - min) / count;
  return Math.round(mean);
};

console.log(weights());
