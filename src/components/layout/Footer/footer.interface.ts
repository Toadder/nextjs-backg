import { GeneralSettings_Acfsettings } from '@/shared/types/grahpql.types';

export interface IFooterData
	extends Pick<
		GeneralSettings_Acfsettings,
		| 'address'
		| 'addresslink'
		| 'documents'
		| 'email'
		| 'footertext'
		| 'mapcoordinates'
		| 'telegram'
		| 'whatsapp'
	> {}

export interface IFooterContent
	extends Pick<
		GeneralSettings_Acfsettings,
		'email' | 'telegram' | 'whatsapp' | 'documents'
	> {
	text: GeneralSettings_Acfsettings['footertext'];
}

export interface IFooterMap extends Pick<GeneralSettings_Acfsettings, 'address' > {
	coordinates: GeneralSettings_Acfsettings['mapcoordinates'];
}
