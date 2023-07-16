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
  
    const images = document.querySelectorAll("background img");
  
    
    images.forEach((element) => {
      console.log(scrollPosition)
      if (element.getAttribute("src") == "./images/background/circle_quarter.svg"){
        element.style.transform = `translate(0, ${scrollPosition / 10}px) rotate(${- scrollPosition / 10}deg) `;
      }
      else if (element.getAttribute("src") == "./images/background/turned_pin.svg"){
        element.style.transform = `translate(0, ${scrollPosition / 10}px) rotate(${- scrollPosition / 10}deg) `;
      }
      else if (element.getAttribute("src") == "./images/background/sparkle.svg"){
        element.style.transform = `translate(0, ${scrollPosition / 10}px) scale(${ scrollPosition / 1000 + 1}) `;
      }
      else{
        element.style.transform = `translate(0, ${scrollPosition / 10}px)`;
      }
      /* rotate(${scrollPosition / 10}deg) */
    });
  };
  
  window.addEventListener("scroll", handleScroll);

  