//Validating form

//Variables that select the id of the HTML.
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messajeInput = document.querySelector('#messaje');

const form = document.querySelector('.form');

const formData = { name: '', email: '', messaje: '' }

//Listeners
nameInput.addEventListener('input', readText);
emailInput.addEventListener('input', readText);
messajeInput.addEventListener('input', readText);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const { name, email, messaje } = formData;

    if (name === '' || email === '' || messaje === '') {
        showAlert('All fields are required', true);
        return;
    }

    showAlert('The messaje sent correctly');
});

//Functions

function readText(event) {
    formData[event.target.id] = event.target.value;
}

function showAlert(messaje, error = null) {
    const alert = document.createElement('P');
    alert.textContent = messaje;

    if (error) {
        alert.classList.add('error');
    } else {
        alert.classList.add('valid');
    }

    form.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 5000);
}