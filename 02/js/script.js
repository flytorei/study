

$(function () {


    /*토글*/
    $(".ex_04 a").on("click", function () {
        var act = $(".toggle").hasClass("on");
        if (act == false) {
            $(".toggle").addClass("on");
            $(".toggle").animate({
                "right": 0
            });
             $(".dim").show();
        } else {
            $(".toggle").removeClass("on");
            $(".toggle").animate({
                "right": -200
            });
            $(".ex_04 a").focus(); 
            $('.dim').hide()
        }

       
        $(".dim").addClass("tdim");
    });

    // 동적인 이밴트 처리시
    $(document).on("click", ".tdim", function () {
            $(".tdim").hide();
            $(".tdim").removeClass("tdim");
            $(".toggle").removeClass("on");
            $(".toggle").animate({
                "right": -200
            });
            $(".ex_04 a").focus();     
        })
        /* //토글*/
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

    /*gnb*/

    var gnb = function (top) {
        //클릭하면 해당 위치로 가기 기능
        var topMenu = $('.gnb');
        var topMenuHeight = topMenu.outerHeight();
        var menuItems = topMenu.find('a');

        menuItems.on("click", function (e) {
            e.preventDefault();
            var href = $(this).attr('href');
            var offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 1;



            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 300, function () {
                $(this).addClass("on")
            });
            console.log(offsetTop)

        })
    }

    /* 상하로 움직이는 gnb*/
    function moveScroll(topNum) {
        var sTop = $(this).scrollTop();
        if (sTop >= 100) {
            $(".gnb").css({
                "position": "fixed",
                "top": 0
            })
        } else {
            $(".gnb").css({
                "position": "absolute",
                "top": 50
            })
        }

        if (sTop < 262) {
            $(".gnb a").removeClass("on")
            $('a[href*="exam_01"]').addClass("on");


        } else if (sTop >= 263 && sTop < 522) {
            $(".gnb a").removeClass("on")
            $('a[href*="exam_02"]').addClass("on");

        } else if (sTop >= 522 && sTop < 646) {
            $(".gnb a").removeClass("on")
            $('a[href*="exam_03"]').addClass("on");

        } else if (sTop >= 646 && sTop < 770) {
            $(".gnb a").removeClass("on")
            $('a[href*="exam_04"]').addClass("on");

        } else if (sTop >= 770 && sTop < 949) {
            $(".gnb a").removeClass("on")
            $('a[href*="exam_05"]').addClass("on");

        } else if (sTop >= 949 && sTop < 1124) {
            $(".gnb a").removeClass("on")
            $('a[href*="exam_06"]').addClass("on");

        } else if (sTop >= 1124 && sTop < 1684) {
            $(".gnb a").removeClass("on")
            $('a[href*="exam_07"]').addClass("on");

        } else if (sTop >= 1684 && sTop < 2192) {
            $(".gnb a").removeClass("on")
            $('a[href*="exam_08"]').addClass("on");

        }

    }

    /* //gnb*/
    /* 모두체크 */
    //전체선택 체크박스 클릭
    $("#allCheck").click(function () {
        //만약 전체 선택 체크박스가 체크된상태일경우
        if ($("#allCheck").prop("checked")) {
            //해당화면에 전체 checkbox들을 체크해준다
            $("input[type=checkbox]").prop("checked", true);
            //전체선택 체크박스가 해제된 경우
        } else {
            //해당화면에 모든 checkbox들의 체크를해제시킨다.
            $("input[type=checkbox]").prop("checked", false);
        }
    });

    //모두 체크해제             
    $("#uncheck_all").click(function () {
        $("input[type=checkbox]:checkbox").attr("checked", false);
    });
    //체크값 가져오기
    $("#count_check").click(function () {
        alert($("input[type=checkbox]:checkbox:checked").length);
    });
    /* // 모두체크 */

    /*폰트 사이즈 조정하기*/
    //폰트 사이즈 늘리기 
    $(".font_btn .big").on("click", function () {
        var currentSize = $(".font_size").css("fontSize");
        var num = parseFloat(currentSize, 10);
        num++

        $(".font_size").css({
            "font-size": num
        });
    });
    //폰트 사이즈 줄이기
    $(".font_btn .small").on("click", function () {
        var currentSize = $(".font_size").css("fontSize");
        var num = parseFloat(currentSize, 10);
        num--

        $(".font_size").css({
            "font-size": num
        });
    });
    /* //폰트 사이크 조정하기*/

    /*마우스 포인트 체크*/
    $(".mouse_point").on("mousemove touchstart", function (event) {
        $(".txt_point").text("pageX: " + event.clientX + ", pageY: " + event.clientY);
        /*
        $(".mouse_point .pit").css({
            "top":event.pageY+1000,
            "left":event.pageX
        });           
        */
    });
    /* //마우스 포인트 체크*/
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

    /*99단*/
    //2단

    var result1 = "";
    for (i = 1; i <= 9; i++) {
        result1 += "2*" + i + "=" + 2 * i + "<br>";
    }
    $(".print99_1").html(result1);

    var result2 = "";
    for (i = 2; i <= 9; i++) {
        for (j = 1; j <= 9; j++) {
            result2 += i + "*" + j + "=" + i * j + "<br>";
        }
    }
    $(".print99_2").html(result2);

    /* //99단*/

    /*피라미드*/
    var result3 = "";
    for (i = 0; i <= 4; i++) {
        //공백
        for (j = 0; j < 4 - i; j++) {
            result3 += "&nbsp;"
        }
        //별
        for (k = 0; k < 2 * i + 1; k++) {
            result3 += "*"; //별이 들어가야하므로
        }
        result3 += "<br>";
    }

    $(".print_09").html(result3);

    /* //피라미드*/

    /* 옆으로 이동효과 */
    var active11 = $(".ex_11 .box .on");
    $(".ex_11 .priv_box").on("click", function () {
        $(".ex_11 .box").each(function (index) {
            var elIdx = active11.index();
            var prevEl = active11.prev();
            prevEl.addClass("on").siblings().removeClass("on").attr("class", null);
            if (elIdx <= 0) {
                return false;
            }
            active11 = prevEl;
        })
    })

    $(".ex_11 .next_box").on("click", function () {
        $(".ex_11 .box").each(function (index) {
            var elIdx = active11.index();
            var nextEl = active11.next();
            nextEl.addClass("on").siblings().removeClass("on").attr("class", null);
            if (elIdx >= 9) {
                return false;
            }
            active11 = nextEl;
        })
    });

    /* // 옆으로 이동효과 */

    /*계산기*/
    $(".result").on("click", function () {

            var first = $(".first").val();
            var calc = $(".calc").val();
            var last = $(".last").val();

            first = parseFloat(first, 10);
            last = parseFloat(last, 10);

            if ($(".cal .first").val().trim() == "") {
                alert("숫자를 입력해 주세요.");
                $(".cal .first").focus();
                return false;
            }

            if ($(".cal .calc").val().trim() == "") {
                alert("부등호를 입력해 주세요.");
                $(".cal .calc").focus();
                return false;
            }

            if ($(".cal .last").val().trim() == "") {
                alert("숫자를 입력해 주세요.");
                $(".cal .last").focus();
                return false;
            }

            if (calc == "+") {
                var sum = first + last;
            }
            if (calc == "-") {
                var sum = first - last;
            }
            if (calc == "*") {
                var sum = first * last;
            }
            if (calc == "/") {
                var sum = first / last;
            }
            $(".result_txt").text(sum);
        })
        /* //계산기*/


    /* 옆으로 이동효과2 */
    var active13 = $(".ex_13 .box .on");
    var sisAni = false;
    $(".ex_13 .priv_box").off().on("click", function () {
        if (sisAni == true) {
            return false;
        }
        $(".ex_13 .box").each(function (index) {
            var thisPIdx = active13.index();
            var thisEl = $(".ex_13 .box li").eq(thisPIdx);
            var prevEl = $(".ex_13 .box li").eq(thisPIdx).prev();
            if (thisPIdx - 1 < 0) {
                return false
            }
            sisAni = true;
            if (!thisEl.is(':animated')) {
                thisEl.stop().animate({
                    right: 100 + 5
                }, function () {
                    prevEl.stop().animate({
                        right: -100 - 5
                    }, function () {
                        thisEl.css({
                            right: "",
                            zIndex: 4
                        });
                        thisEl.removeClass("on");
                        prevEl.css({
                            right: "",
                            zIndex: 5
                        });
                        prevEl.siblings().removeClass("on")
                        prevEl.siblings().css({
                            zIndex: ""
                        })
                        prevEl.addClass("on");
                        sisAni = false;
                    });
                });
            }
            sisAni = true;
            active13 = prevEl
        });
    });

    $(".ex_13 .next_box").off().on("click", function () {
        if (sisAni == true) {
            return false;
        }
        $(".ex_13 .box").each(function (index) {
            var thisNIdx = active13.index();
            var thisEl = $(".ex_13 .box li").eq(thisNIdx);
            var nextEl = $(".ex_13 .box li").eq(thisNIdx).next();
            var elLength = $(".ex_13 .box li").length;
            if (thisNIdx + 1 >= elLength) {
                return false
            }
            sisAni = true;
            if (!thisEl.is(':animated')) {
                thisEl.stop().animate({
                    left: 100 + 5
                }, function () {
                    nextEl.stop().animate({
                        left: -100 - 5
                    }, function () {
                        thisEl.css({
                            left: "",
                            zIndex: 4
                        })
                        thisEl.removeClass("on")
                        nextEl.css({
                            left: "",
                            zIndex: 5
                        })
                        nextEl.siblings().removeClass("on");
                        nextEl.siblings().css({
                            zIndex: ""
                        })
                        nextEl.addClass("on");
                        sisAni = false;
                    });
                });
            }
            sisAni = true;
            active13 = nextEl
        });
    });

    /* // 옆으로 이동효과2 */

    /* 멀티 슬라이드 배너 */
    var activeEl = $(".multi_slide_wrap .slide li.on");
    var thisIdx = 0
    var misAni = false; //더블 클릭방지
    $(".multi_slide_wrap .next").on("click", function () {
        if (misAni == true) {
            return false;
        }

        if (thisIdx >= 4) {
            multiMoveSlide(1)
        } else {
            multiMoveSlide(thisIdx + 1);
        }
    });

    function multiMoveSlide(nextIdx) {
        misAni = true;
        $(".multi_slide_wrap .slide li").stop().animate({
            marginLeft: -100 * nextIdx
        }, function () {
            $(".multi_slide_wrap .slide li").eq(thisIdx - 1).css({
                left: 100 * nextIdx + 300
            });

            if (nextIdx >= 4) {
                for (var i = 0; i <= 4; i++) {
                    $(".multi_slide_wrap .slide li").eq(i).css({
                        left: 100 * i,
                        marginLeft: 0
                    });
                }
            }
            misAni = false;
        });
        misAni = true;
        thisIdx = nextIdx
    }
    /* // 멀티 슬라이드 배너 */


    /* 옆으로 이동효과3 */
    //이전
    $(".ex_15 .prev").on("click", function () {
        var thisEl = $(this).closest('.box li');
        if (thisEl.index() <= 0) {
            return false;
        }
        thisEl.css({
            zIndex: 5
        })
        thisEl.animate({
            left: -100 - 5
        }, function () {
            thisEl.prev().animate({
                left: 100 + 5
            }, function () {
                thisEl.css({
                    left: 0
                });
                thisEl.prev().css({
                    left: 0
                })
                thisEl.insertBefore(thisEl.prev());
            });
        });
        thisEl.siblings().css({
            zIndex: ""
        });
    });
    //다음
    $(".ex_15 .next").on("click", function () {
        var thisEl = $(this).closest('.box li');
        if (thisEl.index() >= 9) {
            return false;
        }
        thisEl.css({
            zIndex: 5
        })
        thisEl.animate({
            left: 100 + 5
        }, function () {
            thisEl.next().animate({
                left: -100 - 5
            }, function () {
                thisEl.css({
                    left: 0
                });
                thisEl.next().css({
                    left: 0
                })
                thisEl.insertAfter(thisEl.next());
            });
        });
        thisEl.siblings().css({
            zIndex: ""
        });
    });

    /* // 옆으로 이동효과3 */

    /* 카드 선택 */

    $(".card li").on("click", function () {
        var thisCard = $(this);
        var idx = thisCard.index();

        var thisTop = thisCard.css("top");
        thisTop = parseFloat(thisTop, 10);
        var act = $(".card li").hasClass("on");

        if (act == false) {
            $(".card li").removeClass("on")
            thisCard.addClass("on");
            $(".card li").css({
                zIndex: 1
            })
            thisCard.css({
                zIndex: 5
            })
            thisCard.animate({
                top: -idx * 5 - 10
            });
        } else {
            thisCard.removeClass("on");
            thisCard.animate({
                top: idx * 50
            });
            thisCard.css({
                zIndex: 1
            });
        }
    });
    /* // 카드 선택 */

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
    
    /*카드2*/
    $(".card2 li").each(function(e){   
         $(".card2 li").eq(e).animate({
             top:e*50
         });
    });
    
    $(".card2 li").on("click",function(){                
        var thisBg = $(this).css("background");
        var nextBg = $(".card2 li:last-child").css("background");
        var thisTxt = $(this).text();
        var nextTxt = $(".card2 li:last-child").text();                
        var $this = $(this);
        $(".card2 li").each(function(e){   
            $(".card2 li").eq(e).delay(e*100).animate({
                left:1000
            },function(){                                      
                $this.css({"background":nextBg});
                $(".card2 li:last-child").css({
                    "background":thisBg
                }); 
                $this.text(nextTxt);
                $(".card2 li:last-child").text(thisTxt);     
                $(".card2 li").eq(e).delay(e*100).animate({
                    left:0
                });
            });             
        });                                    
    });       
    /* //카드2*/
    
    /*호버효과3*/
    var span = $("<span class='caption'></span>");
    span.appendTo($('.hover_box a'));          
    $('.hover_box a').on('mouseenter mouseleave',function(event){    
        var $overlay = $(this).find('.caption'),
            side = getMouseDirection(event),
            animateTo,
            positionIn = {
                top:  '0%',
                left: '0%'
            },
            positionOut = (function (){
                switch (side) {
                    // case 0: top, case 1: right, case 2: bottom, default: left
                    case 0:  return { top: '-100%', left:    '0%' }; break; // top
                    case 1:  return { top:    '0%', left:  '100%' }; break; // right
                    case 2:  return { top:  '100%', left:    '0%' }; break; // bottom
                    default: return { top:    '0%', left: '-100%' }; break; // left
                }
            })();
        
            if (event.type === 'mouseenter') {
                animateTo = positionIn;
                $overlay.css(positionOut);           
            } else {
                animateTo = positionOut;
            }
            $overlay.stop(true).animate(animateTo, 100);        
    });
        
    // 마우스의 방향을 감지하는 함수
    // http://stackoverflow.com/a/3647634
    function getMouseDirection (event) {
        var $el = $(event.currentTarget),
            offset = $el.offset(),
            w = $el.outerWidth(),
            h = $el.outerHeight(),
            x = (event.pageX - offset.left - w / 2) * ((w > h)? h / w: 1),
            y = (event.pageY - offset.top - h / 2) * ((h > w)? w / h: 1),
            direction = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90  + 3) % 4;                     
        return direction;
    }
                 
 
    /* //호버효과3*/
    
    $('.card3 li').on('click',function(){
        var idx = $('.card3 li').index(this);
        var thisBg = $(this).css("background");
        var nextBg = $(".card3 li:last-child").css("background");
        var thisTxt = $(this).text();
        var nextTxt = $(".card3 li:last-child").text();  
        var $this = $(this);     
        $('.card3 li').each(function(e){            
            $(".card3 li").delay(100).eq(e).animate({
                 top:-200
            },500,function(){
                $this.css({"background":nextBg});
                $(".card3 li:last-child").css({
                    "background":thisBg
                }); 
                $this.text(nextTxt);
                $(".card3 li:last-child").text(thisTxt);               
                $(".card3 li").delay(100).eq(e).animate({
                    top:e*50
                },500);
            });
        });
    });
    
    
      /* 슬라이드 배너*/
    var currentIndex_2 = 0;

    var isAni_2 = false;
    function moveSlide_2() {
        
        isAni_2 = true;
        nextIndex = currentIndex_2 + 1
        
        console.log(nextIndex)
        $(".ex_23 .slide li").eq(currentIndex_2).stop().animate({
            left: -100
        }, function () {
            isAni_2 = false;
        });
        
        $(".ex_23 .slide li").eq(currentIndex_2).siblings().css({
            left:100
        })
        
        $(".ex_23 .slide li").eq(nextIndex).css({
            "left": 100
        });
        $(".ex_23 .slide li").eq(nextIndex).stop().animate({
            left: 0
        }, function () {
            isAni_2 = false;
        });
        
        $(".ex_23 .slide li").eq(nextIndex).addClass('on').siblings().removeClass('on')
        isAni = true;
        currentIndex_2 = nextIndex;
        // console.log("currentElemet="+currentElemet,"nextElement="+nextElement);        
    }                      
    
   
    
    $('.scroll_box a').on('click',function(){
         isAni_2 = true;
        var w_box = $('.scroll_box .cts a').width();
        
        currentIndex_2 = $('.scroll_box a').index(this)-1;
        
        $('.scroll_box a').removeClass('on')
        $(this).addClass('on');
        
        $('.scroll_box').animate({
            scrollLeft:(w_box+2)*currentIndex_2
        });
        
         $(".ex_23 .slide li").stop().animate({
             "left": -100
         },function(){
               isAni_2 = false;
         })
        moveSlide_2()
      
    })
    /* // 슬라이드 배너*/
    
  
    /*마우스휠*/
    var hillIdx=0;
    var even;
    var len = $('.hill li').length
    $('.hill li').on('mousewheel DOMMouseScroll',function(e){
           e.preventDefault();
        //   e.stopPropagation(); 
        //   return false;
        even=e.originalEvent.wheelDelta;
        if($('.hill li').is(':animated')){return false} 
          
        if(even>0){ 
            nhillAct();             
        }else if(even<0){
            phillAct()
        }
    })
    
    
    function nhillAct(){
        if(hillIdx + 1 >= $('.hill li').length) {
            nextHill(0)
        } else{
            nextHill(hillIdx + 1);
        }
    }
    
    function phillAct(){
        var len = $('.hill li').length
        if(hillIdx-1 < -len+1) {
            prevHill(0)
        } else{
            prevHill(hillIdx - 1);
        }
    }
    
     function nextHill(nextIdx) {
        $(".hill li").eq(hillIdx).stop().animate({
            top: -300
        })
        $(".hill li").eq(nextIdx).css({
            top: 300
        })
        $(".hill li").eq(nextIdx).stop().animate({
            top: 0
        });
        hillIdx = nextIdx;  
    }
    
    function prevHill(nextIdx){
         $(".hill li").eq(hillIdx).stop().animate({
            top: 300
        })
        $(".hill li").eq(nextIdx).css({
            top: -300
        })
        $(".hill li").eq(nextIdx).stop().animate({
            top: 0
        });
        hillIdx = nextIdx;      
    }
 
     /* //마우스휠*/
    
    nsy_ui.rowhill();
    nsy_ui.rowhill02();
    nsy_ui.rowhill03();
    
 
    /*GNB01*/
    $('.gnb01 .dep1 > li').on('mouseenter',function(e){     
   //     e.preventDefault();
        $('.gnb01 .dep1 > li').removeClass('on')
        $(this).addClass('on');          
        $('.gnb01 .dep1 > li a').on('click',function(e){
            e.preventDefault();  
        })     
        
        
    });
    $('.gnb01 .dep1 > li').on('mouseleave',function(e){       
        $('.gnb01 .dep1 > li').removeClass('on');
    })
    
    $('.gnb02 .dep1 > li').on('mouseenter',function(e){
        e.preventDefault();
        $('.gnb02 .dep2').stop().slideUp()
        $(this).find('.dep2').stop().slideDown();
        $('.gnb02 .dep1 > li a').on('click',function(e){
            e.preventDefault();  
        }) 

    });
    
    $('.gnb02 .dep1 > li').on('mouseleave',function(e){
        e.preventDefault();
         $('.gnb02 .dep2').stop().slideUp()

    });
    
         
    gnb();
    moveScroll();
    $(window).scroll(function (){
        moveScroll();
        topBtn();
    });
});

/*$(function(){
	$('ul.tab li').click(function(){
		var idx = $(this).index();	
		$('ul.tab li a').removeClass('on');
		$(this).find('a').addClass('on');
		$('.tab_cts_wrap .tab_cts').removeClass('on');
		$('.tab_cts_wrap .tab_cts').eq(idx).addClass('on');
	});

})*/


nsy_ui={}

/* 마우스 가로휠*/
nsy_ui.rowhill=function(){
    var hillrowIdx=0;
    var even;
    var ele = $('.ex_29 .hill_row li')
    var elelen = ele.length
    var elW = ele.width();
    var allW = elelen*elW
    $('.ex_29 .hill_row').on('mousewheel DOMMouseScroll',function(e){
        e.preventDefault();
        var wheelDelta = e.originalEvent.wheelDelta;   
        var left = $('.ex_29 .hill_row ul').css('left')
        left = parseFloat(left)
        if(wheelDelta > 0){
            if(left>=0){  
               return false
            }
            $('.ex_29 .hill_row ul').css({
                'left':'+=100px'
            })
		}else{
            if(left<=-1500){
               return false
            }
		    $('.ex_29 .hill_row ul').css({
                'left':'-=100px'
            })
		}  
    })
}
/* // 마우스 가로휠*/

/* 마우스 가로휠02*/
nsy_ui.rowhill02=function(){
    var ele = $('.ex_30 .hill_row')
    var eleUl = ele.find('ul')
    var eleLi = eleUl.find('li')
    var elelen = eleLi.length
    var elW = eleLi.width();
    var allW = elelen*elW
    ele.on('mousewheel DOMMouseScroll',function(e){
        e.preventDefault();
        var wheelDelta = e.originalEvent.wheelDelta;   
        var left = eleUl.css('left')
        left = parseFloat(left)
        
        if(eleUl.is(":animated")){return false;}
        if(wheelDelta > 0){
            if(left>=0){  
               return false
            }
            eleUl.animate({
                'left':'+='+elW+'px'
            })
		}else{
        
            
            if(left<=-1500){
               return false
            }
		    eleUl.animate({
                'left':'-='+elW+'px'
            })
		}  
    })
}
/* // 마우스 가로휠02*/

/* 마우스 가로휠03*/
nsy_ui.rowhill03=function(){
    var ele = $('.ex_31 .hill_row')
    var eleUl = ele.find('ul')
    var eleLi = eleUl.find('li')
    var elelen = eleLi.length
    var elW = eleLi.width();
    var allW = elelen*elW
    eleLi.on('mousewheel DOMMouseScroll',function(e){
        e.preventDefault();
        var wheelDelta = e.originalEvent.wheelDelta;   
        var left = eleUl.css('left')
        left = parseFloat(left)
        
        if(eleUl.is(":animated")){return false;}
        
        var nW = $(this).next().width()
        
        if(wheelDelta > 0){
            if(left>=0){  
               return false
            }
            eleUl.animate({
                'left':nW
            })
		}else{
            if(left<=-1500){
               return false
            }
		    eleUl.animate({
                'left':'-='+elW+'px'
            })
		}  
    })
}
/* // 마우스 가로휠02*/

 /*탭*/
jQuery.fn.Tab = function(opts){
    var $opts = {
       idx:0
    };
    $.extend($opts,opts);
    
    var idx = $opts.idx;
    
    var $select = $(this).find('li>a');
    var $cts = $(this).find('div>div');
    $select.eq(idx).addClass('on');
    $cts.eq(idx).addClass('on');
    return $select.on("click", function () {
        var idx = $select.index(this);
        $select.removeClass("on");
        $(this).addClass("on");
        $cts.removeClass("on");
        $cts.eq(idx).addClass("on");
    });  
}
/* //탭*/

/*아코디언*/
jQuery.fn.Acco = function(opts){
    var $opts = {
        option:1,
        speed:200    
    };
    $.extend($opts,opts);
    
    var option = $opts.option;
    var speed = $opts.speed;
    
    var $select = $(this).find('dt>a')
    var $cts = $(this).find('dd');

    return $select.on("click", function () {
        var act = $(this).hasClass("on");
        
        if(option==1){
            if (act == false) {
                $(this).addClass("on");
                $(this).parent().next().addClass("on");
            } else {
                $(this).removeClass("on");
                $(this).parent().next().removeClass("on");
            }
        }else if(option==2){
            $select.removeClass('on')
            $cts.removeClass('on')
            if (act == false) {
                $(this).addClass("on");
                $(this).parent().next().addClass("on");
            } else {
                $(this).removeClass("on");
                $(this).parent().next().removeClass("on");
            }
        }else if(option==3){
            if (act == false) {
                $(this).addClass("on");
                $(this).parent().next().slideDown(speed);
            } else {
                $(this).removeClass("on");
                $(this).parent().next().slideUp(speed);
            }     
        }else if(option==4){
            $select.removeClass('on')
            $cts.slideUp(speed);
            if (act == false) {
                $(this).addClass("on");
                $(this).parent().next().slideDown(speed);
            } else {
                $(this).removeClass("on");
                $(this).parent().next().slideUp(speed);
            }    
        }
    }); 
}
/* //아코디언*/


/*이미지 교체*/
jQuery.fn.imgCng = function(opts){    
    var $select = $(this);
    return $select.on('click',function(e){
        e.preventDefault();
        var act=$(this).hasClass('on');
        if(act==false){
            $(this).addClass('on')  
            $(this).find('img').attr('src',$(this).find('img').attr('src').replace('off','on'))
        }else{
            $(this).removeClass('on')
            $(this).find('img').attr('src',$(this).find('img').attr('src').replace('on','off'))  
        }
    });
}
/* // 이미지 교체*/

/*팝업*/
jQuery.fn.popUp = function(opts){   
    var $opts = {
        layerPop:'.layer_pop',
        fade:false,
        dim:true
    };
    $.extend($opts,opts);
    
    var $popL = $($opts.layerPop);    
    var $select =$(this); 
    var $href = $(this).attr('href');
    var $fade = $opts.fade
    var $dim = $opts.dim
    
    return $select.on("click",function(e){
        
        /*페이드 효과*/
        if($fade==false){
            $($href).attr('tabindex',0).show().focus();
        }else{
            $($href).attr('tabindex',0).fadeIn().focus();
        }
        
        /*딤 생성*/
        if($dim==true){
            $('.wrap').append('<div class="dim"></div>')
            $(".dim").show();
            $(".dim").css({
                background:'#000',
                opacity:'0.7',
                position:'fixed',
                top:0,
                left:0,
                width:'100%',
                height:'100%',
                zIndex:998
            })
        }else{
            $(".dim").hide();
        } 
        var bodyH = $(window).outerHeight();
        var bodyW = $(window).outerWidth();
        var layerH = $popL.outerHeight();
        var layerW = $popL.outerWidth();
        var centerH = (bodyH / 2) - (layerH / 2 + 100);
        var centerW = -layerW / 2
        $popL.css({
            "top": centerH,
            "margin-left": centerW,
            zIndex:999
        });
        $("body").css({
            "overflow": 'hidden'
        });
       
        $popL.find('.cls').on("click", function () {
            var $this  = $(this);
            $popL.hide();                                          
            $(".dim").remove();
            $("body").css({
                "overflow": 'inherit'
            });
            $select.focus();      
         }) 
    });  
}
/* // 팝업*/


