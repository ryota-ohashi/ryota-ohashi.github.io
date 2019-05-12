$(function(){
    $(document).ready(function(){
		$('.logo').fadeIn(2000);
    });
	
    $(".btn-down").click(function () {
		var p = $(".contents-text").eq(0).offset().top - 20;
		$('html,body').animate({ scrollTop: p }, 400);
		return false;
    });
});
