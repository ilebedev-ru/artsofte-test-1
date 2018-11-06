'use scrict';

(function() {
	var serviceCarouselArea = document.querySelector('.service__carousel-area');
	var serviceCarouselList = serviceCarouselArea.querySelector('.service__list');
	var serviceBtnPrev = document.querySelector('.service__button--left');
	var serviceBtnNext = document.querySelector('.service__button--right'); 

	var serviceItems = serviceCarouselArea.querySelectorAll('.service__item');
	
	var carouselWindowWidth = serviceCarouselArea.offsetWidth;

	var carouselAllWidth = 0;
	Array.prototype.forEach.call(serviceItems, function(items) {
		carouselAllWidth += items.offsetWidth + Number(getComputedStyle(items).marginRight.slice(0, -2));
	});

	var carouselItemWidth = carouselAllWidth / serviceItems.length + 5;

	currentPositionLeft = -carouselItemWidth;
	serviceCarouselList.style.left = currentPositionLeft + 'px';

	var changePosition = function(current, num) {
		if (current < num) {
			var moveCarousel = setInterval(function() {
 				current += 20;
 				serviceCarouselList.style.left = current + 'px';

 				if (current === num) {
 					clearInterval(moveCarousel)
 				}
 			}, 10);
		} else {
			var moveCarousel = setInterval(function() {
 				current -= 20;
 				serviceCarouselList.style.left = current + 'px';

 				if (current === num) {
 					clearInterval(moveCarousel)
 				}
 			}, 10);
		}
	};

	serviceBtnPrev.addEventListener('click', function() {
		changePosition(currentPositionLeft, currentPositionLeft + carouselItemWidth);
		currentPositionLeft += carouselItemWidth;

		if (currentPositionLeft === 0) {
			serviceBtnPrev.disabled = true;
			serviceBtnPrev.style.opacity = 0.2;
		}

		serviceBtnNext.disabled = false
		serviceBtnNext.style.opacity = 1;
	});


	serviceBtnNext.addEventListener('click', function() {
		changePosition(currentPositionLeft, currentPositionLeft + -carouselItemWidth);
		currentPositionLeft += -carouselItemWidth;

		console.log(carouselWindowWidth);
		console.log(currentPositionLeft + -carouselWindowWidth);

		if (currentPositionLeft + -carouselWindowWidth <= -carouselAllWidth) {
			serviceBtnNext.disabled = true;
			serviceBtnNext.style.opacity = 0.2;
		}

		serviceBtnPrev.disabled = false;
		serviceBtnPrev.style.opacity = 1;
	});
})();