var mainnav = document.querySelector('.main-nav');
var menulist = document.querySelector('.menu-list');
var hamburger = document.querySelector('.hamburger');

mainnav.classList.add('main-nav--closed');
menulist.classList.add('menu-list--closed');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger--open');
  mainnav.classList.toggle('main-nav--closed');
  menulist.classList.toggle('menu-list--closed');
});
