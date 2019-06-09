// ボタンをクリックしたらボタンが消える
const button = document.querySelector('.button');

button.addEventListener('click', change);
function change() {
    button.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
      navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},
      loop: true,
      speed: 1000,
      autoplay: 3000,
      spaceBetween: 10,
      effect: 'coverflow'
    });
  }, false);