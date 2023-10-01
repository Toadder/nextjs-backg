import { Lounge, Lounge_Acfloungefields } from '@/shared/types/grahpql.types';

export interface IObject extends Pick<Lounge, 'id' | 'title'> {
	link: Lounge['uri'];
	priority: Lounge_Acfloungefields['priority']; 
	image: Lounge_Acfloungefields['previewimage'];
	excerpt: Lounge_Acfloungefields['previewcontent'];
	label?: Lounge_Acfloungefields['previewlabel'];
}

export interface IObjectCard extends Omit<IObject, 'id' | 'priority'> {
	imageSizes: string;
}
