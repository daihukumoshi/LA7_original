$(function($){
    $('.slider').slick({
        autoplay: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('#js-hamburger-menu').on('click',function(){
        $('.hamburger-menu').toggleClass('hamburger-menu--open');
        $('.ul').toggleClass('slide-menu');
    });
});