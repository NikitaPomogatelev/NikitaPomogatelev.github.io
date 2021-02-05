import Choices from 'choices.js';

const customSelect = () => {
    
    const element = document.querySelector('.hero-select');
    const choices = new Choices(element, {
        searchEnabled: false,
        // placeholder: false
    });
}

export default customSelect;