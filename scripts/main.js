const BUTTON = document.querySelector("button");

const TOGGLE = () => {
  const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
  document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
  document.body.classList.toggle('dark', !IS_PRESSED);
  BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
  updateCardColors();
};

BUTTON.addEventListener("click", TOGGLE);

document.addEventListener("DOMContentLoaded", () => {
  const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
  document.body.setAttribute("data-dark-mode", IS_PRESSED);
  document.body.classList.toggle('dark', IS_PRESSED);
  updateCardColors();
});

