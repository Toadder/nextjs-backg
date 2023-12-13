import { ApolloError } from '@apollo/client'

import {
	Page,
	Page_Acfpricefields as PriceAcfSettings
} from '@/shared/types/grahpql.types'

export interface IPriceGetDataResponse {
	error: ApolloError | undefined
	priceData: IPriceData
}

export interface IPriceData
	extends Pick<Page, 'content'>,
		Pick<PriceAcfSettings, 'pricetitle' | 'priceimage' | 'pricefile'> {}

export interface IPrice {
	title: PriceAcfSettings['pricetitle']
	content: Page['content']
	image: PriceAcfSettings['priceimage']
	file: PriceAcfSettings['pricefile']
}

export interface IPriceIntro {
	title: PriceAcfSettings['pricetitle']
	image: PriceAcfSettings['priceimage']
}

export interface IPriceContent {
	content: Page['content']
	file: PriceAcfSettings['pricefile']
}
