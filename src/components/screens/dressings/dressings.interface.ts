import {
	Dressing,
	Dressing_Acfdressingfields
} from '@/shared/types/grahpql.types';

export interface IDressingsNode
	extends Pick<Dressing, 'id' | 'slug' | 'acfDressingFields'> {}

export interface IDressingsData
	extends Array<IDressingsItem> {}

export interface IDressings {
	items: IDressingsData;
}

export interface IDressingsItem extends Pick<Dressing, 'id' | 'slug'> {
	itemIndex: number;
	title: Dressing_Acfdressingfields['maintitle'];
	content: Dressing_Acfdressingfields['maincontent'];
	slider: Dressing_Acfdressingfields['mainslider'];
}

export interface IDressingsContent {
	title: Dressing_Acfdressingfields['maintitle'];
	content: Dressing_Acfdressingfields['maincontent'];
}

export interface IDressingsSlider extends Pick<Dressing, 'id'> {
	itemIndex: number;
	slider: Dressing_Acfdressingfields['mainslider'];
}
