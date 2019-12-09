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

    // accordeon FAQ page

    $('.faqaccordeon__btn').click(function () {
        $(this).toggleClass('showaft');
        $(this).parent().next().slideToggle();
    });



    // read more
    $('.readall span').click(function () {
        $('.subscribe__textblock p:nth-child(n+3)').fadeIn();
    })


    // direction
    let routeHeightAll = $('.direction__rows.col').height();
    let routeHeightLast = $('.direction__rows.col .direction__row:last-child').height()
    $('.direction__pic').css('height', (routeHeightAll - routeHeightLast) + 20);

    // video

    $('#play-video').on('click', function (ev) {
        //start youtube video
        $("#video")[0].src += "&autoplay=1";
        ev.preventDefault();
        //hide overlayed html5 video
        $("#video_overlayed").css({ "display": "none", "opacity": "0" });
        //hide svg play button while playing video
        $("#play-video").css({ "display": "none", "opacity": "0" });
    });












    if ($('*').is('select')) {
        $(function () {
            $('.choose-route select').styler();
        });
    }

});


