const dropDown = () => {

    const dropItem = document.querySelectorAll('.question__item');

    dropItem.forEach((el) => {
        el.addEventListener('click', () => {
			if (el.classList.contains('question__item')) {
				el.classList.toggle('question__item--active')
				toogleItem(el);
			}

        });
    });


	function toogleItem(ask){
		let answer = ask.querySelector('.question__item-descr'); // ask.nextElementSibling  ask.parentNode.querySelector('.asnwer')
        
		if(answer.classList.contains('question__item-descr--active')){
			if('animate' in answer){
				let animate = answer.animate([
					{ opacity: 1, transform: 'translateX(0)' }, 
					{ opacity: 0, transform: 'translateX(100px)' }
				], 
					{ duration: 500 }
				);

				animate.addEventListener('finish', function(){
					answer.classList.remove('question__item-descr--active');
					// answer.classList.remove('question__item-descr--active');
				});
			}
			else{
				answer.classList.remove('question__item-descr--active');
			}
		}
		else{
			answer.classList.add('question__item-descr--active');
		}
	}
    
    
    
}

export default dropDown;