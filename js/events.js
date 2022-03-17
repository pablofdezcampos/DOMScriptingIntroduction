//Events in JS

/**
    window get reference to all de js code in the page
 */

console.log(1);

//load, wait to js and the files that depends on the HTML were ready
window.addEventListener('load', function() {
    console.log(2);
});

window.onload = function() {
    console.log(3);
}

//DOMContentLoaded, only wait to the HTML, do not wait to images or CSS
document.addEventListener('DOMContentLoaded', function() {
    console.log(4);
});

console.log(5);

//Example of event
window.onscroll = function() {
    console.log('Scrolling...');
}

window.onclick = function() {
    console.log('Click...');
}

//Select envents and put an event

/*const sendButton = document.querySelector('.button--primary');
sendButton.addEventListener('click', function(event) {
    event.preventDefault(); //Prevent the action, it is useful to validate form cause of it does not set the default action
    console.log(event.value);
});*/

//Events of the input and text-areas
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messajeInput = document.querySelector('#messaje')
    /*
        input -> for a validation in real time
        change -> control the validation when you go out for that field

        target -> the input value
    */
nameInput.addEventListener('input', readText);
emailInput.addEventListener('input', readText);
messajeInput.addEventListener('input', readText);

/*function readText(event) {
    console.log(event.target.value)
}
*/

//Validating form
const formData = {
    name: '',
    email: '',
    messaje: ''
}

function readText(event) {
    formData[event.target.id] = event.target.value;
    console.log(formData);
}

//Submit form

/*
    Type submit has to be relationed with the form
*/
const form = document.querySelector('.form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    //Validate Form
    const { name, email, messaje } = formData;

    if (name === '' || email === '' || messaje === '') {
        showError('All fields are required');
    }

    //Create alert is fields are correct
    showMessaje('The messaje sent correctly');

    //Send Form
});


function showError(messaje) {
    const error = document.createElement('P');
    error.textContent = messaje;
    error.classList.add('error');

    form.appendChild(error);

    //Desappear alert
    setTimeout(() => {
        error.remove();
    }, 5000);
}

function showMessaje(messaje) {
    const valid = document.createElement('P');
    valid.textContent = messaje;
    valid.classList.add('valid');

    form.appendChild(valid);

    setTimeout(() => {
        valid.remove();
    }, 3000);
}