import { GeneralSettings_Acfsettings as AcfSettings } from '@/shared/types/grahpql.types'
import { ApolloError } from '@apollo/client'

export interface ITourGetDataResponse {
	error: ApolloError | undefined
	tourData: ITourData
}

export interface ITourData
	extends Pick<AcfSettings, 'istourhidden' | 'tourtitle' | 'tourimage'> {}
