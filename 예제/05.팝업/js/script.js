$(function () {
  

    /*팝업*/
    $(".ex_03 a").on("click",function(ele){
        
        var ev = ev || window.event;
        reFocusEle = ev.target || ev.srcElement;
        var $target = $(ele);
        var $href = $(this).attr('href');
      //  $(".layer_pop").focus();
        $(".layer_pop").attr('tabindex',0).show().focus();
       
        
        $(".dim").show();
        var bodyH = $(window).height();
        var bodyW = $(window).width();
        var layerH = $(".layer_pop").height();
        var layerW = $(".layer_pop").width();
        var centerH = (bodyH / 2) - (layerH / 2 + 100);
        var centerW = -layerW / 2
        $(".layer_pop").css({
            "top": centerH,
            "margin-left": centerW
        });
        $("body").css({
            "overflow": 'hidden'
        });
        
         $(".layer_pop .cls").on("click", function () {
            var $layer = $(".layer_pop")
            var $this  = $(this);
            $layer.hide();                                          
            $(".dim").hide();
            $("body").css({
                "overflow": 'inherit'
            });
          //  $(".ex_03 a").focus();      
         }) 
    });
    /* //팝업*/
});


















