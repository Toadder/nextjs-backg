import { GeneralSettings_Acfsettings } from '@/shared/types/grahpql.types'

export interface IMessenger extends Pick<GeneralSettings_Acfsettings, 'whatsapp' | 'telegram'> {}