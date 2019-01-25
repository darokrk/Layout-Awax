document.addEventListener("DOMContentLoaded", () => {

  const navBtn = document.querySelector('.mobile__wrapper');
  const navMenu = document.querySelector('.home-nav__list');
  navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
    navMenu.classList.toggle('active__menu');

  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


})