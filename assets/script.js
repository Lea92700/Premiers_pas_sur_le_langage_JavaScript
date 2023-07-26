// JavaScript
const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et événements</span>"
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
	const banner = document.getElementById("banner");
	const bannerImg = banner.querySelector('.banner-img');
	const bannerTagLine = banner.querySelector('p');
	const arrowLeft = document.querySelector('.arrow_left');
	const arrowRight = document.querySelector('.arrow_right');
  
	var totalSlides = slides.length;
	var clickCount = 0;
  
	function updateCounter() {
	  console.log(clickCount);
	  if (clickCount < 0) {
		clickCount = totalSlides - 1;
	  } else if (clickCount >= totalSlides) {
		clickCount = 0;
	  }
	}
  
	arrowLeft.addEventListener('click', function () {
	  clickCount--;
	  updateCounter();
	  console.log('Clic sur la flèche gauche');
	  updateBannerContent();
	  updateDots();
	});
  
	arrowRight.addEventListener('click', function () {
	  clickCount++;
	  updateCounter();
	  console.log('Clic sur la flèche droite');
	  updateBannerContent();
	  updateDots();
	});
  
	function updateBannerContent() {
	  bannerImg.src = "./assets/images/slideshow/" + slides[clickCount].image;
	  bannerTagLine.innerHTML = slides[clickCount].tagLine;
	}
  
	updateBannerContent();
  
	function updateDots() {
	  let dots = document.querySelectorAll(".dots .dot");
	  for (let i = 0; i < totalSlides; i++) {
		dots[i].classList.remove("dot_selected");
	  }
	  dots[clickCount].classList.add("dot_selected");
	}
  
	updateDots();
  });
  