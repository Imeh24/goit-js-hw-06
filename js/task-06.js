

const input = document.getElementById('validation-input');

input.addEventListener('blur', validateInput);

function validateInput() {
  const enteredValue = input.value.trim();
  const expectedLength = +input.getAttribute('data-length');

  console.log('Entered Value:', enteredValue);
  console.log(`Enter Length Value:`, enteredValue.length)
  console.log('Expected Length:', expectedLength);

  input.classList.toggle('valid', enteredValue.length === expectedLength);
  input.classList.toggle('invalid', enteredValue.length !== expectedLength);
}
 
