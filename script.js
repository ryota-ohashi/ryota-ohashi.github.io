var $f = jQuery.noConflict();

$f(function(){
    $f(document).ready(function(){
		$f('.frame').addClass('addFrame');
		$f('.name').fadeIn(2000);
		
    });

    $f('a[href^=#]').click(function() {
		var speed = 400;
		var href= $f(this).attr("href");
		var target = $f(href == "#" || href == "" ? 'html' : href);
		var headerHeight = 60; //固定ヘッダーの高さ
		var position = target.offset().top - headerHeight; //ターゲットの座標からヘッダの高さ分引く
		$f('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	
});
