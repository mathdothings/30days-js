const pElementByQuery = document.querySelectorAll("p");

// when you select elements by tag name the result will be a HTML Colletion, and this type isn't actually an iterable array
const pElementByTagName = document.getElementsByTagName("p");

// they are array?
console.log(Array.isArray(pElementByTagName));
console.log(Array.isArray(pElementByQuery));

pElementByQuery.forEach((p) => p.classList.add("ascent"));

for (const p of pElementByTagName) {
  p.style.color = "purple";
  p.style.fontWeight = 400;
  p.style.fontFamily = "Arial";
  p.style.fontSize = "1.5rem";
}

try {
  pElementByTagName.forEach((p) => console.log(p));
} catch (e) {
  console.error(e); // show the error
}

console.log(pElementByQuery);
console.log(pElementByTagName);
