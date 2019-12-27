window.addEventListener('DOMContentLoaded', () => {

    // スムーズスクロール
    $('a[href^="#"]').click(function(){
    var speed = 400;
    var href = $(this).attr("href");
    var tar = $(href == "#" || href == "" ? 'html' : href);
    var pos = tar.offset().top - 100;

    $('html, body').animate({scrollTop: pos}, speed, 'swing');
    return false;
    });

    //spmenu用
    $('.header__spmenu').click(function(){
        $('body').toggleClass('open');
    });

    //aタグをクリックしたときにspmenuを閉じる
    $('.header__gnav__ul__item a').click(function(){
        if ( $('body').hasClass('open') ) {
            $('body').removeClass('open');
        }
    })

    //スクロール関連
    $(window).on('scroll load', function(){

        let currentPosition = $(window).scrollTop();
    
        //ヘッダー用
        if(currentPosition > 50) {

            if ( !$('body').hasClass('open') ) {
                $('.header').css('border', '1px solid #333');
                $('.header__intro__subtitle').css('display', 'none');
                $('.header__spmenu').css('top', '9px');
            };

            $('.header').css('top', '-1px');
            $('.header__bg').css('height', '100%');
        }
        else {

            if ( $(window).width() > 768 ) {
                $('.header').css('top', '50px');
            }
            if ( !$('body').hasClass('open') ) {
                $('.header').css('border', '1px solid grey');
                $('.header__intro__subtitle').css('display', 'block');
                $('.header__spmenu').css('top', '22px');
            };
            $('.header__bg').css('height', '0%');
        };

        //背景色用
        let aboutSection = $('#about').offset().top;
        let skillsSection = $('#skills').offset().top;
        let portfolioSection = $('#portfolio').offset().top;
        let contactSection = $('#contact').offset().top;

        let screenHeight = $(window).height();
        let adjustmentValue = screenHeight / 2;

        if( skillsSection - adjustmentValue >= currentPosition && currentPosition >= aboutSection - adjustmentValue ) {
            $('.bg').css('background-color', '#ccc');
        } else if( portfolioSection - adjustmentValue >= currentPosition && currentPosition >= skillsSection - adjustmentValue) {
            $('.bg').css('background-color', 'black');
        } else if( contactSection - adjustmentValue >= currentPosition && currentPosition >= portfolioSection - adjustmentValue) {
            $('.bg').css('background-color', '#ccc');
        } else {
            $('.bg').css('background-color', 'black');
        };
    });
});