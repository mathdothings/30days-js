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
        stylizeActivatedButton(button);
        filterData();
        renderDynamicData();
      };
    });
  };

  // stylize the last clicked button
  const stylizeActivatedButton = (activatedButton) => {
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

  // handle the application after wait for the user's typeing
  const handleAppAfterTyping = () => {
    let timer;
    const waitMileseconds = 500;
    const input = document.querySelector("input");
    input.onkeydown = () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        if (getInputValue() === "") {
          clearDynamicContent();
          const container = document.querySelector(".main__dynamic-container");
          container.style.backgroundColor = "none";
        } else {
          renderDynamicData();
        }
        renderCountriesWithLetter();
        renderTotalCountriesAmountWithLetter();
      }, waitMileseconds);
    };
  };

  const getInputValue = () => {
    const input = document.querySelector("#search-input");
    return input.value.toLocaleLowerCase();
  };

  const filterData = () => {
    const input = getInputValue();
    const activatedButton = document.getElementsByClassName(
      "nav__option--active"
    );
    let result = [];

    if (
      activatedButton[0].textContent.toLocaleLowerCase() === "starting word"
    ) {
      result = DATA.filter((country) => {
        if (country.name.common.toLocaleLowerCase().startsWith(input)) {
          return country;
        }
      });
    } else {
      result = DATA.filter((country) => {
        if (country.name.common.toLocaleLowerCase().indexOf(input) !== -1) {
          return country;
        }
      });
    }

    // sort countries by common name in ascending insensitively
    result.sort((first, second) => {
      let firstName = first.name.common.toLocaleLowerCase();
      let secondName = second.name.common.toLocaleLowerCase();

      if (firstName < secondName) {
        return -1;
      }

      if (firstName > secondName) {
        return 1;
      }

      return 0;
    });

    const order = document.getElementsByClassName(
      "nav__nav-option__arrow--rotate"
    );
    if (order.length === 0) {
      console.log(result);
      return result;
    } else {
      // shallow copy of the result array to preserve it from the destructive reverse method
      console.log((reverted = [...result].reverse()));
      return (reverted = [...result].reverse());
    }
  };

  // render total amount of countries
  const renderTotalAmountOfCountries = () => {
    const elements = getAllElements(".header__subtitle--total-amount");
    elements[0].textContent = DATA.length;
  };

  // render countries with specific letter
  const renderCountriesWithLetter = () => {
    const elements = getAllElements(".header__info--filter-letter");
    if (getInputValue() === "") {
      elements[0].textContent = "--";
    } else {
      elements[0].textContent = getInputValue();
    }
  };

  // render total countries amount with specific letter
  const renderTotalCountriesAmountWithLetter = () => {
    const elements = getAllElements(".header__info--filter-total-amount");
    if (getInputValue() === "") {
      elements[0].textContent = "--";
    } else {
      elements[0].textContent = filterData().length;
    }
  };

  const addClass = (element, style) => {
    element.classList.add(`${style}`);
  };

  const removeClass = (element, style) => {
    element.classList.remove(`${style}`);
  };

  const setToDefaultValues = () => {
    const buttons = getAllElements(".nav__option");
    const activeButton = buttons[0];
    addClass(activeButton, "nav__option--active");
  };

  // remove every child inside the dynamic conteiner element
  const clearDynamicContent = () => {
    const mainContent = document.querySelector(".main__dynamic-container");
    while (mainContent.firstChild) {
      mainContent.removeChild(mainContent.lastChild);
    }
    removeClass(mainContent, "main__dynamic-container--highlight");
  };

  // render data inside dynamic container element
  const renderDynamicData = () => {
    clearDynamicContent();
    if (getInputValue() !== "" && filterData().length > 0) {
      const data = filterData();
      const container = document.querySelector(".main__dynamic-container");
      addClass(container, "main__dynamic-container--highlight");
      data.forEach((item) => {
        const p = document.createElement("p");
        container.appendChild(p);
        p.classList.add("main__dynamic-card");
        p.textContent = item.name.common + " " + item.flag;
      });
    }
  };

  // starts the application
  const start = async () => {
    disableButtons();
    DATA = await getData(URL);
    setToDefaultValues();
    enableButtons();
    renderTotalAmountOfCountries();
    handleClickedButton();
    handleAppAfterTyping();
  };

  start();

  // + - ~ * = == === > <
})();
