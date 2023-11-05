paceOptions = {
    ajax: true,
    document: true
}

Pace.on('done', () => {

    gsap.timeline()
    .add('p')
    .to('.pace', {
        transform: 'scale(10,1)',
        duration: 4.2
    }, "+=.2")

    .to('.pace', {
        duration: 1.5,
        height: "100%"
    }, "-=3.1")

    .to('.preloading_text', {
        delay: .2,
        duation: 2,
        opacity: 0,
        yPercent: -400,
        ease: "BezierEasing(0.19,1,0.22,1)"
    }, 'p')

    .to('.title', {
        duration: 1,
        delay: 3.25,
        y: -10,
        opacity: 1,
    }, "-=2.5")
})