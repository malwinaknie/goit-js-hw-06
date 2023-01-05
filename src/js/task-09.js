const changeBtn = document.querySelector('.change-color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeBtn.addEventListener('click', () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  document.querySelector('.color').textContent = `${getRandomHexColor()}`
})
