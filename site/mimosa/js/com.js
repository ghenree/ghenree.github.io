// ==============  js натив   =============

function progressBar() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = scroll / height * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
}
window.addEventListener('scroll', progressBar);


/* Slider-gallery */
var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 4,
	speed: 2400,
	watchSlidesVisibility: true,
});

var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	speed: 2400,
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs,
	},});

//  ==============   jQuery   ===================

jQuery(document).ready(function() {

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
	}});

$(window).scroll(function () {
	if ($(".header__fix").offset().top > 50) { 
		$(".header__fix").removeClass("expand");
	} else {
		$(".header__fix").addClass("expand");
	}});

$(".scrollTop, .logo").click(function() {
	$("body, html").animate({
		scrollTop : 0
	}, 2000);});
	
$(".top-scroll").fadeOut(20);
$(window).scroll(function () {
	if ($(this).scrollTop() > 500) { 
		$(".top-scroll").fadeIn(2000);
	} else {
		$(".top-scroll").fadeOut(2000);
	}});

$('.home__more').click(function(){
	$('.home__block--hide').slideToggle(500, function(){
		if ($(this).is(':hidden')) {
			$('.home__more--desc').html('Показать еще товары');
		} else {
			$('.home__more--desc').html('Скрыть часть товаров');}							
	});	return false;
});
});