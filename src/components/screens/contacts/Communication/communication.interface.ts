import {
	GeneralSettings_Acfsettings as AcfSettings,
	Page_Acfcontactsfields as ContactsAcfSettings
} from '@/shared/types/grahpql.types'

export interface ICommunicationData
	extends Pick<
			ContactsAcfSettings,
			'issocialhidden' | 'socialtitle' | 'iscommunityhidden' | 'communitytitle'
		>,
		Pick<
			AcfSettings,
			| 'address'
			| 'addresslink'
			| 'email'
			| 'instagramchannel'
			| 'phone'
			| 'youtube'
			| 'tgchannel'
			| 'vkgroup'
		> {}

export interface ICommunicationMain {
	phone: AcfSettings['phone']
	email: AcfSettings['email']
	address: AcfSettings['address']
	youtube: AcfSettings['youtube']
	addressLink: AcfSettings['addresslink']
	isBlockHidden: ContactsAcfSettings['issocialhidden']
	title: ContactsAcfSettings['socialtitle']
}

export interface ICommunicationGroups {
	vkGroup: AcfSettings['vkgroup']
	tgChannel: AcfSettings['tgchannel']
	instagramChannel: AcfSettings['tgchannel']
	isBlockHidden: ContactsAcfSettings['iscommunityhidden']
	title: ContactsAcfSettings['communitytitle']
}
