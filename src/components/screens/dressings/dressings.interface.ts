import {
	Dressing,
	Dressing_Acfdressingfields as DressingAcfSettings
} from '@/shared/types/grahpql.types'
import { ApolloError } from '@apollo/client'

export interface IDressingsGetDataResponse {
	error: ApolloError | undefined
	dressingsData: IDressingsData
}

export interface IDressingsNode {
	id: Dressing['id']
	slug: Dressing['slug']
	acfDressingFields: Dressing['acfDressingFields']
}

export interface IDressingsData extends Array<IDressingsItem> {}

export interface IDressings {
	items: IDressingsData
}

export interface IDressingsItem {
	itemIndex: number
	id: Dressing['id']
	slug: Dressing['slug']
	title: DressingAcfSettings['maintitle']
	content: DressingAcfSettings['maincontent']
	slider: DressingAcfSettings['mainslider']
}

export interface IDressingsContent {
	title: DressingAcfSettings['maintitle']
	content: DressingAcfSettings['maincontent']
}

export interface IDressingsSlider {
	itemIndex: number
	id: Dressing['id']
	slider: DressingAcfSettings['mainslider']
}
