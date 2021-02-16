
import Swiper, { Navigation} from 'swiper';

Swiper.use([Navigation]);

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

