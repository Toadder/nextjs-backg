import { Lounge, Lounge_Acfloungefields } from '@/shared/types/grahpql.types';

export interface IObject extends Pick<Lounge, 'id' | 'title'> {
	link: Lounge['uri'];
	image: Lounge_Acfloungefields['previewimage'];
	excerpt: Lounge_Acfloungefields['previewcontent'];
	label?: Lounge_Acfloungefields['previewlabel'];
}

export interface IObjectCard extends Omit<IObject, 'id'> {
	imageSizes: string;
}
