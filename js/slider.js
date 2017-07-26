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

function prev() {
	newSlide = sliderInt - 1;
	showSlide(newSlide);
}
function next() {
	newSlide = sliderInt + 1;
	showSlide(newSlide);
}

function stopLoop() {
	window.clearInterval(loop);

}

function showSlide(id) {
	stopLoop();
	if(id > count) {
			id = 1;
			
		} else if(id<1) {
			id = count;
		};

		// Fade out one, fade in next.

		$('#slider > img').fadeOut(300);
		$('#slider > img#' + id).fadeIn(300);

		sliderInt = id;
		sliderNext = id + 1;
		startSlider();
}

$("#slider > img").hover(
	function() {
		stopLoop();
	},
	function() {
		startSlider();
	}
)