gsap.from('#page1 .box', {
    opacity: 0,
    scale: 0,
    delay: 2,
    rotate: 360,
});
gsap.from('#page2 #box2', {
    opacity: 0,
    scale: 0,
    rotate: 360,
    scrollTrigger: '#page2 #box2' // scrollTrigger with default settings
});
gsap.from('#page3 #box3', {
    opacity: 0,
    scale: 0,
    rotate: 360,
    // scrollTrigger with customized settings
    scrollTrigger: {
        trigger: "#page3 #box3",
        scroller: 'body',
        // markers: true,
    }
});
gsap.from('#page4 #box4', {
    opacity: 0,
    scale: 0,
    rotate: 360,
    // scrollTrigger with customized settings
    scrollTrigger: {
        trigger: "#page4 #box4",
        scroller: 'body',
        markers: true,
        start: "top 60%"
    }
});
gsap.from('#page5 #box5', {
    opacity: 0,
    scale: 0,
    rotate: 360,
    // scrollTrigger with customized settings
    scrollTrigger: {
        trigger: "#page5 #box5",
        scroller: 'body',
        markers: true,
        start: "top 60%",
        end: "top 30%",
    }
});
gsap.from('#page6 #box6', {
    opacity: 0,
    scale: 0,
    rotate: 360,
    // scrollTrigger with customized settings
    scrollTrigger: {
        trigger: "#page6 #box6",
        scroller: 'body',
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: true, //scrub adds smoothness to the animation; it accepts boolean value or integers from 1 to 5 only
        //also if scrub value is true, it makes it reversible i.e. if we scroll back, the animation is reversed too
    }
});
gsap.from('#page7 #box7', {
    opacity: 0,
    scale: 0,
    rotate: 360,
    // scrollTrigger with customized settings
    scrollTrigger: {
        trigger: "#page7 #box7",
        scroller: 'body',
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 5,
    }
});