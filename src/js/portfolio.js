window.addEventListener('DOMContentLoaded', () => {

    // スムーズスクロール
    $('a[href^="#"]').click(function(){
    var speed = 400;
    var href = $(this).attr("href");
    var tar = $(href == "#" || href == "" ? 'html' : href);
    var pos = tar.offset().top;

    $('html, body').animate({scrollTop: pos}, speed, 'swing');
    return false;
    });

    $(window).on('scroll load', function(){

        var width = $(window).width();
        //ウィンドウサイズ900px以下の場合に消える
        if(width < 900) {
            var currentPosition = $(window).scrollTop();
        
            if(currentPosition > 350) {
                $('.head__top').css('opacity', '0');
            }
            else {
                $('.head__top').css('opacity', '1');       
            };
        }
    });

    $(window).resize(function(){
        var height = $(window).height();
        if( height < 500) {
            // $('.cont').css('padding', '0 10% 0 0');
            $('.head__top').css('padding', '0 0 0 30%');
            $('.head__gnav').css('margin-bottom', '50px');
        }
        if(height < 340) {
            $('.head__top-title').css('font-size', '16px');
            $('.head__line').css('height', '30');
            $('.head__gnav').css('margin-bottom', '20px');
            $('.head__gnav__item').css('margin', '5px 0');
        }
    });
  });