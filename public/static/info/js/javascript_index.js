//Scrolling articles

var Correction = 160;
var ScrollSpeed = 600;



//link1
$(document).ready(function()
{
    
     
    $('#link1').click(function()
    {
    $('html,body').animate({
        scrollTop:$('#Onas').offset().top - Correction
    }, ScrollSpeed);
    });
    
    $('#link2').click(function()
    {
    $('html,body').animate({
        scrollTop:$('#Artykuly').offset().top - Correction
    }, ScrollSpeed);
    });
    
    $('#link3').click(function()
    {
    $('html,body').animate({
        scrollTop:$('#Aktualnosci').offset().top - Correction
    }, ScrollSpeed);
    });
    
    $('#link4').click(function()
    {
    $('html,body').animate({
        scrollTop:$('#Kontakt').offset().top - Correction
    }, ScrollSpeed);
    });
    
}); 



//Sticky Navigation



$(document).ready(function() {
var NavY = $('.nav').offset().top;

var stickyNav = function(){
var ScrollY = $(window).scrollTop();

if (ScrollY > NavY) { 
        $('.nav').addClass('sticky');
} else {
        $('.nav').removeClass('sticky'); 
}
};

stickyNav();

$(window).scroll(function() {
        stickyNav();
});
});

//Login service

$(document).ready(function() {
        $('.ShowLogin').click(function(){
          $('.LoginSection').css('display','block');
          $('.ShowLogin').css('color','#8f2121');
          $('.ShowLogin').css('font-weight','700');
        });


    });

    $(document).ready(function() {
        $('#XButton').click(function(){
          $('.LoginSection').css('display','none');
          $('.ShowLogin').css('color','#fefefe');
          $('.ShowLogin').css('font-weight','400');
        });                

    });
