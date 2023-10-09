import {
	GeneralSettings_Acfsettings,
	GeneralSettings_Acfsettings_Benefits
} from '@/shared/types/grahpql.types';

export interface IBenefit
	extends Pick<
		GeneralSettings_Acfsettings_Benefits,
		'icon' | 'title' | 'excerpt' | 'content'
	> {}

export interface IBenefitData
	extends Pick<GeneralSettings_Acfsettings, 'isbenefitshidden'> {
	benefits: IBenefit[];
}
