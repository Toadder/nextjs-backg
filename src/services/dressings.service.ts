import client from '@/config/apollo/client'
import { GET_DRESSINGS_DATA } from '@/config/apollo/queries/get-dressings-data'

import {
	IDressingsData,
	IDressingsGetDataResponse,
	IDressingsItem,
	IDressingsNode
} from '@/components/screens/dressings/dressings.interface'

class DressingsService {
	async getData(): Promise<IDressingsGetDataResponse> {
		const { error, data } = await client.query({ query: GET_DRESSINGS_DATA })
		const dressingsData: IDressingsData = data?.dressings?.edges?.map(
			({ node }: { node: IDressingsNode }, index: number): IDressingsItem => ({
				id: node?.id,
				slug: node?.slug,
				title: node?.acfDressingFields?.maintitle,
				content: node?.acfDressingFields?.maincontent,
				slider: node?.acfDressingFields?.mainslider,
				itemIndex: index
			})
		)
		return { error, dressingsData }
	}
}

export default new DressingsService()
