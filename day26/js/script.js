/* 
  self-invoking function is a way to leave out of global scope important script's functions, without the needed of declare another 'scope function'. Functions in global scope can be invoked directly from user's browser's console
*/
(function main() {
  const URL = "https://restcountries.com/v3.1/all";

  const getAllElements = (selector) => {
    const element = document.querySelectorAll(selector);
    return element;
  };

  // disable buttons until data fetch is fullified
  const disableButtons = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = true;
    });
    const input = document.querySelector("input");
    input.disabled = true;
    const header = document.querySelector("header");
    header.style.visibility = "hidden";
  };

  // enable buttons when data fetch is fullified
  const enableButtons = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => (button.disabled = false));
    const input = document.querySelector("input");
    input.disabled = false;
    input.focus();
    const header = document.querySelector("header");
    header.style.visibility = "visible";
  };

  // fetch and return a json from a specific url
  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.warn(error);
    }
  };

  // returns what button the user is clicking
  const observeClickedButton = () => {
    const buttons = getAllElements("button");
    buttons.forEach((button) => {
      button.onclick = () => {
        console.log(button);
        return button;
      };
    });
  };

  const start = async () => {
    disableButtons();
    await getData(URL);
    enableButtons();
    observeClickedButton();
  };

  start();

  // Debug -->

  // <--
})();
