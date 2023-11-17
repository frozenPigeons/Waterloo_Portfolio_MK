paceOption = {
    ajax: true,
    document: true
}

function loadEnder () {
    
    gsap.timeline()

    .to('canvas', {
        duration: 3,
        zIndex: 3,
    })

    .to('canvas', {
        duration: 2,
        delay: 1.09,
        opacity: 1
    })
}