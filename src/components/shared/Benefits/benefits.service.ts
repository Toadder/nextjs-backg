import client from '@/config/apollo/client'
import { GET_BENEFITS_DATA } from '@/config/apollo/queries/get-benefits-data'

import { IBenefitData } from './benefits.interface'

class BenefitsService {
	async getData() {
		const { error, data } = await client.query({ query: GET_BENEFITS_DATA })
		const benefitsData: IBenefitData = data?.fields?.acfSettings
		return { error, benefitsData }
	}
}

export default new BenefitsService()
