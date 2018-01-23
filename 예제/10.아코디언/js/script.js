$(function () {

    /*아코디언*/
    $(".qna dt a").on("click", function () {
        var act = $(this).hasClass("on");
        if (act == false) {
            $(this).addClass("on");
            $(this).parent().next().addClass("on");
        } else {
            $(this).removeClass("on");
            $(this).parent().next().removeClass("on");
        }
    });
    /* //아코디언*/

});


























