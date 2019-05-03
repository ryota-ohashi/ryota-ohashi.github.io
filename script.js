$(function(){
    $(document).ready(function(){
		$('.name').fadeIn(2000);
		$('.menu').fadeIn(2000);
		
    });

    $('a[href^=#]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var headerHeight = 20; //調整用
		var position = target.offset().top - headerHeight; 
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	
});
