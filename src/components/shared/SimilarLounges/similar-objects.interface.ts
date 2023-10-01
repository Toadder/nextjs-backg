import {
	Lounge_Acfloungefields,
	Pavilion_Acfpavilionfields
} from '@/shared/types/grahpql.types';

export interface ISimilarObjects {
	isBlockHidden:
		| Lounge_Acfloungefields['issimilarloungeshidden']
		| Pavilion_Acfpavilionfields['issimilarloungeshidden'];
	title:
		| Lounge_Acfloungefields['titlesimilarlounges']
		| Pavilion_Acfpavilionfields['titleequipment'];
	similarObjects:
		| Lounge_Acfloungefields['similarlounges']
		| Pavilion_Acfpavilionfields['similarlounges'];
}
