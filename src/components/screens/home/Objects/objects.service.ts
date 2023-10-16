import { DocumentNode } from 'graphql'

import { IObject } from '@/components/shared/ObjectCard/object-card.interface'

import { Dressing, Lounge, Pavilion } from '@/shared/types/grahpql.types'

import { compareByPriority } from '@/utils/data/compareByPriority'
import { parseToObjectType } from '@/utils/data/parseToObjectType'

import client from '@/config/apollo/client'

import { IObjectsData, TPages } from './objects.interface'

class ObjectsService {
	async getData(query: DocumentNode, page: TPages) {
		const { error, data } = await client.query({ query })

		const isObjectsHidden: boolean =
			data?.fields?.acfPageFields?.isobjectshidden

		const lounges: IObject[] =
			data?.lounges?.edges?.map(({ node }: { node: Lounge }) =>
				parseToObjectType(node)
			) || []

		const pavilions: IObject[] =
			data?.pavilions?.edges?.map(({ node }: { node: Pavilion }) =>
				parseToObjectType(node)
			) || []

		const dressings: IObject[] =
			data?.dressings?.edges?.map(({ node }: { node: Dressing }) =>
				parseToObjectType(node)
			) || []

		const objectsData: IObjectsData = [...lounges, ...pavilions, ...dressings]
			.filter(obj => !obj.hiddenOn?.includes(page))
			.sort(compareByPriority)

		return { error, isObjectsHidden, objectsData }
	}
}

export default new ObjectsService()
