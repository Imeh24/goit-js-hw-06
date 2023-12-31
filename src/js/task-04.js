let counterValue = 0;



const decreButton = document.querySelector('[data-action = "decrement"]');
const increButton = document.querySelector('[data-action = "increment"]');
const valueSpan = document.getElementById('value');


decreButton.addEventListener('click', () => {
    counterValue -= 1;
    updateCounter();
} )

increButton.addEventListener('click', () => {
    counterValue += 1;
    updateCounter();
})

function updateCounter() {
valueSpan.textContent = counterValue;
}