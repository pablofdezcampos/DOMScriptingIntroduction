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
const sendButton = document.querySelector('.button-primary');
sendButton.addEventListener('click', function(event) {
    event.preventDefault(); //Prevent the action, it is useful to validate form cause of it does not set the default action
    console.log('Sending form');
});