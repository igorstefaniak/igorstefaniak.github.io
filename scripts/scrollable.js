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

const handleScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;
  
    console.log("handleScroll");
  
    const images = document.querySelectorAll("background img");
  
    console.log("images", images);
  
    images.forEach((element) => {
      element.style.transform = `translate(0, ${scrollPosition / 10}px)`;
      /* rotate(${scrollPosition / 10}deg) */
    });
  };
  
  window.addEventListener("scroll", handleScroll);
  