const inputEl = document.querySelector('#font-size-control');
// console.log(inputEl);
const textEl = document.querySelector('#text');
// console.log(textEl);

inputEl.addEventListener('input', onInput);

function onInput(event) {
//   console.log(event.currentTarget.value);
  textEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
}
