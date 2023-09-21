import {
	Lounge,
	Lounge_Acfloungefields,
	Lounge_Acfloungefields_Layoutproperties
} from '@/shared/types/grahpql.types';

export interface ILoungeData
	extends Pick<
		Lounge_Acfloungefields,
		| 'introslider'
		| 'exampleslider'
		| 'maintitle'
		| 'maincontent'
		| 'mainvideomp4'
		| 'mainvideowebm'
		| 'layout'
		| 'layoutcontent'
		| 'layoutproperties'
		| 'iframeclass'
		| 'iframesrc'
		| 'iframestyles'
	> {}

export interface ILoungeIntroSlider {
	introSlider: Lounge_Acfloungefields['introslider'];
}

export interface ILoungeMain extends Pick<Lounge_Acfloungefields, 'layout'> {
	title: Lounge_Acfloungefields['maintitle'];
	mainContent: Lounge_Acfloungefields['maincontent'];
	videoMp4: Lounge_Acfloungefields['mainvideomp4'];
	videoWebm: Lounge_Acfloungefields['mainvideowebm'];
	layoutContent: Lounge_Acfloungefields['layoutcontent'];
	properties: Lounge_Acfloungefields['layoutproperties'];
}

export interface ILoungeTop {
	title: Lounge_Acfloungefields['maintitle'];
	content: Lounge_Acfloungefields['maincontent'];
	videoMp4: Lounge_Acfloungefields['mainvideomp4'];
	videoWebm: Lounge_Acfloungefields['mainvideowebm'];
}

export interface ILoungeBottom extends Pick<Lounge_Acfloungefields, 'layout'> {
	content: Lounge_Acfloungefields['layoutcontent'];
	properties: Lounge_Acfloungefields['layoutproperties'];
}

export interface ILoungeProperty
	extends Pick<
		Lounge_Acfloungefields_Layoutproperties,
		'icon' | 'title' | 'excerpt' | 'content'
	> {}

export interface ILoungeExampleSlider {
	exampleSlider: Lounge_Acfloungefields['exampleslider'];
}
