import { GeneralSettings_Acfsettings as AcfSettings } from '@/shared/types/grahpql.types'

export interface IBookingData
	extends Pick<
		AcfSettings,
		'bookingtitle' | 'bookingcontent' | 'bookingfile' | 'isbookinghidden'
	> {}
