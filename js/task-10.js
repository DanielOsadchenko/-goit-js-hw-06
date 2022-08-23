function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnRef = document.querySelector('[data-create]');
const deleteBtnRef = document.querySelector('[data-destroy]');
const amountBoxesRef = document.querySelector('#controls > input');
const boxesContainerRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', createBoxes);
deleteBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  amount = amountBoxesRef.value;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxes.push(box);
  }

  boxesContainerRef.append(...boxes);
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = "";
  amountBoxesRef.value = 0;
}