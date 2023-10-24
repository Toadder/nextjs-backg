import { notFound } from 'next/navigation'

import client from '@/config/apollo/client'
import { GET_EVENT_DATA } from '@/config/apollo/queries/get-event-data'

import { IEventData } from './event.interface'
import { IGeneralSettings } from '@/shared/types/general.types'

class EventService {
	async getData(slug: string) {
		const { error, data } = await client.query({
			query: GET_EVENT_DATA,
			variables: { slug }
		})

		if (!data?.event) notFound()

		const eventWidget: string = data?.generalSettings?.acfSettings?.eventwidget
		const generalSettings: IGeneralSettings = data?.generalSettings?.acfSettings
		const eventData: IEventData = data?.event

		return { error, generalSettings, eventData, eventWidget }
	}
}

export default new EventService()
