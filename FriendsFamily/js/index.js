$(document).ready(function(){
  $("#slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
  });
});

$('#uploudFile').click(function(){
  $("input[type='file']").trigger('click');
});

