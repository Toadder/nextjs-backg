import client from '@/config/apollo/client'
import { GET_CONTACTS_DATA } from '@/config/apollo/queries/get-contacts-data'

import { ICommunicationData } from './communication.interface'

class CommunicationService {
	async getData() {
		const { error, data } = await client.query({ query: GET_CONTACTS_DATA })

		const communicationData: ICommunicationData = {
			...data?.fields?.acfContactsFields,
			...data?.socials?.acfSettings
		}

		return { error, communicationData }
	}
}

export default new CommunicationService()
