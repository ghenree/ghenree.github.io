// ========================================
// ==============  js натив   =============
// ========================================



/*! mmenu-light */
document.addEventListener(
	"DOMContentLoaded", () => {
		const menu = new MmenuLight(
			document.querySelector( "#mainMenu" ),
				"(max-width: 778px)");

		var navigator = menu.navigation({
				title: 'Ресницы Ру'
			});

		var drawer = menu.offcanvas({});

		//	Open the menu, open burger
		document.querySelector( "a[href='#mainMenu']" )
			.addEventListener( "click", ( evnt ) => {
				evnt.preventDefault();
				drawer.open();
				document.getElementById('mm-burg').classList.add('mm-wrapper_opened');
				});

		//	Close the menu, close burger
		document.querySelector(".mm-ocd__backdrop")
			.addEventListener( "click", ( evnt ) => {
				evnt.preventDefault();
				document.getElementById('mm-burg').classList.remove('mm-wrapper_opened');
			});
	}
);

// =========   slider-main   =========

	var swiperImg = new Swiper('.slider-main__img', {
		loop: false,
		speed: 1400,
		parallax: true,
		controller: {
			inverse: true,},
	});

	var swiperText = new Swiper('.slider-main__text', {
		loop: false,
		speed: 1400,
		parallax: true,
		controller: {
			inverse: false,},

		mousewheel: {
			invert: false, },

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
      },

	});
	swiperImg.controller.control = swiperText;
	swiperText.controller.control = swiperImg;

/*! Slider-cat */
new Swiper('.slider-cat', {

	slidesPerView: 4,
	speed: 1200,

	simulateTouch: true,
	grabCursor: true,
	spaceBetween: 12,

	// Arrow
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',},

		// mobileFirst Sistems
	breakpoints: {
		300: {
			slidesPerView: 1,
			},
		620: {
			slidesPerView: 2,
			},
		870: {
			slidesPerView: 3,
			},
		1084: {
			slidesPerView: 4,
			},
		},
})

/*! Slider-testimonial */
new Swiper('.slider-test', {
	speed: 1200,
	simulateTouch: true,
	grabCursor: true,
	spaceBetween: 24,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',},

	breakpoints: {
		300: {
			slidesPerView: 1,
			},
		620: {
			slidesPerView: 2,
			},
		870: {
			slidesPerView: 3,
			},
		1084: {
			slidesPerView: 3.5,
			},
		},
});

/*! Slider-event */
new Swiper('.slider-event', {

	speed: 1200,

	simulateTouch: true,
	grabCursor: true,
	spaceBetween: 24,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',},

	breakpoints: {
		300: {
			slidesPerView: 1,
			},
		620: {
			slidesPerView: 2,
			},
		870: {
			slidesPerView: 3,
			},
		1084: {
			slidesPerView: 2.4,
			},
		},
});

/*! Slider-partners */
new Swiper('.slider-partners', {
	speed: 1200,

	simulateTouch: true,
	grabCursor: true,
	spaceBetween: 24,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',},


	breakpoints: {
		300: {
			slidesPerView: 1,
			},
		620: {
			slidesPerView: 2,
			},
		870: {
			slidesPerView: 4,
			},
		1084: {
			slidesPerView: 6,
			},
		},
});

//  =============  S T A R T   jQuery  ==========
jQuery(document).ready(function() {
'use strict';

$(document).ready(function() {

// ===== Menu Burger
	$('.burger').on('click', function(event) {
		$('.burger, .header__menu').toggleClass('mopen');
		$('body').toggleClass('lock');
	});

	$('.header__item').on('click', function(event) {
		$('.burger, .header__menu').removeClass('mopen');
		$('body').removeClass('lock');
	});

	$(window).resize(function() {
		if ($(window).width() > 768) {
			if ($('.burger, .header__menu').hasClass('mopen')) {
				$('.burger, .header__menu').removeClass('mopen'); } 
			if ($('body').hasClass('lock')) {
				$('body').removeClass('lock'); } 
		}
	});

// ===== Header OnScroll Section collapse
	$(window).scroll(function () {
		if ($(".header__fix").offset().top > 50) { 
			$(".header__fix").removeClass("expand");
		} else {
			$(".header__fix").addClass("expand");
		}
	});
	
// ===== ScrollTop - hide button
	$(".top-scroll").fadeOut(20);
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) { 
			$(".top-scroll").fadeIn(2500);
		} else {
			$(".top-scroll").fadeOut(2500);
		}
	});

});
});		/*! jQuery  END */
