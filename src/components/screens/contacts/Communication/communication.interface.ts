import {
	GeneralSettings_Acfsettings,
	Page_Acfcontactsfields
} from '@/shared/types/grahpql.types';

export interface ICommunicationData
	extends Pick<Page_Acfcontactsfields, 'socialtitle' | 'communitytitle'>,
		Pick<
			GeneralSettings_Acfsettings,
			| 'address'
			| 'addresslink'
			| 'email'
			| 'instagramchannel'
			| 'phone'
			| 'telegram'
			| 'whatsapp'
			| 'tgchannel'
			| 'vkgroup'
		> {}

export interface ICommunicationMain
	extends Pick<
		GeneralSettings_Acfsettings,
		'phone' | 'email' | 'address' | 'telegram' | 'whatsapp'
	> {
	title: Page_Acfcontactsfields['socialtitle'];
	addressLink: GeneralSettings_Acfsettings['addresslink'];
}

export interface ICommunicationGroups {
	title: Page_Acfcontactsfields['communitytitle'];
	vkGroup: GeneralSettings_Acfsettings['vkgroup'];
	tgChannel: GeneralSettings_Acfsettings['tgchannel'];
	instagramChannel: GeneralSettings_Acfsettings['tgchannel'];
}
