const body = document.body;
const keypress = document.querySelector("#key-pressed");
const keycode = document.querySelector("#key-code");

body.addEventListener("keydown", (event) => {
  keypress.textContent = "";
  if (event.keyCode === 32) {
    keypress.textContent = "Space";
  }
  keypress.textContent += event.key;
  keycode.textContent = event.keyCode;
});
