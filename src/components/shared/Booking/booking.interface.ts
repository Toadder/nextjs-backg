import { GeneralSettings_Acfsettings as AcfSettings } from '@/shared/types/grahpql.types'
import { ApolloError } from '@apollo/client'

export interface IBookingGetDataResponse {
	error: ApolloError | undefined
	bookingData: IBookingData
}

export interface IBookingData
	extends Pick<
		AcfSettings,
		'bookingtitle' | 'bookingcontent' | 'bookingfile' | 'isbookinghidden'
	> {}
