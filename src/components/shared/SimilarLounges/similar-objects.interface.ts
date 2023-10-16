import {
	Lounge_Acfloungefields as LoungeAcfSettings,
	Pavilion_Acfpavilionfields as PavilionAcfSettings
} from '@/shared/types/grahpql.types'

export interface ISimilarObjects {
	isBlockHidden:
		| LoungeAcfSettings['issimilarloungeshidden']
		| PavilionAcfSettings['issimilarloungeshidden']
	title:
		| LoungeAcfSettings['titlesimilarlounges']
		| PavilionAcfSettings['titleequipment']
	similarObjects:
		| LoungeAcfSettings['similarlounges']
		| PavilionAcfSettings['similarlounges']
}
