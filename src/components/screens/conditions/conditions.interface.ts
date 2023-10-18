import { ApolloError } from '@apollo/client'

import { IGeneralSettings } from '@/shared/types/general.types'
import { Page } from '@/shared/types/grahpql.types'

export interface IConditionsGetDataResponse {
	error: ApolloError | undefined
	generalSettings: IGeneralSettings
	conditionsData: IConditionsData
}

export interface IConditionsData {
	content: Page['content']
}
