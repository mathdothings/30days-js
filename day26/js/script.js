console.log("Start");

/* 
  self-invoking function is a way to leave out of global scope important script's functions, without the need of declare another 'scope function'. Functions in global score can be invoked directly from user's browser's console
*/
(function main() {
  const URL = "https://restcountries.com/v3.1/all";
  const getData = (url) => {
    let APIDATA = [];
    fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      response.json().then((data) => {
        APIDATA = data;
        console.log(
          APIDATA.filter((item) => {
            if (item.name.common.startsWith("A")) {
              return item;
            }
          })
        );
      });
    });
  };
  getData(URL);
})();
