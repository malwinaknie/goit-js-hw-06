const slider = document.getElementById("font-size-control");
const text = document.getElementById("text"); 

text.style.fontSize = `${slider.value}px`;

slider.addEventListener("input", () => {
  text.style.fontSize = `${slider.value}px`;
});


