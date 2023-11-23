import { IGeneralSettings } from '@/shared/types/general.types'

import client from '@/config/apollo/client'
import { GET_CONDITIONS_DATA } from '@/config/apollo/queries/get-conditions-data'

import {
	IConditionsData,
	IConditionsGetDataResponse
} from '@/components/screens/conditions/conditions.interface'

class ConditionsService {
	async getData(): Promise<IConditionsGetDataResponse> {
		const { error, data } = await client.query({ query: GET_CONDITIONS_DATA })
		const generalSettings: IGeneralSettings = data?.generalSettings?.acfSettings
		const conditionsData: IConditionsData = data?.page
		return { error, generalSettings, conditionsData }
	}
}

export default new ConditionsService()
