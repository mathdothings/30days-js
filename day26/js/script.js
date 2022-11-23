/* 
  self-invoking function is a way to leave out of global scope important script's functions, without the needed of declare another 'scope function'. Functions in global scope can be invoked directly from user's browser's console
*/
(function main() {
  const disableButtons = () => {
    // disable buttons until data fetch is fullified
    window.onload = () => {
      console.log("Disabling features...");
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.disabled = true;
      });
      const input = document.querySelector("input");
      input.disabled = true;
      const header = document.querySelector("header");
      header.style.visibility = "hidden";
      console.log("Features disabled");
    };
  };

  const enableButtons = () => {
    console.log("Enabling features...");
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => (button.disabled = false));
    const input = document.querySelector("input");
    input.disabled = false;
    input.focus();
    const header = document.querySelector("header");
    header.style.visibility = "visible";
    console.log("Features enabled");
  };

  disableButtons();

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
          console.log("Data fetched sucessfully!");
          console.log("Data:", APIDATA);
        })
        .then(enableButtons())
        .then(observeClickedButton());
    });
  };

  const observeClickedButton = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.onclick = () => {
        console.log(button.innerText.toLocaleLowerCase());
        return button;
      };
    });
  };

  // getData();
  observeClickedButton();

  // Debug -->
  setTimeout(() => {
    return getData(URL);
  }, 2000);

  // <--
  // getData(URL);
})();
