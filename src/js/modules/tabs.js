const tabs = () => {
    const navigationList = document.querySelector('.navigation-list');
    const navigationLink = document.querySelectorAll('.navigation__link');
    const contentItem = document.querySelectorAll('.content__item');

    function hideTabContent() {
        contentItem.forEach(item => {
            item.classList.remove('active');
        });
        navigationLink.forEach(item => {
            item.classList.remove('active');
        });
    };

    function showTabContent(i = 1) {
        contentItem[i].classList.add('active');
        navigationLink[i].classList.add('active');
    }

    navigationList.addEventListener('click', (e) => {
        const target = e.target;
        if(target || target.closest('.navigation__item')) {
            navigationLink.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    })
};

export default tabs;