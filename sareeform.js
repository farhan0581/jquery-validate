
$(document).ready(function() {

	

	$('.form-control').focus(function() {

		var a=$(this).val();
		var i=$(this).next().next().attr('id');
		if(a==='')
		{

			
		}
		else
		{
			$('#'+i).html('');
			$(this).parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$(this).next().removeClass('glyphicon glyphicon-remove form-control-feedback').addClass('glyphicon glyphicon-ok form-control-feedback');
		}
	   
		
	}).blur(function() {

		var a=$(this).val();
		var i=$(this).next().next().attr('id');
		var nid=$(this).attr('id');
		if(a==='' && nid!='number')
		{
			$('#animate').hide();
			$('#'+i).html('<small><i>oops!! can\'t be left blank</i></small>');
			$(this).parent().addClass('has-error has-feedback');
			$(this).next().addClass('glyphicon glyphicon-remove form-control-feedback');

		}
		else
		{
			$('#'+i).html('');
			$(this).parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$(this).next().removeClass('glyphicon glyphicon-remove form-control-feedback').addClass('glyphicon glyphicon-ok form-control-feedback');
		}
	});
	$('.form-control').keyup(function() {

		var i=$(this).next().next().attr('id');
		$('#'+i).html('');
		$(this).parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
		$(this).next().removeClass('glyphicon glyphicon-remove form-control-feedback').addClass('glyphicon glyphicon-ok form-control-feedback');

	});

	$('#oncl').click(function() {

		var j=0;
		$(':input,textarea').each(function() {

			var i=$(this).next().next().attr('id');
			var nid=$(this).attr('id');

			if($(this).val()==='' && nid!='number' && nid!='oncl')
			{
				$(this).parent().addClass('has-error has-feedback');
				$(this).next().addClass('glyphicon glyphicon-remove form-control-feedback');
				$('#'+i).html('<small><i>oops!! can\'t be left blank</i></small>');
			}
			else if($(this).val()!='' && nid!='number' && nid!='oncl')
			{
				j=j+1;
			}

		});
			if(j==3)
			{
				alert('ok');
			}
			else
			{
				alert( 'enter all fields');

			}
			

		

			
	});




});
