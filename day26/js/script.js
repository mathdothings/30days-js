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
  const isClicking = () => {
    const buttons = getAllElements("button");
    buttons.forEach((button) => {
      button.onclick = () => {
        buttons.forEach((button) => {
          removeClass(button, "nav__option--active");
        });
        addClass(button, "nav__option--active");
        return button;
      };
    });
  };

  // checks if the user is typing any key
  const isTyping = () => {
    const inputs = getAllElements("input");
    inputs.forEach((input) => {
      input.onkeydown = (event) => {
        return true;
      };
    });
  };

  const timeout = () => {
    const buttons = getAllElements("button");
    setTimeout(() => {
      console.log("Timeout...");
    }, 1000);
  };

  const addClass = (element, style) => {
    console.log("Style applyied");
    element.classList.add(`${style}`);
  };

  const removeClass = (element, style) => {
    element.classList.remove(`${style}`);
  };

  // starts the application
  const start = async () => {
    disableButtons();
    await getData(URL);
    enableButtons();
    isClicking();
    isTyping();
  };

  start();

  // Debug -->
  // + * ~ - == ===
  // <--
})();
