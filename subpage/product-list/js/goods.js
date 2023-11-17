const header = document.querySelector(".web-header");
const headerHeight = header.getBoundingClientRect().height;
const headerGnb = document.querySelector(".web-gnb");
const webLogo = document.querySelector(".web-logo");
 
window.addEventListener("scroll", () => {
      if (window.scrollY > headerHeight) {
      header.setAttribute("style", "background: white; border-bottom: 1px solid #ddd; transition: .2s all;");
      headerGnb.setAttribute("style", "color: #000;");
      webLogo.setAttribute("style", "color: #000;");
   } else {
      header.setAttribute("style", "background: #000; color: #000;");
      headerGnb.setAttribute("style", "color: #fff;");
      webLogo.setAttribute("style", "color: #fff;");
   }
});

$('.goods-prd-items').slick({
   dots: true,
   infinite: true,
   prevArrow: false,
   nextArrow: false,
});

//뒤로가기
function goBack() {
   window.history.back();
}

//Tab
$(function () {
   $('.tabcontent > div').hide();
   $('.tabnav a').click(function () {
       $('.tabcontent > div').hide().filter(this.hash).fadeIn();
       $('.tabnav a').removeClass('active');
       $(this).addClass('active');
       return false;
   }).filter(':eq(0)').click();
});