/*
Template: Markethon - Digital Marketing Agency Responsive HTML5 Template
Author: iqonicthemes.in
Design and Developed by: iqonicthemes.in
NOTE: This file contains the styling for responsive Template.
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

1.Page Loader
2.Isotope
3.Masonry
4.Progress Bar
5.Pie chart
6.Mega Menu
7.Back To Top
8.Counter
9.Accordion
10.Magnific Popup
11.Wow Animation
12.Owl Carousel
1.Countdown
14.Circle Progressbar
15.Side Menu

------------------------------------------------
Index Of Script
----------------------------------------------*/


"use strict";
$(document).ready(function() {
    $(window).on('load', function() {

        /*------------------------
        1 Page Loader
        --------------------------*/
        jQuery("#load").fadeOut();
        jQuery("#loading").delay(0).fadeOut("slow");


        $(".navbar a").on("click", function(event) {
            if (!$(event.target).closest(".nav-item.dropdown").length) {
                $(".navbar-collapse").collapse('hide');
            }
        });

        /*------------------------
        2 Isotope
        --------------------------*/
        $('.isotope').isotope({
            itemSelector: '.iq-grid-item',
        });

        // filter items on button click
        $('.isotope-filters').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $('.isotope').isotope({
                resizable: true,
                filter: filterValue
            });
            $('.isotope-filters button').removeClass('active');
            $(this).addClass('active');
        });



        function sticky_relocate() {
            var window_top = $(window).scrollTop();

            if($('.iq-works').length && $('.iq-features').length )
            {    
                var div_top = $('.iq-works').offset().top + 900;
                var div_features = $('.iq-features').offset().top - 155;
                if (window_top > div_top) {
                    $('.our-info').addClass('menu-sticky').show();
                    if (window_top > div_features) {
                        $('.our-info').removeClass('menu-sticky').hide();

                    }
                } else {
                    $('.our-info').removeClass('menu-sticky').show();
                }
        }

        }

        $(function() {
            $(window).scroll(sticky_relocate);
            sticky_relocate();
        });



        /*------------------------
        3 Masonry
        --------------------------*/

        var $msnry = $('.iq-masonry-block .iq-masonry');
        if ($msnry) {
            var $filter = $('.iq-masonry-block .isotope-filters');
            $msnry.isotope({
                percentPosition: true,
                resizable: true,
                itemSelector: '.iq-masonry-block .iq-masonry-item',
                masonry: {
                    gutterWidth: 0
                }
            });
            // bind filter button click
            $filter.on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $msnry.isotope({
                    filter: filterValue
                });
            });

            $filter.each(function(i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function() {
                    $buttonGroup.find('.active').removeClass('active');
                    $(this).addClass('active');
                });
            });
        }

        /*------------------------
        4 Progress Bar
        --------------------------*/
        $('.iq-progress-bar > span').each(function() {
            var $this = $(this);
            var width = $(this).data('percent');
            $this.css({
                'transition': 'width 2s'
            });
            setTimeout(function() {
                $this.appear(function() {
                    $this.css('width', width + '%');
                });
            }, 500);
        });
        /*-----------------
         5 Pie chart
        -----------------*/
        if ($("#chartContainer").length) {
            var chart = new CanvasJS.Chart("chartContainer", {
                theme: "light2",
                animationEnabled: true,
                data: [{
                    type: "pie",
                    indexLabelFontSize: 18,
                    radius: 80,
                    indexLabel: "{label} - {y}",
                    yValueFormatString: "###0.0\"%\"",
                    click: explodePie,
                    dataPoints: [{
                        y: 42,
                        label: "Data Analysis"
                    }, {
                        y: 21,
                        label: "Social Media Marketing"
                    }, {
                        y: 24.5,
                        label: "Business Analysis"
                    }, {
                        y: 9,
                        label: "Research And Strategy"
                    }]
                }]
            });
            chart.render();

            function explodePie(e) {
                for (var i = 0; i < e.dataSeries.dataPoints.length; i++) {
                    if (i !== e.dataPointIndex)
                        e.dataSeries.dataPoints[i].exploded = false;
                }
            }

        }
    });

    /*------------------------
    6 Mega Menu
    --------------------------*/
    $('#menu-1').megaMenu({
        // DESKTOP MODE SETTINGS
        logo_align: 'left', // align the logo left or right. options (left) or (right)
        links_align: 'left', // align the links left or right. options (left) or (right)
        socialBar_align: 'left', // align the socialBar left or right. options (left) or (right)
        searchBar_align: 'right', // align the search bar left or right. options (left) or (right)
        trigger: 'hover', // show drop down using click or hover. options (hover) or (click)
        effect: 'fade', // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
        effect_speed: 400, // drop down show speed in milliseconds
        sibling: true, // hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
        outside_click_close: true, // hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
        top_fixed: false, // fixed the menu top of the screen. options (true) or (false)
        sticky_header: true, // menu fixed on top when scroll down down. options (true) or (false)
        sticky_header_height: 200, // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
        menu_position: 'horizontal', // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
        full_width: true, // make menu full width. options (true) or (false)
        // MOBILE MODE SETTINGS
        mobile_settings: {
            collapse: true, // collapse the menu on click. options (true) or (false)
            sibling: true, // hide the others showing drop downs when click on current drop down. options (true) or (false)
            scrollBar: true, // enable the scroll bar. options (true) or (false)
            scrollBar_height: 400, // scroll bar height in px value. this option works if the scrollBar option true.
            top_fixed: false, // fixed menu top of the screen. options (true) or (false)
            sticky_header: true, // menu fixed on top when scroll down down. options (true) or (false)
            sticky_header_height: 200 // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
        }
    });

    /*------------------------
    7 Back To Top
    --------------------------*/
    $('#back-to-top').fadeOut();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1400);
        } else {
            $('#back-to-top').fadeOut(400);
        }
    });
    // scroll body to 0px on click
    $('#top').on('click', function() {
        $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    /*------------------------
    8 Counter
    --------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*------------------------
    9 Accordion
    --------------------------*/
    $('.iq-accordion .iq-ad-block .ad-details').hide();
    $('.iq-accordion .iq-ad-block:first').addClass('ad-active').children().slideDown('slow');
    $('.iq-accordion .iq-ad-block').on("click", function() {
        if ($(this).children('div').is(':hidden')) {
            $('.iq-accordion .iq-ad-block').removeClass('ad-active').children('div').slideUp('slow');
            $(this).toggleClass('ad-active').children('div').slideDown('slow');
        }
    });

    /*------------------------
    10 Magnific Popup
    --------------------------*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        tLoading: 'Loading image #%curr%...',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            navigateByImgClick: true,
            enabled: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        mainClass: 'mfp-fade',
        preloader: false,
        removalDelay: 160,
        fixedContentPos: false
    });


    /*------------------------
    11 Wow Animation
    --------------------------*/
    new WOW().init();

    /*------------------------
    12 Owl Carousel
    --------------------------*/
    $('.owl-carousel').each(function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
            items: $carousel.data("items"),
            loop: $carousel.data("loop"),
            margin: $carousel.data("margin"),
            nav: $carousel.data("nav"),
            dots: $carousel.data("dots"),
            autoplay: $carousel.data("autoplay"),
            autoplayTimeout: $carousel.data("autoplay-timeout"),
            navText: ['<i class="ion-arrow-left-c"></i>', '<i class="ion-arrow-right-c"></i>'],
            responsiveClass: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: $carousel.data("items-mobile-sm")
                },
                // breakpoint from 480 up
                480: {
                    items: $carousel.data("items-mobile")
                },
                // breakpoint from 786 up
                786: {
                    items: $carousel.data("items-tab")
                },
                // breakpoint from 1023 up
                1023: {
                    items: $carousel.data("items-laptop")
                },
                1199: {
                    items: $carousel.data("items")
                }
            }
        });
    });

    /*------------------------
    13 Countdown
    --------------------------*/
    $('#countdown').countdown({
        date: '10/06/2020 23:59:59',
        day: 'Day',
        days: 'Days'
    });



    /*------------------------
    14 Circle Progressbar
    --------------------------*/
    function animateElements() {

        $('.progressbar').each(function() {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    thickness: 9,
                    fill: {
                        color: '#1B58B8'
                    }
                }).stop();

                $(this).find('.circle.purple').circleProgress({
                    fill: {
                        color: '#6934cb'
                    }
                });
                $(this).find('.circle.light-purple').circleProgress({
                    fill: {
                        color: '#7c60d5'
                    }
                });
                $(this).find('.circle.green').circleProgress({
                    fill: {
                        color: '#33e2a0'
                    }
                });
            }
        });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);



    /*------------------------
    About menu
    --------------------------*/

    $(document).ready(function() {
        $('.our-info ul.about-us li a').on('click', function() {
            var id = $(this).attr('href');
            //alert(id);  
            $(id).css({
                "padding-top": "250px"
            });
            $('.our-info ul.about-us li a.active').removeClass('active');
            $(this).addClass('active');

        });
    });



    /*------------------------
    15 Side Menu
    --------------------------*/

    $(function() {
        $('body').addClass('js');

        var $hamburger = $('.hamburger'),
            $nav = $('#site-nav'),
            $masthead = $('#masthead');

        $hamburger.click(function() {
            $(this).toggleClass('is-active');
            $nav.toggleClass('is-active');
            $masthead.toggleClass('is-active');
            return false;
        })
    });



});