$(function () {

	// ローディングバー
	Pace.on('done', function () {
		$('.wrap').fadeIn();
	});

	// t.jsの速度調整
	$('#target').t({
		speed: 50,
		// speed_vary:true,
	});

	// ボタンがクリックされてから少しおいてフェードアウト
	$('#button').click(function () {

		$('#button').fadeOut();

		setTimeout(function () {
			$('#canvas, #target').fadeOut(function () {
				window.location.href = 'inside.html';
			});
		}, 2000);
	});
});