let tl = gsap.timeline();

tl.from('#nav', {
    opacity: 0,
    delay: 0.3,
});

tl.from('#nav h1, #nav h3, #nav h4, #nav i', {
    y: -80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
});

tl.from('#left h1', {
    x: -500,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

tl.from('#right', {
    opacity: 0,
    scale: 2,
    duration: 0.5,

});


tl.from('#left-bottom', {
    opacity: 0,
});
tl.from('#left-bottom h3', {
    opacity: 0,
    x: -500,
    opacity: 0,
    stagger: 0.2
});


gsap.from('#page2 .box', {
    opacity: 0,
    x: -100,
    stagger: 0.4,
    scrollTrigger: {
        trigger: '#page2 .box',
        scroller: 'body',
        end: 'top 30%',
        scrub: 2,
    }
});