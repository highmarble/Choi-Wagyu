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
    

});