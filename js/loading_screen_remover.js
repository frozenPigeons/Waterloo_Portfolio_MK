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
        duration: 3,
        delay: 3,
        opacity: 1
    })
}