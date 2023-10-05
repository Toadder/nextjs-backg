import {
	Partner,
	Partner_Acfpartnerfields
} from '@/shared/types/grahpql.types';

export interface IPartnersNode
	extends Pick<Partner, 'id' | 'acfPartnerFields'> {}

export interface IPartnersData extends Array<IPartner> {}

export interface IPartners {
	title: string;
	partners: IPartnersData;
}

export interface IPartner {
	id: Partner['id'];
	image: Partner_Acfpartnerfields['image'];
	content: Partner_Acfpartnerfields['content'];
}
