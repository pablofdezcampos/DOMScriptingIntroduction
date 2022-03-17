//.querySelector -> return 0 or 1 elements

/**
    In the querySelector you can select the element with:
    . -> for access to the class
    # -> for access to the id

    In JavaScript it is recomended to use the # access. Do not use id to CSS.
 */
const heading = document.querySelector('.header__text h2');
heading.textContent = 'New Heading';


//.querySelectorAll
const links = document.querySelectorAll('.navegation a');
links[0].textContent = 'Google link';
links[0].href = 'https://google.com';

//Adding and removing classes.
links[0].classList.add('new-class');
links[0].classList.remove('new-class');

//.getElementById -> in the new versions do not have much use.
const heading2 = document.getElementById('name');
console.log(heading2);