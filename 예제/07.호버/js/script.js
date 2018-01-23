$(function () {
   
    /* 호버 효과 */
    $(".ex_18 .hover_effact li").stop().on("mouseenter", function () {
        $(".ex_18 .hover_effact li .bg").css({
            opacity: 0
        });
        $(this).addClass("on").siblings().removeClass("on");
        $(this).find(".bg").dequeue().stop().animate({
            opacity: 0.5,
        });
        $(this).find(".txt").dequeue().stop().animate({
            height: 30
        }, 100);
    });
    $(".ex_18 .hover_effact li").stop().on("mouseleave", function () {
        $(".ex_18 .hover_effact li .bg").css({
            opacity: 0
        })
        $(".ex_18 .hover_effact li .txt").css({
            height: 0
        });
    });

    /* // 호버 효과 */
});


























