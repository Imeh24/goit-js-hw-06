

const input = document.getElementById('validation-input');

input.addEventListener('blur', validateInput);

function validateInput() {
  const enteredValue = input.value.trim().length;
  const expectedLength = +input.getAttribute('data-length');

 if (enteredValue === 0) {
  input.classList.remove('invalid');
  input.classList.remove('valid');
 } else if (enteredValue === expectedLength) {
  input.classList.remove('invalid');
  input.classList.add('valid');
 } else {
  input.classList.remove('valid');
  input.classList.add('invalid');
 }
}
