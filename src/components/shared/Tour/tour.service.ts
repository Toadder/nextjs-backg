import client from '@/config/apollo/client'
import { GET_TOUR_DATA } from '@/config/apollo/queries/get-tour-data'

import { ITourData } from './tour.interface'

class TourService {
	async getData() {
		const { error, data } = await client.query({ query: GET_TOUR_DATA })
		const tourData: ITourData = data?.fields?.acfSettings
		return { error, tourData }
	}
}

export default new TourService()
