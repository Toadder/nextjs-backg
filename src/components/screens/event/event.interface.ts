import { ApolloError } from '@apollo/client'

import { IGeneralSettings } from '@/shared/types/general.types'
import {
	GeneralSettings_Acfsettings as AcfSettings,
	Event,
	Event_Acfeventdata as EventAcfSettings,
	Event_Acfeventdata_Themesitems as EventThemesAcfSettings,
	Event_Acfeventdata_Waitingitems as EventWaitingAcfSettings
} from '@/shared/types/grahpql.types'

export interface IEventGetDataResponse {
	error: ApolloError | undefined
	generalSettings: IGeneralSettings
	eventData: IEventData
	eventWidget: string
}

export interface IEventData extends Event {}

export interface IEventIntro {
	isBlockHidden: EventAcfSettings['isintrohidden']
	title: Event['title']
	subtitle: EventAcfSettings['introsubtitle']
	dateTime: EventAcfSettings['introdate']
	city: EventAcfSettings['introcity']
	videoId: EventAcfSettings['introvideo']
}

export interface IEventContent {
	isBlockHidden: EventAcfSettings['iscontenthidden']
	content: EventAcfSettings['contentinner']
}

export interface IEventWaiting {
	isBlockHidden: EventAcfSettings['iswaitinghidden']
	title: EventAcfSettings['waitingtitle']
	items: EventAcfSettings['waitingitems']
}

export interface IEventWaitingItem {
	icon: EventWaitingAcfSettings['icon']
	text: EventWaitingAcfSettings['content']
}

export interface IEventSpeaker {
	isBlockHidden: EventAcfSettings['isspeakerhidden']
	title: EventAcfSettings['speakertitle']
	image: EventAcfSettings['speakerimage']
	content: EventAcfSettings['speakercontent']
}

export interface IEventThemes {
	isBlockHidden: EventAcfSettings['isthemeshidden']
	title: EventAcfSettings['themestitle']
	items: EventAcfSettings['themesitems']
	eventWidget: string
}

export interface IEventThemesItem {
	time: EventThemesAcfSettings['time']
	text: EventThemesAcfSettings['content']
}

export interface IEventPlace {
	isBlockHidden: EventAcfSettings['isplacehidden']
	title: EventAcfSettings['placetitle']
	place: EventAcfSettings['placeobject']
	slider: EventAcfSettings['placeslider']
	address: AcfSettings['address']
	addressLink: AcfSettings['addresslink']
	eventWidget: string
}

export interface IEventPlaceSlider {
	slider: EventAcfSettings['placeslider']
}

export interface IEventExamples {
	isBlockHidden: EventAcfSettings['isexampleshidden']
	title: EventAcfSettings['examplestitle']
	items: EventAcfSettings['examplesitems']
}

export interface IEventExamplesGrid {
	items: EventAcfSettings['examplesitems']
}
