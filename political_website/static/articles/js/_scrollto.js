$('a[href^="#"]').on('click', function(event) {
    // var target = $(this.getAttribute('href'));
    // if( target.length ) {
    //     event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#5').offset().top - 200
        }, 1000);
    // }
});