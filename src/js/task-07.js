const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
    textSpan.style.fontSize = `${fontSizeControl.value}px`;
})



