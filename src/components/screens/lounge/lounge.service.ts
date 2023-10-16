import { notFound } from 'next/navigation'

import client from '@/config/apollo/client'
import { GET_LOUNGE_DATA } from '@/config/apollo/queries/get-lounge-data'

import { ILoungeData } from './lounge.interface'

class LoungeService {
	async getData(slug: string) {
		const { error, data } = await client.query({
			query: GET_LOUNGE_DATA,
			variables: { slug }
		})

		if (!data?.lounge) notFound()

		const loungeData: ILoungeData = data?.lounge?.acfLoungeFields
		return { error, loungeData }
	}
}

export default new LoungeService()
