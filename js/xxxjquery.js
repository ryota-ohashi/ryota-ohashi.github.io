$(function(){
//     スクロール量によりフェード
    $(window).scroll(function (){
        $('.information').each(function(){
            var isPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
            if (scroll > isPos - windowHeight +150){
                $(this).addClass('is');
                }else {
                    $(this).removeClass('is');
            }
        });
    });
//     ナビバー用
    $('#sp-gnav').click(function(){
        $('.header-inner').toggleClass('open');
    });

});
