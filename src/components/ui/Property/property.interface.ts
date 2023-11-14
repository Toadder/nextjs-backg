import {
	Lounge_Acfloungefields_Layoutproperties as LoungeLayoutAcfSettings,
	Pavilion_Acfpavilionfields_Mainproperties as PavilionMainAcfSettings
} from '@/shared/types/grahpql.types'

export interface IProperty {
	icon: LoungeLayoutAcfSettings['icon'] | PavilionMainAcfSettings['icon']
	title: LoungeLayoutAcfSettings['title'] | PavilionMainAcfSettings['title']
	excerpt:
		| LoungeLayoutAcfSettings['excerpt']
		| PavilionMainAcfSettings['excerpt']
	content:
		| LoungeLayoutAcfSettings['content']
		| PavilionMainAcfSettings['content']
}
