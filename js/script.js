new Swiper('.slider__container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	}
});
//console.log();

//плавный выезд мобильного меню и закрытие
const headerRow = document.querySelector('.header-row');
//const hamburger = document.querySelector('.hamburger')
document.querySelector(".hamburger__menu__container").addEventListener('click', () => {
	document.querySelectorAll('.hamburger-line').forEach((el) => { el.classList.add('hamburger-line-cross') });
	document.querySelector('.body').classList.add('no-scroll')
	headerRow.classList.add('header-row-active')
})

document.querySelector('.navigation__content').addEventListener('click', () => {
	document.querySelectorAll('.hamburger-line').forEach((el) => { el.classList.remove('hamburger-line-cross') });
	document.querySelector('.body').classList.remove('no-scroll')
	headerRow.classList.remove('header-row-active')
})

//стрелка вверх
const arrowUp = document.querySelector('.arrow-up__container')


window.onscroll = () => {

	if (window.pageYOffset > 1000) {
		arrowUp.classList.remove("hidden");
	} else {
		arrowUp.classList.add("hidden")
	}
}