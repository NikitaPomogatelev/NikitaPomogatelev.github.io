import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const reasonSlider = () => {
    const mainReasonSlider = new Swiper('.reason .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 47,
        loop: true,
        simulateTouch: false,
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
          },

        breakpoints: {
            // when window width is >= 1165px
            1165: {
              slidesPerView: 3,
              
              
            },
            // when window width is >= 797px
            797: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            // when window width is >= 320px
            0: {
              slidesPerView: 1,
              spaceBetween: 0
            },
        }
    });
}

export default reasonSlider;