'use scrict';

(function() {
	var menubutton = document.querySelector(".upline__button");
	var menu = document.querySelector(".upline__list");

	menubutton.addEventListener("click", function (evt) {
	    evt.preventDefault();

	    menubutton.classList.toggle("is-active");
	    menu.classList.toggle("upline__list--close");
	});
})();