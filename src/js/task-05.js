let inputItem = document.querySelector("#name-input");
let outputItem = document.querySelector("#name-output");

const activeInput = () => {
  outputItem.innerHTML = `${inputItem.value}`;
};
const blankInput = () => {
  outputItem.innerHTML = `Anonymous`;
};

inputItem.addEventListener("input", () => {
  if (inputItem.value == "") {
    blankInput();
  } else {
    activeInput();
  }
});