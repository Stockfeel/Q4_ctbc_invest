var bannerth=1;function smallpulse(){$(".smallpulse").css("webkitAnimation","none"),setTimeout(function(){$(".smallpulse").css("webkitAnimation","")},10)}$(document).ready(function(){$("body").on("click",".btn_jump",function(){var e=parseInt($(".notepaper").attr("n"));$(this).hasClass("next")?3==++e&&(e=0):-1==--e&&(e=2),$(".notepaper").attr("n",e)}),$("body").on("click",".hash li",function(){var e=parseInt($(this).attr("n"));$(".notepaper").attr("n",e)}),$("body").on("click",".totop",function(){$("html,body").stop().animate({scrollTop:"0px"},300)}),$("body").on("click",".fold",function(){if($(this).hasClass("clicked"))$(this).removeClass("clicked"),$(".alert .content").stop().animate({height:0},500,function(){});else{var e=$(".alert .content");e.css("height","auto");var s=e.height();e.css("height","0"),$("html,body").stop().animate({scrollTop:$(".fold").offset().top-60},300),$(this).addClass("clicked"),$(".alert .content").stop().animate({height:s},500,function(){})}}),$("body").on("click",".dots li",function(){var e=$(this).index();if(0==e)var s=0;else if(1==e)s=299;else if(2==e)s=450;$("html,body").stop().animate({scrollTop:s},300)}),setTimeout(function(){$(".bubbles").css("opacity",1),$(".bubbles").addClass("bounceIn")},600),setTimeout(function(){$(".bubbles").removeClass("bounceIn")},1200),$(window).scroll(function(){var e=$(window).height(),s=$(window).scrollTop();console.log(s+"/"+e),s<200&&($('.bubbles li[n="1"]').find("text").eq(0).removeClass("opacity"),$('.bubbles li[n="1"]').find("text").eq(1).addClass("opacity"),$('.bubbles li[n="1"]').find("text").eq(2).addClass("opacity"),$('.bubbles li[n="2"]').find("text").eq(0).removeClass("opacity"),$('.bubbles li[n="2"]').find("text").eq(1).addClass("opacity"),$('.bubbles li[n="2"]').find("text").eq(2).addClass("opacity"),$('.bubbles li[n="3"]').find("text").eq(0).removeClass("opacity"),$('.bubbles li[n="3"]').find("text").eq(1).addClass("opacity"),$('.bubbles li[n="3"]').find("text").eq(2).addClass("opacity"),$(".dots li").removeClass("selected"),$(".dots li").eq(0).addClass("selected"),$("body").addClass("fixed")),200<=s&&s<400&&(1==bannerth&&(bannerth=2,console.log(bannerth),$(".bubbles").addClass("bounceIn2"),setTimeout(function(){$(".bubbles").removeClass("bounceIn2")},600)),$('.bubbles li[n="1"]').find("text").eq(0).addClass("opacity"),$('.bubbles li[n="1"]').find("text").eq(1).removeClass("opacity"),$('.bubbles li[n="1"]').find("text").eq(2).addClass("opacity"),$('.bubbles li[n="2"]').find("text").eq(0).addClass("opacity"),$('.bubbles li[n="2"]').find("text").eq(1).removeClass("opacity"),$('.bubbles li[n="2"]').find("text").eq(2).addClass("opacity"),$('.bubbles li[n="3"]').find("text").eq(0).addClass("opacity"),$('.bubbles li[n="3"]').find("text").eq(1).removeClass("opacity"),$('.bubbles li[n="3"]').find("text").eq(2).addClass("opacity"),$(".dots li").removeClass("selected"),$(".dots li").eq(1).addClass("selected"),$("body").addClass("fixed")),400<=s&&s<600&&(2==bannerth&&(bannerth=3,console.log(bannerth),$(".bubbles").addClass("bounceIn3"),setTimeout(function(){$(".bubbles").removeClass("bounceIn3")},600)),$('.bubbles li[n="1"]').find("text").eq(0).addClass("opacity"),$('.bubbles li[n="1"]').find("text").eq(1).addClass("opacity"),$('.bubbles li[n="1"]').find("text").eq(2).removeClass("opacity"),$('.bubbles li[n="2"]').find("text").eq(0).addClass("opacity"),$('.bubbles li[n="2"]').find("text").eq(1).addClass("opacity"),$('.bubbles li[n="2"]').find("text").eq(2).removeClass("opacity"),$('.bubbles li[n="3"]').find("text").eq(0).addClass("opacity"),$('.bubbles li[n="3"]').find("text").eq(1).addClass("opacity"),$('.bubbles li[n="3"]').find("text").eq(2).removeClass("opacity"),$(".dots li").removeClass("selected"),$(".dots li").eq(2).addClass("selected"),$("body").addClass("fixed")),1<=s&&($("body.fixed").removeClass("fixed"),$(".banner.fixed").removeClass("fixed")),s<580&&($(".banner").addClass("fixed"),$("body").addClass("fixed"))})});