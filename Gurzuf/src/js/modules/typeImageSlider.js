
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const typeImageSlider = () => {
    const typeImages = new Swiper('.type-item .swiper-container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.type-item .item-button-next',
            prevEl: '.type-item .item-button-prev',
          },
    });
}


export default typeImageSlider;

