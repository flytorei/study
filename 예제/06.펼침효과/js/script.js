$(function () {
   

    /* 펼침 효과*/
    $('.all_view .btn').on('click', function(){
        var listH = $('.all_view li').height();
        var listLeg = $('.all_view li').length;
        var act = $('.all_view ul').hasClass('on');
        var all_listH = listH * listLeg + 23;
        if (act == false) {
            $('.all_view ul').addClass('on');
            $('.all_view ul').animate({
                height: all_listH
            });
            $('.all_view .btn').text('닫기');
        } else {
            $('.all_view ul').removeClass('on');
            $('.all_view ul').animate({
                height: 160
            });
            $('.all_view .btn').text('전체보기');
        }
    });
    /* // 펼침 효과*/
    
  
});


























