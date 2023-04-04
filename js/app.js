import barba from '@barba/core';
import { animationEnter, animationLeave } from './animations';

// const resetActiveLink = () => gsap.set('a.is-active', {
//   xPercent: -100,
//   transformOrigin: 'left' 
// })

barba.init({
  transitions: [{
      once({next}){
        animationEnter(next.container);
      },
      leave: ({current}) => animationLeave(current.container),
      enter({next}) {
          console.log('entering...');
          animationEnter(next.container);
      }
  }]
})


const mobileMenu = document.querySelector('.sidebar');
const mobileMenuButton = document.querySelector('#sidebar__button--open');
const mobileCloseMenuButton = document.querySelector('#sidebar-header__button--close');
console.log(mobileMenu);

addEventListener('load', () => {
  console.log(mobileMenu.classList);
  console.log(window.innerHeight);
  mobileMenu.style.height = `${window.innerHeight}px`;
});

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('sidebar--hidden');
    mobileMenu.classList.add('sidebar--open');
    document.querySelector('body').style.position = 'fixed';
    console.log(mobileMenu.classList);
    console.log(window.innerHeight);

});

  mobileCloseMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('sidebar--open');
    mobileMenu.classList.add('sidebar--hidden');
    document.querySelector('body').style.position = 'static';
    console.log(mobileMenu.classList);
  })



// let links = [...document.querySelectorAll('.desktop-portfolio__item')];
// let linkImages = document.querySelectorAll('.hover-reveal__img');
// console.log(links);
// console.log(linkImages)
// links.forEach((link, idx) => {
//   link.addEventListener('mousemove', (e) => {
//     link.children[1].style.opacity = 1;
//     link.children[0].style.zIndex = 3; 
//     link.children[1].style.transform = `translate(${e.clientX - 400}px, -${e.clientY / 3}px) rotate(${e.clientX / 50}deg)`;
//     linkImages[idx].style.transform = `scale(1, 1)`;
//     link.style.zIndex = 2; 

//   })

//   link.addEventListener('mouseleave', (e) => {
//     link.children[1].style.opacity = 0;
//     linkImages[idx].style.transform = `scale(0.8, 0.8)`;
//     link.style.zIndex = 0; 



//   });
// });
