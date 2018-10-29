// rotatedetect 翻轉判斷 

$(document).ready(function(){
	rotatedetect();
});
$(window).on("orientationchange",function(){
	rotatedetect();
});
$( window ).resize(function() {
	rotatedetect();
});

function rotatedetect(){

	var winH=$( window ).height();
	var winW=$( window ).width();

	console.log(winH+'/'+winW);

	if( winW > winH ) // Landscape
	{
		$('body').attr('rotate',true);
	}
	else // Portrait
	{
		$('body').attr('rotate',false);
	}

}


//device 裝置
device_body(1024);
function device_body(mwidth){

	//start & resize
	$(document).ready(function(){

		device_body_do(mwidth);

		$( window ).resize(function() {

			device_body_do(mwidth);

		});


	});

	//do
	function device_body_do(mwidth){
		var winW = $(window).width();

		if(winW>=mwidth){
			$('body').attr('device','pc');
		}
		else{
			$('body').attr('device','m');
		}

	}
}



$(document).ready(function(){

	$('body').on('click','.menu',function() {
		if($('.menu_block').hasClass('open')){
			$('.menu_block').click();
		}
		$('.menuwrap.block, .menuwrap_cancel').removeClass('open');
		if($('.menuwrap.normal').hasClass('open')){
			$('.menu, .menuwrap.normal').removeClass('open');
		}else{
			$('.menu, .menuwrap.normal, .menuwrap_cancel').addClass('open');
		}
	});

	$('body').on('click','.menu_block',function() {
		if($('.menu').hasClass('open')){
			$('.menu').click();
		}
		$('.menuwrap.block, .menuwrap_cancel').toggleClass('open');
		$(this).toggleClass('open');
	});

	$('body').on('click','.menuwrap_cancel',function() {
		$('.menu, .menuwrap.normal, .menuwrap.block, .menuwrap_cancel').removeClass('open');
	});

});	