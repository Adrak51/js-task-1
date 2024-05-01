const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

let counterValue = 0;

function updateCounterValue() {
    valueSpan.textContent = counterValue;
}

decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounterValue();
});

incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounterValue();
});

updateCounterValue();