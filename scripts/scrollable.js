let isTransparent = true;
const tag = document.querySelector('nav');


window.addEventListener('scroll', event => {
    if (window.pageYOffset > 70 && isTransparent) {
        tag.classList.add('_menu-darker');
        isTransparent = false;
    }

    if (window.pageYOffset <= 70 && !isTransparent) {
        tag.classList.remove('_menu-darker');
        isTransparent = true;
    }

    
});