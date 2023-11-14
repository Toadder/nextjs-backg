import { ApolloError } from '@apollo/client'

import { IGeneralSettings } from '@/shared/types/general.types'
import {
	Pavilion_Acfpavilionfields as PavilionAcfSettings,
	Pavilion_Acfpavilionfields_Rates as PavilionRatesAcfSettings
} from '@/shared/types/grahpql.types'

export interface IPavilionGetDataResponse {
	error: ApolloError | undefined
	generalSettings: IGeneralSettings
	pavilionData: IPavilionData
}

export interface IPavilionData
	extends Pick<
		PavilionAcfSettings,
		| 'isbenefithidden'
		| 'benefitslider'
		| 'ismainhidden'
		| 'maintitle'
		| 'maincontent'
		| 'mainproperties'
		| 'mainslider'
		| 'mainlayout'
		| 'isexamplehidden'
		| 'exampleslider'
		| 'issimilarloungeshidden'
		| 'titlesimilarlounges'
		| 'similarlounges'
		| 'isequipmenthidden'
		| 'titleequipment'
		| 'equipment'
		| 'israteshidden'
		| 'titlerates'
		| 'contentrates'
		| 'rates'
	> {}

export interface IPavilionBenefitSlider {
	isBlockHidden: PavilionAcfSettings['isbenefithidden']
	benefitSlider: PavilionAcfSettings['benefitslider']
}

export interface IPavilionMain {
	phone: IGeneralSettings['phone']
	isBlockHidden: PavilionAcfSettings['ismainhidden']
	title: PavilionAcfSettings['maintitle']
	content: PavilionAcfSettings['maincontent']
	properties: PavilionAcfSettings['mainproperties']
	slider: PavilionAcfSettings['mainslider']
	layout: PavilionAcfSettings['mainlayout']
}

export interface IPavilionMainMedia {
	slider: PavilionAcfSettings['mainslider']
	layout: PavilionAcfSettings['mainlayout']
}

export interface IPavilionMainSlider {
	slider: PavilionAcfSettings['mainslider']
}

export interface IPavilionMainContent {
	phone: IGeneralSettings['phone']
	title: PavilionAcfSettings['maintitle']
	content: PavilionAcfSettings['maincontent']
	properties: PavilionAcfSettings['mainproperties']
}

export interface IPavilionEquipment {
	isBlockHidden: PavilionAcfSettings['isequipmenthidden']
	title: PavilionAcfSettings['titleequipment']
	equipmentItems: PavilionAcfSettings['equipment']
}

export interface IPavilionRates {
	phone: IGeneralSettings['phone']
	rates: PavilionAcfSettings['rates']
	isBlockHidden: PavilionAcfSettings['israteshidden']
	title: PavilionAcfSettings['titlerates']
	content: PavilionAcfSettings['contentrates']
}

export interface IPavilionRate {
	name: PavilionRatesAcfSettings['name']
	time: PavilionRatesAcfSettings['time']
	price: PavilionRatesAcfSettings['price']
	unit: PavilionRatesAcfSettings['unit']
	properties: PavilionRatesAcfSettings['properties']
	content: PavilionRatesAcfSettings['content']
	label: PavilionRatesAcfSettings['label']
}
