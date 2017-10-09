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

	//zadanie 2
		var buttons=document.querySelectorAll('.read-more');
		console.log(buttons);
		console.log(buttons[0].previousElementSibling);
		
			function showHide() {
				var textArea = this.previousElementSibling;
				if (textArea.style.display === 'none' || textArea.style.display === '') {
	      		textArea.style.display = 'block';
	      		this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
	      	} else {
	      		textArea.style.display = 'none';
	        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
	      }
	    	};
		for (var i = 0; i <= buttons.length-1; i++) {
        console.log(buttons[0]);
        buttons[i].addEventListener('click', showHide);
    	}
    });




