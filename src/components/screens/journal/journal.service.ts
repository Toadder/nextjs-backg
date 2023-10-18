import { compareByDate } from '@/utils/data/compareByDate'

import client from '@/config/apollo/client'
import { GET_JOURNAL_DATA } from '@/config/apollo/queries/get-journal-data'

import { ARTICLES_TO_LOAD } from './journal.constant'
import {
	IJournalData,
	IJournalGetDataResponse,
	IJournalNode
} from './journal.interface'

class JournalService {
	async getData(
		articleCursor: string | null = null,
		eventCursor: string | null = null
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
		const isNextArticlesExist: boolean = hasArticleNextPage
			? hasArticleNextPage
			: includedArticlesQty < ARTICLES_TO_LOAD && hasArticleNextPage

		const includedEventsQty: number = ARTICLES_TO_LOAD - includedArticlesQty
		const isNextEventsExist: boolean = hasEventNextPage
			? hasEventNextPage
			: includedEventsQty < ARTICLES_TO_LOAD && hasEventNextPage

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
}

export default new JournalService()
