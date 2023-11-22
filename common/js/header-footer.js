
$(function () {
    //nav
    $(window).scroll(function () {
        let winTop = $(window).scrollTop();

        if (winTop > 1) {
            $('.web-header').css({ 'background-color': '#fff', 'border-bottom': '1px solid #ddd', 'transition': '.2s all' });
            $('.web-gnb, .web-logo').css({ 'color': '#000' });
        } else {
            $('.web-header').css({ 'background-color': 'rgba(0,0,0,0)', 'border-bottom': 'none', 'color': '#fff', 'transition': '.2s all' });
            $('.web-gnb, .web-logo').css({ 'color': '#fff' });
        }
    });

    //mobile nav
    $('.mobile-menu-wrapper').on('click', function () {
        $('.mobile-menu').toggleClass('animate');
        $('.mobile-menu-overlay').toggleClass('visible');
    })
    $('.mobile-menu-overlay > ul > li > a').on('click', function () {
        $('.mobile-menu').removeClass('animate');
        $('.mobile-menu-overlay').removeClass('visible');
    })


    // header,footer load
    $('.header__nav').load('/common/header-footer/header-nav.html');
    $('.footer').load('/common/header-footer/footer.html');

});

