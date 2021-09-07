// ==============  js натив   =============
// ========================================


// =====   modalTimer
// Появляется всего лишь - 1 раз, при загрузке страницы

function modalTimerOpen () {
	document.getElementById('modal__timer').style.display="block";}

	setTimeout('modalTimerOpen();', 2000);

function modalTimerClose () {
	document.getElementById('modal__timer').style.display="none";}


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

// ===== START = LP scroll-to-section

let links = document.querySelectorAll('a[href^="#"]'),
	velocity = .5; // the speed
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

//  =============  S T A R T   jQuery  ==========
//  =============================================
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


// Highlighting the active menu item
let sections = $('section'), 
nav = $('nav'), 
nav_height = nav.outerHeight();
$(window).on('scroll', function () {
	$('nav a').removeClass('active');
	let cur_pos = $(this).scrollTop(); 
	sections.each(function() {
		let top = $(this).offset().top - nav_height - 180,
        bottom = top + $(this).outerHeight();   	
		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active');
			sections.removeClass('active');    
			$(this).addClass('active');
			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		}
	});
});

/*! jQuery  END */
});
});		
