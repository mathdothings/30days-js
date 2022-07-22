const pByQuerySelector = document.querySelectorAll("p");

// textContent
console.log("%c textContent", "color: green");
pByQuerySelector.forEach((p) => console.log(p.textContent));
console.log("------------------------------");

// innerText
console.log("%c innerText", "color: red");
pByQuerySelector.forEach((p) => console.log(p.innerText));
console.log("------------------------------");

// innerHTML
console.log("%c innerHTML", "color: blue");
pByQuerySelector.forEach((p) => console.log(p.innerHTML));
