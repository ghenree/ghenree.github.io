function modalTimerOpen () {
	document.getElementById('modal__timer').style.display="block";}
	setTimeout('modalTimerOpen();', 2000);
function modalTimerClose () {
	document.getElementById('modal__timer').style.display="none";}

let links = document.querySelectorAll('a[href^="#"]'),
	velocity = .4;
	header = document.querySelector('header'),
	topOffset = 60;
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
				return;	}}});}
const animItems = document.querySelectorAll('._animate');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(param) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_aactive');
			} else {
				if (!animItem.classList.contains('_anim-one')) {
					animItem.classList.remove('_aactive');}}}}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft }}
	setTimeout(() => {animOnScroll();}, 300);}
jQuery(document).ready(function() {
'use strict';
$(document).ready(function() {
	$('.burger').on('click', function(event) {
		$('.burger, .header__menu').toggleClass('mopen');
		$('body').toggleClass('lock');});
	$('.header__item').on('click', function(event) {
		$('.burger, .header__menu').removeClass('mopen');
		$('body').removeClass('lock');});
	$(window).resize(function() {
		if ($(window).width() > 768) {
			if ($('.burger, .header__menu').hasClass('mopen')) {
				$('.burger, .header__menu').removeClass('mopen'); } 
			if ($('body').hasClass('lock')) {
				$('body').removeClass('lock'); } }});
	$(window).scroll(function () {
		if ($(".header__fix").offset().top > 50) { 
			$(".header__fix").removeClass("expand");
		} else {$(".header__fix").addClass("expand");}});
	$(".top-scroll").fadeOut(20);
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) { 
			$(".top-scroll").fadeIn(2000);
		} else {
			$(".top-scroll").fadeOut(2000);
		}});
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
		}});});
function progressBar() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = scroll / height * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';}
window.addEventListener('scroll', progressBar);});});