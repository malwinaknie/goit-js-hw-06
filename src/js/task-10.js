const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');
const input = document.querySelector('input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const latestBoxSize = boxes.lastChild ? boxes.lastChild.offsetWidth + 10 : 30;

  for (let i = 0; i < amount; i++) {
  const boxElement = document.createElement('div');

    boxElement.style.width = `${latestBoxSize + i * 10}px`;
    boxElement.style.height = `${latestBoxSize + i * 10}px`;
    boxElement.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(boxElement);
  };
};

function destroyBoxes() {
  boxElement.innerHTML = "";
};

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyBoxes.addEventListener('click', () => {
  destroyBoxes();
})