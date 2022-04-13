$(document).ready(function() {

    // Preload
    $('<img/>').hide().attr('src', 'https://4.bp.blogspot.com/-3YtwFdb01YI/TnCNSc1c93I/AAAAAAAAA5c/V6g_3ghlw30/s1600/Background+13.jpg').load(function() {
        $('body').append($(this));
    });

    $('#women').hover(function() {
        $('.slider--default').css('background-image', 'url("assets/images/3.jpg")');
    }, function() {
        $('.slider--default').css('background-image', 'url(assets/images/1.jpg)');
    });
    $('#men').hover(function() {
        $('.slider--default').css('background-image', 'url("assets/images/2.jpg.jpg")');
    }, function() {
        $('.slider--default').css('background-image', 'url(assets/images/1.jpg)');
    });
    // 

    $('.header__menu-list').click(function() {
        $('.modal-menu').addClass("is-active-menu");
    });
    $('.menu__close').click(function() {
        $('.modal-menu').removeClass("is-active-menu");
    });

    $(".header__menu-list").click(function() {
        $('.modal-menu').animate({ display: 'block' }, 1000);
    });

});