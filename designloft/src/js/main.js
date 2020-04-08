$(function(){
    $('.slide-price').owlCarousel({
        margin: 30,
        dots: false,
        nav: false,
        
        responsiveClass: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                loop: true,
                items: 1,
                
                dotsClass: 'price-dots',
                dotClass: 'price-dot',
                dots: true,
                
                
            },
            // breakpoint from 480 up
            768 : {
                items: 3,
                margin: 30,
            },
        }
    });

    // $('.process-slider').owlCarousel({
    //     items: 1,
    //     dots: false,
    //     nav: false,
    // });
});