const titleYear = document.querySelector("#year");
const h1Element = document.querySelector("h1");
const h2Element = document.querySelector("h2");
const dateElement = document.querySelector("h3");
const listItems = document.querySelectorAll("li");
const delay = 1000; // dalay in mileseconds (ms)
titleYear.style.fontSize = "5rem";
h2Element.style.textDecoration = "underline";
dateElement.textContent = dateNow();

function randomRGB() {
  const rndRGB = [];
  let rndColor = 0;
  for (let i = 0; i < 3; i += 1) {
    rndColor = Math.floor(Math.random() * 256);
    rndRGB.push(rndColor);
  }

  return `${rndRGB[0]}, ${rndRGB[1]}, ${rndRGB[2]}`;
}

function dateNow() {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth();
  month < 10 ? (month = "0" + (month + 1)) : month;
  const day = date.getDate();
  const hours = date.getHours();
  const mins = date.getMinutes();

  // YYYY/MM/DD hh:mm
  return `${year}/${month}/${day} ${hours}:${mins}`;
}

setInterval(() => {
  titleYear.style.color = `rgb(${randomRGB()})`;
  dateElement.style.backgroundColor = `rgb(${randomRGB()})`;
}, delay);

setInterval(() => {
  dateElement.textContent = dateNow();
}, delay * 60);

listItems.forEach((item) => {
  if (item.textContent.includes("Done")) {
    item.style.backgroundColor = "green";
  } else if (item.textContent.includes("Ongoing")) {
    item.style.backgroundColor = "orange";
  } else if (item.textContent.includes("Coming")) {
    item.style.backgroundColor = "red";
  }
});
