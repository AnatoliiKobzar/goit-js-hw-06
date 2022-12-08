const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
// console.log(btnDecrementEl);
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
// console.log(btnIncrementEl);
const valueEl = document.querySelector('#value');
// console.log(valueEl);

let counterValue = 0;

btnDecrementEl.addEventListener('click', onBtnDecrClick);

function onBtnDecrClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

btnIncrementEl.addEventListener('click', onBtnIncrClick);

function onBtnIncrClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

// Добавление кнопки обнуления

const btnResetValue = document.createElement('button');
btnResetValue.type = "button";
btnResetValue.classList = "js-btn";
btnResetValue.textContent = "Reset";

const containerEl = document.querySelector('#counter');
containerEl.insertAdjacentElement('beforeend', btnResetValue);

btnResetValue.addEventListener('click', onBtnResetClick);

function onBtnResetClick() {
  counterValue = 0;
  valueEl.textContent = counterValue;
}