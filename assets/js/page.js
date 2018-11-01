var bannerth=1;



$(document).ready(function(){
	


     /* btn_jump */
     $('body').on('click','.btn_jump',function() {

               var n=parseInt($('.notepaper').attr('n'));

               if($(this).hasClass('next')){
                    n++;

                    if(n==3){
                         n=0;
                    }
               }
               else{
                    n--;

                    if(n==-1){
                         n=2;
                    }
               }

               $('.notepaper').attr('n',n)

     });

     /* totop */
     $('body').on('click','.hash li',function() {

             var n=parseInt($(this).attr('n'));
             $('.notepaper').attr('n',n)
     });




	/* totop */
	$('body').on('click','.totop',function() {
			$('html,body').stop().animate( {scrollTop: '0px'}, 300 );
	});

	/* fold */
	$('body').on('click','.fold',function() {



		 if($(this).hasClass('clicked')){
               $(this).removeClass('clicked');
               $('.alert .content').stop().animate({ height: 0}, 500, function() {});
          }
          else{
          	var thecontent=$('.alert .content');
			thecontent.css('height','auto');
			var thecontentH=thecontent.height();
			thecontent.css('height','0');

			   $('html,body').stop().animate( {scrollTop: $('.fold').offset().top-60}, 300 );


               $(this).addClass('clicked');
               $('.alert .content').stop().animate({ height: thecontentH}, 500, function() {});

          }
	});


	/* dots */
	$('body').on('click','.dots li',function() {

			var thisn=$(this).index();

			if(thisn==0){
				var scrollTop=0;
			}
			else if(thisn==1){
				var scrollTop=299;
			}
			else if(thisn==2){
				var scrollTop=450;
			}
			$('html,body').stop().animate( {scrollTop: scrollTop}, 300 );
	});




          setTimeout(function() {
                  $(".bubbles").css('opacity',1);
                 $(".bubbles").addClass('bounceIn');
          }, 600);

          setTimeout(function() {
               $(".bubbles").removeClass('bounceIn');
         }, 1200);

	
	//scroll
	$(window).scroll(function () {

					var winH= $(window).height();

					var s1=200;
					var s2=400;
					var s3=600;
					var sEnd=590; // 600px 轉換距離

                    var pos = $(window).scrollTop();
                    console.log(pos+'/'+winH);
                    if(pos<s1){



                    		$('.bubbles li[n="1"]').find('text').eq(0).removeClass('opacity');
                    		$('.bubbles li[n="1"]').find('text').eq(1).addClass('opacity');
                    		$('.bubbles li[n="1"]').find('text').eq(2).addClass('opacity');

                    		$('.bubbles li[n="2"]').find('text').eq(0).removeClass('opacity');
                    		$('.bubbles li[n="2"]').find('text').eq(1).addClass('opacity');
                    		$('.bubbles li[n="2"]').find('text').eq(2).addClass('opacity');

                    		$('.bubbles li[n="3"]').find('text').eq(0).removeClass('opacity');
                    		$('.bubbles li[n="3"]').find('text').eq(1).addClass('opacity');
                    		$('.bubbles li[n="3"]').find('text').eq(2).addClass('opacity');

                    		$('.dots li').removeClass('selected');
                    		$('.dots li').eq(0).addClass('selected');

                              $('body').addClass('fixed');
                    }
                    if(pos>=s1 && pos<s2){

                              //動畫
                              if(bannerth==1){
                                   bannerth=2;
                                   console.log(bannerth);
                                   $('.bubbles').addClass('bounceIn2');
                                   setTimeout(function() {
                                        $(".bubbles").removeClass('bounceIn2');
                                  }, 600);
                              }

                    		$('.bubbles li[n="1"]').find('text').eq(0).addClass('opacity');
                    		$('.bubbles li[n="1"]').find('text').eq(1).removeClass('opacity');
                    		$('.bubbles li[n="1"]').find('text').eq(2).addClass('opacity');

                    		$('.bubbles li[n="2"]').find('text').eq(0).addClass('opacity');
                    		$('.bubbles li[n="2"]').find('text').eq(1).removeClass('opacity');
                    		$('.bubbles li[n="2"]').find('text').eq(2).addClass('opacity');

                    		$('.bubbles li[n="3"]').find('text').eq(0).addClass('opacity');
                    		$('.bubbles li[n="3"]').find('text').eq(1).removeClass('opacity');
                    		$('.bubbles li[n="3"]').find('text').eq(2).addClass('opacity');

                    		$('.dots li').removeClass('selected');
                    		$('.dots li').eq(1).addClass('selected');

                              $('body').addClass('fixed');

                    }
                    if(pos>=s2 && pos<s3){

                              //動畫
                              if(bannerth==2){
                                   bannerth=3;
                                   console.log(bannerth);
                                   $('.bubbles').addClass('bounceIn3');
                                   setTimeout(function() {
                                        $(".bubbles").removeClass('bounceIn3');
                                  }, 600);
                              }

                    		$('.bubbles li[n="1"]').find('text').eq(0).addClass('opacity');
                    		$('.bubbles li[n="1"]').find('text').eq(1).addClass('opacity');
                    		$('.bubbles li[n="1"]').find('text').eq(2).removeClass('opacity');

                    		$('.bubbles li[n="2"]').find('text').eq(0).addClass('opacity');
                    		$('.bubbles li[n="2"]').find('text').eq(1).addClass('opacity');
                    		$('.bubbles li[n="2"]').find('text').eq(2).removeClass('opacity');

                    		$('.bubbles li[n="3"]').find('text').eq(0).addClass('opacity');
                    		$('.bubbles li[n="3"]').find('text').eq(1).addClass('opacity');
                    		$('.bubbles li[n="3"]').find('text').eq(2).removeClass('opacity');

                    		$('.dots li').removeClass('selected');
                    		$('.dots li').eq(2).addClass('selected');

                             $('body').addClass('fixed');
                    }
     
                    if(pos>=sEnd){

                              $('body.fixed').removeClass('fixed');
                    		$('.banner.fixed').removeClass('fixed');
                    }
                    if(pos<sEnd){
                    		$('.banner').addClass('fixed');
                              $('body').addClass('fixed');
                    }
	});




});


function smallpulse(){

 		$(".smallpulse").css('webkitAnimation','none');
 		setTimeout(function() {
	        $(".smallpulse").css('webkitAnimation','');
	    }, 10);
}