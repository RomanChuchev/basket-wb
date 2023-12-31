export const basketData = [
	{
		id: 1,
		alias: 't-shirt',
		name: 'Футболка UZcotton мужская',
		img: './assets/images/t-shirt.png',
		missingImg: './assets/images/missing-t-shirt.png',
		characters: ['Цвет: белый', 'Размер: 56'],
		company: 'ООО Вайлдберриз',
		location: 'Коледино WB',
		price: 1051,
		sale: 50.3,
		checked: true,
		count: 1,
		remains: 3,
		favourites: false,
		ogrn: 5167746237148,
		address:
			'129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34',
	},
	{
		id: 2,
		alias: 'case',
		name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
		img: './assets/images/case.png',
		missingImg: './assets/images/missing-case.png',
		characters: ['Цвет: прозрачный'],
		company: 'OOO Мегапрофстиль',
		location: 'Коледино WB',
		price: 11500.78,
		sale: 8.7,
		checked: true,
		count: 200,
		remains: 300,
		favourites: false,
		ogrn: 5167746237148,
		address:
			'129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34',
	},
	{
		id: 3,
		alias: 'pencils',
		name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber‑Castell',
		img: './assets/images/pencils.png',
		missingImg: './assets/images/missing-pencils.png',
		characters: [],
		company: 'ООО Вайлдберриз',
		location: 'Коледино WB',
		price: 475,
		sale: 48,
		checked: true,
		count: 2,
		remains: 4,
		favourites: false,
		ogrn: 5167746237148,
		address:
			'129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34',
	},
];

export const missingData = [
	{
		id: 1,
		name: 'Футболка UZcotton мужская',
		img: './assets/images/missing-t-shirt.png',
		characters: ['Цвет: белый', 'Размер: 56'],
		favourites: false,
	},
	{
		id: 2,
		name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
		img: './assets/images/missing-case.png',
		characters: ['Цвет: прозрачный'],
		favourites: false,
	},
	{
		id: 3,
		name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
		img: './assets/images/missing-pencils.png',
		characters: [],
		favourites: false,
	},
];

export const payMethodsList = [
	{
		id: 0,
		img: './assets/icons/mir-pay.svg',
		cardNumber: '1234 56•• •••• 1234',
		checked: true,
	},
	{
		id: 1,
		img: './assets/icons/visa.svg',
		cardNumber: '1234 56•• •••• 1234',
		checked: false,
	},
	{
		id: 2,
		img: './assets/icons/master-card.svg',
		cardNumber: '1234 56•• •••• 1234',
		checked: false,
	},
	{
		id: 3,
		img: './assets/icons/maestro.svg',
		cardNumber: '1234 56•• •••• 1234',
		checked: false,
	},
];

export const deliveryList = [
	{
		id: 0,
		address: 'Бишкек, улица Табышалиева, 57',
		checked: true,
		delivery: 'courier',
	},
	{
		id: 1,
		address: 'Бишкек, улица Жукеева-Пудовкина, 77/1',
		checked: false,
		delivery: 'courier',
	},
	{
		id: 2,
		address: 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1',
		checked: false,
		delivery: 'courier',
	},
	{
		id: 3,
		address: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
		checked: true,
		rate: '4.97',
		delivery: 'pick-up',
	},
	{
		id: 4,
		address: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
		checked: false,
		rate: '4.92',
		delivery: 'pick-up',
	},
	{
		id: 5,
		address: 'г. Бишкек, улица Табышалиева, д. 57',
		checked: false,
		rate: '4.99',
		delivery: 'pick-up',
	},
];
