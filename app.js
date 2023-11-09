import {
	basketData,
	deliveryList,
	missingData,
	payMethodsList,
} from './data.js';

/*Burger Menu*/
const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger');
const burgerWrapper = document.querySelector('.burger-wrapper');

burgerWrapper.addEventListener('click', function () {
	burger.classList.toggle('open');
	menu.classList.toggle('open');
});

menu.addEventListener('click', function (e) {
	if (e.target.classList.value !== 'menu__list') {
		burger.classList.remove('open');
		menu.classList.remove('open');
	}
});

/* Create basket list */

const basketList = document.querySelector('#basket-list');

function createBasketItem(el) {
	const item = document.createElement('li');
	item.classList.add('basket__item');

	const basketInfo = createBasketInfo(el);
	const checkbox = createBasketCheckbox(el);
	const basketControls = createBasketControls(el);
	const basketPrice = createBasketPrice(el);

	item.append(checkbox, basketInfo, basketControls, basketPrice);
	return item;
}

(function addBasketItem() {
	basketData.forEach((el) => basketList.append(createBasketItem(el)));
	toggleBasketList();
})();

/* Close basket list */
function toggleBasketList() {
	const btn = document.querySelector('#toggle-basket-list');
	const basketHeight = basketList.clientHeight;
	btn.addEventListener('click', () => {
		btn.classList.toggle('toggle-arrow_close');
		basketList.classList.toggle('basket__list_close');

		if (basketList.classList.contains('basket__list_close')) {
			basketList.style.maxHeight = '0px';
		} else {
			basketList.style.maxHeight = `${basketHeight}px`;
		}
	});
}

function createBasketCheckbox(el) {
	const checkbox = document.createElement('div');
	checkbox.classList.add('checkbox');
	checkbox.classList.add('basket__checkbox');

	const label = document.createElement('label');
	label.classList.add('checkbox__label');
	label.for = `checkbox-${el.id}`;

	const input = document.createElement('input');
	input.classList.add('checkbox__real');
	input.type = 'checkbox';
	input.name = 'select-all';
	input.id = `checkbox-${el.id}`;
	input.checked = el.checked;

	const span = document.createElement('span');
	span.classList.add('checkbox__custom');

	const img = document.createElement('img');
	img.classList.add('basket__img');
	img.src = `${el.img}`;
	img.alt = `${el.alias}`;

	label.append(input, span);
	checkbox.append(label, img);

	return checkbox;
}

function createBasketInfo(el) {
	const info = document.createElement('div');
	info.classList.add('basket__info');

	const basketTitle = document.createElement('p');
	basketTitle.classList.add('basket__title');
	basketTitle.textContent = el.name;

	const basketDesc = document.createElement('p');
	if (el.characters.length) {
		basketDesc.classList.add('basket__desc');
		basketDesc.classList.add('p13');

		el.characters.forEach((elem) => {
			const item = document.createElement('span');
			item.textContent = elem;
			basketDesc.append(item);
		});
	}

	const basketCompany = document.createElement('div');
	basketCompany.classList.add('basket__company');

	const basketLocation = document.createElement('p');
	basketLocation.classList.add('basket__company-text');
	basketLocation.classList.add('p13');
	basketLocation.textContent = el.location;

	const tooltip = document.createElement('div');
	tooltip.classList.add('tooltip');

	const basketCompanyName = document.createElement('p');
	basketCompanyName.classList.add('basket__company-text');
	basketCompanyName.classList.add('p13');
	basketCompanyName.textContent = el.company;

	const tooltipIcon = document.createElement('img');
	tooltipIcon.classList.add('tooltip__icon');
	tooltipIcon.alt = 'info';
	tooltipIcon.src = './assets/icons/info.svg';

	const tooltipContainer = document.createElement('div');
	tooltipContainer.classList.add('tooltip__container');

	const tooltipHeading = document.createElement('h5');
	tooltipHeading.classList.add('tooltip__title');
	tooltipHeading.classList.add('h5');
	tooltipHeading.textContent = el.company;

	const tooltipOgrn = document.createElement('div');
	tooltipOgrn.classList.add('tooltip__text');
	tooltipOgrn.classList.add('p13');
	tooltipOgrn.textContent = `ОГРН: ${el.ogrn}`;

	const tooltipAddress = document.createElement('div');
	tooltipAddress.classList.add('tooltip__text');
	tooltipAddress.classList.add('p13');
	tooltipAddress.textContent = `ОГРН: ${el.address}`;

	tooltipContainer.append(tooltipHeading, tooltipOgrn, tooltipAddress);
	tooltip.append(basketCompanyName, tooltipIcon, tooltipContainer);
	basketCompany.append(basketLocation, tooltip);

	info.append(
		basketTitle,
		el.characters.length ? basketDesc : '',
		basketCompany
	);

	return info;
}

function createBasketControls(el) {
	const basketControls = document.createElement('div');
	basketControls.classList.add('basket-controls');

	const controlsCounter = document.createElement('div');
	controlsCounter.classList.add('basket-controls__counter');

	const controlsLeftBtn = document.createElement('button');
	controlsLeftBtn.classList.add('basket-controls__btn');
	controlsLeftBtn.textContent = '−';

	const controlsValue = document.createElement('span');
	controlsValue.classList.add('basket-controls__value');
	controlsValue.textContent = el.count;

	const controlsRightBtn = document.createElement('button');
	controlsRightBtn.classList.add('basket-controls__btn');
	controlsRightBtn.textContent = '+';

	const productsRemains = el.remains - el.count;
	const products = document.createElement('div');
	products.classList.add('basket-controls__max-products');
	products.textContent = `Осталось ${el.remains - el.count} шт.`;

	const controlsItems = document.createElement('div');
	controlsItems.classList.add('basket-controls__items');
	controlsItems.innerHTML = `
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule='evenodd'
						clip-rule="evenodd"
						d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z"
						fill="black"
					/>
			</svg>

			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
					fill="black"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
					fill="black"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
					fill="black"
				/>
			</svg>`;

	controlsCounter.append(controlsLeftBtn, controlsValue, controlsRightBtn);
	basketControls.append(
		controlsCounter,
		productsRemains <= 2 ? products : '',
		controlsItems
	);

	return basketControls;
}

function createBasketPrice(el) {
	const totalPrice = Math.floor(el.count * el.price);

	const discountPrice = Math.floor(
		totalPrice - ((el.price * el.sale) / 100) * el.count
	);

	const basketPrice = document.createElement('div');
	basketPrice.classList.add('basket-price');

	const priceWrapper = document.createElement('div');
	priceWrapper.classList.add('basket-price__wrapper');

	const priceValue = document.createElement('p');
	priceValue.textContent = discountPrice.toLocaleString('ru');
	priceValue.classList.add('wordSpacing');
	priceValue.classList.add(
		discountPrice.toLocaleString('ru').length > 7
			? 'basket-price__value_small'
			: 'basket-price__value'
	);

	const priceCurrency = document.createElement('span');
	priceCurrency.classList.add('basket-price__currency');
	priceCurrency.textContent = 'сом';

	const tooltip = document.createElement('div');
	tooltip.classList.add('tooltip');

	const tooltipIcon = document.createElement('span');
	tooltipIcon.classList.add('tooltip__icon');
	tooltipIcon.classList.add('basket-price__discount');
	tooltipIcon.textContent = `${totalPrice} com`;

	const tooltipContainer = document.createElement('div');
	tooltipContainer.classList.add('tooltip__container');

	const itemDiscount = document.createElement('div');
	itemDiscount.classList.add('tooltip__text');
	itemDiscount.classList.add('basket-price__tooltip-text');

	const priceDiscount = document.createElement('span');
	priceDiscount.classList.add('basket-price__sale');
	priceDiscount.textContent = `Скидка ${Math.floor(el.sale)}%`;

	const discountAmount = document.createElement('span');
	discountAmount.classList.add('wordSpacing');
	discountAmount.textContent = `−${Math.abs(
		Math.floor(discountPrice - totalPrice)
	).toLocaleString('ru')} сом`;

	const itemBuyerDiscount = document.createElement('div');
	itemBuyerDiscount.classList.add('tooltip__text');
	itemBuyerDiscount.classList.add('basket-price__tooltip-text');

	const buyerDiscount = document.createElement('span');
	buyerDiscount.textContent = 'Скидка покупателя 10%';

	const discountBuyerAmount = document.createElement('span');
	discountBuyerAmount.textContent = '−30 сом';

	itemDiscount.append(priceDiscount, discountAmount);
	itemBuyerDiscount.append(buyerDiscount, discountBuyerAmount);
	tooltipContainer.append(itemDiscount, itemBuyerDiscount);
	tooltip.append(tooltipIcon, tooltipContainer);

	priceWrapper.append(priceValue, priceCurrency);
	basketPrice.append(priceWrapper, tooltip);

	return basketPrice;
}
