'use strict';

$(document).ready(function(){
	$('#submit').on('click', function(){
		var length = $('#length').val();
		var width = $('#width').val();
		var lengthInput = $('.lengthInput');
		var widthInput = $('.widthInput');
		var sumUp = $('.sumUp');
		var total = $('.total');
		lengthInput.text(length);
		widthInput.text(width);
		var squarefeet = (length * width);
		var squareMeters = (squarefeet * 0.09290304).toFixed(2);

		sumUp.append('<div>You entered dimensions of '+length+' feet by '+width+' feet</div>');
		total.html('<div>The area is</br>'+squarefeet+' square feet</br>'+squareMeters+' square meters</div>');


	})

})
