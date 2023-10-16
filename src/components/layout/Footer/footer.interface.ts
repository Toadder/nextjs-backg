import { GeneralSettings_Acfsettings as AcfSettings } from '@/shared/types/grahpql.types';

export interface IFooterData
	extends Pick<
		AcfSettings,
		| 'address'
		| 'addresslink'
		| 'documents'
		| 'email'
		| 'footertext'
		| 'mapcoordinates'
		| 'telegram'
		| 'whatsapp'
	> {}

export interface IFooterContent {
	text: AcfSettings['footertext'];
	email: AcfSettings['email'];
	telegram: AcfSettings['telegram'];
	whatsapp: AcfSettings['whatsapp'];
	documents: AcfSettings['documents'];
}

export interface IFooterMap {
	address: AcfSettings['address'];
	coordinates: AcfSettings['mapcoordinates'];
}
