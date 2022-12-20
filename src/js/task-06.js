const inputElem = document.getElementById('validation-input');

inputElem.addEventListener('blur', () => {
  const inputLength = inputElem.getAttribute('data-length');
  const inputValue = inputElem.value.trim();

  if (inputValue.length === Number(inputLength)) {
    inputElem.classList.add('valid');
    inputElem.classList.remove('invalid');
  } else {
    inputElem.classList.add('invalid');
    inputElem.classList.remove('valid');
  }
});