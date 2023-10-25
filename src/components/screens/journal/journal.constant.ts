import { IArticleFilter } from './journal.interface'

export const ARTICLES_TO_LOAD: number = 18 

export const ARTICLES_FILTER_VALUES = ['all', 'articles', 'events'] as const

export const ARTICLES_FILTERS: IArticleFilter[] = [
	{
		label: 'Все',
		value: 'all'
	},
	{
		label: 'Статьи',
		value: 'articles'
	},
	{
		label: 'Мероприятия',
		value: 'events'
	}
]
