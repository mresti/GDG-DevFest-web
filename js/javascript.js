$(document).ready(function($) {
	$('.menu-scroll a').click(function(){
			var element=$(this).attr('href');
			$('html, body').animate({
				scrollTop: $(element).offset().top
			}, 1000);
		});
		
	$('#backtop').click(function(){
		$('html, body').animate({
				scrollTop: $('#logo').offset().top
			}, 1000);
	});
});