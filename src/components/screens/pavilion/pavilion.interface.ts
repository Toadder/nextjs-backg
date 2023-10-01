import { IGeneralSettings } from '@/shared/types/general.types';
import {
	Pavilion,
	Pavilion_Acfpavilionfields,
	Pavilion_Acfpavilionfields_Rates
} from '@/shared/types/grahpql.types';

export interface IPavilionData
	extends Pick<
		Pavilion_Acfpavilionfields,
		'isbenefithidden'
		| 'benefitslider'
		| 'ismainhidden'
		| 'maintitle'
		| 'maincontent'
		| 'mainslider'
		| 'mainlayout'
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
	isBlockHidden: Pavilion_Acfpavilionfields['isbenefithidden'];
	benefitSlider: Pavilion_Acfpavilionfields['benefitslider'];
}

export interface IPavilionMain extends Pick<IGeneralSettings, 'phone' | 'whatsapp'> {
	isBlockHidden: Pavilion_Acfpavilionfields['ismainhidden']; 
	title: Pavilion_Acfpavilionfields['maintitle'];
	content: Pavilion_Acfpavilionfields['maincontent'];
	slider: Pavilion_Acfpavilionfields['mainslider'];
	layout: Pavilion_Acfpavilionfields['mainlayout'];
}

export interface IPavilionMainMedia {
	slider: Pavilion_Acfpavilionfields['mainslider'];
	layout: Pavilion_Acfpavilionfields['mainlayout'];
}

export interface IPavilionMainSlider {
	slider: Pavilion_Acfpavilionfields['mainslider'];
}

export interface IPavilionMainContent extends Pick<IGeneralSettings, 'phone' | 'whatsapp'> {
	title: Pavilion_Acfpavilionfields['maintitle'];
	content: Pavilion_Acfpavilionfields['maincontent'];
}

export interface IPavilionEquipment {
	isBlockHidden: Pavilion_Acfpavilionfields['isequipmenthidden'];
	title: Pavilion_Acfpavilionfields['titleequipment'];
	equipmentItems: Pavilion_Acfpavilionfields['equipment'];
}

export interface IPavilionRates
	extends Pick<Pavilion_Acfpavilionfields, 'rates'>,
		Pick<IGeneralSettings, 'phone'> {
	isBlockHidden: Pavilion_Acfpavilionfields['israteshidden']; 
	title: Pavilion_Acfpavilionfields['titlerates'];
	content: Pavilion_Acfpavilionfields['contentrates'];
}

export interface IPavilionRate
	extends Pick<
		Pavilion_Acfpavilionfields_Rates,
		'name' | 'time' | 'price' | 'unit' | 'properties' | 'content' | 'label'
	> {}
