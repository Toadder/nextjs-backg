import { GeneralSettings_Acfsettings as AcfSettings } from '@/shared/types/grahpql.types'

import { IBecomePartner } from './BecomePartner/become-partner.interface'
import { IMessenger } from './Messenger/messenger.interface'

export interface IPopupsData
	extends Pick<AcfSettings, 'cooperationtypes' | 'cooperationdestination'> {}

export interface IPopups extends IMessenger, IBecomePartner {}
