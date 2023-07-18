let tl = gsap.timeline();

tl.from('#nav', {
    opacity: 0,
    delay: 0.3,
});

tl.from('#nav h1, #nav h3, #nav h4, #nav i', {
    y:-80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
});

tl.from('#left h1', {
    x:-500,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

tl.from('#right', {
    opacity: 0,
    scale: 2,
    duration: 0.5,

});