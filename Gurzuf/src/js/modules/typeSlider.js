import typeImageSlider from "./typeImageSlider"

import Swiper, { Navigation} from 'swiper';

Swiper.use([Navigation]);

const typeSlider = () => {
    const mainTypeSlider = new Swiper('.type-slider.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 8,
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

export default typeSlider;