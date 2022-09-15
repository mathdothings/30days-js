// name, gravity
const planets = [
  {
    name: "Earth",
    gravity: 9.80665,
    imgURL:
      "https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png",
  },
  {
    name: "Mars",
    gravity: 3.721,
    imgURL:
      "https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png",
  },
  {
    name: "Mercury",
    gravity: 3.7,
    imgURL:
      "https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png",
  },
  {
    name: "Venus",
    gravity: 8.87,
    imgURL:
      "https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png",
  },
];

const massInput = document.querySelector("#weight-input");

const planetInput = document.querySelectorAll("input[name='planet-input']");

const calculateButton = document.querySelector("[type='button']");

const planetImg = document.querySelector("#planet-img");

const result = document.querySelector("#result");

calculateButton.addEventListener("click", () => {
  planetInput.forEach((planet) => {
    if (planet.checked === true) {
      const id = planet.id;
      const label = document.querySelector(`label[for=${id}]`);

      for (const planet of planets) {
        if (planet.name === label.textContent) {
          // console.log(planet);
          result.textContent = `Weight on ${planet.name}: ${Math.round(
            massInput.value * planet.gravity
          )}N`;
          planetImg.src = planet.imgURL;
        }
      }
    }
  });
});
