function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

btnEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  textEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = textEl.textContent;
}
