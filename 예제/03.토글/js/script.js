$(function () {
    /*토글*/
    $(".ex_04 a").on("click", function () {
        var act = $(".toggle").hasClass("on");
        if (act == false) {
            $(".toggle").addClass("on");
            $(".toggle").animate({
                "right": 0
            });
        } else {
            $(".toggle").removeClass("on");
            $(".toggle").animate({
                "right": -200
            });
        }
    });
});























