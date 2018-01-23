$(function () {
   
    /* 슬라이드 배너*/
    var currentIndex = 0;
    var isAni = false;
  //  setInterval(autoSlide, 2000)
    $(".ex_08 .next").on("click", function () {
        autoSlide();

    });

    function moveSlide(nextIndex) {
        isAni = true;

        $(".ex_08 .slide li").eq(currentIndex).stop().animate({
            left: -100
        }, function () {
            isAni = false;
        })
        $(".ex_08 .slide li").eq(nextIndex).css({
            "left": 100
        })
        $(".ex_08 .slide li").eq(nextIndex).stop().animate({
            left: 0
        }, function () {
            isAni = false;
        });
        isAni = true;
        currentIndex = nextIndex;
        // console.log("currentElemet="+currentElemet,"nextElement="+nextElement);        
    }

    function autoSlide(){
        if(isAni == true) {
            return false;
        }
        if(currentIndex + 1 >= 4) {
            moveSlide(0)
        } else{
            moveSlide(currentIndex + 1);
        }
    }
    /* // 슬라이드 배너*/
});















