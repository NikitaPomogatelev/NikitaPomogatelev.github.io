$(function(){

    $("#navbar-call").on('click', function() {
        event.preventDefault();
        $("#modal-callback").addClass('modal_active');
        
    });

    $("#modal-close").on('click', function() {
        $("#modal-callback").removeClass('modal_active'); 
    });
    

});