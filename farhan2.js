/*
$('#oncl').click(function() {

	var a=$('#string').val();
	var b=$('#faltu').val();
	var c=$('#pic').val();


	$.post('test1.php',{c:a,d:b,pic:c},function(data) {

		$('#feed').html(data);
	}).error(function() {

		$('#mes').text('error');
	});
});
*/
$(document).ready(function() {

		var a=$('#name').text();
		var b=$('#email').text();
		//var c=$('#school').text();
		var d=$('#faltu').text();
		$('#animate').hide();

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
		if(a==='')
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

		//$('#slms').slidenotice('you have clicked the button!!');
		$('#animate').show();
		var j=-1;
		$(':input').each(function() {

			var i=$(this).next().next().attr('id');
			if($(this).val()==='')
			{
				$('#animate').hide();
				$(this).parent().addClass('has-error has-feedback');
				$(this).next().addClass('glyphicon glyphicon-remove form-control-feedback');
				$('#'+i).html('<small><i>oops!! can\'t be left blank</i></small>');
			}
			else
			{
				j=j+1;
			}

		});
			if(j==4)
			{
					var a=$('#name').val();
					var b=$('#email').val();
					var c=$('#school').val();
					var d=$('#faltu').val();
					//alert(a);

				$.post('test1.php',{a1:a,b1:b,c1:c,d1:d},function(data) {

					var e=data;
					
					if(e == 2)
					{
						$('#animate').hide();
						slidenotice('You have successfully registered!!!');
					}
					else if(e == 1)
					{
						$('#animate').hide();
						$('#email2').addClass('has-error has-feedback');
				$('#email1').addClass('glyphicon glyphicon-remove form-control-feedback');
						$('#em').html('<small><i>not a valid email address</i></small>');

					}
					else if (e == 3) 
						{
							$('#animate').hide();
							slidenotice('error in registration');
						}
					
				}).error(function() {
					$('#animate').hide();
					slidenotice('fatal error');
				});
			}
			

		

			
	});




});
