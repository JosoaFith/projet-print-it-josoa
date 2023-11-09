const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector('#banner .arrow_left'),
		arrowRight = document.querySelector('#banner .arrow_right');
let index = 0;
let slideTime = null;



//***************************** Dots *****************************
for(let slide of slides) {
	document.querySelector('.dots').insertAdjacentHTML('beforeend', `<div class="dot"></div>`);
}
const dots = document.querySelectorAll('.dot');
dots[index].classList.add('dot_selected');
const resetDots = () => {
	for(let dot of dots) {
		dot.classList.remove('dot_selected');
	}
}

// *********************** Dots event click *********************
dots.forEach((dot, i) => {
	dots[i].addEventListener('click', (e) => {
		index = i;
		slideIndex();
		slideChange();
	})
});

// ********************** Arrows event click ********************
arrowLeft.addEventListener('click', (e) => {
	index -= 1;
	slideIndex();
	slideChange();
});
arrowRight.addEventListener('click', (e) => {
	index += 1;
	slideIndex();
	slideChange();
});


//////////////////////////// FONCTIONS /////////////////////////
const slideIndex = () => {
	if(index === slides.length) {
		index = 0;
	} else if (index < 0) {
		index = slides.length - 1;
	}
}

const slideChange = () => {
	document.querySelector('.banner-img').setAttribute('src', `./assets/images/slideshow/${slides[index].image}`);
	document.querySelector('#banner p').innerHTML = slides[index].tagLine;
	resetDots();
	dots[index].classList.add('dot_selected');
	if(slideTime) {
		clearTimeout(slideTime);
	}
	slideTime = setTimeout(slideTimeOut, 7000);
}

const slideTimeOut = () => {
	index += 1;
	slideIndex();
	slideChange();
}

setTimeout(slideTimeOut, 7000);