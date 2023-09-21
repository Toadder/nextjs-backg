import { MediaSize, Settings } from './grahpql.types';

export interface IAllSettings extends Pick<Settings, 'generalSettingsTitle'> {}

export interface IFavicon
	extends Array<Pick<MediaSize, 'sourceUrl' | 'width'>> {}

export interface INextContext {
	params: {
		slug?: string;
	};
	searchParams: {
		[key: string]: string;
	};
}
