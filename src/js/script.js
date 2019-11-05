window.addEventListener('DOMContentLoaded', function(){
  // opacityでフェードイン
  document.getElementById('portfolio').style.opacity = '1';

  // スムーズスクロール
  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href = $(this).attr("href");
    var tar = $(href == "#" || href == "" ? 'html' : href);
    var pos = tar.offset().top;

    $('html, body').animate({scrollTop: pos}, speed, 'swing');
    return false;
  });
});
