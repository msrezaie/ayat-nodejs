const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li');
 
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        burger.classList.toggle('toggle');
    });
}

navSlide();