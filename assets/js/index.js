$(document).ready(function(){
    

    /* li */
    $('.index-main li').hover(function(){ /* in */


        var device=$('body').attr('device');
        if(device=='pc'){ 
            $('.index-main .hovercover').addClass('dark');  
            $(this).find('.hovercover').removeClass('dark');  
            $(this).find('.button').addClass('opacity');
            $(this).find('.text').removeClass('opacity');
        }

    },function(){ /* out */

        var device=$('body').attr('device');
        if(device=='pc'){ 
            $('.index-main .hovercover').removeClass('dark');     
            $('.index-main .button').removeClass('opacity'); 
            $('.index-main .text').addClass('opacity'); 
        }
    });






    // 隱藏影片
    $('body').on('click','.videos_cancel',function() {

          $('.videos_wrap').hide();
          $('#videos_iframe').attr('src','')

    });


    // 顯示影片
     $('body').on('click','.film',function() {

              var youtube_id='Q7unKkDmujc';
        
               $('.videos_wrap').show();
               $('#videos_iframe').attr('src','https://www.youtube.com/embed/'+youtube_id+'?autoclose=true&amp;autohide=1&amp;rel=0&amp;autoplay=1&amp;wmode=transparent&amp;modestbranding=1&amp;');


     });

});