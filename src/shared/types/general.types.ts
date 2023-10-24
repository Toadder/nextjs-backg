import {
	GeneralSettings_Acfsettings as AcfSettings,
	Comment
} from './grahpql.types'

export interface IGeneralSettings
	extends Pick<AcfSettings, 'phone' | 'bookingfile' | 'address'| 'addresslink'> {}

export interface IComment
	extends Pick<Comment, 'id' | 'date' | 'content' | 'author'> {}
