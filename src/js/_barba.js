barba.use(barbaCss);

// function replaceHeadMeta(target) {
    // const $newPageMeta = $('<head />').html(
    //   $.parseHTML(
    //     target.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0],
    //     document,
    //     true
    //     )
    // );
    // const $newPageMeta = target.html.find("meta");
    // const headTags = "meta[name='description']";

    // タグを削除
    // $('head').find("meta").remove();
    // タグを追加
    // $('head').appendTo($newPageMeta);
// }

barba.init();