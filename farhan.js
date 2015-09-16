/*
$(window).load(
	function() {
		alert('hsbf');
	// body...
});
var count=$('#contain').find('*').length;
alert(count); 
$('#click').click(
	function(){
		alert('clicked');
	}
	);
	*/
	$(document).ready(function()
	{
		$('table tr:even').addClass('highlight');
		$('table tr:odd').addClass('high');

	});

	$(document).ready(function()
		{
			$('#file').change(function()
			{
				$(this).next().removeAttr('disabled');
			}

				).next().attr('disabled','disable');

			$('#hide').click(function()
				{
					$('#hided').hide();
				});

			$('#fm').submit(function()
		{
			var ab =  $('#name').val();
			$('#sub').html('thanks,' + ab + 'you have been signed in!!');
		});

		});	

	$('#text').keyup(function(){               //keydown

		var a=$('#text').val();
		$('#here').html(a);

	});

//toggle
	$('#toggled').toggle(function() {


	$('#tog').html('yes');
}



	,function() {

		$('#tog').html('no');
	});


$('#h').hover(function(){

	$('#hv').html('this is example of hover');
});

/* $('a').mouseenter(function(){
										//using mouse leave and moseneter
	$(this).addClass('bold');
}).mouseleave(function() {
	$(this).removeClass('bold');
}); 

$('a').bind('mouseenter mouseleave',function() {               //bind takes two parameters

	$(this).toggleClass('bold');
});
*/

$(document).ready(function() {

	var max=40;
	$('#textfeed').html('you have maximum ' + max + ' characters remaining');

	$('#tarea').keyup(function() {

		var r=$('#tarea').val().length;
		var re=max-r;
		$('#textfeed').html('you have maximum ' + re + ' characters remaining');
	});
});

$('#hss').toggle(function() {

	$('#hss').text('show');

}
,function() {

	$('#hss').text('hide');

	});

/*  $('.hoh').mousemove(function(e) {

	$('#hover').html('X' + e.clientX + 'Y:' + e.clientY);
});
*/


$('.hoh').mousemove(function(e) {

	var far=$(this).attr('hovertext');
	$('#hover').text(far).show();
	$('#hover').css('top',e.clientY+550).css('left',e.clientX+10);

}).mouseleave(function() {

	$('#hover').hide();
});


$(document).ready(function() {

	$('#check').change(function() {

		state=$(this).attr('value');
		alert(state);
		if (state=='on') 
			
				{$('#press').removeAttr('disabled');}
			
		else if(state=='')
		
			{$('#press').attr('disabled','disabled');}
		
	});

});

 /*$(document).ready(function() {

	$('#sld').slideDown(slow);
	$('#ok').click(function() {

		$('#sld').slideUp(3000);
	});
});*/



	function movediv() 
	{
	    wh=$(window).height();
		ww=$(window).width();
		oh=$('#vcent').height();
		ow=$('#vcent').width();
		$('#vcent').css('top',(wh/2)-(oh/2)).css('left',(ww/2)-(ow/2));
		
	}

	movediv();
	$(window).resize(function() {

		movediv();
	});


$('#sld').slideDown(slow);
	$('#ok').click(function() {

		$('#sld').slideUp(3000);
	});


$(document).ready(function() {          //not working

	$('#min').focus(function() {

		alert('bn');
	});
});
	
$('#slider').html('bdjbsjb');

