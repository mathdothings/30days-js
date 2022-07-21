// const allTitles = document.getElementsByTagName("h1");
// const allTitles = document.getElementsByClassName("title");

const allTitles = document.getElementsByTagName("h1");

allTitles[3].className = "title";
allTitles[3].id = "fourth-title";
allTitles[3].classList.add("title-ascent");
allTitles[3].innerText = "My new title";
allTitles[3].innerText = "This is a new one";

const firstTitle = document.querySelectorAll("#first-title"); // select id with first-title
// returns a nodelist -> array-like object

const first = document.querySelector("#first-title");

// console.log(first);

for (const item of allTitles) {
  console.log(item); // catch all elements of that node list
}
