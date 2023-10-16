import { IComment } from '@/shared/types/general.types'
import {
	CommentConnectionPageInfo,
	Journal,
	Journal_Acfjournaldata as JournalAcfSettings
} from '@/shared/types/grahpql.types'

import { IJournalData } from '../journal/journal.interface'

export interface IArticleData
	extends Pick<
		Journal,
		'id' | 'databaseId' | 'title' | 'date' | 'content' | 'acfJournalData'
	> {
	comments: {
		nodes: Array<IComment>
		pageInfo: CommentConnectionPageInfo
	}
}

export interface IArticleMain {
	title: Journal['title']
	date: Journal['date']
	content: Journal['content']
	slider: JournalAcfSettings['mainslider']
}

export interface IArticleMainSlider {
	title: Journal['title']
	date: Journal['date']
	slider: JournalAcfSettings['mainslider']
}

export interface IArticleMainContent {
	content: Journal['content']
}

export interface IArticleComments {
	slug: string
	postId: Journal['databaseId']
	comments: Array<IComment>
	hasNextPage: boolean
	endCursor: string | null
}

export interface IArticleCommentsForm {
	postId: Journal['databaseId']
}

export interface IArticleCommentsItems {
	slug: string
	comments: Array<IComment>
	hasNextPage: boolean
	endCursor: string | null
}

export interface IArticleCommentsItem {
	author: IComment['author']
	content: IComment['content']
	date: IComment['date']
}

export interface IArticleItems {
	currentId: Journal['id']
	articles: IJournalData
}
