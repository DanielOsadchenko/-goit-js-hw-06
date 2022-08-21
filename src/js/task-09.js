function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const body = document.body;

button.addEventListener('click', onChangingColor);

function onChangingColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = body.style.backgroundColor;
}