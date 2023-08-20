const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', (event) => {
  if(event.target === burger) {
    burger.classList.add('header__burger--animation');
    burger.classList.toggle('header__burger--active');
    nav.classList.toggle('header__nav--active');
  } else {
    nav.classList.remove('header__nav--active');
    burger.classList.remove('header__burger--active');
  }
});
