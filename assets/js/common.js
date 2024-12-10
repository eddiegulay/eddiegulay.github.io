/*
 * Author: ArtStyles (Art)
 * Template Name: Fotico
 * Version: 1.0.1
*/

"use strict";
$(document).ready(function() {

	/*-----------------------------------------------------------------
	  Detect device mobile
	-------------------------------------------------------------------*/
	
    var isMobile = false; 

	if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('touch');
	  	isMobile = true;
	}
	else{
		$('html').addClass('no-touch');
		isMobile = false;
	}


	/*-----------------------------------------------------------------
	  Preloader
	-------------------------------------------------------------------*/
    
	var e = 0,
        b = $(".bg").length,
        t = 0;
	
	$('.bg').imagesLoaded({ background: true }).always(function(e) {
		setTimeout(function(){
            $(".loading").addClass("bounceOutRight");
			$("body").removeClass("preload");
        }, 2000);
    }).progress(function(a, i) {
        var n = 100 * (t = ++e / b);
        $(".progress-bar").css("width", n + "%")
    });


    /*-----------------------------------------------------------------
      niceScroll
    -------------------------------------------------------------------*/		
    
	function niceScroll() {
	    if (!isMobile) {
            $('html').niceScroll({
		        horizrailenabled:false,
		        cursorborder: "none",
		        scrollspeed: 100, // scrolling speed
                mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
	        });
	    }
	};

	niceScroll();


	/*-----------------------------------------------------------------
	  Hamburger
	-------------------------------------------------------------------*/

    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
		$('body').toggleClass('open');
		$('.menu').toggleClass('menu-show');
		$('html').toggleClass('is-scroll-disabled');
		$('.ef-background').addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		  function(){
		      $(this).removeClass('animated');
		});
    });

	$(document).keyup(function(e) {
        if (e.keyCode === 27) $('.open .hamburger').click();
    });


	/*-----------------------------------------------------------------
	  Input
	-------------------------------------------------------------------*/

    $(".form-input, .form-textarea").focus(function(){
        $(this).parent().addClass("is-completed");
    });

    $(".form-input, .form-textarea").focusout(function(){
        if($(this).val() === "")
        $(this).parent().removeClass("is-completed");
    });

	
   /*-----------------------------------------------------------------
	  Masonry
	-------------------------------------------------------------------*/

	var $newsGrid=$('.news-grid').isotope({
        itemSelector: '.news-item',
		percentPosition: true,
        layoutMode: 'masonry',
		transitionDuration: '0.8s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
		masonry: {
            gutter: 60,
            //isFitWidth: true
        }
    });
	$newsGrid.imagesLoaded().progress( function() {
        $newsGrid.masonry ({
            gutter: 60,
            //isFitWidth: true
		});
    });


	/*-----------------------------------------------------------------
	  Carousels
	-------------------------------------------------------------------*/	

    $('body').imagesLoaded().always( function( instance ) {
	    setTimeout(function(){
			
			// Half carousel
			var swiper = new Swiper('.half-slider', {
		        slidesPerView: 1,
		        loop: true,
		        effect: 'fade',
		        pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
		        autoplay: {
                    disableOnInteraction: false,
					delay: 6000
                },
		        speed: 1000,
				simulateTouch: false,
		        roundLengths: true,
                keyboard: true,
		        mousewheel: true,
		        navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });
			
			// Carousel horizontal
			var swiper = new Swiper('.carousel-horizontal', {
				centeredSlides: true,
				slidesPerView: 'auto',
		        loop: true,
				spaceBetween: 400,
		        pagination: {
                    el: '.swiper-pagination',
                    type: 'progressbar',
                },
		        /*autoplay: {
                    disableOnInteraction: false,
                },*/
		        speed: 1000,
		        roundLengths: true,
                keyboard: true,
				parallax: true,
		        mousewheel: true,
				grabCursor: true,
		        navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
		            0: {
                        spaceBetween: 0
                    },
			        580: {
				        spaceBetween: 0
			        },
			        768: {
				        spaceBetween: 50
			        },
			        900: {
				        spaceBetween: 80
			        },
			        1200: {
				        spaceBetween: 130
			        },
			        1500: {
				        spaceBetween: 220
			        },
			        1800: {
				        spaceBetween: 240
			        },
                }		
            });
			
			// Carousel vertical
			var swiper = new Swiper('.carousel-vertical', {
				centeredSlides: true,
				slidesPerView: 'auto',
		        loop: true,
				spaceBetween: 100,
		        pagination: {
                    el: '.swiper-pagination',
                    type: 'progressbar',
                },
		        /*autoplay: {
                    disableOnInteraction: false,
                },*/
		        speed: 1000,
		        roundLengths: true,
                keyboard: true,
				parallax: true,
		        mousewheel: true,
				grabCursor: true,
		        navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
		            0: {
                        spaceBetween: 0
                    },
			        580: {
				        spaceBetween: 0
			        },
                }
            });
		}, 2000);
	});


	/*-----------------------------------------------------------------
	  Tilt effect
	-------------------------------------------------------------------*/
	
    $('body').imagesLoaded().always( function( instance ) {
		if (window.innerWidth > 580) {
	        var $photoBase=$(".tilt").tilt({
                maxTilt: 10,
                perspective: 1500,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                speed: 1000,
                glare: true,
                maxGlare: 0.3,
                scale: 1.04
            });
		}
    });


    /*-----------------------------------------------------------------
      Parallax mouse
    -------------------------------------------------------------------*/
	
	$('body').on('mousemove', function(e) {
		if (!isMobile) {
            var amountMovedX = (e.pageX * -0.1 / 8);
            var amountMovedY = (e.pageY * -0.1 / 8);
            $('.js-parallax-mouse').css({transform: 'translate3d(' + amountMovedX + 'px, ' + amountMovedY + 'px, 0)'});
		}
    });

	
	/*-----------------------------------------------------------------
	  Autoresize textarea
	-------------------------------------------------------------------*/	

    $('textarea').each(function(){
        autosize(this);
    });


    /*-----------------------------------------------------------------
	  Skrollr
	-------------------------------------------------------------------*/

    var s=skrollr.init({
        forceHeight:false,
        smoothScrolling: true,
        mobileCheck: function() {
            return false;
        }
    });


    /*-----------------------------------------------------------------
	  Waypoint
	-------------------------------------------------------------------*/

    $('body').imagesLoaded().always( function( instance ) {
	    setTimeout(function(){
			
			//slide in down
			$('.slideInDown').waypoint(function() {
			    if (!isMobile) {
                    $(this.element).addClass('animated');
				}
            }, {
                offset: '80%'
            });
            
			//effect reveal
            $('.effect-reveal').waypoint(function() {
                $(this.element).addClass('animated'); 
            }, {
                offset: '80%'
            });

			//down up
			if (!isMobile) {
                $('.down-up-2').waypoint(function(direction) {
				    if (direction ==='down') {
                        $(this.element).addClass('animated');
				    }
                    /*else {
                        $(this.element).removeClass('animated');
                    }*/
                }, {
                    offset: '100%'
                });
            }
			
			//reveal
            $('.reveal').waypoint(function(direction) {
				if (direction ==='down') {
                    $(this.element).addClass('animated');
				}
                /*else {
                    $(this.element).removeClass('animated');
                }*/
            }, {
                offset: '80%'
            });

			//os
			if (!isMobile) {
                $('.os').waypoint(function(direction) {
				    if (direction ==='down') {
                        $(this.element).addClass('animated');
				    }
                    /*else {
                        $(this.element).removeClass('animated');
                    }*/
                }, {
                    offset: '100%'
                });
			}
	    }, 2000);
    });

	
	/*-----------------------------------------------------------------
	  Scrollspy
	-------------------------------------------------------------------*/

    var navItem = $('.page-nav__item');

    navItem.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);
        $(this).addClass('active');
        e.preventDefault();
    });

    $(window).on('scroll', function(){
        pageNav();
    });

    function pageNav() {
        var sTop = $(window).scrollTop();
        $('.work-item').each(function() {
            var id = $(this).attr('id'),
            offset = $(this).offset().top - 100,
            height = $(this).height();
            if(sTop >= offset && sTop < offset + height) {
                navItem.removeClass('active');
                $('.page-nav').find('[data-scroll="' + id + '"]').addClass('active');
            }
        });
    }
    pageNav();
  
 
	/*-----------------------------------------------------------------
	  Stick
	-------------------------------------------------------------------*/

    $('.page-nav').stick_in_parent({
        offset_top: 100
    });

    $('.page-nav').stick_in_parent()
    .on('sticky_kit:unbottom', function(e) {
        $(this).css({ display: 'block' });
    })
    .on('sticky_kit:bottom', function(e) {
        $(this).css({ display: 'none' });
    });
	

	/*-----------------------------------------------------------------
	  Jarallax
	-------------------------------------------------------------------*/		
	
    $('.jarallax').jarallax({
		speed: 0.8,
        type: 'scroll'
    });	


	/*-----------------------------------------------------------------
	  Subscribe form
	-------------------------------------------------------------------*/

    $('.newsletter-form').ajaxChimp({
		url: "http://netgon.us13.list-manage.com/subscribe/post?u=b3954a95f1a55ffe65dd25050&amp;id=50b6fd13c3", // Your url MailChimp
        callback: function(response) {
            $('.newsletter-form .form-result').html(response.msg);
        }
    });


	/*-----------------------------------------------------------------
	  Contacts form
	-------------------------------------------------------------------*/

    $("#contact-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Please fill in the form...");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });
	
    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        $.ajax({
            type: "POST",
            url: "assets/php/form-contact.php",
            data: "name=" + name + "&email=" + email + "&message=" + message,
            success : function(text){
                if (text == "success"){
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }	
	
    function formSuccess(){
        $("#contact-form")[0].reset();
        submitMSG(true, "Congratulations! Message Submitted!");
    }

    function formError(){
        $("#contact-form").removeClass().addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "form-result";
        } else {
            var msgClasses = "form-result";
        }
        $("#validator-contact").removeClass().addClass(msgClasses).text(msg);
    }
});