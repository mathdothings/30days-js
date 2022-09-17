const countries = countries_data;

countries.forEach((country) => {
  const ul = document.createElement("ul");
  document.body.appendChild(ul);
  const li = document.createElement("li");
  const img = document.createElement("img");
  ul.appendChild(li);
  li.appendChild(img);
  img.src = country.flag;
  img.style.display = "block";
  img.style.width = "100px";
  img.style.height = "100px";
  img.style.borderRadius = "50%";
  img.style.margin = "1rem auto";
});
