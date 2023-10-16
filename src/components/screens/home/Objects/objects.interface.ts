import { DocumentNode } from 'graphql'

import { IObject } from '@/components/shared/ObjectCard/object-card.interface'

export type TPages = 'home' | 'lounges' | 'pavilions'

export interface IObjectsData extends Array<IObject> {}

export interface IObjectItem extends IObject {
	index: number
}

export interface IObjectsQuery {
	page: TPages
	objectsQuery: DocumentNode
}
