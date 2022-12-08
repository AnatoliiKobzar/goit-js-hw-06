function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('[type="number"]');
const boxWithBoxesEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', onBtnCreateClick);

function onBtnCreateClick() {
  createBoxes(inputEl.value);
}

let boxes = [];

function createBoxes(quantity) {
  for (let i = 0; i < quantity; i += 1) {
    const itemEl = document.createElement('div');
    itemEl.style.width = `${20 + i * 10}px`;
    itemEl.style.height = `${20 + i * 10}px`;
    itemEl.style.backgroundColor = getRandomHexColor();
    boxes.push(itemEl);
  }
  boxWithBoxesEl.append(...boxes);
}

btnDestroyEl.addEventListener('click', onBtnDestroyClick);

function onBtnDestroyClick() {
  destroyBoxes();
}

function destroyBoxes() {
  boxes = [];
  boxWithBoxesEl.innerHTML = '';
  inputEl.value = 0;
}
