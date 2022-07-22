const pElements = document.querySelectorAll("p");

pElements.forEach((p, i) => {
  p.textContent = "New Content" + (i + 1).toString();
  p.setAttribute("class", "new-class");
  p.setAttribute("id", "new-id" + i.toString());
});
