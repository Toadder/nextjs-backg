import { notFound } from 'next/navigation'

import { IGeneralSettings } from '@/shared/types/general.types'

import client from '@/config/apollo/client'
import { GET_PAVILION_DATA } from '@/config/apollo/queries/get-pavilion-data'

import { IPavilionData } from './pavilion.interface'

class PavilionService {
	async getData(slug: string) {
		const { error, data } = await client.query({
			query: GET_PAVILION_DATA,
			variables: { slug }
		})

		if (!data?.pavilion) notFound()

		const generalSettings: IGeneralSettings = data?.generalSettings?.acfSettings
		const pavilionData: IPavilionData = data?.pavilion?.acfPavilionFields
		return { error, generalSettings, pavilionData }
	}
}

export default new PavilionService()
