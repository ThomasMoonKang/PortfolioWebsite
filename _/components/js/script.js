$(document).ready(function(){

	$('.section-link').click(function(){
		$('#'+$(this).html().toLowerCase()).scrollView();
	});

	var nav = $('#navigation');

	$(window).on('scroll', function(e) {
		console.log($(window).scrollTop());

		var windowpos = $(window).scrollTop();
		var windowHeight = $( window ).height() - 180;

		//Navbar changing
		if(windowpos >= 100) {
			nav.addClass('scrolled');
			$('.layout').addClass('loose');
		} else {
			$('.layout').removeClass('loose');
			nav.removeClass('scrolled');
		}
		//Container header highlighting
		$('.container:not(.animated)').removeClass('animate');
		if (windowpos >= $('#about').offset().top - windowHeight) {
			$('#about').addClass('animate animated');
		}
		if (windowpos >= $('#portfolio').offset().top - windowHeight) {
			$('#portfolio').addClass('animate animated');
		}
		if (windowpos >= $('#skills').offset().top - windowHeight) {
			$('#skills').addClass('animate animated');
		}
		if (windowpos >= $('#contact').offset().top - windowHeight) {
			$('#contact').addClass('animate animated');
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