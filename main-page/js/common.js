$(function(){
    // header,footer load
    $('.header__nav').load('/Choi-Wagyu/main-page/header-nav.html');
    $('.footer').load('/Choi-Wagyu/main-page/footer.html');

    //section-about tab action
    $('.tab-item').on('click', function(){

        let tabItemIndex = $('.tab-item').index(this);

        $(this).addClass('on').siblings().removeClass('on');
        $('.img-box').eq(tabItemIndex).addClass('on').siblings().removeClass('on');
        
    });
    

});