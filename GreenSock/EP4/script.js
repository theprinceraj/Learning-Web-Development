let tl = gsap.timeline();

tl.from('#nav h1, #nav h3, #nav h4, #nav i', {
    y:-80,
    opacity: 0,
    duration: 1,
    delay: 0.7,
    stagger: 0.2,
});