const slider = document.getElementById("font-size-control");
const text = document.getElementById("text");

slider.oninput = changeFontStyle;
function changeFontStyle() {
  text.style.fontSize = this.value + "px";
}
