
const scroll_down = document.querySelector('.scroll-down');

window.addEventListener('scroll', () => scroll_down.classList.add('scrolled'));

const navbar = document.querySelector('.top-bar');

window.addEventListener('scroll', (e) => {
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
})
const scroll = new SmoothScroll('a[href*="#"]');