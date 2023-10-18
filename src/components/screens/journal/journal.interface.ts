import { IJournalCard } from '@/components/shared/JournalCard/journal-card.interface'

import { Event, Journal } from '@/shared/types/grahpql.types'
import { ApolloError } from '@apollo/client'

interface IPageInfo {
	hasNextPage: boolean
}

export interface IJournalGetDataResponse {
	error: ApolloError | undefined,
	items: IJournalNode[],
	articleCursor: string | null,
	eventCursor: string | null,
	isNextArticlesExist: boolean,
	isNextEventsExist: boolean
}

export interface IJournalNode {
	node: Journal | Event
	cursor: string
}

export interface IJournalData {
	edges: IJournalNode[]
	pageInfo: IPageInfo
}

export interface IJournal {
	items: IJournalNode[]
	articleCursor: string | null,
	eventCursor: string | null,
	isNextArticlesExist: boolean,
	isNextEventsExist: boolean
}

export interface IJournalGrid {
	articles: IJournalNode[]
}

export interface IJournalItem
	extends Omit<IJournalCard, 'imageSizes' | 'isImagePreloaded' | 'size'> {
	index: number
	masonryHeight: number
}
