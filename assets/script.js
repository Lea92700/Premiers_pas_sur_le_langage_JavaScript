const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
  document.addEventListener('DOMContentLoaded', function () {
	var arrowLeft = document.querySelector('.arrow_left');
	var arrowRight = document.querySelector('.arrow_right');
  })

	function updateCounter() {
	  console.log(clickCount);
  
	  if (clickCount < 0) {
		clickCount = totalSlides - 1;
	  } else if (clickCount >= totalSlides) {
		clickCount = 0;
	  }
	
  
	arrowLeft.addEventListener('click', function () {
	  clickCount--;
	  updateCounter();
	  console.log('Clic sur la flèche gauche');
	  console.log(slides[clickCount]);
	  updateCarousel();
	});
  
	arrowRight.addEventListener('click', function () {
	  clickCount++;
	  updateCounter();
	  console.log('Clic sur la flèche droite');
	  console.log(slides[clickCount]);
	  updateCarousel();
	});
  
	function updateCarousel() {
	  document.body.innerHTML = '<article>'
		+ '<img src="' + slides[clickCount].image + '" />'
		+ '<h2>' + slides[clickCount].tagLine + '</h2>'
		+ '</article>';
	}
  
	updateCounter();
	
  };
  