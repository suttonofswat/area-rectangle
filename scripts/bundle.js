(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
	$('#submit').on('click', function () {
		var length = $('#length').val();
		var width = $('#width').val();
		var lengthInput = $('.lengthInput');
		var widthInput = $('.widthInput');
		var sumUp = $('.sumUp');
		var total = $('.total');
		lengthInput.text(length);
		widthInput.text(width);
		var squarefeet = length * width;
		var squareMeters = (squarefeet * 0.09290304).toFixed(2);

		sumUp.append('<div>You entered dimensions of ' + length + ' feet by ' + width + ' feet</div>');
		total.html('<div>The area is</br>' + squarefeet + ' square feet</br>' + squareMeters + ' square meters</div>');
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map