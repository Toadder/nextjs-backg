import { GeneralSettings_Acfsettings } from '@/shared/types/grahpql.types';

export interface IBookingData
	extends Pick<
		GeneralSettings_Acfsettings,
		'bookingtitle' | 'bookingcontent' | 'bookingfile' | 'isbookinghidden'
	> {}
