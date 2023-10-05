import { IGeneralSettings } from '@/shared/types/general.types';
import {
	Lounge_Acfloungefields,
	Lounge_Acfloungefields_Layoutproperties
} from '@/shared/types/grahpql.types';

export interface ILoungeData
	extends Pick<
		Lounge_Acfloungefields,
		| 'isintrohidden'
		| 'introslider'
		| 'isexamplehidden'
		| 'exampleslider'
		| 'ismainhidden'
		| 'maintitle'
		| 'maincontent'
		| 'mainvideomp4'
		| 'mainvideowebm'
		| 'islayouthidden'
		| 'layout'
		| 'layoutcontent'
		| 'layoutproperties'
		| 'issimilarloungeshidden'
		| 'titlesimilarlounges'
		| 'similarlounges'
		| 'isiframehidden'
		| 'iframeclass'
		| 'iframesrc'
		| 'iframestyles'
	> {}

export interface ILoungeIntroSlider {
	isBlockHidden: Lounge_Acfloungefields['isintrohidden'];
	introSlider: Lounge_Acfloungefields['introslider'];
}

export interface ILoungeMain
	extends Pick<Lounge_Acfloungefields, 'layout'> {
	isMainHidden: Lounge_Acfloungefields['ismainhidden'];
	title: Lounge_Acfloungefields['maintitle'];
	mainContent: Lounge_Acfloungefields['maincontent'];
	videoMp4: Lounge_Acfloungefields['mainvideomp4'];
	videoWebm: Lounge_Acfloungefields['mainvideowebm'];
	isLayoutHidden: Lounge_Acfloungefields['islayouthidden'];
	layoutContent: Lounge_Acfloungefields['layoutcontent'];
	properties: Lounge_Acfloungefields['layoutproperties'];
}

export interface ILoungeTop {
	isBlockHidden: Lounge_Acfloungefields['ismainhidden'];
	title: Lounge_Acfloungefields['maintitle'];
	content: Lounge_Acfloungefields['maincontent'];
	videoMp4: Lounge_Acfloungefields['mainvideomp4'];
	videoWebm: Lounge_Acfloungefields['mainvideowebm'];
}

export interface ILoungeBottom extends Pick<Lounge_Acfloungefields, 'layout'> {
	isBlockHidden: Lounge_Acfloungefields['islayouthidden'];
	content: Lounge_Acfloungefields['layoutcontent'];
	properties: Lounge_Acfloungefields['layoutproperties'];
}

export interface ILoungeProperty
	extends Pick<
		Lounge_Acfloungefields_Layoutproperties,
		'icon' | 'title' | 'excerpt' | 'content'
	> {}

export interface ILoungeExampleSlider {
	isBlockHidden: Lounge_Acfloungefields['isexamplehidden'];
	exampleSlider: Lounge_Acfloungefields['exampleslider'];
}
