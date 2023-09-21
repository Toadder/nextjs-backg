import { GeneralSettings_Acfsettings, Comment } from './grahpql.types';

export interface IGeneralSettings
	extends Pick<
		GeneralSettings_Acfsettings,
		'phone' | 'whatsapp' | 'bookingfile'
	> {}

export interface IComment extends Pick<Comment, 'id' | 'date' | 'content' | 'author'> {}