const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error")
const lastName = document.getElementById("lastname");
const lastNameError = document.querySelector("#lastname + span.error")
const firstName = document.getElementById("firstname");
const firstNameError = document.querySelector("#firstname + span.error")
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error")

form.addEventListener('submit', (e) => {
    if (firstName.value === '') {
        e.preventDefault();
        firstName.style.border = '1px solid hsl(0, 100%, 74%)'
        firstNameError.innerText = 'Please enter your first name'
    }
    if (lastName.value === '') {
        e.preventDefault();
        lastName.style.border = '1px solid hsl(0, 100%, 74%)'
        lastNameError.innerText = 'Please enter your last name'
    } 

    if (email.value === '') {
        e.preventDefault();
        email.style.border = '1px solid hsl(0, 100%, 74%)'
        emailError.innerText = 'Please enter an email address'
    } else if (email.validity.typeMismatch) {
        e.preventDefault();
        email.style.border = '1px solid hsl(0, 100%, 74%)'
        emailError.innerText = 'Looks like this is not an email'
    }

    if(password.value === '') {
        e.preventDefault();
        password.style.border = '1px solid hsl(0, 100%, 74%)'
        passwordError.innerText = 'Please enter a password'
    } else if (password.value.length < 8) {
        e.preventDefault();
        password.style.border = '1px solid hsl(0, 100%, 74%)'
        passwordError.innerText = 'Looks like its not long enough, please enter atleast 8 characters'
    }
})