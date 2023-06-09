// import barba from '@barba/core';
// import { animationEnter, animationLeave } from './animations';

// const resetActiveLink = () => gsap.set('a.is-active', {
//   xPercent: -100,
//   transformOrigin: 'left' 
// })

// barba.init({
//   transitions: [{
//       once({next}){
//         animationEnter(next.container);
//       },
//       leave: ({current}) => animationLeave(current.container),
//       enter({next}) {
//           console.log('entering...');
//           animationEnter(next.container);
//       }
//   }]
// })


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


});

  mobileCloseMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('sidebar--open');
    mobileMenu.classList.add('sidebar--hidden');
    document.querySelector('body').style.position = 'static';
  })


