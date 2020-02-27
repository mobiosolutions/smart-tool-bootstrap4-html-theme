/*
script list
	01. Mobile Menu
	*/

/* function list
	A. Svg Rendering In Browser
	B. Footer Accordion
	C. Testimonial Slider
	D. Banner Slider
	E. Fix Header
	*/

	$(document).ready(function(){

		svgConvert();
		testimonial_slider();
		bannerSlider();
		FixHeaderTop();

		$(".menuSmall, .toggle_mobile").click(function(){
			$(".fix_menu").addClass("openMenu");
			$("body").addClass("fixbody");
		});
		$(".closeMenu").click(function(){
			$(".fix_menu").removeClass("openMenu");
			$("body").removeClass("fixbody");
		});

	});


	/*-------| A. Svg Rendering In Browser |---------*/
	function svgConvert() {
		jQuery('.svgImg').each(function($) {
			/*  alert('test'); */
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('.svgImg');
			var imgURL = $img.attr('src');
			jQuery.get(imgURL, function(data) {
				/* Get the SVG tag, ignore the rest */
				var $svg = jQuery(data).find('svg');
				/* Add replaced image's ID to the new SVG */
				if (typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				/* Add replaced image's classes to the new SVG */
				if (typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass + ' replaced-svg');
				}
				/* Remove any invalid XML tags as per http://validator.w3.org */
				$svg = $svg.removeAttr('xmlns:a');
				/* Replace image with new SVG*/
				$img.replaceWith($svg);
			}, 'xml');
		});
	}

	/*---------| B. Footer Accordian |---------*/
	function footerAcco(){
		$('.footer .footerAcco').click(function() {
			if ($(this).hasClass('active')) {
				$(this).next().slideUp();
				$(this).removeClass('active');
			} else {
				$('.footer .footerAcco').removeClass('active');
				$(this).addClass('active');
				$('.footerAccoContent').slideUp();
				$(this).next().slideDown();
				setTimeout(function() {
					$("html,body").animate({
						scrollTop: $('.footer .footerAcco').offset().top - 115
					}, "slow");
				}, 1000);
			}
		});
	}   

	/*---------| C. Testimonial Slider |---------*/
	function testimonial_slider(){
		if($.fn.slick) {
			$('.testimonial_slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				autoplay: true,
				speed: 1000,
				autoplaySpeed: 2000
			});
		}
	}

	/*---------| D. Banner Slider |---------*/
	function bannerSlider(){
		if($.fn.slick) {
			$('.bannerSlider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				arrows: false,
				dots: true,
				autoplay: true,
				appendDots: $('.bannerDots'),
				speed: 1000,
				autoplaySpeed: 4500,
				pauseOnHover: true,
				customPaging : function(slider, i) {
					var thumb = jQuery(slider.$slides[i]).data();
					return '<a>'+('0'+(i+1)).slice(-2)+'</a>';
				}
			});

		}
	}

	/*---------| E. Fix Header |---------*/
	function FixHeaderTop(){
		$(window).scroll(function(){
			var sticky = $('.header'),
			scroll = $(window).scrollTop();

			if (scroll >= 200) sticky.addClass('fixed');
			else sticky.removeClass('fixed');
		});
	}