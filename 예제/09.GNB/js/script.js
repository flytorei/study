$(function () {
  
 
    /*GNB01*/
    $('.gnb01 .dep1 > li').on('mouseenter',function(e){
        e.preventDefault();
        $('.gnb01 .dep1 > li').removeClass('on')
        $(this).addClass('on');  
    });
    $('.gnb01 .dep1 > li').on('mouseleave',function(e){
        e.preventDefault();
        $('.gnb01 .dep1 > li').removeClass('on')
    })
    
    /*GNB02*/
    
    $('.gnb02 .dep1 > li').on('mouseenter',function(e){
        e.preventDefault();
        $('.gnb02 .dep2').stop().slideUp()
        $(this).find('.dep2').stop().slideDown()
    });
    
    $('.gnb02 .dep1 > li').on('mouseleave',function(e){
        e.preventDefault();
         $('.gnb02 .dep2').stop().slideUp()
    });
    
  
});


























