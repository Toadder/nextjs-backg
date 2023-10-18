import client from '@/config/apollo/client'
import { GET_PARTNERS_DATA } from '@/config/apollo/queries/get-partners-data'

import {
	IPartnersData,
	IPartnersGetDataResponse,
	IPartnersNode
} from './partners.interface'

class PartnersService {
	async getData(): Promise<IPartnersGetDataResponse> {
		const { error, data } = await client.query({ query: GET_PARTNERS_DATA })

		const title: string = data?.fields?.acfPartnersFields?.title || ''
		const partners: IPartnersData = data?.partners?.edges?.map(
			({ node }: { node: IPartnersNode }) => ({
				id: node?.id,
				content: node?.acfPartnerFields?.content,
				image: node?.acfPartnerFields?.image
			})
		)

		return { error, title, partners }
	}
}

export default new PartnersService()
