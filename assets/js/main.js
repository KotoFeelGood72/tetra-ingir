


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body




$(document).ready(function ($) {
	$body = $('body');
	if(devStatus) {
		pageWidget(['index']);
		pageWidget(['contacts']);
		pageWidget(['gallery']);
		pageWidget(['policy']);
		pageWidget(['services']);
		pageWidget(['single-services']);
		getAllClasses('html', '.elements_list');
	}

});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	modal();
	burger();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
				modal()
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})



const btnSubmit = document.querySelectorAll('input[type="submit"]')
Array.from(btnSubmit).map((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		succes('.succes')
	})
})




function burgerMobile() {
	const triggerBurger = document.querySelector('.header_burger')
	const burgerPopup = document.querySelector('.burger')
	const burgerFail = document.querySelectorAll('.remove')
	
	triggerBurger.addEventListener('click', () => {
		burgerPopup.classList.add('active')
		triggerBurger.classList.add('active')
		win.style.overflow = "hidden";
	})

	Array.from(burgerFail).map((item) => {
		item.addEventListener('click', () => {
			burgerPopup.classList.remove('active')
			triggerBurger.classList.remove('active')
			win.style.overflow = "";
		})
	})

}







$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})



async function maps(street, city, size) {

	function init() {
		const geocoder = ymaps.geocode(`${street} ${city}`);
		geocoder.then(
			async function (res) {
				var myMapMobile = await new ymaps.Map('map', {
						center: res.geoObjects.get(0).geometry.getCoordinates(),
						zoom: 16,
					}, {
						searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(myMapMobile.getCenter(), {
						balloonContent: `${street} ${city}`
					}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/global/map.svg',
						iconImageSize: size,
						iconImageOffset: [-5, -38]
					});

				myMapMobile.geoObjects
					.add(myPlacemark)
				myMapMobile.behaviors.disable('scrollZoom')
			}
		);
	}
	await ymaps.ready(init);

}


const galleryBig = new Swiper('.gallery_slider', {
	spaceBetween: 10,
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},
	 loop: true,
		loopedSlides: 8
});
const galleryThumbs = new Swiper('.gallery_thumb', {
	spaceBetween: 12,
	touchRatio: 0.2,
	slideToClickedSlide: true,
	loop: true,
	loopedSlides: 8,
	breakpoints: {
		320: {
			slidesPerView: 3
		},
		768: {
			slidesPerView: 6
		},
		1024: {
			slidesPerView: 6
		},
		1200: {
			slidesPerView: 8
		}
	}
});

if(galleryBig && galleryThumbs) {
	galleryBig.controller.control = galleryThumbs;
	galleryThumbs.controller.control = galleryBig;
}


const popupSlider = new Swiper('.popup_slider', {
	navigation: {
		prevEl: '.popup_prev',
		nextEl: '.popup_next'
	}
})


function modal() {
	let popup = document.querySelectorAll('.popup')
	let btnArray = document.querySelectorAll('.trigger')
	
	btnArray.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target
			
			popup.forEach((el) => {
				isRemove(el)
				if(el.dataset.id == path) {
					console.log('Good')
					isOpen(el, slider = true)
				}
			})
			
		})
	})
	

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll('.remove')
		remove.forEach(el => {
			el.addEventListener('click', (e) => {
				isRemove(pop);
			})
		});
	})
}



function isOpen(popup, slider = false) {
	document.body.classList.add('fixed')
	popup.classList.add('active')

	if(slider) {
		popupSlider.init();
	}
}

function isRemove(popup, destroy = true) {
	popup.classList.remove('active')
	document.body.classList.remove('fixed')
}


function burger() {
	const burgerBtn = document.querySelector('.header_nav_toggle')
	const burger = document.querySelector('.burger')
	const burgerRemove = document.querySelectorAll('.remove')


	burgerBtn.addEventListener('click', function() {
		burger.classList.add('active')
	})

	burgerRemove.forEach((el) => {
		el.addEventListener('click', (e) => {
			burger.classList.remove('active')
		})
	})
}















































