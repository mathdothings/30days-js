const pElements = document.querySelectorAll("p");

const colors = ["red", "blue", "green", "yellow", "magenta"];

pElements.forEach((p, i) => {
  p.style.color = colors[i];
  p.style.fontSize = (i + 1).toString() + "rem";
  p.style.backgroundColor = colors.reverse()[i]; // changes backgroundColor
});
