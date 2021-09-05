// ==============  js натив   =============

// =====   modalTimer
// Появление окна в модал с задержкой
// Появляется всего лишь - 1 раз, при загрузке страницы

function modalTimerOpen () {
	document.getElementById('modal__timer').style.display="block";}

	setTimeout('modalTimerOpen();', 2000);

function modalTimerClose () {
	document.getElementById('modal__timer').style.display="none";}

// =====   E N D   modalTimer   =====





// ===== START = LP scroll-to-section

let links = document.querySelectorAll('a[href^="#"]'),
	velocity = .4; // the speed .8
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
			$(".top-scroll").fadeIn(2000);
		} else {
			$(".top-scroll").fadeOut(2000);
		}
	});

// Highlighting the active menu item
// 180 -> switching distance
// more details: https://atuin.ru/blog/navigacionnoe-menyu-dlya-lendinga/
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

// Auto_Scroll -> native javascript code works
// it doesn't close burger

// nav.find('a').on('click', function () {
// 	let $el = $(this), 
// 	id = $el.attr('href'); 
// 	$('html, body').animate({
// 		scrollTop: $(id).offset().top - nav_height
// 	}, 600);
// 	return false;
// });

// END  Highlighting the active menu


// ProgressBar on scroll
function progressBar() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = scroll / height * 100;

    document.getElementById('progressBar').style.width = scrolled + '%';
}

window.addEventListener('scroll', progressBar);
// END ProgressBar


// =====
});		// =====   End function $ jquery
});		/*! jQuery  END */
//  =============  E N D   jQuery  ==========
//  =========================================
