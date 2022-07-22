const pByQuerySelector = document.querySelectorAll("p");

pByQuerySelector.forEach((p, i) => {
  if (i === 3) {
    p.style.color = "red";
    p.textContent = "Fourth Paragraph";
  }
});
