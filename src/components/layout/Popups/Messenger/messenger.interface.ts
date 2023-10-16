import { GeneralSettings_Acfsettings as AcfSettings } from '@/shared/types/grahpql.types'

export interface IMessenger {
	whatsapp: AcfSettings['whatsapp']
	telegram: AcfSettings['telegram']
}
