let tl = gsap.timeline();

tl.from('nav>a>img, nav>div>h3, nav>div>h4, nav>div>button',{
    y:"-100px",
    duration: 0.8,
    opacity: 0,
    stagger: 0.3
});

tl.from('#main>h1', {
    y:'200px',
    opacity: 0,
    stagger: 0.2,
});

tl.from('#main>img', {
    scale: 0,
    opacity: 0,
    stagger: 0.3
});

tl.from('#main>h5', {
    scale: 0,
    duration: 1,
    opacity: 0,
});
tl.to('#main>h5', {
    y:'-20px',
    duration: 1,
    repeat: -1,
    yoyo: true,
});