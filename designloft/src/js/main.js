$(function(){
    $('.slide-price').owlCarousel({
        margin: 30,
        dots: false,
        nav: false,
        dotsClass: 'price-dots',
        dotClass: 'price-dot',
        responsiveClass: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                loop: true,
                items: 1,
                dots: true, 
            },
            // breakpoint from 768 up
            768 : {
                items: 3,
                margin: 30,
            },
        }
    });

    $('#process-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000
    });
});