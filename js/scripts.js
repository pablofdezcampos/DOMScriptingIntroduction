//querySelector -> return 0 or 1 elements
/**
    In the querySelector you can select the element with:
    . -> for access to the class
    # -> for access to the id

    In JavaScript it is recomended to use the # access. Do not use id to CSS.
 */
const heading = document.querySelector('.header__text h2');
heading.textContent = 'New Heading';