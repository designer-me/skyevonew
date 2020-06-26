(function($) {

	"use strict";


	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
    
    //===Search box ===
    function searchbox() {
        //Search Box Toggle
        if($('.seach-toggle').length){
            //Dropdown Button
            $('.seach-toggle').on('click',function() {
                $(this).toggleClass('active');
                $(this).next('.search-box').toggleClass('now-visible');
            });
        }

    }


	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 250) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header .navigation li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
    
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(500);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(500);	
			}
		});	
	}
    
    //Accordion Box
    function accordion() {
        if($('.accordion-box').length){
            $(".accordion-box").on('click', '.accord-btn', function() {

                if($(this).hasClass('active')!==true){
                $('.accordion .accord-btn').removeClass('active');

                }

                if ($(this).next('.accord-content').is(':visible')){
                    $(this).removeClass('active');
                    $(this).next('.accord-content').slideUp(500);
                }else{
                    $(this).addClass('active');
                    $('.accordion .accord-content').slideUp(500);
                    $(this).next('.accord-content').slideDown(500);	
                }
            });	
        }
    }
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
    
    // 3. fancyboxInit
    function fancyboxInit () {
        var galleryFcb = $('.fancybox');
        if(galleryFcb.length){
            galleryFcb.fancybox({
                openEffect  : 'elastic',
                closeEffect : 'elastic',
                helpers : {
                    media : {}
                }
            });
        }
    }
    
	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 0 
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
	// Isotope Filter 
	$filter.find('li').on('click',function(){
		var selector = $(this).attr('data-filter');

		try {
			$container.isotope({ 
				filter	: selector,
				animationOptions: {
					duration: 500,
					easing	: 'linear',
					queue	: false
				}
			});
		} catch(err) {

		}
		return false;
	});
	
	
	winDow.bind('resize', function(){
		var selector = $filter.find('li.active').attr('data-filter');

		$container.isotope({ 
			filter	: selector,
			animationOptions: {
				duration: 500,
				easing	: 'linear',
				queue	: false
			}
		});
	});
	
	
	var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();
    
    // 1. Gallery masonary style
    function galleryMasonaryLayout () {
        if ($('.masonary-gallery').length) {
            $('.masonary-gallery').isotope({
                layoutMode:'masonry'
            });
        }
        if($('.portfolio-filter.masonary').length){
            $('.portfolio-filter.masonary span').on('click', function(){
                var Self = $(this);
                var selector = Self.parent().data('filter');			
                $('.portfolio-filter.masonary span').parent().removeClass('active');
                Self.parent().addClass('active');
                $('.masonary-gallery').isotope({ filter: selector });
                return false;
            });
        }
    }
    
    // 2. GalleryFilter
    function GalleryFilter () {

        if ($('.image-gallery').length) {
            $('.image-gallery').each(function () {
                var Self = $(this);
                var filterSelector = Self.data('filter-class');
                var showItemOnLoad = Self.data('show-on-load');

                if (showItemOnLoad) {
                    Self.mixItUp({
                        load: {
                            filter: '.'+showItemOnLoad
                        },
                        selectors: {
                            filter: '.'+filterSelector
                        }
                    })	
                };
                Self.mixItUp({
                    selectors: {
                        filter: '.'+filterSelector
                    }
                });
            });
        };
    }

    //Our Team Slider
	if ($('.team-slider').length) {
		$('.team-slider').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			autoplayHoverPause:false,
			autoplay: 4500,
			smartSpeed: 700,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1140:{
					items:3
				}
			}
		});    		
	}
	

    //Image Slider
	if ($('.image-slider').length) {
		$('.image-slider').owlCarousel({
			loop:true,
			  nav : true,
			  smartSpeed : 1000,
			  autoplay: 7000,
			  responsive:{
				0:{
					items:1
				},
				600:{
					items:5
				},
				1024:{
					items:5
				},
				1200:{
					items:5
				},
				1400:{
					items:5
				}
			}
		});    		
	}
    
    //===Language switcher===
    function languageSwitcher() {
        if ($("#polyglot-language-options").length) {
            $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
                effect: 'fade',
                testMode: true,
                onChange: function(evt) {
                        alert("The selected language is: " + evt.selectedItem);
                    }
                    //                ,afterLoad: function(evt){
                    //                    alert("The selected language has been loaded");
                    //                },
                    //                beforeOpen: function(evt){
                    //                    alert("before open");
                    //                },
                    //                afterOpen: function(evt){
                    //                    alert("after open");
                    //                },
                    //                beforeClose: function(evt){
                    //                    alert("before close");
                    //                },
                    //                afterClose: function(evt){
                    //                    alert("after close");
                    //                }
            });
        };
    }
    
    
    //===Testimonial Slider===
    function testimonialSlider() {
        if ($('.testimonial-carousel').length) {
            $('.testimonial-carousel').owlCarousel({
                loop:true,
                margin:30,
                nav:true,
                dots: false,
                autoplayHoverPause:false,
                autoplay: 6000,
                smartSpeed: 700,
                navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    800:{
                        items:2
                    },
                    1024:{
                        items:3
                    },
                    1100:{
                        items:3
                    },
                    1200:{
                        items:3
                    }
                }
            })
        }
    }
    
    //===Blog Carousel===
    function blogCarousel () {
        if ($('.blog-carousel').length) {
            $('.blog-carousel').owlCarousel({
                dots: false,
                loop:true,
                margin:30,
                nav:true,
                navText: [
                    '<i class="fa fa-caret-left"></i>',
                    '<i class="fa fa-caret-right"></i>'
                ],
                autoplayHoverPause: false,
                autoplay: 6000,
                smartSpeed: 2000,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    800:{
                        items:1
                    },
                    1024:{
                        items:2
                    },
                    1100:{
                        items:2
                    },
                    1200:{
                        items:3
                    }
                }
            });    		
        }
    }
    
    //Tabs Box / Jquery Tabs
	if($('.tabs-box').length){
		
		//Tabs
		$('.tabs-box .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('.tabs-box .tab-btn').removeClass('active');
			$(this).addClass('active');
			$('.tabs-box .tab').fadeOut(0);
			$('.tabs-box .tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
			var windowWidth = $(window).width();
			if (windowWidth <= 700) {
				$('html, body').animate({
				   scrollTop: $('.tabs-content').offset().top
				 }, 1000);
			}
		});
		
	}
	
	

	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
			target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
		});
	}
	
	
	//Testimonials Carousel
	if ($('.testimonials-carousel').length) {
		$('.testimonials-carousel').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-caret-left"></span>', '<span class="fa fa-caret-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});
	}
	

	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			smartSpeed: 700,
			autoplay: onoffline,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
	}
    
    //double Item Carousel
	if ($('.double-item-carousel').length) {
		$('.double-item-carousel').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:2
				}
			}
		});
	}
	
    //Clients Testimonial Slider
	if($('.testimonial-slider-full').length){
		$('.testimonial-slider-full').bxSlider({
			adaptiveHeight: true,
			auto:true,
			mode:'vertical',
			controls: false,
			pause: 5000,
			speed: 1000,
			pager:true
		});
	}
    

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	//Mixitup Gallery
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	

	//Jquery Spinner / Quantity Spinner
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}
	
	
	// Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .counter-column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}


	//Price Range Slider
	if($('.range-slider-price').length){

		var priceRange = document.getElementById('range-slider-price');

		noUiSlider.create(priceRange, {
			start: [ 30, 300 ],
			limit: 1000,
			behaviour: 'drag',
			connect: true,
			range: {
				'min': 10,
				'max': 500
			}
		});

		var limitFieldMin = document.getElementById('min-value-rangeslider');
		var limitFieldMax = document.getElementById('max-value-rangeslider');

		priceRange.noUiSlider.on('update', function( values, handle ){
			(handle ? limitFieldMax : limitFieldMin).value = values[handle];
		});
	}

	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
    
    if ($('.image .bxslider').length) {
	$('.image .bxslider').bxSlider({
        nextSelector: '.testimonial #slider-next',
        prevSelector: '.testimonial #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '700',
        infiniteLoop: true,
        stopAuto: false,
        pagerCustom: '.image .slider-pager .thumb-box'
        })
        }
    
    if ($('.our-history .bxslider').length) {
	$('.our-history .bxslider').bxSlider({
        nextSelector: '.our-history #slider-next',
        prevSelector: '.our-history #slider-prev',
        nextText: '<i class="fa fa-caret-right"></i>',
        prevText: '<i class="fa fa-caret-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '700',
        pagerCustom: '.our-history .slider-pager .thumb-box'
    });
};
    
    //===Brand Carousel===
function brandCarousel () {
    if ($('.brand').length) {
        $('.brand').owlCarousel({
            dots: false,
            loop:true,
            margin:30,
            nav:true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1024:{
                    items:4
                },
                1100:{
                    items:4
                },
                1200:{
                    items:5
                }
            }
        });    		
    }
}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);

		});
	}


	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

    // Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
        // add your functions
        searchbox ();
        blogCarousel ();
        testimonialSlider ();
        GalleryFilter();
        fancyboxInit();
        languageSwitcher ();
        brandCarousel ();
        accordion ();
 
	})(jQuery);
});

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function() {
		headerStyle();
		factCounter();
	});
	

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on('load', function() {
		handlePreloader();
        galleryMasonaryLayout();
        enableMasonry();
	});



})(window.jQuery);
