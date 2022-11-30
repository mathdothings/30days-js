/* 
  self-invoking function is a way to leave out of global scope important script's functions, without the needed of declare another 'scope function'. Functions in global scope can be invoked directly from user's browser's console
*/
(function main() {
  const URL = "https://restcountries.com/v3.1/all";
  let DATA = []; // all API data will be stored into this array

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
      // console.log(data);
      return data;
    } catch (error) {
      console.warn(error);
    }
  };

  // handle the last button where user has clicked
  const handleClickedButton = () => {
    const buttons = getAllElements(".nav__option");
    buttons.forEach((button) => {
      button.onclick = () => {
        // clearRenderedData();
        stylizeActiveButton(button);
        getInputValue();
        filterData();
        // renderData();
      };
    });
  };

  // stylize the active (last) clicked button
  const stylizeActiveButton = (activatedButton) => {
    const buttons = getAllElements(".nav__option");
    buttons.forEach((button) => {
      if (!(activatedButton === buttons[buttons.length - 1])) {
        removeClass(button, "nav__option--active");
      }
    });
    if (!(activatedButton === buttons[buttons.length - 1])) {
      addClass(activatedButton, "nav__option--active");
    } else {
      const arrow = document.getElementsByClassName("nav__nav-option__arrow");
      arrow[0].classList.toggle("nav__nav-option__arrow--rotate");
    }
  };

  // checks if the user is typing any key
  const isTyping = () => {
    const inputs = getAllElements("input");
    inputs.forEach((input) => {
      input.onkeydown = () => {
        return true;
      };
    });
  };

  const getInputValue = () => {
    const input = document.querySelector("#search-input");
    return input.value;
  };

  const filterData = () => {
    const input = getInputValue();
    const result = DATA.filter((country) => {
      if (country.name.common.toLocaleLowerCase().startsWith(input)) {
        return country;
      }
    });
    return result.sort();
  };

  const addClass = (element, style) => {
    element.classList.add(`${style}`);
  };

  const removeClass = (element, style) => {
    element.classList.remove(`${style}`);
  };

  const setToDefaultValues = () => {
    const buttons = getAllElements(".nav__option");
    let activeButton = buttons[0];
    addClass(activeButton, "nav__option--active");
  };

  // starts the application
  const start = async () => {
    disableButtons();
    DATA = await getData(URL);
    setToDefaultValues();
    enableButtons();
    handleClickedButton();
    isTyping();
  };

  start();

  // + - ~ * = == === > <
})();
