

$(document).ready(function () {
    //Owl
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        nav:false,
        // navText: ['PREV', 'NEXT'],
        smartSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: true,
            },
            768: {
                nav: true,
            }
        }
    });

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('#reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});
