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
      header.setAttribute("style", "background: transparent; color: #000;");
      headerGnb.setAttribute("style", "color: #fff;");
      webLogo.setAttribute("style", "color: #fff;");
   }
});

(function () {
	$('.mobile-menu-wrapper').on('click', function() {
		$('.mobile-menu').toggleClass('animate');
		$('.mobile-menu-overlay').toggleClass('visible');
	})
	$('.mobile-menu-overlay > ul > li > a').on('click', function () {
		$('.mobile-menu').removeClass('animate');
		$('.mobile-menu-overlay').removeClass('visible');
	})
})();