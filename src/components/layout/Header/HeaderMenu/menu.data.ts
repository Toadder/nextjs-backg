import { IHeaderItem } from './menu.interface';

export const menuItems: IHeaderItem[] = [
	{
		name: 'Главная',
		path: '/'
	},
	{
		name: 'Залы',
		path: '/#',
		items: [
			{
				name: 'Подкаст',
				path: '/lounges/podcast'
			},
			{
				name: 'Зал неон',
				path: '/lounges/neon'
			},
			{
				name: 'Кухня',
				path: '/lounges/kuhnya'
			},
			{
				name: 'Зал 2',
				path: '/lounges/zal-2'
			},
			{
				name: 'Гостиная',
				path: '/lounges/gostinaya'
			}
		]
	},
	{
		name: 'Павильоны',
		path: '/#',
		items: [
			{
				name: 'Большая циклорама',
				path: '/pavilions/big-cycle'
			},
			{
				name: 'Средняя циклорама',
				path: '/pavilions/cycle'
			}
		]
	},
	{
		name: 'Журнал',
		path: '/journal'
	},
	{
		name: 'Продакшн',
		path: 'https://pro.backg.ru'
	},
	{
		name: 'Техника',
		path: '/equipment'
	},
	{
		name: 'Контакты',
		path: '/contacts'
	}
];
