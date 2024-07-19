AOS.init();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "fotos/icon menu branco.png";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "fotos/icon menu branco.png";
  }
}