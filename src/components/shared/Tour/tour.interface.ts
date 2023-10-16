import { GeneralSettings_Acfsettings as AcfSettings } from '@/shared/types/grahpql.types'

export interface ITourData
	extends Pick<AcfSettings, 'istourhidden' | 'tourtitle' | 'tourimage'> {}
