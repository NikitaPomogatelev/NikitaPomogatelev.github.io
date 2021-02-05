const burgerMenu = () => {
    const burgerBtn = document.querySelector('.header-burger');
    const burgerTable = document.querySelector('.header__menu');
    const heroOverlay = document.querySelector('.hero-overlay');

    burgerBtn.addEventListener('click', () => {
        burgerTable.classList.toggle('header__menu--active')
        if (burgerTable.classList.contains('header__menu--active')) {
            heroOverlay.style.display = 'block';
        } else {
            heroOverlay.style.display = 'none';
        }
    heroOverlay.addEventListener('click', () => {
        if (burgerTable.classList.contains('header__menu--active')) {
            burgerTable.classList.remove('header__menu--active')
            heroOverlay.style.display = 'none';
        }
    });
    });


}

export default burgerMenu;