// ========================================
// ==============  js натив   =============
// ========================================


// =====   modalTimer
// Появление окна в модал с задержкой
// Появляется всего лишь - 1 раз, при загрузке страницы

function modalTimerOpen () {
	document.getElementById('modal__timer').style.display="block";}

	setTimeout('modalTimerOpen();', 2000);

function modalTimerClose () {
	document.getElementById('modal__timer').style.display="none";}

// =====   E N D   modalTimer   =====



// Select

const filterBox = document.querySelectorAll('.pro-box');
const colorBox = document.querySelectorAll('.product__item');
	document.querySelector('.product__list').addEventListener('click', event => {
		if (event.target.tagName !== 'LI') return false;

		let filterClass = event.target.dataset['pro_filter'];

		filterBox.forEach(elem => {
			elem.classList.remove('hide');
			if (!elem.classList.contains(filterClass)) {
				elem.classList.add('hide');	} });

		colorBox.forEach(elem => {
			elem.classList.remove('filter__active');
			if (filterClass) {
				event.target.classList.add('filter__active'); } });
	});

// =====   E N D   Select   =====


// hystModal

const myModal = new HystModal({

	// linkAttributeName: "data-hystmodal",
	catchFocus: true,
	closeOnEsc: false,
	closeOnButton: true,
	backscroll: false,
	waitTransitions: true,

	beforeOpen: function(modal){
		setTimeout(function(){
			document.body.classList.add("lock");
		}, 50);
	},
	afterClose: function(modal){
		setTimeout(function(){
			document.body.classList.remove("lock");
		}, 50);

			//If Youtube video inside Modal, close it on modal closing
		let videoframe = modal.openedWindow.querySelector('iframe');
		if(videoframe){videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*'); }

	},
});

// =====   E N D   hystModal   =====


/*! Slider-gallery */
var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: -50,
	slidesPerView: 3,
	centeredSlides: true,
		loop: true,
	speed: 1200,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});

var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
		loop: true,
	speed: 1200,
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs,
	},
});
// =========   E N D  /  Slider-gallery


// ===== START = LP scroll-to-section

let links = document.querySelectorAll('a[href^="#"]'),
	velocity = .8; // the speed
	header = document.querySelector('header'),
	topOffset = 60; // top margin - by practical

for (let linkNav of links) {
	linkNav.addEventListener('click', function(e) {
		e.preventDefault();
		let winYOffset = window.pageYOffset,
			hash = this.href.replace(/[^#]*(.*)/, '$1');
		elemTop = document.querySelector(hash).getBoundingClientRect().top-topOffset,
			start = null;
		requestAnimationFrame(step);
		function step(time) {
			if (start === null) start = time;
			let progress = time - start,
				r = (elemTop < 0 ? Math.max(winYOffset - progress / velocity, winYOffset + elemTop) : Math.min(winYOffset + progress / velocity, winYOffset + elemTop));
			window.scrollTo(0, r);
			if (r != winYOffset + elemTop) {
				requestAnimationFrame(step)
			} else {
				return;
			}
		}
	});
}
// ===== END = LP scroll-to-section

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
