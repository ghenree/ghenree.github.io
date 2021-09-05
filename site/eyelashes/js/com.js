// ========================================
// ==============  js натив   =============
// ========================================



/*! mmenu-light */
document.addEventListener(
	"DOMContentLoaded", () => {
		const menu = new MmenuLight(
			document.querySelector( "#mainMenu" ), // Здесь можно изменить селектор, например: ( '#menu' )
				// 'all'
					// ИЛИ "ALL" или установить ширину
				"(max-width: 778px)"
				);

		var navigator = menu.navigation({
				// selectedClass: 'Selected',
						
				// slidingSubmenus: true,
							// true - slider; false - drop-down, по умолчанию - true
				// theme: 'dark',
							// по умолчанию - "light"
				title: 'Ресницы Ру'
							// по умолчанию - "Menu"
			});

		var drawer = menu.offcanvas({
				// position: 'right'
						// Меню выходит ==> right or left, по умолчанию - left
			});

		 // navigator.openPanel(
			// 	document.querySelector( "#my-ul" )
			// );

		//	Open the menu, open burger
		document.querySelector( "a[href='#mainMenu']" ) // селекторы должны совпадать (см. в начале)
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

				// Отключение Меню = всегда видно
		// "iconPanels": true
	}
);

// ==============  E N D / script mmenu-light


/*! slider-main */

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
		// Устанавливаем связь между слайдерами
	swiperImg.controller.control = swiperText;
	swiperText.controller.control = swiperImg;


// =========   END__slider-main   =========


/*! Slider-cat */
new Swiper('.slider-cat', {

	slidesPerView: 4,		// Кол слайдов для показа
	speed: 1200,			// Скор перекл слайдов

	simulateTouch: true,	// перетаск мышью
	grabCursor: true,		// вид курсора - рука
	spaceBetween: 12,		// Отступ gap в px

	// Стрелки
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

// =========   E N D  /  Slider-cat   =========


/*! Slider-testimonial */
new Swiper('.slider-test', {

	// loop: true,				// infinit слайдер
	// slidesPerView: 3,		// Кол слайдов для показа
	// slidesPerGroup: 1,		// Пролистывание

	// autoplay: {
	// 	delay: 5000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: false, },
	speed: 1200,			// Скор перекл слайдов

	simulateTouch: true,	// перетаск мышью
	grabCursor: true,		// вид курсора - рука
	spaceBetween: 24,		// Отступ gap в px

	// Стрелки
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

// =========   END  Slider-testimonial   =========


/*! Slider-event */
new Swiper('.slider-event', {

	// loop: true,				// infinit слайдер
	// slidesPerView: 3,		// Кол слайдов для показа
	// slidesPerGroup: 1,		// Пролистывание

	// autoplay: {
	// 	delay: 5000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: false, },
	speed: 1200,			// Скор перекл слайдов

	simulateTouch: true,	// перетаск мышью
	grabCursor: true,		// вид курсора - рука
	spaceBetween: 24,		// Отступ gap в px

	// Стрелки
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

// =========   END  Slider-testimonial   =========

/*! Slider-partners */
new Swiper('.slider-partners', {

	// loop: true,				// infinit слайдер
	// slidesPerView: 3,		// Кол слайдов для показа
	// slidesPerGroup: 1,		// Пролистывание

	// autoplay: {
	// 	delay: 5000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: false, },
	speed: 1200,			// Скор перекл слайдов

	simulateTouch: true,	// перетаск мышью
	grabCursor: true,		// вид курсора - рука
	spaceBetween: 24,		// Отступ gap в px

	// Стрелки
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

// =========   END  Slider-partners   =========


// ==============  E N D   js натив   ===========
// ========================================

//  =============  S T A R T   jQuery  ==========
//  =============================================
jQuery(document).ready(function() {
'use strict';
/*! jQuery  START */

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

	// For resize window on desktop devices
	// Breakpoint === $mq3
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
		// if ($("header").offset().top > 30) { 
		// 	$("header").addClass("collapse");
		// } else {
		// 	$("header").removeClass("collapse");
		// }
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

// =====
});		// =====   End function $ jquery
});		/*! jQuery  END */
//  =============  E N D   jQuery  ==========
//  =========================================
