// disable buttons until data fetch is fullified
window.onload = () => {
  console.log("Disabling features");
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
  const input = document.querySelector("input");
  input.disabled = true;
};

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

      response
        .json()
        .then((data) => {
          APIDATA = data;
          console.log(APIDATA);
        })
        .then(() => {
          console.log("Enabling features");
          const buttons = document.querySelectorAll("button");
          buttons.forEach((button) => (button.disabled = false));
          const input = document.querySelector("input");
          input.disabled = false;
          input.focus();
        });
    });
  };

  // Debug -->
  setTimeout(() => {
    return getData(URL);
  }, 2000);

  // <--
  // getData(URL);
})();
