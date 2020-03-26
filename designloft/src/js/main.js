$(function(){
    $('.slide-price').owlCarousel({
        margin: 30,
        
        nav: false,
        responsiveClass: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
                dots: true,
                
            },
            // breakpoint from 480 up
            768 : {
                items: 3,
                margin: 30,
            },
        }
    })
});