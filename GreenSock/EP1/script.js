// gsap.to('#box', {
//     x: "900px",
//     rotate: "360deg",
//     scale: "0.5",
//     backgroundColor: "blue",
//     duration: "10",
//     delay: "2"
// });

gsap.from('#box', {
    x: "900px",
    rotate: "360deg",
    scale: "0.5",
    backgroundColor: "blue",
    duration: "6",
    delay: "2"
});

gsap.to('h1', {
    x: '900px',
    color: "orange",
    duration: '3',
    delay: '2'
});
gsap.to('h2', {
    x: '900px',
    color: "salmon",
    duration: '3',
    delay: '4'
});
gsap.to('h3', {
    x: '900px',
    color: "purple",
    duration: '3',
    delay: '6'
});

gsap.to('p', {
    x: '900px',
    color: "purple",
    duration: '3',
    delay: '6',
    stagger:'1' // makes all elements inside <p></p> tags animate one by one with time interval of 1 second between them
});

gsap.to('h6', {
    x: '700px',
    color: "purple",
    duration: '3',
    delay: '2',
    repeat:'-1'
});

gsap.to('h5', {
    x: '700px',
    color: "purple",
    duration: '3',
    delay: '2',
    repeat:'-1',
    yoyo: true
});

// Timeline in GSAP
let timelineVar = gsap.timeline();
timelineVar.to('#testingTimeline1', {
    x: '500px',
    color: 'violet',
});
timelineVar.to('#testingTimeline2', {
    x: '500px',
    color: 'violet',
});
timelineVar.to('#testingTimeline3', {
    x: '500px',
    color: 'violet',
});
timelineVar.to('#testingTimeline4', {
    x: '500px',
    color: 'violet',
});
