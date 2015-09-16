$(document).ready(function() {

	$('.img-thumbnail').hover(function() {

		$(this).addClass('high');
	}).mouseleave(function() {

		$(this).removeClass('high');
	});
});