$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});