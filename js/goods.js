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