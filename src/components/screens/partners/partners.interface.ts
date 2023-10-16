import {
	Partner,
	Partner_Acfpartnerfields as PartnerAcfSettings
} from '@/shared/types/grahpql.types'

export interface IPartnersNode {
	id: Partner['id']
	acfPartnerFields: Partner['acfPartnerFields']
}

export interface IPartnersData extends Array<IPartner> {}

export interface IPartners {
	title: string
	partners: IPartnersData
}

export interface IPartner {
	id: Partner['id']
	image: PartnerAcfSettings['image']
	content: PartnerAcfSettings['content']
}
