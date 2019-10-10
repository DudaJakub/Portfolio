$(function () {

    if ($(window).width() < 1024) {
        $('.sidebar').hide();
    }

    $(window).resize(function () {
        if ($(window).width() < 1024) {
            $('.sidebar').hide();
            if ($('.hamburger').hasClass('open')) {
                $('.hamburger').toggleClass('open');
            }
        } else {
            $('.sidebar').show();
        }
    });

    $('.hamburger').click(function () {
        $('.sidebar').toggle(400, 'swing');
        $(this).toggleClass('open')
    });

    $('.projects__links').click(function () {
        $(this).toggleClass('active')
    });

    $('.projects__links').mouseleave(function () {
        $(this).removeClass('active')
    });

    $('.sidebar__element').on('click', function (e) {
        e.preventDefault();
        const goTo = $(this).find('a').attr('href');
        const position = $(goTo).offset();
        const currentPosition = $('.mainbar').scrollTop();
        $('.mainbar').stop().animate({scrollTop: position.top + currentPosition}, 500);

        if ($('.hamburger').hasClass('open')) {
            $('.sidebar').toggle(400, 'swing');
            $('.hamburger').toggleClass('open');
        }
    })

    $('.projects__image').each(function () {
        console.log($(this).data('url'));
        $(this).css('backgroundImage', `url(${$(this).data('url')}`);
    })

});