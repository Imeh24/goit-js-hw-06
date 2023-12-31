

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleForm);

function handleForm(event) {
event.preventDefault();


const email = loginForm.elements.email.value.trim();
const password = loginForm.elements.password.value.trim();

if(!email || !password) {
    alert("All fields must be filled in") 
    return;
} 
    const formData = {
        email: email.value,
        password: password.value
    }
 
console.log(formData);

loginForm.reset();
}