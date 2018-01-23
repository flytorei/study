$(function () {
 
    /*맨 위로 이동*/
    var topBtn = function () {
        var st = $(this).scrollTop();

        if (st >= 100) {
            $(".top_btn").show();
        } else {
            $(".top_btn").hide();
        }
        $(".top_btn a").on("click", function () {
            // $( "body" ).scrollTop(0);
            $("html,body").stop().animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    }
    /* //맨 위로 이동*/
    $(window).scroll(function (){      
        topBtn();
    });
});















