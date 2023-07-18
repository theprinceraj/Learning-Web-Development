gsap.from('#page1 .box', {
    opacity: 0,
    scale: 0,
    delay: 2,
    rotate: 360,
});
gsap.from('#page2 .box', {
    opacity: 0,
    scale: 0,
    delay: 2,
    rotate: 360,
    scrollTrigger: '#page2 .box' // scrollTrigger with default settings
});
gsap.from('#page3 .box', {
    opacity: 0,
    scale: 0,
    delay: 2,
    rotate: 360,
    // scrollTrigger with customized settings
    scrollTrigger: {
        trigger: "#page3 .box",
        scroller: 'body',
        // markers: true,
    }
});