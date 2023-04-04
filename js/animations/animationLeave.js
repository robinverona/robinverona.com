import gsap from 'gsap';


const animationLeave = (container, done) => {
    console.log('leave :', container)

    return gsap.to(container, {autoAlpha: 0, duration: 1, clearProps: 'all', ease: 'none'});
}

export default animationLeave;