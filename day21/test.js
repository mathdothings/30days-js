const allTitles = document.getElementsByTagName("h1");

// console.log(allTitles.length);
// console.log(allTitles);

for (const title of allTitles) {
  console.log(title);
}

allTitles.forEach((title) => console.log(title));
