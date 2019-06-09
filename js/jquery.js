$(function(){

    // t.jsの速度調整
    $('#target').t({
        speed:50,
        // speed_vary:true,
    });

    // ボタンがクリックされてから少しおいて遷移
    $("#button").click(function() {
        setTimeout(function(){
            window.location.href = 'inside.html';
          }, 4000);
      });
});