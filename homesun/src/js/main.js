$(function() {

 
  

  $('#news-slider').owlCarousel({
    loop:true,
    margin: 10,
    nav:false,
    items: 1,
});

$('.program-slider').owlCarousel({
  loop:true,
  margin: 10,
  nav:false,
  items: 1,
});

$('#persons-slider').owlCarousel({
  loop:true,
  margin: 10,
  nav:false,
  dotsClass: 'persons-dots',
  dotClass: 'persons-dot',
  dots: true,
  items: 1,
});

$('#feedback-slider').owlCarousel({
  loop:true,
  margin: 10,
  nav:true,
  dotsClass: 'feedback-dots',
  dotClass: 'feedback-dot',
  navContainerClass: 'feedback-nav',
  navClass: ['feedback-prev', 'feedback-next'],
  navText: ['<img class="feedback__icon" src="img/feedback/arrow-left.svg">',
  '<img class="feedback__icon" src="img/feedback/arrow-right.svg">'],
  dots: true,
  items: 1,

});

  var item = $('.owl-item');
  isHave = true;

    if (item.hasClass('active')) {
    $('.news-overlay').fadeTo(500, 1)
  } else {
    $('.news-overlay').fadeOut(0, 0)
  }


})