/*Burger Menu*/
document
	.querySelector('.burger-wrapper')
	.addEventListener('click', function () {
		document.querySelector('.header__burger').classList.toggle('open');
		document.querySelector('.header__menu').classList.toggle('open');
	});

document.querySelector('body').addEventListener('click', function (e) {
	if (
		e.target.classList.value !== 'header__burger header-burger open' &&
		document.querySelector('.header__burger').classList.contains('open')
	) {
		document.querySelector('.header__burger').classList.remove('open');
		document.querySelector('.header__menu').classList.remove('open');
	}
});
