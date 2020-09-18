$(function() {
    'use strict'; // Start of use strict



    /*--------------------------
    scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*------------------------------------------------------------------
        Year
    ------------------------------------------------------------------*/
    $(function() {
        var theYear = new Date().getFullYear();
        $('#year').html(theYear);
    });

    /*----------------------------
    		Slider popup active
    ------------------------------*/

    $(".slider-popup").magnificPopup({
        type: "iframe"
    });


    // Two Item Carousel

    if ($('.two-item-carousel').length) {
        $('.two-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    }

    $('#buzz')
        /*----------------------------
    		Menu
    ------------------------------*/

    $(function() {
        $('.main-menu .navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1000);
            event.preventDefault();
        });
    });
    /*hide menu on mobile click*/
    $(".navbar-nav>li>a").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });
    //scrollspy menu
    $('body').scrollspy({
        target: '#main_menu',
        offset: 100
    });
    // Isotope Script
    $(window).on('load', function() {
        function sortingGallery() {
            if ($(".my-gallery").length) {
                var $container = $('.gallery-container');
                $container.isotope({
                    filter: '*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });

                $(".gallery-nav li a").on("click", function() {
                    $('.gallery-nav li .active').removeClass('active');
                    $(this).addClass('active');
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
        }
        sortingGallery();
    });
    $('.gallery-container').isotope({
        itemSelector: '.item',
        masonry: {
            gutter: 30
        }
    });

    /*----------------------------
       		Main Slider Active
    ------------------------------*/
    $(".sb-main-slider").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

});
// Isotope Script for portfolio two
$(window).on('load', function() {
    function sortingGallery() {
        if ($(".my-gallery").length) {
            var $container = $('.gallery-container');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });

            $(".gallery-nav li a").on("click", function() {
                $('.gallery-nav li .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    sortingGallery();
});

/*------------------------------------------------------------------
 Loader 
------------------------------------------------------------------*/
jQuery(window).on("load scroll", function() {
    'use strict'; // Start of use strict
    // Loader 
    $('.spinner').fadeOut();
    $('.preloader-area').delay(350).fadeOut('slow');

    var scroll = $(window).scrollTop();
    if (scroll < 2) {
        $(".header-bottom").removeClass("sticky");
    } else {
        $(".header-bottom").addClass("sticky");
    }
});


$('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
        beforeOpen: function() {
            if ($(window).width() < 700) {
                this.st.focus = false;
            } else {
                this.st.focus = '#name';
            }
        }
    }
});