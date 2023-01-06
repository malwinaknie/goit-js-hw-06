const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');
const input = document.querySelector('input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  const elemsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.style.height = `${30 + 10 * i}px`;
    newBox.style.width = `${30 + 10 * i}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.append(newBox)
  }
  return elemsToAdd;
}

createBtn.addEventListener('click', () => {
  let boxesToAdd = createBoxes(input.value);
  boxes.append(...boxesToAdd);
});

  const destroyBoxes = () => {
    boxes.innerHTML = ''
  };
  
destroyBtn.addEventListener('click', () => {
  destroyBoxes.call();
  input.value = 0;
});

