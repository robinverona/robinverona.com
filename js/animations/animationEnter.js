import gsap from 'gsap';

const animationEnter = (container) => {
    // gsap.from('header a', {yPercent: 100, duration: 0.8, stagger: 0.2, ease: 'power1.out'});
    gsap.from('.navbar__list .navbar__item', {yPercent: 100, duration: 0.2, stagger: 0.2, ease: 'power1.out'});

    return gsap.from(container, {autoAlpha: 0, duration: 0.4, clearProps: 'all', ease: 'none'});
}

export default animationEnter;