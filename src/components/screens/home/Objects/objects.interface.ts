import { DocumentNode } from 'graphql'

import { IObject } from '@/components/shared/ObjectCard/object-card.interface'
import { ApolloError } from '@apollo/client'

export type TPages = 'home' | 'lounges' | 'pavilions'

export interface IObjectsGetDataResponse {
	error: ApolloError | undefined
	isObjectsHidden: boolean 
	objectsData: IObjectsData
}

export interface IObjectsData extends Array<IObject> {}

export interface IObjectItem extends IObject {
	index: number
}

export interface IObjectsQuery {
	page: TPages
	objectsQuery: DocumentNode
}
