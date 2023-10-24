import { ApolloError } from '@apollo/client'

import { IJournalCard } from '@/components/shared/JournalCard/journal-card.interface'

import { Event, Journal } from '@/shared/types/grahpql.types'

import { ARTICLES_FILTER_VALUES } from './journal.constant'

// =>> CONSTANTS <<=
export type TFilterValue = (typeof ARTICLES_FILTER_VALUES)[number]

export type TCertainFilterValue = Exclude<TFilterValue, 'all'>

export interface IArticleFilter {
	label: string
	value: TFilterValue
}
// =>> /CONSTANTS <<=

// =>> SERVICES <<=
export interface IJournalGetDataResponse {
	error: ApolloError | undefined
	items: IJournalNode[]
	articleCursor: string | null
	eventCursor: string | null
	isNextArticlesExist: boolean
	isNextEventsExist: boolean
}
// =>> /SERVICES <<=

interface IPageInfo {
	hasNextPage: boolean
	endCursor: string | null
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
	articleCursor: string | null
	eventCursor: string | null
	isNextArticlesExist: boolean
	isNextEventsExist: boolean
}

export interface IJournalFilters {
	currentFilter: TFilterValue
	updateFilterData: (value: TFilterValue) => void
}

export interface IJournalGrid {
	articles: IJournalNode[]
}

export interface IJournalItem
	extends Omit<IJournalCard, 'imageSizes' | 'isImagePreloaded' | 'size'> {
	index: number
	masonryHeight: number
}

export interface IJournalLoadMore {
	isDisabled: boolean
	isNextArticles: boolean
	isNextEvents: boolean
}

export interface IJournalLoadFilter {
	isActive: boolean
}