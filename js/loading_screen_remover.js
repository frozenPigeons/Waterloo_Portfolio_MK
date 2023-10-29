paceOption = {
    ajax: true,
    document: true
}

function loadEnder () {
    
    gsap.timeline()

    .to('canvas', {
        duration: 5,
        zIndex: 3,
    })

    .to('canvas', {
        duration: 5,
        delay: 2,
        opacity: 1
    })
}