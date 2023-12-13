import {
	IPriceData,
	IPriceGetDataResponse
} from '@/components/screens/price/price.interface'

import client from '@/config/apollo/client'
import { GET_PRICE_DATA } from '@/config/apollo/queries/get-price-data'

class PriceService {
	async getData(): Promise<IPriceGetDataResponse> {
		const { error, data } = await client.query({ query: GET_PRICE_DATA })

		const priceData: IPriceData = {
			content: data?.fields?.content,
			...data?.fields?.acfPriceFields
		}

		return { error, priceData }
	}
}

export default new PriceService()
