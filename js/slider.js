// Create two vars for initial image and next image number.

sliderInt = 1;
sliderNext = 2;

// Open document and fade in first image

$(document).ready(function() {
	$("#slider > img#1").fadeIn(300);
	startSlider();
});



function startSlider() {

// Count number of images
	
	count = $('#slider > img').length;

	loop = setInterval(function() {

		// If next image count is greater than total count above, start over.

		if(sliderNext > count) {
			sliderNext = 1;
			sliderInt = 1;
		}

		// Fade out one, fade in next.

		$('#slider > img').fadeOut(300);
		$('#slider > img#' + sliderNext).fadeIn(300);

		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;
	}, 3000);

};