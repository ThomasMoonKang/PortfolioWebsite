$(document).ready(function(){

	$('.section-link').click(function(){
		$('#'+$(this).html().toLowerCase()).scrollView();
	});

	var nav = $('#navigation');

	$(window).on('scroll', function(e) {
		console.log($(window).scrollTop());

		var windowpos = $(window).scrollTop();
		//Navbar changing
		if(windowpos >= 100) {
			nav.addClass('scrolled');
			$('.layout').addClass('loose');
		} else {
			$('.layout').removeClass('loose');
			nav.removeClass('scrolled');
		}
		//Container header highlighting
		$('.container').removeClass('viewing');

		if (windowpos >= $('#about').offset().top) {
			$('#about').addClass('viewing');
		}
		if (windowpos >= $('#portfolio').offset().top) {
			$('#portfolio').addClass('viewing');
		}
		if (windowpos >= $('#resume').offset().top) {
			$('#skills').addClass('viewing');
		}
		if (windowpos >= $('#experience').offset().top) {
			$('#contact').addClass('viewing');
		}

	});


});

$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
}