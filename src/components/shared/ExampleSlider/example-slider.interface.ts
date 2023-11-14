import { Lounge_Acfloungefields as LoungeAcfSettings, Pavilion_Acfpavilionfields as PavilionAcfSettings } from '@/shared/types/grahpql.types'

export interface IExampleSlider {
	isBlockHidden: LoungeAcfSettings['isexamplehidden'] | PavilionAcfSettings['isexamplehidden']
	exampleSlider: LoungeAcfSettings['exampleslider'] | PavilionAcfSettings['exampleslider']
}
