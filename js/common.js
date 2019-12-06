$(document).ready(function () {
    $('.header__language').click(function () {
        $(this).children('ul').slideToggle();
    });

    // reviews sldier
    if ($('*').is('.reviews-slider')) {
        $('.reviews-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    // Инициализация
    // Доступ к экземпляру объекта
    $('.from-date,.to-date').data('datepicker')

    // burger
    $("div.burger").click(function () {
        $(this).toggleClass("selected");

        $('.header__menu').toggleClass('showmenu');
    });





    // read more
    $('.readall span').click(function () {
        $('.subscribe__textblock p:nth-child(n+3)').fadeIn();
    })



















    if ($('*').is('select')) {
        $(function () {
            $('.choose-route select').styler();
        });
    }

});