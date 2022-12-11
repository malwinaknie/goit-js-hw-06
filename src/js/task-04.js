let counterSpan = document.querySelector('#value');
let counterValue = 0;

const addBtn = document.querySelector('[data-action=increment]');
const subtractBtn = document.querySelector('[data-action=decrement]');

const incrementation = () => {
    counterValue ++;
    counterSpan.textContent = counterValue;
};
const decrementation = () => {
    counterValue --;
    counterSpan.textContent = counterValue;
};

addBtn.addEventListener('click', incrementation);
subtractBtn.addEventListener('click', decrementation);

