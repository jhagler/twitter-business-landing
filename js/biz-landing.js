		function fixDiv() {
		  	var $cta = $('#cta-bar'); 
		  	if ($(window).scrollTop() > 395) 
		    	$cta.css({'position': 'fixed', 'top': 40}); 
		  	else
		   	 	$cta.css({'position': 'static', 'top': 'auto'});
		}

			$(window).scroll(fixDiv);
			fixDiv();


