    var canvas={};
    canvas.init =function(){
         /* 스마일 */
        canvas.fillCircle("pic01","yellow",395,250,140,0,2);
        canvas.circle("pic01",395,280,60,0,1);
        canvas.fillCircle("pic01","black",355,180,20,0,2);
        canvas.fillCircle("pic01","black",435,180,20,0,2);
        /* // 스마일 */

        canvas.ex01();
        canvas.ex02();
        canvas.ex02_01();
        canvas.ex03();
        canvas.ex04();
        canvas.ex05();
        canvas.ex06();
        canvas.ex07();
        canvas.ex07_01();
        canvas.ex07_02();
        canvas.ex08();
        canvas.ex09();
        canvas.ex10();
    //    canvas.ex11();
    //    canvas.ex12();
    //    canvas.ex13();
    //    canvas.ex14();
    //    canvas.ex15();
    //    canvas.ex16();
    //    canvas.ex17();
    //    canvas.ex18();
    //    canvas.ex19();
    //    canvas.ex20();

    }
    canvas.ex01 = function(){
        var c = document.getElementById("myCanvas01");
        var ctx = c.getContext("2d");
        ctx.moveTo(0,0);
        ctx.lineTo(200,100);
        ctx.stroke();
    }
    
    canvas.ex02 = function(){
        var c = document.getElementById("myCanvas02");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,50,40,0,2*Math.PI);
        ctx.stroke();
    }
    
    canvas.ex02_01 = function(){
        var c = document.getElementById("myCanvas02_01");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,50,40,0,2*Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
    }
    
    canvas.ex03 = function(){
        var c = document.getElementById("myCanvas03");
        var ctx = c.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillText("Hello World",10,50);
    }
    canvas.ex04 = function(){
        var c = document.getElementById("myCanvas04");
        var ctx = c.getContext("2d");
        ctx.font = "30px Arial";
        ctx.strokeText("Hello World",10,50);
    }
    
    canvas.ex05 = function(){
        var c = document.getElementById("myCanvas05");
        var ctx = c.getContext("2d");
        var grd = ctx.createLinearGradient(0,0,200,0);
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white");
        ctx.fillStyle = grd;
        ctx.fillRect(10,10,150,80);
    }
    
    canvas.ex06 = function(){
        var c = document.getElementById("myCanvas06");
        var ctx = c.getContext("2d");
        var grd = ctx.createRadialGradient(75,50,5,90,60,100);
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white");
        ctx.fillStyle = grd;
        ctx.fillRect(10,10,150,80);
    }
    
    canvas.ex07 = function(){
        var c = document.getElementById("myCanvas07");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "green";
        ctx.fillRect(10,10,50,50);
    }
    
    canvas.ex07_01 = function(){
        var c = document.getElementById("myCanvas07_01");
        var ctx = c.getContext("2d");
        ctx.lineWidth = 4;
        ctx.strokeRect(10,10,50,50);
    }
    
    canvas.ex07_02 = function(){
        var c = document.getElementById("myCanvas07_02");
        var ctx = c.getContext("2d");
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "#666";
        
        ctx.fillStyle = "#000";
        ctx.fillRect(10,10,50,50);               
    }
    
    canvas.ex08 = function(){
        var c = document.getElementById("myCanvas08");
        var ctx = c.getContext("2d");        
        var image = new Image();
        image.src = "http://www.fuz.co.kr/wp-content/themes/fuz2017/images/common/logo.png";       
        ctx.drawImage(image,10,10);        
    }
    
    canvas.ex09 = function(){
        var x = 0;
        var y = 15;
        var speed = 2;
        
        function animate(){
            reqAnimFrame = window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame||
                window.oRequestAnimationFrame;
            
            reqAnimFrame(animate);
            x += speed;
            if(x <= 0 || x >=175){
                speed = -speed;
            }            
            draw();
        }        
        function draw(){
            var c = document.getElementById("myCanvas09");
            var ctx = c.getContext("2d");
            
            ctx.clearRect(0,0,500,170);
            ctx.fillStyle = "#ff00ff";
            ctx.fillRect(x,y,25,25);
        }
        animate();                
    }    
    canvas.ex10 = function(){
        var sun = new Image();
        var moon = new Image();
        var earth = new Image();
        init();
        function init(){
            sun.src = "https://mdn.mozillademos.org/files/1456/Canvas_sun.png";
            moon.src = "https://mdn.mozillademos.org/files/1443/Canvas_moon.png";
            earth.src = "https://mdn.mozillademos.org/files/1429/Canvas_earth.png";            
            setInterval(draw,10);           
        }
        
        function draw(){
            var ctx = document.getElementById("myCanvas10").getContext("2d");
            ctx.globalCompositeOperation = "destination-over";
            ctx.clearRect(0,0,400,400); //캔버스를 비운다.
            ctx.fillStyle = "rgba(0,0,0,0.4)";
            ctx.strokeStyle = "rgba(0,153,255,0.4)";
            ctx.save();
            ctx.translate(150,150);
            
            // 지구
            var time = new Date();
            ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
            ctx.translate(105,0);
            ctx.fillRect(0,-12,50,24); // Shadow
            ctx.drawImage(earth,-12,-12);
            
            // 달
            ctx.save();
            ctx.rotate(((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds());
            ctx.translate(0,28.5);
            ctx.drawImage(moon,-3.5,-3.5);
            ctx.restore();
            
            ctx.restore();
            
            ctx.beginPath();
            ctx.arc(150,150,105,0,Math.PI*2,false); // 지구 궤도
            ctx.stroke();
            
            ctx.drawImage(sun,0,0,300,300);                     
        }
    }
            
    canvas.circle = function(canvasArea,left,top,size,num4,num5){
        var c = document.getElementById(canvasArea);
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(left,top,size,num4,num5*Math.PI);
        ctx.stroke();
    }
    
    canvas.fillCircle = function(canvasArea,color,left,top,size,num4,num5){
        var c = document.getElementById(canvasArea);
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(left,top,size,num4,num5*Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
    
   