import { ARTICLES_TO_LOAD } from '@/components/screens/journal/journal.constant'
import {
	IJournalData,
	IJournalGetDataResponse,
	IJournalNode,
	TFilterValue
} from '@/components/screens/journal/journal.interface'

import { compareByDate } from '@/utils/data/compareByDate'

import client from '@/config/apollo/client'
import {
	GET_ARTICLES_DATA,
	GET_EVENTS_DATA,
	GET_JOURNAL_DATA
} from '@/config/apollo/queries/get-journal-data'

class JournalService {
	async getData(
		filterType: TFilterValue,
		articleCursor: string | null = null,
		eventCursor: string | null = null
	): Promise<IJournalGetDataResponse> {
		if (filterType === 'events')
			return this.getEventsData(articleCursor, eventCursor)
		else if (filterType === 'articles')
			return this.getArticlesData(articleCursor, eventCursor)

		return this.getAllData(articleCursor, eventCursor)
	}

	private async getAllData(
		articleCursor: string | null,
		eventCursor: string | null
	): Promise<IJournalGetDataResponse> {
		const { error, data } = await client.query({
			query: GET_JOURNAL_DATA,
			variables: { take: ARTICLES_TO_LOAD, articleCursor, eventCursor }
		})

		const articlesData: IJournalData = data?.allJournal
		const eventsData: IJournalData = data?.events

		let hasArticleNextPage: boolean = articlesData?.pageInfo?.hasNextPage
		let hasEventNextPage: boolean = eventsData?.pageInfo?.hasNextPage

		let lastArticleCursor: string | null = articleCursor
		let lastEventCursor: string | null = eventCursor

		const relevantEvents: IJournalNode[] = eventsData?.edges?.filter(
			({ node }) => {
				if (node.__typename !== 'Event') return
				return node?.acfEventData?.previewstatus
			}
		)

		lastEventCursor = relevantEvents.at(-1)?.cursor || eventCursor

		// If all events are relevant
		if (relevantEvents.length === ARTICLES_TO_LOAD) {
			return {
				error,
				items: relevantEvents,
				articleCursor: lastArticleCursor,
				eventCursor: lastEventCursor,
				isNextArticlesExist: hasArticleNextPage,
				isNextEventsExist: hasEventNextPage
			}
		}

		const archivalEvents: IJournalNode[] = eventsData?.edges?.filter(
			({ node }) => {
				if (node.__typename !== 'Event') return
				return !node?.acfEventData?.previewstatus
			}
		)

		// Get remaining items sorted by date (DESC)
		const sortedItems: IJournalNode[] = [
			...archivalEvents,
			...articlesData?.edges
		]
			.sort(compareByDate)
			.slice(0, ARTICLES_TO_LOAD - relevantEvents.length)

		// Check if it's possible to load more articles and events
		const includedArticlesQty: number = sortedItems.reduce(
			(acc, { node }) => (node.__typename === 'Journal' ? acc + 1 : acc),
			0
		)
		const isNextArticlesExist: boolean =
			hasArticleNextPage || includedArticlesQty < articlesData?.edges?.length

		const includedEventsQty: number = sortedItems.length - includedArticlesQty
		const isNextEventsExist: boolean =
			hasEventNextPage || includedEventsQty < eventsData?.edges?.length

		// Find cursors of last article and event
		const lastIncludedArticle = sortedItems.findLast(
			({ node }) => node.__typename === 'Journal'
		)
		lastArticleCursor = lastIncludedArticle?.cursor || articleCursor

		const lastIncludedEvent =
			sortedItems.findLast(({ node }) => node.__typename === 'Event') ||
			relevantEvents.at(-1)
		lastEventCursor = lastIncludedEvent?.cursor || eventCursor

		return {
			error,
			isNextArticlesExist,
			isNextEventsExist,
			items: [...relevantEvents, ...sortedItems],
			articleCursor: lastArticleCursor,
			eventCursor: lastEventCursor
		}
	}

	private async getArticlesData(
		articleCursor: string | null,
		eventCursor: string | null
	): Promise<IJournalGetDataResponse> {
		const { error, data } = await client.query({
			query: GET_ARTICLES_DATA,
			variables: { take: ARTICLES_TO_LOAD, cursor: articleCursor }
		})

		const articlesData: IJournalData = data?.allJournal

		const hasNextPage: boolean = articlesData?.pageInfo?.hasNextPage
		const endCursor: string | null = articlesData?.pageInfo?.endCursor

		return {
			error,
			items: articlesData?.edges,
			isNextArticlesExist: hasNextPage,
			isNextEventsExist: false,
			articleCursor: endCursor,
			eventCursor: null
		}
	}

	private async getEventsData(
		articleCursor: string | null,
		eventCursor: string | null
	): Promise<IJournalGetDataResponse> {
		const { error, data } = await client.query({
			query: GET_EVENTS_DATA,
			variables: { take: ARTICLES_TO_LOAD, cursor: eventCursor }
		})

		const eventsData: IJournalData = data?.events

		const relevantEvents: IJournalNode[] = eventsData?.edges?.filter(
			({ node }) => {
				if (node.__typename !== 'Event') return
				return node?.acfEventData?.previewstatus
			}
		)

		const archivalEvents: IJournalNode[] = eventsData?.edges?.filter(
			({ node }) => {
				if (node.__typename !== 'Event') return
				return !node?.acfEventData?.previewstatus
			}
		)

		const sortedItems: IJournalNode[] = [...relevantEvents, ...archivalEvents]

		const hasNextPage: boolean = eventsData?.pageInfo?.hasNextPage
		const endCursor: string | null = eventsData?.pageInfo?.endCursor

		return {
			error,
			items: sortedItems,
			isNextArticlesExist: false,
			isNextEventsExist: hasNextPage,
			articleCursor: null,
			eventCursor: endCursor
		}
	}
}

export default new JournalService()
