'use strict';
console.log('dziala');

document.addEventListener('DOMContentLoaded', function() {
   
	//zadanie 1
		var forDropdown =document.querySelector('.for-dropdown')
		console.log(forDropdown);
		var dropdown = document.querySelector('.dropdown');
		console.log(dropdown);

		forDropdown.addEventListener('mouseover', function() {
				dropdown.style.display = 'block';
		})
		forDropdown.addEventListener('mouseout', function() {
				dropdown.style.display = 'none';
		})


    });



