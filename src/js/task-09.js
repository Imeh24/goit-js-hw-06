function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const bodyElement = document.body;
const colorSpan = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', function() {

  bodyElement.style.backgroundColor = getRandomHexColor();
 colorSpan.textContent = getRandomHexColor();
})