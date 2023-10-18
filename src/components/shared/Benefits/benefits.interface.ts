import {
	GeneralSettings_Acfsettings as AcfSettings,
	GeneralSettings_Acfsettings_Benefits as BenefitsAcfSettings
} from '@/shared/types/grahpql.types'
import { ApolloError } from '@apollo/client'

export interface IBenefitGetDataResponse {
	error: ApolloError | undefined
	benefitsData: IBenefitData
}

export interface IBenefit {
	icon: BenefitsAcfSettings['icon']
	title: BenefitsAcfSettings['title']
	excerpt: BenefitsAcfSettings['excerpt']
	content: BenefitsAcfSettings['content']
}

export interface IBenefitData extends Pick<AcfSettings, 'isbenefitshidden'> {
	benefits: IBenefit[]
}
