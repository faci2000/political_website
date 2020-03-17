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


            /*
            jQuery(function($)
            {
                //scrolling reset
                $.scrollTo(0);

                //  ########## first link group ########## //

                $('#link1').click(function()
                { $.scrollTo($('#Onas'), 500);}
                );

                $('#link2').click(function()
                { $.scrollTo($('#Artykuly'), 500);}
                );

                $('#link3').click(function()
                { $.scrollTo($('#Aktualnosci'), 500);}
                );

                $('#link4').click(function()
                { $.scrollTo($('#Kontakt'), 500);}
                );

            }
            );

             */

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


//Scrolling articles

            //Scrolling articles
            var Correction = 200;
            var ScrollSpeed = 1000;

            //link1
            $(document).ready(function()
            {
                $('#linkA1').click(function()
                {
                $('html,body').animate({
                    scrollTop:$('#linkA1section').offset().top - Correction
                }, ScrollSpeed);
                });

            });

            //link2
            $(document).ready(function()
            {
                $('#linkA2').click(function()
                {
                $('html,body').animate({
                    scrollTop:$('#linkA2section').offset().top - Correction
                }, ScrollSpeed);
                });

            });

            //link3
            $(document).ready(function()
            {
                $('#linkA3').click(function()
                {
                $('html,body').animate({
                    scrollTop:$('#linkA2section').offset().top - Correction
                },ScrollSpeed);
                });

            });

            //link4
            $(document).ready(function()
            {
                $('#linkA4').click(function()
                {
                $('html,body').animate({
                    scrollTop:$('#linkA3section').offset().top - Correction
                },ScrollSpeed);
                });

            });

            //link5
            $(document).ready(function()
            {
                $('#linkA5').click(function()
                {
                $('html,body').animate({
                    scrollTop:$('#linkA4section').offset().top - Correction
                },ScrollSpeed);
                });

            });

            //link6
            $(document).ready(function()
            {
                $('#linkA6').click(function()
                {
                $('html,body').animate({
                    scrollTop:$('#linkA5section').offset().top - Correction
                },ScrollSpeed);
                });

            });

            //link1
            $(document).ready(function()
            {
                $('#linkA1').click(function()
                {
                $('html,body').animate({
                    scrollTop:$('#linkA6section').offset().top - Correction
                },ScrollSpeed);
                });

            });


//Main Article Lists showing

            $(document).ready(function() {
                $('#LButton1').click(function(){

                    if($('#LButton1 > i').hasClass('icon-down-circled'))
                    {
                      $('#LButton1').css('color','#8f2121');
                  $('#LList1').css('display','block');
                  $('#LButton1 > i').addClass('icon-up-circled');
                  $('#LButton1 > i').removeClass('icon-down-circled');

                    }
                    else
                    {
                       $('#LButton1').css('color','#fefefe');
                  $('#LList1').css('display','none');
                  $('#LButton1 > i').addClass('icon-down-circled');
                  $('#LButton1 > i').removeClass('icon-up-circled');
                    }

                });

            });


            $(document).ready(function() {
                $('#LButton2').click(function(){

                    if($('#LButton2 > i').hasClass('icon-down-circled'))
                    {
                      $('#LButton2').css('color','#8f2121');
                  $('#LList2').css('display','block');
                  $('#LButton2 > i').addClass('icon-up-circled');
                  $('#LButton2 > i').removeClass('icon-down-circled');

                    }
                    else
                    {
                       $('#LButton2').css('color','#fefefe');
                  $('#LList2').css('display','none');
                  $('#LButton2 > i').addClass('icon-down-circled');
                  $('#LButton2 > i').removeClass('icon-up-circled');
                    }

                });

            });


            $(document).ready(function() {
                $('#LButton3').click(function(){

                    if($('#LButton3 > i').hasClass('icon-down-circled'))
                    {
                      $('#LButton3').css('color','#8f2121');
                  $('#LList3').css('display','block');
                  $('#LButton3 > i').addClass('icon-up-circled');
                  $('#LButton3 > i').removeClass('icon-down-circled');

                    }
                    else
                    {
                       $('#LButton3').css('color','#fefefe');
                  $('#LList3').css('display','none');
                  $('#LButton3 > i').addClass('icon-down-circled');
                  $('#LButton3 > i').removeClass('icon-up-circled');
                    }

                });

            });
