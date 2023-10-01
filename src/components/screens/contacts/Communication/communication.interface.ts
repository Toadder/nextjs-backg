import {
	GeneralSettings_Acfsettings,
	Page_Acfcontactsfields
} from '@/shared/types/grahpql.types';

export interface ICommunicationData
	extends Pick<
			Page_Acfcontactsfields,
			'issocialhidden' | 'socialtitle' | 'iscommunityhidden' | 'communitytitle'
		>,
		Pick<
			GeneralSettings_Acfsettings,
			| 'address'
			| 'addresslink'
			| 'email'
			| 'instagramchannel'
			| 'phone'
			| 'youtube'
			| 'tgchannel'
			| 'vkgroup'
		> {}

export interface ICommunicationMain
	extends Pick<
		GeneralSettings_Acfsettings,
		'phone' | 'email' | 'address' | 'youtube' | 'telegram' | 'whatsapp'
	> {
	isBlockHidden: Page_Acfcontactsfields['issocialhidden']; 
	title: Page_Acfcontactsfields['socialtitle'];
	addressLink: GeneralSettings_Acfsettings['addresslink'];
}

export interface ICommunicationGroups {
	isBlockHidden: Page_Acfcontactsfields['iscommunityhidden'];
	title: Page_Acfcontactsfields['communitytitle'];
	vkGroup: GeneralSettings_Acfsettings['vkgroup'];
	tgChannel: GeneralSettings_Acfsettings['tgchannel'];
	instagramChannel: GeneralSettings_Acfsettings['tgchannel'];
}
