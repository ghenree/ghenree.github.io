/*! mmenu-light */
document.addEventListener("DOMContentLoaded",()=>{const e=new MmenuLight(document.querySelector("#mainMenu"),"(max-width: 778px)");e.navigation({title:"Ресницы Ру"});var r=e.offcanvas({});document.querySelector("a[href='#mainMenu']").addEventListener("click",e=>{e.preventDefault(),r.open(),document.getElementById("mm-burg").classList.add("mm-wrapper_opened")}),document.querySelector(".mm-ocd__backdrop").addEventListener("click",e=>{e.preventDefault(),document.getElementById("mm-burg").classList.remove("mm-wrapper_opened")})});
/*! slider-main */
var swiperImg=new Swiper(".slider-main__img",{loop:!1,speed:1400,parallax:!0,controller:{inverse:!0}}),swiperText=new Swiper(".slider-main__text",{loop:!1,speed:1400,parallax:!0,controller:{inverse:!1},mousewheel:{invert:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});swiperImg.controller.control=swiperText,swiperText.controller.control=swiperImg,
/*! Slider-cat */
new Swiper(".slider-cat",{slidesPerView:4,speed:1200,simulateTouch:!0,grabCursor:!0,spaceBetween:12,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{250:{slidesPerView:1},530:{slidesPerView:2},746:{slidesPerView:3},1124:{slidesPerView:4}}}),
/*! Slider-testimonial */
new Swiper(".slider-test",{speed:1200,simulateTouch:!0,grabCursor:!0,spaceBetween:24,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{250:{slidesPerView:1},530:{slidesPerView:2},960:{slidesPerView:2.2},1124:{slidesPerView:3.5}}}),
/*! Slider-event */
new Swiper(".slider-event",{speed:1200,simulateTouch:!0,grabCursor:!0,spaceBetween:24,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{280:{slidesPerView:1},870:{slidesPerView:1.5},1154:{slidesPerView:2.4}}}),
/*! Slider-partners */
new Swiper(".slider-partners",{slidesPerGroup:1,speed:1200,simulateTouch:!0,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{280:{slidesPerView:2,spaceBetween:16},480:{slidesPerView:3,spaceBetween:24},650:{slidesPerView:4},900:{slidesPerView:5},1120:{slidesPerView:6}}}),jQuery(document).ready((function(){"use strict";
/*! jQuery  START */$(document).ready((function(){$(".burger").on("click",(function(e){$(".burger, .header__menu").toggleClass("mopen"),$("body").toggleClass("lock")})),$(".header__item").on("click",(function(e){$(".burger, .header__menu").removeClass("mopen"),$("body").removeClass("lock")})),$(window).resize((function(){$(window).width()>768&&($(".burger, .header__menu").hasClass("mopen")&&$(".burger, .header__menu").removeClass("mopen"),$("body").hasClass("lock")&&$("body").removeClass("lock"))})),$(window).scroll((function(){$(".header__fix").offset().top>50?($(".header__fix").removeClass("expand"),$("#mm-burg").removeClass("expand")):($(".header__fix").addClass("expand"),$("#mm-burg").addClass("expand"))})),$(".top-scroll").fadeOut(20),$(window).scroll((function(){$(this).scrollTop()>500?$(".top-scroll").fadeIn(2500):$(".top-scroll").fadeOut(2500)}))}))}));/*! jQuery  END */