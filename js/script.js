window.addEventListener('DOMContentLoaded', function(){
  // Javascriptで書いてみる
  // opacityでフェード
  document.getElementById('portfolio-section').style.opacity = '1';

  // jqueryで書いてみる
  // スムーズズクロール
  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href = $(this).attr("href");
    var tar = $(href == "#" || href == "" ? 'html' : href);
    var pos = tar.offset().top;

    $('html, body').animate({scrollTop: pos}, speed, 'swing');
    return false;
});
});
