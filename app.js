/*Burger Menu*/
document
	.querySelector('.burger-wrapper')
	.addEventListener('click', function () {
		document.querySelector('.header__burger').classList.toggle('open');
		document.querySelector('.header__menu').classList.toggle('open');
	});

document.querySelector('.header__menu').addEventListener('click', function (e) {
	console.log(e.target.classList.value);
	if (
		e.target.classList.value !== 'menu__list' &&
		document.querySelector('.header__burger').classList.contains('open')
	) {
		document.querySelector('.header__burger').classList.remove('open');
		document.querySelector('.header__menu').classList.remove('open');
	}
});
