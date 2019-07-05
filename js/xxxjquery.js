$(function(){

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

    $('#sp-gnav').click(function(){
        $('.header-inner').toggleClass('open');
    });

});