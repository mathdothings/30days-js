const pElements = document.querySelectorAll("p");

pElements.forEach((p, i) => {
  if (i % 2 === 0) {
    p.style.color = "green";
  } else {
    p.style.color = "red";
  }
});
