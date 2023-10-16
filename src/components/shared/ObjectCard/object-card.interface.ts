import {
	Lounge,
	Lounge_Acfloungefields as LoungeAcfSettings
} from '@/shared/types/grahpql.types'

export interface IObject {
	id: Lounge['id']
	title: Lounge['title']
	link: Lounge['uri']
	priority: LoungeAcfSettings['priority']
	image: LoungeAcfSettings['previewimage']
	excerpt: LoungeAcfSettings['previewcontent']
	label?: LoungeAcfSettings['previewlabel']
	hiddenOn: LoungeAcfSettings['hiddenon']
}

export interface IObjectCard
	extends Omit<IObject, 'id' | 'priority' | 'hiddenOn'> {
	imageSizes: string
	isImagePreloaded?: boolean
}
