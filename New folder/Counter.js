const display = document.querySelector('.counter-preview');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

let value = 0;
function increment() {
  value += 1;
  display.textContent = value;
}

function decrement() {
  value -= 1;
  display.textContent = value;
}

function reset() {
  value = 0;
  display.textContent = value;
}