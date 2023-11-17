$(function(){

    // header,footer load
    $('.header__nav').load('/main-page/header-nav.html');
    $('.footer').load('/main-page/footer.html');


    //section-about tab action
    $('.tab-item').on('click', function(){

        let tabItemIndex = $('.tab-item').index(this);

        $(this).addClass('on').siblings().removeClass('on');
        $('.img-box').eq(tabItemIndex).addClass('on').siblings().removeClass('on');
        
    });
    

    //section scroll animation
    $(window).scroll(function(){
        let winTop = $(window).scrollTop();

        for (let i = 0; i < $('section').length; i++) {
            let sectionTop = $('section').eq(i).offset().top-400;
            if (winTop >= sectionTop) {
                $('section').eq(i).css({'padding' : '0rem'});
                $('section').eq(i).children('.container').css({'opacity': 1, 'padding' : '10rem 0rem'});
            } else {
                $('section').eq(i).css({'padding' : '3rem 0rem'});
                $('section').eq(i).children('.container').css({'opacity': 0, 'padding' : '7rem 0rem'});
            }
        }
    });
});