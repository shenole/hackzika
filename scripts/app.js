// Navigation 

var navIcon = document.querySelector('#burger-nav');
var navMenu = document.querySelector('.nav-div');

navIcon.addEventListener('click', function(){
	navMenu.classList.toggle('open');
});